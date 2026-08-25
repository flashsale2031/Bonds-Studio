/** Design: Orbital Studio — the supplied live mobile reference is the ground truth: dark cosmic surfaces, a visible Earth system, cyan/mint signals, and operational rounded panels. */
import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Compass,
  Eye,
  Globe2,
  Layers3,
  Menu,
  Mic,
  Orbit,
  Pause,
  Play,
  Plus,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";

const earthTexture = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663911438743/dumUBXGupTBrQUFo.png";

const navLinks = [
  { label: "Orbit", href: "#orbit" },
  { label: "AI mode", href: "#ai-mode" },
  { label: "Creative", href: "#creative-projects" },
  { label: "Ledger", href: "#ledger-projects" },
];

const creativeProjects = [
  { id: "document", code: "DO", name: "Document", detail: "Shape a clear record", icon: Layers3, tone: "mint" },
  { id: "web", code: "WB", name: "Web", detail: "Build a responsive room", icon: Globe2, tone: "cyan" },
  { id: "image", code: "IM", name: "Image", detail: "Compose an art direction", icon: Sparkles, tone: "violet" },
  { id: "video", code: "VI", name: "Video", detail: "Sequence the next scene", icon: Play, tone: "amber" },
];

type LedgerProject = { id: string; name: string; workflow: string; reviewed: boolean; connected: boolean; entryActive: boolean };

const initialLedgerProjects: LedgerProject[] = [
  { id: "topsurveys", name: "TopSurveys", workflow: "Account review", reviewed: false, connected: false, entryActive: false },
  { id: "fivesurveys", name: "Five Surveys", workflow: "Balance entry", reviewed: true, connected: true, entryActive: false },
  { id: "inboxdollars", name: "InboxDollars", workflow: "Reconciliation", reviewed: false, connected: false, entryActive: false },
];

function LedgerMark({ compact = false }: { compact?: boolean }) {
  return <span className={`ledger-emblem ${compact ? "is-compact" : ""}`} aria-hidden="true"><i /><i /><i /><b /></span>;
}

function BrandIdentity({ footer = false }: { footer?: boolean }) {
  return <span className={`brand-identity ${footer ? "is-footer" : ""}`}><LedgerMark compact={footer} /><span className="brand-wordmark"><b>Bonds</b><i>Studio</i></span></span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [mode, setMode] = useState("Making");
  const [centerObject, setCenterObject] = useState("Earth");
  const [playback, setPlayback] = useState("1 day / second");
  const [aiView, setAiView] = useState("Reasoning");
  const [aiStatus, setAiStatus] = useState("Ready to map the current workspace.");
  const [activeProject, setActiveProject] = useState("web");
  const [ledgerProjects, setLedgerProjects] = useState<LedgerProject[]>(initialLedgerProjects);
  const [ledgerName, setLedgerName] = useState("");
  const [notice, setNotice] = useState("Orbital field ready. Earth centered.");

  const setActivity = (message: string) => setNotice(message);

  function resetOrbit() {
    setPaused(false);
    setCenterObject("Earth");
    setPlayback("1 day / second");
    setActivity("Orbit reset. Earth centered with the saved timeline.");
  }

  function runAiScan() {
    setAiStatus("Reading project context and open ledger signals…");
    setActivity("AI mode is scanning the current studio state.");
    window.setTimeout(() => setAiStatus("Context mapped · 4 signals ready for your review."), 700);
  }

  function addLedgerProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = ledgerName.trim();
    if (!name) return;
    setLedgerProjects((projects) => [...projects, { id: crypto.randomUUID(), name, workflow: "Account review", reviewed: false, connected: false, entryActive: false }]);
    setLedgerName("");
    setActivity(`${name} has been added to the ledger projects queue.`);
  }

  function toggleLedgerReview(id: string) {
    setLedgerProjects((projects) => projects.map((project) => project.id === id ? { ...project, reviewed: !project.reviewed } : project));
    setActivity("Ledger review state updated.");
  }

  function toggleConnection(id: string) {
    setLedgerProjects((projects) => projects.map((project) => project.id === id ? { ...project, connected: !project.connected } : project));
    setActivity("Browser session state updated locally.");
  }

  function startLedgerEntry(id: string) {
    const project = ledgerProjects.find((item) => item.id === id);
    setLedgerProjects((projects) => projects.map((item) => item.id === id ? { ...item, connected: true, entryActive: true } : item));
    setActivity(`${project?.name || "Platform"} entry started. The platform channel is now active.`);
  }

  function stopLedgerEntry(id: string) {
    const project = ledgerProjects.find((item) => item.id === id);
    setLedgerProjects((projects) => projects.map((item) => item.id === id ? { ...item, entryActive: false } : item));
    setActivity(`${project?.name || "Platform"} entry stopped safely. The platform channel remains available for review.`);
  }

  return (
    <div className="orbital-app">
      <header className="site-header">
        <a className="brand-lockup" href="#orbit" aria-label="Bonds Studio home"><span className="bc-icon" aria-hidden="true">BC</span><span className="brand-wordmark"><b>Bonds</b><i>Studio</i></span></a>
        <nav className="desktop-nav" aria-label="Header menu">
          {navLinks.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <button className="header-menu-button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="header-menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}<span>Menu</span>
        </button>
      </header>

      <nav id="header-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-label="Mobile header menu">
        {navLinks.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ChevronRight size={16} /></a>)}
      </nav>

      <main>
        <section className="orbital-hero section-frame" id="orbit" aria-labelledby="orbit-title">
          <div className="star-field" aria-hidden="true">
            {Array.from({ length: 48 }, (_, index) => <i key={index} style={{ left: `${(index * 37) % 98 + 1}%`, top: `${(index * 61) % 90 + 4}%`, animationDelay: `${(index % 7) * 0.42}s` }} />)}
          </div>
          <div className="orbital-heading">
            <p><span className="signal-dot" />Orbital field <span>/</span> Earth system</p>
            <button className="mode-toggle" onClick={() => { const next = mode === "Making" ? "Observing" : "Making"; setMode(next); setActivity(`Studio mode changed to ${next}.`); }}><span>Mode</span><strong>{mode}</strong><ChevronDown size={15} /></button>
          </div>

          <div className="orbital-copy">
            <div className="hero-brand-ledger"><LedgerMark /><span><b>Bonds</b><i>Studio</i><small><em /> Verified orbital ledger</small></span></div>
            <h1 id="orbit-title">A world to <em>observe,</em><br />shape, and release.</h1>
            <p>Ground every project in a navigable system. The orbital field keeps the work visible while the studio moves from an early signal to a verified release.</p>
            <div className="orbital-status"><span className="status-pulse" />{paused ? "Simulation paused" : "Simulation in motion"}<b>{paused ? "hold" : "∞ ideas"}</b></div>
          </div>

          <div className="earth-stage" aria-label="Interactive Earth orbital visualization">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="orbit-ring ring-three" />
            <div className={`earth-globe ${paused ? "is-paused" : ""}`} style={{ backgroundImage: `url(${earthTexture})` }}>
              <span className="earth-shine" />
            </div>
            <span className="moon" />
            <div className="earth-label"><span>Earth-centered</span><b>Δλ 0.986°/day</b></div>
          </div>

          <section className="orbit-controls" aria-label="Earth simulation controls">
            <div className="controls-topline"><span>Simulation time</span><strong>Feb 18, 2028, 04:46 PM</strong></div>
            <label>Current date<select aria-label="Simulation date" defaultValue="02/18/2028, 4:46 PM" onChange={(event) => setActivity(`Simulation date set to ${event.target.value}.`)}><option>02/18/2028, 4:46 PM</option><option>06/21/2028, 9:12 AM</option><option>12/31/2028, 11:59 PM</option></select></label>
            <label>Playback<select value={playback} onChange={(event) => { setPlayback(event.target.value); setActivity(`Playback set to ${event.target.value}.`); }}><option>1 day / second</option><option>1 week / second</option><option>1 month / second</option></select></label>
            <label>Center object<select value={centerObject} onChange={(event) => { setCenterObject(event.target.value); setActivity(`Center object changed to ${event.target.value}.`); }}><option>Earth</option><option>Moon</option><option>Sun</option></select></label>
            <div className="control-actions">
              <button onClick={() => { setPaused((value) => !value); setActivity(paused ? "Simulation resumed." : "Simulation paused."); }}>{paused ? <Play size={15} /> : <Pause size={15} />}{paused ? "Resume simulation" : "Pause simulation"}</button>
              <button onClick={resetOrbit}><RotateCcw size={15} />Reset 10-year process</button>
              <button onClick={() => setActivity("Explore view enabled. Drag or use arrow keys to inspect Earth.")}><Compass size={15} />Explore view</button>
            </div>
            <p className="controls-helper">Drag or use arrow keys to look around Earth; wheel and pinch zoom.</p>
          </section>

          <div className="grounding-panel"><span>Grounding map · street level</span><strong>New York, United States</strong><button onClick={() => setActivity("Street View context prepared for New York, United States.")}>Street View <ArrowUpRight size={14} /></button></div>
        </section>

        <section className="studio-loop section-frame">
          <div><span className="eyebrow">The studio loop</span><h2>Observe <i>→</i> shape <i>→</i> release.</h2></div>
          <p>Every project is a small world: mapped carefully, built with intent, and launched with room to evolve.</p>
          <div className="loop-count"><b>03</b><span>phases<br />in every orbit</span></div>
        </section>

        <section className="module-section ai-section" id="ai-mode" aria-labelledby="ai-title"><span className="section-index" aria-hidden="true">02</span>
          <div className="section-heading"><div><span className="eyebrow"><BrainCircuit size={15} /> AI Mode</span><h2 id="ai-title">Think with the <em>whole field.</em></h2></div><p>Intent, context, and verification stay together before an action becomes a record.</p></div>
          <div className="ai-console">
            <div className="ai-console-head"><div><span className="signal-dot" />Adaptive reasoning</div><span className="safe-pill"><ShieldCheck size={13} /> Safety on</span></div>
            <div className="ai-tabs" role="tablist" aria-label="AI operating modes">
              {["Reasoning", "Voice", "Safe action"].map((item) => <button key={item} className={aiView === item ? "is-active" : ""} onClick={() => { setAiView(item); setAiStatus(`${item} mode selected. Ready when you are.`); }}>{item === "Voice" ? <Mic size={15} /> : item === "Safe action" ? <ShieldCheck size={15} /> : <BrainCircuit size={15} />}{item}</button>)}
            </div>
            <div className="ai-body"><div className="ai-orb"><span /><span /><b>AI</b></div><div><p className="ai-label">{aiView} layer</p><h3>{aiView === "Reasoning" ? "Map the next move without losing the why." : aiView === "Voice" ? "Turn a spoken signal into an organized next step." : "Hold consequential steps until the evidence is clear."}</h3><p className="ai-status" aria-live="polite">{aiStatus}</p><div className="ai-actions"><button onClick={runAiScan}><WandSparkles size={16} />Run workspace scan</button><button className="secondary-action" onClick={() => setActivity("AI notes panel opened for the selected project.")}>Open notes <ArrowUpRight size={15} /></button></div></div></div>
            <div className="ai-signals"><span><CheckCircle2 size={14} />Project context</span><span><CheckCircle2 size={14} />Ledger state</span><span><CheckCircle2 size={14} />Release criteria</span></div>
          </div>
        </section>

        <section className="module-section creative-section" id="creative-projects" aria-labelledby="creative-title"><span className="section-index" aria-hidden="true">03</span>
          <div className="section-heading"><div><span className="eyebrow"><Sparkles size={15} /> Creative Projects</span><h2 id="creative-title">Build the next <em>small world.</em></h2></div><p>Select a medium, give it an intention, then make its first room.</p></div>
          <div className="creative-grid">
            {creativeProjects.map((project) => { const Icon = project.icon; const active = activeProject === project.id; return <article className={`creative-card ${project.tone} ${active ? "is-active" : ""}`} key={project.id}><div className="project-card-top"><span className="project-code">{project.code}</span><Icon size={20} /></div><h3>{project.name}</h3><p>{project.detail}</p><button onClick={() => { setActiveProject(project.id); setActivity(`${project.name} project selected. The launch board is ready.`); }}>{active ? "Selected" : "Start project"}<ArrowUpRight size={15} /></button></article>; })}
            <article className="create-anything-card"><span className="eyebrow">Blank project</span><h3>Make a room for the unplanned.</h3><button onClick={() => setActivity("Blank project board prepared. Choose a medium to continue.")}><Plus size={17} />New project</button></article>
          </div>
        </section>

        <section className="module-section ledger-section" id="ledger-projects" aria-labelledby="ledger-title"><span className="section-index" aria-hidden="true">04</span>
          <div className="section-heading"><div><span className="eyebrow"><CircleDot size={15} /> Ledger Projects</span><h2 id="ledger-title">Keep each account <em>in view.</em></h2></div><p>Dedicated review states, browser session cues, and clear next actions—kept together in the working ledger.</p></div>
          <div className="ledger-shell">
            <div className="ledger-summary"><div><span>Projects</span><b>{ledgerProjects.length.toString().padStart(2, "0")}</b></div><div><span>Reviewed</span><b>{ledgerProjects.filter((project) => project.reviewed).length.toString().padStart(2, "0")}</b></div><div><span>Sessions</span><b>{ledgerProjects.filter((project) => project.connected).length.toString().padStart(2, "0")}</b></div><p><ShieldCheck size={17} />Review holds remain visible when evidence is missing.</p></div>
            <div className="ledger-list">{ledgerProjects.map((project, index) => <article className={`ledger-row ${project.entryActive ? "is-entry-running" : ""}`} key={project.id}><span className="ledger-index">{(index + 1).toString().padStart(2, "0")}</span><div className="ledger-project-name"><h3>{project.name}</h3><p>{project.workflow} · {project.entryActive ? "Entry running in platform channel" : project.connected ? "Browser session connected" : "Connect an account to start"}</p></div><span className={`ledger-state ${project.reviewed ? "is-reviewed" : ""}`}><i />{project.reviewed ? "Reviewed" : "Pending"}</span><div className="ledger-actions"><button onClick={() => toggleConnection(project.id)}>{project.connected ? "Disconnect" : "Connect"}</button><button className="entry-start" disabled={project.entryActive} onClick={() => startLedgerEntry(project.id)}><Play size={13} />Start Entry</button><button className="entry-stop" disabled={!project.entryActive} onClick={() => stopLedgerEntry(project.id)}><Pause size={13} />Stop Entry</button><button className="review-action" onClick={() => toggleLedgerReview(project.id)}>{project.reviewed ? "Reopen" : "Review"}<ArrowUpRight size={14} /></button></div></article>)}</div>
            <form className="ledger-add" onSubmit={addLedgerProject}><label htmlFor="ledger-name">Add ledger project</label><div><input id="ledger-name" value={ledgerName} onChange={(event) => setLedgerName(event.target.value)} placeholder="Platform or account name" /><button type="submit"><Plus size={16} />Add</button></div></form>
          </div>
        </section>

        <section className="notice-bar" aria-live="polite"><span className="signal-dot" />{notice}<button onClick={() => setActivity("Studio status cleared. Ready for the next action.")}>Clear</button></section>
      </main>

      <footer className="site-footer"><BrandIdentity footer /><p>Bonds Studio · orbit, make, and keep a record.</p><a href="#orbit">Back to orbit <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
