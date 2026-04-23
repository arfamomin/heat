/**
 * Geocodes cooling center addresses using Nominatim (OSM).
 * Outputs data/cooling_centers/cooling_centers_geocoded.json
 *
 * Run: node scripts/geocode_cooling_centers.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const csvPath = path.join(__dirname, '../data/cooling_centers/cooling_centers_2026.csv');
const outPath = path.join(__dirname, '../data/cooling_centers/cooling_centers_geocoded.json');

function parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = splitCSVRow(lines[0]);
    return lines.slice(1).map(line => {
        const cols = splitCSVRow(line);
        return Object.fromEntries(headers.map((h, i) => [h.trim(), (cols[i] ?? '').trim()]));
    });
}

function splitCSVRow(row) {
    const result = [];
    let cur = '';
    let inQuote = false;
    for (let i = 0; i < row.length; i++) {
        const ch = row[i];
        if (ch === '"') {
            inQuote = !inQuote;
        } else if (ch === ',' && !inQuote) {
            result.push(cur);
            cur = '';
        } else {
            cur += ch;
        }
    }
    result.push(cur);
    return result;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function geocode(address, city, zip) {
    const query = `${address}, ${city}, CA ${zip}`;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1&countrycodes=us`;

    const res = await fetch(url, {
        headers: { 'User-Agent': 'thesis-heat-map/1.0 (arfamomin16@gmail.com)' }
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data.length) return null;
    return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
}

async function main() {
    const csv = fs.readFileSync(csvPath, 'utf8');
    const rows = parseCSV(csv);

    const results = [];
    let failed = 0;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const name = row['Site Name'];
        const address = row['Address'];
        const city = row['City'];
        const zip = row['Zip Code'];

        process.stdout.write(`[${i + 1}/${rows.length}] ${name} ... `);

        try {
            const coords = await geocode(address, city, zip);
            if (coords) {
                results.push({ name, address, city, zip, lat: coords.lat, lon: coords.lon });
                console.log(`${coords.lat.toFixed(5)}, ${coords.lon.toFixed(5)}`);
            } else {
                console.log('NOT FOUND');
                failed++;
            }
        } catch (err) {
            console.log(`ERROR: ${err.message}`);
            failed++;
        }

        // Nominatim requires max 1 req/sec
        await sleep(1100);
    }

    fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
    console.log(`\nDone. ${results.length} geocoded, ${failed} failed.`);
    console.log(`Output: ${outPath}`);
}

main();
