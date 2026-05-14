import * as THREE from 'three';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';

const OUTLINE_EPSILON = 0.008;
const GRID_SIZE = 60;

function getShapeVertices(shape) {
    return shape.getPoints(); // Vector2[] — works correctly for moveTo/lineTo shapes
}

function pointInPolygon(px, py, pts) {
    let inside = false;
    const n = pts.length;
    for (let i = 0, j = n - 1; i < n; j = i++) {
        const xi = pts[i].x, yi = pts[i].y;
        const xj = pts[j].x, yj = pts[j].y;
        if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) {
            inside = !inside;
        }
    }
    return inside;
}

export class NeighborhoodLayer {
    constructor() {
        this.name = 'Neighborhoods';
        this.color = 0x111111;
        this.visible = false;
        this.tractEntries = new Map(); // empty — satisfies restack() compatibility

        this._lines = [];
        this.hitMeshes = [];
        this._labels = [];
        this._lineMaterial = null;
        this._lineData = []; // { geo, posFlat, vertexTractCodes }
        this._grid = null;
        this._gridExtent = null;
        this._tracts = null;
        this._baseDepth = 0;
    }

    async load() {
        const res = await fetch('data/la-neighborhoods/la_city.json');
        this._geojson = await res.json();
    }

    // ─── spatial index ────────────────────────────────────────────────────────

    _buildGrid(tracts) {
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        const entries = [];

        tracts.forEach((tract, tractCode) => {
            tract.shapes.forEach(shape => {
                const pts = getShapeVertices(shape);
                if (!pts.length) return;
                let bMinX = Infinity, bMaxX = -Infinity, bMinY = Infinity, bMaxY = -Infinity;
                pts.forEach(p => {
                    if (p.x < bMinX) bMinX = p.x; if (p.x > bMaxX) bMaxX = p.x;
                    if (p.y < bMinY) bMinY = p.y; if (p.y > bMaxY) bMaxY = p.y;
                    if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
                    if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y;
                });
                entries.push({ tractCode, pts, bMinX, bMaxX, bMinY, bMaxY });
            });
        });

        const rangeX = maxX - minX || 1;
        const rangeY = maxY - minY || 1;
        const grid = Array.from({ length: GRID_SIZE * GRID_SIZE }, () => []);

        entries.forEach(e => {
            const ix0 = Math.max(0, Math.floor((e.bMinX - minX) / rangeX * GRID_SIZE));
            const ix1 = Math.min(GRID_SIZE - 1, Math.ceil((e.bMaxX - minX) / rangeX * GRID_SIZE));
            const iy0 = Math.max(0, Math.floor((e.bMinY - minY) / rangeY * GRID_SIZE));
            const iy1 = Math.min(GRID_SIZE - 1, Math.ceil((e.bMaxY - minY) / rangeY * GRID_SIZE));
            for (let ix = ix0; ix <= ix1; ix++) {
                for (let iy = iy0; iy <= iy1; iy++) {
                    grid[iy * GRID_SIZE + ix].push(e);
                }
            }
        });

        this._grid = grid;
        this._gridExtent = { minX, maxX, minY, maxY, rangeX, rangeY };
    }

    _findTractCode(px, py) {
        const { minX, minY, rangeX, rangeY } = this._gridExtent;
        const ix = Math.max(0, Math.min(GRID_SIZE - 1, Math.floor((px - minX) / rangeX * GRID_SIZE)));
        const iy = Math.max(0, Math.min(GRID_SIZE - 1, Math.floor((py - minY) / rangeY * GRID_SIZE)));
        for (const e of this._grid[iy * GRID_SIZE + ix]) {
            if (px < e.bMinX || px > e.bMaxX || py < e.bMinY || py > e.bMaxY) continue;
            if (pointInPolygon(px, py, e.pts)) return e.tractCode;
        }
        return null;
    }

    // ─── height computation ───────────────────────────────────────────────────

    _computeTopZPerTract(dataLayers) {
        const topZ = new Map();
        this._tracts.forEach((_, tractCode) => {
            let z = this._baseDepth;
            for (const layer of dataLayers) {
                const entry = layer.tractEntries?.get(tractCode);
                if (!entry || !layer.visible) continue;
                z += entry.depth;
            }
            topZ.set(tractCode, z + OUTLINE_EPSILON);
        });
        return topZ;
    }

    _applyTopZ(topZ) {
        const fallback = this._baseDepth + OUTLINE_EPSILON;
        this._lineData.forEach(({ geo, posFlat, vertexTractCodes }) => {
            for (let i = 0; i < vertexTractCodes.length; i++) {
                posFlat[i * 3 + 2] = topZ.get(vertexTractCodes[i]) ?? fallback;
            }
            geo.setPositions(posFlat);
        });
        this._labels.forEach(label => {
            label.worldPos.z = topZ.get(label.centroidTractCode) ?? fallback;
        });
    }

    // Called from restack() whenever layer visibility or order changes.
    updateOutlineHeights(dataLayers) {
        if (!this._tracts || !this._grid) return;
        this._applyTopZ(this._computeTopZPerTract(dataLayers));
    }

    // ─── spatial-index-only init (no rendering) ───────────────────────────────

    buildIndex(tracts) {
        this._tracts = tracts;
        this._buildGrid(tracts);
    }

    // ─── build ────────────────────────────────────────────────────────────────

    build(mapGroup, geoScale, geoOffset, tracts, dataLayers, baseDepth) {
        const { offsetX, offsetY } = geoOffset;
        this._tracts = tracts;
        this._baseDepth = baseDepth;
        this._buildGrid(tracts);

        this._lineMaterial = new LineMaterial({
            color: 0x111111,
            linewidth: 2,
            depthTest: false,
            transparent: true,
            opacity: 0.9,
        });
        this._lineMaterial.resolution.set(window.innerWidth, window.innerHeight);

        const hitMaterial = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0,
            depthWrite: false,
        });

        this._geojson.features.forEach(feature => {
            const name = feature.properties.name;
            const geom = feature.geometry;
            const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;

            let sumX = 0, sumY = 0, ptCount = 0;

            polys.forEach(poly => {
                const ring = poly[0];

                const posFlat = [];
                const vertexTractCodes = [];

                ring.forEach(([lon, lat]) => {
                    const x = (lon - offsetX) * geoScale;
                    const y = (lat - offsetY) * geoScale;
                    sumX += x; sumY += y; ptCount++;
                    posFlat.push(x, y, 0); // Z filled by _applyTopZ
                    vertexTractCodes.push(this._findTractCode(x, y));
                });
                // close the loop
                const [c0, c1] = ring[0];
                posFlat.push((c0 - offsetX) * geoScale, (c1 - offsetY) * geoScale, 0);
                vertexTractCodes.push(vertexTractCodes[0]);

                const geo = new LineGeometry();
                geo.setPositions(posFlat);
                const line = new Line2(geo, this._lineMaterial);
                line.renderOrder = 100;
                mapGroup.add(line);
                this._lines.push(line);
                this._lineData.push({ geo, posFlat, vertexTractCodes });

                // invisible filled mesh for hover raycasting
                const shape = new THREE.Shape();
                ring.forEach(([lon, lat], i) => {
                    const x = (lon - offsetX) * geoScale;
                    const y = (lat - offsetY) * geoScale;
                    i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y);
                });
                const shapeGeo = new THREE.ShapeGeometry(shape);
                const mesh = new THREE.Mesh(shapeGeo, hitMaterial.clone());
                mesh.userData.neighborhoodName = name;
                mapGroup.add(mesh);
                this.hitMeshes.push(mesh);
            });

            const centX = sumX / ptCount;
            const centY = sumY / ptCount;

            // bounding radius: max distance from centroid to any ring vertex
            let radius = 0;
            polys.forEach(poly => {
                poly[0].forEach(([lon, lat]) => {
                    const x = (lon - offsetX) * geoScale;
                    const y = (lat - offsetY) * geoScale;
                    const d = Math.hypot(x - centX, y - centY);
                    if (d > radius) radius = d;
                });
            });

            const el = document.createElement('div');
            el.className = 'neighborhood-label';
            el.textContent = name;
            el.style.display = 'none';
            document.body.appendChild(el);

            this._labels.push({
                el,
                name,
                centroidTractCode: this._findTractCode(centX, centY),
                worldPos: new THREE.Vector3(centX, centY, 0),
                radius,
            });
        });

        // Set initial Z from current layer state (all visible at build time)
        this._applyTopZ(this._computeTopZPerTract(dataLayers));

        // Apply initial visibility
        this.setVisible(this.visible);
    }

    // ─── lifecycle ────────────────────────────────────────────────────────────

    onResize(w, h) {
        if (this._lineMaterial) this._lineMaterial.resolution.set(w, h);
    }

    setVisible(visible) {
        this.visible = visible;
        this._lines.forEach(l => { l.visible = visible; });
        if (!visible) this._labels.forEach(({ el }) => { el.style.display = 'none'; });
    }

    setOpacity(opacity) {
        if (this._lineMaterial) this._lineMaterial.opacity = opacity < 1 ? 0.15 : 0.9;
    }

    updateLabels(camera, mapGroup, sizes, hoveredName) {
        if (!this.visible) {
            this._labels.forEach(({ el }) => { el.style.display = 'none'; });
            return;
        }

        const matWorld = mapGroup.matrixWorld;
        const _edge = new THREE.Vector3();

        this._labels.forEach(({ el, name, worldPos, radius }) => {
            const vec = worldPos.clone();
            vec.applyMatrix4(matWorld);
            vec.project(camera);

            if (vec.z >= 1) { el.style.display = 'none'; return; }

            // Project a point one radius away to measure apparent screen size
            _edge.set(worldPos.x + radius, worldPos.y, worldPos.z);
            _edge.applyMatrix4(matWorld);
            _edge.project(camera);
            const screenRadius = Math.abs((_edge.x - vec.x) / 2 * sizes.width);

            const isHovered = name === hoveredName;
            if (!isHovered && screenRadius < 30) {
                el.style.display = 'none';
                return;
            }

            const x = ((vec.x + 1) / 2) * sizes.width;
            const y = ((-vec.y + 1) / 2) * sizes.height;

            el.style.display = 'block';
            el.style.left = x + 'px';
            el.style.top = y + 'px';
        });
    }

    destroy() {
        this._labels.forEach(({ el }) => el.remove());
    }
}
