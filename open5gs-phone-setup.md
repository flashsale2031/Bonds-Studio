# Self-hosted Open5GS Phone setup

Bonds Studio Phone is designed for a **self-hosted Open5GS deployment**. Open5GS WebUI is used to manage mobile-core subscribers and network configuration; it is not itself a browser telephony API. Real calling requires an IMS/SIP layer such as Kamailio with RTP handling, and real SMS requires a messaging/SMS gateway connected to the mobile core.

The Phone server calls gateway adapters from the Bonds Studio server, never directly from the browser. Configure the following environment variables through the project’s secure secret settings:

| Variable | Purpose |
| --- | --- |
| `OPEN5GS_WEBUI_URL` | Optional link to the administrator’s local Open5GS WebUI. This is informational and is not used to place calls. |
| `OPEN5GS_VOICE_GATEWAY_URL` | HTTP(S) endpoint on the reachable self-hosted network that accepts `POST { to, from, source }` and starts an IMS/SIP call. |
| `OPEN5GS_SMS_GATEWAY_URL` | HTTP(S) endpoint on the reachable self-hosted network that accepts `POST { to, from, body, source }` and sends an SMS. |
| `OPEN5GS_API_TOKEN` | Optional bearer token expected by those gateway adapters. |

Private addresses such as `http://127.0.0.1:PORT`, `http://192.168.x.x:PORT`, or a VPN address work only when the Bonds Studio server can route to that network. A browser user’s local Open5GS WebUI is not automatically reachable by a cloud-hosted application. For a deployed Bonds Studio server, expose only the gateway adapter through a protected HTTPS or private network path; do not expose the Open5GS WebUI or core-network control ports directly to the public internet.

The Phone workspace records every attempted call and text in the guest-isolated database. If a gateway URL is missing or rejects a request, the record is marked `failed` and the UI shows the provider error; the application never reports a call or text as successful based only on a local button click.

## References

1. [Open5GS Quickstart](https://open5gs.org/open5gs/docs/guide/01-quickstart/)
2. [Open5GS VoLTE setup with Kamailio IMS](https://open5gs.org/open5gs/docs/tutorial/02-VoLTE-setup/)
3. [Open5GS JSON infoAPI](https://open5gs.org/open5gs/docs/tutorial/07-infoAPI-UE-gNB-session-data/)
