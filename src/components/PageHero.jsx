import { Link } from "react-router";
import Photo from "./Photo.jsx";

/** Inner-page banner: title on the left, framed photo on the right. */
export default function PageHero({ photo, position, eyebrow, title, accent, lead, crumb }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{crumb}</span>
          </nav>
          <span className="eyebrow">{eyebrow}</span>
          <h1>
            {title} {accent && <span className="accent">{accent}</span>}
          </h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
        <div className="page-hero-media">
          <span className="hero-deco" aria-hidden="true" />
          <Photo name={photo} priority position={position} sizes="(max-width: 1024px) 92vw, 540px" />
        </div>
      </div>
    </section>
  );
}
