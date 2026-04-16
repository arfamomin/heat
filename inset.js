import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const GROUP_SCALE = 0.8;

let map, viewRect;
let centerLat, centerLon, geoScale;
let initialized = false;

export function initInset(laFeatures, geoBounds, scale) {
    geoScale = scale;
    const { minX, maxX, minY, maxY } = geoBounds;
    centerLon = (minX + maxX) / 2;
    centerLat = (minY + maxY) / 2;

    map = L.map('inset-map', {
        center: [37.2, -119.5],
        zoom: 6,
        zoomControl: false,
        attributionControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
        keyboard: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19,
    }).addTo(map);

    const countyStyle = { color: '#555', weight: 0.5, fillColor: '#c2eb66', fillOpacity: 0.35 };
    L.geoJSON({ type: 'FeatureCollection', features: laFeatures }, { style: countyStyle }).addTo(map);

    viewRect = L.rectangle([[centerLat, centerLon], [centerLat, centerLon]], {
        color: '#2a7a00',
        weight: 1.5,
        dashArray: '4 3',
        fillColor: '#c2eb66',
        fillOpacity: 0.15,
    }).addTo(map);

    initialized = true;
}

export function updateInset(camera) {
    if (!initialized) return;

    const visHalfH = camera.position.z * Math.tan((camera.fov / 2) * Math.PI / 180);
    const visHalfW = visHalfH * camera.aspect;

    const halfLat = Math.min(visHalfH / (geoScale * GROUP_SCALE), 25);
    const halfLon = Math.min(visHalfW / (geoScale * GROUP_SCALE), 25);

    viewRect.setBounds([
        [centerLat - halfLat, centerLon - halfLon],
        [centerLat + halfLat, centerLon + halfLon],
    ]);
}
