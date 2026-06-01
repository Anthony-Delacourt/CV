// ── Compteurs animés ──
function animateCounters() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const tgt = parseInt(el.dataset.count);
    let cur = 0;
    const step = Math.max(1, Math.ceil(tgt / 30));
    const t = setInterval(() => {
      cur = Math.min(cur + step, tgt);
      el.textContent = cur;
      if (cur >= tgt) clearInterval(t);
    }, 40);
  });
}

// ── Barres de compétences ──
function animateBars() {
  document.querySelectorAll(".sk-bar").forEach((b) => {
    b.style.width = b.dataset.width + "%";
  });
}

// ── Scroll reveal timeline ──
function initReveal() {
  const items = document.querySelectorAll(".tl-item");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          const delay = [0, 120, 240][i] || i * 100;
          setTimeout(() => e.target.classList.add("vis"), delay);
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  items.forEach((el) => obs.observe(el));
}

window.addEventListener("load", () => {
  setTimeout(animateBars, 400);
  setTimeout(animateCounters, 250);
  initReveal();
});
