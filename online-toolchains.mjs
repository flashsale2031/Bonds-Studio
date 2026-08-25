#!/usr/bin/env node
/**
 * Bonds Studio Online Toolchain Broker
 *
 * Downloads user-space, open-source build utilities on demand into
 * .bonds-toolchains. Nothing is installed system-wide. Downloads are cached
 * and only refreshed when the requested version changes.
 *
 * Native platform SDKs with proprietary/licensing constraints (notably Apple
 * Xcode and Google's Android SDK command-line tools) are NOT silently replaced.
 * The broker reports those capabilities and uses an existing host SDK when
 * present. This keeps the product honest while removing unnecessary local
 * toolchain installation for the open-source parts of the build pipeline.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync, createWriteStream, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';
import { request } from 'node:https';

const root = path.resolve(process.env.BONDS_TERMINAL_ROOT || process.cwd());
const home = path.join(root, '.bonds-toolchains');
const bin = path.join(home, 'bin');
const metaPath = path.join(home, 'manifest.json');
mkdirSync(bin, { recursive: true });

const platform = os.platform();
const arch = os.arch();
const manifest = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, 'utf8')) : { installed: {}, updatedAt: null };

const urls = {
  gradle: 'https://services.gradle.org/distributions/gradle-8.14.3-bin.zip',
  openjdk: {
    linux: 'https://api.adoptium.net/v3/binary/latest/21/ga/linux/x64/jdk/hotspot/normal/eclipse',
    darwin: 'https://api.adoptium.net/v3/binary/latest/21/ga/mac/x64/jdk/hotspot/normal/eclipse',
    win32: 'https://api.adoptium.net/v3/binary/latest/21/ga/windows/x64/jdk/hotspot/normal/eclipse',
  },
};

function commandExists(cmd) {
  return spawnSync(platform === 'win32' ? 'where' : 'which', [cmd], { stdio: 'ignore' }).status === 0;
}

function download(url, destination) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(destination);
    const get = (target) => request(target, { headers: { 'User-Agent': 'Bonds-Studio-Toolchain-Broker/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        return get(new URL(res.headers.location, target).toString());
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`Download failed (${res.statusCode}) for ${target}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
    get(url);
  });
}

async function fetchCached(name, url) {
  const safe = name.replace(/[^a-z0-9_.-]/gi, '_');
  const target = path.join(home, safe);
  if (!existsSync(target)) await download(url, target);
  return target;
}

function sha256(file) {
  return createHash('sha256').update(readFileSync(file)).digest('hex');
}

function unpackZip(archive, destination) {
  mkdirSync(destination, { recursive: true });
  if (commandExists('unzip')) {
    const r = spawnSync('unzip', ['-q', '-o', archive, '-d', destination], { stdio: 'inherit' });
    return r.status === 0;
  }
  if (platform === 'win32' && commandExists('powershell')) {
    const r = spawnSync('powershell', ['-NoProfile', '-Command', `Expand-Archive -LiteralPath '${archive}' -DestinationPath '${destination}' -Force`], { stdio: 'inherit' });
    return r.status === 0;
  }
  return false;
}

async function installGradle() {
  const version = '8.14.3';
  const homeDir = path.join(home, `gradle-${version}`);
  const executable = path.join(homeDir, `gradle-${version}`, 'bin', platform === 'win32' ? 'gradle.bat' : 'gradle');
  if (!existsSync(executable)) {
    const archive = await fetchCached(`gradle-${version}.zip`, urls.gradle);
    if (!unpackZip(archive, homeDir)) throw new Error('Unable to unpack Gradle. Install unzip/PowerShell or use the host Gradle executable.');
  }
  manifest.installed.gradle = { version, source: urls.gradle, sha256: sha256(path.join(home, `gradle-${version}.zip`)) };
  return executable;
}

async function installOpenJdk() {
  if (!urls.openjdk[platform]) return null;
  const version = '21-latest';
  const ext = platform === 'win32' ? 'zip' : 'tar.gz';
  const archive = await fetchCached(`openjdk-${version}-${platform}.${ext}`, urls.openjdk[platform]);
  const homeDir = path.join(home, `jdk-${version}-${platform}`);
  const marker = path.join(homeDir, '.ready');
  if (!existsSync(marker)) {
    mkdirSync(homeDir, { recursive: true });
    let ok = false;
    if (ext === 'zip') ok = unpackZip(archive, homeDir);
    else if (commandExists('tar')) ok = spawnSync('tar', ['-xzf', archive, '-C', homeDir], { stdio: 'inherit' }).status === 0;
    if (!ok) return null;
    writeFileSync(marker, 'ready');
  }
  const candidates = [homeDir, ...readdirSync(homeDir, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => path.join(homeDir, e.name))];
  const jdkRoot = candidates.find(dir => existsSync(path.join(dir, 'bin', platform === 'win32' ? 'java.exe' : 'java'))) || homeDir;
  manifest.installed.openjdk = { version, source: urls.openjdk[platform], sha256: sha256(archive) };
  return jdkRoot;
}

export async function ensureToolchains({ android = false, native = false } = {}) {
  const result = { online: true, platform, arch, tools: {}, limitations: [] };
  try {
    if (!commandExists('gradle')) result.tools.gradle = await installGradle();
    else result.tools.gradle = 'host';
  } catch (error) { result.limitations.push(`Gradle bootstrap unavailable: ${error.message}`); }
  try {
    if (!commandExists('java')) result.tools.java = await installOpenJdk();
    else result.tools.java = 'host';
  } catch (error) { result.limitations.push(`OpenJDK bootstrap unavailable: ${error.message}`); }

  if (android) {
    result.limitations.push('Android SDK command-line tools are distributed by Google under their SDK license; Bonds Studio does not download or redistribute them as open-source software. An existing Android SDK or a licensed remote/container build service is required.');
  }
  if (native && platform === 'darwin') {
    result.limitations.push('Xcode is proprietary Apple software and cannot be sourced as an open-source SDK. macOS/Xcode remains required for signed iOS/macOS builds.');
  }
  if (native && platform !== 'darwin') result.limitations.push('Apple iOS/macOS artifacts cannot be produced without Apple tooling and a macOS build host.');

  manifest.updatedAt = new Date().toISOString();
  writeFileSync(metaPath, JSON.stringify(manifest, null, 2));
  return result;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const result = await ensureToolchains({ android: process.argv.includes('--android'), native: process.argv.includes('--native') });
  console.log(JSON.stringify(result, null, 2));
}
