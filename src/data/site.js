// Company details used across the whole site. Change them here once.
export const site = {
  name: "SME Consult",
  tagline: "Safe Mine Entry & Exit",
  description:
    "Providing safe entry and exit solutions and real-time worker monitoring for mining operations in Ghana and beyond.",
  email: "smeconsultgh@gmail.com",
  phone: "+233248814260",
  phoneDisplay: "+233 24 881 4260",
  whatsapp: "233248814260",
  address: "Allied Filling Station, Akoon, Tarkwa, Ghana",
  mapLink: "https://maps.app.goo.gl/oEuejVvyMAjk4qJF8",
  mapEmbed:
    "https://maps.google.com/maps?q=Allied%20Filling%20Station%2C%20Akoon%2C%20Tarkwa%2C%20Ghana&z=15&output=embed",
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
  ],
  // Add the full profile URL to show an icon in the footer. Empty entries are hidden.
  socials: {
    facebook: "",
    x: "",
    linkedin: "",
    instagram: "",
  },
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/clients", label: "Clients" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function whatsappLink(text = "Hello SME Consult, I'd like to enquire about your mining safety services.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
