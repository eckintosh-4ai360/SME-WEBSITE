import { Link } from "react-router";
import mark from "../assets/brand/logo-mark.png";
import markOutline from "../assets/brand/logo-mark-outline.png";
import { site } from "../data/site.js";

/** Shield mark + wordmark. `onDark` uses the white-outlined shield so it stays visible on navy. */
export default function Logo({ onDark = false }) {
  return (
    <Link to="/" className={`logo${onDark ? " on-dark" : ""}`} aria-label={`${site.name} — home`}>
      <img
        className="logo-mark"
        src={onDark ? markOutline : mark}
        alt=""
        width={onDark ? 229 : 197}
        height={onDark ? 272 : 240}
      />
      <span className="logo-text">
        <b>SME CONSULT</b>
        <span>{site.tagline}</span>
      </span>
    </Link>
  );
}
