import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

const PORT = Number(process.env.OBJECT_TRANSFORMER_PORT || 8787);
const DATA_DIR = path.resolve(process.env.OBJECT_TRANSFORMER_DATA_DIR || ".object-transformer");
const JOB_DIR = path.join(DATA_DIR, "jobs");
const USER_AGENT = process.env.RESEARCH_USER_AGENT || "BondsStudio-ObjectTransformer/1.0";

await fs.mkdir(JOB_DIR, { recursive: true });

const json = (res, status, body) => { res.writeHead(status, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", "access-control-allow-origin": process.env.CORS_ORIGIN || "*", "access-control-allow-headers": "content-type, authorization", "access-control-allow-methods": "GET,POST,OPTIONS" }); res.end(JSON.stringify(body)); };
const readBody = async req => { let data = ""; for await (const chunk of req) data += chunk; if (data.length > 8_000_000) throw new Error("Request too large"); return data ? JSON.parse(data) : {}; };
const saveJob = async job => fs.writeFile(path.join(JOB_DIR, `${job.id}.json`), JSON.stringify(job, null, 2));
const loadJob = async id => JSON.parse(await fs.readFile(path.join(JOB_DIR, `${id}.json`), "utf8"));

async function webResearch(query) {
  // Provider-neutral research adapter. Set RESEARCH_ENDPOINT to an approved search service.
  if (!process.env.RESEARCH_ENDPOINT) return { provider: "none", query, results: [], message: "Configure RESEARCH_ENDPOINT on the server to enable live web research." };
  const url = new URL(process.env.RESEARCH_ENDPOINT);
  url.searchParams.set("q", query);
  const response = await fetch(url, { headers: { accept: "application/json", "user-agent": USER_AGENT, ...(process.env.RESEARCH_API_KEY ? { authorization: `Bearer ${process.env.RESEARCH_API_KEY}` } : {}) } });
  if (!response.ok) throw new Error(`Research provider returned ${response.status}`);
  return { provider: url.hostname, query, results: await response.json() };
}

async function geocode(query) {
  const endpoint = process.env.GEOCODER_ENDPOINT || "https://nominatim.openstreetmap.org/search";
  const url = new URL(endpoint); url.searchParams.set("format", "jsonv2"); url.searchParams.set("limit", "5"); url.searchParams.set("q", query);
  const response = await fetch(url, { headers: { accept: "application/json", "user-agent": USER_AGENT } });
  if (!response.ok) throw new Error(`Geocoder returned ${response.status}`);
  return response.json();
}

async function visionAnalyze({ imageDataUrl, objectName }) {
  // Vision adapter: no provider secret is ever sent to the browser.
  if (!process.env.VISION_ENDPOINT) return { provider: "none", objectName, observations: [], message: "Configure VISION_ENDPOINT to enable production image analysis." };
  const response = await fetch(process.env.VISION_ENDPOINT, { method: "POST", headers: { "content-type": "application/json", ...(process.env.VISION_API_KEY ? { authorization: `Bearer ${process.env.VISION_API_KEY}` } : {}) }, body: JSON.stringify({ image: imageDataUrl, object_name: objectName }) });
  if (!response.ok) throw new Error(`Vision provider returned ${response.status}`);
  return response.json();
}

async function generateModel(job) {
  if (!process.env.MODEL_GENERATION_ENDPOINT) {
    return { provider: "none", status: "adapter-ready", message: "Configure MODEL_GENERATION_ENDPOINT for production 3D generation.", format: "glb", geometry: { source: "vision-and-reference-specifications", dimensions: job.specifications } };
  }
  const response = await fetch(process.env.MODEL_GENERATION_ENDPOINT, { method: "POST", headers: { "content-type": "application/json", ...(process.env.MODEL_GENERATION_API_KEY ? { authorization: `Bearer ${process.env.MODEL_GENERATION_API_KEY}` } : {}) }, body: JSON.stringify({ object_name: job.objectName, image: job.imageDataUrl, specifications: job.specifications, textures: job.textures, environment: job.environment }) });
  if (!response.ok) throw new Error(`3D provider returned ${response.status}`);
  return response.json();
}

async function runJob(job) {
  job.status = "researching"; job.progress = 10; job.events.push("Vision analysis started"); await saveJob(job);
  job.vision = await visionAnalyze({ imageDataUrl: job.imageDataUrl, objectName: job.objectName });
  job.progress = 25; job.events.push("Vision analysis completed"); await saveJob(job);
  job.research = await webResearch(`${job.objectName || "object"} dimensions specifications material model reference`);
  job.progress = 40; job.events.push("Dimensional research completed"); await saveJob(job);
  job.specifications = { ...job.vision?.specifications, ...job.specifications };
  job.textures = {};
  for (const face of ["front", "back", "left", "right", "below"]) { job.textures[face] = { status: "search-required", queries: [`${job.objectName} ${face} view texture`, `${job.objectName} ${face} surface material`] }; }
  job.progress = 55; job.events.push("Five directional texture jobs prepared"); await saveJob(job);
  job.environment = { status: "search-required", queries: [`${job.objectName} environment background`, "original scene environmental texture", "fine grain surface texture material"] };
  job.progress = 65; await saveJob(job);
  job.model = await generateModel(job);
  job.progress = 85; job.events.push("3D generation adapter completed"); await saveJob(job);
  job.status = "complete"; job.progress = 100; job.events.push("Transformation pipeline complete"); await saveJob(job);
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") return json(res, 204, {});
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (req.method === "GET" && url.pathname === "/api/object-transformer/health") return json(res, 200, { ok: true, service: "object-transformer", version: "1.0.0", adapters: { research: Boolean(process.env.RESEARCH_ENDPOINT), vision: Boolean(process.env.VISION_ENDPOINT), model3d: Boolean(process.env.MODEL_GENERATION_ENDPOINT) } });
    if (req.method === "POST" && url.pathname === "/api/object-transformer/research") return json(res, 200, await webResearch(url.searchParams.get("q") || "object specifications"));
    if (req.method === "POST" && url.pathname === "/api/object-transformer/geocode") return json(res, 200, { results: await geocode(url.searchParams.get("q") || "") });
    if (req.method === "POST" && url.pathname === "/api/object-transformer/jobs") {
      const body = await readBody(req); const id = randomUUID();
      const job = { id, objectName: body.objectName || "Unnamed object", imageDataUrl: body.imageDataUrl || null, specifications: body.specifications || {}, status: "queued", progress: 0, events: [], textures: {}, environment: null, createdAt: new Date().toISOString() };
      await saveJob(job); void runJob(job).catch(async error => { job.status = "error"; job.error = error instanceof Error ? error.message : String(error); await saveJob(job); });
      return json(res, 202, { id, status: job.status });
    }
    const match = url.pathname.match(/^\/api\/object-transformer\/jobs\/([^/]+)$/);
    if (req.method === "GET" && match) return json(res, 200, await loadJob(match[1]));
    return json(res, 404, { error: "Not found" });
  } catch (error) { return json(res, 500, { error: error instanceof Error ? error.message : String(error) }); }
});
server.listen(PORT, "0.0.0.0", () => console.log(`Bonds Studio Object Transformer listening on ${PORT}`));
