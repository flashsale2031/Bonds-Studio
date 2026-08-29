# Bonds Studio device transceiver

`transceiver.mjs` is the device-session service for Mobile Data Cell Service. It provides an authenticated HTTPS heartbeat transport suitable for device agents and carrier/device-management integrations.

## Endpoints

- `GET /health` — service health and connected-device count.
- `POST /devices/register` — register an authorized device and issue a per-device bearer token.
- `GET /devices/me` — authenticated device session information.
- `POST /devices/heartbeat` — refresh liveness and capabilities.
- `POST /devices/disconnect` — close the device session.

A device is considered connected while a heartbeat has been received within the last 30 seconds. Device tokens are generated at registration time and are never included in the public Mobile Data UI.

## Validation

`transceiver-test.mjs` exercises registration, authentication, session lookup, heartbeat/capability update, and disconnect using a local test device. It does not impersonate or access a real subscriber device.

## Production

Run the transceiver behind HTTPS with an authenticated device-management enrollment flow. GitHub Pages hosts the Bonds Studio browser UI only; it cannot host this persistent device server. The transceiver therefore needs a separately deployed server/container/edge runtime, with its public URL configured in the Studio application. No carrier credentials or subscriber secrets belong in source control.
