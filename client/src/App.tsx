/** Design: The Archivist’s Desk — forest-green authority, parchment space, and clear record states. */
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  FileCheck2,
  Menu,
  MoreHorizontal,
  Plus,
  ShieldCheck,
  X,
} from "lucide-react";

const emblem = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663911438743/mwRTbUifqHHWAZqF.png";
const heroImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663911438743/UwCfRksuNojWZBMY.jpg";
const detailImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663911438743/nybOPqrKlCwTJKQx.jpg";
const abstractImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663911438743/KmdlErUhEUsdrggw.jpg";

const navItems = ["Overview", "Ledger", "Accounts", "Review queue", "Notes"];

const reviewRows = [
  { code: "01", name: "Account review", description: "Inspect balance, source, and current evidence.", tone: "Clear" },
  { code: "02", name: "Balance entry", description: "Capture a verified balance into the register.", tone: "Ready" },
  { code: "03", name: "Reconciliation", description: "Compare the platform state with the stored record.", tone: "Review" },
];

export default function App() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeReview, setActiveReview] = useState<string | null>(null);

  return (
    <div className="app-shell">
      <aside className={`index-rail ${isMenuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        <a className="brand-lockup" href="#top" aria-label="Bonds Studio home">
          <img className="brand-emblem" src={emblem} alt="" />
          <span className="brand-name">Bonds<span>Studio</span></span>
        </a>

        <nav className="rail-nav">
          <p className="rail-label">Workspace</p>
          {navItems.map((item) => (
            <button
              className={`rail-link ${activeNav === item ? "is-active" : ""}`}
              key={item}
              onClick={() => {
                setActiveNav(item);
                setIsMenuOpen(false);
              }}
            >
              <span>{item}</span>
              {activeNav === item && <ChevronRight size={15} strokeWidth={1.8} />}
            </button>
          ))}
        </nav>

        <div className="rail-footer">
          <div className="rail-mark" aria-hidden="true">BS</div>
          <div>
            <p>Ledger Edition</p>
            <span>Release 3.7</span>
          </div>
        </div>
      </aside>

      <main id="top" className="workspace">
        <header className="mobile-bar">
          <a className="brand-lockup" href="#top" aria-label="Bonds Studio home">
            <img className="brand-emblem" src={emblem} alt="" />
            <span className="brand-name">Bonds<span>Studio</span></span>
          </a>
          <button className="icon-button" onClick={() => setIsMenuOpen((current) => !current)} aria-label="Toggle navigation" aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        <section className="eyebrow-row" aria-label="Page context">
          <p><span className="gold-square" aria-hidden="true" />Ledger workspace <span className="slash">/</span> {activeNav}</p>
          <p className="session-copy"><CircleDot size={14} /> Local session · protected</p>
        </section>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-index" aria-hidden="true"><span>01</span><i /><p>Open ledger</p></div>
          <div className="hero-copy">
            <div className="hero-brand" aria-label="Bonds Studio Ledger Edition">
              <img src={emblem} alt="" />
              <div><strong>Bonds<span>Studio</span></strong><p><i /> Verified ledger workspace</p></div>
            </div>
            <p className="section-kicker">The master register</p>
            <h1 id="hero-title">Every record,<br /><em>accounted for.</em></h1>
            <p className="hero-intro">A careful workspace for structured projects, account evidence, and verification flows that preserve human judgment.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#review-queue">Review ledger <ArrowUpRight size={16} /></a>
              <a className="text-action" href="#method">Inspect the method <ChevronRight size={15} /></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <img src={heroImage} alt="" />
            <div className="hero-art-rule" />
            <p>Account ledger · 01</p>
          </div>
        </section>

        <section className="metrics" aria-label="Ledger summary">
          <article>
            <p>Open platforms</p>
            <strong>06</strong>
            <span>Awaiting an account record</span>
          </article>
          <article>
            <p>Review state</p>
            <strong className="text-forest">Clear</strong>
            <span><Check size={13} /> All checks are current</span>
          </article>
          <article>
            <p>Active task</p>
            <strong>—</strong>
            <span>No workflow is in motion</span>
          </article>
          <article className="metrics-note">
            <ShieldCheck size={20} />
            <p><b>Review is a feature.</b> The workspace pauses when evidence is insufficient.</p>
          </article>
        </section>

        <section className="register-head" id="review-queue">
          <span className="record-index" aria-hidden="true">02</span>
          <div>
            <p className="section-kicker">Entry desk</p>
            <h2>Start from the evidence.</h2>
          </div>
          <button className="button button-quiet"><Plus size={17} /> New register</button>
        </section>

        <section className="review-list" aria-label="Review workflows">
          {reviewRows.map((row) => (
            <article className={`review-row ${activeReview === row.name ? "is-selected" : ""}`} key={row.code}>
              <div className="review-code">{row.code}</div>
              <div className="review-main">
                <h3>{row.name}</h3>
                <p>{row.description}</p>
              </div>
              <div className="review-status"><span className="status-dot" />{activeReview === row.name ? "Selected" : row.tone}</div>
              <button className="review-button" onClick={() => setActiveReview(row.name)} aria-label={`Open ${row.name}`}>
                <ArrowUpRight size={18} />
              </button>
            </article>
          ))}
        </section>

        <section className="method-section" id="method" aria-labelledby="method-title">
          <span className="record-index" aria-hidden="true">03</span>
          <div className="method-copy">
            <p className="section-kicker">The studio method</p>
            <h2 id="method-title">Structure first.<br />Automation second.</h2>
            <p>Each workflow treats context as evidence, not a guess. The register makes room to inspect, verify, and document before committing an entry.</p>
            <div className="method-points">
              <div><FileCheck2 size={17} /><span>Source-aware records</span></div>
              <div><ShieldCheck size={17} /><span>Explicit review holds</span></div>
              <div><MoreHorizontal size={17} /><span>Calm, reversible actions</span></div>
            </div>
          </div>
          <div className="method-art" aria-hidden="true">
            <img className="detail-image" src={detailImage} alt="" />
            <img className="abstract-image" src={abstractImage} alt="" />
            <div className="evidence-stamp"><span className="gold-square" /> Evidence review<br /><b>Required before record</b></div>
            <div className="art-caption">A record has a history.<br />Keep it legible.</div>
          </div>
        </section>

        <footer>
          <a className="brand-lockup footer-lockup" href="#top"><img className="brand-emblem" src={emblem} alt="" /><span className="brand-name">Bonds<span>Studio</span></span></a>
          <p>Careful digital ledgers for work that deserves a record.</p>
          <a href="#top">Back to top <ArrowUpRight size={14} /></a>
        </footer>
      </main>
    </div>
  );
}
