import { spawn } from "node:child_process";
import assert from "node:assert/strict";

const port = 8899;
const child = spawn(process.execPath, ["server/transceiver.mjs"], { env:{...process.env, TRANSCEIVER_PORT:String(port)}, stdio:["ignore","pipe","pipe"] });
const base = `http://127.0.0.1:${port}`;
const sleep = ms => new Promise(r=>setTimeout(r,ms));
try {
  await sleep(300);
  const health = await (await fetch(`${base}/health`)).json();
  assert.equal(health.ok, true);
  assert.equal(health.connected, 0);

  const registered = await (await fetch(`${base}/devices/register`, { method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify({id:"test-device-1",name:"Transceiver Test Device",capabilities:["cellular","wifi"]}) })).json();
  assert.equal(registered.device.connected, true);
  assert.ok(registered.deviceToken);
  const auth = { authorization:`Bearer ${registered.deviceToken}` };

  const me = await (await fetch(`${base}/devices/me`, { headers:auth })).json();
  assert.equal(me.device.id, "test-device-1");
  assert.equal(me.device.connected, true);

  const heartbeat = await (await fetch(`${base}/devices/heartbeat`, { method:"POST", headers:{...auth,"content-type":"application/json"}, body:JSON.stringify({capabilities:["cellular","wifi","sms"],ip:"test"}) })).json();
  assert.equal(heartbeat.ok, true);
  assert.equal(heartbeat.device.connected, true);
  assert.deepEqual(heartbeat.device.capabilities,["cellular","wifi","sms"]);

  const disconnected = await (await fetch(`${base}/devices/disconnect`, { method:"POST", headers:auth })).json();
  assert.equal(disconnected.device.connected, false);
  console.log("PASS: transceiver health, registration, authenticated session, heartbeat, and disconnect");
} finally { child.kill("SIGTERM"); }
