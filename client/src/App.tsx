/** Design: Orbital Studio — the Earth remains the centered display object; a fixed red viewport sensor drives the adjacent simulated geographic profile. */
import { FormEvent, useEffect, useState } from "react";
import CongressCommandCenter from "./CongressCommandCenter";
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Compass,
  Eye,
  Globe2,
  Home,
  LayoutDashboard,
  Layers3,
  LockKeyhole,
  Maximize2,
  Menu,
  Mic,
  Minus,
  Orbit,
  Pause,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";

const earthTexture = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663911438743/dumUBXGupTBrQUFo.png";

const navLinks = [
  { label: "Orbit", href: "#orbit" },
  { label: "AI command center", href: "#ai-mode" },
  { label: "Phone / Civic", href: "#phone" },
  { label: "Creative", href: "#creative-projects" },
  { label: "Ledger", href: "#ledger-projects" },
];

const simulatedFocusProfiles = [
  { id: "new-york", name: "New York", context: "United States", coordinates: "40.71°N · 74.01°W", details: [{ label: "Population", value: "8.3M · display model" }, { label: "Environmental grade", value: "B+ · scenario" }, { label: "Residential quantity", value: "3.4M · scenario" }, { label: "Business quantity", value: "240K · scenario" }, { label: "Annual financial award", value: "Not configured" }, { label: "Performance grade", value: "A− · scenario" }, { label: "Execution grade", value: "A · scenario" }] },
  { id: "london", name: "London", context: "United Kingdom", coordinates: "51.51°N · 0.13°W", details: [{ label: "Population", value: "9.0M · display model" }, { label: "Environmental grade", value: "B · scenario" }, { label: "Residential quantity", value: "3.7M · scenario" }, { label: "Business quantity", value: "220K · scenario" }, { label: "Annual financial award", value: "Not configured" }, { label: "Performance grade", value: "A · scenario" }, { label: "Execution grade", value: "A− · scenario" }] },
  { id: "lagos", name: "Lagos", context: "Nigeria", coordinates: "6.52°N · 3.38°E", details: [{ label: "Population", value: "15.9M · display model" }, { label: "Environmental grade", value: "B− · scenario" }, { label: "Residential quantity", value: "4.2M · scenario" }, { label: "Business quantity", value: "190K · scenario" }, { label: "Annual financial award", value: "Not configured" }, { label: "Performance grade", value: "B+ · scenario" }, { label: "Execution grade", value: "B+ · scenario" }] },
  { id: "mumbai", name: "Mumbai", context: "India", coordinates: "19.08°N · 72.88°E", details: [{ label: "Population", value: "12.5M · display model" }, { label: "Environmental grade", value: "B · scenario" }, { label: "Residential quantity", value: "4.6M · scenario" }, { label: "Business quantity", value: "260K · scenario" }, { label: "Annual financial award", value: "Not configured" }, { label: "Performance grade", value: "A− · scenario" }, { label: "Execution grade", value: "A− · scenario" }] },
  { id: "tokyo", name: "Tokyo", context: "Japan", coordinates: "35.68°N · 139.69°E", details: [{ label: "Population", value: "14.0M · display model" }, { label: "Environmental grade", value: "A− · scenario" }, { label: "Residential quantity", value: "7.3M · scenario" }, { label: "Business quantity", value: "390K · scenario" }, { label: "Annual financial award", value: "Not configured" }, { label: "Performance grade", value: "A · scenario" }, { label: "Execution grade", value: "A · scenario" }] },
  { id: "sao-paulo", name: "São Paulo", context: "Brazil", coordinates: "23.55°S · 46.63°W", details: [{ label: "Population", value: "11.5M · display model" }, { label: "Environmental grade", value: "B+ · scenario" }, { label: "Residential quantity", value: "4.4M · scenario" }, { label: "Business quantity", value: "230K · scenario" }, { label: "Annual financial award", value: "Not configured" }, { label: "Performance grade", value: "A− · scenario" }, { label: "Execution grade", value: "A− · scenario" }] },
];

const creativeProjects = [
  { id: "document", code: "DO", name: "Document", detail: "Shape a clear record", icon: Layers3, tone: "mint" },
  { id: "web", code: "WB", name: "Web", detail: "Build a responsive room", icon: Globe2, tone: "cyan" },
  { id: "image", code: "IM", name: "Image", detail: "Compose an art direction", icon: Sparkles, tone: "violet" },
  { id: "video", code: "VI", name: "Video", detail: "Sequence the next scene", icon: Play, tone: "amber" },
];

type LedgerProject = { id: string; name: string; workflow: string; reviewed: boolean; connected: boolean; entryActive: boolean };
type WorkspaceAccount = { id: string; label: string; connected: boolean };
type AccountWorkspace = { platformId: string; platformName: string; browserType: string; accounts: WorkspaceAccount[]; activeAccountId: string; expanded: boolean; webFocus: boolean };

const initialLedgerProjects: LedgerProject[] = [
  { id: "topsurveys", name: "TopSurveys", workflow: "Research account review", reviewed: false, connected: false, entryActive: false },
  { id: "fivesurveys", name: "Five Surveys", workflow: "Survey reward entry", reviewed: true, connected: true, entryActive: false },
  { id: "swagbucks", name: "Swagbucks", workflow: "Reward balance entry", reviewed: false, connected: false, entryActive: false },
  { id: "inboxdollars", name: "InboxDollars", workflow: "Cash reward reconciliation", reviewed: false, connected: false, entryActive: false },
  { id: "survey-junkie", name: "Survey Junkie", workflow: "Survey payout review", reviewed: false, connected: false, entryActive: false },
  { id: "branded-surveys", name: "Branded Surveys", workflow: "Points balance entry", reviewed: true, connected: true, entryActive: false },
  { id: "prolific", name: "Prolific", workflow: "Study payment reconciliation", reviewed: false, connected: false, entryActive: false },
  { id: "usertesting", name: "UserTesting", workflow: "Test payment record", reviewed: false, connected: false, entryActive: false },
  { id: "mechanical-turk", name: "Amazon Mechanical Turk", workflow: "Task payout entry", reviewed: false, connected: false, entryActive: false },
  { id: "respondent", name: "Respondent", workflow: "Research incentive review", reviewed: false, connected: false, entryActive: false },
  { id: "nice-survey", name: "Nice Survey", workflow: "Survey reward entry", reviewed: true, connected: true, entryActive: false },
  { id: "surveymonkey", name: "SurveyMonkey", workflow: "Survey payout review", reviewed: false, connected: false, entryActive: false },
  { id: "etsy", name: "Etsy", workflow: "Shop payout reconciliation", reviewed: false, connected: false, entryActive: false },
  { id: "ebay", name: "eBay", workflow: "Marketplace settlement review", reviewed: false, connected: false, entryActive: false },
  { id: "paypal", name: "PayPal", workflow: "Wallet transaction match", reviewed: true, connected: true, entryActive: false },
  { id: "venmo", name: "Venmo", workflow: "Peer payment entry", reviewed: false, connected: false, entryActive: false },
];

const platformDestinations: Record<string, { url: string; label: string }> = {
  "topsurveys": { url: "https://www.topsurveys.app/", label: "TopSurveys public page" },
  "fivesurveys": { url: "https://fivesurveys.com/", label: "Five Surveys public page" },
  "swagbucks": { url: "https://www.swagbucks.com/", label: "Swagbucks public page" },
  "inboxdollars": { url: "https://www.inboxdollars.com/", label: "InboxDollars public page" },
  "survey-junkie": { url: "https://www.surveyjunkie.com/", label: "Survey Junkie public page" },
  "branded-surveys": { url: "https://surveys.gobranded.com/", label: "Branded Surveys public page" },
  "prolific": { url: "https://app.prolific.com/", label: "Prolific public page" },
  "usertesting": { url: "https://www.usertesting.com/get-paid-to-test", label: "UserTesting public page" },
  "mechanical-turk": { url: "https://worker.mturk.com/", label: "Amazon Mechanical Turk public page" },
  "respondent": { url: "https://app.respondent.io/", label: "Respondent public page" },
  "nice-survey": { url: "https://www.nicesurveys.com/", label: "NiceSurveys public page" },
  "surveymonkey": { url: "https://www.surveymonkey.com/", label: "SurveyMonkey public page" },
  "etsy": { url: "https://www.etsy.com/", label: "Etsy public page" },
  "ebay": { url: "https://www.ebay.com/", label: "eBay public page" },
  "paypal": { url: "https://www.paypal.com/", label: "PayPal public page" },
  "venmo": { url: "https://venmo.com/", label: "Venmo public page" },
};

const browserShortcuts = [
  { label: "TopSurveys", url: platformDestinations.topsurveys.url },
  { label: "Prolific", url: platformDestinations.prolific.url },
  { label: "Respondent", url: platformDestinations.respondent.url },
  { label: "Etsy", url: platformDestinations.etsy.url },
  { label: "PayPal", url: platformDestinations.paypal.url },
];

type BrowserWorkspaceProps = {
  browserAddress: string;
  browserLoadedUrl: string;
  browserHistory: string[];
  browserHistoryIndex: number;
  onAddressChange: (value: string) => void;
  onNavigate: (url: string) => void;
  onHistoryMove: (direction: -1 | 1) => void;
  onDashboard: () => void;
};

function BrowserWorkspace({ browserAddress, browserLoadedUrl, browserHistory, browserHistoryIndex, onAddressChange, onNavigate, onHistoryMove, onDashboard }: BrowserWorkspaceProps) {
  function handleAddressSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const requestedUrl = browserAddress.trim();
    if (!/^https:\/\//i.test(requestedUrl)) return;
    onNavigate(requestedUrl);
  }

  return <div className="browser-app-shell">
    <header className="browser-app-header">
      <a className="browser-app-brand" href="#browser-home" onClick={(event) => { event.preventDefault(); onNavigate(""); }}><span className="bc-icon" aria-hidden="true">BC</span><span><b>Bonds</b> Browser</span></a>
      <div className="browser-app-status"><span className="signal-dot" />Public web workspace</div>
      <button className="browser-dashboard-button" onClick={onDashboard}><LayoutDashboard size={15} />Dashboard</button>
    </header>
    <div className="browser-app-layout">
      <aside className="browser-app-sidebar" aria-label="Browser menu">
        <button className="browser-menu-item is-active" onClick={() => onNavigate("")}><Globe2 size={16} /><span>Browser</span></button>
        <button className="browser-menu-item" onClick={onDashboard}><Home size={16} /><span>Dashboard</span></button>
        <div className="browser-menu-rule" />
        <p className="browser-menu-label">Quick pages</p>
        {browserShortcuts.map((shortcut) => <button className={browserLoadedUrl === shortcut.url ? "browser-shortcut is-active" : "browser-shortcut"} key={shortcut.label} onClick={() => onNavigate(shortcut.url)}>{shortcut.label}</button>)}
        <div className="browser-boundary-note"><LockKeyhole size={14} /><p>Public pages only. Bonds Studio does not store passwords, cookies, or third-party login sessions.</p></div>
      </aside>
      <main className="browser-app-main" id="browser-home">
        <div className="browser-tab-strip"><span className="browser-tab"><Globe2 size={14} />{browserLoadedUrl ? "Public web view" : "Browser start"}</span><button className="browser-new-tab" onClick={() => onNavigate("")}><Plus size={14} />New public view</button></div>
        <div className="browser-navigation-bar">
          <div className="browser-nav-controls"><button disabled={browserHistoryIndex <= 0} onClick={() => onHistoryMove(-1)} aria-label="Back"><ChevronLeft size={17} /></button><button disabled={browserHistoryIndex < 0 || browserHistoryIndex >= browserHistory.length - 1} onClick={() => onHistoryMove(1)} aria-label="Forward"><ChevronRight size={17} /></button><button disabled={!browserLoadedUrl} onClick={() => onNavigate(browserLoadedUrl)} aria-label="Reload public page"><RefreshCw size={15} /></button></div>
          <form className="browser-address-form" onSubmit={handleAddressSubmit}><Search size={15} /><input aria-label="Public website address" value={browserAddress} onChange={(event) => onAddressChange(event.target.value)} placeholder="https://example.com" /><button type="submit">Go</button></form>
          {browserLoadedUrl ? <a className="browser-external-link" href={browserLoadedUrl} target="_blank" rel="noreferrer">Open externally <ArrowUpRight size={14} /></a> : <span className="browser-external-placeholder">Public pages only</span>}
        </div>
        <section className="browser-public-page" aria-label="Public web page view">
          <div className="browser-page-notice"><span><LockKeyhole size={13} />{browserLoadedUrl ? "Public web view" : "Browser start"}</span><p>{browserLoadedUrl ? "Use the page’s own links when the provider permits framing. Use Open externally if it blocks embedded display or requires native sign-in." : "Choose a public platform below or enter a secure https address to begin."}</p></div>
          {browserLoadedUrl ? <iframe key={browserLoadedUrl} className="browser-page-frame" src={browserLoadedUrl} title="Bonds Browser public web view" sandbox="allow-forms allow-popups allow-scripts allow-same-origin" referrerPolicy="strict-origin-when-cross-origin" /> : <div className="browser-start-page"><div><span className="eyebrow"><Globe2 size={15} /> Public browser</span><h1>Start with a <em>public page.</em></h1><p>Bonds Browser is a public-web workspace. Choose a platform view, then use the provider’s own page navigation when embedding is available.</p></div><div className="browser-start-grid">{browserShortcuts.map((shortcut) => <button key={shortcut.label} onClick={() => onNavigate(shortcut.url)}><Globe2 size={16} /><span>{shortcut.label}</span><ArrowUpRight size={14} /></button>)}</div><div className="browser-start-boundary"><LockKeyhole size={15} />No passwords, browser cookies, or third-party login sessions are stored in Bonds Studio.</div></div>}
        </section>
      </main>
    </div>
  </div>;
}

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
  const [focusIndex, setFocusIndex] = useState(0);
  const [profileVisible, setProfileVisible] = useState(true);
  const [workspace, setWorkspace] = useState<AccountWorkspace | null>(null);
  const [minimizedWorkspace, setMinimizedWorkspace] = useState<AccountWorkspace | null>(null);
  const [appView, setAppView] = useState<"browser" | "dashboard">("browser");
  const [browserAddress, setBrowserAddress] = useState("");
  const [browserLoadedUrl, setBrowserLoadedUrl] = useState("");
  const [browserHistory, setBrowserHistory] = useState<string[]>([]);
  const [browserHistoryIndex, setBrowserHistoryIndex] = useState(-1);
  const focusedRegion = simulatedFocusProfiles[focusIndex];
  const workspaceDestination = workspace ? platformDestinations[workspace.platformId] : null;

  const setActivity = (message: string) => setNotice(message);

  useEffect(() => {
    if (paused) return;
    const focusInterval = window.setInterval(() => setFocusIndex((index) => (index + 1) % simulatedFocusProfiles.length), 3000);
    return () => window.clearInterval(focusInterval);
  }, [paused]);

  function resetOrbit() {
    setPaused(false);
    setCenterObject("Earth");
    setPlayback("1 day / second");
    setFocusIndex(0);
    setActivity("Orbit reset. The viewport sensor returned to New York.");
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

  function openWorkspace(project: LedgerProject) {
    const existing = workspace?.platformId === project.id ? workspace : minimizedWorkspace?.platformId === project.id ? minimizedWorkspace : null;
    const nextWorkspace = existing || {
      platformId: project.id,
      platformName: project.name,
      browserType: "Dedicated workspace",
      accounts: [{ id: `${project.id}-account-1`, label: "Account 1", connected: project.connected }],
      activeAccountId: `${project.id}-account-1`,
      expanded: false,
      webFocus: false,
    };
    setWorkspace(nextWorkspace);
    setMinimizedWorkspace(null);
    setActivity(`${project.name} local account workspace opened. No third-party login is performed.`);
  }

  function minimizeWorkspace() {
    if (!workspace) return;
    setMinimizedWorkspace(workspace);
    setWorkspace(null);
    setActivity(`${workspace.platformName} workspace minimized; local account state remains available in this page session.`);
  }

  function addWorkspaceAccount() {
    if (!workspace) return;
    const nextNumber = workspace.accounts.length + 1;
    const account = { id: `${workspace.platformId}-account-${nextNumber}`, label: `Account ${nextNumber}`, connected: false };
    setWorkspace({ ...workspace, accounts: [...workspace.accounts, account], activeAccountId: account.id });
    setActivity(`${workspace.platformName} account slot ${nextNumber} added to the local workspace.`);
  }

  function connectWorkspaceAccount() {
    if (!workspace) return;
    const activeAccount = workspace.accounts.find((account) => account.id === workspace.activeAccountId);
    const nextConnected = !activeAccount?.connected;
    const accounts = workspace.accounts.map((account) => account.id === workspace.activeAccountId ? { ...account, connected: nextConnected } : account);
    setWorkspace({ ...workspace, accounts });
    setLedgerProjects((projects) => projects.map((project) => project.id === workspace.platformId ? { ...project, connected: accounts.some((account) => account.connected) } : project));
    setActivity(`${workspace.platformName} ${activeAccount?.label || "account"} is ${nextConnected ? "connected" : "disconnected"} in the local workspace model.`);
  }

  function startLedgerEntry(id: string) {
    const project = ledgerProjects.find((item) => item.id === id);
    setLedgerProjects((projects) => projects.map((item) => item.id === id ? { ...item, connected: true, entryActive: true } : item));
    if (project) openWorkspace({ ...project, connected: true });
    setActivity(`${project?.name || "Platform"} data-entry task started. Its local account workspace is available for this session.`);
  }

  function stopLedgerEntry(id: string) {
    const project = ledgerProjects.find((item) => item.id === id);
    setLedgerProjects((projects) => projects.map((item) => item.id === id ? { ...item, entryActive: false } : item));
    setActivity(`${project?.name || "Platform"} entry stopped safely. The platform channel remains available for review.`);
  }

  function navigateBrowser(url: string) {
    const normalizedUrl = url.trim();
    if (!normalizedUrl) {
      setBrowserAddress("");
      setBrowserLoadedUrl("");
      setBrowserHistoryIndex(-1);
      setActivity("Browser start page opened. Choose a public platform or enter a secure URL.");
      return;
    }
    if (!/^https:\/\//i.test(normalizedUrl)) {
      setActivity("Only secure https public URLs can be opened in the local browser workspace.");
      return;
    }
    setBrowserAddress(normalizedUrl);
    setBrowserLoadedUrl(normalizedUrl);
    const nextHistory = [...browserHistory.slice(0, browserHistoryIndex + 1), normalizedUrl];
    setBrowserHistory(nextHistory);
    setBrowserHistoryIndex(nextHistory.length - 1);
  }

  function moveBrowserHistory(direction: -1 | 1) {
    const nextIndex = browserHistoryIndex + direction;
    const nextUrl = browserHistory[nextIndex];
    if (!nextUrl) return;
    setBrowserHistoryIndex(nextIndex);
    setBrowserAddress(nextUrl);
    setBrowserLoadedUrl(nextUrl);
  }

  if (appView === "browser") {
    return <BrowserWorkspace browserAddress={browserAddress} browserLoadedUrl={browserLoadedUrl} browserHistory={browserHistory} browserHistoryIndex={browserHistoryIndex} onAddressChange={setBrowserAddress} onNavigate={navigateBrowser} onHistoryMove={moveBrowserHistory} onDashboard={() => setAppView("dashboard")} />;
  }

  return (
    <div className="orbital-app">
      <header className="site-header">
        <a className="brand-lockup" href="#orbit" aria-label="Bonds Studio home"><span className="bc-icon" aria-hidden="true">BC</span><span className="brand-wordmark"><b>Bonds</b><i>Studio</i></span></a>
        <nav className="desktop-nav" aria-label="Header menu">
          {navLinks.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="dashboard-header-actions"><button className="browser-return-button" onClick={() => setAppView("browser")}><Globe2 size={15} />Browser</button><button className="header-menu-button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="header-menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}<span>Menu</span>
        </button></div>
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
            {profileVisible && <section className="location-renderer" aria-labelledby="orbit-title" aria-live="polite" key={focusedRegion.id}>
              <div className="location-renderer-head"><span className="sensor-dot" />Viewport sensor <b>Focus {String(focusIndex + 1).padStart(2, "0")} / {String(simulatedFocusProfiles.length).padStart(2, "0")} · simulated</b></div>
              <button className="sensor-panel-close" onClick={() => { setProfileVisible(false); setActivity("Viewport profile hidden. The red sensor remains active over Earth."); }} aria-label="Close geographic profile"><X size={14} /></button>
              <h1 id="orbit-title">{focusedRegion.name}<em>{focusedRegion.context} · {focusedRegion.coordinates}</em></h1>
              <dl className="location-detail-grid">
                {focusedRegion.details.map((detail) => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>)}
              </dl>
            </section>}
          </div>

          <div className="earth-stage" aria-label={`Interactive Earth orbital visualization. Fixed viewport sensor focused on ${focusedRegion.name}.`}>
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="orbit-ring ring-three" />
            <div className={`earth-globe ${paused ? "is-paused" : ""}`} style={{ backgroundImage: `url(${earthTexture})` }}>
              <span className="earth-shine" />
            </div>
            <div className="sensor-beam" aria-hidden="true"><span className="sensor-target" /></div>
            <span className="moon" />
            <div className="earth-label"><span>Sensor focus · {focusedRegion.name}</span><b>{focusedRegion.coordinates}</b></div>
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

          <div className="grounding-panel"><span>Grounding simulation · sensor focus</span><strong>{focusedRegion.name}, {focusedRegion.context}</strong><button onClick={() => setActivity(`Grounding simulation prepared for ${focusedRegion.name}, ${focusedRegion.context}.`)}>Street View <ArrowUpRight size={14} /></button></div>
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

        <CongressCommandCenter onActivity={setActivity} />

        <section className="module-section creative-section" id="creative-projects" aria-labelledby="creative-title"><span className="section-index" aria-hidden="true">03</span>
          <div className="section-heading"><div><span className="eyebrow"><Sparkles size={15} /> Creative Projects</span><h2 id="creative-title">Build the next <em>small world.</em></h2></div><p>Select a medium, give it an intention, then make its first room.</p></div>
          <div className="creative-grid">
            {creativeProjects.map((project) => { const Icon = project.icon; const active = activeProject === project.id; return <article className={`creative-card ${project.tone} ${active ? "is-active" : ""}`} key={project.id}><div className="project-card-top"><span className="project-code">{project.code}</span><Icon size={20} /></div><h3>{project.name}</h3><p>{project.detail}</p><button onClick={() => { setActiveProject(project.id); setActivity(`${project.name} project selected. The launch board is ready.`); }}>{active ? "Selected" : "Start project"}<ArrowUpRight size={15} /></button></article>; })}
            <article className="create-anything-card"><span className="eyebrow">Blank project</span><h3>Make a room for the unplanned.</h3><button onClick={() => setActivity("Blank project board prepared. Choose a medium to continue.")}><Plus size={17} />New project</button></article>
          </div>
        </section>

        <section className="module-section ledger-section" id="ledger-projects" aria-labelledby="ledger-title"><span className="section-index" aria-hidden="true">04</span>
          <div className="section-heading"><div><span className="eyebrow"><CircleDot size={15} /> Ledger Projects</span><h2 id="ledger-title">Keep every ledger <em>platform in view.</em></h2></div><p>A named platform list for rewards, research, freelance, marketplace, and payment channels—each with dedicated entry, review, and session controls.</p></div>
          <div className="ledger-shell">
            <div className="ledger-summary"><div><span>Projects</span><b>{ledgerProjects.length.toString().padStart(2, "0")}</b></div><div><span>Reviewed</span><b>{ledgerProjects.filter((project) => project.reviewed).length.toString().padStart(2, "0")}</b></div><div><span>Sessions</span><b>{ledgerProjects.filter((project) => project.connected).length.toString().padStart(2, "0")}</b></div><p><ShieldCheck size={17} />Review holds remain visible when evidence is missing.</p></div>
            <div className="ledger-list">{ledgerProjects.map((project, index) => <article className={`ledger-row ${project.entryActive ? "is-entry-running" : ""}`} key={project.id}><span className="ledger-index">{(index + 1).toString().padStart(2, "0")}</span><div className="ledger-project-name"><h3>{project.name}</h3><p>{project.workflow} · {project.entryActive ? "Data-entry task running" : project.connected ? "Local account connected" : "Open an account workspace to connect"}</p></div><span className={`ledger-state ${project.reviewed ? "is-reviewed" : ""}`}><i />{project.reviewed ? "Reviewed" : "Pending"}</span><div className="ledger-actions"><button className={project.connected ? "is-connected" : ""} onClick={() => openWorkspace(project)}>{project.connected ? "Connected" : "Connect"}</button><button className="entry-start" disabled={project.entryActive} onClick={() => startLedgerEntry(project.id)}><Play size={13} />Start Entry</button><button className="entry-stop" disabled={!project.entryActive} onClick={() => stopLedgerEntry(project.id)}><Pause size={13} />Stop Entry</button><button className="review-action" onClick={() => toggleLedgerReview(project.id)}>{project.reviewed ? "Reopen" : "Review"}<ArrowUpRight size={14} /></button></div></article>)}</div>
            <form className="ledger-add" onSubmit={addLedgerProject}><label htmlFor="ledger-name">Add ledger project</label><div><input id="ledger-name" value={ledgerName} onChange={(event) => setLedgerName(event.target.value)} placeholder="Platform or account name" /><button type="submit"><Plus size={16} />Add</button></div></form>
          </div>
        </section>

        <section className="notice-bar" aria-live="polite"><span className="signal-dot" />{notice}<button onClick={() => setActivity("Studio status cleared. Ready for the next action.")}>Clear</button></section>
      </main>

      {workspace && <aside className={`account-workspace-window ${workspace.expanded ? "is-expanded" : ""} ${workspace.webFocus ? "is-web-focus" : ""}`} aria-label={`${workspace.platformName} account workspace`}>
        <header className="workspace-window-head"><div><span className="sensor-dot" />Local account workspace</div><div className="workspace-window-controls"><button onClick={() => setWorkspace({ ...workspace, expanded: !workspace.expanded })} aria-label={workspace.expanded ? "Reduce account workspace" : "Expand account workspace"}><Maximize2 size={14} /></button><button onClick={minimizeWorkspace} aria-label="Minimize account workspace"><Minus size={15} /></button><button onClick={minimizeWorkspace} aria-label="Close and preserve account workspace"><X size={14} /></button></div></header>
        <div className="workspace-window-body"><div className="workspace-platform-line"><strong>{workspace.platformName}</strong><span>Platform-specific workspace</span></div><div className="workspace-account-tabs" role="tablist" aria-label={`${workspace.platformName} accounts`}>{workspace.accounts.map((account) => <button key={account.id} className={workspace.activeAccountId === account.id ? "is-active" : ""} onClick={() => setWorkspace({ ...workspace, activeAccountId: account.id })}>{account.label}<i className={account.connected ? "is-connected" : ""} /></button>)}<button className="add-account-button" onClick={addWorkspaceAccount}>+ Add another</button></div><label className="workspace-browser-type">Browser type<select value={workspace.browserType} onChange={(event) => setWorkspace({ ...workspace, browserType: event.target.value })}><option>Dedicated workspace</option><option>Isolated workspace</option><option>Read-only workspace</option></select></label><div className="workspace-browser-surface"><div className="workspace-page-bar"><span><Globe2 size={13} />{workspaceDestination?.label || "No destination configured"}</span><div>{workspaceDestination && <button className="workspace-web-focus-button" onClick={() => setWorkspace({ ...workspace, webFocus: !workspace.webFocus })} aria-label={workspace.webFocus ? "Reduce web page" : "Expand web page"}><Maximize2 size={13} />{workspace.webFocus ? "Reduce" : "Web focus"}</button>}{workspaceDestination && <a href={workspaceDestination.url} target="_blank" rel="noreferrer">Open platform <ArrowUpRight size={13} /></a>}</div></div>{workspaceDestination ? <iframe className="workspace-page-frame" src={workspaceDestination.url} title={workspaceDestination.label} sandbox="allow-forms allow-popups allow-scripts allow-same-origin" referrerPolicy="strict-origin-when-cross-origin" onLoad={() => setActivity(`${workspace.platformName} public page loaded. Use its in-page navigation or Open platform if framing is restricted.`)} /> : <p className="workspace-page-empty">A public platform destination has not been configured for this custom ledger project.</p>}<div className="workspace-page-status"><div><span>{workspace.platformName} · {workspace.accounts.find((account) => account.id === workspace.activeAccountId)?.label}</span><strong>{workspace.accounts.find((account) => account.id === workspace.activeAccountId)?.connected ? "Connected" : "Ready to connect"}</strong></div><p>Use the platform’s page controls to continue when the provider permits framing. If it blocks framing, use Open platform.</p><button className={workspace.accounts.find((account) => account.id === workspace.activeAccountId)?.connected ? "workspace-connect is-connected" : "workspace-connect"} onClick={connectWorkspaceAccount}>{workspace.accounts.find((account) => account.id === workspace.activeAccountId)?.connected ? "Connected" : "Mark connected"}</button></div></div></div>
      </aside>}
      {minimizedWorkspace && <button className="workspace-minimized-dock" onClick={() => { setWorkspace(minimizedWorkspace); setMinimizedWorkspace(null); }}><span className="sensor-dot" />{minimizedWorkspace.platformName} · resume session <Maximize2 size={14} /></button>}

      <footer className="site-footer"><BrandIdentity footer /><p>Bonds Studio · orbit, make, and keep a record.</p><a href="#orbit">Back to orbit <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
