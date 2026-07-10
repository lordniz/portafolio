const root = document.documentElement;
const header = document.querySelector('[data-header]');
const navigation = document.querySelector('[data-navigation]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const navigationLinks = navigation ? Array.from(navigation.querySelectorAll('a')) : [];
const yearElement = document.querySelector('[data-current-year]');

const setMenuState = (isOpen) => {
    if (!navigation || !menuToggle) return;

    navigation.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
};

const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem('portfolio-theme');
    if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
    root.dataset.theme = theme;
    if (themeToggle) {
        const isDark = theme === 'dark';
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.setAttribute('aria-label', isDark ? 'Activar tema claro' : 'Activar tema oscuro');
    }
};

setTheme(getPreferredTheme());

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
        setMenuState(isOpen);

        if (isOpen && navigation) {
            const firstLink = navigation.querySelector('a');
            firstLink?.focus();
        }
    });
}

navigationLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
        setMenuState(false);
        menuToggle.focus();
    }
});

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        localStorage.setItem('portfolio-theme', nextTheme);
    });
}

const updateHeaderState = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 8);
};

window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

if ('IntersectionObserver' in window && navigationLinks.length) {
    const sections = navigationLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (!visibleEntry) return;

        navigationLinks.forEach((link) => {
            const isCurrent = link.getAttribute('href') === `#${visibleEntry.target.id}`;
            link.toggleAttribute('aria-current', isCurrent);
        });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

    sections.forEach((section) => observer.observe(section));
}

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
