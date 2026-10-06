import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons.jsx";
import { whatsappLink } from "../data/site.js";
import { prefersReducedMotion } from "../hooks/motion.js";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`to-top${showTop ? " show" : ""}`}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" })}
      >
        <ChevronUp size={20} />
      </button>
      <a className="wa-float" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  );
}
