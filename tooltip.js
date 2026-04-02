const el = document.getElementById('tract-tooltip');

function colorToHex(colorInt) {
    return '#' + colorInt.toString(16).padStart(6, '0');
}

export function showTooltip(tractCode, layers, clientX, clientY) {
    const visibleLayers = layers.filter(l => l.visible && l.rawByTract.has(tractCode));

    let html = `<div class="tooltip-title">Tract ${tractCode}</div>`;

    if (visibleLayers.length === 0) {
        html += `<div class="tooltip-row"><span class="tooltip-label">No data for this tract</span></div>`;
    } else {
        visibleLayers.forEach(layer => {
            const value = layer.rawByTract.get(tractCode);
            html += `
                <div class="tooltip-row">
                    <span class="tooltip-swatch" style="background:${colorToHex(layer.color)}"></span>
                    <span class="tooltip-label">${layer.name}</span>
                    <span class="tooltip-value">${value.toFixed(2)}</span>
                </div>`;
        });
    }

    el.innerHTML = html;
    el.style.display = 'block';

    // Position near the click, nudging inward if it would overflow the viewport
    const pad = 14;
    const tooltipW = 220; // matches CSS width
    let left = clientX + pad;
    let top = clientY + pad;
    if (left + tooltipW > window.innerWidth)  left = clientX - tooltipW - pad;
    if (top + el.offsetHeight > window.innerHeight) top = clientY - el.offsetHeight - pad;
    el.style.left = left + 'px';
    el.style.top  = top  + 'px';
}

export function hideTooltip() {
    el.style.display = 'none';
}
