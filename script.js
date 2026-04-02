import * as THREE from 'three';
import { buildMap } from './map.js';
import { showTooltip, hideTooltip } from './tooltip.js';

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
    needsRender = true;
});

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

const raycaster = new THREE.Raycaster();
let selectedTractCode = null;
let allTractMap = new Map();
let allLayers = [];
let allMeshes = []; // flat list of every mesh, used for raycasting

function selectTract(tractCode, clientX, clientY) {
    selectedTractCode = tractCode;
    allTractMap.forEach((tract, code) => {
        tract.setOpacity(code === tractCode ? 1.0 : 0.02);
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

let mapLoaded = false;

buildMap(mapGroup).then(({ tracts, layers }) => {
    allTractMap = tracts;
    allLayers = layers;
    allMeshes = [...tracts.values()].flatMap(t => t.allMeshes);
    mapLoaded = true;
    needsRender = true;
    buildLayersPanel(layers);
}).catch(err => {
    console.error('Failed to build map:', err);
});

function buildLayersPanel(layers) {
    const list = document.getElementById('layersList');
    layers.forEach(layer => {
        const li = document.createElement('li');
        li.className = 'layer-item';
        const hex = '#' + layer.color.toString(16).padStart(6, '0');
        li.innerHTML = `
            <span class="layer-swatch" style="background:${hex}"></span>
            <span>${layer.name}</span>`;
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
