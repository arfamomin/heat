import { feature } from 'topojson-client';
import statesTopojson from 'us-atlas/states-10m.json';

// California geographic bounds for projection
const CA = { minLon: -124.5, maxLon: -113.9, minLat: 32.4, maxLat: 42.1 };

// Cosine correction: 1° lon is shorter than 1° lat at CA's latitude (~37.25°N)
const COS_MID = Math.cos((CA.minLat + CA.maxLat) / 2 * Math.PI / 180);
const lonSpan = (CA.maxLon - CA.minLon) * COS_MID;
const latSpan = CA.maxLat - CA.minLat;

const SVG_W = 100;
const SVG_H = Math.round(latSpan / lonSpan * SVG_W);

// Bounding box of what the 3D map renders
const LA_BOUNDS = {
    minLon: -118.685, maxLon: -118.155,
    minLat: 33.704,   maxLat: 34.337,
};

function project(lon, lat) {
    return [
        (lon - CA.minLon) * COS_MID / lonSpan * SVG_W,
        (1 - (lat - CA.minLat) / latSpan) * SVG_H,
    ];
}

function ringToD(ring) {
    return ring.map(([lon, lat], i) => {
        const [x, y] = project(lon, lat);
        return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
    }).join('') + 'Z';
}

// Extract California (FIPS 06) from Natural Earth 1:10m
const statesGeo = feature(statesTopojson, statesTopojson.objects.states);
const californiaFeature = statesGeo.features.find(f => f.id === '06');
const caPolygons = californiaFeature.geometry.coordinates; // MultiPolygon

export function initInset(laFeatures) {
    const container = document.getElementById('inset-map');
    if (!container) return;

    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');

    const displayW = 100;
    const displayH = Math.round(displayW * SVG_H / SVG_W);
    svg.setAttribute('viewBox', `0 0 ${SVG_W} ${SVG_H}`);
    svg.setAttribute('width', String(displayW));
    svg.setAttribute('height', String(displayH));
    svg.style.display = 'block';

    // California outline — Natural Earth 1:10m, equirectangular projection
    const caPath = document.createElementNS(svgNS, 'path');
    const caD = caPolygons.map(polygon => polygon.map(ring => ringToD(ring)).join('')).join('');
    caPath.setAttribute('d', caD);
    caPath.setAttribute('fill', 'white');
    caPath.setAttribute('stroke', '#2a2a2a');
    caPath.setAttribute('stroke-width', '1.0');
    caPath.setAttribute('stroke-linejoin', 'round');
    caPath.setAttribute('stroke-linecap', 'round');
    caPath.setAttribute('fill-rule', 'evenodd');
    svg.appendChild(caPath);

    // LA tract polygons — fill driven by --highlight-color CSS variable
    const laGroup = document.createElementNS(svgNS, 'g');
    laGroup.setAttribute('class', 'inset-la-region');
    laGroup.setAttribute('stroke', 'none');

    laFeatures.forEach(feat => {
        const { geometry } = feat;
        const polygons = geometry.type === 'Polygon'
            ? [geometry.coordinates]
            : geometry.coordinates;

        polygons.forEach(polygon => {
            const path = document.createElementNS(svgNS, 'path');
            path.setAttribute('d', polygon.map(ring => ringToD(ring)).join(''));
            laGroup.appendChild(path);
        });
    });

    svg.appendChild(laGroup);

    // Bounding box showing the exact 3D map extent
    const [x1, y1] = project(LA_BOUNDS.minLon, LA_BOUNDS.maxLat);
    const [x2, y2] = project(LA_BOUNDS.maxLon, LA_BOUNDS.minLat);
    const rect = document.createElementNS(svgNS, 'rect');
    rect.setAttribute('x', x1.toFixed(2));
    rect.setAttribute('y', y1.toFixed(2));
    rect.setAttribute('width', (x2 - x1).toFixed(2));
    rect.setAttribute('height', (y2 - y1).toFixed(2));
    rect.setAttribute('fill', 'none');
    rect.setAttribute('stroke', '#e53935');
    rect.setAttribute('stroke-width', '0.8');
    rect.setAttribute('stroke-dasharray', '2,1.5');
    svg.appendChild(rect);

    container.appendChild(svg);
}

export function updateInset() {}
