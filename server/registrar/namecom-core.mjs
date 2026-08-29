const DEFAULT_BASE_URL = "https://api.name.com";

function config(env = process.env) {
  const baseUrl = (env.NAMECOM_API_BASE || DEFAULT_BASE_URL).replace(/\/$/, "");
  const username = env.NAMECOM_USERNAME;
  const token = env.NAMECOM_TOKEN;
  if (!username || !token) throw new Error("NAMECOM_USERNAME and NAMECOM_TOKEN are required");
  return { baseUrl, username, token };
}

function headers(c) {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Basic ${Buffer.from(`${c.username}:${c.token}`).toString("base64")}`
  };
}

async function request(path, options = {}, env = process.env) {
  const c = config(env);
  const response = await fetch(`${c.baseUrl}/core/v1${path}`, { ...options, headers: { ...headers(c), ...(options.headers || {}) } });
  const text = await response.text();
  let body = null;
  try { body = text ? JSON.parse(text) : null; } catch { body = { raw: text }; }
  if (!response.ok) {
    const error = new Error(`Name.com API ${response.status}`);
    error.status = response.status;
    error.body = body;
    throw error;
  }
  return body;
}

export async function health(env = process.env) {
  return request("/hello", { method: "GET" }, env);
}

export async function searchDomain(keyword, env = process.env) {
  return request("/domains:search", { method: "POST", body: JSON.stringify({ keyword, tldFilter: ["com"], purchaseType: "registration" }) }, env);
}

export async function checkAvailability(domainName, env = process.env) {
  return request("/domains:checkAvailability", { method: "POST", body: JSON.stringify({ domainName, purchaseType: "registration" }) }, env);
}

export async function listDomains(env = process.env) {
  return request("/domains", { method: "GET" }, env);
}

export async function getDomain(domainName, env = process.env) {
  return request(`/domains/${encodeURIComponent(domainName)}`, { method: "GET" }, env);
}

export async function registerDomain(domainName, payload, idempotencyKey, env = process.env) {
  if (!idempotencyKey) throw new Error("An idempotency key is required for registration");
  return request("/domains", { method: "POST", headers: { "X-Idempotency-Key": idempotencyKey }, body: JSON.stringify({ domainName, ...payload }) }, env);
}

export async function listRecords(domainName, env = process.env) {
  return request(`/domains/${encodeURIComponent(domainName)}/records`, { method: "GET" }, env);
}

export async function createRecord(domainName, record, env = process.env) {
  return request(`/domains/${encodeURIComponent(domainName)}/records`, { method: "POST", body: JSON.stringify(record) }, env);
}
