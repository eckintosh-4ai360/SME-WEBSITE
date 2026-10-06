import Photo from "./Photo.jsx";
import Reveal from "./Reveal.jsx";

/** Closing call-to-action panel with a photo behind it. */
export default function CtaBand({ photo, position, eyebrow = "Get Started", title, text, children }) {
  return (
    <section className="section tight">
      <div className="container">
        <Reveal className="cta-band on-dark">
          {photo && (
            <div className="cta-media" aria-hidden="true">
              <Photo name={photo} alt="" sizes="(max-width: 1240px) 100vw, 1200px" position={position} />
            </div>
          )}
          <div className="cta-inner">
            <div>
              <span className="eyebrow">{eyebrow}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <div className="cta-actions">{children}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
