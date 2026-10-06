import { useEffect, useState } from "react";
import { LogIn, LogOut, TriangleAlert } from "lucide-react";
import { prefersReducedMotion } from "../hooks/motion.js";

// Illustrative data only — this is a mock of the monitoring dashboard, not a live feed.
const people = [
  "Kwame Mensah", "Abena Ofori", "Yaw Boateng", "Akosua Darko", "Kofi Asare", "Ama Owusu",
  "Kwabena Osei", "Efua Quaye", "Kojo Antwi", "Adwoa Sarpong", "Nana Agyeman", "Esi Addo",
];
const gates = ["Pit A · Gate 2", "Pit A · Gate 1", "Pit B · Gate 3", "Portal 1 · Level 3", "Decline 2 · Gate 1", "Plant · Main gate"];
const exits = ["Shift 2 complete", "Pit A · Gate 1", "Portal 1 · surface", "Plant · Main gate"];
const zones = [
  { name: "Pit A", share: 0.34 },
  { name: "Underground", share: 0.3 },
  { name: "Pit B", share: 0.22 },
  { name: "Plant", share: 0.14 },
];
const pick = (list) => list[Math.floor(Math.random() * list.length)];
export const feedIcons = { in: LogIn, out: LogOut, alert: TriangleAlert };

export function ago(at, now) {
  const s = (now - at) / 1000;
  if (s < 45) return "just now";
  if (s < 90) return "1 min ago";
  return `${Math.round(s / 60)} min ago`;
}

function initialState() {
  const now = Date.now();
  return {
    onSite: 1248,
    alerts: 1,
    now,
    seq: 3,
    feed: [
      { id: 2, type: "in", name: "Kwame Mensah", sub: "Checked in — Pit A · Gate 2", at: now },
      { id: 1, type: "out", name: "Abena Ofori", sub: "Exited — Shift 2 complete", at: now - 120_000 },
      { id: 0, type: "alert", name: "RFID anomaly", sub: "Unverified badge — Pit B entrance", at: now - 360_000 },
    ],
  };
}

function step(state) {
  const now = Date.now();
  const r = Math.random();
  const type = r < 0.08 ? "alert" : r < 0.56 ? "in" : "out";
  const event =
    type === "alert"
      ? { type, name: "RFID anomaly", sub: `Unverified badge — ${pick(gates)}` }
      : type === "in"
        ? { type, name: pick(people), sub: `Checked in — ${pick(gates)}` }
        : { type, name: pick(people), sub: `Exited — ${pick(exits)}` };
  let alerts = state.alerts;
  if (type === "alert") alerts = Math.min(alerts + 1, 3);
  else if (alerts > 0 && Math.random() < 0.25) alerts -= 1;
  return {
    onSite: state.onSite + (type === "in" ? 1 : type === "out" ? -1 : 0),
    alerts,
    now,
    seq: state.seq + 1,
    feed: [{ ...event, id: state.seq, at: now }, ...state.feed].slice(0, 3),
  };
}

/** Simulated gate activity: headcount, alerts and the latest three events, updating every few seconds. */
export function useLiveFeed(interval = 3400) {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const timer = setInterval(() => {
      if (!document.hidden) setState(step);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);
  return state;
}

export default function LiveDashboard() {
  const state = useLiveFeed();

  return (
    <div
      className="dash"
      role="img"
      aria-label="Illustration of the SME monitoring dashboard: workers on site, active alerts, occupancy by zone and recent gate check-ins."
    >
      <div className="dash-head" aria-hidden="true">
        <div className="dots">
          <i />
          <i />
          <i />
        </div>
        <span className="dash-title">Mine Operations — Live Feed</span>
        <span className="live-pill">
          <span className="dot" /> Live
        </span>
      </div>

      <div className="dash-body" aria-hidden="true">
        <div className="kpi-row">
          <div className="kpi">
            <div className="k-label">Workers on site</div>
            <div className="k-value">{state.onSite.toLocaleString("en-GB")}</div>
            <div className="k-trend">▲ 4.2% vs last shift</div>
          </div>
          <div className="kpi">
            <div className="k-label">Active alerts</div>
            <div className={`k-value${state.alerts ? " danger" : " ok"}`}>{state.alerts}</div>
            <div className={`k-trend${state.alerts ? " danger" : ""}`}>{state.alerts ? "review required" : "all clear"}</div>
          </div>
          <div className="kpi">
            <div className="k-label">Check-in rate</div>
            <div className="k-value">98.6%</div>
            <div className="k-trend">automated RFID</div>
          </div>
        </div>

        <div className="zones">
          <div className="feed-title">Occupancy by zone</div>
          {zones.map((z) => (
            <div className="zone" key={z.name}>
              <span>{z.name}</span>
              <span className="zone-bar">
                <i style={{ width: `${z.share * 100 * 2.4}%` }} />
              </span>
              <b>{Math.round(state.onSite * z.share)}</b>
            </div>
          ))}
        </div>

        <div className="feed">
          <div className="feed-title">Recent entry &amp; exit activity</div>
          {state.feed.map((e) => {
            const Icon = feedIcons[e.type];
            return (
              <div className="feed-item" key={e.id}>
                <span className={`f-ic ${e.type}`}>
                  <Icon />
                </span>
                <div className="f-main">
                  <div className="f-name">{e.name}</div>
                  <div className="f-sub">{e.sub}</div>
                </div>
                <span className="f-time">{ago(e.at, state.now)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
