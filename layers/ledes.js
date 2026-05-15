import * as THREE from 'three';

const DEFAULT_INCLUDED = new Set([]);
const LINE_HEIGHT = 0.12;
const OUTLINE_EPSILON = 0.008;

function resolveTractCode(name, centX, centY, polys, offsetX, offsetY, geoScale, findTractCode) {
    let code = findTractCode(centX, centY);
    if (code) return code;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    polys.forEach(poly => {
        poly[0].forEach(([lon, lat]) => {
            const x = (lon - offsetX) * geoScale;
            const y = (lat - offsetY) * geoScale;
            if (x < minX) minX = x; if (x > maxX) maxX = x;
            if (y < minY) minY = y; if (y > maxY) maxY = y;
        });
    });

    const STEPS = 10;
    const candidates = [];
    for (let ix = 0; ix <= STEPS; ix++) {
        for (let iy = 0; iy <= STEPS; iy++) {
            const px = minX + (maxX - minX) * (ix / STEPS);
            const py = minY + (maxY - minY) * (iy / STEPS);
            candidates.push({ px, py, d: Math.hypot(px - centX, py - centY) });
        }
    }
    candidates.sort((a, b) => a.d - b.d);

    for (const { px, py } of candidates) {
        code = findTractCode(px, py);
        if (code) return code;
    }

    console.warn(`[ledes] ${name}: no tract found for centroid (${centX.toFixed(3)}, ${centY.toFixed(3)})`);
    return null;
}

export class LedesLayer {
    constructor() {
        this.name = 'Neighborhoods';
        this.color = 0x111111;
        this.visible = true;
        this.tractEntries = new Map();

        this._ledes = [];
        this._ledeMap = new Map(); // name → lede object
        this._baseDepth = 0;
        this._tracts = null;
        this._mapGroup = null;
    }

    build(mapGroup, geoScale, geoOffset, tracts, neighborhoodsGeoJSON, findTractCode, dataLayers, baseDepth) {
        const { offsetX, offsetY } = geoOffset;
        this._mapGroup = mapGroup;
        this._tracts = tracts;
        this._baseDepth = baseDepth;

        this._normalMat = new THREE.LineBasicMaterial({ color: 0x111111, depthTest: true });
        this._dimMat    = new THREE.LineBasicMaterial({ color: 0xcccccc, depthTest: true });
        const lineMaterial = this._normalMat;

        const pureDataLayers = dataLayers.filter(l => l.tractEntries && l.tractEntries.size > 0);

        neighborhoodsGeoJSON.features.forEach(feature => {
            const name = feature.properties.name;
            const geom = feature.geometry;
            const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;

            let sumX = 0, sumY = 0, ptCount = 0;
            polys.forEach(poly => {
                poly[0].forEach(([lon, lat]) => {
                    sumX += (lon - offsetX) * geoScale;
                    sumY += (lat - offsetY) * geoScale;
                    ptCount++;
                });
            });
            const centX = sumX / ptCount;
            const centY = sumY / ptCount;

            const centroidTractCode = resolveTractCode(name, centX, centY, polys, offsetX, offsetY, geoScale, findTractCode);
            const initZ = baseDepth + OUTLINE_EPSILON;

            const positions = new Float32Array([
                centX, centY, initZ,
                centX, centY, initZ + LINE_HEIGHT,
            ]);
            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const line = new THREE.Line(geo, lineMaterial);
            line.renderOrder = 101;

            const included = DEFAULT_INCLUDED.has(name);
            line.visible = included;

            mapGroup.add(line);

            const el = document.createElement('div');
            el.className = 'lede-label';
            el.textContent = name;
            el.style.display = 'none';
            document.body.appendChild(el);

            const lede = { el, name, line, geo, positions, centroidTractCode, centX, centY, included };
            this._ledes.push(lede);
            this._ledeMap.set(name, lede);
        });

        this._updateHeights(pureDataLayers);
    }

    // Called from the neighborhoods panel to show/hide individual ledes.
    setLedeIncluded(name, included) {
        const lede = this._ledeMap.get(name);
        if (!lede) return;
        lede.included = included;
        lede.line.visible = this.visible && included;
        if (!included) lede.el.style.display = 'none';
    }

    isLedeIncluded(name) {
        return this._ledeMap.get(name)?.included ?? false;
    }

    _updateHeights(dataLayers) {
        this._ledes.forEach(lede => {
            if (!lede.centroidTractCode) return;
            let z = this._baseDepth;
            for (const layer of dataLayers) {
                if (!layer.tractEntries || layer.tractEntries.size === 0) continue;
                if (layer.position !== 'above') continue;
                const entry = layer.tractEntries.get(lede.centroidTractCode);
                if (!entry || !layer.visible) continue;
                z += entry.depth * (layer.depthScale ?? 1);
            }
            z += OUTLINE_EPSILON;
            lede.positions[2] = z;
            lede.positions[5] = z + LINE_HEIGHT;
            lede.geo.attributes.position.needsUpdate = true;
        });
    }

    updateOutlineHeights(dataLayers) {
        if (!this._tracts) return;
        const pure = dataLayers.filter(l => l.tractEntries && l.tractEntries.size > 0);
        this._updateHeights(pure);
    }

    updateLabels(camera, mapGroup, canvasEl) {
        if (!this.visible) {
            this._ledes.forEach(({ el }) => { el.style.display = 'none'; });
            return;
        }

        const mapNormal = new THREE.Vector3(0, 0, 1);
        mapNormal.transformDirection(mapGroup.matrixWorld);
        if (mapNormal.z <= 0) {
            this._ledes.forEach(({ el }) => { el.style.display = 'none'; });
            return;
        }

        const rect = canvasEl.getBoundingClientRect();
        const matWorld = mapGroup.matrixWorld;

        this._ledes.forEach(({ el, positions, centX, centY, included }) => {
            if (!included) { el.style.display = 'none'; return; }

            const topZ = positions[5];
            const vec = new THREE.Vector3(centX, centY, topZ);
            vec.applyMatrix4(matWorld);
            vec.project(camera);

            if (vec.z >= 1) { el.style.display = 'none'; return; }

            const x = rect.left + ((vec.x + 1) / 2) * rect.width;
            const y = rect.top  + ((-vec.y + 1) / 2) * rect.height;

            el.style.display = 'block';
            el.style.left = x + 'px';
            el.style.top  = y + 'px';
        });
    }

    setFocus(name) {
        this._ledes.forEach(lede => {
            const dim = name !== null && lede.name !== name;
            lede.line.material = dim ? this._dimMat : this._normalMat;
            lede.el.style.opacity = dim ? '0.25' : '';
        });
    }

    setVisible(visible) {
        this.visible = visible;
        this._ledes.forEach(lede => {
            lede.line.visible = visible && lede.included;
            if (!visible || !lede.included) lede.el.style.display = 'none';
        });
    }

    destroy() {
        this._ledes.forEach(({ el, line, geo }) => {
            el.remove();
            geo.dispose();
            this._mapGroup?.remove(line);
        });
    }
}
