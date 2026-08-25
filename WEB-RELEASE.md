# Web Release v3.7

This repository is the full Bonds Studio web application source, including the React/Vite client and Node/Express/tRPC server.

## Included

- Bonds Studio first-page ledger project section
- Multiple ledger accounts per platform
- Unique browser identity metadata per account
- Persistent popup session state
- Connect An Account / Connected states
- Start Entry / Stop Entry
- Adaptive task familiarity and experience retrieval
- Extreme-caution task classification and fail-closed behavior
- Domain/DNS management UI
- GitHub/Cloudflare-oriented domain workflow
- Full server API and database schema
- Docker and GitHub Actions support

## Deployment note

For the full application, deploy the Node server and database on a Node-capable host. GitHub is the source repository and CI/CD home. GitHub Pages can host only the static client and cannot provide the included server APIs or database.
