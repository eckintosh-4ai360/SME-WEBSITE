import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo.jsx";
import { WhatsAppIcon, socialIcons, socialLabels } from "./BrandIcons.jsx";
import { services } from "../data/content.js";
import { nav, site, whatsappLink } from "../data/site.js";

export default function Footer() {
  const socials = Object.entries(site.socials).filter(([, url]) => url);

  return (
    <footer className="site-footer on-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo onDark />
            <p>{site.description}</p>
            <div className="socials">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <WhatsAppIcon />
              </a>
              <a href={`tel:${site.phone}`} aria-label={`Call ${site.phoneDisplay}`}>
                <Phone />
              </a>
              <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`}>
                <Mail />
              </a>
              {socials.map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={socialLabels[key]}>
                  {socialIcons[key]}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <Mail aria-hidden="true" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Phone aria-hidden="true" />
                <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
              </li>
              <li>
                <MapPin aria-hidden="true" />
                <a href={site.mapLink} target="_blank" rel="noopener noreferrer">
                  {site.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            {site.tagline} — Tarkwa, Ghana · <Link to="/credits">Photo credits</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
