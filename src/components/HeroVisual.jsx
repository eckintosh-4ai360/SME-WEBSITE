import { ShieldCheck, Users } from "lucide-react";
import Photo from "./Photo.jsx";
import { ago, feedIcons, useLiveFeed } from "./LiveDashboard.jsx";

/** Home hero image: a crew heading underground, with live monitoring cards floating over it. */
export default function HeroVisual() {
  const { onSite, feed, now } = useLiveFeed(4200);
  const latest = feed[0];
  const Icon = feedIcons[latest.type];

  return (
    <div className="hero-visual">
      <span className="hero-deco" aria-hidden="true" />
      <div className="hero-photo">
        <Photo
          name="rail-crew"
          priority
          sizes="(max-width: 1024px) 92vw, 580px"
          alt="Mine crew in hard hats and hi-vis vests walking to the tunnel portal for their shift"
        />
      </div>

      <div className="hero-chip chip-count" aria-hidden="true">
        <span className="chip-ic">
          <Users />
        </span>
        <span>
          <small>
            <i className="dot" /> Live · workers on site
          </small>
          <b>{onSite.toLocaleString("en-GB")}</b>
        </span>
      </div>

      <div className="hero-chip chip-event" aria-hidden="true">
        <span className={`f-ic ${latest.type}`} key={latest.id}>
          <Icon />
        </span>
        <span className="chip-event-text" key={`t${latest.id}`}>
          <b>{latest.name}</b>
          <small>{latest.sub}</small>
        </span>
        <span className="chip-time">{ago(latest.at, now)}</span>
      </div>

      <div className="hero-chip chip-ok" aria-hidden="true">
        <span className="chip-ic yellow">
          <ShieldCheck />
        </span>
        <span>
          <b>0 incidents</b>
          <small>this week · 100% compliant</small>
        </span>
      </div>
    </div>
  );
}
