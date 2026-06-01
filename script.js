// Take Apart Lab — scroll + image behavior.
// 1. Nav gets a border-bottom once you scroll past the top.
// 2. Anything with .reveal or .reveal-stagger fades + lifts + un-blurs into view.
// 3. Every <img> below the hero ghosts in once it actually decodes,
//    so we never get a hard pop. Hero images are excluded (they have their
//    own load animation and are preloaded).

(function () {
  // ----- Nav border on scroll -----
  const nav = document.querySelector('.nav');
  const setNavScrolled = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  setNavScrolled();
  window.addEventListener('scroll', setNavScrolled, { passive: true });

  // ----- Scroll reveal -----
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => reveal.observe(el));

  // ----- Image fade-in on decode -----
  // Skip hero strip images: they have their own dedicated entrance animation
  // and are preloaded with fetchpriority="high".
  const heroImgs = new Set(
    Array.from(document.querySelectorAll('.hero__images img'))
  );

  const markLoaded = (img) => {
    img.classList.add('is-loaded');
  };

  document.querySelectorAll('img').forEach((img) => {
    if (heroImgs.has(img)) return;
    img.classList.add('img-fade');

    if (img.complete && img.naturalWidth > 0) {
      // Already cached — show immediately.
      markLoaded(img);
    } else {
      img.addEventListener('load', () => markLoaded(img), { once: true });
      img.addEventListener('error', () => markLoaded(img), { once: true });
    }
  });
})();
