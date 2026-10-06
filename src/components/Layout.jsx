import { Outlet, ScrollRestoration } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import FloatingActions from "./FloatingActions.jsx";

// Every full page load gets the location key "default", so by default a fresh load would restore the
// previous page's scroll position (and skip #hash targets). Key fresh loads by URL instead.
const scrollKey = (location) =>
  location.key === "default" ? location.pathname + location.hash : location.key;

export default function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <ScrollRestoration getKey={scrollKey} />
    </>
  );
}
