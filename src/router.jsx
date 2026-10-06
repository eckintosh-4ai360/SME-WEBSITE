import { createBrowserRouter, Navigate } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Clients from "./pages/Clients.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Credits from "./pages/Credits.jsx";
import NotFound from "./pages/NotFound.jsx";

const legacy = ["index", "about", "services", "clients", "gallery", "contact"].map((page) => ({
  path: `/${page}.html`,
  element: <Navigate to={page === "index" ? "/" : `/${page}`} replace />,
}));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/clients", element: <Clients /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },
      { path: "/credits", element: <Credits /> },
      ...legacy,
      { path: "*", element: <NotFound /> },
    ],
  },
]);
