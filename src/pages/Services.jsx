import { Check, Phone } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import Faq from "../components/Faq.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { ButtonLink, IconTile, SectionHeading } from "../components/ui.jsx";
import { WhatsAppIcon } from "../components/BrandIcons.jsx";
import { faqs, process, services } from "../data/content.js";
import { site, whatsappLink } from "../data/site.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function Services() {
  usePageMeta(
    "Services",
    "Safe entry and exit protocols, RFID real-time monitoring, analytics dashboards, compliance audits, safety training and 24/7 support for mines."
  );

  return (
    <>
      <PageHero
        photo="open-pit-machinery"
        eyebrow="Our Services"
        title="Comprehensive"
        accent="Safety Solutions"
        lead="Real-time monitoring, analytics and safe entry and exit solutions for mining operations — delivered end to end."
        crumb="Services"
      />

      {/* SERVICES */}
      <section className="section">
        <div className="container grid cols-3">
          {services.map((s, i) => (
            <Reveal as="article" delay={i % 3} className="card media-card service-card" id={s.id} key={s.id}>
              <div className="media-card-img">
                <Photo name={s.photo} sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 390px" />
              </div>
              <div className="media-card-body">
                <IconTile icon={s.icon} tone={s.tone} />
                <h2 className="card-title">{s.title}</h2>
                <p>{s.text}</p>
                <ul className="check-list">
                  {s.points.map((p) => (
                    <li key={p}>
                      <Check aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="How We Work" title="Our" accent="Process" lead="A clear path from first conversation to a system your team relies on every shift." />
          <ol className="process">
            {process.map((p, i) => (
              <Reveal as="li" delay={i} className="card step" key={p.title}>
                <div className="step-num" aria-hidden="true">
                  0{i + 1}
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container faq-wrap">
          <Reveal className="faq-side">
            <span className="eyebrow">Common Questions</span>
            <h2 className="h2">
              Frequently Asked <span className="accent">Questions</span>
            </h2>
            <p className="lead">Find answers to common questions about our services.</p>
            <div className="faq-photo">
              <Photo name="audit-notes" sizes="(max-width: 1024px) 92vw, 420px" position="center 30%" />
            </div>
            <div className="faq-help">
              <b>Still have a question?</b>
              <div className="faq-help-actions">
                <a href={`tel:${site.phone}`}>
                  <Phone aria-hidden="true" /> {site.phoneDisplay}
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> WhatsApp us
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        photo="fire-drill"
        title="Ready to Enhance Your Mine Safety Operations?"
        text="Contact us today to discuss how we can help protect your workforce."
      >
        <ButtonLink to="/contact">Request a Consultation</ButtonLink>
        <ButtonLink to="/clients" variant="ghost">
          See Our Clients
        </ButtonLink>
      </CtaBand>
    </>
  );
}
