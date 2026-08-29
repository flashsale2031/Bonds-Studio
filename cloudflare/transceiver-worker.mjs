import { DurableObject } from "cloudflare:workers";

const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
const auth = request => { const value = request.headers.get("authorization") || ""; return value.startsWith("Bearer ") ? value.slice(7) : ""; };

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: { "access-control-allow-origin": "*", "access-control-allow-headers": "authorization,content-type", "access-control-allow-methods": "GET,POST,OPTIONS" } });
    if (url.pathname === "/health") return json({ ok: true, service: "bonds-transceiver-edge", runtime: "cloudflare-workers", state: "durable-object" });
    if (url.pathname === "/devices/register" && request.method === "POST") {
      const body = await request.json().catch(() => null);
      if (!body?.id || !body?.name) return json({ error: "id_and_name_required" }, 400);
      const id = env.DEVICES.idFromName(String(body.id));
      return env.DEVICES.get(id).fetch(new Request("https://device/register", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) }));
    }
    const token = auth(request);
    if (!token) return json({ error: "device_authentication_required" }, 401);
    const id = env.DEVICES.idFromName(`token:${token.slice(0, 24)}`);
    return env.DEVICES.get(id).fetch(new Request(`https://device${url.pathname}`, { method: request.method, headers: request.headers, body: request.method === "GET" ? undefined : request.body }));
  }
};

export class DeviceSession extends DurableObject {
  constructor(ctx, env) { super(ctx, env); this.ctx = ctx; }
  async fetch(request) {
    const url = new URL(request.url);
    const current = await this.ctx.storage.get("device");
    if (url.pathname === "/register" && request.method === "POST") {
      const body = await request.json();
      const token = crypto.randomUUID().replaceAll("-", "") + crypto.randomUUID().replaceAll("-", "");
      const device = { id: String(body.id), name: String(body.name), token, connected: true, lastSeen: new Date().toISOString(), transport: "https-heartbeat", capabilities: Array.isArray(body.capabilities) ? body.capabilities : [] };
      await this.ctx.storage.put("device", device);
      return json({ device: { ...device, token: undefined }, deviceToken: token }, 201);
    }
    if (!current || auth(request) !== current.token) return json({ error: "device_authentication_required" }, 401);
    if (url.pathname === "/devices/heartbeat" && request.method === "POST") {
      const body = await request.json().catch(() => ({}));
      const device = { ...current, connected: true, lastSeen: new Date().toISOString(), capabilities: Array.isArray(body.capabilities) ? body.capabilities : current.capabilities, ip: body.ip ? String(body.ip) : current.ip };
      await this.ctx.storage.put("device", device);
      return json({ ok: true, device: publicDevice(device) });
    }
    if (url.pathname === "/devices/disconnect" && request.method === "POST") {
      const device = { ...current, connected: false, lastSeen: new Date().toISOString() };
      await this.ctx.storage.put("device", device); return json({ ok: true, device: publicDevice(device) });
    }
    if (url.pathname === "/devices/me" && request.method === "GET") return json({ device: publicDevice(current) });
    return json({ error: "not_found" }, 404);
  }
}

function publicDevice(d) { const { token, ...safe } = d; return safe; }
