# Open5GS integration notes

The uploaded `Enhanced_Transceiver_Project_Final.zip` is a Python/CNG and UPF-style packet-processing project. Its documented modules cover GTP-U, a simulated UPF/DPDK engine, AES-GCM secure tunnels, and virtual transceiver servers; it does not contain a browser phone UI, SIP client, IMS service, or REST call/SMS API. Its configuration contains only local CNG/VTS TCP ports.

Official Open5GS documentation describes Open5GS as a 4G/5G NSA and 5G SA core made of network functions such as MME, HSS, AMF, SMF, UPF, AUSF, UDM, UDR, PCF, and related components. The official VoLTE tutorial requires an IMS/SIP layer such as Kamailio and RTPProxy for voice calls; Open5GS alone is not a browser calling API. The official infoAPI exposes read-only HTTP JSON endpoints for connected UE, gNB/eNB, and PDU/session information on the metrics port, not call-placement or SMS-sending endpoints.

Sources:

1. Open5GS Quickstart: https://open5gs.org/open5gs/docs/guide/01-quickstart/
2. Open5GS VoLTE Setup with Kamailio IMS: https://open5gs.org/open5gs/docs/tutorial/02-VoLTE-setup/
3. Open5GS JSON infoAPI: https://open5gs.org/open5gs/docs/tutorial/07-infoAPI-UE-gNB-session-data/

Implementation implication: build the Phone workspace and guest-isolated call/text records now, with a server-side Open5GS/IMS provider boundary. Real calls and SMS require a reachable provider/IMS gateway endpoint and credentials supplied by the user; without those, the UI must show a clear not-configured state rather than simulate a completed call or text.
