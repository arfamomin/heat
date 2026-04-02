import * as THREE from 'three';

const BASE_DEPTH = 0.05;
const LAYER_GAP = 0.0000;
const SHADE_MIN_DEPTH = 0.02
const SHADE_MAX_DEPTH =0.15;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const mapGroup = new THREE.Group();
mapGroup.scale.set(0.8, 0.8, 0.8);
scene.add(mapGroup);

function getOuterRings(feature) {
    if (!feature?.geometry?.coordinates) return [];

    if (feature.geometry.type === 'Polygon') {
        return [feature.geometry.coordinates[0]];
    }

    if (feature.geometry.type === 'MultiPolygon') {
        return feature.geometry.coordinates.map(polygon => polygon[0]);
    }

    return [];
}

function getCentroid(ring) {
    if (!ring?.length) return null;

    let lon = 0;
    let lat = 0;

    ring.forEach(([x, y]) => {
        lon += x;
        lat += y;
    });

    return { lon: lon / ring.length, lat: lat / ring.length };
}

function normalizeValue(value, min, max) {
    if (!Number.isFinite(value)) return 0;
    if (max <= min) return 0;
    return (value - min) / (max - min);
}

function createShapeFromRing(ring, offsetX, offsetY, scale) {
    const shape = new THREE.Shape();

    ring.forEach(([lon, lat], index) => {
        const x = (lon - offsetX) * scale;
        const y = (lat - offsetY) * scale;

        if (index === 0) {
            shape.moveTo(x, y);
        } else {
            shape.lineTo(x, y);
        }
    });

    return shape;
}

function buildShadeByTract(shadeGeojson) {
    const tractAccumulator = new Map();

    shadeGeojson.features.forEach(feature => {
        const properties = feature.properties ?? {};
        const geoid = String(properties.GEOID ?? '');
        const value = Number(properties._bld1200);

        if (!Number.isFinite(value) || geoid.length < 11 || !geoid.startsWith('06037')) {
            return;
        }

        const tractCode = geoid.slice(5, 11);
        const current = tractAccumulator.get(tractCode) ?? { sum: 0, count: 0 };

        current.sum += value;
        current.count += 1;

        tractAccumulator.set(tractCode, current);
    });

    const averagedShade = new Map();
    tractAccumulator.forEach((entry, tractCode) => {
        averagedShade.set(tractCode, entry.sum / entry.count);
    });

    return averagedShade;
}

async function loadLACounty() {
    try {
        const [tractResponse, shadeResponse] = await Promise.all([
            fetch('data/2020_LACounty_Census_Tracts.geojson'),
            fetch('data/shade/tree_data.geojson')
        ]);

        const [tractData, shadeData] = await Promise.all([
            tractResponse.json(),
            shadeResponse.json()
        ]);

        const shadeByTract = buildShadeByTract(shadeData);

        const laCityBounds = {
            minLon: -118.685,
            maxLon: -118.155,
            minLat: 33.704,
            maxLat: 34.337
        };

        const laFeatures = tractData.features.filter(feature => {
            const [primaryRing] = getOuterRings(feature);
            const centroid = getCentroid(primaryRing);
            if (!centroid) return false;

            return centroid.lon >= laCityBounds.minLon &&
                centroid.lon <= laCityBounds.maxLon &&
                centroid.lat >= laCityBounds.minLat &&
                centroid.lat <= laCityBounds.maxLat;
        });

        const allRings = [];
        laFeatures.forEach(feature => {
            getOuterRings(feature).forEach(ring => {
                allRings.push(ring);
            });
        });

        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;

        allRings.forEach(ring => {
            ring.forEach(([x, y]) => {
                minX = Math.min(minX, x);
                maxX = Math.max(maxX, x);
                minY = Math.min(minY, y);
                maxY = Math.max(maxY, y);
            });
        });

        const scale = 2 / Math.max(maxX - minX, maxY - minY);
        const offsetX = (minX + maxX) / 2;
        const offsetY = (minY + maxY) / 2;

        const shadeValues = [];
        laFeatures.forEach(feature => {
            const tractCode = String(feature.properties?.CT20 ?? '');
            const shadeValue = shadeByTract.get(tractCode);
            if (Number.isFinite(shadeValue)) shadeValues.push(shadeValue);
        });

        const shadeMin = shadeValues.length ? Math.min(...shadeValues) : 0;
        const shadeMax = shadeValues.length ? Math.max(...shadeValues) : 1;

        const baseMaterial = new THREE.MeshPhongMaterial({
            color: 0xcccccc,
            side: THREE.DoubleSide,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1
        });

        const shadeMaterial = new THREE.MeshPhongMaterial({
            color: 0xC2EB66,
            side: THREE.DoubleSide,
            polygonOffset: true,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -2
        });

        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0.2
        });
        const shadeLineMaterial = new THREE.LineBasicMaterial({ color: 0x405b19 });

        const meshes = [];
        const lines = [];

        laFeatures.forEach(feature => {
            const tractCode = String(feature.properties?.CT20 ?? '');
            const shadeValue = shadeByTract.get(tractCode);

            getOuterRings(feature).forEach(ring => {
                const shape = createShapeFromRing(ring, offsetX, offsetY, scale);

                const baseGeometry = new THREE.ExtrudeGeometry(shape, {
                    depth: BASE_DEPTH,
                    bevelEnabled: false
                });

                const baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
                baseMesh.castShadow = true;
                baseMesh.receiveShadow = true;
                baseMesh.renderOrder = 1;
                mapGroup.add(baseMesh);

                const baseEdges = new THREE.LineSegments(
                    new THREE.EdgesGeometry(baseGeometry),
                    lineMaterial
                );
                baseEdges.renderOrder = 2;
                mapGroup.add(baseEdges);

                meshes.push(baseMesh);
                lines.push(baseEdges);

                if (Number.isFinite(shadeValue)) {
                    const t = normalizeValue(shadeValue, shadeMin, shadeMax);
                    const shadeDepth = SHADE_MIN_DEPTH + t * (SHADE_MAX_DEPTH - SHADE_MIN_DEPTH);

                    const shadeGeometry = new THREE.ExtrudeGeometry(shape, {
                        depth: shadeDepth,
                        bevelEnabled: false
                    });

                    const shadeMesh = new THREE.Mesh(shadeGeometry, shadeMaterial);
                    shadeMesh.position.z = BASE_DEPTH + LAYER_GAP;
                    shadeMesh.castShadow = true;
                    shadeMesh.receiveShadow = true;
                    shadeMesh.renderOrder = 3;
                    mapGroup.add(shadeMesh);

                    const shadeEdges = new THREE.LineSegments(
                        new THREE.EdgesGeometry(shadeGeometry),
                        shadeLineMaterial
                    );
                    shadeEdges.position.z = BASE_DEPTH + LAYER_GAP;
                    shadeEdges.renderOrder = 4;
                    mapGroup.add(shadeEdges);

                    meshes.push(shadeMesh);
                    lines.push(shadeEdges);
                }
            });
        });

        console.log('Filtered to', laFeatures.length, 'LA City tracts');
        return { meshes, lines };
    } catch (error) {
        console.error('Error loading data:', error);
        return { meshes: [], lines: [] };
    }
}

let meshes = [];
let lines = [];
let mapLoaded = false;
loadLACounty().then(result => {
    meshes = result.meshes;
    lines = result.lines;
    mapLoaded = true;
    console.log('Loaded objects:', meshes.length + lines.length);
}).catch(err => {
    console.error('Promise rejected:', err);
});

// lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// camera
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 2;

const ZOOM_MIN = 1;
const ZOOM_MAX = 10;
const ZOOM_SPEED = 0.002;

// canvas
const canvas = document.querySelector('canvas.webgl');

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    precision: 'highp',
    alpha: false
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.render(scene, camera);

// Handle window resize
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
});

// mouse interaction
const mouse = { x: 0, y: 0 };
let isPaused = false;
let isMapMoveEnabled = true;

document.addEventListener('mousemove', event => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;
});

canvas.addEventListener('wheel', event => {
    event.preventDefault();
    const nextZoom = camera.position.z + event.deltaY * ZOOM_SPEED;
    camera.position.z = THREE.MathUtils.clamp(nextZoom, ZOOM_MIN, ZOOM_MAX);
}, { passive: false });

// Pause/Resume with 'f' key
document.addEventListener('keydown', event => {
    if (event.code === 'Space' && !event.repeat) {
        event.preventDefault();
        isMapMoveEnabled = !isMapMoveEnabled;
        console.log(isMapMoveEnabled ? 'Map movement enabled' : 'Map movement disabled');
        return;
    }

    if (event.key.toLowerCase() === 'f') {
        isPaused = !isPaused;
        console.log(isPaused ? 'Paused' : 'Resumed');
    }
});

// animate
const tick = () => {
    if (!isPaused && isMapMoveEnabled && mapLoaded) {
        mapGroup.rotation.y = mouse.x * Math.PI;
        mapGroup.rotation.x = mouse.y * Math.PI;
    }

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();
