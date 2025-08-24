/* Modern Starter Interactions */
(function () {
  const documentElement = document.documentElement;
  documentElement.classList.remove('no-js');

  const THEME_STORAGE_KEY = 'preferred-theme';
  const THEME_DARK_CLASS = 'theme-dark';

  function getSystemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY);
    } catch (_) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (_) {
      /* ignore */
    }
  }

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    documentElement.classList.toggle(THEME_DARK_CLASS, isDark);
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(isDark));
      const icon = toggle.querySelector('.theme-icon');
      if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    }
  }

  function initTheme() {
    const stored = getStoredTheme();
    if (stored === 'dark' || stored === 'light') {
      applyTheme(stored);
    } else {
      applyTheme(getSystemPrefersDark() ? 'dark' : 'light');
    }

    if (window.matchMedia) {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', e => {
          const storedPref = getStoredTheme();
          if (!storedPref) applyTheme(e.matches ? 'dark' : 'light');
        });
      } else if (typeof media.addListener === 'function') {
        media.addListener(e => {
          const storedPref = getStoredTheme();
          if (!storedPref) applyTheme(e.matches ? 'dark' : 'light');
        });
      }
    }
  }

  function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      const isDark = documentElement.classList.toggle(THEME_DARK_CLASS);
      storeTheme(isDark ? 'dark' : 'light');
      const icon = toggle.querySelector('.theme-icon');
      if (icon) icon.textContent = isDark ? '☀️' : '🌙';
      toggle.setAttribute('aria-pressed', String(isDark));
    });
  }

  function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('site-nav');
    if (!hamburger || !nav) return;
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });
  }

  function initYear() {
    const year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  // Respect reduced motion preferences for any future animations
  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  if (prefersReducedMotion()) {
    documentElement.classList.add('reduced-motion');
  }

  // Initialize
  initTheme();
  initThemeToggle();
  initHamburger();
  initYear();
})();

