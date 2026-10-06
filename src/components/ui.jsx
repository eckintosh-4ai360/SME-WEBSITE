import { Link } from "react-router";
import Reveal from "./Reveal.jsx";

/** Rounded tile holding a lucide icon. tone: navy (yellow icon on navy) | yellow (navy icon on yellow) */
export function IconTile({ icon: Icon, tone = "navy", size = "md" }) {
  return (
    <span className={`icon-tile ${tone} ${size}`} aria-hidden="true">
      <Icon />
    </span>
  );
}

/** Eyebrow + heading (+ optional lead). `accent` uses the shared blue text palette. */
export function SectionHeading({ eyebrow, title, accent, lead, center = true, as: H = "h2", className = "" }) {
  return (
    <Reveal className={`section-heading${center ? " center" : ""} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <H className="h2">
        {title} {accent && <span className="accent">{accent}</span>}
      </H>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}

export function Avatar({ initials, tone = "yellow", size }) {
  return (
    <span className={`avatar tone-${tone}${size ? ` ${size}` : ""}`} aria-hidden="true">
      {initials}
    </span>
  );
}

/** Internal route or external/tel/mailto link styled as a button. */
export function ButtonLink({ to, children, variant = "primary", className = "", ...rest }) {
  const cls = `btn btn-${variant} ${className}`;
  if (/^(https?:|tel:|mailto:)/.test(to)) {
    const external = to.startsWith("http");
    return (
      <a href={to} className={cls} {...(external && { target: "_blank", rel: "noopener noreferrer" })} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls} {...rest}>
      {children}
    </Link>
  );
}
