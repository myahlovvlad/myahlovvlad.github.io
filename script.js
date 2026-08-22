(() => {
  const root = document.documentElement;

  const isHome = location.pathname === "/" || location.pathname.endsWith("/index.html") || location.pathname.includes("/pr-preview/");
  if (isHome) {
    const nav = document.querySelector(".primary-nav");
    if (nav && !nav.querySelector('a[href="foundation.html"]')) {
      const foundationLink = document.createElement("a");
      foundationLink.href = "foundation.html";
      foundationLink.dataset.en = "Foundation";
      foundationLink.dataset.ru = "Основа";
      foundationLink.textContent = "Foundation";
      nav.appendChild(foundationLink);
    }
  }

  const languageButtons = [...document.querySelectorAll("[data-language]")];
  const translatable = [...document.querySelectorAll("[data-en][data-ru]")];
  const themeToggle = document.getElementById("theme-toggle");
  const year = document.getElementById("year");
  const heroSystem = document.getElementById("hero-system");

  const storedLanguage = localStorage.getItem("portfolio-language");
  const browserLanguage = navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en";
  const initialLanguage = storedLanguage || browserLanguage;

  function setLanguage(language) {
    const lang = language === "ru" ? "ru" : "en";
    root.lang = lang;
    translatable.forEach((node) => {
      node.textContent = node.dataset[lang];
    });
    languageButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.language === lang);
      button.setAttribute("aria-pressed", String(button.dataset.language === lang));
    });

    if (location.pathname.endsWith("foundation.html")) {
      document.title = lang === "ru"
        ? "Научная и STEM-основа — Влад Мяхлов"
        : "Scientific & STEM Foundation — Vlad Myahlov";
    } else {
      document.title = lang === "ru"
        ? "Влад Мяхлов — инженер научного и приборного ПО"
        : "Vlad Myahlov — Scientific Software & Instrumentation Engineer";
    }

    localStorage.setItem("portfolio-language", lang);
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  const storedTheme = localStorage.getItem("portfolio-theme");
  const initialTheme = storedTheme || "light";
  root.dataset.theme = initialTheme;

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  }

  if (year) year.textContent = new Date().getFullYear();

  const revealTargets = [
    ...document.querySelectorAll(".section-heading, .principle-card, .case-row, .open-source-copy, .tool-console, .research-grid article, .contact-grid > *, .trajectory-track")
  ];
  revealTargets.forEach((node) => node.setAttribute("data-reveal", ""));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealTargets.forEach((node) => observer.observe(node));
  } else {
    revealTargets.forEach((node) => node.classList.add("is-visible"));
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (heroSystem && !reducedMotion.matches) {
    heroSystem.addEventListener("pointermove", (event) => {
      const rect = heroSystem.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      heroSystem.style.setProperty("--ry", `${x * 5.5}deg`);
      heroSystem.style.setProperty("--rx", `${-y * 4}deg`);
    });
    heroSystem.addEventListener("pointerleave", () => {
      heroSystem.style.setProperty("--ry", "0deg");
      heroSystem.style.setProperty("--rx", "0deg");
    });
  }

  setLanguage(initialLanguage);
})();
