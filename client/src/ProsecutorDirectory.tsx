import { FormEvent, useMemo, useState } from "react";
import { ArrowUpRight, Building2, Clipboard, ExternalLink, Mail, MapPin, Phone, Search, ShieldCheck, UsersRound, X } from "lucide-react";
import { prosecutorContacts, PROSECUTOR_DATA_UPDATED, type ProsecutorContact } from "./data/prosecutorContacts";
import { usAttorneyContacts, US_ATTORNEY_DATA_UPDATED, type USAttorneyContact } from "./data/usAttorneyContacts";

type ProsecutorRecord = ProsecutorContact | USAttorneyContact;
type ProsecutorScope = "All" | "Local prosecutor" | "Federal prosecutor";
type ProsecutorRoute = "all" | "call" | "online";

type ProsecutorDirectoryProps = {
  onActivity?: (message: string) => void;
};

const localProsecutorSource = "https://en.wikipedia.org/wiki/List_of_district_attorneys_in_the_United_States";
const federalProsecutorSource = "https://www.justice.gov/usao/us-attorneys-listing";

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function cleanPhone(phone: string | null) {
  return phone?.replace(/[^+\d]/g, "") || "";
}

function isFederal(record: ProsecutorRecord): record is USAttorneyContact {
  return record.contactType === "Federal prosecutor";
}

export default function ProsecutorDirectory({ onActivity }: ProsecutorDirectoryProps) {
  const records = useMemo<ProsecutorRecord[]>(() => [...prosecutorContacts, ...usAttorneyContacts], []);
  const [command, setCommand] = useState("");
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<ProsecutorScope>("All");
  const [state, setState] = useState("All jurisdictions");
  const [route, setRoute] = useState<ProsecutorRoute>("all");
  const [selectedId, setSelectedId] = useState(records[0]?.id ?? "");
  const [visibleCount, setVisibleCount] = useState(30);
  const [copiedValue, setCopiedValue] = useState("");

  const stateOptions = useMemo(
    () => Array.from(new Set(records.map((record) => record.state))).sort((a, b) => a.localeCompare(b)),
    [records],
  );

  const filteredRecords = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return records.filter((record) => {
      if (scope !== "All" && record.contactType !== scope) return false;
      if (state !== "All jurisdictions" && record.state !== state) return false;
      if (route === "call" && !record.phone) return false;
      if (route === "online" && !record.sourceUrl && !record.website && !record.contactForm) return false;
      if (!needle) return true;
      return [record.name, record.role, record.jurisdiction, record.state, record.contactType, record.sourceLabel]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [query, records, route, scope, state]);

  const selectedRecord = useMemo(
    () => filteredRecords.find((record) => record.id === selectedId) || filteredRecords[0],
    [filteredRecords, selectedId],
  );
  const visibleRecords = filteredRecords.slice(0, visibleCount);
  const localCount = prosecutorContacts.length;
  const federalCount = usAttorneyContacts.length;
  const directEmailCount = records.filter((record) => record.email).length;

  function chooseRecord(record: ProsecutorRecord) {
    setSelectedId(record.id);
    onActivity?.(`${record.name} selected in the prosecutor contact register.`);
  }

  function copyValue(value: string, label: string) {
    if (!value) return;
    void navigator.clipboard?.writeText(value);
    setCopiedValue(value);
    onActivity?.(`${label} copied for the selected prosecutor.`);
    window.setTimeout(() => setCopiedValue((current) => (current === value ? "" : current)), 1600);
  }

  function runCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextCommand = command.trim();
    if (!nextCommand) return;
    setQuery(nextCommand);
    setVisibleCount(30);
    onActivity?.(`AI command interpreted as a prosecutor directory search: ${nextCommand}`);
    setCommand("");
  }

  function resetFilters() {
    setCommand("");
    setQuery("");
    setScope("All");
    setState("All jurisdictions");
    setRoute("all");
    setVisibleCount(30);
    onActivity?.("Prosecutor directory filters reset.");
  }

  return (
    <section className="module-section civic-section prosecutor-section" id="prosecutors" aria-labelledby="prosecutor-title">
      <span className="section-index" aria-hidden="true">06</span>
      <div className="section-heading civic-heading">
        <div>
          <span className="eyebrow"><ShieldCheck size={15} /> Prosecutors register</span>
          <h2 id="prosecutor-title">Know the public <em>jurisdiction.</em></h2>
        </div>
        <p>Search names and jurisdictions across the state-by-state local prosecutor roster and the current federal U.S. Attorney leadership list.</p>
      </div>

      <div className="civic-command-bar prosecutor-command-bar">
        <div className="civic-command-label"><span className="signal-dot" />AI command center · prosecutor layer</div>
        <form className="civic-command-form" onSubmit={runCommand}>
          <Search size={16} aria-hidden="true" />
          <input value={command} onChange={(event) => setCommand(event.target.value)} placeholder="Try: Texas, District Attorney, or a prosecutor’s name" aria-label="Search the prosecutor directory" />
          <button type="submit"><ArrowUpRight size={15} />Run command</button>
        </form>
        <p>Searches narrow the read-only roster locally. No message is sent and no contact detail is inferred.</p>
      </div>

      <div className="civic-metrics prosecutor-metrics" aria-label="Prosecutor directory coverage">
        <div><span>Local roster</span><strong>{localCount.toLocaleString()}</strong><small>names + jurisdictions</small></div>
        <div><span>Federal districts</span><strong>{federalCount.toString().padStart(3, "0")}</strong><small>DOJ leadership list</small></div>
        <div><span>States / territories</span><strong>{new Set(records.map((record) => record.state)).size}</strong><small>source coverage</small></div>
        <div><span>Direct emails</span><strong>{directEmailCount.toString().padStart(3, "0")}</strong><small>not exposed in source</small></div>
      </div>

      <div className="civic-register prosecutor-register">
        <div className="civic-register-toolbar">
          <div className="civic-filter-row" role="tablist" aria-label="Filter by prosecutor type">
            {(["All", "Local prosecutor", "Federal prosecutor"] as ProsecutorScope[]).map((item) => (
              <button key={item} className={scope === item ? "is-active" : ""} onClick={() => { setScope(item); setVisibleCount(30); }} role="tab" aria-selected={scope === item}>{item === "All" ? "All prosecutors" : item === "Local prosecutor" ? "District attorneys" : "U.S. Attorneys"}</button>
            ))}
          </div>
          <div className="civic-selects">
            <label><span className="sr-only">State or territory</span><select value={state} onChange={(event) => { setState(event.target.value); setVisibleCount(30); }}><option>All jurisdictions</option>{stateOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span className="sr-only">Contact route</span><select value={route} onChange={(event) => { setRoute(event.target.value as ProsecutorRoute); setVisibleCount(30); }}><option value="all">All contact routes</option><option value="call">Has public phone</option><option value="online">Has source route</option></select></label>
          </div>
        </div>

        <div className="civic-search-row">
          <div className="civic-inline-search"><Search size={15} /><input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(30); }} placeholder="Filter by name, role, state, or jurisdiction" aria-label="Filter prosecutor records" /></div>
          <div className="civic-search-summary"><span>{filteredRecords.length.toLocaleString()} matches</span>{(query || scope !== "All" || state !== "All jurisdictions" || route !== "all") && <button onClick={resetFilters}><X size={13} />Clear</button>}</div>
        </div>

        <div className="civic-content-grid">
          <div className="civic-list-panel">
            <div className="civic-list-head"><span>Prosecutor register</span><span>{Math.min(visibleCount, filteredRecords.length).toLocaleString()} / {filteredRecords.length.toLocaleString()}</span></div>
            <div className="civic-list" role="list" aria-label="Prosecutor records">
              {visibleRecords.map((record) => (
                <button className={`civic-row prosecutor-row ${selectedRecord?.id === record.id ? "is-selected" : ""}`} key={record.id} onClick={() => chooseRecord(record)} role="listitem">
                  <span className="civic-avatar">{initials(record.name)}</span>
                  <span className="civic-row-copy"><strong>{record.name}</strong><small>{record.role} · {record.state} · {record.jurisdiction}</small></span>
                  <span className="prosecutor-type-chip">{isFederal(record) ? "FED" : "LOCAL"}</span>
                  <span className="civic-row-phone">{record.phone || "No phone"}</span>
                  <ArrowUpRight size={15} className="civic-row-arrow" />
                </button>
              ))}
              {!visibleRecords.length && <div className="civic-empty"><Search size={20} /><strong>No prosecutors match this command.</strong><p>Try a state, role, last name, or reset the filters.</p><button onClick={resetFilters}>Reset register</button></div>}
            </div>
            {visibleCount < filteredRecords.length && <button className="civic-load-more" onClick={() => setVisibleCount((count) => count + 30)}>Load next 30 records <ArrowUpRight size={15} /></button>}
          </div>

          {selectedRecord && <aside className="civic-detail-panel prosecutor-detail-panel" aria-label={`Contact details for ${selectedRecord.name}`}>
            <div className="civic-detail-top"><div className="civic-detail-kicker"><span className="signal-dot" />{selectedRecord.contactType}</div><span className="civic-detail-id">{selectedRecord.id}</span></div>
            <div className="civic-detail-person"><div className="civic-detail-avatar">{initials(selectedRecord.name)}</div><div><h3>{selectedRecord.name}</h3><p>{selectedRecord.role} · {selectedRecord.state}</p></div></div>
            <div className="civic-detail-tags"><span>{selectedRecord.jurisdiction}</span><span>{isFederal(selectedRecord) ? "Federal district" : "Local jurisdiction"}</span></div>

            <div className="civic-contact-actions">
              <div className="civic-contact-block"><div><span className="civic-contact-icon"><Phone size={15} /></span><div><small>{isFederal(selectedRecord) ? "DOJ public line" : "Public phone"}</small><strong>{selectedRecord.phone || "Not available in national source"}</strong></div></div>{selectedRecord.phone && <div className="civic-action-pair"><a href={`tel:${cleanPhone(selectedRecord.phone)}`} aria-label={`Call public line for ${selectedRecord.name}`}>Call</a><button onClick={() => copyValue(selectedRecord.phone || "", "Phone number")} aria-label="Copy phone number"><Clipboard size={14} /></button></div>}</div>
              <div className="civic-contact-block"><div><span className="civic-contact-icon"><Mail size={15} /></span><div><small>Direct email</small><strong>{selectedRecord.email || "Not exposed in source"}</strong></div></div>{selectedRecord.email && <button onClick={() => copyValue(selectedRecord.email || "", "Email address")} aria-label="Copy email address"><Clipboard size={14} /></button>}</div>
              <div className="civic-contact-block"><div><span className="civic-contact-icon"><MapPin size={15} /></span><div><small>Jurisdiction</small><strong>{selectedRecord.jurisdiction}</strong><span>{isFederal(selectedRecord) ? "Federal district leadership" : "State or local chief prosecutor roster"}</span></div></div></div>
            </div>

            <div className="civic-official-links"><p>Source routes</p><a href={selectedRecord.sourceUrl} target="_blank" rel="noreferrer"><Building2 size={14} />{isFederal(selectedRecord) ? "Open DOJ listing" : "Open state-by-state roster"}<ExternalLink size={13} /></a>{selectedRecord.website && selectedRecord.website !== selectedRecord.sourceUrl && <a href={selectedRecord.website} target="_blank" rel="noreferrer"><Building2 size={14} />Open official website <ExternalLink size={13} /></a>}</div>

            <div className="civic-source-note"><ShieldCheck size={15} /><p><strong>Source boundary.</strong> {copiedValue ? "Copied to your clipboard." : isFederal(selectedRecord) ? `Verified against the DOJ listing dated ${US_ATTORNEY_DATA_UPDATED}.` : `Imported from the public roster dated ${PROSECUTOR_DATA_UPDATED}.`} Local entries provide names and jurisdictions; phones, emails, and official office routes are not inferred when the source does not publish them.</p></div>
          </aside>}
        </div>
      </div>

      <div className="civic-footer-note"><UsersRound size={15} /><span>Coverage: {localCount.toLocaleString()} local prosecutor records plus {federalCount} federal district leadership records. Local names and jurisdictions require verification with the official prosecutor office before outreach.</span><a href={localProsecutorSource} target="_blank" rel="noreferrer">Verify local roster <ExternalLink size={13} /></a><a href={federalProsecutorSource} target="_blank" rel="noreferrer">Verify DOJ roster <ExternalLink size={13} /></a></div>
    </section>
  );
}
