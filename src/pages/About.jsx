import { BarChart3, Lock, MapPin, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import StatStrip from "../components/StatStrip.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { Avatar, ButtonLink, IconTile, SectionHeading } from "../components/ui.jsx";
import { missionVision, stats, team, values } from "../data/content.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

const provides = [
  { icon: MapPin, tone: "yellow", title: "Live Tracking", text: "Real-time location data for every worker underground." },
  { icon: BarChart3, tone: "navy", title: "Analytics", text: "Comprehensive insights into every safety metric." },
  { icon: Lock, tone: "navy", title: "Safe Entry", text: "Verified access control at every pit gate." },
  { icon: ShieldCheck, tone: "yellow", title: "Compliance", text: "Regulatory adherence built into every workflow." },
];

export default function About() {
  usePageMeta(
    "About Us",
    "Over 5 years of excellence in safe mine entry and exit solutions and real-time worker monitoring — meet the team behind SME Consult."
  );

  return (
    <>
      <PageHero
        photo="mine-portal"
        position="30% center"
        eyebrow="About Us"
        title="Leading the Industry in"
        accent="Mine Safety"
        lead="Over 5 years of excellence in safe mine entry and exit solutions and real-time worker monitoring — protecting lives while enabling operational efficiency."
        crumb="About"
      />

      {/* MISSION / VISION */}
      <section className="section">
        <div className="container grid cols-2">
          {missionVision.map((m, i) => (
            <Reveal as="article" delay={i} className="card" key={m.title}>
              <IconTile icon={m.icon} tone={m.tone} />
              <h2 className="card-title">{m.title}</h2>
              {m.text.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="section alt">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">What We Provide</span>
            <h2 className="h2">
              Complete Mining <span className="accent">Safety Solutions</span>
            </h2>
            <p>
              SME Consult specialises in safe entry and exit protocols for mining pit operations. Our systems ensure every
              worker is properly tracked, monitored and accounted for throughout their shift.
            </p>
            <p>
              Our real-time monitoring platform provides live data on all workers in your operations — location
              tracking, biometric status and safety compliance verification.
            </p>
            <div className="provide-grid">
              {provides.map((p) => (
                <div className="provide-item" key={p.title}>
                  <IconTile icon={p.icon} tone={p.tone} size="sm" />
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={1} className="collage">
            <Photo name="mining-engineer" className="collage-main" sizes="(max-width: 1024px) 80vw, 460px" position="40% center" />
            <Photo name="safety-briefing" className="collage-inset" sizes="(max-width: 1024px) 50vw, 280px" position="55% center" />
            <span className="collage-tag">
              <ShieldCheck aria-hidden="true" /> Safety-first, every shift
            </span>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="section tight">
        <div className="container">
          <StatStrip items={stats} />
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What Guides Us" title="Our Core" accent="Values" />
          <div className="grid cols-4">
            {values.map((v, i) => (
              <Reveal as="article" delay={i} className="card" key={v.title}>
                <IconTile icon={v.icon} tone={v.tone} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section alt">
        <div className="container split story">
          <Reveal className="story-media">
            <Photo name="open-pit-truck" sizes="(max-width: 1024px) 92vw, 560px" />
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow">Our Journey</span>
            <h2 className="h2">
              Our <span className="accent">Story</span>
            </h2>
            <p>
              Founded over 5 years ago, SME CONSULT (Safe Mine Entry &amp; Exit) was established by a team of experienced
              mining safety professionals who recognised the critical need for comprehensive entry and exit monitoring in
              mining operations.
            </p>
            <p>
              What started as a consultancy focused on safety protocols has evolved into a technology-driven solution
              provider offering real-time worker monitoring, analytics dashboards and integrated safety management.
            </p>
            <p>
              Our technology tracks over 10,000 workers, giving mining companies complete visibility of their workforce —
              from the moment a worker enters a pit to when they safely exit.
            </p>
            <p>
              We remain committed to one mission: ensuring that every mine worker is tracked, protected, and returns home
              safely at the end of their shift.
            </p>
            <ButtonLink to="/contact" className="mt">
              Work With Us
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the"
            accent="Professionals"
            lead="A dedicated team committed to reliable, efficient operations — with strong leadership and a culture of teamwork."
          />
          <div className="grid cols-4">
            {team.map((m, i) => (
              <Reveal as="article" delay={i} className="team-card" key={m.name}>
                <Avatar initials={m.initials} tone={m.tone} size="lg" />
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        photo="engineers-tablet"
        title="Ready to Transform Your Mine Safety Operations?"
        text="Let's discuss how our entry and exit monitoring can protect your workforce."
      >
        <ButtonLink to="/contact">Schedule a Demo</ButtonLink>
        <ButtonLink to="/services" variant="ghost">
          View Services
        </ButtonLink>
      </CtaBand>
    </>
  );
}
