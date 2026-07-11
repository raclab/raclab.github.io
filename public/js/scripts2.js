document.addEventListener('DOMContentLoaded', () => {
    const svg = document.getElementById('svg-layer');
    const timeline = document.getElementById('timeline');
    const sections = document.querySelectorAll('.timeline-section');

    // --- 1. SENİN İSTEDİĞİN CANVAS PARTİKÜL MANTIGI ---
    const canvas = document.createElement('canvas');
    canvas.width = svg.clientWidth;
    canvas.height = timeline.scrollHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
    timeline.insertBefore(canvas, timeline.firstChild);

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 150; // Senin belirlediğin partikül sayısı

    class Particle {
        constructor() { this.reset(); }
        
        reset() {
            // Tam merkezde yoğunlaşan, dar bir sütun (12px genişliğinde sapma)
            this.x = canvas.width / 2 + (Math.random() - 0.5) * 12;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 0.5;
            this.speed = 1.5 + Math.random() * 4; // Aşağı doğru akış
            this.alpha = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.y += this.speed;
            if (this.y > canvas.height) this.reset();
        }
        
        draw() {
            ctx.beginPath();
            // Sinüs dalgası ile o efsanevi sağa-sola salınım efekti
            const wobbleX = this.x + Math.sin(this.y * 0.02 + Date.now() * 0.002) * 15;
            ctx.arc(wobbleX, this.y, this.size, 0, Math.PI * 2);
            
            // Neon Kırmızı Renk Paletine uyarlandı
            ctx.fillStyle = `rgba(255, 42, 42, ${this.alpha})`;
            ctx.shadowBlur = 20;
            ctx.shadowColor = 'rgba(255, 42, 42, 0.6)'; 
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    }

    function animate() {
        // clearRect yerine senin istediğin "kuyruk/iz bırakma" efekti!
        // rgba(0, 0, 0) rengi siyah
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => { p.update(); p.draw(); });

        requestAnimationFrame(animate);
    }

    // Partikülleri başlat
    initParticles();
    animate();

    // --- 2. KARTLARA GİDEN KATI ÇİZGİLER (HOVER İLE ÇİZİLİR) ---
    sections.forEach(section => {
        // Kartlara index ata ve hover eventlerini ekle
        const cards = section.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.dataset.cardIndex = index;
            
            card.addEventListener('mouseenter', () => {
                const lines = document.querySelectorAll(`.branch-line[data-node="${section.id}"][data-card-index="${index}"]`);
                lines.forEach(l => l.classList.add('glow'));
                
                const flows = document.querySelectorAll(`.branch-data-flow[data-node="${section.id}"][data-card-index="${index}"]`);
                flows.forEach(f => f.classList.add('glow'));
            });
            
            card.addEventListener('mouseleave', () => {
                const lines = document.querySelectorAll(`.branch-line[data-node="${section.id}"][data-card-index="${index}"]`);
                lines.forEach(l => l.classList.remove('glow'));
                
                const flows = document.querySelectorAll(`.branch-data-flow[data-node="${section.id}"][data-card-index="${index}"]`);
                flows.forEach(f => f.classList.remove('glow'));
            });
        });

        section.addEventListener('mouseenter', () => {
            section.classList.add('node-active');
            drawBranches(section.id);
        });

        section.addEventListener('mouseleave', () => {
            section.classList.remove('node-active');
            removeBranches(section.id);
        });
    });

    function drawBranches(nodeId) {
        removeBranches(nodeId); 
        
        const branchesContainer = document.getElementById('branches');
        const section = document.getElementById(nodeId);
        const trigger = section.querySelector('.node-trigger');
        const cards = section.querySelectorAll('.card');
        
        const svgRect = svg.getBoundingClientRect();
        const tRect = trigger.getBoundingClientRect();

        const startX = tRect.left + tRect.width / 2 - svgRect.left;
        const startY = tRect.top + tRect.height - svgRect.top;

        cards.forEach((card, index) => {
            const cRect = card.getBoundingClientRect();
            const endX = cRect.left + cRect.width / 2 - svgRect.left;
            const endY = cRect.top - svgRect.top;

            const cp1Y = startY + (endY - startY) * 0.4;
            const cp2Y = startY + (endY - startY) * 0.8;
            const pathData = `M ${startX} ${startY} C ${startX} ${cp1Y}, ${endX} ${cp2Y}, ${endX} ${endY}`;

            // Katı Kırmızı Çizgi (Yavaşça çizilir)
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", pathData);
            path.setAttribute("class", "branch-line");
            path.setAttribute("data-node", nodeId);
            path.setAttribute("data-card-index", index);
            branchesContainer.appendChild(path);

            // Üstünden Kayan Veri/Enerji Akışı
            const flowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            flowPath.setAttribute("d", pathData);
            flowPath.setAttribute("class", "branch-data-flow");
            flowPath.setAttribute("data-node", nodeId);
            flowPath.setAttribute("data-card-index", index);
            branchesContainer.appendChild(flowPath);

            // Çizilme animasyonunu başlat
            requestAnimationFrame(() => {
                setTimeout(() => {
                    path.classList.add('drawn');
                }, index * 100); 
            });
        });
    }

    function removeBranches(nodeId) {
        const branchesContainer = document.getElementById('branches');
        const paths = branchesContainer.querySelectorAll(`[data-node="${nodeId}"]`);
        paths.forEach(p => p.remove());
    }

    // --- YENİDEN BOYUTLANDIRMA (RESIZE) ---
    window.addEventListener('resize', () => {
        canvas.width = svg.clientWidth;
        canvas.height = timeline.scrollHeight;
        
        const activeSection = document.querySelector('.timeline-section.node-active');
        if (activeSection) {
            drawBranches(activeSection.id);
        }
    });
});