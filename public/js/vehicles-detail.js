// vehicles-detail.js
// Loads vehicle detail page content based on URL query parameter and current language

const params = new URLSearchParams(window.location.search);
const key = params.get('model');

const TULPARS = {
    en: {
        'Weight': ['7300g (~16 lbs)'],
        'Dimensions': ['30.7" × 24" × 14.2"', '30.7" × 24" × 22" (with GPS)'],
        'Max Speed': ['41 mph (18.3 m/s)'],
        'Endurance': ['7 mi @ 24 mph', '45 min hovering'],
        'Propulsion': ['KDE 4215 – 465 KV', '15"×6.5" Tarot Foldable CF'],
        'Power System': ['6S8P Custom Li-Ion (800 Wh)', 'Molicel 21700-P45B'],
        'Communication': ['Wifi (2.4 GHz + 5 GHz)', 'RFD900ux (Telemetry)', 'Remote ID'],
        'Processors': ['Jetson Orin Nano 8GB', 'ESP32 Wroom S3 (Custom PCB)', 'ESP32 C3 (Payload)'],
        'Navigation': ['Pixhawk 6X', 'Here4 GPS + RTK'],
        'Software': ['Python & C++', 'Multi-Threading'],
        'Sensors': ['SIYI A8 Mini', 'Arducam IMX219']
    },
    tr: {
        'Ağırlık': ['7300g (~16 lbs)'],
        'Boyutlar': ['30.7" × 24" × 14.2"', '30.7" × 24" × 22" (GPS dahil)'],
        'Maksimum Hız': ['41 mph (18.3 m/s)'],
        'Uçuş Süresi': ['7 mil @ 24 mph', '45 dk havada kalma (hover)'],
        'İtki Sistemi': ['KDE 4215 – 465 KV', '15"×6.5" Tarot Karbon Fiber'],
        'Güç Sistemi': ['6S8P Özel Li-Ion (800 Wh)', 'Molicel 21700-P45B'],
        'Haberleşme': ['Wifi (2.4 GHz + 5 GHz)', 'RFD900ux (Telemetri)', 'Remote ID'],
        'İşlemciler': ['Jetson Orin Nano 8GB', 'ESP32 Wroom S3 (Özel PCB)', 'ESP32 C3 (Faydalı Yük)'],
        'Navigasyon': ['Pixhawk 6X', 'Here4 GPS + RTK'],
        'Yazılım': ['Python & C++', 'Çok İş Parçacıklı (Multi-Threading)'],
        'Sensörler': ['SIYI A8 Mini', 'Arducam IMX219']
    }
};

const ALP = {
    en: {
        'Weight': ['~3.1 kg (takeoff)', 'Payload: 1 kg max'],
        'Configuration': ['Quadcopter (4-rotor)', 'Carbon fiber frame'],
        'Propulsion': ['4× QA-4220 650KV Brushless', '12×3.8" APC Propeller', 'SkyWalker 45A ESC (2S–6S)'],
        'Power System': ['Turnigy 8000 mAh 4S LiPo', 'Max thrust: 2783g per motor'],
        'Endurance': ['~12 min flight time'],
        'Flight Controller': ['Pixhawk Cube Orange', 'Triple redundant IMU'],
        'Navigation': ['Here3 GPS Module', 'High-accuracy positioning'],
        'Communication': ['RFD868X Telemetry', 'TP-Link CPE510 (5 GHz, 300 Mbps)'],
        'AI & Vision': ['NVIDIA Jetson Nano', 'Raspberry Pi Camera v2', 'Real-time object detection'],
        'Software': ['Python & C++', 'Autonomous tracking & interception']
    },
    tr: {
        'Ağırlık': ['~3.1 kg (kalkış)', 'Faydalı Yük: Maksimum 1 kg'],
        'Konfigürasyon': ['Quadcopter (4 motorlu)', 'Karbon fiber gövde'],
        'İtki Sistemi': ['4× QA-4220 650KV Fırçasız', '12×3.8" APC Pervane', 'SkyWalker 45A ESC (2S–6S)'],
        'Güç Sistemi': ['Turnigy 8000 mAh 4S LiPo', 'Maksimum İtki: Motor başına 2783g'],
        'Uçuş Süresi': ['~12 dk uçuş süresi'],
        'Uçuş Kontrolcüsü': ['Pixhawk Cube Orange', 'Üçlü yedekli IMU'],
        'Navigasyon': ['Here3 GPS Modülü', 'Yüksek hassasiyetli konumlandırma'],
        'Haberleşme': ['RFD868X Telemetri', 'TP-Link CPE510 (5 GHz, 300 Mbps)'],
        'Yapay Zeka ve Görüntü İşleme': ['NVIDIA Jetson Nano', 'Raspberry Pi Camera v2', 'Gerçek zamanlı nesne tespiti'],
        'Yazılım': ['Python & C++', 'Otonom takip ve önleme']
    }
};

const AKIN = {
    en: {
        'Weight': ['3.7 kg takeoff weight', 'Payload: 1.3 kg'],
        'Configuration': ['Fixed-Wing Pusher', 'XPS foam body, carbon fiber wings'],
        'Cruise Speed': ['13 m/s (~47 km/h)'],
        'Propulsion': ['T-Motor AT3530 Long Shaft', '14×7" APC Propeller (pusher)', 'SkyWalker 60A ESC (6S)'],
        'Power System': ['JetFire 22.2V 10000mAh 50C 6S LiPo'],
        'Flight Controller': ['Pixhawk (ArduPlane firmware)', 'Mg90s Servo (wing & tail control)'],
        'Communication': ['RFD868X Long-range Telemetry', 'TP-Link CPE510 (5 GHz, 300 Mbps)', 'FrSky QX7 Remote'],
        'Navigation': ['Autonomous waypoint flight', 'GPS-based localization'],
        'AI & Vision': ['NVIDIA Jetson Nano', 'Raspberry Pi Camera v2', 'AI-based vehicle detection & tracking'],
        'Software': ['Python & C++', 'Autonomous surveillance & payload drop']
    },
    tr: {
        'Ağırlık': ['3.7 kg kalkış ağırlığı', 'Faydalı Yük: 1.3 kg'],
        'Konfigürasyon': ['Sabit Kanat İtici Pervane (Pusher)', 'XPS köpük gövde, karbon fiber kanatlar'],
        'Seyir Hızı': ['13 m/s (~47 km/h)'],
        'İtki Sistemi': ['T-Motor AT3530 Uzun Şaft', '14×7" APC Pervane', 'SkyWalker 60A ESC (6S)'],
        'Güç Sistemi': ['JetFire 22.2V 10000mAh 50C 6S LiPo'],
        'Uçuş Kontrolcüsü': ['Pixhawk (ArduPlane firmware)', 'Mg90s Servo (kanat ve kuyruk kontrolü)'],
        'Haberleşme': ['RFD868X Uzun Menzilli Telemetri', 'TP-Link CPE510 (5 GHz, 300 Mbps)', 'FrSky QX7 Kumanda'],
        'Navigasyon': ['Otonom waypoint (hedef nokta) uçuşu', 'GPS tabanlı lokalizasyon'],
        'Yapay Zeka ve Görüntü İşleme': ['NVIDIA Jetson Nano', 'Raspberry Pi Camera v2', 'Yapay zeka tabanlı araç tespiti ve takibi'],
        'Yazılım': ['Python & C++', 'Otonom gözetleme ve faydalı yük bırakma']
    }
};
const PHOENIX = TULPARS; // using TULPARS specs as fallback since PHOENIX originally had identical specs

const vehicles = {
    tulpars: {
        title: {
            en: 'Tulpars Hexacopter',
            tr: 'Tulpars Heksakopter İHA'
        },
        src: '../public/models/tulpars-drone.glb',
        attributes: {
            "orientation": "0deg -90deg 0deg",
            "camera-orbit": "45deg 75deg 105%"
        },
        info: {
            en: 'Our mission drone designed for high maneuverability. Operating in hexacopter configuration, Tulpars is capable of fully autonomous missions in both indoor and outdoor environments.',
            tr: 'Yüksek manevra kabiliyeti için tasarlanmış görev dronumuz. Heksakopter konfigürasyonunda çalışan Tulpars, hem kapalı hem de açık ortamlarda tam otonom görevler icra edebilmektedir.'
        },
        specs: TULPARS,
        pdf: '../public/pdfs/TulparsRapor.pdf',
        photos: ['../public/img/vehicles/tulpars.jpeg', '../public/img/vehicles/tulpars2.jpeg', '../public/img/vehicles/tulpars3.jpeg'],
        youtube: 'https://www.youtube.com/embed/LE7WRvLhvs4'
    },
    donerkanat2024: {
        title: {
            en: 'ALP — Quadcopter UAV (Teknofest 2024)',
            tr: 'ALP — Quadkopter İHA (Teknofest 2024)'
        },
        src: '../public/models/DonerKanat2024.glb',
        attributes: {},
        info: {
            en: 'ALP is the rotary-wing UAV developed for Teknofest 2024 (RACLAB AKINALP KGM team, Konya Technical University). Built for precision hovering, target tracking, and autonomous interception missions in coordination with the AKIN fixed-wing platform. Powered by 4× QA-4220 motors with an NVIDIA Jetson Nano for real-time AI-based detection.',
            tr: 'ALP, Teknofest 2024 (RACLAB AKINALP KGM takımı, Konya Teknik Üniversitesi) için geliştirilmiş döner kanatlı bir İHA platformudur. AKIN sabit kanatlı platformu ile koordinasyon halinde hassas havada asılı kalma (hover), hedef takibi ve otonom önleme görevleri için tasarlanmıştır. Gücünü 4x QA-4220 motorlarından alır ve gerçek zamanlı yapay zeka nesne tespiti için NVIDIA Jetson Nano entegredir.'
        },
        specs: ALP,
        pdf: '../public/pdfs/',
        photos: ['../public/img/vehicles/drone2024.jpeg', '../public/img/vehicles/drone20242.jpeg', '../public/img/vehicles/drone20243.jpeg'],
        youtube: 'https://www.youtube.com/embed/t7zKGhuQ2LU'
    },
    sabitkanat2024: {
        title: {
            en: 'AKIN — Fixed-Wing UAV (Teknofest 2024)',
            tr: 'AKIN — Sabit Kanat İHA (Teknofest 2024)'
        },
        src: '../public/models/SabitKanat2024.glb',
        attributes: {},
        info: {
            en: 'AKIN is the fixed-wing pusher UAV developed for Teknofest 2024 (RACLAB AKINALP KGM team, Konya Technical University). Designed for wide-area border surveillance with a cruise speed of 13 m/s and autonomous waypoint navigation. Works in tandem with the ALP quadcopter to detect, track, and intercept ground threats.',
            tr: 'AKIN, Teknofest 2024 için geliştirilmiş sabit kanatlı itici pervane (pusher) İHA platformudur. 13 m/s seyir hızı ve otonom waypoint navigasyonu ile geniş alan sınır güvenliği için tasarlanmıştır. Karadaki tehditleri tespit etmek, izlemek ve önlemek için ALP quadcopteri ile çift platform koordineli çalışır.'
        },
        specs: AKIN,
        pdf: '../public/pdfs/SabitKanat.pdf',
        photos: ['../public/img/vehicles/sabit20241.jpeg', '../public/img/vehicles/sabit20242.jpeg', '../public/img/vehicles/sabit20243.jpeg'],
        youtube: 'https://www.youtube.com/embed/t7zKGhuQ2LU'
    },
    phoenix2025: {
        title: {
            en: 'Phoenix 2025',
            tr: 'Phoenix 2025 – Hibrit VTOL'
        },
        src: '../public/models/Serbest2025.glb',
        attributes: {
            "orientation": "0deg -90deg 0deg",
            "camera-orbit": "45deg 75deg 105%"
        },
        info: {
            en: 'Next-generation hybrid platform for 2025. Equipped with cutting-edge sensor integration, AI-powered object detection, and swarm intelligence readiness.',
            tr: '2025 için tasarlanan yeni nesil hibrit platformumuz. Son teknoloji sensör entegrasyonu, yapay zeka destekli nesne tespiti ve sürü zekası yetenekleri ile donatılmıştır.'
        },
        specs: PHOENIX,
        pdf: '../public/pdfs/serbest2025-report.pdf',
        photos: ['../public/img/vehicles/serbest1.jpeg'],
        youtube: 'https://www.youtube.com/embed/R_1tY74E9Zg'
    },

    stancona: {
        title: {
            en: 'Stancona UAV',
            tr: 'Stancona İHA'
        },
        src: '../public/models/Stancona_drone.glb',
        attributes: {
            "orientation": "0deg 0deg 0deg",
            "camera-orbit": "45deg 75deg 105%"
        },
        info: {
            en: 'Stancona is our advanced UAV platform designed for autonomous precision payload drop missions. Featuring a custom Qt-based ground control interface, real-time YOLOv8 object detection via Jetson Nano, and specialized hardware for identifying and interacting with complex ground targets.',
            tr: 'Stancona, otonom hassas faydalı yük bırakma görevleri için tasarlanmış gelişmiş İHA platformumuzdur. Özel Qt tabanlı yer kontrol arayüzü, Jetson Nano üzerinden gerçek zamanlı YOLOv8 nesne tespiti ve karmaşık yer hedeflerini (altıgen, üçgen vb.) tanıyıp etkileşime geçebilen özel donanımlara sahiptir.'
        },
        specs: {
            en: {
                'Weight': ['Empty: 2.5 kg', 'Max Takeoff: 4.0 kg'],
                'Max Speed': ['22 m/s (79 km/h) empty', '11 m/s (40 km/h) loaded'],
                'Endurance': ['10.5 mins empty (6.93 km range)', '5.1 mins loaded (1.68 km range)'],
                'Propulsion': ['10×5.5" Propeller', '50A ESC'],
                'Power System': ['8000 mAh Battery Capacity'],
                'Hardware & Sensors': ['NVIDIA Jetson Nano', 'Arducam IMX477 (CSI)'],
                'Software & UI': ['Python & C++', 'Qt Framework', 'YOLOv8 Object Detection', 'GStreamer & UDP Sockets']
            },
            tr: {
                'Ağırlık': ['Boş Ağırlık: 2.5 kg', 'Maksimum Kalkış: 4.0 kg'],
                'Maksimum Hız': ['22 m/s (79 km/h) boş', '11 m/s (40 km/h) yüklü'],
                'Uçuş Süresi': ['10.5 dk boş (6.93 km menzil)', '5.1 dk yüklü (1.68 km menzil)'],
                'İtki Sistemi': ['10×5.5" Pervane', '50A ESC'],
                'Güç Sistemi': ['8000 mAh Kapasiteli Batarya'],
                'Donanım ve Sensörler': ['NVIDIA Jetson Nano', 'Arducam IMX477 (CSI)'],
                'Yazılım ve Arayüz': ['Python & C++', 'Qt Framework', 'YOLOv8 Nesne Tespiti', 'GStreamer & UDP Soketleri']
            }
        },
        pdf: '../public/pdfs/stancona.pdf',
        photos: [],
        youtube: 'https://www.youtube.com/embed/QSzryxOUvBQ'
    },

    // ── Nova V2 2025 ──────────────────────────────────────────────────────────
    warTortle: {
        title: {
            en: 'War Tortle Champion',
            tr: 'War Tortle Şampiyonu'
        },
        src: '../public/models/warTortle.glb',
        attributes: {
            "orientation": "90deg 0deg 90deg",
            "camera-orbit": "45deg 75deg 105%"
        },
        info: {
            en: 'Nova V2 is the 2025 championship vehicle. Built for peak performance with advanced autonomy and mission-critical reliability.',
            tr: 'Nova V2, 2025 şampiyonluk aracıdır. Gelişmiş özerklik ve görev açısından kritik güvenilirlik ile üstün performans için tasarlanmıştır.'
        },
        specs: {
            en: {
                'Status': ['2025 Champion Vehicle'],
                'Details': ['TBD — specs coming soon']
            },
            tr: {
                'Durum': ['2025 Şampiyonu'],
                'Detaylar': ['Yakında eklenecek']
            }
        },
        pdf: '',
        photos: [],
        youtube: 'https://www.youtube.com/embed/R_1tY74E9Zg'
        // <-- Fotoğraf yollarını buraya ekle
    },

    // ── Nova 2026 ──────────────────────────────────────────────────────────
    blastoise: {
        title: {
            en: 'Blastoise — RoboSub 2026 Competition AUV',
            tr: 'Blastoise — RoboSub 2026 Yarışma Aracı'
        },
        src: '../public/models/blastoise.glb',
        attributes: {
            "orientation": "0deg -90deg 0deg",
            "camera-orbit": "45deg 75deg 105%"
        },
        info: {
            en: 'Blastoise is the latest iteration of the Nova series, serving as RACLAB\'s primary competition vehicle for RoboSub 2026.',
            tr: 'Blastoise, RACLAB\'in RoboSub 2026 için hazırladığı birincil yarışma aracı olup Nova serisinin en güncel iterasyonudur.'
        },
        specs: {
            en: {
                'Competition': ['RoboSub 2026 — California, USA'],
                'Weight': ['~25 kg'],
                'Dimensions': ['47 × 62 × 36 cm'],
                'Max Speed': ['~5 m/s (~11 mph)'],
                'Endurance': ['~1 hour'],
                'Propulsion': ['8× Mitras Underwater Thruster (50N each)', 'Total Thrust: 400N'],
                'Power System': ['Leopard Power LiPo 12000mAh 4S1P 40C'],
                'Processors': ['NVIDIA Jetson Orin Nano 8GB', 'Arduino Mega 2560'],
                'Navigation': ['Ping360 Sonar', 'DVL (Doppler Velocity Log)'],
                'Software': ['Python', 'C++', 'ROS'],
                'Sensors': ['BNO055 IMU', 'D300 Pressure / Depth Sensor'],
                'Status': ['Under development — RoboSub 2026']
            },
            tr: {
                'Yarışma': ['RoboSub 2026 — California, ABD'],
                'Ağırlık': ['~25 kg'],
                'Boyutlar': ['47 × 62 × 36 cm'],
                'Maksimum Hız': ['~5 m/s (~11 mph)'],
                'Hareket Süresi': ['~1 saat'],
                'İtki Sistemi': ['8× Mitras Su Altı İticisi (50N/adet)', 'Toplam İtki: 400N'],
                'Güç Sistemi': ['Leopard Power LiPo 12000mAh 4S1P 40C'],
                'İşlemciler': ['NVIDIA Jetson Orin Nano 8GB', 'Arduino Mega 2560'],
                'Navigasyon': ['Ping360 Sonar', 'DVL (Doppler Velocity Log)'],
                'Yazılım': ['Python', 'C++', 'ROS'],
                'Sensörler': ['BNO055 IMU', 'D300 Basınç / Derinlik Sensörü'],
                'Durum': ['Geliştirme aşamasında — RoboSub 2026']
            }
        },
        pdf: '../public/pdfs/Blastoise.pdf',
        photos: [],
        videosTitle: {
            en: 'RoboSub 2026 Documentation Videos',
            tr: 'RoboSub 2026 Dokümantasyon Videoları'
        },
        videos: [
            {
                title: { en: 'Team Introduction', tr: 'Takım Tanıtım Videosu' },
                url: 'https://www.youtube.com/embed/rg2pnOqNaSc?si=vqXeoQ49njUKcc9b'
            },
            {
                title: { en: 'Manufacturing & Assembly', tr: 'Araç Yapım Aşaması' },
                url: ''
            },
            {
                title: { en: 'Electronics & Integration', tr: 'Elektronik Aşaması' },
                url: ''
            },
            {
                title: { en: 'Software & Simulation', tr: 'Yazılım & Simülasyon' },
                url: ''
            },
            {
                title: { en: 'Pool & Sea Testing', tr: 'Havuz ve Deniz Testi' },
                url: 'https://www.youtube.com/embed/61CGSlDh4bA?si=H3M7CRP4e_P7MZ-0'
            }
        ]
    },

    // ── Nova Güncel V3 2026 ───────────────────────────────────────────────────
    squirtle: {
        title: {
            en: 'Squirtle',
            tr: 'Squirtle'
        },
        src: '../public/models/squirtle.glb',
        attributes: {
            "orientation": "180deg -90deg 0deg",
            "camera-orbit": "45deg 75deg 105%"
        },
        info: {
            en: 'Squirtle is the latest and most advanced iteration of the Nova series, built for the 2026 season. Featuring 8 Mitras underwater thrusters, an NVIDIA Jetson Orin Nano, Ping360 Sonar, and DVL navigation — engineered for peak autonomy and mission-critical reliability beneath the surface.',
            tr: 'Squirtle, 2026 sezonu için geliştirilen Nova serisinin en güncel ve en gelişmiş versiyonudur. 8 adet Mitras su altı iticisi, NVIDIA Jetson Orin Nano, Ping360 Sonar ve DVL navigasyon sistemiyle; su altında maksimum özerklik ve görev güvenilirliği için mühendislik mükemmelliğiyle tasarlanmıştır.'
        },
        specs: {
            en: {
                'Status': ['New Model'],
                'Details': ['TBD — specs coming soon']
            },
            tr: {
                'Durum': ['Yeni Model'],
                'Detaylar': ['Yakında eklenecek']
            }
        },
        pdf: '',
        photos: [],
        youtube: 'https://www.youtube.com/embed/R_1tY74E9Zg'
        // <-- Fotoğraf yollarını buraya ekle
    },

    // ── Barakuda ──────────────────────────────────────────────────────────────
    barakuda: {
        title: {
            en: 'Barakuda',
            tr: 'Barakuda'
        },
        src: '../public/models/barakuda.glb',
        attributes: {
            "orientation": "0deg 0deg 0deg",
            "camera-orbit": "45deg 75deg 105%"
        },
        info: {
            en: 'Barakuda is a compact and lightweight vehicle developed by RACLAB. Designed for agility and efficiency in confined environments.',
            tr: 'Barakuda, RACLAB tarafından geliştirilen kompakt ve hafif bir araçtır. Dar alanlarda çeviklik ve verimlilik için tasarlanmıştır.'
        },
        specs: {
            en: {
                'Type': ['Compact Vehicle'],
                'Details': ['TBD — specs coming soon']
            },
            tr: {
                'Tip': ['Kompakt Araç'],
                'Detaylar': ['Yakında eklenecek']
            }
        },
        pdf: '',
        photos: [],
        videosTitle: {
            en: 'Documentation Videos',
            tr: 'Dokümantasyon Videoları'
        },
        youtube: ''

    },

    // ── Şahi — SUAS 2026 ─────────────────────────────────────────────────────────
    shahi: {
        title: {
            en: 'Şahi — SUAS 2026 Competition UAV',
            tr: 'Şahi — SUAS 2026 Yarışma İHAsı'
        },
        src: '',
        attributes: {},
        info: {
            en: 'Şahi is RACLAB\'s primary competition vehicle for SUAS 2026 (Student Unmanned Aerial Systems), hosted by the Patuxent Partnership in Maryland, USA. Designed from the ground up for fully autonomous aerial missions, Şahi integrates precision waypoint navigation, real-time AI-powered object detection, and a reliable payload drop mechanism. The system features a Jetson Orin Nano running YOLOv8, RTK GPS for centimeter-level accuracy, and a custom ground control station built in C++.',
            tr: 'Şahi, RACLAB\'in ABD Maryland\'de düzenlenecek SUAS 2026 yarışması için hazırlanmış birincil yarışma aracıdır. Tam otonom hava görevleri için sıfırdan tasarlanan Şahi; hassas waypoint navigasyonu, gerçek zamanlı YOLOv8 nesne tespiti ve güvenilir yük bırakma mekanizmasını entegre eder. Sistem; Jetson Orin Nano, santimetre hassasiyetinde RTK GPS ve C++ tabanlı özel yer kontrol istasyonu içermektedir.'
        },
        specs: {
            en: {
                'Platform': ['Custom Hexacopter'],
                'Competition': ['SUAS 2026 — Maryland, USA'],
                'Processor': ['NVIDIA Jetson Orin Nano 8GB'],
                'Flight Controller': ['Pixhawk 6X'],
                'Navigation': ['RTK GPS (cm-level accuracy)', 'Autonomous waypoint flight'],
                'Vision': ['YOLOv8 real-time object detection', 'SIYI A8 Mini gimbal camera'],
                'Communication': ['RFD900ux Telemetry', 'Remote ID compliant'],
                'Software': ['Python & C++', 'Custom GCS (Qt framework)', 'Multi-threaded mission logic'],
                'Payload': ['Custom servo-actuated drop mechanism'],
                'Status': ['Under development — SUAS 2026']
            },
            tr: {
                'Platform': ['Özel Heksakopter'],
                'Yarışma': ['SUAS 2026 — Maryland, ABD'],
                'İşlemci': ['NVIDIA Jetson Orin Nano 8GB'],
                'Uçuş Kontrolücüsü': ['Pixhawk 6X'],
                'Navigasyon': ['RTK GPS (cm hassasiyeti)', 'Otonom waypoint uçuşu'],
                'Görüntü İşleme': ['YOLOv8 gerçek zamanlı nesne tespiti', 'SIYI A8 Mini gimbal kamera'],
                'Haberleşme': ['RFD900ux Telemetri', 'Remote ID uyumlu'],
                'Yazılım': ['Python & C++', 'Özel YKS (Qt framework)', 'Çok iş parçacıklı görev mantığı'],
                'F.Yük': ['Özel servo tahrikli bırakma mekanizması'],
                'Durum': ['Geliştirme aşamasında — SUAS 2026']
            }
        },
        pdf: '',
        photos: [],
        videosTitle: {
            en: 'SUAS 2026 Documentation Videos',
            tr: 'SUAS 2026 Dokümantasyon Videoları'
        },
        videos: [
            {
                title: { en: 'Team Introduction', tr: 'Takım Tanıtım Videosu' },
                url: ''
            },
            {
                title: { en: 'Manufacturing & Assembly', tr: 'Araç Yapım Aşaması' },
                url: ''
            },
            {
                title: { en: 'Electronics & Integration', tr: 'Elektronik Aşaması' },
                url: ''
            },
            {
                title: { en: 'Software & Simulation', tr: 'Yazılım & Simülasyon' },
                url: ''
            },
            {
                title: { en: 'Flight Testing', tr: 'Uçuş Testi' },
                url: ''
            }
        ]

    }

};

// You can add image paths to the 'photos' array for each vehicle.
// Example: photos: ['../public/img/team/kagan.jpeg', '../public/img/user/raclab.png']
function renderVehicleDetails() {
    if (vehicles[key]) {
        const v = vehicles[key];
        const lang = (typeof I18N !== 'undefined' ? I18N.currentLang : localStorage.getItem('raclab_lang')) || 'en';

        document.getElementById('title').innerText = v.title[lang] || v.title['en'];
        const modelEl = document.getElementById('model');
        modelEl.src = v.src;

        if (v.attributes) {
            for (const [attrName, attrVal] of Object.entries(v.attributes)) {
                modelEl.setAttribute(attrName, attrVal);
            }
        }

        document.getElementById('info').innerText = v.info[lang];

        const grid = document.getElementById('specs-grid');
        grid.innerHTML = ''; // Clear existing contents for complete replacement

        Object.entries(v.specs[lang]).forEach(([label, values]) => {
            const card = document.createElement('div');
            card.className = 'spec-card';
            card.innerHTML = `
                <div class="spec-label">${label}</div>
                <div class="spec-values">
                    ${values.map(val => `<span>${val}</span>`).join('')}
                </div>
            `;
            grid.appendChild(card);
        });

        const gallerySection = document.getElementById('gallery-section');
        const galleryGrid = document.getElementById('gallery-grid');
        galleryGrid.innerHTML = '';

        if (v.photos && v.photos.length > 0) {
            gallerySection.style.display = 'block';
            v.photos.forEach(imgSrc => {
                const imgCard = document.createElement('div');
                imgCard.className = 'gallery-card';
                imgCard.innerHTML = `<img src="${imgSrc}" alt="${v.title['en']} Photo" loading="lazy">`;
                galleryGrid.appendChild(imgCard);
            });
        } else {
            gallerySection.style.display = 'none';
        }

        if (v.pdf) {
            const section = document.getElementById('learn-more-section');
            section.style.display = 'flex';
            document.getElementById('pdf-link').href = v.pdf;
        }

        // YouTube embed (Multiple or Single)
        const ytSection = document.getElementById('youtube-section');
        if (ytSection) {
            // If url is empty, we show a placeholder box
            const renderIframeOrPlaceholder = (url) => {
                if (!url || url.trim() === '') {
                    return `<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:#111;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.4);font-family:'Orbitron',sans-serif;font-size:0.9rem;border:1px dashed rgba(255,77,77,0.3);border-radius:12px;">
                        <div style="text-align:center;">
                            <i class="fa-solid fa-video-slash" style="font-size:2rem;margin-bottom:10px;color:rgba(255,77,77,0.5);"></i><br>
                            <span>COMING SOON</span>
                        </div>
                    </div>`;
                }
                return `<iframe src="${url}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>`;
            };

            if (v.videos && v.videos.length > 0) {
                const titleStr = v.videosTitle ? v.videosTitle[lang] : 'SUAS 2026 Documentation Videos';

                ytSection.innerHTML = `<span class="specs-section-title" style="display:block;margin-bottom:20px;font-family:'Orbitron',sans-serif;font-size:0.72rem;letter-spacing:3px;color:var(--accent);text-transform:uppercase;">
                    <i class="fa-brands fa-youtube" style="margin-right:8px;"></i>${titleStr}
                </span>
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:30px;">
                    ${v.videos.map(vid => `
                        <div>
                            <h4 style="color:#fff;margin-bottom:12px;font-family:'Inter',sans-serif;font-size:0.95rem;border-left:3px solid var(--accent);padding-left:10px;">${vid.title[lang]}</h4>
                            <div style="position:relative;width:100%;border-radius:12px;overflow:hidden;border:1px solid rgba(255,77,77,0.2);box-shadow:0 0 20px rgba(255,77,77,0.05);">
                                <div style="position:relative;padding-bottom:56.25%;height:0;background:#050505;">
                                    ${renderIframeOrPlaceholder(vid.url)}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>`;
                ytSection.style.display = 'block';
            } else if (typeof v.youtube !== 'undefined') {
                const titleStr = v.videosTitle ? v.videosTitle[lang] : (lang === 'tr' ? 'Test ve Uçuş Videoları' : 'Flight & Test Videos');
                ytSection.innerHTML = `<span class="specs-section-title" style="display:block;margin-bottom:20px;font-family:'Orbitron',sans-serif;font-size:0.72rem;letter-spacing:3px;color:var(--accent);text-transform:uppercase;">
                    <i class="fa-brands fa-youtube" style="margin-right:8px;"></i>${titleStr}
                </span>
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:30px;">
                    <div>
                        <h4 style="color:#fff;margin-bottom:12px;font-family:'Inter',sans-serif;font-size:0.95rem;border-left:3px solid var(--accent);padding-left:10px;">${lang === 'tr' ? 'Araç Görev Videosu' : 'Vehicle Mission Video'}</h4>
                        <div style="position:relative;width:100%;border-radius:12px;overflow:hidden;border:1px solid rgba(255,77,77,0.2);box-shadow:0 0 20px rgba(255,77,77,0.05);">
                            <div style="position:relative;padding-bottom:56.25%;height:0;background:#050505;">
                                ${renderIframeOrPlaceholder(v.youtube)}
                            </div>
                        </div>
                    </div>
                </div>`;
                ytSection.style.display = 'block';
            } else {
                ytSection.style.display = 'none';
            }
        }
    }
}

// Initial render
document.addEventListener('DOMContentLoaded', renderVehicleDetails);

// Listen to customized event from i18n switcher
document.addEventListener('languageChanged', renderVehicleDetails);

// ¦¦ LOADING SCREEN LOGIC ¦¦
document.addEventListener('DOMContentLoaded', () => {
    const model = document.getElementById('model');
    const loader = document.getElementById('loader');
    const percentSpan = document.getElementById('loader-percent');
    const barFill = document.getElementById('loader-bar');

    if (model && loader) {
        loader.style.display = 'flex'; // Ensure it is shown first
        model.setAttribute('loading', 'eager'); // Force load immediately

        // model-viewer emits 'progress' events during load
        model.addEventListener('progress', (e) => {
            const rawProgress = e.detail.totalProgress * 100;
            const progress = Math.min(100, Math.max(0, Math.round(rawProgress)));

            // Update UI
            if (percentSpan) percentSpan.innerText = progress + '%';
            if (barFill) barFill.style.width = progress + '%';

            // Once fully loaded, fade out the overlay
            if (progress >= 100) {
                setTimeout(() => {
                    loader.classList.add('hidden');
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 800);
                }, 800); // Wait slightly to show 100%
            }
        });

        // Fallback: If it takes too long (15s), hide the loader anyway
        setTimeout(() => {
            if (!loader.classList.contains('hidden')) {
                if (percentSpan) percentSpan.innerText = '100%';
                if (barFill) barFill.style.width = '100%';
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 800);
            }
        }, 15000);
    }
});








