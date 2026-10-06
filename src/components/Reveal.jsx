import { useEffect, useRef } from "react";

// One shared observer for every revealed element on the page.
let observer;
function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.dataset.revealed = "";
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  return observer;
}

export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.dataset.revealed = "";
      return;
    }
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);
  return ref;
}

/** Fades its content up the first time it scrolls into view. `delay` (1–4) staggers siblings. */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} data-reveal={delay || ""} className={className || undefined} {...rest}>
      {children}
    </Tag>
  );
}
