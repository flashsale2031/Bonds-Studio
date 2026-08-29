import http from "node:http";
import crypto from "node:crypto";

const port = Number(process.env.TRANSCEIVER_PORT || 8788);
const maxBody = 64 * 1024;
const devices = new Map();
const sessions = new Map();

function json(res, status, body) {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
  res.end(JSON.stringify(body));
}
function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", chunk => { data += chunk; if (data.length > maxBody) { req.destroy(); reject(new Error("BODY_TOO_LARGE")); } });
    req.on("end", () => { try { resolve(data ? JSON.parse(data) : {}); } catch { reject(new Error("INVALID_JSON")); } });
    req.on("error", reject);
  });
}
function tokenFrom(req) { const value = req.headers.authorization || ""; return value.startsWith("Bearer ") ? value.slice(7) : ""; }
function publicDevice(d) { return { id:d.id, name:d.name, connected:d.connected, lastSeen:d.lastSeen, transport:d.transport, ip:d.ip, capabilities:d.capabilities }; }
function requireDevice(req) {
  const token = tokenFrom(req);
  for (const d of devices.values()) if (crypto.timingSafeEqual(Buffer.from(token), Buffer.from(d.token))) return d;
  return null;
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    if (req.method === "GET" && url.pathname === "/health") return json(res, 200, { ok:true, service:"bonds-transceiver", devices:devices.size, connected:[...devices.values()].filter(d=>d.connected).length });
    if (req.method === "POST" && url.pathname === "/devices/register") {
      const body = await readBody(req);
      if (!body.id || !body.name) return json(res, 400, { error:"id_and_name_required" });
      const token = crypto.randomBytes(32).toString("hex");
      const device = { id:String(body.id), name:String(body.name), token, connected:true, lastSeen:new Date().toISOString(), transport:"https-heartbeat", ip:req.socket.remoteAddress || null, capabilities:Array.isArray(body.capabilities)?body.capabilities:[] };
      devices.set(device.id, device); sessions.set(token, { connectedAt:device.lastSeen });
      return json(res, 201, { device:publicDevice(device), deviceToken:token });
    }
    const device = requireDevice(req);
    if (!device) return json(res, 401, { error:"device_authentication_required" });
    if (req.method === "POST" && url.pathname === "/devices/heartbeat") {
      const body = await readBody(req);
      device.connected = true; device.lastSeen = new Date().toISOString();
      if (body.capabilities) device.capabilities = Array.isArray(body.capabilities) ? body.capabilities : device.capabilities;
      if (body.ip) device.ip = String(body.ip);
      return json(res, 200, { ok:true, device:publicDevice(device) });
    }
    if (req.method === "POST" && url.pathname === "/devices/disconnect") {
      device.connected=false; device.lastSeen=new Date().toISOString(); return json(res,200,{ok:true,device:publicDevice(device)});
    }
    if (req.method === "GET" && url.pathname === "/devices/me") return json(res,200,{device:publicDevice(device)});
    return json(res,404,{error:"not_found"});
  } catch (error) { return json(res,400,{error:error?.message || "request_failed"}); }
});

const interval = setInterval(() => { const cutoff=Date.now()-30_000; for (const d of devices.values()) if (Date.parse(d.lastSeen) < cutoff) d.connected=false; }, 5_000);
server.on("close", () => clearInterval(interval));
server.listen(port, "0.0.0.0", () => console.log(`Bonds transceiver listening on :${port}`));
