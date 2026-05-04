document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('navigation');
    const body = document.body;

    function toggleMenu() {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    function closeMenu() {
        hamburger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
        body.classList.remove('menu-open');
    }

    hamburger.addEventListener('click', toggleMenu);

    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            closeMenu();
        }
    });

    nav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });
});