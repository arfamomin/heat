import { Layer } from '../Layer.js';

async function fetchHeatIslandData() {
    const response = await fetch('data/heat_island/UHII_latlon_CA.csv');
    const text = await response.text();

    const [headerLine, ...rows] = text.trim().split('\n');
    const headers = headerLine.split(',').map(h => h.trim());

    const fipsIdx      = headers.indexOf('FIPS');
    const degHourIdx   = headers.indexOf('DegHourDay');

    const result = new Map(); // tractCode -> DegHourDay

    rows.forEach(row => {
        const cols = row.split(',').map(c => c.trim());

        const fipsRaw = cols[fipsIdx];
        const value   = Number(cols[degHourIdx]);

        if (!fipsRaw || !Number.isFinite(value)) return;

        // FIPS may be missing the leading zero — pad to 11 digits
        const fips = fipsRaw.padStart(11, '0');

        // Only keep LA County tracts (state 06, county 037)
        if (!fips.startsWith('06037')) return;

        // Tract code is digits 5-11, matching CT20 in the census GeoJSON
        const tractCode = fips.slice(5, 11);
        result.set(tractCode, value);
    });

    return result;
}

export const heatIslandLayer = new Layer({
    name: 'Urban Heat Island',
    color: 0xff96fb,
    edgeColor: 0xcc60c8,
    minDepth: 0.02,
    maxDepth: 0.15,
    fetchData: fetchHeatIslandData,
    position: 'below',
    unit: 'UHII',
    description: 'Urban Heat Island Intensity measures how much hotter a tract runs compared to surrounding rural areas during a typical summer day.',
});
