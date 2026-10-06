import { MapPin } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import StatStrip from "../components/StatStrip.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { ButtonLink, SectionHeading } from "../components/ui.jsx";
import { clientStats, clients, testimonials } from "../data/content.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function Clients() {
  usePageMeta(
    "Clients",
    "The mining operations where SME Consult provides safe entry and exit solutions and real-time worker monitoring across Ghana."
  );

  return (
    <>
      <PageHero
        photo="open-pit-aerial"
        eyebrow="Our Clients"
        title="Active"
        accent="Client Sites"
        lead="The mining operations where SME CONSULT is currently providing safe entry and exit solutions and real-time worker monitoring."
        crumb="Clients"
      />

      <section className="section tight">
        <div className="container">
          <StatStrip items={clientStats} />
        </div>
      </section>

      <section className="section flush-top">
        <div className="container grid cols-3">
          {clients.map((c, i) => (
            <Reveal as="article" delay={i} className="card media-card client-card" key={c.title}>
              <div className="media-card-img tall">
                <Photo name={c.photo} sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 390px" />
                <span className="loc">
                  <MapPin aria-hidden="true" /> {c.location}
                </span>
              </div>
              <div className="media-card-body">
                <h2 className="card-title">{c.title}</h2>
                <div className="client-meta">
                  {c.tags.map((t, j) => (
                    <span className={`tag${j % 2 ? " alt" : ""}`} key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <p>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="What Our Clients" accent="Say" />
          <Testimonials items={testimonials.clients} />
        </div>
      </section>

      <CtaBand
        photo="crew-lineup"
        eyebrow="Join Them"
        title="Ready to Transform Your Safety Program?"
        text="Let's discuss how we can help you achieve similar results at your mine."
      >
        <ButtonLink to="/contact">Schedule a Consultation</ButtonLink>
        <ButtonLink to="/services" variant="ghost">
          Explore Services
        </ButtonLink>
      </CtaBand>
    </>
  );
}
