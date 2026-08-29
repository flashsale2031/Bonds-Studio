# Bonds Registrar integration

The uploaded **Bonds DNS Control Center — EPP Registrar v2.2** is the authoritative source for the Bonds Registrar control-center/EPP integration. It provides Cloudflare Pages/DNS synchronization, user-owned domain state, RDAP support, and RFC 5730-series EPP operations.

The uploaded `Registrar(1).zip` contains registrar-module examples (including WHMCS modules) and a government-domain management project. Those are reference adapters; they are not copied into the runtime because their application/runtime contracts differ from Bonds Studio's Node service.

Bonds Studio now exposes the compatible EPP client and configuration bridge under `server/registrar/`. Production `.com` registration requires authorized EPP or registrar API credentials. The application must never treat a local development registration as a real registry registration.

## Production environment

Set these server-side secrets:

```text
REGISTRAR_PROVIDER=generic-epp
REGISTRY_HOSTNAME=<authorized .com EPP endpoint>
REGISTRY_PORT=700
REGISTRY_CL_ID=<EPP client id>
REGISTRY_PASSWORD=<EPP password>
REGISTRY_TLS=true
EPP_TLS_REJECT_UNAUTHORIZED=true

CLOUDFLARE_ACCOUNT_ID=<account id>
CLOUDFLARE_API_TOKEN=<scoped token>
CLOUDFLARE_PAGES_PROJECT=<Pages project>
GITHUB_OWNER=flashsale2031
GITHUB_REPO=Bonds-Studio
GITHUB_BRANCH=main
```

Never commit these values. They belong in the hosting platform's encrypted secret store.
