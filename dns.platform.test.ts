import { describe, expect, it } from "vitest";
import { buildZoneFile, filterLookupRecords, isPrivateTld, isValidDomainName, validateRecordPayload } from "./routers";
import { canUserManageDomain } from "./db";
import { recordTypes } from "../drizzle/schema";

describe("DNS platform primitives", () => {
  it("supports every requested DNS record type", () => {
    expect(recordTypes).toEqual(["A", "AAAA", "CNAME", "MX", "NS", "TXT", "PTR", "SRV", "CAA", "TLSA", "CERT", "SMIMEA", "SSHFP", "DNSKEY"]);
    expect(recordTypes).toHaveLength(14);
  });

  it("enforces the owner/admin permission boundary", () => {
    const domain = { ownerId: 10 };
    expect(canUserManageDomain(domain, { id: 10, role: "user" })).toBe(true);
    expect(canUserManageDomain(domain, { id: 11, role: "user" })).toBe(false);
    expect(canUserManageDomain(domain, { id: 11, role: "admin" })).toBe(true);
  });

  it("recognizes the private .bonds namespace", () => {
    expect(isPrivateTld(".bonds")).toBe(true);
    expect(isPrivateTld(".com")).toBe(false);
  });

  it("accepts valid fully-qualified domains and rejects malformed input", () => {
    expect(isValidDomainName("bondsstudio.com")).toBe(true);
    expect(isValidDomainName("sub.example.dev")).toBe(true);
    expect(isValidDomainName("not a domain")).toBe(false);
    expect(isValidDomainName("-invalid.com")).toBe(false);
  });

  it("filters stored records by name and optional type", () => {
    const records = [{ name: "@", type: "A" }, { name: "@", type: "AAAA" }, { name: "www", type: "A" }];
    expect(filterLookupRecords(records, "@")).toHaveLength(2);
    expect(filterLookupRecords(records, "@", "AAAA")).toEqual([{ name: "@", type: "AAAA" }]);
  });

  it("rejects incomplete structured record payloads", () => {
    expect(() => validateRecordPayload({ type: "CAA", value: "letsencrypt.org", flags: 0 })).toThrow("CAA requires tag");
    expect(() => validateRecordPayload({ type: "CAA", value: "letsencrypt.org", flags: 0, tag: "issue" })).not.toThrow();
    expect(() => validateRecordPayload({ type: "DNSKEY", value: "abc", flags: 256, priority: 13 })).toThrow("DNSKEY requires order");
  });

  it("renders a BIND9-compatible zone file", () => {
    const domain = { name: "example.com" } as any;
    const zone = { primaryNameserver: "ns1.example.com.", adminEmail: "hostmaster.example.com.", serial: 2026010101, refresh: 3600, retry: 600, expire: 604800, minimumTtl: 300 } as any;
    const settings = { defaultTtl: 3600 } as any;
    const records = [
      { name: "@", type: "A", value: "192.0.2.10", ttl: 300 },
      { name: "www", type: "CNAME", value: "@", ttl: 3600 },
      { name: "@", type: "MX", value: "mail.example.com.", priority: 10, ttl: 3600 },
      { name: "_dmarc", type: "TXT", value: "v=DMARC1; p=none", ttl: 3600 },
    ] as any;
    const output = buildZoneFile(domain, zone, settings, records);
    expect(output).toContain("$ORIGIN example.com.");
    expect(output).toContain("@ IN SOA ns1.example.com. hostmaster.example.com. (");
    expect(output).toContain("@ 300 IN A 192.0.2.10");
    expect(output).toContain("@ 3600 IN MX 10 mail.example.com.");
    expect(output).toContain('_dmarc 3600 IN TXT "v=DMARC1; p=none"');
    expect(output.endsWith("\n")).toBe(true);
  });

  it("serializes advanced records and all configured nameservers", () => {
    const domain = { name: "example.com" } as any;
    const zone = { primaryNameserver: "ns1.example.com.", adminEmail: "hostmaster.example.com.", serial: 1, refresh: 2, retry: 3, expire: 4, minimumTtl: 5 } as any;
    const settings = { defaultTtl: 60, authoritativeNameservers: "ns1.example.com.\nns2.example.com." } as any;
    const records = [
      { name: "@", type: "CAA", value: "letsencrypt.org", ttl: 60, flags: 0, tag: "issue" },
      { name: "_443._tcp", type: "TLSA", value: "abc", ttl: 60, priority: 3, weight: 1, port: 1 },
      { name: "cert", type: "CERT", value: "MIIC", ttl: 60, priority: 1, preference: 7, order: 8 },
      { name: "smime", type: "SMIMEA", value: "hash", ttl: 60, priority: 3, weight: 1, port: 1 },
      { name: "ssh", type: "SSHFP", value: "fingerprint", ttl: 60, preference: 4, order: 2 },
      { name: "@", type: "DNSKEY", value: "keydata", ttl: 60, flags: 256, priority: 3, order: 13 },
    ] as any;
    const output = buildZoneFile(domain, zone, settings, records);
    expect(output).toContain("example.com. IN NS ns1.example.com.");
    expect(output).toContain("example.com. IN NS ns2.example.com.");
    expect(output).toContain('@ 60 IN CAA 0 issue "letsencrypt.org"');
    expect(output).toContain("_443._tcp 60 IN TLSA 3 1 1 abc");
    expect(output).toContain("cert 60 IN CERT 1 7 8 MIIC");
    expect(output).toContain("smime 60 IN SMIMEA 3 1 1 hash");
    expect(output).toContain("ssh 60 IN SSHFP 4 2 fingerprint");
    expect(output).toContain("@ 60 IN DNSKEY 256 3 13 keydata");
  });
});
