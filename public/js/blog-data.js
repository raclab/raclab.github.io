// blog-data.js
// All blog content with bilingual dictionary structure
const blogData = {
    "Teknofest2025": {
        title: {
            en: "International UAVs Competition Teknofest 2025",
            tr: "Uluslararası İHA Yarışması Teknofest 2025"
        },
        date: { en: "Oct 17, 2025", tr: "17 Eki, 2025" },
        image: "../public/img/blog/Teknofest2025.jpeg",
        summary: {
            en: "Our autonomous rotary-wing mission at TEKNOFEST 2025, successfully passing the technical report and video evaluation stages.",
            tr: "TEKNOFEST 2025 otonom döner kanatlı görevimiz, teknik rapor ve video değerlendirmelerini başarıyla geçti."
        },
        content: {
            en: [
                "In 2025, we participated in the international TEKNOFEST competition in the rotary-wing category and successfully advanced through the technical report and video submission stages. Throughout the evaluation process, we presented comprehensive engineering documentation detailing our system architecture, flight algorithms, safety mechanisms, and mission planning strategy, while our submitted flight video demonstrated the operational performance of our UAV under realistic field conditions.",
                "During the competition mission, our unmanned aerial vehicle autonomously followed a precisely defined infinity (∞) trajectory and then proceeded to the designated target zones using our vision-based detection and positioning algorithms. The payload was released sequentially, first onto the triangular target and then onto the hexagonal target, demonstrating accurate navigation, stable flight control, and reliable payload release mechanisms. This experience significantly strengthened our expertise in autonomous flight systems, mission planning, system integration, validation testing, and real-time decision-making in competitive environments."
            ],
            tr: [
                "2025 yılında TEKNOFEST uluslararası İHA yarışmasına döner kanat kategorisinde katıldık ve teknik rapor ile video değerlendirme aşamalarını başarıyla geçtik. Değerlendirme süreci boyunca sistem mimarimizi, uçuş algoritmalarımızı, güvenlik mekanizmalarımızı ve görev planlama stratejimizi detaylandıran kapsamlı mühendislik dokümantasyonunu sunduk.",
                "Yarışma görevi sırasında otonom aracımız öncelikle olarak belirtilen sonsuzluk (∞) rotasını sorunsuz bir şekilde takip etti, ardından görüntü işleme ve hedef tespit algoritmalarımızı kullanarak üçgen ve altıgen hedef bölgelerine başarılı ve mekanik kararlılıkla faydalı yükleri bıraktı. Kusursuz bir otonom uçuş, yapay zeka entegrasyonu, gerçek zamanlı tespit ve mekanik uyumluluğumuzu artırarak yarışma koşullarında yeteneklerimizi kanıtlamış olduk."
            ]
        }
    },
    "nova_takim_ruhu": {
        title: { en: "Best Team Spirit Award", tr: "En İyi Takım Ruhu Ödülü" },
        date: { en: "Apr 22, 2026", tr: "22 Nis, 2026" },
        image: "../public/img/blog/FOTO5.jpeg",
        summary: {
            en: "Our RACLAB NOVA team won the 'Best Team Spirit' award at TEKNOFEST 2025 Mavi Vatan Istanbul!",
            tr: "RACLAB NOVA takımımız, Teknofest Mavi Vatan İstanbul'da 'En İyi Takım Ruhu' ödülünü kazandı!"
        },
        content: {
            en: [
                "At the TEKNOFEST 2025 Unmanned Underwater Systems Competition organized under the leadership of @aselsan, our RACLAB NOVA team achieved great success in Teknofest Mavi Vatan Istanbul and won the 'Best Team Spirit' award! 🏆",
                "We sincerely congratulate our RACLAB NOVA team who achieved this proud success, and our advisor Assoc. Prof. Dr. Akif Durdu who always guides us on this journey.",
                "We also offer our endless thanks to our sponsor @kapsulteknoloji for supporting us throughout this process."
            ],
            tr: [
                "@aselsan öncülüğünde düzenlenen @teknofest 2025 İnsansız Su Altı Sistemleri Yarışması'nda RACLAB NOVA takımımız, Teknofest Mavi Vatan İstanbul'da büyük bir başarıya imza attı ve 'En İyi Takım Ruhu' ödülünü kazandı! 🏆",
                "Bu gurur verici başarıyı elde eden RACLAB NOVA takımımızı ve bu yolculukta bizlere her zaman rehberlik eden danışmanımız Doç. Dr. Akif Durdu'yu yürekten tebrik ediyoruz.",
                "Bizi bu süreçte destekleyen sponsorumuz @kapsulteknoloji'ye de sonsuz teşekkürlerimizi sunuyoruz."
            ]
        }
    },
    "tulpars": {
        title: {
            en: "TEKNOFEST Success: TULPARS Team Ranked 3rd in Turkey!",
            tr: "TEKNOFEST Başarısı: TULPARS Takımı Türkiye 3.’sü Oldu!"
        },
        date: { en: "Nov 12, 2025", tr: "12 Kas, 2025" },
        image: "../public/img/blog/tulpars2025.png",//Tulparas takımı fotoğrafı eklenebilir
        summary: {
            en: "Our TULPARSADA project achieved a remarkable success by ranking 3rd in Turkey in the Free Category at TEKNOFEST.",
            tr: "TULPARSADA projemiz, TEKNOFEST Serbest Kategori'de Türkiye 3.'lüğü elde ederek dikkat çekici bir başarıya imza attı."
        },
        content: {
            en: [
                "At TEKNOFEST, Turkey's largest technology festival, our TULPARSADA project achieved a remarkable success by ranking 3rd in Turkey in the Free Category.",
                "TULPARSADA project aims to solve communication breakdown, one of the biggest problems experienced especially in disaster situations like earthquakes. In scenarios where GSM infrastructure is disabled, a Wi-Fi-based emergency communication network is created via unmanned aerial vehicles (UAVs).",
                "Thanks to this system: Search and rescue teams can communicate quickly. Disaster victims can directly communicate their needs. Data flow continues uninterrupted.",
                "In the project, two different UAVs work together: Communication UAV goes to the disaster area and establishes a Wi-Fi network. Logistics UAV transmits the collected requests to the center and delivers the necessary materials to the region. With this structure, not only communication but also logistical support is provided autonomously.",
                "TULPARSADA system brings together advanced technologies such as: Autonomous flight capability, Real-time data transfer, Web-based ground control station, User interaction with Captive Portal. In addition, the system allows teams to directly communicate their needs through a special interface working over Wi-Fi, and this data is analyzed instantly and turned into action.",
                "Many components and systems used in the project are: Designed by the team, Produced using domestic resources, Developed independently from open-source systems. In this respect, TULPARSADA stands out not only as a competition project but also as a strong example of the national technology vision.",
                "Developed with a budget of approximately 83,000 TL, this project achieved 3rd place in Turkey by receiving high scores from the TEKNOFEST jury thanks to the successful integration of engineering, software, and field scenarios.",
                "TULPARSADA sheds light on future technologies by providing a fast, flexible, and life-saving solution in the field of disaster management. This success is a clear indication of what young engineers' determination and domestic production power can achieve when combined."
            ],
            tr: [
                "Türkiye’nin en büyük teknoloji festivali olan TEKNOFEST’te, yerli ve yenilikçi projeler her yıl olduğu gibi bu yıl da büyük ilgi gördü. Bu kapsamda geliştirilen TULPARSADA projesi, Serbest Kategori’de elde ettiği Türkiye 3.’lüğü ile dikkat çekici bir başarıya imza attı.",
                "TULPARSADA projesi, özellikle deprem gibi afet durumlarında yaşanan en büyük sorunlardan biri olan iletişim kopukluğunu çözmeyi hedefliyor. GSM altyapısının devre dışı kaldığı senaryolarda, insansız hava araçları (İHA) aracılığıyla Wi-Fi tabanlı acil iletişim ağı oluşturuluyor.",
                "Bu sistem sayesinde: Arama-kurtarma ekipleri hızlı şekilde iletişim kurabiliyor. Afetzedeler ihtiyaçlarını doğrudan iletebiliyor. Veri akışı kesintisiz şekilde devam ediyor.",
                "Projede iki farklı İHA birlikte çalışıyor: İletişim İHA’sı afet bölgesine giderek Wi-Fi ağı kuruyor. Lojistik İHA’sı toplanan talepleri merkeze iletiyor ve gerekli malzemeleri bölgeye ulaştırıyor. Bu yapı sayesinde sadece iletişim değil, aynı zamanda lojistik destek de otonom şekilde sağlanıyor.",
                "TULPARSADA sistemi; Otonom uçuş kabiliyeti, Gerçek zamanlı veri aktarımı, Web tabanlı yer kontrol istasyonu, Captive Portal ile kullanıcı etkileşimi gibi ileri seviye teknolojileri bir araya getiriyor. Ayrıca sistem, Wi-Fi üzerinden çalışan özel bir arayüz ile ekiplerin ihtiyaçlarını doğrudan iletmesini sağlıyor ve bu veriler anlık olarak analiz edilerek aksiyona dönüştürülüyor.",
                "Projede kullanılan birçok bileşen ve sistem: Takım tarafından tasarlanmış, Yerli kaynaklar kullanılarak üretilmiş, Açık kaynak sistemlerden bağımsız geliştirilmiştir. Bu yönüyle TULPARSADA, sadece bir yarışma projesi değil, aynı zamanda milli teknoloji vizyonunun güçlü bir örneği olarak öne çıkıyor.",
                "Yaklaşık 83.000 TL bütçe ile geliştirilen bu proje, mühendislik, yazılım ve saha senaryolarının başarılı entegrasyonu sayesinde TEKNOFEST jürisinden yüksek puan alarak Türkiye 3.’lüğünü elde etti.",
                "TULPARSADA, afet yönetimi alanında hızlı, esnek ve hayat kurtarıcı bir çözüm sunarak geleceğin teknolojilerine ışık tutuyor. Bu başarı, genç mühendislerin azmi ve yerli üretim gücünün birleştiğinde neler başarabileceğinin açık bir göstergesi."
            ]
        }
    },
    "Teknofest2024": {
        title: {
            en: "International UAVs Competition Teknofest 2024",
            tr: "Uluslararası İHA Yarışması Teknofest 2024"
        },
        date: { en: "Oct 15, 2024", tr: "15 Eki, 2024" },
        image: "../public/img/blog/Teknofest2024.jpeg",
        summary: {
            en: "Our finalist journey at TEKNOFEST 2024 featuring a coordinated fixed-wing and rotary-wing UAV mission with autonomous anomaly detection and neutralization.",
            tr: "Teknofest 2024 finalist yolculuğumuz: Otonom anomali tespiti ve hedef imha operasyonunu içeren koordineli (Sabit & Döner Kanat) İHA gözetim görevi."
        },
        content: {
            en: [
                "In 2024, we participated as a team in the International UAV category of TEKNOFEST and qualified as finalists. Throughout the competition process, we successfully completed all technical report stages and video submissions. Within the scope of the free mission scenario, we designed a border security–themed operation involving two different aerial platforms: a fixed-wing UAV and a rotary-wing UAV.",
                "The fixed-wing UAV carried out reconnaissance and area surveillance tasks and, upon detecting an anomaly, determined its location and transmitted the GPS coordinates to the rotary-wing UAV. The rotary-wing UAV then autonomously navigated to the received coordinates, verified the target, and successfully executed the neutralization mission.",
                "For the rotary-wing platform, we developed a custom power distribution board, and a remote-controlled system based on Arduino Nano was specifically designed and integrated for operational control. This project provided significant engineering experience in system integration, mission planning, inter-UAV communication, coordinated operations, data transmission, and custom hardware development."
            ],
            tr: [
                "2024 yılında TEKNOFEST Uluslararası İHA kategorisinde takım olarak yer aldık ve finalist olmaya hak kazandık. Yarışma süreci boyunca tüm teknik rapor ve video aşamalarını başarı ile atlattık. Serbest görev kapsamında, sınır güvenliği temalı ve iki farklı hava platformu (sabit kanat, ve döner kanat İHA) barındıran asenkron koordineli bir operasyon tasarladık.",
                "Sabit kanatlı İHA gözetim ve alan taraması görevlerini icra ederek, anomali tespit ettiği bir hedefi algıladı ve GPS koordinatlarını döner kanatlı İHA platformuna yolladı. Görev komutunu alan döner kanatlı İHA, aldığı koordinatlara otonom şekilde ulaşıp hedef bölgeyi doğruladı ve hedefi imha etme (nötralizasyon) görevini başarıyla tamamladı.",
                "Döner kanatlı platformumuz için özel tasarım güç dağıtım modülü (custom power distribution board) ve görev operasyonel kontrolü için Arduino Nano temelli özel iletişim ve kontrol modülleri ürettik. Bu takım çalışması; sistem entegrasyonu, İHA'lar arası iletişim, görev planlaması, koordineli hareket, özel donanım yaratımı ve veri iletimi unsurlarında muazzam mühendislik tecrübesi edinmemizi sağladı."
            ]
        }
    },
    "kapsul_odul": {
        title: { en: "Kapsül Award Ceremony", tr: "Kapsül Ödül Töreni" },
        date: { en: "Jan 10, 2026", tr: "10 Oca, 2026" },
        image: "../public/img/blog/FOTO1.jpeg",
        summary: {
            en: "Our TEKNOFEST 2025 achievements were honored at the Kapsül Technology Platform event.",
            tr: "Kapsül Teknoloji Platformu'nun düzenlediği etkinlikte, TEKNOFEST 2025 başarılarımız onurlandırıldı."
        },
        content: {
            en: [
                "At the event organized by the Kapsül Technology Platform, our TEKNOFEST 2025 achievements were honored.",
                "We would like to thank Kapsül Technology Platform and everyone involved, especially our advisor Prof. Dr. Akif Durdu, who always supports us on this journey. To many more successes! 💪",
                "#TEKNOFEST #Kapsül #RACLAB #KTUN #Teknoloji #Mühendislik #TakımRuhu #Başarı"
            ],
            tr: [
                "Kapsül Teknoloji Platformu'nun düzenlediği etkinlikte, TEKNOFEST 2025 başarılarımız onurlandırıldı.",
                "Bu yolculukta bizleri her zaman destekleyen başta danışmanımız Prof. Dr. Akif Durdu olmak üzere Kapsül Teknoloji Platformu'na ve emeği geçen herkese teşekkür ederiz. Daha nice başarılara! 💪",
                "#TEKNOFEST #Kapsül #RACLAB #KTUN #Teknoloji #Mühendislik #TakımRuhu #Başarı"
            ]
        }
    },
    "kis_kampi": {
        title: { en: "Raclab 8th Winter Camp", tr: "Raclab 8. Kış Kampı" },
        date: { en: "Feb 15, 2026", tr: "15 Şub, 2026" },
        image: "../public/img/blog/FOTO2.jpeg",
        summary: {
            en: "We successfully completed the 8th Raclab Winter Camp, which was very productive and beneficial.",
            tr: "Bizim için oldukça dolu ve faydalı geçen Raclab 8.Kış Kampı'nı başarıyla tamamladık."
        },
        content: {
            en: [
                "We successfully completed the 8th Raclab Winter Camp. It was a very full and beneficial camp for us.",
                "We thank our advisor Prof. Dr. Akif Durdu, who organized the camp, and all our friends who contributed. We would also like to thank our Provincial Director of Industry and Technology, Mr. Vehbi Konarılı, and Kapsül Technology Platform, who examined our work during the camp on site.",
                "See you at the next camp! @rac_lab @vehbikonarili @kapsulteknoloji"
            ],
            tr: [
                "Raclab 8.Kış Kampı'nı başarıyla tamamladık. Bizim için oldukça dolu ve faydalı bir kamp oldu.",
                "Kampı düzenleyen danışman hocamız Prof. Dr. Akif Durdu'ya ve emeği geçen tüm arkadaşlarımıza teşekkür ederiz. Ayrıca kamp sürecindeki çalışmalarımızı yerinde inceleyen Sanayi ve Teknoloji İl Müdürümüz Sayın Vehbi Konarılı'ya ve Kapsül Teknoloji Platformu'na teşekkürlerimizi sunarız.",
                "Bir sonraki kampta görüşmek üzere! @rac_lab @vehbikonarili @kapsulteknoloji"
            ]
        }
    },
    "havuz_robotu": {
        title: { en: "Pool Cleaning Robot Field Tests", tr: "Havuz Temizleme Robotu Saha Testleri" },
        date: { en: "Mar 05, 2026", tr: "05 Mar, 2026" },
        image: "../public/img/blog/FOTO3.jpeg",
        summary: {
            en: "The first field tests of our pool cleaning robot were successfully carried out! 🤩🌊",
            tr: "Havuz temizleme robotumuzun ilk saha testleri başarıyla gerçekleştirildi! 🤩🌊"
        },
        content: {
            en: [
                "The first field tests of our pool cleaning robot, which we have been working on with dedication for a long time, were successfully carried out! 🤩🌊",
                "The effort and dedication shown by our team during this process are truly commendable. From the development phase to the testing process, we worked meticulously at every step. The smooth operation of our robot in the pool environment was a great source of motivation for our entire team.",
                "This success is not just a test; it is the concrete fruit of months of R&D work, day and night engineering efforts, and team spirit. We have reached this point by learning from every mistake and getting stronger with every trial.",
                "Our work will continue with determination to develop a better, smarter, and more efficient system. Stay tuned, more good news is on the way! 💪",
                "@rac_lab #RACLAB #HavuzTemizleme #Robotik #Otomasyon #Mühendislik #TakımRuhu #Teknoloji #YerliveMilli"
            ],
            tr: [
                "Üzerinde uzun süredir özveriyle çalıştığımız havuz temizleme robotumuzun ilk saha testleri başarıyla gerçekleştirildi! 🤩🌊",
                "Bu süreçte ekibimizin gösterdiği emek ve özveri gerçekten takdire şayan. Geliştirme aşamasından test sürecine kadar her adımda büyük bir titizlikle çalıştık. Robotumuzun havuz ortamında sorunsuz bir şekilde çalışması, tüm ekibimiz için büyük bir motivasyon kaynağı oldu.",
                "Bu başarı, yalnızca bir test değil; aylar süren Ar-Ge çalışmalarının, gece gündüz süren mühendislik gayretinin ve takım ruhunun somut bir meyvesidir. Her hatadan ders çıkararak, her denemede daha da güçlenerek bu noktaya geldik.",
                "Daha iyi, daha akıllı ve daha verimli bir sistem geliştirmek için çalışmalarımız kararlılıkla devam edecek. Bizi takipte kalın, daha güzel haberler yolda! 💪",
                "@rac_lab #RACLAB #HavuzTemizleme #Robotik #Otomasyon #Mühendislik #TakımRuhu #Teknoloji #YerliveMilli"
            ]
        }
    },
    "nova_sampiyon": {
        title: { en: "RACLAB NOVA: Turkey Champions!", tr: "RACLAB NOVA: Türkiye Şampiyonu!" },
        date: { en: "Apr 20, 2026", tr: "20 Nis, 2026" },
        image: "../public/img/blog/FOTO4.jpeg",
        summary: {
            en: "RACLAB NOVA is at the top of the TEKNOFEST 2025 Unmanned Underwater Systems Competition!",
            tr: "RACLAB NOVA, TEKNOFEST 2025 İnsansız Su Altı Sistemleri Yarışması'nda zirvede!"
        },
        content: {
            en: [
                "🏆 WE ARE TURKEY CHAMPIONS!",
                "RACLAB NOVA is at the top of the TEKNOFEST 2025 Unmanned Underwater Systems Competition! Moreover, the 'Best Team Spirit' award is also ours! 💪",
                "A huge thank you to everyone involved: Hatice Kübra İlhan (Captain), Abdurrahman İnce, Beyza Nur Yağcı, Feyza İnal, Furkan Eranıl, Gizem Ülker, Mevlüt Burak Dağlı, Mustafa Bedir Sarıtosun, Feyza Baltürk, Ahmet Selim İlhan.",
                "We would like to thank our advisor Prof. Dr. Akif DURDU, our Rector Prof. Dr. Osman Nuri ÇELİK, Kapsül Technology Platform, and Konya Technical University for their continuous support.",
                "To many more victories together! 👏 #TEKNOFEST #RACLAB #KTUN #TeamSpirit #Innovation #UnderwaterRobotics"
            ],
            tr: [
                "🏆 TÜRKİYE ŞAMPİYONUYUZ!",
                "RACLAB NOVA, TEKNOFEST 2025 İnsansız Su Altı Sistemleri Yarışması'nda zirvede! Üstelik 'En İyi Takım Ruhu' ödülü de bizim! 💪",
                "Emeği geçen herkese kocaman teşekkürler: Hatice Kübra İlhan (K), Abdurrahman İnce, Beyza Nur Yağcı, Feyza İnal, Furkan Eranıl, Gizem Ülker, Mevlüt Burak Dağlı, Mustafa Bedir Sarıtosun, Feyza Baltürk, Ahmet Selim İlhan.",
                "Sürekli desteği için başta danışmanımız Prof. Dr. Akif DURDU olmak üzere, Rektörümüz Prof. Dr. Osman Nuri ÇELİK'e, Kapsül Teknoloji Platformu'na ve Konya Teknik Üniversitesi'ne teşekkür ederiz.",
                "Birlikte daha nice zaferlere! 👏 #TEKNOFEST #RACLAB #KTUN #TeamSpirit #Innovation #UnderwaterRobotics"
            ]
        }
    },
    "nova_test_gunu": {
        title: { en: "Nova Team Test Day", tr: "Nova Takımı Test Günü" },
        date: { en: "May 01, 2026", tr: "01 May, 2026" },
        image: "../public/img/blog/FOTO6.jpg",
        summary: {
            en: "Another exciting test day with the Nova team in a real marine environment!",
            tr: "Nova takımı ile heyecan dolu bir test günü daha, gerçek deniz ortamında test ettik!"
        },
        content: {
            en: [
                "Another exciting test day with the Nova team is behind us! 🌊🚀",
                "Today we tested our underwater robot in a real marine environment. Every test gives us new data and valuable experiences. We are working at full speed to further improve our systems, eliminate potential problems, and reach the best performance before the competition.",
                "The harmony, dedication, and team spirit shown by our team make us stronger every day. Every minute we spend in the sea brings us one step closer to our goals. 💪",
                "Thanks to everyone who supported us on this journey! @rac_lab @kapsulteknoloji"
            ],
            tr: [
                "Nova takımı ile heyecan dolu bir test günü daha geride kaldı! 🌊🚀",
                "Bugün su altı robotumuzu gerçek deniz ortamında test ettik. Her test, bize yeni veriler ve değerli deneyimler kazandırıyor. Sistemlerimizi daha da geliştirmek, olası aksaklıkları gidermek ve yarışma öncesinde en iyi performansa ulaşmak için çalışmalarımızı tam gaz sürdürüyoruz.",
                "Ekibimizin gösterdiği uyum, özveri ve takım ruhu her geçen gün bizi daha da güçlendiriyor. Denizde geçirdiğimiz her dakika, hedeflerimize bir adım daha yaklaşmamızı sağlıyor. 💪",
                "Bizi bu yolculukta destekleyen herkese teşekkürler! @rac_lab @kapsulteknoloji"
            ]
        }
    }
};

// CommonJS export (for Node.js environments)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogData;
}
