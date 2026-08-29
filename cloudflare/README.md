# Bonds Transceiver — Cloudflare Edge Runtime

The transceiver runs as a Cloudflare Worker with a Durable Object per enrolled device. This provides HTTPS at the edge and persistent per-device state without maintaining a VM.

## Endpoints

- `GET /health`
- `POST /devices/register`
- `POST /devices/heartbeat`
- `POST /devices/disconnect`
- `GET /devices/me`

Device requests use `Authorization: Bearer <deviceToken>`.

## GitHub deployment

The repository contains `.github/workflows/deploy-transceiver-cloudflare.yml`. Add these GitHub Actions secrets before enabling production deployment:

- `CLOUDFLARE_API_TOKEN` — scoped to Workers Scripts deployment for the intended Cloudflare account.
- `CLOUDFLARE_ACCOUNT_ID` — the target Cloudflare account ID.

Cloudflare Workers Builds can alternatively connect the repository directly and deploy on every push to `main`. The Worker name must match `cloudflare/wrangler.jsonc`.

## Production hardening

- Use a custom hostname such as `transceiver.bondsstudio.com` after the zone is available in Cloudflare.
- Restrict CORS to the Bonds Studio origin instead of `*` before production use.
- Keep device tokens only on the device and server-side secure storage.
- Rotate/revoke tokens when a device is removed.
- Enable Cloudflare logs/observability and rate limiting.
- Do not expose subscriber identifiers in public telemetry.

The Worker provides HTTPS/WebSocket-capable edge infrastructure. The current device protocol uses HTTPS heartbeats; WebSockets can be added for low-latency bidirectional commands once the client protocol requires persistent sessions.
