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
    restack();
    initInset(laFeatures, geoBounds, geoScale);
}).catch(err => {
    console.error('Failed to build map:', err);
});

function restack() {
    allTractMap.forEach((_, tractCode) => {
        let zAbove = BASE_DEPTH;
        let zBelow = 0;
        for (const layer of allLayers) {
            if (layer === neighborhoodLayer) continue;
            const entry = layer.tractEntries?.get(tractCode);
            if (!entry || !layer.visible) continue;
            if (layer.position === 'below') {
                zBelow -= entry.depth;
                entry.meshes.forEach(m => { m.position.z = zBelow; });
                entry.lines.forEach(l => { l.position.z = zBelow; });
            } else {
                entry.meshes.forEach(m => { m.position.z = zAbove; });
                entry.lines.forEach(l => { l.position.z = zAbove; });
                zAbove += entry.depth;
            }
        }
    });
    if (neighborhoodLayer) neighborhoodLayer.updateOutlineHeights(allLayers);
    needsRender = true;
}

let draggedLayer = null;

function buildLayersPanel(layers) {
    const body = document.getElementById('layersBody');
    body.innerHTML = '';

    const aboveLayers = layers.filter(l => l !== neighborhoodLayer && l.position === 'above');
    const belowLayers = layers.filter(l => l !== neighborhoodLayer && l.position === 'below');

    function makeLayerItem(layer, fixed = false) {
        const li = document.createElement('li');
        li.className = 'layer-item';
        if (!fixed) li.draggable = true;
        const hex = '#' + layer.color.toString(16).padStart(6, '0');
        li.innerHTML = `
            <span class="layer-swatch${layer.visible ? '' : ' layer-swatch--off'}" style="background:${hex}" title="Toggle layer"></span>
            <span class="layer-name">${layer.name}</span>`;

        li.querySelector('.layer-swatch').addEventListener('click', e => {
            e.stopPropagation();
            const visible = !layer.visible;
            layer.setVisible(visible);
            li.querySelector('.layer-swatch').classList.toggle('layer-swatch--off', !visible);
            restack();
            if (layer === neighborhoodLayer && visible) flyToTopDown();
            if (layer === neighborhoodLayer && !visible) { isMapMoveEnabled = true; updateSpaceHint(); }
        });

        if (fixed) return li;

        li.addEventListener('dragstart', e => {
            e.dataTransfer.effectAllowed = 'move';
            draggedLayer = layer;
            li.classList.add('dragging');
        });
        li.addEventListener('dragend', () => {
            draggedLayer = null;
            li.classList.remove('dragging');
            body.querySelectorAll('.layer-item, .section-list').forEach(el =>
                el.classList.remove('drag-over', 'drag-over-section'));
        });
        li.addEventListener('dragover', e => {
            e.preventDefault();
            body.querySelectorAll('.layer-item').forEach(el => el.classList.remove('drag-over'));
            if (draggedLayer !== layer) li.classList.add('drag-over');
        });
        li.addEventListener('drop', e => {
            e.preventDefault();
            e.stopPropagation();
            if (!draggedLayer || draggedLayer === layer) return;

            const toSection = layer.position;
            draggedLayer.position = toSection;

            const fromIdx = allLayers.indexOf(draggedLayer);
            const toIdx   = allLayers.indexOf(layer);
            if (fromIdx !== toIdx) {
                allLayers.splice(fromIdx, 1);
                allLayers.splice(allLayers.indexOf(layer), 0, draggedLayer);
            }
            buildLayersPanel(allLayers);
            restack();
        });

        return li;
    }

    function buildSection(sectionName, sectionLayers) {
        const label = document.createElement('div');
        label.className = 'section-label';
        label.textContent = sectionName === 'above' ? 'Above' : 'Below';
        body.appendChild(label);

        const rule = document.createElement('div');
        rule.className = 'section-rule';
        body.appendChild(rule);

        const ul = document.createElement('ul');
        ul.className = 'section-list';
        ul.dataset.section = sectionName;

        sectionLayers.forEach(layer => ul.appendChild(makeLayerItem(layer)));

        ul.addEventListener('dragover', e => {
            e.preventDefault();
            body.querySelectorAll('.layer-item').forEach(el => el.classList.remove('drag-over'));
            ul.classList.add('drag-over-section');
        });
        ul.addEventListener('dragleave', e => {
            if (!ul.contains(e.relatedTarget)) ul.classList.remove('drag-over-section');
        });
        ul.addEventListener('drop', e => {
            e.preventDefault();
            ul.classList.remove('drag-over-section');
            if (!draggedLayer || e.target !== ul) return; // item-level drops handled above
            draggedLayer.position = sectionName;
            buildLayersPanel(allLayers);
            restack();
        });

        body.appendChild(ul);
    }

    buildSection('above', aboveLayers);
    buildSection('below', belowLayers);

    // Fixed Neighborhoods row at bottom
    if (neighborhoodLayer) {
        const divider = document.createElement('div');
        divider.className = 'section-fixed-divider';
        body.appendChild(divider);

        const ul = document.createElement('ul');
        ul.className = 'section-list section-fixed';
        ul.appendChild(makeLayerItem(neighborhoodLayer, true));
        body.appendChild(ul);
    }
}

const titleStates = [
    { text: 'Reimagined',   cls: ''        },
    { text: 'Paradoxical',  cls: 'state-1' },
    { text: 'Multifaceted', cls: 'state-2' },
];
let titleIndex = 0;
const highlightEl = document.querySelector('.header-title .highlight');
highlightEl.addEventListener('mouseenter', () => {
    titleIndex = (titleIndex + 1) % titleStates.length;
    const { text, cls } = titleStates[titleIndex];
    highlightEl.textContent = text;
    highlightEl.className = 'highlight' + (cls ? ' ' + cls : '');
});

const layersToggle = document.getElementById('layersToggle');
const layersBody   = document.getElementById('layersBody');
layersToggle.addEventListener('click', () => {
    const collapsed = layersBody.classList.toggle('collapsed');
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
