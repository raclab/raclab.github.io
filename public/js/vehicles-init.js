// vehicles-init.js
// Lazy per-category model loading — models are only created after category selection.

import { createModelViewer, showLoader } from './vehicles.js';

// ─── UAV Models ───────────────────────────────────────────────────────────────
function loadUAVModels() {
    createModelViewer('canvas1', '../public/models/tulpars-drone.glb', 'Tulpars', 'tulpars', {
        "orientation": "0deg -90deg 0deg",
        "camera-orbit": "45deg 75deg 105%"
    });
    createModelViewer('canvas2', '../public/models/DonerKanat2024.glb', 'Döner Kanat 2024', 'donerkanat2024', {
        "orientation": "0deg 0deg 0deg",
        "camera-orbit": "45deg 75deg 105%"
    });
    createModelViewer('canvas3', '../public/models/SabitKanat2024.glb', 'Sabit Kanat 2024', 'sabitkanat2024', {
        "orientation": "0deg 0deg 0deg",
        "camera-orbit": "45deg 75deg 105%"
    });
    createModelViewer('canvas4', '../public/models/Serbest2025.glb', 'Phoenix 2025', 'phoenix2025', {
        "orientation": "0deg -90deg 0deg",
        "camera-orbit": "45deg 75deg 105%"
    });
    createModelViewer('canvas-stancona', '../public/models/Stancona_drone.glb', 'Stancona', 'stancona', {
        "orientation": "0deg 0deg 0deg",
        "camera-orbit": "45deg 75deg 105%"
    });
}

// ─── Underwater Models ────────────────────────────────────────────────────────
function loadUnderwaterModels() {
    createModelViewer('canvas5', '../public/models/warTortle.glb', 'War Tortle', 'warTortle', {
        "orientation": "90deg 0deg 0deg",
        "camera-orbit": "45deg 75deg 105%"
    });
    createModelViewer('canvas6', '../public/models/blastoise.glb', 'Blastoise', 'blastoise', {
        "orientation": "0deg -90deg 0deg",
        "camera-orbit": "45deg 75deg 105%"
    });
    createModelViewer('canvas7', '../public/models/squirtle.glb', 'Squirtle', 'squirtle', {
        "orientation": "180deg -90deg 0deg",
        "camera-orbit": "45deg 75deg 105%"
    });
    createModelViewer('canvas8', '../public/models/barakuda.glb', 'Barakuda', 'barakuda', {
        "orientation": "0deg 0deg 0deg",
        "camera-orbit": "45deg 75deg 105%"
    });
}

// ─── Expose to global scope for category selector (inline script) ─────────────
window.vehiclesInit = { loadUAVModels, loadUnderwaterModels, showLoader };

// ─── Auto-load models if returning to page with category already selected ────
const savedCat = sessionStorage.getItem('veh_cat');
if (savedCat === 'uav') {
    loadUAVModels();
} else if (savedCat === 'underwater') {
    loadUnderwaterModels();
}

// ─── Navigate to detail page when a vehicle title is clicked ─────────────────
document.querySelectorAll('.about .text h1[data-vehicle]').forEach(title => {
    title.addEventListener('click', () => {
        const vehicleKey = title.getAttribute('data-vehicle');
        window.location.href = `vehicles-details.html?model=${vehicleKey}`;
    });
});
