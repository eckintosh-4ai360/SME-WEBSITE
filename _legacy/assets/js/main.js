/* ============================================================
   SME CONSULT — shared interactions
   ============================================================ */
(function () {
  "use strict";

  /* Sticky header */
  const header = document.querySelector(".site-header");
  const toTop = document.getElementById("toTop");

  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 24);
    if (toTop) toTop.classList.toggle("show", window.scrollY > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* Mobile navigation */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  /* Reveal on scroll */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* Animated counters */
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          cio.unobserve(el);
          const target = parseFloat(el.dataset.count);
          const decimals = (el.dataset.decimals || "0") | 0;
          const suffix = el.dataset.suffix || "";
          const dur = 1600;
          const start = performance.now();
          function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = target * eased;
            el.textContent =
              (decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString()) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((other) => {
        other.classList.remove("open");
        other.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* Gallery filter */
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (filterBtns.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.dataset.filter;
        let visible = 0;
        document.querySelectorAll(".g-item").forEach((item) => {
          const show = cat === "all" || item.dataset.cat === cat;
          item.classList.toggle("hidden", !show);
          if (show) visible++;
        });
        const empty = document.getElementById("galleryEmpty");
        if (empty) empty.style.display = visible ? "none" : "block";
      });
    });
  }

  /* Contact form (demo submit) */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = document.getElementById("formSuccess");
      if (success) success.classList.add("show");
      form.reset();
      setTimeout(() => success && success.classList.remove("show"), 6000);
    });
  }

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
