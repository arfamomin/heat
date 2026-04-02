import * as THREE from 'three';
import { Tract } from './Tract.js';
import { shadeLayer } from './layers/shade.js';

const BASE_DEPTH = 0.05;

const LA_CITY_BOUNDS = {
    minLon: -118.685,
    maxLon: -118.155,
    minLat: 33.704,
    maxLat: 34.337,
};

function getOuterRings(feature) {
    if (!feature?.geometry?.coordinates) return [];
    if (feature.geometry.type === 'Polygon') return [feature.geometry.coordinates[0]];
    if (feature.geometry.type === 'MultiPolygon') return feature.geometry.coordinates.map(p => p[0]);
    return [];
}

function getCentroid(ring) {
    if (!ring?.length) return null;
    let lon = 0, lat = 0;
    ring.forEach(([x, y]) => { lon += x; lat += y; });
    return { lon: lon / ring.length, lat: lat / ring.length };
}

function createShape(ring, offsetX, offsetY, scale) {
    const shape = new THREE.Shape();
    ring.forEach(([lon, lat], i) => {
        const x = (lon - offsetX) * scale;
        const y = (lat - offsetY) * scale;
        i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y);
    });
    return shape;
}

export async function buildMap(mapGroup) {
    const response = await fetch('data/2020_LACounty_Census_Tracts.geojson');
    const tractData = await response.json();

    // Filter to LA City bounding box
    const laFeatures = tractData.features.filter(feature => {
        const [ring] = getOuterRings(feature);
        const c = getCentroid(ring);
        if (!c) return false;
        return (
            c.lon >= LA_CITY_BOUNDS.minLon && c.lon <= LA_CITY_BOUNDS.maxLon &&
            c.lat >= LA_CITY_BOUNDS.minLat && c.lat <= LA_CITY_BOUNDS.maxLat
        );
    });

    // Compute global scale and centering offset from all tract coordinates
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    laFeatures.forEach(feature => {
        getOuterRings(feature).forEach(ring => {
            ring.forEach(([x, y]) => {
                if (x < minX) minX = x; if (x > maxX) maxX = x;
                if (y < minY) minY = y; if (y > maxY) maxY = y;
            });
        });
    });

    const scale = 2 / Math.max(maxX - minX, maxY - minY);
    const offsetX = (minX + maxX) / 2;
    const offsetY = (minY + maxY) / 2;

    // Shared base materials (all tracts share one material instance each)
    const baseMaterial = new THREE.MeshPhongMaterial({
        color: 0xcccccc,
        side: THREE.DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
    });
    const baseLineMaterial = new THREE.LineBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.2,
    });

    // Build Tract instances and their base slabs
    const tracts = new Map(); // tractCode -> Tract
    laFeatures.forEach(feature => {
        const tractCode = String(feature.properties?.CT20 ?? '');
        const shapes = getOuterRings(feature).map(ring => createShape(ring, offsetX, offsetY, scale));

        const tract = new Tract({ tractCode, shapes, mapGroup });
        tract.buildBase(BASE_DEPTH, baseMaterial, baseLineMaterial);
        tracts.set(tractCode, tract);
    });

    // Define layers in stacking order.
    // Each layer's load() normalizes its data, then build() stacks it on top of
    // whatever height each tract has already accumulated.
    const layers = [
        shadeLayer,
        // add more layers here as data becomes available
    ];

    for (const layer of layers) {
        await layer.load();
        layer.build(tracts);
    }

    console.log(`Loaded ${tracts.size} tracts, ${layers.length} layer(s)`);
    return { tracts, layers };
}
