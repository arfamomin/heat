import * as THREE from 'three';
import { buildMap, BASE_DEPTH } from './map.js';
import { showTooltip, hideTooltip } from './tooltip.js';
import { initInset, updateInset } from './inset.js';
import { NeighborhoodLayer } from './layers/neighborhoods.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const mapGroup = new THREE.Group();
mapGroup.scale.set(0.8, 0.8, 0.8);
scene.add(mapGroup);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const sizes = { width: window.innerWidth, height: window.innerHeight };

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 2;

const canvas = document.querySelector('canvas.webgl');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, precision: 'highp' });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = false;

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    if (neighborhoodLayer) neighborhoodLayer.onResize(sizes.width, sizes.height);
    needsRender = true;
});

const mouse = { x: 0, y: 0 };
let isPaused = false;
let isMapMoveEnabled = true;
let needsRender = true;

const ZOOM_MIN = 1;
const ZOOM_MAX = 20;
const ZOOM_SPEED = 0.002;

let neighborhoodLayer = null;
let hoveredNeighborhood = null;
let flyingToTop = false;

function updateSpaceHint() {
    const kbd = document.querySelector('.keyhint kbd');
    if (kbd) kbd.classList.toggle('active', !isMapMoveEnabled);
}

function flyToTopDown() {
    isMapMoveEnabled = false;
    flyingToTop = true;
    updateSpaceHint();
    needsRender = true;
}

document.addEventListener('mousemove', event => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;

    if (neighborhoodLayer?.visible && mapLoaded) {
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(neighborhoodLayer.hitMeshes);
        hoveredNeighborhood = hits.length > 0 ? hits[0].object.userData.neighborhoodName : null;
    }

    needsRender = true;
});

canvas.addEventListener('wheel', event => {
    event.preventDefault();
    const next = camera.position.z + event.deltaY * ZOOM_SPEED;
    camera.position.z = THREE.MathUtils.clamp(next, ZOOM_MIN, ZOOM_MAX);
    needsRender = true;
}, { passive: false });

document.addEventListener('keydown', event => {
    if (event.code === 'Space' && !event.repeat) {
        event.preventDefault();
        isMapMoveEnabled = !isMapMoveEnabled;
        updateSpaceHint();
    }
    if (event.key.toLowerCase() === 'f') {
        isPaused = !isPaused;
    }
});

const raycaster = new THREE.Raycaster();
let selectedTractCode = null;
let allTractMap = new Map();
let allLayers = [];
let allMeshes = [];

function selectTract(tractCode, clientX, clientY) {
    selectedTractCode = tractCode;
    allTractMap.forEach((tract, code) => {
        tract.setOpacity(code === tractCode ? 1.0 : 0.02);
    });
    if (neighborhoodLayer) neighborhoodLayer.setOpacity(0.02);
    showTooltip(tractCode, allLayers, clientX, clientY);
    needsRender = true;
}

function clearSelection() {
    selectedTractCode = null;
    allTractMap.forEach(tract => tract.setOpacity(1.0));
    if (neighborhoodLayer) neighborhoodLayer.setOpacity(1.0);
    hideTooltip();
    needsRender = true;
}

canvas.addEventListener('click', event => {
    if (!mapLoaded) return;

    const rect = canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width)  *  2 - 1;
    const y = ((event.clientY - rect.top)  / rect.height) * -2 + 1;

    raycaster.setFromCamera({ x, y }, camera);
    const hits = raycaster.intersectObjects(allMeshes);

    if (hits.length === 0) {
        clearSelection();
        return;
    }

    const tractCode = hits[0].object.userData.tractCode;
    if (tractCode === selectedTractCode) {
        clearSelection();
    } else {
        selectTract(tractCode, event.clientX, event.clientY);
    }
});

let mapLoaded = false;

buildMap(mapGroup).then(async ({ tracts, layers, laFeatures, geoBounds, geoScale, geoOffset }) => {
    allTractMap = tracts;
    allLayers = layers;
    allMeshes = [...tracts.values()].flatMap(t => t.allMeshes);

    neighborhoodLayer = new NeighborhoodLayer();
    await neighborhoodLayer.load();
    neighborhoodLayer.build(mapGroup, geoScale, geoOffset, tracts, layers, BASE_DEPTH);
    allLayers.push(neighborhoodLayer);

    mapLoaded = true;
    needsRender = true;
    buildLayersPanel(allLayers);
    initInset(laFeatures, geoBounds, geoScale);
}).catch(err => {
    console.error('Failed to build map:', err);
});

function restack() {
    allTractMap.forEach((_, tractCode) => {
        let z = BASE_DEPTH;
        for (const layer of allLayers) {
            const entry = layer.tractEntries.get(tractCode);
            if (!entry) continue;
            if (layer.visible) {
                entry.meshes.forEach(m => { m.position.z = z; });
                entry.lines.forEach(l => { l.position.z = z; });
                z += entry.depth;
            }
        }
    });
    if (neighborhoodLayer) neighborhoodLayer.updateOutlineHeights(allLayers);
    needsRender = true;
}

function buildLayersPanel(layers) {
    const list = document.getElementById('layersList');
    list.innerHTML = '';

    layers.forEach((layer, index) => {
        const li = document.createElement('li');
        li.className = 'layer-item';
        li.draggable = true;
        const hex = '#' + layer.color.toString(16).padStart(6, '0');
        li.innerHTML = `
            <span class="layer-swatch${layer.visible ? '' : ' layer-swatch--off'}" style="background:${hex}" title="Toggle layer"></span>
            <span class="layer-name">${layer.name}</span>`;

        const swatch = li.querySelector('.layer-swatch');
        swatch.addEventListener('click', () => {
            const visible = !layer.visible;
            layer.setVisible(visible);
            swatch.classList.toggle('layer-swatch--off', !visible);
            restack();
            if (layer === neighborhoodLayer && visible) flyToTopDown();
            if (layer === neighborhoodLayer && !visible) { isMapMoveEnabled = true; updateSpaceHint(); }
        });

        li.addEventListener('dragstart', e => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', String(index));
            li.classList.add('dragging');
        });

        li.addEventListener('dragend', () => {
            li.classList.remove('dragging');
            list.querySelectorAll('.layer-item').forEach(el => el.classList.remove('drag-over'));
        });

        li.addEventListener('dragover', e => {
            e.preventDefault();
            list.querySelectorAll('.layer-item').forEach(el => el.classList.remove('drag-over'));
            li.classList.add('drag-over');
        });

        li.addEventListener('drop', e => {
            e.preventDefault();
            const fromIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
            const toIndex = index;
            if (fromIndex === toIndex) return;
            const [moved] = allLayers.splice(fromIndex, 1);
            allLayers.splice(toIndex, 0, moved);
            buildLayersPanel(allLayers);
            restack();
        });

        list.appendChild(li);
    });
}

const layersToggle = document.getElementById('layersToggle');
const layersList   = document.getElementById('layersList');
layersToggle.addEventListener('click', () => {
    const collapsed = layersList.classList.toggle('collapsed');
    layersToggle.textContent = collapsed ? '+' : '−';
});

const tick = () => {
    if (flyingToTop) {
        mapGroup.rotation.x += (0 - mapGroup.rotation.x) * 0.08;
        mapGroup.rotation.y += (0 - mapGroup.rotation.y) * 0.08;
        if (Math.abs(mapGroup.rotation.x) < 0.001 && Math.abs(mapGroup.rotation.y) < 0.001) {
            mapGroup.rotation.x = 0;
            mapGroup.rotation.y = 0;
            flyingToTop = false;
        }
        needsRender = true;
    } else if (!isPaused && isMapMoveEnabled && mapLoaded) {
        mapGroup.rotation.y = mouse.x * Math.PI;
        mapGroup.rotation.x = mouse.y * Math.PI;
    }

    if (needsRender) {
        renderer.render(scene, camera);
        if (neighborhoodLayer) neighborhoodLayer.updateLabels(camera, mapGroup, sizes, hoveredNeighborhood);
        updateInset(camera);
        needsRender = false;
    }

    window.requestAnimationFrame(tick);
};

tick();
