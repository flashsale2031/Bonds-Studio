/** Design: The Archivist’s Desk — calm editorial craft, evidence-first hierarchy. */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./brand-ledger.css";

// GitHub Pages serves this SPA beneath /Bonds-Studio/. Normalize both direct
// deep links and the 404.html fallback redirect before App's lightweight router runs.
const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const browserPath = window.location.pathname;
const redirectPath = new URLSearchParams(window.location.search).get("redirect");
if (redirectPath) {
  window.history.replaceState({}, "", redirectPath);
} else if (basePath && browserPath.startsWith(basePath)) {
  const appPath = browserPath.slice(basePath.length) || "/";
  window.history.replaceState({}, "", `${appPath}${window.location.search}${window.location.hash}`);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
