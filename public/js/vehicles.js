// Version: 2026-05-03_1410
// vehicles.js
// Model loading with per-category lazy initialization

let totalModels = 0;
let loadedModels = 0;
let fakeProgress = 0;
let loadingInterval = null;
const modelProgresses = new Map();

// Called externally after category selection
export function showLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    // Reset state for this load session
    totalModels = 0;
    loadedModels = 0;
    fakeProgress = 0;
    modelProgresses.clear();

    if (loadingInterval) clearInterval(loadingInterval);

    const percentSpan = document.getElementById('loader-percent');
    const barFill = document.getElementById('loader-bar');
    if (percentSpan) percentSpan.innerText = '0%';
    if (barFill) barFill.style.width = '0%';

    loader.style.display = 'flex';
    loader.classList.remove('hidden');

    // Artificial smooth progress animation (yavaşlatıldı)
    loadingInterval = setInterval(() => {
        if (fakeProgress < 90) {
            fakeProgress += (90 - fakeProgress) * 0.03;
            const d = Math.floor(fakeProgress);
            if (percentSpan) percentSpan.innerText = d + '%';
            if (barFill) barFill.style.width = d + '%';
        }
    }, 100);

    // Safety timeout – 15 s max so user waits for forced loading
    setTimeout(() => finishLoading(), 15000);
}

export function createModelViewer(canvasId, modelPath, altText, modelKey, attributes = {}) {
    const container = document.getElementById(canvasId);
    if (!container) return;

    // Avoid duplicate model-viewers
    if (container.querySelector('model-viewer')) return;

    totalModels++;

    const modelViewer = document.createElement('model-viewer');
    modelViewer.setAttribute('src', modelPath);
    modelViewer.setAttribute('alt', altText);
    modelViewer.setAttribute('auto-rotate', '');
    modelViewer.setAttribute('camera-controls', '');

    for (const [key, value] of Object.entries(attributes)) {
        modelViewer.setAttribute(key, value);
    }
    modelViewer.setAttribute('loading', 'eager');

    // Apply dimensions — use hard-coded 260px on mobile (container.offsetHeight
    // can be 0 if CSS hasn't been applied yet when JS runs).
    function applyDimensions() {
        if (window.innerWidth <= 900) {
            modelViewer.style.width  = '100%';
            modelViewer.style.height = '260px';
        } else {
            modelViewer.style.width  = '100%';
            modelViewer.style.height = '100%';
        }
    }

    applyDimensions();

    // Re-apply when window resizes (e.g. orientation change)
    window.addEventListener('resize', applyDimensions, { passive: true });

    modelProgresses.set(modelViewer, 0);

    modelViewer.addEventListener('progress', (event) => {
        modelProgresses.set(modelViewer, event.detail.totalProgress);
        updateGlobalProgress();
    });

    modelViewer.addEventListener('load', () => {
        modelProgresses.set(modelViewer, 1);
        loadedModels++;
        updateGlobalProgress();
    });

    container.appendChild(modelViewer);
}

function updateGlobalProgress() {
    if (totalModels === 0) return;

    if (loadedModels >= totalModels) {
        finishLoading();
        return;
    }

    let totalP = 0;
    for (let p of modelProgresses.values()) totalP += p;
    // Clamp avgProgress to max 99 until all models are loaded
    const avgProgress = Math.min(99, (totalP / totalModels) * 100);

    if (avgProgress > fakeProgress) {
        fakeProgress = avgProgress;
        const percentSpan = document.getElementById('loader-percent');
        const barFill = document.getElementById('loader-bar');
        const d = Math.min(99, Math.floor(fakeProgress));
        if (percentSpan) percentSpan.innerText = d + '%';
        if (barFill) barFill.style.width = d + '%';
    }
}

function finishLoading() {
    const loader = document.getElementById('loader');
    if (!loader || loader.classList.contains('hidden')) return;

    if (loadingInterval) { clearInterval(loadingInterval); loadingInterval = null; }

    const percentSpan = document.getElementById('loader-percent');
    const barFill = document.getElementById('loader-bar');
    if (percentSpan) percentSpan.innerText = '100%';
    if (barFill) barFill.style.width = '100%';

    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => { loader.style.display = 'none'; }, 400);
    }, 100);
}
