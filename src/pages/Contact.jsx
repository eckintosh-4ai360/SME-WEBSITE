import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import ContactForm from "../components/ContactForm.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { ButtonLink, IconTile } from "../components/ui.jsx";
import { site } from "../data/site.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function Contact() {
  usePageMeta("Contact", `Talk to SME Consult about safe mine entry and exit systems. Call ${site.phoneDisplay} (24/7) or send us a message.`);

  return (
    <>
      <PageHero
        photo="radio-check"
        position="center 25%"
        eyebrow="Contact Us"
        title="Get In"
        accent="Touch"
        lead="Our expert team is ready to assist with all your safety consulting needs."
        crumb="Contact"
      />

      <section className="section flush-top">
        <div className="container contact-grid">
          <Reveal className="form-card">
            <h2 className="h2 form-title">
              Send a <span className="accent">Message</span>
            </h2>
            <p className="form-intro">Fill in the form and our team will get back to you within one business day.</p>
            <ContactForm />
          </Reveal>

          <Reveal as="aside" delay={1} className="contact-aside">
            <div className="info-card">
              <IconTile icon={MapPin} tone="yellow" size="sm" />
              <div>
                <h3>Address</h3>
                <p>
                  <a href={site.mapLink} target="_blank" rel="noopener noreferrer">
                    Allied Filling Station, Akoon,
                    <br />
                    Tarkwa, Ghana
                  </a>
                </p>
              </div>
            </div>
            <div className="info-card">
              <IconTile icon={Phone} size="sm" />
              <div>
                <h3>Phone</h3>
                <p>
                  <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
                  <br />
                  <small>24/7 emergency support available</small>
                </p>
              </div>
            </div>
            <div className="info-card">
              <IconTile icon={Mail} tone="yellow" size="sm" />
              <div>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
              </div>
            </div>
            <div className="hours-card">
              <h3>Working Hours</h3>
              {site.hours.map((h) => (
                <div className="hours-row" key={h.days}>
                  <span>{h.days}</span>
                  <b>{h.time}</b>
                </div>
              ))}
              <div className="hours-row">
                <span>Emergency Support</span>
                <span className="open">24/7 Available</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="container">
          <Reveal className="map-box">
            <iframe
              title="Map showing SME Consult at Allied Filling Station, Akoon, Tarkwa"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a className="btn btn-primary btn-sm map-open" href={site.mapLink} target="_blank" rel="noopener noreferrer">
              Open in Google Maps <ExternalLink aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand
        photo="control-room"
        eyebrow="Emergency Support"
        title="Need Emergency Assistance Right Now?"
        text="Our 24/7 emergency response team is ready to assist at any hour."
      >
        <ButtonLink to={`tel:${site.phone}`}>
          <Phone /> Call {site.phoneDisplay}
        </ButtonLink>
      </CtaBand>
    </>
  );
}
