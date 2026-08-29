import { FormEvent, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Check,
  Clipboard,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";
import {
  CONGRESS_DATA_UPDATED,
  congressionalContacts,
  type CongressionalContact,
} from "./data/congressContacts";

type ChamberFilter = "All" | "Senate" | "House";

type CongressCommandCenterProps = {
  onActivity?: (message: string) => void;
};

const partyNames: Record<string, string> = {
  D: "Democrat",
  R: "Republican",
  I: "Independent",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function formatDistrict(contact: CongressionalContact) {
  if (contact.chamber === "Senate") return "Statewide";
  return contact.district || "At large";
}

export default function CongressCommandCenter({ onActivity }: CongressCommandCenterProps) {
  const [query, setQuery] = useState("");
  const [command, setCommand] = useState("");
  const [chamber, setChamber] = useState<ChamberFilter>("All");
  const [state, setState] = useState("All states");
  const [route, setRoute] = useState<"all" | "call" | "online">("all");
  const [selectedId, setSelectedId] = useState(congressionalContacts[0]?.id ?? "");
  const [visibleCount, setVisibleCount] = useState(30);
  const [copiedValue, setCopiedValue] = useState("");

  const stateOptions = useMemo(
    () => Array.from(new Map(congressionalContacts.map((contact) => [contact.state, contact.stateName])).entries()).sort((a, b) => a[1].localeCompare(b[1])),
    [],
  );

  const filteredContacts = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return congressionalContacts.filter((contact) => {
      if (chamber !== "All" && contact.chamber !== chamber) return false;
      if (state !== "All states" && contact.state !== state) return false;
      if (route === "call" && !contact.phone) return false;
      if (route === "online" && !contact.contactForm && !contact.website) return false;
      if (!needle) return true;
      const searchable = [
        contact.name,
        contact.chamber,
        contact.role,
        contact.party,
        contact.partyName,
        contact.state,
        contact.stateName,
        contact.district,
        contact.office,
        contact.address,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return searchable.includes(needle);
    });
  }, [chamber, query, route, state]);

  const selectedContact = useMemo(
    () => filteredContacts.find((contact) => contact.id === selectedId) || filteredContacts[0],
    [filteredContacts, selectedId],
  );

  const visibleContacts = filteredContacts.slice(0, visibleCount);
  const directEmailCount = congressionalContacts.filter((contact) => contact.emails.length > 0).length;
  const fieldOfficeCount = congressionalContacts.filter((contact) => contact.fieldOffices.length > 0).length;

  function chooseContact(contact: CongressionalContact) {
    setSelectedId(contact.id);
    onActivity?.(`${contact.name} selected in the civic contact register.`);
  }

  function copyValue(value: string, label: string) {
    if (!value) return;
    void navigator.clipboard?.writeText(value);
    setCopiedValue(value);
    onActivity?.(`${label} copied for the selected official.`);
    window.setTimeout(() => setCopiedValue((current) => (current === value ? "" : current)), 1600);
  }

  function runCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextCommand = command.trim();
    if (!nextCommand) return;
    setQuery(nextCommand);
    setVisibleCount(30);
    onActivity?.(`AI command interpreted as a Congress directory search: ${nextCommand}`);
    setCommand("");
  }

  function resetFilters() {
    setQuery("");
    setChamber("All");
    setState("All states");
    setRoute("all");
    setVisibleCount(30);
    onActivity?.("Congress directory filters reset.");
  }

  return (
    <section className="module-section civic-section" id="phone" aria-labelledby="phone-title">
      <span className="section-index" aria-hidden="true">05</span>
      <div className="section-heading civic-heading">
        <div>
          <span className="eyebrow"><Phone size={15} /> Phone / Civic register</span>
          <h2 id="phone-title">Put the public <em>line within reach.</em></h2>
        </div>
        <p>One command surface for the current U.S. Congress: search the register, verify the source, and call or open the official route without guessing an address.</p>
      </div>

      <div className="civic-command-bar">
        <div className="civic-command-label"><span className="signal-dot" />AI command center · phone layer</div>
        <form className="civic-command-form" onSubmit={runCommand}>
          <Search size={16} aria-hidden="true" />
          <input value={command} onChange={(event) => setCommand(event.target.value)} placeholder="Try: California, House, or search an official’s name" aria-label="Search the Congress directory" />
          <button type="submit"><ArrowUpRight size={15} />Run command</button>
        </form>
        <p>Commands narrow the register locally. No message is sent and no contact detail is inferred.</p>
      </div>

      <div className="civic-metrics" aria-label="Congress directory coverage">
        <div><span>Current records</span><strong>{congressionalContacts.length}</strong><small>119th Congress feed</small></div>
        <div><span>Senate</span><strong>{congressionalContacts.filter((contact) => contact.chamber === "Senate").length}</strong><small>two per state</small></div>
        <div><span>House + delegates</span><strong>{congressionalContacts.filter((contact) => contact.chamber === "House").length}</strong><small>district and territory seats</small></div>
        <div><span>Direct emails</span><strong>{directEmailCount.toString().padStart(3, "0")}</strong><small>not exposed in source</small></div>
      </div>

      <div className="civic-register">
        <div className="civic-register-toolbar">
          <div className="civic-filter-row" role="tablist" aria-label="Filter by chamber">
            {(["All", "Senate", "House"] as ChamberFilter[]).map((item) => (
              <button key={item} className={chamber === item ? "is-active" : ""} onClick={() => { setChamber(item); setVisibleCount(30); }} role="tab" aria-selected={chamber === item}>{item === "All" ? "All chambers" : item}</button>
            ))}
          </div>
          <div className="civic-selects">
            <label><span className="sr-only">State or territory</span><select value={state} onChange={(event) => { setState(event.target.value); setVisibleCount(30); }}><option>All states</option>{stateOptions.map(([code, name]) => <option key={code} value={code}>{name} · {code}</option>)}</select></label>
            <label><span className="sr-only">Contact route</span><select value={route} onChange={(event) => { setRoute(event.target.value as typeof route); setVisibleCount(30); }}><option value="all">All contact routes</option><option value="call">Has phone</option><option value="online">Has official web route</option></select></label>
          </div>
        </div>

        <div className="civic-search-row">
          <div className="civic-inline-search"><Search size={15} /><input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(30); }} placeholder="Filter by name, state, party, district, or office" aria-label="Filter Congress records" /></div>
          <div className="civic-search-summary"><span>{filteredContacts.length} matches</span>{(query || chamber !== "All" || state !== "All states" || route !== "all") && <button onClick={resetFilters}><X size={13} />Clear</button>}</div>
        </div>

        <div className="civic-content-grid">
          <div className="civic-list-panel">
            <div className="civic-list-head"><span>Official register</span><span>{Math.min(visibleCount, filteredContacts.length)} / {filteredContacts.length}</span></div>
            <div className="civic-list" role="list" aria-label="Congressional officials">
              {visibleContacts.map((contact) => (
                <button className={`civic-row ${selectedContact?.id === contact.id ? "is-selected" : ""}`} key={contact.id} onClick={() => chooseContact(contact)} role="listitem">
                  <span className="civic-avatar">{initials(contact.name)}</span>
                  <span className="civic-row-copy"><strong>{contact.name}</strong><small>{contact.chamber} · {contact.state}{contact.district ? ` · ${contact.district}` : ""}</small></span>
                  <span className={`party-chip party-${contact.party.toLowerCase()}`}>{contact.party}</span>
                  <span className="civic-row-phone">{contact.phone || "No phone"}</span>
                  <ArrowUpRight size={15} className="civic-row-arrow" />
                </button>
              ))}
              {!visibleContacts.length && <div className="civic-empty"><Search size={20} /><strong>No records match this command.</strong><p>Try a state, chamber, last name, or reset the filters.</p><button onClick={resetFilters}>Reset register</button></div>}
            </div>
            {visibleCount < filteredContacts.length && <button className="civic-load-more" onClick={() => setVisibleCount((count) => count + 30)}>Load next 30 records <ArrowUpRight size={15} /></button>}
          </div>

          {selectedContact && <aside className="civic-detail-panel" aria-label={`Contact details for ${selectedContact.name}`}>
            <div className="civic-detail-top"><div className="civic-detail-kicker"><span className="signal-dot" />{selectedContact.chamber} · {selectedContact.role}</div><span className="civic-detail-id">{selectedContact.id}</span></div>
            <div className="civic-detail-person"><div className="civic-detail-avatar">{initials(selectedContact.name)}</div><div><h3>{selectedContact.name}</h3><p>{partyNames[selectedContact.party] || selectedContact.partyName} · {selectedContact.stateName}</p></div></div>
            <div className="civic-detail-tags"><span>{formatDistrict(selectedContact)}</span>{selectedContact.class && <span>Class {selectedContact.class}</span>}{selectedContact.isTerritory && <span>Territory</span>}</div>

            <div className="civic-contact-actions">
              <div className="civic-contact-block"><div><span className="civic-contact-icon"><Phone size={15} /></span><div><small>Washington office</small><strong>{selectedContact.phone || "Not listed"}</strong></div></div>{selectedContact.phone && <div className="civic-action-pair"><a href={`tel:${selectedContact.phone.replace(/[^+\d]/g, "")}`} aria-label={`Call ${selectedContact.name}`}>Call</a><button onClick={() => copyValue(selectedContact.phone, "Phone number")} aria-label="Copy phone number"><Clipboard size={14} /></button></div>}</div>
              <div className="civic-contact-block"><div><span className="civic-contact-icon"><Mail size={15} /></span><div><small>Direct email</small><strong>{selectedContact.emails.length ? selectedContact.emails.join(", ") : "Not exposed in source"}</strong></div></div>{selectedContact.emails.length > 0 && <button onClick={() => copyValue(selectedContact.emails[0], "Email address")}><Clipboard size={14} /></button>}</div>
              <div className="civic-contact-block"><div><span className="civic-contact-icon"><MapPin size={15} /></span><div><small>Washington office</small><strong>{selectedContact.office}</strong><span>{selectedContact.address}</span></div></div></div>
            </div>

            <div className="civic-official-links"><p>Official routes</p>{selectedContact.contactForm && <a href={selectedContact.contactForm} target="_blank" rel="noreferrer"><Mail size={14} />Open contact form <ExternalLink size={13} /></a>}{selectedContact.website && <a href={selectedContact.website} target="_blank" rel="noreferrer"><Building2 size={14} />Open official website <ExternalLink size={13} /></a>}</div>

            <div className="civic-field-offices"><div className="civic-field-head"><span><MapPin size={14} />Field offices</span><b>{selectedContact.fieldOffices.length}</b></div>{selectedContact.fieldOffices.length ? <div className="civic-field-list">{selectedContact.fieldOffices.slice(0, 5).map((office) => <div key={office.id}><span><strong>{office.label}</strong><small>{office.address}</small></span>{office.phone && <a href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}>{office.phone}</a>}</div>)}{selectedContact.fieldOffices.length > 5 && <small className="civic-more-offices">+ {selectedContact.fieldOffices.length - 5} more offices in the source record</small>}</div> : <p className="civic-muted">No field-office record was supplied for this member.</p>}</div>

            <div className="civic-source-note"><ShieldCheck size={15} /><p><strong>Source boundary.</strong> {copiedValue ? "Copied to your clipboard." : `Verified against the public data feed dated ${CONGRESS_DATA_UPDATED}.`} Direct emails are not guessed; official contact forms are the safe online route.</p></div>
          </aside>}
        </div>
      </div>

      <div className="civic-footer-note"><UsersRound size={15} /><span>Coverage: {fieldOfficeCount} records include district or field-office data. The directory is read-only and designed for constituent outreach.</span><a href="https://www.house.gov/representatives" target="_blank" rel="noreferrer">Verify on House.gov <ExternalLink size={13} /></a><a href="https://www.senate.gov/senators/senators-contact.htm" target="_blank" rel="noreferrer">Verify on Senate.gov <ExternalLink size={13} /></a><Check size={15} /></div>
    </section>
  );
}
