(function () {
    'use strict';

    const milestones = [
        {
            year: '2023',
            cards: [
                {
                    title: { en: 'TEKNOFEST 2023', tr: 'TEKNOFEST 2023' },
                    desc: {
                        en: 'First major competition experience. The team successfully demonstrated basic autonomous waypoint navigation and camera-based target detection with our first fixed-wing platform.',
                        tr: 'İlk büyük yarışma deneyimi. Takımımız ilk sabit kanat platformu ile temel otonom nokta navigasyonu ve kamera tabanlı hedef tespitini başarıyla sergiledi.'
                    },
                    img: '' // e.g. 'public/img/timeline/tf2023.jpg'
                },
                {
                    title: { en: 'AI & Sensor Fusion', tr: 'Yapay Zeka & Sensör Füzyonu' },
                    desc: {
                        en: 'YOLO-based real-time object detection integrated with IMU sensor fusion, achieving sub-metre target localisation accuracy during flight trials.',
                        tr: 'YOLO tabanlı gerçek zamanlı nesne tespiti IMU sensör füzyonu ile entegre edilerek uçuş denemelerinde metre altı hedef konumlama doğruluğuna ulaşıldı.'
                    },
                    img: ''
                }
            ]
        },
        {
            year: '2024',
            cards: [
                {
                    title: { en: 'TEKNOFEST 2024 – AKİN', tr: 'TEKNOFEST 2024 – AKİN' },
                    desc: {
                        en: 'Full autonomy architecture: SLAM navigation, custom C++ Ground Control System, and payload release mechanism. Competed with the AKİN platform and ranked in the top positions.',
                        tr: 'Tam otonomi mimarisi: SLAM navigasyon, özel C++ Yer Kontrol Sistemi ve faydalı yük bırakma sistemi. AKİN platformuyla yarışarak üst sıralarda yer alındı.'
                    },
                    img: ''
                },
                {
                    title: { en: 'ALP UAV Unveiled', tr: 'ALP İHA Tanıtıldı' },
                    desc: {
                        en: 'ALP, a custom carbon-fibre quadcopter designed for hover, surveillance, and reconnaissance missions was introduced to the team\'s fleet.',
                        tr: 'Gözlem ve keşif görevleri için tasarlanmış özel karbon fiber gövdeli ALP quadcopter İHA tanıtıldı.'
                    },
                    img: ''
                }
            ]
        },
        {
            year: '2025',
            cards: [
                {
                    title: { en: 'SUAS 2026 Preparations', tr: 'SUAS 2026 Çalışmaları' },
                    desc: {
                        en: 'Full-scale preparations for SUAS 2026: ODLC pipeline, Interop server integration, advanced path planning, and obstacle-avoidance systems.',
                        tr: 'SUAS 2026 uluslararası yarışması için tam kapsamlı hazırlıklar: ODLC boru hattı, Interop sunucu entegrasyonu, gelişmiş yol planlama ve engel tanıma sistemleri.'
                    },
                    img: ''
                }
            ]
        },
        {
            year: '2026',
            cards: [
                {
                    title: { en: 'Future — Beyond Limits', tr: 'Gelecek — Sınırların Ötesi' },
                    desc: {
                        en: 'Expanding research into swarm intelligence, edge NPU AI inference, and real-world search-and-rescue operations. A new chapter begins.',
                        tr: 'Sürü zekası, uç NPU yapay zeka çıkarımları ve gerçek dünya arama-kurtarma operasyonları. Yeni bölüm başlıyor.'
                    },
                    img: ''
                }
            ]
        }
    ];

    let canvas, ctx, svg;
    let particles = [];
    const particleCount = 150;

    class Particle {
        constructor() { this.reset(); }
        
        reset() {
            this.x = canvas.width / 2 + (Math.random() - 0.5) * 12;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 0.5;
            this.speed = 1.5 + Math.random() * 4; 
            this.alpha = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = -10;
                this.x = canvas.width / 2 + (Math.random() - 0.5) * 12;
            }
        }
        
        draw() {
            if(!ctx) return;
            ctx.beginPath();
            const wobbleX = this.x + Math.sin(this.y * 0.02 + Date.now() * 0.002) * 15;
            ctx.arc(wobbleX, this.y, this.size, 0, Math.PI * 2);
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
        if(!ctx || !canvas) return;
        ctx.fillStyle = 'rgba(3, 3, 5, 0.15)'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => { p.update(); p.draw(); });

        requestAnimationFrame(animate);
    }

    function buildDOM() {
        const container = document.getElementById('timeline');
        if (!container) return;

        svg = document.getElementById('svg-layer');

        // Setup Canvas
        canvas = document.createElement('canvas');
        canvas.width = svg.clientWidth;
        canvas.height = container.scrollHeight;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '0';
        canvas.style.pointerEvents = 'none';
        container.insertBefore(canvas, container.firstChild);
        ctx = canvas.getContext('2d');

        // Build HTML
        milestones.forEach(m => {
            const section = document.createElement('div');
            section.className = 'timeline-section';
            section.id = 'sec-' + m.year;
            
            let cardsHTML = '';
            m.cards.forEach(c => {
                let imgHTML = '';
                if(c.img) {
                    imgHTML = `<img src="${c.img}" alt="Image" style="display:block;">`;
                } else {
                    imgHTML = `<span>[Fotoğraf Alanı]</span>`;
                }

                cardsHTML += `
                    <div class="card">
                        <div class="card-accent"></div>
                        <div class="card-img-placeholder">
                            ${imgHTML}
                        </div>
                        <h3 data-tl-en="${c.title.en}" data-tl-tr="${c.title.tr}">${c.title.en}</h3>
                        <p data-tl-en="${c.desc.en}" data-tl-tr="${c.desc.tr}">${c.desc.en}</p>
                    </div>
                `;
            });

            section.innerHTML = `
                <div class="node-trigger">
                    <div class="node-ring"></div>
                    <div class="node-core"></div>
                    <span>${m.year}</span>
                </div>
                <div class="cards-wrapper">
                    ${cardsHTML}
                </div>
            `;

            container.appendChild(section);
        });

        // Initialize animations after DOM is built
        initParticles();
        animate();
        bindEvents();
    }

    function bindEvents() {
        const sections = document.querySelectorAll('.timeline-section');
        
        // HOVER ACTIVATE
        sections.forEach(section => {
            section.addEventListener('mouseenter', () => {
                section.classList.add('node-active');
                drawBranches(section.id);
            });

            section.addEventListener('mouseleave', () => {
                section.classList.remove('node-active');
                removeBranches(section.id);
            });
        });

        // SCROLL ACTIVATE (Intersection Observer)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6 // Yıl düğümü ekrana %60 girdiğinde aktif olsun
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('node-active');
                    drawBranches(entry.target.id);
                } else {
                    // Ekranda değilken Hover'da değilsek active sil
                    if(!entry.target.matches(':hover')) {
                        entry.target.classList.remove('node-active');
                        removeBranches(entry.target.id);
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        // RESIZE
        window.addEventListener('resize', () => {
            if(canvas && svg) {
                const timeline = document.getElementById('timeline');
                canvas.width = svg.clientWidth;
                canvas.height = timeline.scrollHeight;
                
                const activeSection = document.querySelector('.timeline-section.node-active');
                if (activeSection) {
                    drawBranches(activeSection.id);
                }
            }
        });
    }

    function drawBranches(nodeId) {
        removeBranches(nodeId); 
        
        const branchesContainer = document.getElementById('branches');
        const section = document.getElementById(nodeId);
        if(!section || !branchesContainer) return;

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

            // Katı Kırmızı Çizgi
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", pathData);
            path.setAttribute("class", "branch-line");
            path.setAttribute("data-node", nodeId);
            branchesContainer.appendChild(path);

            // Veri/Enerji Akışı
            const flowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            flowPath.setAttribute("d", pathData);
            flowPath.setAttribute("class", "branch-data-flow");
            flowPath.setAttribute("data-node", nodeId);
            branchesContainer.appendChild(flowPath);

            requestAnimationFrame(() => {
                setTimeout(() => {
                    path.classList.add('drawn');
                }, index * 100); 
            });
        });
    }

    function removeBranches(nodeId) {
        const branchesContainer = document.getElementById('branches');
        if(!branchesContainer) return;
        const paths = branchesContainer.querySelectorAll(`[data-node="${nodeId}"]`);
        paths.forEach(p => p.remove());
    }

    // i18n
    function applyLang(lang) {
        const container = document.getElementById('timeline');
        if (!container) return;
        container.querySelectorAll('[data-tl-en]').forEach(function (el) {
            el.textContent = el.getAttribute('data-tl-' + lang) || el.getAttribute('data-tl-en');
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        buildDOM();
        // apply language if already set
        const htmlLang = document.documentElement.lang;
        if(htmlLang === 'tr') applyLang('tr');
    });

    document.addEventListener('langChange', function (e) {
        if (e.detail && e.detail.lang) applyLang(e.detail.lang);
    });

})();