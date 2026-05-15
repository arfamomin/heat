import * as THREE from 'three';
import { buildMap, BASE_DEPTH } from './map.js';
import { showTooltip, hideTooltip } from './tooltip.js';
import { initInset, updateInset } from './inset.js';
import { NeighborhoodLayer } from './layers/neighborhoods.js';
import { LedesLayer } from './layers/ledes.js';
import { initNeighborhoodsPanel } from './neighborhoods-panel.js';

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
let ledesLayer = null;
let neighborhoodsPanel = null;
let hoveredNeighborhood = null;
let tractToNbhd = null;
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
    neighborhoodsPanel?.clearSelection();
    allTractMap.forEach((tract, code) => {
        tract.setOpacity(code === tractCode ? 1.0 : 0.02);
    });
    if (neighborhoodLayer) neighborhoodLayer.setOpacity(0.02);
    ledesLayer?.setFocus(tractToNbhd?.get(tractCode) ?? null);
    showTooltip(tractCode, allLayers, clientX, clientY);
    needsRender = true;
}

function clearSelection() {
    selectedTractCode = null;
    allTractMap.forEach(tract => tract.setOpacity(1.0));
    if (neighborhoodLayer) neighborhoodLayer.setOpacity(1.0);
    ledesLayer?.setFocus(null);
    hideTooltip();
    needsRender = true;
}

function selectNeighborhoodTracts(tractCodes) {
    selectedTractCode = null;
    hideTooltip();
    allTractMap.forEach((tract, code) => {
        tract.setOpacity(tractCodes.has(code) ? 1.0 : 0.02);
    });
    if (neighborhoodLayer) neighborhoodLayer.setOpacity(0.02);
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
    neighborhoodLayer.buildIndex(tracts);
    // not pushed to allLayers — kept only for ledes spatial lookup

    ledesLayer = new LedesLayer();
    ledesLayer.build(
        mapGroup, geoScale, geoOffset, tracts,
        neighborhoodLayer._geojson,
        (x, y) => neighborhoodLayer._findTractCode(x, y),
        layers, BASE_DEPTH
    );
    ledesLayer.setVisible(false);

    mapLoaded = true;
    needsRender = true;
    buildLayersPanel(allLayers);
    restack();
    initInset(laFeatures, geoBounds, geoScale);

    const panel = await initNeighborhoodsPanel({
        laFeatures,
        onSelect: (tractCodes, name) => {
            selectNeighborhoodTracts(tractCodes);
            ledesLayer?.setFocus(name);
            needsRender = true;
        },
        onDeselect: () => {
            clearSelection();
            ledesLayer?.setFocus(null);
            needsRender = true;
        },
        onInclude: (name, included) => {
            ledesLayer?.setLedeIncluded(name, included);
            if (included && ledesLayer && !ledesLayer.visible) {
                ledesLayer.setVisible(true);
                needsRender = true;
                const swatch = document.querySelector('.section-fixed .layer-swatch');
                if (swatch) swatch.classList.remove('layer-swatch--off');
            }
        },
        isLedeIncluded:  (name) => ledesLayer?.isLedeIncluded(name) ?? false,
    });
    neighborhoodsPanel = panel;
    tractToNbhd = panel.tractToNbhd;
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
            const effectiveDepth = entry.depth * (layer.depthScale ?? 1);
            if (layer.position === 'below') {
                zBelow -= effectiveDepth;
                entry.meshes.forEach(m => { m.position.z = zBelow; });
                entry.lines.forEach(l => { l.position.z = zBelow; });
            } else {
                entry.meshes.forEach(m => { m.position.z = zAbove; });
                entry.lines.forEach(l => { l.position.z = zAbove; });
                zAbove += effectiveDepth;
            }
        }
    });
    if (neighborhoodLayer) neighborhoodLayer.updateOutlineHeights(allLayers);
    if (ledesLayer) ledesLayer.updateOutlineHeights(allLayers);
    needsRender = true;
}

let draggedLayer = null;
let activeInfoBtn = null;
let infoPopover = null;

function showLayerInfo(btn, description) {
    if (!infoPopover) {
        infoPopover = document.createElement('div');
        infoPopover.id = 'layer-info-popover';
        document.body.appendChild(infoPopover);
    }
    if (activeInfoBtn === btn) {
        btn.classList.remove('active');
        activeInfoBtn = null;
        infoPopover.style.display = 'none';
        return;
    }
    if (activeInfoBtn) activeInfoBtn.classList.remove('active');
    activeInfoBtn = btn;
    btn.classList.add('active');
    infoPopover.textContent = description;
    const panelRect = document.getElementById('layers-panel').getBoundingClientRect();
    const btnRect   = btn.getBoundingClientRect();
    infoPopover.style.display = 'block';
    infoPopover.style.left    = (panelRect.right + 10) + 'px';
    infoPopover.style.top     = btnRect.top + 'px';
}

function buildLayersPanel(layers) {
    const body = document.getElementById('layersBody');
    body.innerHTML = '';
    const scroll = document.createElement('div');
    scroll.className = 'layers-scroll';
    body.appendChild(scroll);

    // Close any open popover when panel rebuilds (layer reorder)
    if (activeInfoBtn) { activeInfoBtn.classList.remove('active'); activeInfoBtn = null; }
    if (infoPopover) infoPopover.style.display = 'none';

    const aboveLayers = layers.filter(l => l !== neighborhoodLayer && l.position === 'above');
    const belowLayers = layers.filter(l => l !== neighborhoodLayer && l.position === 'below');

    function fmtMin(v) { return Number.isFinite(v) ? Math.round(v).toLocaleString() : ''; }
    function fmtMax(v, unit) { return Number.isFinite(v) ? Math.round(v).toLocaleString() + (unit ? ' ' + unit : '') : ''; }

    function makeLayerItem(layer, fixed = false) {
        const li = document.createElement('li');
        li.className = 'layer-item';
        if (!fixed) li.draggable = true;
        const hex = '#' + layer.color.toString(16).padStart(6, '0');

        // ── main row ──────────────────────────────────────────────
        const mainRow = document.createElement('div');
        mainRow.className = 'layer-main-row';

        const swatch = document.createElement('span');
        swatch.className = 'layer-swatch' + (layer.visible ? '' : ' layer-swatch--off');
        swatch.style.background = hex;
        swatch.title = 'Toggle layer';
        swatch.addEventListener('click', e => {
            e.stopPropagation();
            const visible = !layer.visible;
            layer.setVisible(visible);
            swatch.classList.toggle('layer-swatch--off', !visible);
            restack();
            if (layer === neighborhoodLayer && visible) flyToTopDown();
            if (layer === neighborhoodLayer && !visible) { isMapMoveEnabled = true; updateSpaceHint(); }
        });
        mainRow.appendChild(swatch);

        const nameEl = document.createElement('span');
        nameEl.className = 'layer-name';
        nameEl.textContent = layer.name;
        mainRow.appendChild(nameEl);

        if (!fixed && layer.description) {
            const infoBtn = document.createElement('button');
            infoBtn.className = 'layer-info-btn';
            infoBtn.title = 'About this layer';
            infoBtn.textContent = 'i';
            infoBtn.addEventListener('click', e => {
                e.stopPropagation();
                showLayerInfo(infoBtn, layer.description);
            });
            mainRow.appendChild(infoBtn);
        }

        li.appendChild(mainRow);

        // ── slider row (data layers only) ─────────────────────────
        if (!fixed && layer.unit !== undefined && layer.dataMax > 0) {
            const collapseBtn = document.createElement('button');
            collapseBtn.className = 'layer-collapse-btn';
            collapseBtn.title = 'Toggle depth control';
            collapseBtn.innerHTML = '<svg width="10" height="7" viewBox="0 0 10 7" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            mainRow.appendChild(collapseBtn);

            const sliderRow = document.createElement('div');
            sliderRow.className = 'layer-slider-row';

            collapseBtn.classList.add('collapsed');
            sliderRow.style.display = 'none';

            collapseBtn.addEventListener('click', e => {
                e.stopPropagation();
                const collapsed = collapseBtn.classList.toggle('collapsed');
                sliderRow.style.display = collapsed ? 'none' : '';
            });

            const track = document.createElement('div');
            track.className = 'layer-track';

            const trackLine = document.createElement('div');
            trackLine.className = 'layer-track-line';
            track.appendChild(trackLine);

            trackLine.style.width = (layer.depthScale * 100) + '%';

            const handle = document.createElement('div');
            handle.className = 'layer-track-handle';
            handle.style.left = (layer.depthScale * 100) + '%';
            track.appendChild(handle);

            sliderRow.appendChild(track);

            const rangeLabels = document.createElement('div');
            rangeLabels.className = 'layer-range-labels';

            const minLabel = document.createElement('span');
            minLabel.className = 'layer-range-min';
            minLabel.textContent = fmtMin(layer.dataMin);
            rangeLabels.appendChild(minLabel);

            const maxLabel = document.createElement('span');
            maxLabel.className = 'layer-range-max';
            maxLabel.textContent = fmtMax(layer.dataMax, layer.unit);
            maxLabel.style.left = (layer.depthScale * 100) + '%';
            rangeLabels.appendChild(maxLabel);

            sliderRow.appendChild(rangeLabels);

            li.appendChild(sliderRow);

            handle.addEventListener('mousedown', e => {
                e.preventDefault();
                e.stopPropagation();
                li.draggable = false;

                const onMove = ev => {
                    const rect = track.getBoundingClientRect();
                    const fraction = Math.max(0.05, Math.min(1, (ev.clientX - rect.left) / rect.width));
                    handle.style.left = (fraction * 100) + '%';
                    trackLine.style.width = (fraction * 100) + '%';
                    maxLabel.style.left = (fraction * 100) + '%';
                    layer.setDepthScale(fraction);
                    restack();
                    needsRender = true;
                };
                const onUp = () => {
                    li.draggable = true;
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseup', onUp);
                };
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onUp);
            });
        }

        if (fixed) return li;

        // ── drag-to-reorder ───────────────────────────────────────
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
            draggedLayer.position = layer.position;
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
        scroll.appendChild(label);

        const rule = document.createElement('div');
        rule.className = 'section-rule';
        scroll.appendChild(rule);

        const ul = document.createElement('ul');
        ul.className = 'section-list';
        ul.dataset.section = sectionName;

        sectionLayers.forEach(layer => ul.appendChild(makeLayerItem(layer)));

        ul.addEventListener('dragover', e => {
            e.preventDefault();
            scroll.querySelectorAll('.layer-item').forEach(el => el.classList.remove('drag-over'));
            ul.classList.add('drag-over-section');
        });
        ul.addEventListener('dragleave', e => {
            if (!ul.contains(e.relatedTarget)) ul.classList.remove('drag-over-section');
        });
        ul.addEventListener('drop', e => {
            e.preventDefault();
            ul.classList.remove('drag-over-section');
            if (!draggedLayer || e.target !== ul) return;
            draggedLayer.position = sectionName;
            buildLayersPanel(allLayers);
            restack();
        });

        scroll.appendChild(ul);
    }

    buildSection('above', aboveLayers);
    buildSection('below', belowLayers);

    if (ledesLayer) {
        const divider = document.createElement('div');
        divider.className = 'section-fixed-divider';
        scroll.appendChild(divider);

        const ul = document.createElement('ul');
        ul.className = 'section-list section-fixed';
        ul.appendChild(makeLayerItem(ledesLayer, true));
        scroll.appendChild(ul);
    }
}

const titleStates = [
    { text: 'Reimagined',   cls: '',        color: '#C2EB66' },
    { text: 'Paradoxical',  cls: 'state-1', color: '#ff96fb' },
    { text: 'Multifaceted', cls: 'state-2', color: '#fcba03' },
];
let titleIndex = 0;
const highlightEl = document.querySelector('.header-title .highlight');
highlightEl.addEventListener('mouseenter', () => {
    titleIndex = (titleIndex + 1) % titleStates.length;
    const { text, cls, color } = titleStates[titleIndex];
    highlightEl.textContent = text;
    highlightEl.className = 'highlight' + (cls ? ' ' + cls : '');
    document.documentElement.style.setProperty('--highlight-color', color);
});

const layersToggle = document.getElementById('layersToggle');
const layersBody   = document.getElementById('layersBody');
layersBody.classList.add('collapsed');
layersToggle.textContent = '+';
const layersPanel   = document.getElementById('layers-panel');
const leftPanelsEl  = document.getElementById('left-panels');
layersToggle.addEventListener('click', () => {
    const collapsed = layersBody.classList.toggle('collapsed');
    layersToggle.textContent = collapsed ? '+' : '−';
    layersPanel.classList.toggle('panel-open', !collapsed);
    leftPanelsEl.classList.toggle('layers-open', !collapsed);
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
        if (ledesLayer) ledesLayer.updateLabels(camera, mapGroup, canvas);
        updateInset(camera);
        needsRender = false;
    }

    window.requestAnimationFrame(tick);
};

tick();
