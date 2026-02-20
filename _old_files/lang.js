const translations = {
    en: {
        nav_home: "Home",
        nav_project: "Project",
        nav_contact: "Contact",

        hero_title: "Ticketing System",
        hero_subtitle: "LAIT (Leading Access to Integrated Ticketing) is an integrated ticket purchasing mechanism based on reward points, offering tourism benefits that are valid throughout Indonesia.",
        btn_get_started: "View Our Project",
        btn_learn_more: "Get in Touch",

        dashboard: "Unified Dashboard",
        efficiency: "Efficiency Boost",
        availability: "Availability",

        about_title: "LAIT Features",
        about_subtitle: "Discover how the LAIT Ticketing System delivers convenience and ease for its users",

        mission: "Our Mission",
        mission_desc: "LAIT is a comprehensive solution designed to streamline the ticketing process for organizations.",
        benefits: "Key Benefits",

        benefit_1: "Unified interface across all ticketing systems",
        benefit_2: "Enhanced operational efficiency",
        benefit_3: "Available in major tourist cities",
        benefit_4: "Reward points remain valid as long as the user uses the application",
        benefit_5: "24/7 customer service support",


        contact_title: "Ready to Transform Your Ticketing?",
        contact_desc: "Get in touch with our team to learn more about how LAIT can revolutionize your organization's ticket management process.",
        btn_contact: "Contact Us",
        contact_note: "Join the growing community of organizations that trust LAIT for their ticketing needs.",

        service_pass_title: "Travel Pass Tickets",
        service_pass_desc: "Provides transport travel pass tickets available on a daily, weekly, and monthly basis.",

        service_reward_title: "Reward Points",
        service_reward_desc: "Earn reward points with every transport ticket purchase and each ticket scan.",

        service_tourism_title: "Tourist Attraction Integration",
        service_tourism_desc: "Offers various tourist attraction tickets across Indonesia, where reward points can be used as ticket discounts.",

        service_payment_title: "Multiple Payment Methods",
        service_payment_desc: "Supports various payment methods for ticket purchases, including QRIS, Virtual Account, Debit, and Credit Card.",

        our_project_title: "Our Project",
        our_project_desc: "We are proud that LAIT Ticketing has been used in several major cities in Indonesia",
        partnership_title: "Strategic Partnership",
        partnership_desc: "We are proud to collaborate with leading institutions and innovators to build the future of integrated, easy, and efficient transportation",

        value_title: "Why Choose LAIT?",
        value_desc: "This microsite serves as a company profile for LAIT, showcasing its features, benefits, and use cases to potential clients and partners. The content is organized into sections that provide a comprehensive overview of LAIT's capabilities and value proposition.",

        stat_projects: "Trans Project",
        stat_attraction: "Tourist Attraction",
        stat_users: "User",
        stat_support: "Support"


    },

    id: {
        nav_home: "Beranda",
        nav_project: "Proyek",
        nav_contact: "Kontak",

        hero_title: "Sistem Ticketing",
        hero_subtitle: "LAIT (Leading Access to Integrated Ticketing) merupakan mekanisme pembelian tiket terusan berbasis poin reward sebagai manfaat wisata yang berlaku di seluruh Indonesia.",
        btn_get_started: "Lihat Proyek Kami",
        btn_learn_more: "Hubungi Kami",

        dashboard: "Dashboard Terpadu",
        efficiency: "Peningkatan Efisiensi",
        availability: "Ketersediaan",

        about_title: "Fitur LAIT",
        about_subtitle: "Temukan bagaimana Sistem Ticketing LAIT memberikan kemudahan bagi para penggunanya",

        mission: "Misi Kami",
        mission_desc: "LAIT adalah solusi komprehensif yang dirancang untuk menyederhanakan proses ticketing organisasi.",
        benefits: "Manfaat Utama",

        benefit_1: "Antarmuka terpadu untuk semua sistem ticketing",
        benefit_2: "Meningkatkan efisiensi operasional",
        benefit_3: "Tersedia di beberapa kota wisata besar",
        benefit_4: "Poin tetap berlaku selama pengguna masih menggunakan aplikasi",
        benefit_5: "Dukungan Customer Service 24/7",


        contact_title: "Siap Mengubah Sistem Ticketing Anda?",
        contact_desc: "Hubungi tim kami untuk mengetahui bagaimana LAIT dapat merevolusi manajemen ticketing organisasi Anda.",
        btn_contact: "Hubungi Kami",
        contact_note: "Bergabunglah dengan organisasi yang telah mempercayakan sistem ticketing mereka kepada LAIT.",

        service_pass_title: "Tiket Terusan",
        service_pass_desc: "Menyediakan tiket terusan transportasi baik harian, mingguan, hingga bulanan.",

        service_reward_title: "Poin Reward",
        service_reward_desc: "Dapatkan poin pada setiap pembelian tiket transportasi dan pada setiap scan tiket.",

        service_tourism_title: "Integrasi Obyek Wisata",
        service_tourism_desc: "Terdapat berbagai tiket obyek wisata di seluruh Indonesia, dan poin reward dapat digunakan sebagai potongan tiket obyek wisata.",

        service_payment_title: "Beragam Metode Pembayaran",
        service_payment_desc: "Menyediakan berbagai metode pembayaran pembelian tiket, mulai dari QRIS, Virtual Account, Debit, dan Credit Card.",

        our_project_title: "Our Project",
        our_project_desc: "Kami bangga Ticketing LAIT sudah digunakan di beberapa kota besar Indonesia",
        partnership_title: "Strategic Partnership",
        partnership_desc: "Kami bangga berkolaborasi dengan para instansi dan inovator terkemuka untuk membangun masa depan mode transportasi yang terintegrasi, mudah, dan efisien",



        value_title: "Mengapa Memilih LAIT?",
        value_desc: "Microsite ini berfungsi sebagai profil perusahaan LAIT yang menampilkan fitur, manfaat, dan studi penggunaan kepada calon klien dan mitra. Konten disusun dalam beberapa bagian untuk memberikan gambaran menyeluruh mengenai kapabilitas dan nilai unggulan LAIT.",

        stat_projects: "Proyek Transportasi",
        stat_attraction: "Objek Wisata",
        stat_users: "Pengguna",
        stat_support: "Dukungan"





    }
};

/* ===============================
   LANGUAGE DROPDOWN + I18N
================================ */

const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const langItems = document.querySelectorAll('.lang-item');
const i18nEls = document.querySelectorAll('[data-i18n]');

const chevron = langBtn.querySelector('.chevron');
/* Toggle dropdown */
langBtn.addEventListener('click', () => {
    const isOpen = langMenu.classList.toggle('show');
    // ubah arah chevron
    chevron.classList.toggle('up', isOpen);
});

/* Set language function */
function setLanguage(lang) {
    // translate text
    i18nEls.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // update dropdown active
    langItems.forEach(item => {
        item.classList.toggle('active', item.dataset.lang === lang);
    });

    // update button display
    document.querySelector('.lang-code').textContent = lang.toUpperCase();
    document.querySelector('.flag').textContent = lang === 'en' ? 'US' : 'ID';

    // reset chevron ke samping
    chevron.classList.remove('up');

    localStorage.setItem('language', lang);
}

/* Click language item */
langItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const lang = item.dataset.lang;

        setLanguage(lang);
        langMenu.classList.remove('show');

        console.log('Language switched to:', lang);
    });
});

/* Default language */
setLanguage(localStorage.getItem('language') || 'en');
