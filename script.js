(() => {
  const root = document.documentElement;
  const languageButtons = document.querySelectorAll('[data-language]');
  const themeToggle = document.getElementById('theme-toggle');
  const savedLanguage = localStorage.getItem('portfolio-language');
  const savedTheme = localStorage.getItem('portfolio-theme');
  const preferredLanguage = navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
  const preferredTheme = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

  function applyLanguage(language) {
    root.lang = language;
    document.querySelectorAll('[data-en][data-ru]').forEach((element) => {
      element.textContent = element.dataset[language];
    });
    languageButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.language === language);
      button.setAttribute('aria-pressed', button.dataset.language === language ? 'true' : 'false');
    });
    document.title = language === 'ru'
      ? 'Влад Мяхлов — системный инженер научных систем'
      : 'Vlad Myahlov — Scientific Systems Engineer';
    localStorage.setItem('portfolio-language', language);
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    localStorage.setItem('portfolio-theme', theme);
  }

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language));
  });

  themeToggle.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  applyTheme(savedTheme || preferredTheme);
  applyLanguage(savedLanguage || preferredLanguage);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
