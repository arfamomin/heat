import { Layer } from '../Layer.js';

const MILES_TO_KM = 1.60934;
const RADIUS_KM = 2 * MILES_TO_KM;

function haversineKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function createCoolingCentersLayer(laFeatures) {
    // Pre-compute tract centroids once so fetchData doesn't re-fetch the GeoJSON
    const tractCentroids = new Map();
    laFeatures.forEach(feature => {
        const tractCode = String(feature.properties?.CT20 ?? '');
        if (!tractCode) return;
        const geom = feature.geometry;
        const rings = geom.type === 'Polygon'
            ? [geom.coordinates[0]]
            : geom.coordinates.map(p => p[0]);
        let lonSum = 0, latSum = 0, count = 0;
        rings.forEach(ring => ring.forEach(([lon, lat]) => { lonSum += lon; latSum += lat; count++; }));
        if (count) tractCentroids.set(tractCode, { lat: latSum / count, lon: lonSum / count });
    });

    async function fetchCoolingCenterData() {
        const res = await fetch('data/cooling_centers/cooling_centers_geocoded.json');
        const centers = await res.json();

        const result = new Map();
        tractCentroids.forEach(({ lat, lon }, tractCode) => {
            const count = centers.filter(c =>
                haversineKm(lat, lon, c.lat, c.lon) <= RADIUS_KM
            ).length;
            result.set(tractCode, count);
        });
        return result;
    }

    return new Layer({
        name: 'Cooling Centers',
        color: 0x78C7EB,
        edgeColor: 0x4F95B5,
        minDepth: 0.01,
        maxDepth: 0.08,
        fetchData: fetchCoolingCenterData,
        position: 'above',
    });
}
