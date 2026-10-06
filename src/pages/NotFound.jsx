import { ArrowLeft } from "lucide-react";
import Photo from "../components/Photo.jsx";
import { ButtonLink } from "../components/ui.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function NotFound() {
  usePageMeta("Page not found");

  return (
    <section className="not-found on-dark">
      <div className="not-found-media" aria-hidden="true">
        <Photo name="tunnel-light" alt="" priority />
      </div>
      <div className="container not-found-inner">
        <span className="eyebrow">Error 404</span>
        <h1>
          This tunnel <span className="accent">doesn't lead anywhere.</span>
        </h1>
        <p className="lead">The page you're looking for has moved or never existed. Let's get you back to the surface.</p>
        <div className="hero-actions">
          <ButtonLink to="/">
            <ArrowLeft /> Back to Home
          </ButtonLink>
          <ButtonLink to="/contact" variant="ghost">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
