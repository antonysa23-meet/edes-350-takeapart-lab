// Take Apart Lab — minimal scroll behavior.
// 1. Nav gets a border-bottom once you scroll past the top
// 2. Anything with .reveal or .reveal-stagger fades up when it enters the viewport

(function () {
  const nav = document.querySelector('.nav');
  const setNavScrolled = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  setNavScrolled();
  window.addEventListener('scroll', setNavScrolled, { passive: true });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el));
})();
