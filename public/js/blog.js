// Version: 2026-05-03_1410
const blogs = [
    {
        img: "../public/img/blog/Teknofest2025.jpeg",
        title: { en: "2025 TEKNOFEST International UAV Finalist", tr: "2025 TEKNOFEST Uluslararası İHA Finalisti" },
        date: { en: "Oct 17, 2025", tr: "17 Eki, 2025" },
        text: {
            en: "Our team successfully completed an autonomous infinity-pattern flight and precision payload drops onto triangular and hexagonal targets during the international TEKNOFEST competition.",
            tr: "Takımımız uluslararası TEKNOFEST yarışmasında otonom sonsuzluk rotası uçuşunu ve üçgen/altıgen hedeflere yük bırakmasını başarıyla tamamladı."
        },
        link: "blog-detail.html?id=Teknofest2025",
        category: { en: "UAV & Autonomous Systems", tr: "İHA ve Otonom Sistemler" }
    },
    {
        img: "../public/img/blog/Teknofest2024.jpeg",
        title: { en: "2024 TEKNOFEST International UAV Finalist", tr: "2024 TEKNOFEST Uluslararası İHA Finalisti" },
        date: { en: "Oct 15, 2024", tr: "15 Eki, 2024" },
        text: {
            en: "Our finalist journey at TEKNOFEST 2024 featuring a coordinated fixed-wing and rotary-wing UAV mission with autonomous anomaly detection and neutralization.",
            tr: "TEKNOFEST 2024'te sabit ve döner kanatlı İHA asenkron görevi ile otonom anomali tespiti ve hedef imha operasyonu finalist deneyimimiz."
        },
        link: "blog-detail.html?id=Teknofest2024",
        category: { en: "UAV & Autonomous Systems", tr: "İHA ve Otonom Sistemler" }
    },
    {
        img: "../public/img/blog/tulpars2025.png",
        title: { en: "Tulpars Teknofest 2025", tr: "Tulpars Teknofest 2025" },
        date: { en: "Nov 12, 2025", tr: "12 Kas, 2025" },
        text: {
            en: "How autonomous navigation and sensor fusion principles from industrial robotics shape modern UAV operations.",
            tr: "Endüstriyel robotikteki otonom navigasyon ve sensör füzyonu ilkelerinin modern İHA operasyonlarını nasıl şekillendirdiği."
        },
        link: "blog-detail.html?id=tulpars",
        category: { en: "UAV & Automation Systems", tr: "İHA ve Otomasyon Sistemleri" }
    },
    {
        img: "../public/img/blog/FOTO1.jpeg",
        title: { en: "Kapsül Award Ceremony", tr: "Kapsül Ödül Töreni" },
        date: { en: "Jan 10, 2026", tr: "10 Oca, 2026" },
        text: { en: "Our TEKNOFEST 2025 achievements were honored at the Kapsül Technology Platform event.", tr: "Kapsül Teknoloji Platformu'nun düzenlediği etkinlikte, TEKNOFEST 2025 başarılarımız onurlandırıldı." },
        link: "blog-detail.html?id=kapsul_odul",
        category: { en: "Ceremony", tr: "Tören" }
    },
    {
        img: "../public/img/blog/FOTO2.jpeg",
        title: { en: "Raclab 8th Winter Camp", tr: "Raclab 8. Kış Kampı" },
        date: { en: "Feb 15, 2026", tr: "15 Şub, 2026" },
        text: { en: "We successfully completed the 8th Raclab Winter Camp, which was very productive and beneficial.", tr: "Bizim için oldukça dolu ve faydalı geçen Raclab 8.Kış Kampı'nı başarıyla tamamladık." },
        link: "blog-detail.html?id=kis_kampi",
        category: { en: "Camp", tr: "Kamp" }
    },
    {
        img: "../public/img/blog/FOTO3.jpeg",
        title: { en: "Pool Cleaning Robot Field Tests", tr: "Havuz Temizleme Robotu Saha Testleri" },
        date: { en: "Mar 05, 2026", tr: "05 Mar, 2026" },
        text: { en: "The first field tests of our pool cleaning robot were successfully carried out! 🤩🌊", tr: "Havuz temizleme robotumuzun ilk saha testleri başarıyla gerçekleştirildi! 🤩🌊" },
        link: "blog-detail.html?id=havuz_robotu",
        category: { en: "Underwater Robotics", tr: "Su Altı Robotiği" }
    },
    {
        img: "../public/img/blog/FOTO4.jpeg",
        title: { en: "RACLAB NOVA: Turkey Champions!", tr: "RACLAB NOVA: Türkiye Şampiyonu!" },
        date: { en: "July 22, 2025", tr: "22 Temmuz, 2025" },
        text: { en: "RACLAB NOVA is at the top of the TEKNOFEST 2025 Unmanned Underwater Systems Competition!", tr: "RACLAB NOVA, TEKNOFEST 2025 İnsansız Su Altı Sistemleri Yarışması'nda zirvede!" },
        link: "blog-detail.html?id=nova_sampiyon",
        category: { en: "Underwater Robotics", tr: "Su Altı Robotiği" }
    },
    {
        img: "../public/img/blog/FOTO5.jpeg",
        title: { en: "Best Team Spirit Award", tr: "En İyi Takım Ruhu Ödülü" },
        date: { en: "July 22, 2025", tr: "22 Temmuz, 2025" },
        text: { en: "Our RACLAB NOVA team won the 'Best Team Spirit' award at TEKNOFEST 2025 Mavi Vatan Istanbul!", tr: "RACLAB NOVA takımımız, Teknofest Mavi Vatan İstanbul'da 'En İyi Takım Ruhu' ödülünü kazandı!" },
        link: "blog-detail.html?id=nova_takim_ruhu",
        category: { en: "Underwater Robotics", tr: "Su Altı Robotiği" }
    },
    {
        img: "../public/img/blog/FOTO6.jpg",
        title: { en: "Nova Team Test Day", tr: "Nova Takımı Test Günü" },
        date: { en: "May 01, 2026", tr: "01 May, 2026" },
        text: { en: "Another exciting test day with the Nova team in a real marine environment!", tr: "Nova takımı ile heyecan dolu bir test günü daha, gerçek deniz ortamında test ettik!" },
        link: "blog-detail.html?id=nova_test_gunu",
        category: { en: "Underwater Robotics", tr: "Su Altı Robotiği" }
    },
];

const display = document.getElementById("blogCardDisplay");
let currentIndex = 3;

// ─── Mobile detection ────────────────────────────────────────────────────────
function isMobile() {
    return window.innerWidth <= 768;
}

// ─── DESKTOP: 3D Carousel ────────────────────────────────────────────────────
function updateCardPositions() {
    const cards = document.querySelectorAll(".blogCard");
    cards.forEach((card, i) => {
        const diff = i - currentIndex;
        card.style.zIndex = blogs.length - Math.abs(diff);
        card.removeAttribute('data-mobile-pos');

        if (diff === 0) {
            card.style.transform = `translateX(-50%) translateZ(0px) scale(1)`;
            card.style.opacity = 1;
            card.style.cursor = 'default';
            card.style.pointerEvents = 'auto';
            card.style.display = 'flex';
        } else if (diff < 0) {
            card.style.transform = `translateX(${diff * 60 - 50}%) translateZ(${diff * -50}px) scale(${1 + diff * 0.1}) rotateY(15deg)`;
            card.style.opacity = 0.5;
            card.style.cursor = 'pointer';
            card.style.pointerEvents = 'auto';
            card.style.display = 'flex';
        } else {
            card.style.transform = `translateX(${diff * 60 - 50}%) translateZ(${diff * -50}px) scale(${1 - diff * 0.1}) rotateY(-15deg)`;
            card.style.opacity = 0.5;
            card.style.cursor = 'pointer';
            card.style.pointerEvents = 'auto';
            card.style.display = 'flex';
        }
    });
}

// ─── MOBILE: Prev / Active / Next Slider ────────────────────────────────────
function updateMobileSlider() {
    const cards = document.querySelectorAll(".blogCard");
    const prev = (currentIndex - 1 + blogs.length) % blogs.length;
    const next = (currentIndex + 1) % blogs.length;

    cards.forEach((card, i) => {
        // Reset inline styles to let CSS take over
        card.style.transform = '';
        card.style.opacity = '';
        card.style.cursor = '';
        card.style.pointerEvents = '';
        card.style.zIndex = '';
        card.style.display = '';

        if (i === currentIndex) {
            card.setAttribute('data-mobile-pos', 'active');
        } else if (i === prev) {
            card.setAttribute('data-mobile-pos', 'prev');
        } else if (i === next) {
            card.setAttribute('data-mobile-pos', 'next');
        } else {
            card.setAttribute('data-mobile-pos', 'hidden');
        }
    });
}

// ─── Mobile nav dots & arrows ────────────────────────────────────────────────
function ensureMobileNav() {
    if (document.getElementById('blog-mobile-nav')) return;

    const nav = document.createElement('div');
    nav.id = 'blog-mobile-nav';
    nav.className = 'blog-mobile-nav';
    nav.innerHTML = `
        <button class="blog-mobile-btn" id="blogPrevBtn" aria-label="Previous post">
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <span class="blog-mobile-dots" id="blogDots"></span>
        <button class="blog-mobile-btn" id="blogNextBtn" aria-label="Next post">
            <i class="fa-solid fa-chevron-right"></i>
        </button>
    `;

    const container = document.querySelector('.blogContainer');
    if (container) container.appendChild(nav);

    document.getElementById('blogPrevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + blogs.length) % blogs.length;
        updateMobileSlider();
        updateDots();
    });
    document.getElementById('blogNextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % blogs.length;
        updateMobileSlider();
        updateDots();
    });
}

function removeMobileNav() {
    const nav = document.getElementById('blog-mobile-nav');
    if (nav) nav.remove();
}

function updateDots() {
    const dotsEl = document.getElementById('blogDots');
    if (!dotsEl) return;
    dotsEl.innerHTML = blogs.map((_, i) =>
        `<span class="blog-dot${i === currentIndex ? ' active' : ''}"></span>`
    ).join('');
}

// ─── Touch / Swipe support ───────────────────────────────────────────────────
let touchStartX = 0;

function initTouchSwipe() {
    display.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    display.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) {
                currentIndex = (currentIndex + 1) % blogs.length;
            } else {
                currentIndex = (currentIndex - 1 + blogs.length) % blogs.length;
            }
            if (isMobile()) {
                updateMobileSlider();
                updateDots();
            } else {
                updateCardPositions();
            }
        }
    }, { passive: true });
}

// ─── Unified render ──────────────────────────────────────────────────────────
function renderBlogCards() {
    display.innerHTML = '';
    const lang = (typeof I18N !== 'undefined' ? I18N.currentLang : localStorage.getItem('raclab_lang')) || 'en';
    const readMoreText = lang === 'en' ? 'Read More' : 'Devamını Oku';

    blogs.forEach((blog, index) => {
        const div = document.createElement("div");
        div.classList.add("blogCard");
        div.innerHTML = `
            <div class="blogImageWrapper">
                <img src="${blog.img}" alt="${blog.title[lang]}">
                <div class="imageOverlay"></div>
                <span class="categoryBadge">${blog.category[lang]}</span>
            </div>
            <div class="blogContent">
                <h3 class="blogName">${blog.title[lang]}</h3>
                <small class="blogDate"><i class="fa-regular fa-calendar"></i> ${blog.date[lang]}</small>
                <p class="blogText">${blog.text[lang]}</p>
                <a class="readMore" href="${blog.link}">${readMoreText} <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        `;

        div.addEventListener('click', (e) => {
            if (e.target.closest('.readMore')) return;
            if (isMobile()) {
                const pos = div.getAttribute('data-mobile-pos');
                if (pos === 'prev') {
                    currentIndex = (currentIndex - 1 + blogs.length) % blogs.length;
                    updateMobileSlider();
                    updateDots();
                } else if (pos === 'next') {
                    currentIndex = (currentIndex + 1) % blogs.length;
                    updateMobileSlider();
                    updateDots();
                }
            } else {
                currentIndex = index;
                updateCardPositions();
            }
        });

        display.appendChild(div);
    });

    if (isMobile()) {
        ensureMobileNav();
        updateMobileSlider();
        updateDots();
    } else {
        removeMobileNav();
        updateCardPositions();
    }
}

// ─── Auto-advance (desktop only) ─────────────────────────────────────────────
setInterval(() => {
    if (!isMobile()) {
        currentIndex = (currentIndex + 1) % blogs.length;
        updateCardPositions();
    }
}, 10000);

// ─── Handle resize ───────────────────────────────────────────────────────────
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderBlogCards, 200);
});

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderBlogCards();
    initTouchSwipe();
});

document.addEventListener('languageChanged', renderBlogCards);
