import { Layer } from '../Layer.js';

async function fetchVulnerablePopData() {
    const response = await fetch('data/vulnerable_pop/ACSST5Y2024.S0101-Data.csv');
    const text = await response.text();

    const [headerLine, _labelLine, ...rows] = text.trim().split('\n');
    const headers = headerLine.split(',').map(h => h.replace(/"/g, '').trim());

    const geoIdx    = headers.indexOf('GEO_ID');
    const pctIdx    = headers.indexOf('S0101_C02_030E'); // Percent 65 years and over

    const result = new Map(); // tractCode -> percent65plus

    rows.forEach(row => {
        const cols = row.split(',').map(c => c.replace(/"/g, '').trim());
        const geoId = cols[geoIdx];
        const value = Number(cols[pctIdx]);

        if (!geoId || !Number.isFinite(value)) return;

        // GEO_ID format: "1400000US06037XXXXXX" — strip prefix, then state(2)+county(3) = 5 chars
        const fips = geoId.replace('1400000US', '');
        if (!fips.startsWith('06037')) return;

        const tractCode = fips.slice(5, 11);
        result.set(tractCode, value);
    });

    return result;
}

export const vulnerablePopLayer = new Layer({
    name: 'Vulnerable Population',
    color: 0xfcba03,
    edgeColor: 0xc99200,
    minDepth: 0.01,
    maxDepth: 0.08,
    fetchData: fetchVulnerablePopData,
});
