import { Quote } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { Avatar } from "./ui.jsx";

export default function Testimonials({ items }) {
  return (
    <div className="grid cols-3">
      {items.map((t, i) => (
        <Reveal as="figure" className="quote-card" delay={i} key={t.name + i}>
          <span className="quote-mark" aria-hidden="true">
            <Quote />
          </span>
          <div className="stars" role="img" aria-label="Rated 5 out of 5">
            ★★★★★
          </div>
          <blockquote className="quote-text">{t.quote}</blockquote>
          <figcaption className="quote-who">
            <Avatar initials={t.initials} tone={t.tone} />
            <div>
              <b>{t.name}</b>
              <span>{t.role}</span>
            </div>
          </figcaption>
        </Reveal>
      ))}
    </div>
  );
}
