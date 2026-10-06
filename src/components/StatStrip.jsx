import Counter from "./Counter.jsx";
import Reveal from "./Reveal.jsx";

export default function StatStrip({ items, className = "" }) {
  return (
    <Reveal as="dl" className={`stat-strip ${className}`}>
      {items.map((s) => (
        <div className="stat-cell" key={s.label}>
          <dt className="stat-label">{s.label}</dt>
          <dd className="stat-num">
            {s.text ?? <Counter value={s.value} decimals={s.decimals} />}
            {s.suffix && <span className="plus">{s.suffix}</span>}
          </dd>
        </div>
      ))}
    </Reveal>
  );
}
