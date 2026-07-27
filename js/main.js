document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('nav__toggle--open');
      menu.classList.toggle('nav__menu--open');
    });

    menu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('nav__toggle--open');
        menu.classList.remove('nav__menu--open');
      });
    });
  }

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('nav--scrolled', window.scrollY > 10);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--visible');
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in, .reveal').forEach(el => observer.observe(el));

  // Hero image hover
  const hero = document.querySelector('.hero');
  const hoverZone = document.querySelector('.hero__hover-zone');
  if (hero && hoverZone) {
    setTimeout(() => hero.classList.add('loaded'), 1400);
    hoverZone.addEventListener('mouseenter', () => {
      if (hero.classList.contains('loaded')) hero.classList.add('is-hovered');
    });
    hoverZone.addEventListener('mouseleave', () => hero.classList.remove('is-hovered'));
  }
});
