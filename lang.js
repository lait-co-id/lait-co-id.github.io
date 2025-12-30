const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_contact: "Contact",

        hero_title: "Ticketing System",
        hero_subtitle: "LAIT (Leading Access to Integrated Ticketing) is an integrated ticket purchasing mechanism based on reward points, offering tourism benefits that are valid throughout Indonesia.",
        btn_get_started: "View Our Project",
        btn_learn_more: "Get in Touch",

        dashboard: "Unified Dashboard",
        efficiency: "Efficiency Boost",
        availability: "Availability",

        about_title: "About LAIT",
        about_subtitle: "Discover how LAIT revolutionizes ticket management for organizations worldwide",
        mission: "Our Mission",
        mission_desc: "LAIT is a comprehensive solution designed to streamline the ticketing process for organizations.",
        benefits: "Key Benefits",

        benefit_1: "Unified interface across all ticketing systems",
        benefit_2: "Enhanced operational efficiency",
        benefit_3: "Streamlined workflow management",
        benefit_4: "Real-time analytics and reporting",

        contact_title: "Ready to Transform Your Ticketing?",
        contact_desc: "Get in touch with our team to learn more about how LAIT can revolutionize your organization's ticket management process.",
        btn_contact: "Contact Us",
        contact_note: "Join the growing community of organizations that trust LAIT for their ticketing needs."
    },

    id: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_contact: "Kontak",

        hero_title: "Sistem Ticketing",
        hero_subtitle: "LAIT (Leading Access to Integrated Ticketing) merupakan mekanisme pembelian tiket terusan berbasis poin reward sebagai manfaat wisata yang berlaku di seluruh Indonesia.",
        btn_get_started: "Lihat Proyek Kami",
        btn_learn_more: "Hubungi Kami",

        dashboard: "Dashboard Terpadu",
        efficiency: "Peningkatan Efisiensi",
        availability: "Ketersediaan",

        about_title: "Tentang LAIT",
        about_subtitle: "Temukan bagaimana LAIT merevolusi manajemen ticketing untuk organisasi di seluruh dunia",
        mission: "Misi Kami",
        mission_desc: "LAIT adalah solusi komprehensif yang dirancang untuk menyederhanakan proses ticketing organisasi.",
        benefits: "Manfaat Utama",

        benefit_1: "Antarmuka terpadu untuk semua sistem ticketing",
        benefit_2: "Meningkatkan efisiensi operasional",
        benefit_3: "Manajemen alur kerja yang lebih sederhana",
        benefit_4: "Analitik dan laporan real-time",

        contact_title: "Siap Mengubah Sistem Ticketing Anda?",
        contact_desc: "Hubungi tim kami untuk mengetahui bagaimana LAIT dapat merevolusi manajemen ticketing organisasi Anda.",
        btn_contact: "Hubungi Kami",
        contact_note: "Bergabunglah dengan organisasi yang telah mempercayakan sistem ticketing mereka kepada LAIT."
    }
};

const langBtns = document.querySelectorAll('.lang');
const i18nEls = document.querySelectorAll('[data-i18n]');

function setLanguage(lang) {
    i18nEls.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('language', lang);
}

// klik bahasa
langBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        setLanguage(btn.dataset.lang);
    });
});

// set default
setLanguage(localStorage.getItem('language') || 'en');