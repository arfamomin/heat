import { Layer } from '../Layer.js';

async function fetchShadeData() {
    const response = await fetch('data/shade/tree_data.geojson');
    const geojson = await response.json();

    const accumulator = new Map();

    geojson.features.forEach(feature => {
        const props = feature.properties ?? {};
        const geoid = String(props.GEOID ?? '');
        const value = Number(props._bld1200);

        if (!Number.isFinite(value) || geoid.length < 11 || !geoid.startsWith('06037')) return;

        const tractCode = geoid.slice(5, 11);
        const entry = accumulator.get(tractCode) ?? { sum: 0, count: 0 };
        entry.sum += value;
        entry.count += 1;
        accumulator.set(tractCode, entry);
    });

    const averages = new Map();
    accumulator.forEach(({ sum, count }, tractCode) => {
        averages.set(tractCode, sum / count);
    });

    return averages;
}

export const shadeLayer = new Layer({
    name: 'Tree Shade',
    color: 0xC2EB66,
    edgeColor: 0x405b19,
    minDepth: 0.02,
    maxDepth: 0.15,
    fetchData: fetchShadeData,
});
