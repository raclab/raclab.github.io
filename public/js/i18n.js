/**
 * RACLAB - Pure Vanilla JS Language Switcher
 * Fetches JSON strings and updates DOM elements having data-i18n attributes.
 */

const I18N = {
  currentLang: localStorage.getItem('raclab_lang') || 'en',
  translations: {},

  init: async function () {
    // Determine depth for fetch path (e.g. index.html vs pages/contact.html)
    const isInPagesObj = window.location.pathname.includes('/pages/');
    const basePath = isInPagesObj ? '../public/locales/' : './public/locales/';

    try {
      const response = await fetch(`${basePath}${this.currentLang}.json`);
      this.translations = await response.json();
      this.applyTranslations();
      this.updateButtonUI();
      // Rebuild search UI now that the language is confirmed (avoids race condition)
      if (typeof buildSearchUI === 'function') {
        const overlay = document.getElementById('searchOverlay');
        if (overlay) overlay.remove();
        buildSearchUI();
      }
      if (typeof initFuse === 'function') {
        initFuse();
      }
    } catch (error) {
      console.error('Failed to load language JSON', error);
      // Fallback: If fetch fails (e.g., file:// protocol), don't break page
    }

    // Attach listener to all Lang Toggle buttons
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      // Remove old listeners to prevent duplicates if re-initing
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      newBtn.addEventListener('click', () => this.toggleLanguage());
    });
  },

  toggleLanguage: function () {
    this.currentLang = this.currentLang === 'en' ? 'tr' : 'en';
    localStorage.setItem('raclab_lang', this.currentLang);
    this.init(); // Re-fetch and apply new language
  },

  applyTranslations: function () {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (this.translations[key]) {
        // If element is an input, change placeholder instead of innerText
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', this.translations[key]);
        } else {
          el.innerHTML = this.translations[key]; // Allow simple HTML tags inside JSON
        }
      }
    });

    // Notify document that language has changed (useful for document.title if needed)
    document.documentElement.lang = this.currentLang;
    
    // Broadcast event for dynamic JS components (like vehicles-detail.js)
    document.dispatchEvent(new Event('languageChanged'));
  },

  updateButtonUI: function () {
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      // Button shows the language you will SWITCH TO (not the current one)
      btn.textContent = this.currentLang === 'en' ? 'TR' : 'EN';
    });
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  I18N.init();
});
