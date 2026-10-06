import { useMemo, useState } from "react";
import { Expand } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import Lightbox from "../components/Lightbox.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { ButtonLink } from "../components/ui.jsx";
import { gallery, galleryCategories } from "../data/gallery.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

const labelFor = (id) => galleryCategories.find((c) => c.id === id)?.label ?? id;

export default function Gallery() {
  usePageMeta("Gallery", "A visual showcase of mining safety operations, training, technology and site work.");
  const [filter, setFilter] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);

  const items = useMemo(() => (filter === "all" ? gallery : gallery.filter((g) => g.cat === filter)), [filter]);

  return (
    <>
      <PageHero
        photo="open-pit-truck"
        eyebrow="Our Work in Action"
        title="Company"
        accent="Gallery"
        lead="A visual showcase of mining safety operations, training, technology and the people who keep every shift safe."
        crumb="Gallery"
      />

      <section className="section flush-top">
        <div className="container">
          <Reveal className="filter-row" role="group" aria-label="Filter photos by category">
            {galleryCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`filter-btn${filter === c.id ? " active" : ""}`}
                aria-pressed={filter === c.id}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
                <span className="count">{c.id === "all" ? gallery.length : gallery.filter((g) => g.cat === c.id).length}</span>
              </button>
            ))}
          </Reveal>

          <p className="sr-only" aria-live="polite">
            Showing {items.length} photos
          </p>

          <div className="gallery-grid">
            {items.map((item, i) => (
              <button
                type="button"
                key={item.photo}
                className={`g-item${item.size ? ` ${item.size}` : ""}`}
                onClick={() => setOpenIndex(i)}
                aria-label={`Open photo: ${item.title}`}
              >
                <Photo
                  name={item.photo}
                  alt=""
                  sizes={item.size === "wide" ? "(max-width: 720px) 92vw, 780px" : "(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 390px"}
                />
                <span className="g-overlay">
                  <span className="g-caption">
                    <b>{item.title}</b>
                    <span>{labelFor(item.cat)}</span>
                  </span>
                  <span className="g-zoom" aria-hidden="true">
                    <Expand />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox items={items} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} labelFor={labelFor} />

      <CtaBand
        photo="control-room"
        eyebrow="See It Live"
        title="Want to See Our Systems in Action?"
        text="Book a demo and watch live worker monitoring on a real mine site."
      >
        <ButtonLink to="/contact">Book a Demo</ButtonLink>
        <ButtonLink to="/clients" variant="ghost">
          Our Clients
        </ButtonLink>
      </CtaBand>
    </>
  );
}
