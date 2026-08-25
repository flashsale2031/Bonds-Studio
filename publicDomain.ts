export function normalizePublicHostname(hostname: string) {
  return hostname.trim().toLowerCase().replace(/\.$/, "");
}

export function isManagementHost(hostname: string) {
  const normalized = normalizePublicHostname(hostname);
  return normalized === "localhost" || normalized === "127.0.0.1" || normalized.endsWith(".manus.computer") || normalized.endsWith(".manus.space");
}
