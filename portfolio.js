(() => {
  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.primary-nav');
  const navToggle = document.querySelector('.nav-toggle');
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const translatable = [...document.querySelectorAll('[data-en][data-ru]')];
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const year = document.querySelector('[data-year]');
  const systemVisual = document.querySelector('[data-depth]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  const titles = {
    home: {
      en: 'Vlad Myahlov — Scientific Software & Instrumentation Engineer',
      ru: 'Влад Мяхлов — инженер научного и приборного ПО'
    },
    cases: {
      en: 'Engineering Cases — Vlad Myahlov',
      ru: 'Инженерные кейсы — Влад Мяхлов'
    },
    productization: {
      en: 'Scientific Instrument Productization — Vlad Myahlov',
      ru: 'Продуктизация научного прибора — Влад Мяхлов'
    },
    hmi: {
      en: 'Embedded HMI Engineering — Vlad Myahlov',
      ru: 'Инженерия embedded HMI — Влад Мяхлов'
    },
    control: {
      en: 'Scientific Instrument Control Software — Vlad Myahlov',
      ru: 'ПО управления научным прибором — Влад Мяхлов'
    },
    verification: {
      en: 'Verification-first Engineering — Vlad Myahlov',
      ru: 'Verification-first engineering — Влад Мяхлов'
    },
    projects: {
      en: 'Public Engineering Projects — Vlad Myahlov',
      ru: 'Публичные инженерные проекты — Влад Мяхлов'
    },
    lcd: {
      en: 'LCD Bitmap IDE — Embedded HMI Workbench',
      ru: 'LCD Bitmap IDE — среда разработки embedded HMI'
    },
    foundation: {
      en: 'Scientific & STEM Foundation — Vlad Myahlov',
      ru: 'Научная и STEM-основа — Влад Мяхлов'
    },
    writing: {
      en: 'Writing & Research — Vlad Myahlov',
      ru: 'Публикации и исследования — Влад Мяхлов'
    },
    about: {
      en: 'About — Vlad Myahlov',
      ru: 'О профессиональной траектории — Влад Мяхлов'
    }
  };

  const setLanguage = (language) => {
    const lang = language === 'ru' ? 'ru' : 'en';
    root.lang = lang;
    translatable.forEach((node) => {
      node.textContent = node.dataset[lang];
    });
    languageButtons.forEach((button) => {
      const active = button.dataset.language === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const page = body.dataset.page || 'home';
    if (titles[page]) document.title = titles[page][lang];
    localStorage.setItem('portfolio-language', lang);
  };

  const storedLanguage = localStorage.getItem('portfolio-language');
  const browserLanguage = navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en';
  setLanguage(storedLanguage || browserLanguage);

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  const setTheme = (theme) => {
    const next = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
    }
  };

  const storedTheme = localStorage.getItem('portfolio-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(storedTheme || (systemDark ? 'dark' : 'light'));
  themeToggle?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  if (year) year.textContent = String(new Date().getFullYear());

  const closeNav = () => {
    nav?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  };

  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('is-open', !open);
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const revealTargets = [...document.querySelectorAll('[data-reveal]')];
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    revealTargets.forEach((node) => node.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach((node) => observer.observe(node));
  }

  if (systemVisual && !reducedMotion.matches && finePointer.matches) {
    const stack = systemVisual.querySelector('.system-stack');
    const handlePointer = (event) => {
      const rect = systemVisual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      stack?.style.setProperty('--ry', `${x * 6}deg`);
      stack?.style.setProperty('--rx', `${-y * 5}deg`);
    };
    const resetPointer = () => {
      stack?.style.setProperty('--ry', '0deg');
      stack?.style.setProperty('--rx', '0deg');
    };
    systemVisual.addEventListener('pointermove', handlePointer);
    systemVisual.addEventListener('pointerleave', resetPointer);
  }
})();
