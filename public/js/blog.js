// Version: 2026-05-03_1410
const blogs = [
{
        img: "../public/img/blog/insta_DduQfsciNoG.png",
        title: { en: "🏆 TEKNOFEST UGV Rover — 1st Place Autonomous Track, 4th Overall!", tr: "🏆 TEKNOFEST UGV Rover — Otonom Parkur 1.si, Genel 4.sü!" },
        date: { en: "Sep 25, 2026", tr: "25 Eyl, 2026" },
        text: { en: "Kapsül RACLAB ROVER team achieved the highest score in history on the Autonomous Track at the TEKNOFEST Unmanned Ground Vehicle Competition, securing 1st Place and the Best Design Award.", tr: "Kapsül RACLAB ROVER takımı, TEKNOFEST İnsansız Kara Aracı Yarışması'nda Otonom Parkur'da yarışma tarihinin en yüksek puanını elde ederek 1. oldu ve En İyi Tasarım Ödülü'nü kazandı." },
        link: "#news",
        category: { en: "Competition", tr: "Yarışma" }
    },
    {
        img: "../public/img/blog/insta_DdsD4CQinGw.png",
        title: { en: "🌍 9th Place in the World at SUAS 2026! (RACLAB UAV)", tr: "🌍 SUAS 2026'da DÜNYA 9.'SUYUZ! (RACLAB İHA)" },
        date: { en: "Sep 24, 2026", tr: "24 Eyl, 2026" },
        text: { en: "Kapsül RACLAB UAV Team successfully completed all challenging missions with our autonomous UAV 'ŞAHİ' at the prestigious SUAS 2026 competition held in the USA, ranking 9th worldwide.", tr: "Kapsül RACLAB İHA Takımı, Amerika'da düzenlenen prestijli SUAS 2026 yarışmasında otonom İHA'mız 'ŞAHİ' ile tüm zorlu görevleri başarıyla tamamlayarak Dünya 9.'su oldu." },
        link: "#news",
        category: { en: "Competition", tr: "Yarışma" }
    },
    {
        img: "../public/img/blog/insta_DdWt-mADDKT.png",
        title: { en: "🌊 TEKNOFEST Blue Homeland — Most Original Design (NOVA)", tr: "🌊 TEKNOFEST Mavi Vatan — En Özgün Tasarım Ödülü (NOVA)" },
        date: { en: "Sep 16, 2026", tr: "16 Eyl, 2026" },
        text: { en: "Kapsül RACLAB NOVA was awarded the Most Original Design Award at the TEKNOFEST Unmanned Underwater Systems (Blue Homeland) Competition organized by ASELSAN.", tr: "Kapsül RACLAB NOVA, ASELSAN yürütücülüğünde düzenlenen TEKNOFEST İnsansız Su Altı Sistemleri (Mavi Vatan) Yarışması'nda En Özgün Tasarım Ödülü'ne layık görüldü." },
        link: "#news",
        category: { en: "Competition", tr: "Yarışma" }
    },
        {
        img: "../public/img/blog/robosub_2026.jpg",
        title: { en: "🌊 RoboSub 2026 — RACLAB NOVA in California!", tr: "🌊 RoboSub 2026 — RACLAB NOVA Kaliforniya'da!" },
        date: { en: "Jul 11, 2026", tr: "11 Tem, 2026" },
        text: { en: "RACLAB NOVA competed in the 29th International RoboSub AUV Competition in Irvine, California — reaching the semifinals among 58 finalist teams from 9 countries!", tr: "RACLAB NOVA, 29. Uluslararası RoboSub Su Altı Araç Yarışması'nda Irvine, Kaliforniya'da 9 ülkeden 58 finalist takım arasından yarı finale yükseldi!" },
        link: "robosub_2026.html",
        category: { en: "AUV Competition", tr: "Su Altı Araç Yarışması" }
    },
    {
        img: "../public/img/blog/ideathon_2026.jpg",
        title: { en: "🥈 Ideathon Konya 2026 — 2nd Place!", tr: "🥈 Ideathon Konya 2026 — İkincilik!" },
        date: { en: "Apr 26, 2026", tr: "26 Nis, 2026" },
        text: { en: "RACLAB members Seher Tiryaki, Ece Erkmen and Hasan Hüseyin Tiryaki won 2nd place at Ideathon Konya, organized by Emlak Konut GYO on 'Smart Vertical Transportation & Integrated Construction Robotics'.", tr: "RACLAB ekibinden Seher Tiryaki, Ece Erkmen ve Hasan Hüseyin Tiryaki, Emlak Konut GYO tarafından düzenlenen Ideathon Konya'da 'Akıllı Dikey Ulaşım Sistemleri' temasıyla ikincilik ödülünü kazandı!" },
        link: "ideathon_konya_2026.html",
        category: { en: "Award & Competition", tr: "Ödül ve Yarışma" }
    },
    {
        img: "../public/img/blog/FOTO3.jpeg",
        title: { en: "Pool Cleaning Robot Field Tests", tr: "Havuz Temizleme Robotu Saha Testleri" },
        date: { en: "Mar 05, 2026", tr: "05 Mar, 2026" },
        text: { en: "The first field tests of our pool cleaning robot were successfully carried out! 🤩🌊", tr: "Havuz temizleme robotumuzun ilk saha testleri başarıyla gerçekleştirildi! 🤩🌊" },
        link: "havuz_robotu.html",
        category: { en: "Underwater Robotics", tr: "Su Altı Robotiği" }
    },
    {
        img: "../public/img/blog/FOTO2.jpeg",
        title: { en: "Raclab 8th Winter Camp", tr: "Raclab 8. Kış Kampı" },
        date: { en: "Feb 15, 2026", tr: "15 Şub, 2026" },
        text: { en: "We successfully completed the 8th Raclab Winter Camp, which was very productive and beneficial.", tr: "Bizim için oldukça dolu ve faydalı geçen Raclab 8.Kış Kampı'nı başarıyla tamamladık." },
        link: "kis_kampi.html",
        category: { en: "Camp", tr: "Kamp" }
    },
    {
        img: "../public/img/blog/FOTO1.jpeg",
        title: { en: "Kapsül Award Ceremony", tr: "Kapsül Ödül Töreni" },
        date: { en: "Jan 10, 2026", tr: "10 Oca, 2026" },
        text: { en: "Our TEKNOFEST 2025 achievements were honored at the Kapsül Technology Platform event.", tr: "Kapsül Teknoloji Platformu'nun düzenlediği etkinlikte, TEKNOFEST 2025 başarılarımız onurlandırıldı." },
        link: "kapsul_odul.html",
        category: { en: "Ceremony", tr: "Tören" }
    },
    {
        img: "../public/img/blog/tulpars2025.png",
        title: { en: "Tulpars Teknofest 2025", tr: "Tulpars Teknofest 2025" },
        date: { en: "Nov 12, 2025", tr: "12 Kas, 2025" },
        text: {
            en: "How autonomous navigation and sensor fusion principles from industrial robotics shape modern UAV operations.",
            tr: "Endüstriyel robotikteki otonom navigasyon ve sensör füzyonu ilkelerinin modern İHA operasyonlarını nasıl şekillendirdiği."
        },
        link: "tulpars.html",
        category: { en: "UAV & Automation Systems", tr: "İHA ve Otomasyon Sistemleri" }
    },
    {
        img: "../public/img/blog/Teknofest2025.jpeg",
        title: { en: "2025 TEKNOFEST International UAV Finalist", tr: "2025 TEKNOFEST Uluslararası İHA Finalisti" },
        date: { en: "Oct 17, 2025", tr: "17 Eki, 2025" },
        text: {
            en: "Our team successfully completed an autonomous infinity-pattern flight and precision payload drops onto triangular and hexagonal targets during the international TEKNOFEST competition.",
            tr: "Takımımız uluslararası TEKNOFEST yarışmasında otonom sonsuzluk rotası uçuşunu ve üçgen/altıgen hedeflere yük bırakmasını başarıyla tamamladı."
        },
        link: "Teknofest2025.html",
        category: { en: "UAV & Autonomous Systems", tr: "İHA ve Otonom Sistemler" }
    },
    {
        img: "../public/img/blog/ideathon_2026.jpg",
        title: { en: "RACLAB NOVA: Turkey Champions!", tr: "RACLAB NOVA: Türkiye Şampiyonu!" },
        date: { en: "July 22, 2025", tr: "22 Temmuz, 2025" },
        text: { en: "RACLAB NOVA is at the top of the TEKNOFEST 2025 Unmanned Underwater Systems Competition!", tr: "RACLAB NOVA, TEKNOFEST 2025 İnsansız Su Altı Sistemleri Yarışması'nda zirvede!" },
        link: "nova_sampiyon.html",
        category: { en: "Underwater Robotics", tr: "Su Altı Robotiği" }
    },
    {
        img: "../public/img/blog/FOTO5.jpeg",
        title: { en: "Best Team Spirit Award", tr: "En İyi Takım Ruhu Ödülü" },
        date: { en: "July 22, 2025", tr: "22 Temmuz, 2025" },
        text: { en: "Our RACLAB NOVA team won the 'Best Team Spirit' award at TEKNOFEST 2025 Mavi Vatan Istanbul!", tr: "RACLAB NOVA takımımız, Teknofest Mavi Vatan İstanbul'da 'En İyi Takım Ruhu' ödülünü kazandı!" },
        link: "nova_takim_ruhu.html",
        category: { en: "Underwater Robotics", tr: "Su Altı Robotiği" }
    },
    {
        img: "../public/img/blog/Teknofest2024.jpeg",
        title: { en: "2024 TEKNOFEST International UAV Finalist", tr: "2024 TEKNOFEST Uluslararası İHA Finalisti" },
        date: { en: "Oct 15, 2024", tr: "15 Eki, 2024" },
        text: {
            en: "Our finalist journey at TEKNOFEST 2024 featuring a coordinated fixed-wing and rotary-wing UAV mission with autonomous anomaly detection and neutralization.",
            tr: "TEKNOFEST 2024'te sabit ve döner kanatlı İHA asenkron görevi ile otonom anomali tespiti ve hedef imha operasyonu finalist deneyimimiz."
        },
        link: "Teknofest2024.html",
        category: { en: "UAV & Autonomous Systems", tr: "İHA ve Otonom Sistemler" }
    }
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

        const readMoreBtn = div.querySelector('.readMore');
        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', (e) => {
                if (typeof openNewsModal === 'function') {
                    e.preventDefault();
                    openNewsModal(blog.title[lang], blog.date[lang], blog.text[lang], blog.img);
                }
            });
        }

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
