// Gallery items. `photo` is a key in src/data/photos.json; `size` ("wide" | "tall") makes a tile span two cells.
// These are licensed stock photos standing in for your own — swap in real site photos with `npm run add-photo`.
export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "operations", label: "Operations" },
  { id: "underground", label: "Underground" },
  { id: "safety", label: "Safety" },
  { id: "training", label: "Training" },
  { id: "technology", label: "Technology" },
];

export const gallery = [
  { photo: "mine-portal", cat: "operations", title: "Mine portal entrance", size: "wide" },
  { photo: "card-reader", cat: "technology", title: "RFID tap-in at the gate" },
  { photo: "underground-engineer", cat: "underground", title: "Underground inspection", size: "tall" },
  { photo: "crew-lineup", cat: "safety", title: "Pre-shift headcount" },
  { photo: "safety-briefing", cat: "training", title: "Safety procedures briefing" },
  { photo: "control-room", cat: "technology", title: "24/7 monitoring room", size: "wide" },
  { photo: "open-pit-truck", cat: "operations", title: "Haul road, open-pit operation" },
  { photo: "helmet-rack", cat: "safety", title: "Hard hats ready for the shift" },
  { photo: "tunnel-walk", cat: "underground", title: "Steel-supported haulage drive", size: "tall" },
  { photo: "fire-drill", cat: "training", title: "Fire response drill" },
  { photo: "turnstiles", cat: "technology", title: "Access-control gates" },
  { photo: "rail-crew", cat: "operations", title: "Crew change at the portal", size: "wide" },
  { photo: "engineer-ppe", cat: "safety", title: "PPE compliance check" },
  { photo: "engineers-tablet", cat: "technology", title: "Reviewing shift data" },
  { photo: "cpr-training", cat: "training", title: "First-aid & CPR training", size: "tall" },
  { photo: "ore-processing", cat: "operations", title: "Ore processing line" },
  { photo: "tunnel-light", cat: "underground", title: "End of shift — everyone out" },
  { photo: "audit-notes", cat: "safety", title: "Compliance audit on site" },
  { photo: "open-pit-machinery", cat: "operations", title: "Open-pit operations from above", size: "wide" },
  { photo: "tablet-engineer", cat: "technology", title: "Digital inspections" },
];
