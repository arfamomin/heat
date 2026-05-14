import * as THREE from 'three';

function normalizeValue(value, min, max) {
    if (!Number.isFinite(value)) return 0;
    if (max <= min) return 0;
    return (value - min) / (max - min);
}

export class Layer {
    constructor({ name, color, edgeColor, minDepth, maxDepth, fetchData, position = 'above', unit = '', description = '' }) {
        this.name = name;
        this.color = color;
        this.position = position;
        this.edgeColor = edgeColor ?? color;
        this.minDepth = minDepth;
        this.maxDepth = maxDepth;
        this.fetchData = fetchData;
        this.unit = unit;
        this.description = description;

        this.depthByTract = new Map();
        this.rawByTract = new Map();
        this.meshes = [];
        this.lines = [];
        this.visible = true;
        this.tractEntries = new Map();
        this.depthScale = 0.75;
        this.dataMin = 0;
        this.dataMax = 0;

        this.material = new THREE.MeshPhongMaterial({
            color: this.color,
            side: THREE.DoubleSide,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1,
        });

        this.lineMaterial = new THREE.LineBasicMaterial({
            color: this.edgeColor,
        });
    }

    async load() {
        const rawMap = await this.fetchData();

        const values = [...rawMap.values()].filter(Number.isFinite);
        if (!values.length) return;

        const min = Math.min(...values);
        const max = Math.max(...values);
        this.dataMin = min;
        this.dataMax = max;

        rawMap.forEach((value, tractCode) => {
            this.rawByTract.set(tractCode, value);
            const t = normalizeValue(value, min, max);
            this.depthByTract.set(tractCode, this.minDepth + t * (this.maxDepth - this.minDepth));
        });
    }

    build(tracts) {
        tracts.forEach((tract, tractCode) => {
            const depth = this.depthByTract.get(tractCode);
            if (depth == null) return;

            const { meshes, lines } = tract.addLayer(depth, this.material, this.lineMaterial);
            this.meshes.push(...meshes);
            this.lines.push(...lines);
            this.tractEntries.set(tractCode, { meshes, lines, depth });
        });
        this.setDepthScale(this.depthScale);
    }

    // Scale the visual extrusion height (0.05–1.0). Meshes scale in-place;
    // restack() must be called afterward to reposition dependent layers.
    setDepthScale(scale) {
        this.depthScale = Math.max(0.05, Math.min(1, scale));
        this.meshes.forEach(m => { m.scale.z = this.depthScale; });
        this.lines.forEach(l => { l.scale.z = this.depthScale; });
    }

    setVisible(visible) {
        this.visible = visible;
        this.meshes.forEach(m => {
            m.visible = visible;
            m.userData.layerHidden = !visible;
        });
        this.lines.forEach(l => {
            l.visible = visible;
            l.userData.layerHidden = !visible;
        });
    }
}
