import tls from 'node:tls';
import net from 'node:net';

const EPP_NS = 'urn:ietf:params:xml:ns:epp-1.0';
const DOMAIN_NS = 'urn:ietf:params:xml:ns:domain-1.0';
const CONTACT_NS = 'urn:ietf:params:xml:ns:contact-1.0';
const HOST_NS = 'urn:ietf:params:xml:ns:host-1.0';
const esc = value => String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const tag = (name, value = '', attrs = '') => `<${name}${attrs}>${esc(value)}</${name}>`;
const child = (name, body = '', attrs = '') => `<${name}${attrs}>${body}</${name}>`;
const frame = xml => { const body = Buffer.from(xml); const out = Buffer.alloc(4 + body.length); out.writeUInt32BE(out.length, 0); body.copy(out, 4); return out; };
const command = body => `<?xml version="1.0" encoding="UTF-8"?><epp xmlns="${EPP_NS}">${body}</epp>`;

export function createEppClient(config = {}) {
  const cfg = { host: config.host, port: Number(config.port || 700), clientId: config.clientId, password: config.password, tls: config.tls !== false, rejectUnauthorized: config.rejectUnauthorized !== false, timeoutMs: Number(config.timeoutMs || 10000) };
  if (!cfg.host || !cfg.clientId || !cfg.password) throw new Error('EPP credentials are not configured');

  async function request(xml) {
    const socket = cfg.tls ? tls.connect({ host: cfg.host, port: cfg.port, servername: cfg.host, rejectUnauthorized: cfg.rejectUnauthorized }) : net.connect({ host: cfg.host, port: cfg.port });
    socket.setTimeout(cfg.timeoutMs, () => socket.destroy(new Error('EPP connection timeout')));
    await new Promise((resolve, reject) => { const ok = () => { cleanup(); resolve(); }; const fail = e => { cleanup(); reject(e); }; const cleanup = () => { socket.off('connect', ok); socket.off('secureConnect', ok); socket.off('error', fail); }; socket.once(cfg.tls ? 'secureConnect' : 'connect', ok); socket.once('error', fail); });
    let buffer = Buffer.alloc(0);
    const read = () => new Promise((resolve, reject) => { const onData = chunk => { buffer = Buffer.concat([buffer, chunk]); if (buffer.length >= 4) { const len = buffer.readUInt32BE(0); if (len >= 5 && buffer.length >= len) { const text = buffer.subarray(4, len).toString(); buffer = buffer.subarray(len); cleanup(); resolve(text); } } }; const onError = e => { cleanup(); reject(e); }; const cleanup = () => { socket.off('data', onData); socket.off('error', onError); }; socket.on('data', onData); socket.once('error', onError); });
    const send = async xmlText => { socket.write(frame(xmlText)); return read(); };
    try { await send(`<?xml version="1.0" encoding="UTF-8"?><epp xmlns="${EPP_NS}"><hello/></epp>`); const login = command(child('login', tag('clID', cfg.clientId) + tag('pw', cfg.password) + child('options', tag('version', '1.0') + tag('lang', 'en')) + child('svcs', tag('objURI', DOMAIN_NS) + tag('objURI', CONTACT_NS) + tag('objURI', HOST_NS)))); const loginXml = await send(login); if (!/<result\b[^>]*code=["']1\d\d\d["']/.test(loginXml)) throw new Error('EPP login failed'); const result = await send(xml); await send(command(child('logout'))); return result; } finally { socket.end(); }
  }

  return {
    checkDomain(name) { return request(command(child('check', child('domain:check', tag('domain:name', name)), 'xmlns:domain="' + DOMAIN_NS + '"'))); },
    createDomain({ name, years = 1, registrantId, adminContactIds = [], techContactIds = [], nameservers = [], authInfo, extensionXml = '' }) {
      const ns = nameservers.map(host => child('domain:hostObj', tag('domain:hostName', host))).join('');
      const contacts = adminContactIds.map(id => tag('domain:contact', id, ' type="admin"')).join('') + techContactIds.map(id => tag('domain:contact', id, ' type="tech"')).join('');
      const body = child('create', child('domain:create', tag('domain:name', name) + child('domain:period', String(years), ' unit="y"') + (ns ? child('domain:ns', ns) : '') + (registrantId ? tag('domain:registrant', registrantId) : '') + contacts + (authInfo ? child('domain:authInfo', tag('domain:pw', authInfo)) : '') + (extensionXml ? child('extension', extensionXml) : ''), 'xmlns:domain="' + DOMAIN_NS + '"'));
      return request(command(body));
    },
    updateDomain(name, changes) { return request(command(child('update', child('domain:update', tag('domain:name', name) + (changes.authInfo ? child('domain:chg', child('domain:authInfo', tag('domain:pw', changes.authInfo))) : ''), 'xmlns:domain="' + DOMAIN_NS + '"')))); },
    deleteDomain(name) { return request(command(child('delete', child('domain:delete', tag('domain:name', name), 'xmlns:domain="' + DOMAIN_NS + '"')))); }
  };
}
