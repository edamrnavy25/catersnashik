document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      toggle.querySelector('i').classList.toggle('fa-bars');
      toggle.querySelector('i').classList.toggle('fa-times');
    });
  }

  // Mobile dropdown
  document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('active');
      }
    });
  });

  // Header scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Hero slider
  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    let current = 0;
    const show = i => {
      slides.forEach(s => s.classList.remove('active'));
      slides[i].classList.add('active');
    };
    setInterval(() => { current = (current + 1) % slides.length; show(current); }, 5000);
    const prev = document.querySelector('.slider-prev');
    const next = document.querySelector('.slider-next');
    if (prev) prev.addEventListener('click', () => { current = (current - 1 + slides.length) % slides.length; show(current); });
    if (next) next.addEventListener('click', () => { current = (current + 1) % slides.length; show(current); });
  }

  // Testimonial slider
  const tests = document.querySelectorAll('.testimonial');
  if (tests.length > 0) {
    let ti = 0;
    const showT = i => { tests.forEach(t => t.classList.remove('active')); tests[i].classList.add('active'); };
    const tp = document.querySelector('.test-prev');
    const tn = document.querySelector('.test-next');
    if (tp) tp.addEventListener('click', () => { ti = (ti - 1 + tests.length) % tests.length; showT(ti); });
    if (tn) tn.addEventListener('click', () => { ti = (ti + 1) % tests.length; showT(ti); });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
