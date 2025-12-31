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

/* ===============================
   LANGUAGE DROPDOWN + I18N
================================ */

const langBtn   = document.getElementById('langBtn');
const langMenu  = document.getElementById('langMenu');
const langItems = document.querySelectorAll('.lang-item');
const i18nEls   = document.querySelectorAll('[data-i18n]');

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
