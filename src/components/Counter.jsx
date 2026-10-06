import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../hooks/motion.js";

const format = (n, decimals) => (decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-GB"));

/** Counts up from 0 to `value` the first time it becomes visible. */
export default function Counter({ value, decimals = 0, duration = 1600 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(() => (prefersReducedMotion() ? value : 0));

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setShown(value);
      return;
    }
    let frame;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setShown(value * (1 - Math.pow(1 - p, 3)));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} aria-label={format(value, decimals)}>
      <span aria-hidden="true">{format(shown, decimals)}</span>
    </span>
  );
}
