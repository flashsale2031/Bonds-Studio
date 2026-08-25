export type ProviderResult = { accepted: boolean; providerId?: string; error?: string };

function providerConfig(kind: "call" | "text") {
  const baseUrl = process.env.OPEN5GS_API_BASE_URL;
  const endpoint = kind === "call" ? process.env.OPEN5GS_VOICE_GATEWAY_URL : process.env.OPEN5GS_SMS_GATEWAY_URL;
  return { url: endpoint ?? baseUrl, token: process.env.OPEN5GS_API_TOKEN };
}

async function postProvider(kind: "call" | "text", body: Record<string, unknown>): Promise<ProviderResult> {
  const config = providerConfig(kind);
  if (!config.url) return { accepted: false, error: "Open5GS/IMS provider is not configured. Add a reachable voice or SMS gateway endpoint before placing calls or sending texts." };
  try {
    const response = await fetch(config.url, {
      method: "POST",
      headers: { "content-type": "application/json", ...(config.token ? { authorization: `Bearer ${config.token}` } : {}) },
      body: JSON.stringify(body),
    });
    const payload = await response.json().catch(() => ({})) as { id?: string; callId?: string; messageId?: string; error?: string };
    if (!response.ok) return { accepted: false, error: payload.error ?? `Provider rejected the ${kind} request (${response.status}).` };
    return { accepted: true, providerId: payload.callId ?? payload.messageId ?? payload.id };
  } catch (error) {
    return { accepted: false, error: error instanceof Error ? error.message : `Could not reach the ${kind} gateway.` };
  }
}

export function isPhoneProviderConfigured() {
  return Boolean(process.env.OPEN5GS_VOICE_GATEWAY_URL || process.env.OPEN5GS_SMS_GATEWAY_URL || process.env.OPEN5GS_API_BASE_URL);
}

export function phoneProviderStatus() {
  return {
    configured: isPhoneProviderConfigured(),
    voiceConfigured: Boolean(process.env.OPEN5GS_VOICE_GATEWAY_URL || process.env.OPEN5GS_API_BASE_URL),
    smsConfigured: Boolean(process.env.OPEN5GS_SMS_GATEWAY_URL || process.env.OPEN5GS_API_BASE_URL),
    webUiUrl: process.env.OPEN5GS_WEBUI_URL ?? null,
    provider: "Self-hosted Open5GS + IMS/SMS gateway",
    note: "Open5GS WebUI manages the local mobile core; browser calls and SMS require reachable self-hosted IMS/SIP and messaging gateway adapters.",
  };
}

export function requestCall(to: string, from?: string) {
  return postProvider("call", { to, from, source: "bonds-studio-phone" });
}

export function requestText(to: string, body: string, from?: string) {
  return postProvider("text", { to, from, body, source: "bonds-studio-phone" });
}
