const bool = (v, fallback = false) => v === undefined ? fallback : /^(1|true|yes|on)$/i.test(v);
export const registrarConfig = {
  mode: process.env.BONDS_DNS_MODE || 'development',
  provider: process.env.REGISTRAR_PROVIDER || 'generic-epp',
  apiBaseUrl: process.env.REGISTRAR_API_BASE_URL || '',
  apiToken: process.env.REGISTRAR_API_TOKEN || '',
  apiUsername: process.env.REGISTRAR_API_USERNAME || '',
  apiPassword: process.env.REGISTRAR_API_PASSWORD || '',
  timeoutMs: Number(process.env.REGISTRAR_TIMEOUT_MS || 10000),
  epp: {
    host: process.env.REGISTRY_HOSTNAME || '',
    port: Number(process.env.REGISTRY_PORT || 700),
    clientId: process.env.REGISTRY_CL_ID || '',
    password: process.env.REGISTRY_PASSWORD || '',
    tls: bool(process.env.REGISTRY_TLS, true),
    rejectUnauthorized: bool(process.env.EPP_TLS_REJECT_UNAUTHORIZED, true),
    timeoutMs: Number(process.env.EPP_CONNECTION_TIMEOUT || 10000)
  },
  cloudflare: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID || '',
    apiToken: process.env.CLOUDFLARE_API_TOKEN || '',
    pagesProject: process.env.CLOUDFLARE_PAGES_PROJECT || '',
    githubOwner: process.env.GITHUB_OWNER || 'flashsale2031',
    githubRepo: process.env.GITHUB_REPO || 'Bonds-Studio',
    githubBranch: process.env.GITHUB_BRANCH || 'main'
  }
};

export function registrarReady() {
  return Boolean((registrarConfig.apiBaseUrl && (registrarConfig.apiToken || (registrarConfig.apiUsername && registrarConfig.apiPassword))) || (registrarConfig.epp.host && registrarConfig.epp.clientId && registrarConfig.epp.password));
}

export function publicConfig() {
  return { mode: registrarConfig.mode, provider: registrarConfig.provider, registrarConfigured: Boolean(registrarConfig.apiBaseUrl && (registrarConfig.apiToken || registrarConfig.apiUsername)), eppConfigured: Boolean(registrarConfig.epp.host && registrarConfig.epp.clientId && registrarConfig.epp.password), cloudflareConfigured: Boolean(registrarConfig.cloudflare.accountId && registrarConfig.cloudflare.apiToken) };
}
