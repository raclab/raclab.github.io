// viewer-3d.js
// Production-ready Three.js 3D Model Viewer using Cloudflare R2 CDN

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/DRACOLoader.js';
import { ThreeMFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/3MFLoader.js';

// Setup Scene, Camera, Renderer
const container = document.getElementById('viewer') || document.body;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a1a); // Cyberpunk/dark theme base

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
container.appendChild(renderer.domElement);

// Setup Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.0;

// Setup Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// Setup Loaders
const loadingManager = new THREE.LoadingManager();
loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
    console.log(`Loading file: ${url}.\nLoaded ${itemsLoaded} of ${itemsTotal} files.`);
};

// DRACO Decoder for compressed GLB models (Performance Best Practice)
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

const gltfLoader = new GLTFLoader(loadingManager);
gltfLoader.setDRACOLoader(dracoLoader);

const threeMFLoader = new ThreeMFLoader(loadingManager);

// Dictionary to keep track of loaded models
const loadedModels = {};

/**
 * Cleanly load a model and add it to the scene
 * @param {string} filename - The model filename (e.g., 'drone.glb', 'merkut-flans.3mf')
 * @param {Object} position - {x, y, z}
 */
export function loadModel(filename, position = { x: 0, y: 0, z: 0 }) {
    const url = `../public/models/${filename}`;
    const extension = filename.split('.').pop().toLowerCase();

    if (extension === 'glb' || extension === 'gltf') {
        gltfLoader.load(url, (gltf) => {
            const model = gltf.scene;
            model.position.set(position.x, position.y, position.z);
            scene.add(model);
            loadedModels[filename] = model;
            centerModel(model);
        }, undefined, (error) => {
            console.error(`Error loading ${filename}:`, error);
        });
    } else if (extension === '3mf') {
        threeMFLoader.load(url, (model) => {
            model.position.set(position.x, position.y, position.z);
            scene.add(model);
            loadedModels[filename] = model;
            centerModel(model);
        }, undefined, (error) => {
            console.error(`Error loading ${filename}:`, error);
        });
    } else {
        console.warn(`Unsupported model format: ${extension}`);
    }
}

/**
 * Utility to center and scale a model automatically
 */
function centerModel(model) {
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2));
    cameraZ *= 2.5; // zoom out a little
    
    camera.position.z = cameraZ;

    const minZ = box.min.z;
    const cameraToFarEdge = (minZ < 0) ? -minZ + cameraZ : cameraZ - minZ;
    camera.far = cameraToFarEdge * 3;
    camera.updateProjectionMatrix();

    model.position.x = -center.x;
    model.position.y = -center.y;
    model.position.z = -center.z;
}

// Ensure proper handling of multiple models
const urlParams = new URLSearchParams(window.location.search);
const modelParam = urlParams.get('models'); // e.g. ?models=drone.glb,tank.glb

if (modelParam) {
    const modelsToLoad = modelParam.split(',');
    modelsToLoad.forEach((model, index) => {
        // Space them out along the X axis if multiple
        loadModel(model.trim(), { x: index * 2, y: 0, z: 0 });
    });
} else {
    // Default fallback loading
    loadModel('merkut-flans.3mf');
}

// Window resize handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
