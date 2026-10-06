import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import StatStrip from "../components/StatStrip.jsx";
import LiveDashboard from "../components/LiveDashboard.jsx";
import HeroVisual from "../components/HeroVisual.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { ButtonLink, IconTile, SectionHeading } from "../components/ui.jsx";
import { WhatsAppIcon } from "../components/BrandIcons.jsx";
import { howItWorks, siteTypes, solutions, stats, testimonials, visibilityFeatures } from "../data/content.js";
import { whatsappLink } from "../data/site.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function Home() {
  usePageMeta(
    null,
    "SME Consult provides safe mine entry and exit systems, real-time worker monitoring, safety analytics and compliance solutions for mining operations in Ghana and beyond."
  );

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-wrap">
          <Reveal className="hero-copy">
            <span className="hero-badge">
              <span className="dot" /> 24/7 Live Workforce Monitoring
            </span>
            <h1>
              Every Worker In.
              <br />
              Every Worker Out.
              <br />
              <span className="accent">Fully Accounted For.</span>
            </h1>
            <p className="lead">
              SME Consult equips mining operations with safe entry and exit systems, real-time worker tracking and
              safety analytics — so nobody goes underground unaccounted for.
            </p>
            <div className="hero-actions">
              <ButtonLink to="/contact">
                Schedule a Demo <ArrowRight />
              </ButtonLink>
              <ButtonLink to="/services" variant="ghost">
                Explore Services
              </ButtonLink>
            </div>
            <ul className="hero-trust">
              {["RFID gate check-in", "Live headcount", "Audit-ready reports"].map((t) => (
                <li key={t}>
                  <Check aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={1}>
            <HeroVisual />
          </Reveal>
        </div>

        <div className="container">
          <StatStrip items={stats} className="hero-stats" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="From the gate to the surface,"
            accent="every movement logged"
            lead="Four simple steps keep your whole workforce accounted for, every shift, day and night."
          />
          <ol className="photo-steps">
            {howItWorks.map((s, i) => (
              <Reveal as="li" delay={i} className="photo-step" key={s.title}>
                <div className="photo-step-media">
                  <Photo name={s.photo} sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 290px" />
                  <span className="step-badge" aria-hidden="true">
                    0{i + 1}
                  </span>
                </div>
                <h3>
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CORE SOLUTIONS */}
      <section className="section alt" id="solutions">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Core Safety Solutions for"
            accent="Mining Operations"
            lead="A complete platform covering every stage of workforce safety — from pit access to post-shift reporting."
          />
          <div className="grid cols-4">
            {solutions.map((s, i) => (
              <Reveal as="article" delay={i} className="card media-card" key={s.title}>
                <div className="media-card-img">
                  <Photo name={s.photo} sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 290px" />
                </div>
                <div className="media-card-body">
                  <IconTile icon={s.icon} tone={s.tone} />
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <Link className="link-more" to={s.id ? `/services#${s.id}` : "/services"}>
                    Learn more <ArrowRight aria-hidden="true" />
                    <span className="sr-only"> about {s.title}</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="center section-foot">
            <ButtonLink to="/services">View All Services</ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* VISIBILITY SPLIT */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Why Choose SME</span>
            <h2 className="h2">
              Complete Visibility of Your <span className="accent">Mining Operations</span>
            </h2>
            <p>
              Our integrated platform follows every worker from the moment they approach the pit gate until they
              safely return to the surface.
            </p>
            <p>Management gets one clear picture of who is underground, where, and whether every shift closed out safely.</p>
            <div className="mini-feats">
              {visibilityFeatures.map((f) => (
                <div className="mini-feat" key={f.title}>
                  <IconTile icon={f.icon} tone={f.tone} size="sm" />
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={1} className="dash-showcase">
            <span className="dash-deco" aria-hidden="true" />
            <LiveDashboard />
            <p className="dash-caption">Illustrative view of the SME monitoring dashboard.</p>
          </Reveal>
        </div>
      </section>

      {/* SITE TYPES */}
      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="Where We Work"
            title="Built for Every Kind of"
            accent="Mine Site"
            lead="From open pits in the Western Region to underground operations in Ashanti, our systems adapt to how your site actually runs."
          />
          <div className="grid cols-3">
            {siteTypes.map((t, i) => (
              <Reveal delay={i} key={t.title}>
                <Link to="/clients" className="site-tile">
                  <Photo name={t.photo} sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 390px" />
                  <span className="site-tile-body">
                    <b>{t.title}</b>
                    <span>{t.text}</span>
                    <span className="link-more">
                      See our client sites <ArrowRight aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="What Our Clients" accent="Say" />
          <Testimonials items={testimonials.home} />
        </div>
      </section>

      <CtaBand
        photo="crew-smiling"
        position="center 35%"
        title="Ready to Transform Your Mine Safety Operations?"
        text="Get real-time visibility of your workforce and ensure compliance with our comprehensive solutions."
      >
        <ButtonLink to="/contact">Schedule a Demo</ButtonLink>
        <ButtonLink to={whatsappLink()} variant="ghost">
          <WhatsAppIcon /> Chat on WhatsApp
        </ButtonLink>
      </CtaBand>
    </>
  );
}
