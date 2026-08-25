#!/usr/bin/env node
import http from 'node:http';
import { exec } from 'node:child_process';
import { access, realpath } from 'node:fs/promises';
import path from 'node:path';

const PORT = Number(process.env.BONDS_TERMINAL_PORT || 4174);
const ROOT = path.resolve(process.env.BONDS_TERMINAL_ROOT || process.cwd());
const MAX_OUTPUT = 200_000;
const TIMEOUT_MS = 120_000;

function send(res, status, body, origin = '') {
  const allowedOrigin = origin === 'http://localhost:5173' || origin === 'http://127.0.0.1:5173' ? origin : 'null';
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(body));
}

async function safeCwd(input) {
  const requested = path.resolve(ROOT, input || '.');
  const resolved = await realpath(requested);
  if (resolved !== ROOT && !resolved.startsWith(`${ROOT}${path.sep}`)) {
    throw new Error('Working directory must remain inside the Bonds Studio project.');
  }
  return resolved;
}

function truncate(value) {
  if (value.length <= MAX_OUTPUT) return value;
  return `${value.slice(0, MAX_OUTPUT)}\n\n[output truncated at ${MAX_OUTPUT.toLocaleString()} characters]`;
}

async function execute(command, cwd) {
  const trimmed = command.trim();
  if (!trimmed) return { ok: true, stdout: '', stderr: '', cwd };

  // Keep `cd` useful between commands without pretending the browser owns a persistent shell.
  const cdOnly = trimmed.match(/^cd(?:\s+(.+))?$/);
  if (cdOnly) {
    const target = (cdOnly[1] || '~').trim().replace(/^~(?=$|[\\/])/, ROOT);
    const next = await safeCwd(target);
    await access(next);
    return { ok: true, stdout: `Changed directory to ${path.relative(ROOT, next) || '.'}\n`, stderr: '', cwd: next };
  }

  return await new Promise((resolve) => {
    exec(trimmed, {
      cwd,
      shell: process.platform === 'win32' ? 'cmd.exe' : '/bin/bash',
      timeout: TIMEOUT_MS,
      maxBuffer: MAX_OUTPUT,
      windowsHide: true,
      env: { ...process.env, BONDS_STUDIO_TERMINAL: '1' },
    }, (error, stdout, stderr) => {
      resolve({
        ok: !error,
        code: typeof error?.code === 'number' ? error.code : error ? 1 : 0,
        signal: error?.signal || null,
        timedOut: Boolean(error?.killed),
        stdout: truncate(stdout || ''),
        stderr: truncate(stderr || (error && !stdout ? error.message : '')),
        cwd,
      });
    });
  });
}

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin || '';
  if (origin && origin !== 'http://localhost:5173' && origin !== 'http://127.0.0.1:5173') return send(res, 403, { ok: false, error: 'Terminal accepts requests only from the local Bonds Studio UI.' }, origin);
  if (req.method === 'OPTIONS') return send(res, 204, {}, origin);
  if (req.method === 'GET' && req.url === '/api/terminal/health') {
    return send(res, 200, { ok: true, cwd: ROOT, platform: process.platform, node: process.version }, origin);
  }
  if (req.method !== 'POST' || req.url !== '/api/terminal/exec') {
    return send(res, 404, { ok: false, error: 'Not found' }, origin);
  }

  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 50_000) return send(res, 413, { ok: false, error: 'Request too large.' }, origin);
  }

  try {
    const body = JSON.parse(raw || '{}');
    const command = typeof body.command === 'string' ? body.command : '';
    const cwd = await safeCwd(body.cwd || '.');
    const result = await execute(command, cwd);
    return send(res, 200, { ...result, cwd: path.relative(ROOT, result.cwd) || '.' }, origin);
  } catch (error) {
    return send(res, 400, { ok: false, error: error instanceof Error ? error.message : String(error) }, origin);
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Bonds Studio terminal listening on http://127.0.0.1:${PORT}`);
  console.log(`Working directory: ${ROOT}`);
});
