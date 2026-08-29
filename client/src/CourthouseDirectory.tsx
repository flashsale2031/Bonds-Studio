import { FormEvent, useMemo, useState } from "react";
import { ArrowUpRight, Building2, Clipboard, ExternalLink, MapPin, Phone, Search, ShieldCheck, UsersRound, X } from "lucide-react";
import { COURTHOUSE_DATA_UPDATED, courthouseContacts, type CourthouseContact } from "./data/courthouseContacts";

type CourthouseDirectoryProps = {
  onActivity?: (message: string) => void;
};

type CourtTypeFilter = "All" | "Appeals" | "District" | "Bankruptcy" | "Probation" | "Defender";
type ContactRoute = "all" | "call" | "directions";

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function cleanPhone(phone: string | null) {
  return phone?.replace(/[^+\d]/g, "") || "";
}

function displayType(record: CourthouseContact) {
  const text = `${record.courtName} ${record.courtType}`.toLowerCase();
  if (text.includes("bankruptcy")) return "Bankruptcy";
  if (text.includes("probation") || text.includes("pretrial")) return "Probation";
  if (text.includes("defender")) return "Defender";
  if (text.includes("appeals") || text.includes("circuit")) return "Appeals";
  if (text.includes("district")) return "District";
  return "Federal court";
}

export default function CourthouseDirectory({ onActivity }: CourthouseDirectoryProps) {
  const [command, setCommand] = useState("");
  const [query, setQuery] = useState("");
  const [type, setType] = useState<CourtTypeFilter>("All");
  const [state, setState] = useState("All states and territories");
  const [route, setRoute] = useState<ContactRoute>("all");
  const [selectedId, setSelectedId] = useState(courthouseContacts[0]?.id ?? "");
  const [visibleCount, setVisibleCount] = useState(30);
  const [copiedValue, setCopiedValue] = useState("");

  const stateOptions = useMemo(
    () => Array.from(new Set(courthouseContacts.map((record) => record.state))).sort((a, b) => a.localeCompare(b)),
    [],
  );

  const filteredRecords = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return courthouseContacts.filter((record) => {
      if (type !== "All" && displayType(record) !== type) return false;
      if (state !== "All states and territories" && record.state !== state) return false;
      if (route === "call" && !record.phone) return false;
      if (route === "directions" && !record.directions) return false;
      if (!needle) return true;
      return [record.name, record.courtName, record.courtType, record.jurisdiction, record.address, record.city, record.state, record.zip]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [query, route, state, type]);

  const selectedRecord = useMemo(
    () => filteredRecords.find((record) => record.id === selectedId) || filteredRecords[0],
    [filteredRecords, selectedId],
  );
  const visibleRecords = filteredRecords.slice(0, visibleCount);
  const phoneCount = courthouseContacts.filter((record) => record.phone).length;
  const directionsCount = courthouseContacts.filter((record) => record.directions).length;

  function chooseRecord(record: CourthouseContact) {
    setSelectedId(record.id);
    onActivity?.(`${record.name} selected in the courthouse contact register.`);
  }

  function copyValue(value: string, label: string) {
    if (!value) return;
    void navigator.clipboard?.writeText(value);
    setCopiedValue(value);
    onActivity?.(`${label} copied for the selected courthouse.`);
    window.setTimeout(() => setCopiedValue((current) => (current === value ? "" : current)), 1600);
  }

  function runCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextCommand = command.trim();
    if (!nextCommand) return;
    setQuery(nextCommand);
    setVisibleCount(30);
    onActivity?.(`AI command interpreted as a federal courthouse directory search: ${nextCommand}`);
    setCommand("");
  }

  function resetFilters() {
    setCommand("");
    setQuery("");
    setType("All");
    setState("All states and territories");
    setRoute("all");
    setVisibleCount(30);
    onActivity?.("Federal courthouse directory filters reset.");
  }

  return (
    <section className="module-section civic-section courthouse-section" id="courthouses" aria-labelledby="courthouse-title">
      <span className="section-index" aria-hidden="true">07</span>
      <div className="section-heading civic-heading">
        <div>
          <span className="eyebrow"><Building2 size={15} /> Courthouse register</span>
          <h2 id="courthouse-title">Find the official <em>front door.</em></h2>
        </div>
        <p>Search the official U.S. Courts locator by courthouse, jurisdiction, address, state, or court service, then open directions or call the published public line.</p>
      </div>

      <div className="civic-command-bar courthouse-command-bar">
        <div className="civic-command-label"><span className="signal-dot" />AI command center · courthouse layer</div>
        <form className="civic-command-form" onSubmit={runCommand}>
          <Search size={16} aria-hidden="true" />
          <input value={command} onChange={(event) => setCommand(event.target.value)} placeholder="Try: San Francisco, bankruptcy, or a courthouse name" aria-label="Search the courthouse directory" />
          <button type="submit"><ArrowUpRight size={15} />Run command</button>
        </form>
        <p>Searches narrow the read-only federal locator locally. No case information is collected and no contact detail is inferred.</p>
      </div>

      <div className="civic-metrics courthouse-metrics" aria-label="Courthouse directory coverage">
        <div><span>Locator records</span><strong>{courthouseContacts.length.toLocaleString()}</strong><small>federal court locations</small></div>
        <div><span>Addresses</span><strong>{courthouseContacts.filter((record) => record.address && record.city && record.state && record.zip).length.toLocaleString()}</strong><small>street + postal fields</small></div>
        <div><span>Public phones</span><strong>{phoneCount.toLocaleString()}</strong><small>published phone routes</small></div>
        <div><span>Directions</span><strong>{directionsCount.toLocaleString()}</strong><small>map routes</small></div>
      </div>

      <div className="civic-register courthouse-register">
        <div className="civic-register-toolbar">
          <div className="civic-filter-row" role="tablist" aria-label="Filter by court type">
            {(["All", "Appeals", "District", "Bankruptcy", "Probation", "Defender"] as CourtTypeFilter[]).map((item) => (
              <button key={item} className={type === item ? "is-active" : ""} onClick={() => { setType(item); setVisibleCount(30); }} role="tab" aria-selected={type === item}>{item === "All" ? "All courts" : item}</button>
            ))}
          </div>
          <div className="civic-selects">
            <label><span className="sr-only">State or territory</span><select value={state} onChange={(event) => { setState(event.target.value); setVisibleCount(30); }}><option>All states and territories</option>{stateOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span className="sr-only">Contact route</span><select value={route} onChange={(event) => { setRoute(event.target.value as ContactRoute); setVisibleCount(30); }}><option value="all">All contact routes</option><option value="call">Has public phone</option><option value="directions">Has directions</option></select></label>
          </div>
        </div>

        <div className="civic-search-row">
          <div className="civic-inline-search"><Search size={15} /><input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(30); }} placeholder="Filter by courthouse, court, address, city, state, or ZIP" aria-label="Filter courthouse records" /></div>
          <div className="civic-search-summary"><span>{filteredRecords.length.toLocaleString()} matches</span>{(query || type !== "All" || state !== "All states and territories" || route !== "all") && <button onClick={resetFilters}><X size={13} />Clear</button>}</div>
        </div>

        <div className="civic-content-grid">
          <div className="civic-list-panel">
            <div className="civic-list-head"><span>Federal location register</span><span>{Math.min(visibleCount, filteredRecords.length).toLocaleString()} / {filteredRecords.length.toLocaleString()}</span></div>
            <div className="civic-list" role="list" aria-label="Courthouse records">
              {visibleRecords.map((record) => (
                <button className={`civic-row courthouse-row ${selectedRecord?.id === record.id ? "is-selected" : ""}`} key={record.id} onClick={() => chooseRecord(record)} role="listitem">
                  <span className="civic-avatar">{initials(record.name)}</span>
                  <span className="civic-row-copy"><strong>{record.name}</strong><small>{record.courtName} · {record.city}, {record.state} {record.zip}</small></span>
                  <span className="courthouse-type-chip">{displayType(record).toUpperCase()}</span>
                  <span className="civic-row-phone">{record.phone || "No phone"}</span>
                  <ArrowUpRight size={15} className="civic-row-arrow" />
                </button>
              ))}
              {!visibleRecords.length && <div className="civic-empty"><Search size={20} /><strong>No courthouse matches this command.</strong><p>Try a city, state, ZIP, court type, or reset the filters.</p><button onClick={resetFilters}>Reset register</button></div>}
            </div>
            {visibleCount < filteredRecords.length && <button className="civic-load-more" onClick={() => setVisibleCount((count) => count + 30)}>Load next 30 records <ArrowUpRight size={15} /></button>}
          </div>

          {selectedRecord && <aside className="civic-detail-panel courthouse-detail-panel" aria-label={`Contact details for ${selectedRecord.name}`}>
            <div className="civic-detail-top"><div className="civic-detail-kicker"><span className="signal-dot" />{displayType(selectedRecord)} location</div><span className="civic-detail-id">{selectedRecord.id}</span></div>
            <div className="civic-detail-person"><div className="civic-detail-avatar">{initials(selectedRecord.name)}</div><div><h3>{selectedRecord.name}</h3><p>{displayType(selectedRecord)} · {selectedRecord.state}</p></div></div>
            <div className="civic-detail-tags"><span>{selectedRecord.city}, {selectedRecord.state}</span><span>{selectedRecord.zip}</span><span>{selectedRecord.courtName.split(" - ")[0]}</span></div>

            <div className="civic-contact-actions">
              <div className="civic-contact-block"><div><span className="civic-contact-icon"><MapPin size={15} /></span><div><small>Street address</small><strong>{selectedRecord.address}</strong><span>{selectedRecord.city}, {selectedRecord.state} {selectedRecord.zip}</span></div></div><button onClick={() => copyValue(`${selectedRecord.address}, ${selectedRecord.city}, ${selectedRecord.state} ${selectedRecord.zip}`, "Courthouse address")} aria-label="Copy courthouse address"><Clipboard size={14} /></button></div>
              <div className="civic-contact-block"><div><span className="civic-contact-icon"><Phone size={15} /></span><div><small>Public phone</small><strong>{selectedRecord.phone || "Not listed in source"}</strong></div></div>{selectedRecord.phone && <div className="civic-action-pair"><a href={`tel:${cleanPhone(selectedRecord.phone)}`} aria-label={`Call ${selectedRecord.name}`}>Call</a><button onClick={() => copyValue(selectedRecord.phone || "", "Phone number")} aria-label="Copy phone number"><Clipboard size={14} /></button></div>}</div>
              <div className="civic-contact-block"><div><span className="civic-contact-icon"><Building2 size={15} /></span><div><small>Jurisdiction / court</small><strong>{selectedRecord.courtName}</strong><span>{selectedRecord.courtType || "United States Court"}</span></div></div></div>
            </div>

            <div className="civic-official-links"><p>Official routes</p><a href={selectedRecord.sourceUrl} target="_blank" rel="noreferrer"><Building2 size={14} />Open official court listing <ExternalLink size={13} /></a>{selectedRecord.directions && <a href={selectedRecord.directions} target="_blank" rel="noreferrer"><MapPin size={14} />Get directions <ExternalLink size={13} /></a>}{selectedRecord.website !== selectedRecord.sourceUrl && <a href={selectedRecord.website} target="_blank" rel="noreferrer"><ExternalLink size={14} />Open court website <ExternalLink size={13} /></a>}</div>

            <div className="civic-source-note"><ShieldCheck size={15} /><p><strong>Source boundary.</strong> {copiedValue ? "Copied to your clipboard." : `Verified against the U.S. Courts Federal Court Finder dated ${COURTHOUSE_DATA_UPDATED}. This is an official federal court and judiciary service-location register, not a complete directory of state, county, municipal, or tribal courthouses.`}</p></div>
          </aside>}
        </div>
      </div>

      <div className="civic-footer-note"><UsersRound size={15} /><span>Coverage: {courthouseContacts.length.toLocaleString()} official federal court and judiciary service-location records, each with an address field. State, county, municipal, tribal, and territorial court systems are maintained separately and are not claimed as covered by this federal source.</span><a href="https://www.uscourts.gov/federal-court-finder/find" target="_blank" rel="noreferrer">Verify on USCourts.gov <ExternalLink size={13} /></a></div>
    </section>
  );
}
