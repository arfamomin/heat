import uploadSvg from './upload.svg?raw';

let popoutEl = null;
let parsedFeatures = null;
let fileNameBase = 'Custom Layer';
let _onAdd = null;

export function createAddLayerButton({ onAdd }) {
    _onAdd = onAdd;

    if (!popoutEl) {
        popoutEl = buildPopout();
        document.body.appendChild(popoutEl);

        document.addEventListener('click', e => {
            if (!popoutEl || popoutEl.style.display === 'none') return;
            if (popoutEl.contains(e.target)) return;
            if (e.target.closest('.add-layer-btn')) return;
            popoutEl.style.display = 'none';
        }, true);
    }

    const footer = document.createElement('div');
    footer.className = 'add-layer-footer';

    const btn = document.createElement('button');
    btn.className = 'add-layer-btn';
    btn.innerHTML = `<span class="add-layer-btn-plus">+</span><span>Add a layer</span>`;

    btn.addEventListener('click', () => {
        if (popoutEl.style.display === 'block') {
            popoutEl.style.display = 'none';
            return;
        }
        const rect = document.getElementById('layers-panel').getBoundingClientRect();
        popoutEl.style.left = (rect.right + 10) + 'px';
        // Anchor to bottom of panel, grow upward
        popoutEl.style.bottom = (window.innerHeight - rect.bottom) + 'px';
        popoutEl.style.top = 'auto';
        popoutEl.style.display = 'block';
    });
    footer.appendChild(btn);
    return footer;
}

function buildPopout() {
    const el = document.createElement('div');
    el.id = 'add-layer-popout';
    el.innerHTML = `
        <div class="al-header">
            <span>New layer</span>
        </div>
        <div class="al-body">
            <div class="al-upload-row">
                <span class="al-label">Upload</span>
                <label class="al-file-label" id="al-file-trigger">
                    <span class="al-file-name" id="al-file-name"></span>
                    <span class="al-upload-arrow">${uploadSvg}</span>
                </label>
                <input type="file" id="al-file-input" accept=".geojson,.json" style="display:none">
            </div>
            <div class="al-section-head"></div>
            <div class="al-field-row">
                <label class="al-label" for="al-tract-prop">Property for tract:</label>
                <select class="al-select" id="al-tract-prop" disabled>
                    <option value=""></option>
                </select>
            </div>
            <div class="al-field-row">
                <label class="al-label" for="al-value-prop">Property for value:</label>
                <select class="al-select" id="al-value-prop" disabled>
                    <option value=""></option>
                </select>
            </div>
            <div class="al-field-row al-field-row--compact">
                <label class="al-label" for="al-units">Units:</label>
                <input type="text" class="al-select" id="al-units" placeholder="">
            </div>
            <div class="al-field-row al-field-row--compact">
                <label class="al-label" for="al-color">Color:</label>
                <input type="color" id="al-color" value="#ff6b35" class="al-color-input">
            </div>
            <div class="al-desc-block">
                <label class="al-label" for="al-description">Description:</label>
                <textarea class="al-textarea" id="al-description" placeholder=""></textarea>
            </div>
        </div>
        <div class="al-footer">
            <button class="al-instructions-btn" id="al-instructions-btn">
                <span class="al-info-circle">i</span> Instructions
            </button>
            <button class="al-add-btn" id="al-add-btn">Add</button>
        </div>
        <div class="al-instructions-panel" id="al-instructions-panel">
            Upload a GeoJSON FeatureCollection. Choose which property holds the census tract ID and which holds the numeric value to map. <br><br> Supports 6-digit tract codes and 11-digit FIPS codes for Los Angeles County.
        </div>
    `;

    const fileInput   = el.querySelector('#al-file-input');
    const fileNameEl  = el.querySelector('#al-file-name');
    const tractSelect = el.querySelector('#al-tract-prop');
    const valueSelect = el.querySelector('#al-value-prop');

    el.querySelector('#al-file-trigger').addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (!file) return;
        fileNameBase = file.name.replace(/\.(geo)?json$/i, '');
        fileNameEl.textContent = file.name.length > 24 ? file.name.slice(0, 22) + '…' : file.name;

        const reader = new FileReader();
        reader.onload = evt => {
            try {
                const geojson = JSON.parse(evt.target.result);
                if (!geojson.features?.length) throw new Error('No features found');
                parsedFeatures = geojson.features;
                const keys = Object.keys(parsedFeatures[0].properties || {});

                [tractSelect, valueSelect].forEach(select => {
                    select.innerHTML = '<option value="">— choose —</option>';
                    keys.forEach(k => {
                        const opt = document.createElement('option');
                        opt.value = k;
                        opt.textContent = k;
                        select.appendChild(opt);
                    });
                    select.disabled = false;
                });
                fileNameEl.style.color = '';
            } catch (err) {
                parsedFeatures = null;
                fileNameEl.textContent = 'Error: ' + err.message;
                fileNameEl.style.color = '#c00';
                [tractSelect, valueSelect].forEach(s => {
                    s.innerHTML = '<option value="">— upload first —</option>';
                    s.disabled = true;
                });
            }
        };
        reader.readAsText(file);
    });

    el.querySelector('#al-instructions-btn').addEventListener('click', () => {
        const btn = el.querySelector('#al-instructions-btn');
        const panel = el.querySelector('#al-instructions-panel');
        const open = panel.style.display === 'none';
        panel.style.display = open ? 'block' : 'none';
        btn.classList.toggle('active', open);
    });

    el.querySelector('#al-add-btn').addEventListener('click', () => {
        if (!parsedFeatures) { alert('Please upload a GeoJSON file first.'); return; }
        const tractProp = tractSelect.value;
        const valueProp = valueSelect.value;
        if (!tractProp || !valueProp) { alert('Please select both properties.'); return; }

        const tractMap = buildTractMap(parsedFeatures, tractProp, valueProp);
        if (tractMap.size === 0) {
            alert('No matching tracts found. Check that the tract property contains valid tract IDs.');
            return;
        }

        const colorHex   = el.querySelector('#al-color').value;
        const unit        = el.querySelector('#al-units').value.trim();
        const description = el.querySelector('#al-description').value.trim();

        if (_onAdd) _onAdd({ tractMap, name: fileNameBase, colorHex, unit, description });

        el.style.display = 'none';
        parsedFeatures = null;
        fileInput.value = '';
        fileNameEl.textContent = '';
        fileNameEl.style.color = '';
        [tractSelect, valueSelect].forEach(s => {
            s.innerHTML = '<option value="">— upload first —</option>';
            s.disabled = true;
        });
        el.querySelector('#al-units').value = '';
        el.querySelector('#al-description').value = '';
        el.querySelector('#al-instructions-panel').style.display = 'none';
    });

    return el;
}

function normalizeTractCode(raw) {
    if (raw == null) return null;
    let str = String(raw).trim();
    if (str.includes('.')) str = str.split('.')[0];
    const digits = str.replace(/\D/g, '');
    if (!digits) return null;
    if (digits.length === 11) return digits.slice(5);
    if (digits.length > 6) return digits.slice(-6);
    return digits.padStart(6, '0');
}

function buildTractMap(features, tractProp, valueProp) {
    const map = new Map();
    features.forEach(f => {
        const props = f.properties || {};
        const value = parseFloat(props[valueProp]);
        if (!Number.isFinite(value)) return;
        const code = normalizeTractCode(props[tractProp]);
        if (!code) return;
        if (!map.has(code)) map.set(code, value);
    });
    return map;
}
