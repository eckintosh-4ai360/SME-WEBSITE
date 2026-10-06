// Page copy that appears as lists/cards. Photos are referenced by their key in src/data/photos.json.
import {
  BarChart3,
  ClipboardCheck,
  Eye,
  GraduationCap,
  Headset,
  Lightbulb,
  Lock,
  MapPin,
  Radio,
  ShieldCheck,
  Star,
  Target,
  Users,
} from "lucide-react";

export const stats = [
  { value: 3, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 10000, suffix: "+", label: "Workers Monitored" },
  { value: 99.9, decimals: 1, suffix: "%", label: "Safety Record" },
];

// Home — the check-in story, told in four photos
export const howItWorks = [
  {
    photo: "helmet-rack",
    title: "Tag every worker",
    text: "Each worker is registered with an RFID badge linked to their role, certifications and PPE.",
  },
  {
    photo: "card-reader",
    title: "Tap in at the gate",
    text: "Readers at every pit gate verify the badge and log the entry in under a second. Unknown badges are flagged.",
  },
  {
    photo: "control-room",
    title: "Watch it live, 24/7",
    text: "Supervisors see who is underground, where and for how long — on one live dashboard.",
  },
  {
    photo: "tunnel-light",
    title: "Close out every shift",
    text: "At shift end the system confirms everyone is out. Anyone missing triggers an immediate alert.",
  },
];

export const services = [
  {
    id: "safe-entry-exit",
    icon: ShieldCheck,
    tone: "yellow",
    photo: "turnstiles",
    title: "Safe Entry & Exit",
    summary: "Structured protocols and verified access control so every trip into the pit is authorised and recorded.",
    text: "Comprehensive protocols for safe mine pit entry and exit operations with verified access control.",
    points: ["Entry verification", "Exit tracking", "Access control", "Safety protocols"],
  },
  {
    id: "real-time-monitoring",
    icon: Radio,
    tone: "navy",
    photo: "control-room",
    title: "Real-Time Monitoring",
    summary: "Live RFID and GPS tracking of every worker across the operation, with instant anomaly alerts.",
    text: "RFID-based check-in and check-out for tracking every worker throughout your mining operations in real time.",
    points: ["RFID card check-in/out", "Live worker tracking", "Real-time status updates", "Alert systems"],
  },
  {
    id: "analytics-dashboard",
    icon: BarChart3,
    tone: "navy",
    photo: "analytics-tablet",
    title: "Analytics Dashboard",
    summary: "Safety metrics, incident reports and compliance data in clear, actionable dashboards.",
    text: "Comprehensive analytics and reporting on workforce safety metrics, accessible from any device.",
    points: ["Safety metrics", "Incident reports", "Compliance data", "Trend analysis"],
  },
  {
    id: "compliance-audits",
    icon: ClipboardCheck,
    tone: "yellow",
    photo: "site-audit",
    title: "Compliance Audits",
    summary: "Audits that keep your operation ahead of every inspection.",
    text: "Comprehensive audits ensuring your operation meets all applicable safety regulations.",
    points: ["Regulatory review", "Documentation", "Gap analysis", "Ongoing support"],
  },
  {
    id: "safety-training",
    icon: GraduationCap,
    tone: "yellow",
    photo: "safety-briefing",
    title: "Expert Safety Training",
    summary: "Practical training that makes safe behaviour the default on every shift.",
    text: "Industry-leading training programmes for enhanced safety awareness across your workforce.",
    points: ["Certified programmes", "Practical exercises", "Custom curriculum", "Assessments"],
  },
  {
    id: "support",
    icon: Headset,
    tone: "navy",
    photo: "radio-check",
    title: "24/7 Support",
    summary: "Round-the-clock access to expert consultants when it matters most.",
    text: "Round-the-clock access to expert consultants for urgent matters, on site or remotely.",
    points: ["24/7 hotline", "Rapid response", "Remote support", "On-site assistance"],
  },
];

// Home — the four headline solutions (subset of services, different photos)
export const solutions = [
  { ...services[0], photo: "turnstiles" },
  { ...services[1], photo: "tablet-engineer" },
  { ...services[2], photo: "analytics-tablet" },
  {
    id: null, // no dedicated section on the Services page — links to the page itself
    icon: Users,
    tone: "yellow",
    photo: "crew-lineup",
    title: "Worker Management",
    summary: "Full oversight of personnel records, certifications and compliance from one place.",
  },
];

export const siteTypes = [
  {
    photo: "open-pit-aerial",
    title: "Open-pit mines",
    text: "Gate readers on every haul road and pit access point, with shift headcounts at the push of a button.",
  },
  {
    photo: "tunnel-walk",
    title: "Underground mines",
    text: "Portal and level check-points that show exactly who is below ground — and where — at all times.",
  },
  {
    photo: "ore-processing",
    title: "Processing plants",
    text: "Controlled access to plant areas, contractor tracking and audit-ready attendance records.",
  },
];

export const visibilityFeatures = [
  {
    icon: MapPin,
    tone: "yellow",
    title: "Live Worker Tracking",
    text: "Real-time GPS and RFID monitoring of personnel entering and exiting mining pits.",
  },
  {
    icon: BarChart3,
    tone: "navy",
    title: "Safety Analytics",
    text: "Dashboards showing safety metrics, incident reports and compliance performance.",
  },
  {
    icon: ShieldCheck,
    tone: "yellow",
    title: "Automated Check-in / Out",
    text: "Seamless entry and exit tracking with instant alerts when anything looks out of the ordinary.",
  },
];

export const process = [
  { title: "Consultation", text: "An initial assessment of your site and a clear understanding of your needs." },
  { title: "Analysis", text: "A comprehensive evaluation and risk assessment of your operations." },
  { title: "Implementation", text: "Deploying tailored solutions and protocols across your mine." },
  { title: "Support", text: "Ongoing monitoring and continuous improvement of your systems." },
];

export const faqs = [
  {
    q: "How does real-time worker monitoring work?",
    a: "Every worker carries an RFID badge that is scanned at each pit gate. Our system logs each entry and exit instantly, updating a live dashboard with who is on site, where, and for how long. Unusual activity — such as a missed exit — triggers immediate alerts to your safety team.",
  },
  {
    q: "What analytics do you provide?",
    a: "Our dashboard covers safety metrics, incident reports, compliance data and trend analysis. You get shift summaries, attendance patterns, certification status and audit-ready reports — all in one place, accessible from any device.",
  },
  {
    q: "How quickly can you implement the system?",
    a: "Most sites are fully operational within two to four weeks. After an initial consultation and site assessment, we install hardware, configure the dashboard and train your team. Smaller deployments can often go live even faster.",
  },
  {
    q: "Is the system compliant with mining regulations?",
    a: "Yes. Our compliance audit service reviews your operation against applicable mining safety regulations, documents everything, identifies gaps and supports you through inspections — with ongoing monitoring to keep you compliant.",
  },
];

export const values = [
  { icon: ShieldCheck, tone: "yellow", title: "Safety First", text: "Unwavering commitment to the highest safety standards in every operation." },
  { icon: Lock, tone: "yellow", title: "Integrity", text: "Transparent, honest and ethical practices in all our operations." },
  { icon: Star, tone: "navy", title: "Excellence", text: "Delivering exceptional quality and results that exceed expectations." },
  { icon: Lightbulb, tone: "navy", title: "Innovation", text: "Cutting-edge technology for real-time monitoring and analytics." },
];

export const missionVision = [
  {
    icon: Target,
    tone: "yellow",
    title: "Our Mission",
    text: [
      "To provide world-class safe entry and exit solutions for mining pits, powered by real-time worker monitoring and comprehensive analytics.",
      "We are committed to protecting lives while enabling operational excellence through cutting-edge technology.",
    ],
  },
  {
    icon: Eye,
    tone: "navy",
    title: "Our Vision",
    text: [
      "To be the global leader in mining workforce safety, setting industry standards with innovative real-time monitoring solutions.",
      "Complete visibility of every worker entering and exiting mining operations — everywhere we operate.",
    ],
  },
];

// Replace initials with real headshots by adding `photo: "<key>"` once you have them.
export const team = [
  { initials: "KA", name: "Kwame Asante", role: "Managing Director", text: "Over 15 years in mining operations and safety leadership across West Africa.", tone: "yellow" },
  { initials: "AM", name: "Ama Mensimah", role: "Head of Operations", text: "Leads project delivery and on-site system implementation for all client sites.", tone: "navy" },
  { initials: "DO", name: "Daniel Owusu", role: "Safety Systems Engineer", text: "Designs and maintains our RFID, GPS and analytics monitoring infrastructure.", tone: "navy" },
  { initials: "EA", name: "Efua Amoah", role: "Compliance Lead", text: "Ensures every deployment meets mining regulations and audit requirements.", tone: "navy" },
];

export const clients = [
  {
    photo: "open-pit-truck",
    title: "Open-Pit Gold Operation",
    location: "Western Region, Ghana",
    tags: ["Safe Entry & Exit", "Real-Time Monitoring"],
    text: "Full RFID check-in across four pit gates with live dashboard access for the safety team.",
  },
  {
    photo: "underground-engineer",
    title: "Underground Mine",
    location: "Ashanti Region, Ghana",
    tags: ["Worker Analytics", "Compliance Audits"],
    text: "Shift-level accountability with automated alerts and monthly compliance reporting.",
  },
  {
    photo: "plant-walk",
    title: "Processing Plant Site",
    location: "Tarkwa, Ghana",
    tags: ["Safety Training", "24/7 Support"],
    text: "Workforce training, entry protocols and round-the-clock emergency support.",
  },
];

export const clientStats = [
  { value: 3, label: "Active Sites" },
  { value: 10000, suffix: "+", label: "Workers Monitored" },
  { text: "24/7", label: "Real-Time Monitoring" },
  { value: 100, suffix: "%", label: "Safety Compliance" },
];

export const testimonials = {
  home: [
    {
      quote:
        "Since installing the SME system, shift close-outs take minutes instead of hours. We always know exactly who is underground and who has safely exited.",
      name: "Enoch Adjei",
      role: "Mine Operations Manager, Western Region",
      initials: "EA",
      tone: "yellow",
    },
    {
      quote:
        "The analytics dashboard gives our safety committee everything they need — incident reports, compliance rates and trends in one clean view.",
      name: "Sarah Boateng",
      role: "HSE Coordinator, Ashanti Region",
      initials: "SB",
      tone: "navy",
    },
    {
      quote:
        "Their team trained our entire workforce in two weeks and the RFID check-in works flawlessly across all our pit gates, day and night.",
      name: "Kofi Twum",
      role: "Plant Superintendent, Tarkwa",
      initials: "KT",
      tone: "navy",
    },
  ],
  clients: [
    {
      quote:
        "The entry and exit system removed all guesswork from our shift management. Every worker is accounted for within seconds of the siren.",
      name: "Enoch Adjei",
      role: "Mine Operations Manager",
      initials: "EA",
      tone: "yellow",
    },
    {
      quote:
        "Their compliance audits have kept us ahead of every inspection. The team is professional, responsive and genuinely committed to safety.",
      name: "Sarah Boateng",
      role: "HSE Coordinator",
      initials: "SB",
      tone: "navy",
    },
    {
      quote:
        "Implementation was fast and the training was excellent. Our workers took to the RFID system immediately, and alerts reach us instantly.",
      name: "Kofi Twum",
      role: "Plant Superintendent",
      initials: "KT",
      tone: "navy",
    },
  ],
};
