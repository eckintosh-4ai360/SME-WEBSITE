import { useEffect } from "react";
import { site } from "../data/site.js";

/** Sets the document title and meta description for the current page. */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name} — ${site.tagline}` : `${site.name} — ${site.tagline}`;
    if (description) document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
}
