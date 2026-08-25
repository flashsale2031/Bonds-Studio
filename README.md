# Bonds Studio — Web Edition

**Bonds Studio** is a browser-ready ledger workspace for structured project records, account evidence, and explicit verification flows. This edition is intentionally static: it keeps the display fast, portable, and suitable for GitHub Pages while preserving the product’s evidence-first design language.

## Run locally

The project requires Node.js 20 or later and pnpm 10.

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

Open the printed local address in a browser. The app stores no server-side data and does not require environment variables.

## Validate and build

```bash
pnpm run check
pnpm run build
pnpm run preview
```

The production-ready artifact is written to `dist/`.

## GitHub Pages

The workflow at `.github/workflows/pages.yml` runs type checking, creates the Vite production build, and publishes only the generated `dist/` artifact. On a repository at `flashsale2031/Bonds-Studio`, the browser app is configured to use the `/Bonds-Studio/` base path under GitHub Pages.

To publish from GitHub, open **Settings → Pages** and select **GitHub Actions** as the deployment source. Every subsequent push to `main` will build and publish the browser experience.

## Design direction

The web display follows **The Archivist’s Desk**: contemporary editorial craft with a parchment working surface, register-green navigation, antique-gold verification marks, and evidence-first microcopy. The project uses generated Bonds Studio artwork by external CDN URL so the repository remains lightweight.
