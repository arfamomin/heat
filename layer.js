import * as THREE from 'three';

function normalizeValue(value, min, max) {
    if (!Number.isFinite(value)) return 0;
    if (max <= min) return 0;
    return (value - min) / (max - min);
}

export class Layer {
    /**
     * @param {object} config
     * @param {string} config.name         Display name
     * @param {number} config.color        Hex color for faces
     * @param {number} [config.edgeColor]  Hex color for edges (defaults to color)
     * @param {number} config.minDepth     Min extrusion depth (lowest-value tracts)
     * @param {number} config.maxDepth     Max extrusion depth (highest-value tracts)
     * @param {() => Promise<Map<string, number>>} config.fetchData
     *   Async function returning Map<tractCode, rawValue>.
     */
    constructor({ name, color, edgeColor, minDepth, maxDepth, fetchData }) {
        this.name = name;
        this.color = color;
        this.edgeColor = edgeColor ?? color;
        this.minDepth = minDepth;
        this.maxDepth = maxDepth;
        this.fetchData = fetchData;

        this.depthByTract = new Map(); // tractCode -> computed depth
        this.meshes = [];
        this.lines = [];
        this.visible = true;

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

    // Fetches data and pre-computes the extrusion depth for each tract.
    async load() {
        const rawMap = await this.fetchData();

        const values = [...rawMap.values()].filter(Number.isFinite);
        if (!values.length) return;

        const min = Math.min(...values);
        const max = Math.max(...values);

        rawMap.forEach((value, tractCode) => {
            const t = normalizeValue(value, min, max);
            this.depthByTract.set(tractCode, this.minDepth + t * (this.maxDepth - this.minDepth));
        });
    }

    // Calls tract.addLayer() for every tract that has data for this layer.
    // Must be called after load() and after all preceding layers have been built,
    // so that each tract's currentZ is already at the correct stacking height.
    build(tracts) {
        tracts.forEach((tract, tractCode) => {
            const depth = this.depthByTract.get(tractCode);
            if (depth == null) return;

            const { meshes, lines } = tract.addLayer(depth, this.material, this.lineMaterial);
            this.meshes.push(...meshes);
            this.lines.push(...lines);
        });
    }

    setVisible(visible) {
        this.visible = visible;
        this.meshes.forEach(m => (m.visible = visible));
        this.lines.forEach(l => (l.visible = visible));
    }
}
