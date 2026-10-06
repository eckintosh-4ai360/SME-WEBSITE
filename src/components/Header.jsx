import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { nav, site } from "../data/site.js";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <div className="topbar on-dark">
        <div className="container topbar-inner">
          <span className="topbar-item">
            <Clock size={14} aria-hidden="true" /> 24/7 emergency support
          </span>
          <a className="topbar-item" href={`tel:${site.phone}`}>
            <Phone size={14} aria-hidden="true" /> {site.phoneDisplay}
          </a>
          <a className="topbar-item email" href={`mailto:${site.email}`}>
            <Mail size={14} aria-hidden="true" /> {site.email}
          </a>
          <span className="topbar-item push">
            <MapPin size={14} aria-hidden="true" /> Tarkwa, Ghana
          </span>
        </div>
      </div>

      <div className="container header-inner">
        <Logo />

        <nav id="main-nav" className={`main-nav${open ? " open" : ""}`} aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary nav-cta">
            Get a Quote
          </Link>
        </nav>

        <div className="header-cta">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get a Quote
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
