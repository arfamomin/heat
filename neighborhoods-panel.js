function centroidOfRing(ring) {
    let sumX = 0, sumY = 0;
    ring.forEach(([x, y]) => { sumX += x; sumY += y; });
    return [sumX / ring.length, sumY / ring.length];
}

function pointInPolygon(px, py, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const [xi, yi] = ring[i];
        const [xj, yj] = ring[j];
        if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi))
            inside = !inside;
    }
    return inside;
}

function buildNbhdToTracts(nbhdFeatures, laFeatures) {
    const map = new Map();
    nbhdFeatures.forEach(f => map.set(f.properties.name, new Set()));

    laFeatures.forEach(tractFeature => {
        const tractCode = String(tractFeature.properties?.CT20 ?? '');
        if (!tractCode) return;

        const outerRings = tractFeature.geometry.type === 'Polygon'
            ? [tractFeature.geometry.coordinates[0]]
            : tractFeature.geometry.coordinates.map(p => p[0]);

        outerRings.forEach(ring => {
            const [cx, cy] = centroidOfRing(ring);
            for (const nbhdFeature of nbhdFeatures) {
                const name = nbhdFeature.properties.name;
                const geom = nbhdFeature.geometry;
                const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
                for (const poly of polys) {
                    if (pointInPolygon(cx, cy, poly[0])) {
                        map.get(name).add(tractCode);
                        return;
                    }
                }
            }
        });
    });

    return map;
}

export async function initNeighborhoodsPanel({ laFeatures, onSelect, onDeselect, onInclude, isLedeIncluded }) {
    const res = await fetch('data/la-neighborhoods/la_city.json');
    const { features: nbhdFeatures } = await res.json();

    const nbhdToTracts = buildNbhdToTracts(nbhdFeatures, laFeatures);
    const sortedNames = [...nbhdToTracts.keys()].sort();

    const panel = document.createElement('div');
    panel.id = 'nbhd-panel';
    panel.innerHTML = `
        <div class="nbhd-header">
            <span class="nbhd-title">Neighborhoods</span>
            <button class="nbhd-toggle" id="nbhdToggle">+</button>
        </div>
        <div id="nbhdBody" class="nbhd-body--collapsed">
            <input type="text" class="nbhd-search" id="nbhdSearch" placeholder="Search...">
            <div class="nbhd-col-header">
                <span class="nbhd-include-label">Include?</span>
            </div>
            <ul class="nbhd-list" id="nbhdList"></ul>
        </div>
    `;
    document.getElementById('left-panels').prepend(panel);

    const toggleBtn = panel.querySelector('#nbhdToggle');
    const body      = panel.querySelector('#nbhdBody');
    const searchEl  = panel.querySelector('#nbhdSearch');
    const list      = panel.querySelector('#nbhdList');

    let selectedName = null;

    function renderList(filter = '') {
        list.innerHTML = '';
        const query = filter.toLowerCase().trim();
        sortedNames.forEach(name => {
            if (query && !name.toLowerCase().includes(query)) return;

            const included = isLedeIncluded(name);
            const li = document.createElement('li');
            li.className = 'nbhd-row' + (name === selectedName ? ' nbhd-row--selected' : '');
            li.dataset.name = name;
            li.innerHTML = `
                <span class="nbhd-name">${name}</span>
                <span class="nbhd-checkbox${included ? ' nbhd-checkbox--included' : ''}"></span>
            `;

            // Row click: select neighborhood (and auto-include its lede)
            li.addEventListener('click', e => {
                if (e.target.classList.contains('nbhd-checkbox')) return;
                if (selectedName === name) {
                    selectedName = null;
                    li.classList.remove('nbhd-row--selected');
                    onDeselect();
                } else {
                    selectedName = name;
                    list.querySelectorAll('.nbhd-row--selected').forEach(el => el.classList.remove('nbhd-row--selected'));
                    li.classList.add('nbhd-row--selected');
                    onSelect(nbhdToTracts.get(name));
                    // Auto-include the lede when selecting a neighborhood
                    if (!isLedeIncluded(name)) {
                        onInclude(name, true);
                        li.querySelector('.nbhd-checkbox').classList.add('nbhd-checkbox--included');
                    }
                }
            });

            // Checkbox click: toggle lede independently of selection
            li.querySelector('.nbhd-checkbox').addEventListener('click', e => {
                e.stopPropagation();
                const nowIncluded = !isLedeIncluded(name);
                onInclude(name, nowIncluded);
                e.currentTarget.classList.toggle('nbhd-checkbox--included', nowIncluded);
            });

            list.appendChild(li);
        });
    }

    renderList();

    toggleBtn.addEventListener('click', () => {
        const collapsed = body.classList.toggle('nbhd-body--collapsed');
        toggleBtn.textContent = collapsed ? '+' : '−';
    });

    searchEl.addEventListener('input', () => renderList(searchEl.value));

    return {
        clearSelection() {
            selectedName = null;
            list.querySelectorAll('.nbhd-row--selected').forEach(el => el.classList.remove('nbhd-row--selected'));
        },
    };
}
