/**
 * Observes DOM elements with a given selector and toggles class on enter
 */
export function initRevealObserver(selector: string = '.reveal', activeClass: string = 'in') {
  if (typeof IntersectionObserver === 'undefined') return null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(activeClass);
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  return observer;
}

/**
 * Polled utility to initialize Lucide icons once library script loads.
 */
export function initLucideIcons() {
  const runCreate = () => {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    } else {
      setTimeout(runCreate, 50);
    }
  };
  runCreate();
}
