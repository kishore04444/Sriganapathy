(() => {
  const languageNames = {
    en: { toggle: 'Switch to Tamil', button: 'தமிழ்' },
    ta: { toggle: 'ஆங்கிலத்திற்கு மாற்று', button: 'EN' },
  };
  const storedLanguage = localStorage.getItem('sg-lang');
  let language = storedLanguage === 'ta' ? 'ta' : 'en';

  const applyLanguage = () => {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-en][data-ta]').forEach((element) => {
      element.textContent = element.dataset[language];
    });
    document.querySelectorAll('[data-lang-toggle]').forEach((button) => {
      button.textContent = languageNames[language].button;
      button.setAttribute('aria-label', languageNames[language].toggle);
    });
    document.querySelectorAll('[data-menu-toggle]').forEach((button) => {
      button.setAttribute('aria-label', language === 'en' ? 'Open navigation' : 'வழிசெலுத்தலைத் திறக்கவும்');
    });
  };

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-lang-toggle]')) {
      language = language === 'en' ? 'ta' : 'en';
      localStorage.setItem('sg-lang', language);
      applyLanguage();
      return;
    }
    const menuButton = event.target.closest('[data-menu-toggle]');
    if (!menuButton) return;
    const nav = document.querySelector('.nav');
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
    menuButton.setAttribute('aria-label', isOpen
      ? (language === 'en' ? 'Close navigation' : 'வழிசெலுத்தலை மூடவும்')
      : (language === 'en' ? 'Open navigation' : 'வழிசெலுத்தலைத் திறக்கவும்'));
  });

  applyLanguage();
})();
