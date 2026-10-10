(() => {
  const bar = document.querySelector('.progress span');
  const article = document.querySelector('.post-body');
  if (bar && article) {
    const update = () => {
      const r = article.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const pct = total > 0 ? Math.min(100, Math.max(0, (-r.top / total) * 100)) : 100;
      bar.style.width = pct + '%';
    };
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    update();
  }
  const toc = document.querySelector('.toc details');
  if (toc && matchMedia('(max-width: 900px)').matches) toc.removeAttribute('open');
  const links = [...document.querySelectorAll('.toc a')];
  const targets = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (targets.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
        }
      });
    }, { rootMargin: '0px 0px -70% 0px' });
    targets.forEach(t => io.observe(t));
  }
})();
