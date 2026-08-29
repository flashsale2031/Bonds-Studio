import React, { useState } from "react";
import ContactEarthPage from "./pages/ContactEarthPage";
import PhonePage from "./pages/PhonePage";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  const navigate = (next: string) => { window.history.pushState({}, "", next); setPath(next); };
  React.useEffect(() => { const onPop = () => setPath(window.location.pathname); window.addEventListener("popstate", onPop); return () => window.removeEventListener("popstate", onPop); }, []);
  return <main style={{ minHeight: "100vh", background: "#f6f2e9", color: "#19211e", fontFamily: "system-ui, sans-serif" }}>
    <nav style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 20px", background: "#1a2820", color: "white" }}>
      <strong style={{ marginRight: "auto", letterSpacing: ".08em" }}>BONDS STUDIO</strong>
      <button onClick={() => navigate("/phone")} style={{ padding: "8px 12px", cursor: "pointer" }}>Phone</button>
      <button onClick={() => navigate("/phone/earth")} style={{ padding: "8px 12px", cursor: "pointer" }}>Contact Earth</button>
    </nav>
    {path === "/phone/earth" ? <ContactEarthPage /> : <PhonePage onNavigate={navigate} />}
  </main>;
}
