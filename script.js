import * as THREE from 'three';
import { buildMap } from './map.js';
import { showTooltip, hideTooltip } from './tooltip.js';

// ─── Scene ───────────────────────────────────────────────────────────────────

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const mapGroup = new THREE.Group();
mapGroup.scale.set(0.8, 0.8, 0.8);
scene.add(mapGroup);

// ─── Lighting ────────────────────────────────────────────────────────────────

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// ─── Camera ──────────────────────────────────────────────────────────────────

const sizes = { width: window.innerWidth, height: window.innerHeight };

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 2;

// ─── Renderer ────────────────────────────────────────────────────────────────

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
    needsRender = true;
});

// ─── Input ───────────────────────────────────────────────────────────────────

const mouse = { x: 0, y: 0 };
let isPaused = false;
let isMapMoveEnabled = true;
let needsRender = true;

const ZOOM_MIN = 1;
const ZOOM_MAX = 10;
const ZOOM_SPEED = 0.002;

document.addEventListener('mousemove', event => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;
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
    }
    if (event.key.toLowerCase() === 'f') {
        isPaused = !isPaused;
    }
});

// ─── Selection ───────────────────────────────────────────────────────────────

const raycaster = new THREE.Raycaster();
let selectedTractCode = null;
let allTractMap = new Map();
let allLayers = [];
let allMeshes = []; // flat list of every mesh, used for raycasting

function selectTract(tractCode, clientX, clientY) {
    selectedTractCode = tractCode;
    allTractMap.forEach((tract, code) => {
        tract.setOpacity(code === tractCode ? 1.0 : 0.05);
    });
    showTooltip(tractCode, allLayers, clientX, clientY);
    needsRender = true;
}

function clearSelection() {
    selectedTractCode = null;
    allTractMap.forEach(tract => tract.setOpacity(1.0));
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

// ─── Map ─────────────────────────────────────────────────────────────────────

let mapLoaded = false;

buildMap(mapGroup).then(({ tracts, layers }) => {
    allTractMap = tracts;
    allLayers = layers;
    allMeshes = [...tracts.values()].flatMap(t => t.allMeshes);
    mapLoaded = true;
    needsRender = true;
}).catch(err => {
    console.error('Failed to build map:', err);
});

// ─── Render loop ─────────────────────────────────────────────────────────────

const tick = () => {
    if (!isPaused && isMapMoveEnabled && mapLoaded) {
        mapGroup.rotation.y = mouse.x * Math.PI;
        mapGroup.rotation.x = mouse.y * Math.PI;
    }

    if (needsRender) {
        renderer.render(scene, camera);
        needsRender = false;
    }

    window.requestAnimationFrame(tick);
};

tick();
