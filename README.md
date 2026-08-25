# Bonds Studio — Web Edition v3.7

A GitHub-ready full-stack web edition of Bonds Studio with the unified ledger platform, multi-account browser identities, adaptive ledger AI, extreme-caution safeguards, and domain/DNS management UI.

## Run locally

Requirements: Node.js 20+ and pnpm 10+.

```bash
pnpm install
cp .env.example .env
pnpm run dev
```

Open `http://localhost:3000`.

## Production

```bash
pnpm install --frozen-lockfile
pnpm run check
pnpm run test
pnpm run build
pnpm start
```

The repository includes a Dockerfile and GitHub Actions CI workflow.

## GitHub

Create a repository, then:

```bash
git init
git add .
git commit -m "Bonds Studio Web v3.7"
git branch -M main
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

GitHub Pages is not the full deployment target because Bonds Studio includes a Node/Express backend, database access, authentication, and tRPC APIs. Host the full application on a Node-capable service while using GitHub as the source repository. The included CI workflow verifies the complete application on every push.

## Ledger AI safety

The ledger assistant uses adaptive task familiarity and experience retrieval, but learned experience never overrides current evidence or safety rules. Ambiguous, attention-check, subjective, destructive, sensitive, or unverifiable tasks can be paused for human review instead of guessed.

## Browser sessions

Each ledger account has its own browser identity metadata and retained session state. A normal web browser cannot programmatically control another browser's native profile or bypass third-party cross-origin restrictions. Native browser automation should use a separately authorized extension/desktop bridge.
