/**
 * RACLAB — Professional Search with Fuse.js
 * Ctrl+K to open | Esc to close | â†‘â†“ to navigate | Enter to go
 *
 * Depends on: fuse.js (CDN), blog-data.js (blogData global)
 */

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   1. SEARCH INDEX
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

// Detect if we are inside /pages/ to build correct relative URLs
const _inPages = window.location.pathname.replace(/\\/g, '/').includes('/pages/');
const _root = _inPages ? '../' : '';
const _pages = _inPages ? '' : 'pages/';

/** Build the full search index from all site content */
function buildSearchIndex(lang) {
  const index = [];

  // â”€â”€ PAGES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const staticPages = [
    {
      id: 'home',
      title: lang === 'tr' ? 'Ana Sayfa — RACLAB Takımı' : 'Home — RACLAB Team',
      description: lang === 'tr' ? 'RACLAB Takımı: otonom İHA\'lar, SUAS 2026 yarışması, sensör füzyonu ve gömülü sistemler.' : 'RACLAB Team: autonomous UAVs, SUAS 2026 competition, sensor fusion and embedded systems.',
      category: 'page',
      url: `${_root}index.html`,
      keywords: 'raclab home ana sayfa uav iha otonom autonomous drones suas suas2026 competition airframe sensing control payload ground research development innovation konya technical university ktu'
    },
    {
      id: 'vehicles',
      title: lang === 'tr' ? 'Araçlar — İHA Filomuz' : 'Vehicles — Our UAV Fleet',
      description: lang === 'tr' ? 'Rekabetçi ve otonom görevler için heksakopter, sabit kanat ve hibrit İHA platformları.' : 'Hexacopter, fixed-wing and hybrid UAV platforms for competitive and autonomous missions.',
      category: 'page',
      url: `${_pages}vehicles.html`,
      keywords: 'vehicles Araçlar uav iha drone fleet filo hexacopter fixed wing vtol tulpars alp akin serbest phoenix quadcopter rotary autonomous platforms'
    },
    {
      id: 'team',
      title: lang === 'tr' ? 'Ekip — RACLAB Üyeleri' : 'Team — RACLAB Members',
      description: lang === 'tr' ? 'RACLAB Takımının mühendisleri, geliştiricileri ve yapay zeka araştırmacıları ile tanışın.' : 'Meet the engineers, developers and AI researchers of RACLAB Team.',
      category: 'page',
      url: `${_pages}team.html`,
      keywords: 'team ekip takım members üyeler engineers mühendisler developers researchers raclab akif durdu Eren Berk Saç ali emre okur Furkan Korkmazdağ Kağan Koçyiğit advisor mechanical electronics computer'
    },
    {
      id: 'blog',
      title: lang === 'tr' ? 'Blog — RACLAB' : 'Blog — RACLAB',
      description: lang === 'tr' ? 'Yarışma raporları, gömülü sistem makaleleri ve İHA teknolojisi incelemeleri.' : 'Competition reports, embedded systems articles and UAV technology insights.',
      category: 'page',
      url: `${_pages}blog.html`,
      keywords: 'blog haberler makaleler articles posts gönderiler research competition teknofest embedded robotics automation iot edge ai news updates'
    },
    {
      id: 'contact',
      title: lang === 'tr' ? 'İletişim — RACLAB' : 'Contact — RACLAB',
      description: lang === 'tr' ? 'İş birliği, sponsorluk veya genel sorularınız için bize ulaşın.' : 'Get in touch for collaboration, sponsorship or general inquiries.',
      category: 'page',
      url: `${_pages}contact.html`,
      keywords: 'contact İletişim email eposta message mesaj collaboration sponsorluk sponsorship inquiry ulaş get in touch konya technical university ktun raclab'
    },
    {
      id: 'contact-form',
      title: lang === 'tr' ? 'Mesaj Gönder — İletişim Formu' : 'Send a Message — Contact Form',
      description: lang === 'tr' ? 'RACLAB İHA veya Su Altı Takımına mesaj gönderin. Formu doldurun, size geri dönelim.' : 'Send a message to the RACLAB UAV or Underwater Team. Fill in the form and we\'ll get back to you.',
      category: 'page',
      url: `${_pages}contact.html`,
      hash: 'contact-form',
      keywords: 'form mesaj gönder send message iletisim contact form email ad soyad konu subject İHA UAV takım team su altı underwater iş birliği collaboration sponsorluk sponsorship'
    },
    {
      id: 'contact-info',
      title: lang === 'tr' ? 'Konum ve Sosyal Medya — RACLAB' : 'Location & Social Media — RACLAB',
      description: lang === 'tr' ? 'Konya Teknik Üniversitesi\'ndeyiz. Instagram, LinkedIn ve YouTube\'dan bizi takip edin.' : 'We are at Konya Technical University. Follow us on Instagram, LinkedIn and YouTube.',
      category: 'page',
      url: `${_pages}contact.html`,
      hash: 'contact-info',
      keywords: 'konum location konya technical university ktun selcuklu instagram linkedin youtube social media sosyal medya kapsulraclabuav raclab_nova rac_lab adres address'
    },
    {
      id: 'sponsors-page',
      title: lang === 'tr' ? 'Sponsorlar — RACLAB' : 'Sponsors — RACLAB',
      description: lang === 'tr' ? 'RACLAB\'ı destekleyen kuruluşlar: Kapsül, MPG, Atiker, Konya Büyükşehir, Ulaştırma Bakanlığı, Yeşilay.' : 'Organizations supporting RACLAB: Kapsül, MPG, Atiker, Konya Metro, Ministry of Transport, Yeşilay.',
      category: 'sponsor',
      url: `${_pages}sponsors.html`,
      keywords: 'sponsors sponsorlar destekçi sponsor kapsul mpg atiker konya buyuksehir belediyesi ulastirma bakanligi yesilay primary technical community ana teknik destek funding partnership'
    }
  ];

  index.push(...staticPages);

  // â”€â”€ HOME PAGE — WHAT WE DO SECTIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const whatWeDo = [
    {
      id: 'wwd-airframe',
      title: lang === 'tr' ? 'Gövde Tasarımı' : 'Airframe Design',
      description: lang === 'tr' ? 'PLA ve güçlendirilmiş sentetik polimerlerle 3B baskı — hafif, güçlü ve aerodinamik.' : '3D printed airframes using PLA and reinforced polymers — lightweight, strong and aerodynamic.',
      category: 'page',
      url: `${_root}index.html`,
      hash: 'airframe-design',
      keywords: 'airframe design gövde tasarımı 3d printing pla thermoplastic polymer lightweight aerodynamic structural strength manufacturing'
    },
    {
      id: 'wwd-sensing',
      title: lang === 'tr' ? 'Akıllı Sensörler' : 'Intelligent Sensing',
      description: lang === 'tr' ? 'Hedef tespiti ve çevre haritalama için sensör füzyonu ve gerçek zamanlı veri işleme.' : 'Sensor fusion and real-time data processing for target detection and environmental mapping.',
      category: 'page',
      url: `${_root}index.html`,
      hash: 'intelligent-sensing',
      keywords: 'sensor fusion sensing akıllı sensörler veri işleme data processing target detection environmental mapping situational awareness onboard'
    },
    {
      id: 'wwd-autonomy',
      title: lang === 'tr' ? 'Otonom Kontrol' : 'Autonomous Control',
      description: lang === 'tr' ? 'Hassas navigasyon için PID temelli uçuş stabilizasyonu ve SLAM tabanlı konumlandırma.' : 'PID-based flight stabilization and SLAM-driven localization for precise autonomous navigation.',
      category: 'page',
      url: `${_root}index.html`,
      hash: 'autonomous-control',
      keywords: 'autonomous control otonom kontrol pid flight stabilization slam localization mapping navigation obstacle avoidance decision making algorithms'
    },
    {
      id: 'wwd-payload',
      title: lang === 'tr' ? 'Faydalı Yük Entegrasyonu' : 'Payload Integration',
      description: lang === 'tr' ? 'Göreve özel gereksinimler için tasarlanmış özel donanım — güvenilir teslimat.' : 'Custom payload systems designed for mission-specific requirements — reliable and repeatable.',
      category: 'page',
      url: `${_root}index.html`,
      hash: 'payload-integration',
      keywords: 'payload integration faydalı yük entegrasyon drop release repeatable reliable delivery cargo'
    },
    {
      id: 'wwd-gcs',
      title: lang === 'tr' ? 'Yer Kontrol Sistemi' : 'Ground Control System',
      description: lang === 'tr' ? 'Gerçek zamanlı telemetri izleme, görev planlama ve komut aktarımı için özel arayüz.' : 'C++ based GCS for real-time telemetry monitoring, mission planning and command transmission.',
      category: 'page',
      url: `${_root}index.html`,
      hash: 'ground-control',
      keywords: 'ground control system yer kontrol istasyonu telemetri gcs telemetry monitoring mission planning command transmission cpp c++ interface flight control data visualization'
    },
    {
      id: 'wwd-rd',
      title: lang === 'tr' ? 'Ar-Ge Çalışmaları' : 'Research & Development',
      description: lang === 'tr' ? 'Simülasyon, tasarım iterasyonları ve gerçek dünya donanım testleri.' : 'Continuous R&D through research, iterative prototyping and real-world testing.',
      category: 'page',
      url: `${_root}index.html`,
      hash: 'research-development',
      keywords: 'research development ar-ge arge prototyping testing iteration innovation uav technology araştırma geliştirme'
    },
    {
      id: 'wwd-suas',
      title: lang === 'tr' ? 'SUAS 2026 Hedefi' : 'SUAS 2026 Competition',
      description: lang === 'tr' ? 'Birinci hedef: Uluslararası SUAS 2026 kompetisyonunda (öğrenci otonomi uçuşu) üstün başarı.' : 'Primary objective: outstanding success in the SUAS 2026 (Student Unmanned Aerial Systems) competition.',
      category: 'page',
      url: `${_root}index.html`,
      hash: 'suas-objective',
      keywords: 'suas 2026 competition student unmanned aerial systems primary objective undergraduate engineering real world problem'
    },
    {
      id: 'mission-uav',
      title: lang === 'tr' ? 'RACLAB İHA Misyonu' : 'RACLAB UAV Mission',
      description: lang === 'tr' ? 'Hava otonomisi, akıllı navigasyon, görev planlaması ve gelişmiş drone sistemleri.' : 'Focused on aerial autonomy, intelligent navigation, mission planning and advanced drone systems.',
      category: 'page',
      url: `${_root}index.html`,
      hash: 'mission',
      keywords: 'raclab uav iha mission misyon aerial hava autonomy otonom navigation navigation suas suas2026 drone systems'
    },
    {
      id: 'mission-underwater',
      title: lang === 'tr' ? 'RACLAB Su Altı Misyonu' : 'RACLAB Underwater Mission',
      description: lang === 'tr' ? 'Su altı robotiği, algılama sistemleri, otonom kontrol ve deniz teknolojileri.' : 'Focused on underwater robotics, perception systems, autonomous control and marine technologies.',
      category: 'page',
      url: `${_root}index.html`,
      hash: 'mission',
      keywords: 'raclab underwater sualtı su altı nova robosub 2026 robosub2026 robotics algılama perception autonomous control marine deniz blastoise war tortle squirtle'
    },
    {
      id: 'comp-robosub2026',
      title: lang === 'tr' ? 'RoboSub 2026 Yarışması' : 'RoboSub 2026 Competition',
      description: lang === 'tr' ? 'RACLAB Su Altı takımının 2026 hedefi: Uluslararası RoboSub yarışması.' : 'RACLAB Underwater team target for 2026: International RoboSub competition.',
      category: 'page',
      url: `${_root}index.html`,
      hash: 'mission',
      keywords: 'robosub 2026 underwater su altı autonomous underwater vehicle auv competition yarışma blastoise nova marine'
    }
  ];

  index.push(...whatWeDo);

  // â”€â”€ VEHICLES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const vehicles = [
    {
      id: 'v-tulpars',
      title: lang === 'tr' ? 'Tulpars Heksakopter İHA' : 'Tulpars Hexacopter UAV',
      description: lang === 'tr' ? 'KDE 4215 motorlar, Jetson Orin Nano, Pixhawk 6X, Here4 RTK — 45 dk havada kalış.' : 'KDE 4215 motors, Jetson Orin Nano, Pixhawk 6X, Here4 GPS+RTK — 45 min hover endurance.',
      category: 'vehicle',
      url: `${_pages}vehicles-details.html?model=tulpars`,
      hash: 'vehicle-tulpars',
      keywords: 'tulpars hexacopter heksakopter autonomous maneuver uav drone rotary 6 rotor kde 4215 465kv jetson orin nano pixhawk 6x here4 gps rtk siyi a8 mini arducam imx219 wifi rfd900 remote id esp32 li-ion 800wh 7300g 41mph 45min hover indoor outdoor'
    },
    {
      id: 'v-alp',
      title: lang === 'tr' ? 'ALP Quadcopter İHA — Teknofest 2024' : 'ALP Quadcopter UAV — Teknofest 2024',
      description: lang === 'tr' ? 'QA-4220 motorlar, Pixhawk Cube Orange, Jetson Nano, gerçek zamanlı hedef tespiti.' : 'QA-4220 650KV motors, Pixhawk Cube Orange, Jetson Nano, real-time object detection.',
      category: 'vehicle',
      url: `${_pages}vehicles-details.html?model=donerkanat2024`,
      hash: 'vehicle-alp',
      keywords: 'alp quadcopter quadkopter rotary teknofest 2024 dönerkanat qa-4220 650kv pixhawk cube orange jetson nano raspberry pi camera lipo 4s 8000mah autonomous tracking interception rfd868x cpE510 3.1kg carbon fiber'
    },
    {
      id: 'v-akin',
      title: lang === 'tr' ? 'AKİN Sabit Kanat İHA — Teknofest 2024' : 'AKIN Fixed-Wing UAV — Teknofest 2024',
      description: lang === 'tr' ? 'Pusher sabit kanat, AT3530 motor, ArduPlane, otonom görüntü tespiti ve asenkron aktarım.' : 'Pusher fixed-wing, T-Motor AT3530, ArduPlane, 13m/s cruise, AI-based vehicle detection.',
      category: 'vehicle',
      url: `${_pages}vehicles-details.html?model=sabitkanat2024`,
      hash: 'vehicle-akin',
      keywords: 'akin fixed wing sabitkanat teknofest 2024 pusher t-motor at3530 arduplane 13ms cruise 47kmh xps foam carbon fiber wings surveillance waypoint gps jetson nano raspberry pi ai vehicle detection rfd868x frsky qx7 lipo 6s 10000mah'
    },
    {
      id: 'v-serbest',
      title: lang === 'tr' ? 'Phoenix 2025 — Hibrit VTOL' : 'Phoenix 2025 — Hybrid VTOL',
      description: lang === 'tr' ? 'Sürü zekasına ve görüntü işlemeye sahip yeni nesil insansız hibrit SUAS platformu.' : 'Next-gen hybrid VTOL with swarm intelligence, AI object detection for SUAS 2025/2026.',
      category: 'vehicle',
      url: `${_pages}vehicles-details.html?model=phoenix2025`,
      hash: 'vehicle-phoenix',
      keywords: 'serbest phoenix hybrid vtol 2025 free mission hibrit swarm intelligence ai object detection suas next generation advanced sensor integration autonomous'
    },
    {
      id: 'v-shahi',
      title: lang === 'tr' ? 'Şahi — SUAS 2026 Yarışma Aracı' : 'Şahi — SUAS 2026 Competition UAV',
      description: lang === 'tr' ? 'SUAS 2026 birincil yarışma aracı. Tam otonom hava görevi: waypoint navigasyon, nesne tespiti, hassas yük bırakma.' : 'Primary competition UAV for SUAS 2026. Fully autonomous aerial missions: waypoint navigation, object detection, precision payload delivery.',
      category: 'vehicle',
      url: `${_pages}vehicles-details.html?model=shahi`,
      hash: 'vehicle-shahi',
      keywords: 'shahi sahi şahi suas 2026 competition yarışma autonomous fixed wing sabit kanat waypoint navigation nesne tespiti object detection payload drop yük bırakma'
    },
    {
      id: 'v-stancona',
      title: lang === 'tr' ? 'Stancona — İHA Platformu' : 'Stancona — UAV Platform',
      description: lang === 'tr' ? 'Faydalı yük bırakma İHA platformu.' : 'Payload delivery UAV platform.',
      category: 'vehicle',
      url: `${_pages}vehicles-details.html?model=stancona`,
      hash: 'vehicle-stancona',
      keywords: 'stancona uav iha payload delivery faydalı yük drone platform'
    },
    {
      id: 'v-warTortle',
      title: lang === 'tr' ? 'War Tortle — Su Altı Aracı' : 'War Tortle — Underwater Vehicle',
      description: lang === 'tr' ? '2025 NOVA şampiyon su altı aracı. TEKNOFEST su altı robotiği birincisi.' : '2025 NOVA champion underwater vehicle. TEKNOFEST underwater robotics champion.',
      category: 'vehicle',
      url: `${_pages}vehicles-details.html?model=warTortle`,
      hash: 'vehicle-warTortle',
      keywords: 'war tortle nova underwater su altı sualtı robosub rov auv teknofest champion şampiyon 2025 underwater robotics'
    },
    {
      id: 'v-blastoise',
      title: lang === 'tr' ? 'Blastoise — Su Altı Aracı 2026' : 'Blastoise — Underwater Vehicle 2026',
      description: lang === 'tr' ? '2026 yılında tasarlanan Blastoise su altı aracı. RoboSub 2026 yarışma aracı.' : 'Blastoise underwater vehicle designed for 2026. RoboSub 2026 competition vehicle.',
      category: 'vehicle',
      url: `${_pages}vehicles-details.html?model=blastoise`,
      hash: 'vehicle-blastoise',
      keywords: 'blastoise underwater su altı sualtı robosub 2026 auv rov nova series'
    },
    {
      id: 'v-squirtle',
      title: lang === 'tr' ? 'Squirtle — Su Altı Mini Araç' : 'Squirtle — Underwater Mini Vehicle',
      description: lang === 'tr' ? 'Nova serisinin mini versiyonu kompakt su altı aracı.' : 'Mini version of the Nova series — compact underwater vehicle.',
      category: 'vehicle',
      url: `${_pages}vehicles-details.html?model=squirtle`,
      hash: 'vehicle-nova-guncel',
      keywords: 'squirtle nova mini underwater su altı compact kompakt auv rov'
    },
    {
      id: 'v-barakuda',
      title: lang === 'tr' ? 'Barakuda — Su Altı Aracı' : 'Barakuda — Underwater Vehicle',
      description: lang === 'tr' ? 'Kompakt boyutlu Barakuda su altı aracı.' : 'Compact-sized Barakuda underwater vehicle.',
      category: 'vehicle',
      url: `${_pages}vehicles-details.html?model=barakuda`,
      hash: 'vehicle-barakuda',
      keywords: 'barakuda underwater su altı compact kompakt auv rov nova'
    }
  ];

  index.push(...vehicles);

  // â”€â”€ TEAM MEMBERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const team = [
    {
      id: 'tm-akif',
      title: lang === 'tr' ? 'Akif Durdu — Danışman' : 'Akif Durdu — Advisor',
      description: lang === 'tr' ? 'Konya Teknik Üniversitesi Fakülte Danışmanı.' : 'Faculty advisor and research mentor at Konya Technical University.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-akif',
      keywords: 'akif durdu advisor Danışman faculty mentor professor konya technical university ktu'
    },
    {
      id: 'tm-eren',
      title: lang === 'tr' ? 'Eren Berk Saç — Makine Mühendisi' : 'Eren Berk Saç — Mechanical Engineer',
      description: lang === 'tr' ? 'Gövde tasarımı, yapısal analiz, 3B üretim ve aerodinamik testler.' : 'Airframe design, structural analysis, 3D printing and aerodynamic optimization.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-eren',
      keywords: 'Eren Berk Saç mechanical engineer Makine Mühendisi airframe design 3d printing structure aerodynamic optimization pla thermoplastic frame manufacturing'
    },
    {
      id: 'tm-ali',
      title: lang === 'tr' ? 'Ali Emre Okur — Elektronik Mühendisi' : 'Ali Emre Okur — Electronics Engineer',
      description: lang === 'tr' ? 'PCB üretim, kart dizgisi ve güç ünitelerinin birleşimi.' : 'PCB design, power distribution boards and hardware integration.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-ali',
      keywords: 'ali emre okur electronics engineer Elektronik Mühendisi pcb power distribution board hardware integration circuit design battery management'
    },
    {
      id: 'tm-furkan',
      title: lang === 'tr' ? 'Furkan Korkmazdağ — Elektronik Mühendisi' : 'Furkan Korkmazdağ — Electronics Engineer',
      description: lang === 'tr' ? 'Gömülü sistemler, uçuş kontrol kartları ve telemetri sensör entegrasyonu.' : 'Embedded systems, flight controller integration, sensors and communication modules.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-furkan',
      keywords: 'Furkan Korkmazdağ electronics engineer Elektronik Mühendisi embedded systems esp32 arduino sensor control communication pixhawk avionics firmware'
    },
    {
      id: 'tm-kagan',
      title: lang === 'tr' ? 'Kağan Koçyiğit — Bilgisayar Mühendisi' : 'Kağan Koçyiğit — Computer Engineer',
      description: lang === 'tr' ? 'Otonom algoritmalar, C++ / Python görevleri, hedef tespiti ve SLAM navigasyon.' : 'Autonomy algorithms, software architecture, AI, computer vision and SLAM.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-kagan',
      keywords: 'Kağan Koçyiğit computer engineer Bilgisayar Mühendisi software autonomy ai artificial intelligence vision slam python c++ ros object detection multi-threading neural network'
    },
    {
      id: 'tm-beyza',
      title: lang === 'tr' ? 'Beyza Nur Yağcı — Elektronik Mühendisi' : 'Beyza Nur Yağcı — Electronics Engineer',
      description: lang === 'tr' ? 'Su altı takımı üyesi, elektronik sistemler.' : 'Underwater team electronics engineer.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-beyza',
      keywords: 'beyza nur yagci yağcı electronics engineer Elektronik Mühendisi underwater su altı team ekip'
    },
    {
      id: 'tm-mustafabedir',
      title: lang === 'tr' ? 'Mustafa Bedir Sarıtosun — Makine Mühendisi' : 'Mustafa Bedir Sarıtosun — Mechanical Engineer',
      description: lang === 'tr' ? 'Su altı takımı mekanik mühendisi.' : 'Underwater team mechanical engineer.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-mustafabedir',
      keywords: 'mustafa bedir saritosun sarıtosun mechanical engineer Makine Mühendisi underwater su altı team ekip'
    },
    {
      id: 'tm-abdulsamet',
      title: lang === 'tr' ? 'Abdulsamet Han — Makine Mühendisi' : 'Abdulsamet Han — Mechanical Engineer',
      description: lang === 'tr' ? 'Su altı takımı mekanik mühendisi.' : 'Underwater team mechanical engineer.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-abdulsamet',
      keywords: 'abdulsamet han mechanical engineer Makine Mühendisi underwater su altı team ekip'
    },
    {
      id: 'tm-abdurrahman',
      title: lang === 'tr' ? 'Abdurrahman İnce — Elektronik Mühendisi' : 'Abdurrahman İnce — Electronics Engineer',
      description: lang === 'tr' ? 'Su altı takımı elektronik mühendisi.' : 'Underwater team electronics engineer.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-abdurrahman',
      keywords: 'abdurrahman ince İnce electronics engineer Elektronik Mühendisi underwater su altı team ekip'
    },
    {
      id: 'tm-ahmetselim',
      title: lang === 'tr' ? 'Ahmet Selim İlhan — Elektronik Mühendisi' : 'Ahmet Selim İlhan — Electronics Engineer',
      description: lang === 'tr' ? 'Su altı takımı elektronik mühendisi.' : 'Underwater team electronics engineer.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-ahmetselim',
      keywords: 'ahmet selim ilhan İlhan electronics engineer Elektronik Mühendisi underwater su altı team ekip'
    },
    {
      id: 'tm-feyza',
      title: lang === 'tr' ? 'Feyza İnal — Bilgisayar Mühendisi' : 'Feyza İnal — Computer Engineer',
      description: lang === 'tr' ? 'Su altı takımı yazılım mühendisi.' : 'Underwater team software engineer.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-feyza',
      keywords: 'feyza inal İnal computer engineer Bilgisayar Mühendisi software yazılım underwater su altı team ekip'
    },
    {
      id: 'tm-haticekubra',
      title: lang === 'tr' ? 'Hatice Kübra İlhan — Elektronik Mühendisi' : 'Hatice Kübra İlhan — Electronics Engineer',
      description: lang === 'tr' ? 'Su altı takımı elektronik mühendisi.' : 'Underwater team electronics engineer.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-haticekubra',
      keywords: 'hatice kubra kübra ilhan İlhan electronics engineer Elektronik Mühendisi underwater su altı team ekip'
    },
    {
      id: 'tm-mevlutburak',
      title: lang === 'tr' ? 'Mevlüt Burak Dağlı — Elektronik Mühendisi' : 'Mevlüt Burak Dağlı — Electronics Engineer',
      description: lang === 'tr' ? 'Su altı takımı elektronik mühendisi.' : 'Underwater team electronics engineer.',
      category: 'team',
      url: `${_pages}team.html`,
      hash: 'tm-mevlutburak',
      keywords: 'mevlut burak mevlüt dagli dağlı electronics engineer Elektronik Mühendisi underwater su altı team ekip'
    }
  ];

  index.push(...team);

  // ── ABOUT US (team page section) ─────────────
  index.push({
    id: 'about-us',
    title: lang === 'tr' ? 'Hakkımızda — RACLAB' : 'About Us — RACLAB',
    description: lang === 'tr' ? 'Otonominin sınırlarını zorlayan, mühendislik tutkusuna sahip genç vizyona sahip bir akademi ekibi.' : 'Passionate team of developers, engineers and AI researchers pushing the boundaries of UAV technology.',
    category: 'team',
    url: `${_pages}team.html`,
    hash: 'about-us',
    keywords: 'about us Hakkımızda raclab team mission passion developers engineers ai researchers innovation drones robotics embedded systems creativity collaboration excellence inspire build tomorrow boundaries technology nova blastoise war tortle squirtle barakuda'
  });

  // ── COMPETITIONS ──────────────────────────────
  const competitions = [
    {
      id: 'comp-teknofest2025',
      title: lang === 'tr' ? 'TEKNOFEST 2025 — Döner Kanat İHA' : 'TEKNOFEST 2025 — Rotary Wing UAV',
      description: lang === 'tr' ? 'Sonsuzluk (âˆ) yörüngesinde otonom tur ve geometrik hedef koordinatlarına paket bırakımı.' : 'Autonomous infinity trajectory and payload drop on triangular and hexagonal targets.',
      category: 'blog',
      url: `${_pages}blog-detail.html?id=Teknofest2025`,
      keywords: 'teknofest 2025 rotary wing autonomous infinity trajectory payload drop triangular hexagonal target technical report video evaluation'
    },
    {
      id: 'comp-teknofest2024',
      title: lang === 'tr' ? 'TEKNOFEST 2024 — Sabit + Döner Kanat Görevi' : 'TEKNOFEST 2024 — Fixed-Wing + Rotary Mission',
      description: lang === 'tr' ? 'Sınır güvenliği asenkron senaryosu. Bir aracın kilitlendiği hedefe diğerinin ulaşması.' : 'Finalist entry: coordinated border security mission with two UAVs, inter-UAV GPS handoff.',
      category: 'blog',
      url: `${_pages}blog-detail.html?id=Teknofest2024`,
      keywords: 'teknofest 2024 fixed wing rotary finalist international uav border security reconnaissance anomaly neutralization inter-uav gps coordinate handoff arduino nano custom pcb'
    },
    {
      id: 'comp-nova-sampiyon',
      title: lang === 'tr' ? 'RACLAB NOVA — Türkiye Şampiyonu!' : 'RACLAB NOVA — Turkey Champions!',
      description: lang === 'tr' ? 'TEKNOFEST 2025 İnsansız Su Altı Sistemleri\'nde Türkiye Şampiyonu + En İyi Takım Ruhu ödülü!' : 'TEKNOFEST 2025 Unmanned Underwater Systems — Turkey Champions + Best Team Spirit award!',
      category: 'blog',
      url: `${_pages}blog-detail.html?id=nova_sampiyon`,
      keywords: 'nova sampiyon şampiyon turkey champion türkiye 1. birinci teknofest 2025 underwater su altı best team spirit en iyi takım ruhu award ödül hatice kubra beyza feyza'
    },
    {
      id: 'comp-tulpars-3',
      title: lang === 'tr' ? 'TULPARSADA — Türkiye 3.\'sü' : 'TULPARSADA — 3rd in Turkey',
      description: lang === 'tr' ? 'TEKNOFEST Serbest Kategori\'de Tulpars takımı Türkiye 3.\'lüğü elde etti.' : 'Tulpars team ranked 3rd in Turkey at TEKNOFEST Free Category.',
      category: 'blog',
      url: `${_pages}blog-detail.html?id=tulpars`,
      keywords: 'tulparsada tulpars 3. üçüncü third teknofest 2025 serbest free wifi disaster afet iletim communication autonomous'
    }
  ];

  index.push(...competitions);

  // ── SPONSORS ───────────────────────────────
  const sponsors = [
    {
      id: 'sp-kapsul',
      title: lang === 'tr' ? 'Kapsül Teknoloji Platformu — Ana Sponsor' : 'Kapsül Technology Platform — Primary Sponsor',
      description: lang === 'tr' ? 'Konya Büyükşehir Belediyesi tarafından kurulan teknoloji ve inovasyon ekosistemi. Çalışma alanı, prototipleme, mentorluk desteği.' : 'Technology and innovation ecosystem founded by Konya Metropolitan Municipality. Workspace, prototyping and mentorship support.',
      category: 'sponsor',
      url: `${_pages}sponsors.html`,
      hash: 'sponsor-kapsul',
      keywords: 'kapsul kapsül technology platform ana sponsor primary sponsor inovasyon innovation ecosystem prototyping mentorluk mentorship konya workspace ortak joint'
    },
    {
      id: 'sp-mpg',
      title: lang === 'tr' ? 'MPG — Teknik Sponsor' : 'MPG — Technical Sponsor',
      description: lang === 'tr' ? 'Bera Holding bünyesinde faaliyet gösteren Konya merkezli sanayi üreticisi. Savunma sanayii ve hidrolik sistemler.' : 'Konya-based industrial manufacturer under Bera Holding. Defense industry and hydraulic systems.',
      category: 'sponsor',
      url: `${_pages}sponsors.html`,
      hash: 'sponsor-mpg',
      keywords: 'mpg machinery production group teknik teknik sponsor technical sponsor bera holding konya savunma defense industry hydraulic crane iha uav team'
    },
    {
      id: 'sp-atiker',
      title: lang === 'tr' ? 'Atiker Holding — Destekçi Sponsor' : 'Atiker Holding — Community Sponsor',
      description: lang === 'tr' ? 'LPG/CNG otomotiv yakıt sistemleri, elektronik ve yazılım alanlarında faaliyet gösteren Konya merkezli holding.' : 'Konya-based holding operating in LPG/CNG automotive fuel systems, electronics and software.',
      category: 'sponsor',
      url: `${_pages}sponsors.html`,
      hash: 'sponsor-atiker',
      keywords: 'atiker holding destekçi community sponsor lpg cng automotive fuel systems electronics konya global exporter 40 countries underwater su altı team'
    },
    {
      id: 'sp-konya',
      title: lang === 'tr' ? 'Konya Büyükşehir Belediyesi — Ana Sponsor' : 'Konya Metropolitan Municipality — Primary Sponsor',
      description: lang === 'tr' ? 'Gençlerin teknolojik gelişimini destekleyen Konya Büyükşehir Belediyesi. Hem İHA hem de Su Altı takımlarına destek.' : 'Konya Metropolitan Municipality supporting the technological development of youth. Supporting both UAV and Underwater teams.',
      category: 'sponsor',
      url: `${_pages}sponsors.html`,
      hash: 'sponsor-konya',
      keywords: 'konya buyuksehir belediyesi büyükşehir municipality belediye ana primary sponsor government devlet youth gençlik iha uav underwater su altı joint ortak'
    },
    {
      id: 'sp-ulastirma',
      title: lang === 'tr' ? 'T.C. Ulaştırma ve Altyapı Bakanlığı — Ana Sponsor' : 'Ministry of Transport and Infrastructure — Primary Sponsor',
      description: lang === 'tr' ? 'Yerli ve milli teknolojik çözümler vizyonuyla Su Altı Ekibini destekleyen Türk bakanlığı.' : 'Turkish ministry supporting the Underwater Team with a vision of domestic technological solutions.',
      category: 'sponsor',
      url: `${_pages}sponsors.html`,
      hash: 'sponsor-ulastirma',
      keywords: 'ulastirma ulaştırma altyapı bakanligi ministry transport infrastructure government devlet sponsor underwater su altı marine deniz teknoloji uab'
    },
    {
      id: 'sp-yesilay',
      title: lang === 'tr' ? 'Yeşilay — Destekçi Sponsor' : 'Yeşilay (Green Crescent) — Community Sponsor',
      description: lang === 'tr' ? 'Sağlıklı nesiller ve gençlik gelişimini destekleyen Türk Yeşilay Cemiyeti.' : 'Turkish Green Crescent Society supporting healthy generations and youth development in technology.',
      category: 'sponsor',
      url: `${_pages}sponsors.html`,
      hash: 'sponsor-yesilay',
      keywords: 'yesilay yeşilay green crescent community sponsor ngo stk social responsibility sosyal sorumluluk youth gençlik underwater su altı'
    }
  ];

  index.push(...sponsors);

  // â”€â”€ BLOG (from blog-data.js — dynamic) â”€â”€â”€â”€â”€â”€â”€
  if (typeof blogData !== 'undefined') {
    Object.entries(blogData).forEach(([id, post]) => {
      // Skip if already indexed as a competition above
      if (id === 'Teknofest2025' || id === 'Teknofest2024') return;
      const contentTextLang = post.content[lang] ? post.content[lang].join(' ') : '';
      index.push({
        id: `blog-${id}`,
        title: post.title[lang],
        description: post.summary[lang] || contentTextLang.substring(0, 130) + '…',
        category: 'blog',
        url: `${_pages}blog-detail.html?id=${id}`,
        keywords: post.title[lang] + ' ' + (post.summary[lang] || '') + ' ' + contentTextLang.substring(0, 300)
      });
    });
  }

  return index;

}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   2. FUSE INSTANCE
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

let fuse = null;

function initFuse() {
  if (typeof Fuse === 'undefined') {
    console.warn('[Search] Fuse.js not loaded');
    return;
  }
  const lang = (typeof I18N !== 'undefined' ? I18N.currentLang : localStorage.getItem('raclab_lang')) || 'en';
  const searchIndex = buildSearchIndex(lang);
  fuse = new Fuse(searchIndex, {
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'keywords', weight: 0.35 },
      { name: 'description', weight: 0.15 }
    ],
    threshold: 0.28,      // Stricter: avoids unrelated cross-category results
    includeScore: true,
    minMatchCharLength: 2,
    ignoreLocation: true
  });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   3. DOM — BUILD MODAL & TRIGGER
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function buildSearchUI() {
  // â”€â”€ Replace old searchEngine div with new trigger button â”€â”€
  const oldEngine = document.getElementById('searchEngine');
  if (oldEngine) {
    const trigger = document.createElement('button');
    trigger.id = 'searchTrigger';
    trigger.className = 'search-trigger';
    trigger.setAttribute('aria-label', 'Open search');
    trigger.innerHTML = `
      <i class="fa-solid fa-magnifying-glass"></i>
      <span data-i18n="search_btn_text">Search…</span>
      <kbd class="search-hint">Ctrl K</kbd>
    `;
    trigger.addEventListener('click', openSearch);
    oldEngine.replaceWith(trigger);
  }

  const isTr = typeof I18N !== 'undefined' && I18N.currentLang === 'tr';

  // â”€â”€ Build modal HTML â”€â”€
  const overlay = document.createElement('div');
  overlay.id = 'searchOverlay';
  overlay.className = 'search-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Site search');

  overlay.innerHTML = `
    <div class="search-modal" id="searchModal">
      <div class="search-input-row">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          id="searchInput"
          placeholder="${isTr ? 'Sayfalarda, Araçlarda, ekipte, blogda ara…' : 'Search pages, vehicles, team, blog…'}"
          autocomplete="off"
          spellcheck="false"
        >
        <button class="search-close-btn" id="searchCloseBtn" aria-label="Close search">Esc</button>
      </div>
      <div class="search-results" id="searchResults">
        <div class="search-empty">
          <i class="fa-solid fa-magnifying-glass"></i>
          ${isTr ? 'Tüm sayfalarda aramak için yazmaya başlayın…' : 'Start typing to search across all pages…'}
        </div>
      </div>
      <div class="search-footer">
        <span class="sf-group"><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
        <span class="sf-group"><kbd>↵</kbd> open</span>
        <span class="sf-group"><kbd>Esc</kbd> close</span>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Close on backdrop click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  // Close button
  const closeBtn = document.getElementById('searchCloseBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSearch);
  }

  // Input events
  const input = document.getElementById('searchInput');
  if (input) {
    input.addEventListener('input', onSearchInput);
    input.addEventListener('keydown', onSearchKeydown);
  }
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   4. OPEN / CLOSE
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function openSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const input = document.getElementById('searchInput');
    if (input) {
      // Clear old inputs to hide old language artifacts
      input.value = '';
      renderResults([], '');
      input.focus();
    }
  }, 50);
}

function closeSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  renderResults([], '');
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   5. SEARCH LOGIC
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

let _activeIndex = -1;

function onSearchInput(e) {
  const query = e.target.value.trim();
  _activeIndex = -1;
  if (!query) {
    renderResults([], '');
    return;
  }
  if (!fuse) { initFuse(); }
  const raw = fuse ? fuse.search(query).slice(0, 10) : [];
  renderResults(raw.map(r => r.item), query);
}

function onSearchKeydown(e) {
  const items = document.querySelectorAll('.search-result-item');
  if (!items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    _activeIndex = Math.min(_activeIndex + 1, items.length - 1);
    updateActiveItem(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    _activeIndex = Math.max(_activeIndex - 1, 0);
    updateActiveItem(items);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    const active = document.querySelector('.search-result-item.active');
    const target = active || document.querySelector('.search-result-item');
    if (target) navigateToResult(target.dataset.url, target.dataset.hash);
  } else if (e.key === 'Escape') {
    closeSearch();
  }
}

function updateActiveItem(items) {
  items.forEach((el, i) => {
    el.classList.toggle('active', i === _activeIndex);
    if (i === _activeIndex) {
      el.scrollIntoView({ block: 'nearest' });
    }
  });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   6. RENDER RESULTS
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const CATEGORY_META = {
  blog: { icon: 'fa-solid fa-newspaper', label: 'Blog' },
  vehicle: { icon: 'fa-solid fa-helicopter', label: 'Vehicle' },
  team: { icon: 'fa-solid fa-user', label: 'Team' },
  page: { icon: 'fa-solid fa-file-lines', label: 'Page' },
  sponsor: { icon: 'fa-solid fa-handshake', label: 'Sponsor' }
};

function highlight(text, query) {
  if (!query || !text) return text || '';
  const escaped = query.replace(/[.*+?^${}()|[\\\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

function renderResults(items, query) {
  const container = document.getElementById('searchResults');
  if (!container) return;
  const isTr = typeof I18N !== 'undefined' && I18N.currentLang === 'tr';

  if (!items.length) {
    const isEmpty = !query;
    let emptyHtml = '';

    if (isEmpty) {
      emptyHtml = isTr ? 'Tüm sayfalarda aramak için yazmaya başlayın…' : 'Start typing to search across all pages…';
    } else {
      emptyHtml = isTr ? `"<strong style="color:#fff">${query}</strong>" için sonuç bulunamadı` : `No results for <strong style="color:#fff">"${query}"</strong>`;
    }

    container.innerHTML = `
      <div class="search-empty">
        <i class="${isEmpty ? 'fa-solid fa-magnifying-glass' : 'fa-solid fa-circle-xmark'}"></i>
        ${emptyHtml}
      </div>`;
    return;
  }

  // Group by category
  const groups = {};
  items.forEach(item => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
  });

  let html = '';
  const order = ['sponsor', 'blog', 'vehicle', 'team', 'page'];
  order.forEach(cat => {
    if (!groups[cat]) return;
    const meta = CATEGORY_META[cat] || { icon: 'fa-solid fa-circle', label: cat };

    let translatedLabel = meta.label;
    if (isTr) {
      if (cat === 'blog') translatedLabel = 'Blog';
      if (cat === 'vehicle') translatedLabel = 'Araç';
      if (cat === 'team') translatedLabel = 'Ekip';
      if (cat === 'page') translatedLabel = 'Sayfa';
      if (cat === 'sponsor') translatedLabel = 'Sponsor';
    }

    html += `<div class="search-category-label">${translatedLabel}</div>`;
    groups[cat].forEach(item => {
      html += `
        <a class="search-result-item" data-url="${item.url}" data-hash="${item.hash || ''}" href="${item.url}${item.hash ? '#' + item.hash : ''}" tabindex="-1">
          <div class="search-result-icon cat-${cat}">
            <i class="${meta.icon}"></i>
          </div>
          <div class="search-result-text">
            <span class="search-result-title">${highlight(item.title, query)}</span>
            <span class="search-result-desc">${highlight(item.description, query)}</span>
          </div>
          <span class="search-result-badge cat-${cat}">${translatedLabel}</span>
        </a>`;
    });
  });

  container.innerHTML = html;

  // Click + hover events
  container.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.querySelectorAll('.search-result-item').forEach(i => i.classList.remove('active'));
      el.classList.add('active');
    });
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToResult(el.dataset.url, el.dataset.hash);
    });
  });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   6.5 NAVIGATE TO RESULT — scroll or redirect
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function scrollToElement(el) {
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.style.transition = 'box-shadow 0.4s ease';
  el.style.boxShadow = '0 0 0 3px rgba(0,188,212,0.6), 0 0 30px rgba(0,188,212,0.25)';
  setTimeout(() => { el.style.boxShadow = ''; }, 2200);
}

/**
 * Same page â†’ smooth scroll to element.
 * Different page â†’ save hash in sessionStorage, navigate WITHOUT hash
 * so the browser doesn't do its own instant jump, then on DOMContentLoaded
 * we smooth-scroll ourselves.
 */
function navigateToResult(url, hash) {
  closeSearch();

  // Detect if target URL points to the current page
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const targetFile = url.split('?')[0].split('/').pop();
  const onSamePage = currentFile === targetFile;

  if (hash) {
    const el = document.getElementById(hash);
    if (el) {
      // â”€â”€ Same page: smooth scroll + glow â”€â”€
      scrollToElement(el);
      return;
    }
    if (onSamePage) {
      // Element might be rendered dynamically — retry once
      setTimeout(() => {
        const retry = document.getElementById(hash);
        if (retry) scrollToElement(retry);
      }, 300);
      return;
    }
    // â”€â”€ Different page: store hash, navigate cleanly (no # in URL) â”€â”€
    sessionStorage.setItem('_searchScrollHash', hash);
    window.location.href = url;
    return;
  }

  // No hash: same page â†’ just close modal, no reload
  if (onSamePage) return;

  window.location.href = url;
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   7. GLOBAL KEYBOARD SHORTCUT
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

document.addEventListener('keydown', (e) => {
  // Ctrl+K or Cmd+K
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const overlay = document.getElementById('searchOverlay');
    if (overlay && overlay.classList.contains('open')) {
      closeSearch();
    } else {
      openSearch();
    }
  }
  if (e.key === 'Escape') {
    const overlay = document.getElementById('searchOverlay');
    if (overlay && overlay.classList.contains('open')) {
      closeSearch();
    }
  }
});

/* ────────────────────────────────────────────────────────────────────────
   8. INIT
   ──────────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // Note: buildSearchUI() and initFuse() are now called from i18n.js
  // after the language fetch completes, ensuring correct language on first load.

  // ── Cross-page smooth scroll (sessionStorage approach) ──
  const scrollHash = sessionStorage.getItem('_searchScrollHash');
  if (scrollHash) {
    sessionStorage.removeItem('_searchScrollHash');
    // Delay to let page fully paint before scrolling
    setTimeout(() => {
      const el = document.getElementById(scrollHash);
      if (el) scrollToElement(el);
    }, 500);
  }
});
