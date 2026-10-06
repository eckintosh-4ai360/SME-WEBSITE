import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Photo from "./Photo.jsx";

/** Full-screen photo viewer. `index` is the open item, or null when closed. */
export default function Lightbox({ items, index, onClose, onNavigate, labelFor }) {
  const ref = useRef(null);
  const open = index !== null && items[index];

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.classList.toggle("no-scroll", Boolean(open));
  }, [open]);

  useEffect(() => () => document.documentElement.classList.remove("no-scroll"), []);

  const go = (delta) => onNavigate((index + delta + items.length) % items.length);
  const item = open ? items[index] : null;

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label="Photo viewer"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      {item && (
        <>
          <figure className="lb-figure">
            <Photo key={item.photo} name={item.photo} sizes="(max-width: 900px) 100vw, 80vw" priority />
            <figcaption>
              <b>{item.title}</b>
              <span>
                {labelFor(item.cat)} · {index + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
          <button type="button" className="lb-btn lb-close" aria-label="Close" onClick={onClose} autoFocus>
            <X />
          </button>
          {items.length > 1 && (
            <>
              <button type="button" className="lb-btn lb-prev" aria-label="Previous photo" onClick={() => go(-1)}>
                <ChevronLeft />
              </button>
              <button type="button" className="lb-btn lb-next" aria-label="Next photo" onClick={() => go(1)}>
                <ChevronRight />
              </button>
            </>
          )}
        </>
      )}
    </dialog>
  );
}
