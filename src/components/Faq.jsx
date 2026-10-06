import { useId, useState } from "react";
import { Plus } from "lucide-react";

/** Accessible accordion — one answer open at a time. */
export default function Faq({ items }) {
  const [open, setOpen] = useState(0);
  const base = useId();

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        const qId = `${base}-q${i}`;
        const aId = `${base}-a${i}`;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
            <h3>
              <button
                id={qId}
                type="button"
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={aId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.q}
                <span className="fq-ic" aria-hidden="true">
                  <Plus size={15} strokeWidth={2.4} />
                </span>
              </button>
            </h3>
            <div id={aId} role="region" aria-labelledby={qId} className="faq-a" inert={!isOpen}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
