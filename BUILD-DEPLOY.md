# Bonds Studio Build & Deploy

The built-in terminal now exposes repeatable build, preview, and deployment workflows.

## Build
- `npm run check` — TypeScript validation.
- `npm run build` — production Vite build.
- `npm run build:app` — check then production build.

## Preview
- `npm run preview` — serve the production bundle locally.
- `npm run release:local` — build then preview locally.

## Deploy
Provider presets are ordinary shell commands and require the provider CLI/authentication when applicable:
- `npm run deploy:vercel`
- `npm run deploy:netlify`
- `npm run deploy:cloudflare`

Provider credentials remain in the terminal/provider tooling rather than the browser UI.

## Universal device release matrix

Use the **Applications** section or the **Universal targets** terminal preset to run `npm run build:targets`.

The release matrix covers browser/PWA artifacts, Docker, Android APK/AAB, iOS IPA/XCARCHIVE, Windows EXE/MSIX, macOS DMG/PKG, and Linux AppImage/DEB/RPM. Native outputs are conditional on the host platform and SDK/toolchain. The release script reports unsupported targets instead of pretending they were built.
