(() => {
  'use strict';

  const STORAGE_KEY = 'bonds-studio-agent-state-v1';
  const endpoint = window.BONDS_ASSISTANT_ENDPOINT || '';
  const state = loadState();
  const tools = {
    inspect_page: {
      label: 'Inspect workspace',
      run: async () => ({
        title: document.title,
        online: navigator.onLine,
        webgl: Boolean(document.createElement('canvas').getContext('webgl2') || document.createElement('canvas').getContext('webgl')),
        modules: [...document.querySelectorAll('.module-card strong')].map(node => node.textContent.trim()),
        mapReady: Boolean(document.getElementById('local-map') && window.L),
        serviceWorker: 'serviceWorker' in navigator,
      }),
    },
    diagnose: {
      label: 'Run diagnostics',
      run: async () => {
        const checks = [
          ['DOM', Boolean(document.querySelector('.earth-stage'))],
          ['Three.js', Boolean(window.THREE)],
          ['Leaflet', Boolean(window.L)],
          ['WebGL', Boolean(document.createElement('canvas').getContext('webgl'))],
          ['Offline cache', 'serviceWorker' in navigator],
          ['Local persistence', storageAvailable()],
        ];
        return { checks, passed: checks.filter(([, ok]) => ok).length, total: checks.length };
      },
    },
    orbit: {
      label: 'Control orbital simulation',
      run: async ({ command }) => {
        const focus = /sun|moon|mars|jupiter|saturn|venus|mercury|uranus|neptune/i.exec(command || '')?.[0];
        if (focus) {
          const select = document.getElementById('body-focus');
          if (select) { select.value = focus[0].toUpperCase() + focus.slice(1).toLowerCase(); select.dispatchEvent(new Event('change')); }
        }
        if (/reset/i.test(command || '')) document.getElementById('orbit-reset')?.click();
        if (/pause/i.test(command || '')) document.getElementById('orbit-play')?.click();
        return { focused: focus || document.getElementById('body-focus')?.value || 'Earth', action: /reset/i.test(command || '') ? 'reset' : 'updated' };
      },
    },
    map_location: {
      label: 'Open a mapped location',
      run: async ({ command }) => {
        const select = document.getElementById('street-location-select');
        if (!select) return { error: 'Location explorer is unavailable.' };
        const option = [...select.options].find(item => (command || '').toLowerCase().includes(item.textContent.toLowerCase().split(',')[0]));
        if (option) { select.value = option.value; select.dispatchEvent(new Event('change')); }
        return { location: (option || select.options[select.selectedIndex]).textContent.trim(), opened: Boolean(option) };
      },
    },
  };

  function storageAvailable() { try { const key = '__bonds_agent__'; localStorage.setItem(key, '1'); localStorage.removeItem(key); return true; } catch { return false; } }
  function loadState() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { runs: 0, history: [], checkpoint: null }; } catch { return { runs: 0, history: [], checkpoint: null }; } }
  function saveState() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {} }
  function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
  function inferTools(command) {
    const lower = command.toLowerCase();
    const selected = ['inspect_page'];
    if (/diagnos|debug|broken|issue|error|health|check/.test(lower)) selected.push('diagnose');
    if (/\b(orbit|planet|sun|moon|mars|jupiter|saturn|venus|mercury|uranus|neptune|spacecraft)\b/.test(lower)) selected.push('orbit');
    if (/map|street|location|city|london|paris|tokyo|nairobi|sydney|mumbai|cairo|dubai|new york/.test(lower)) selected.push('map_location');
    return [...new Set(selected)];
  }
  function makePlan(command) {
    const toolIds = inferTools(command);
    return [
      { title: 'Understand the request', detail: `Parse intent and select safe tools for: “${command}”` },
      ...toolIds.map(id => ({ title: tools[id].label, detail: `Execute ${id.replace('_', ' ')} and collect evidence.` })),
      { title: 'Verify and summarize', detail: 'Check results, save a checkpoint, and report what changed.' },
    ];
  }
  async function callRemote(command) {
    if (!endpoint) return null;
    const response = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ command, state }) });
    if (!response.ok) throw new Error(`Assistant service returned ${response.status}`);
    return response.json();
  }

  const panel = document.getElementById('agent-panel');
  const form = document.getElementById('agent-form');
  const input = document.getElementById('agent-input');
  const feed = document.getElementById('agent-feed');
  const planList = document.getElementById('agent-plan');
  const status = document.getElementById('agent-status');
  const runCount = document.getElementById('agent-run-count');
  if (!panel || !form || !input || !feed || !planList) return;

  function addMessage(role, text, meta = '') {
    const item = document.createElement('article'); item.className = `agent-message agent-message--${role}`;
    item.innerHTML = `<div class="agent-message__meta">${meta || (role === 'user' ? 'You' : 'Bonds Agent')}</div><p></p>`;
    item.querySelector('p').textContent = text; feed.appendChild(item); feed.scrollTop = feed.scrollHeight;
  }
  function renderPlan(plan, active = -1) {
    planList.replaceChildren();
    plan.forEach((step, index) => { const item = document.createElement('li'); item.className = index < active ? 'is-done' : index === active ? 'is-active' : ''; item.innerHTML = `<span>${index < active ? '✓' : index + 1}</span><div><strong>${step.title}</strong><small>${step.detail}</small></div>`; planList.appendChild(item); });
  }
  function setStatus(text, busy = false) { status.textContent = text; status.classList.toggle('is-busy', busy); }
  async function run(command) {
    const plan = makePlan(command); renderPlan(plan, 0); setStatus('Planning…', true); addMessage('user', command);
    state.runs += 1; runCount.textContent = state.runs;
    await sleep(260);
    const remote = await callRemote(command).catch(error => ({ error: error.message }));
    if (remote) { addMessage('agent', remote.error ? `Remote handoff failed: ${remote.error}` : remote.answer || JSON.stringify(remote), 'Remote agent'); setStatus('Ready'); return; }
    const results = [];
    for (let index = 1; index < plan.length - 1; index += 1) {
      renderPlan(plan, index); setStatus(`${plan[index].title}…`, true); await sleep(220);
      const id = inferTools(command)[index - 1];
      try { results.push({ id, value: await tools[id].run({ command }) }); }
      catch (error) { results.push({ id, value: { error: error.message } }); }
    }
    renderPlan(plan, plan.length - 1); setStatus('Verifying…', true); await sleep(180); renderPlan(plan, plan.length); setStatus('Ready');
    state.checkpoint = { command, completedAt: new Date().toISOString(), results }; state.history = [...state.history.slice(-7), state.checkpoint]; saveState();
    const failures = results.flatMap(result => result.value.checks ? result.value.checks.filter(([, ok]) => !ok).map(([name]) => name) : result.value.error ? [result.value.error] : []);
    const summary = failures.length ? `I completed the workflow, but verification found: ${failures.join(', ')}.` : `Completed ${results.length} tool action${results.length === 1 ? '' : 's'} and verified the workspace. ${results.map(result => result.value.location || result.value.focused || (result.value.passed ? `${result.value.passed}/${result.value.total} checks passed` : '')).filter(Boolean).join(' ')}`;
    addMessage('agent', summary); addMessage('agent', `Checkpoint saved locally. ${endpoint ? 'Remote execution is available when configured.' : 'Add BONDS_ASSISTANT_ENDPOINT to connect a larger server-side model.'}`, 'System');
  }
  form.addEventListener('submit', event => { event.preventDefault(); const command = input.value.trim(); if (!command) return; input.value = ''; run(command); });
  document.getElementById('agent-open')?.addEventListener('click', () => { panel.classList.add('is-open'); input.focus(); });
  document.getElementById('agent-close')?.addEventListener('click', () => panel.classList.remove('is-open'));
  document.querySelectorAll('[data-agent-command]').forEach(button => button.addEventListener('click', () => { panel.classList.add('is-open'); input.value = button.dataset.agentCommand; form.requestSubmit(); }));
  runCount.textContent = state.runs;
  renderPlan([{ title: 'Ready for a problem', detail: 'Describe an issue, investigation, or multi-step task.' }, { title: 'Execute with tools', detail: 'The agent will act, verify, and save a checkpoint.' }]);
  addMessage('agent', 'I can plan a task, inspect this workspace, run diagnostics, control the orbital view, open locations, and verify the result.');
})();
