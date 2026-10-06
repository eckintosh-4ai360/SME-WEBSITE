import Photo from "../components/Photo.jsx";
import photos from "../data/photos.json";
import { usePageMeta } from "../hooks/usePageMeta.js";

// Photos added with `npm run add-photo` have no credit and are left out.
const credited = Object.entries(photos).filter(([, p]) => p.credit);

export default function Credits() {
  usePageMeta("Photo Credits", "Credits for the photography used on the SME Consult website.");

  return (
    <section className="section credits">
      <div className="container">
        <span className="eyebrow">Thank You</span>
        <h1 className="h2">
          Photo <span className="accent">Credits</span>
        </h1>
        <p className="lead">
          Stock photography on this site comes from photographers on{" "}
          <a href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer">
            Pexels
          </a>
          , used under the Pexels licence. Thank you to:
        </p>
        <ul className="credit-list">
          {credited.map(([key, p]) => (
            <li key={key}>
              <Photo name={key} alt="" sizes="96px" />
              <div>
                <span>{p.alt}</span>
                <a href={p.credit.url} target="_blank" rel="noopener noreferrer">
                  Photo by {p.credit.photographer || "Pexels contributor"} on Pexels
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
