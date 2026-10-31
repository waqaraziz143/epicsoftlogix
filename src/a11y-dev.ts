import axe from 'axe-core';

// Development-only controls; this module is excluded from production builds.
const panel = document.createElement('aside');
panel.id = 'a11y-audit';
panel.setAttribute('aria-label', 'Development accessibility audit');
panel.style.cssText = 'position:fixed;bottom:12px;right:12px;z-index:1000;background:white;color:#101c35;border:2px solid #101c35;padding:16px;max-width:min(520px,90vw);max-height:160px;overflow:auto;font:14px/1.5 monospace';
const allButton = document.createElement('button');
allButton.textContent = 'Run accessibility audit';
const currentButton = document.createElement('button');
currentButton.textContent = 'Audit this view';
for (const button of [allButton, currentButton]) {
  button.style.cssText = 'padding:12px;background:#101c35;color:white;border:1px solid white;cursor:pointer';
}
const output = document.createElement('pre');
output.style.cssText = 'white-space:pre-wrap;font:12px/1.5 monospace';
output.setAttribute('aria-live', 'polite');
panel.append(allButton, currentButton, output);
document.body.append(panel);

async function audit(route: string) {
  const result = await axe.run({ exclude: [['#a11y-audit']] }, {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] }
  });
  return {
    route,
    viewport: { width: document.documentElement.clientWidth, contentWidth: document.documentElement.scrollWidth },
    passes: result.passes.length,
    violations: result.violations.map(v => ({
      id: v.id, impact: v.impact, help: v.help,
      nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary }))
    })),
    incomplete: result.incomplete.map(v => ({ id: v.id, targets: v.nodes.map(n => n.target) }))
  };
}
allButton.addEventListener('click', async () => {
  allButton.disabled = currentButton.disabled = true;
  panel.setAttribute('aria-busy', 'true');
  output.textContent = 'Running…';
  const reports = [];
  const original = location.hash;
  try {
    for (const route of ['', 'services', 'work', 'about', 'contact', 'accessibility']) {
      location.hash = '#/' + route;
      await new Promise(resolve => setTimeout(resolve, 250));
      reports.push(await audit(route || 'home'));
    }
    output.textContent = JSON.stringify(reports, null, 2);
  } catch (error) {
    output.textContent = String(error);
  } finally {
    location.hash = original;
    panel.setAttribute('aria-busy', 'false');
    allButton.disabled = currentButton.disabled = false;
  }
});
currentButton.addEventListener('click', async () => {
  allButton.disabled = currentButton.disabled = true;
  panel.setAttribute('aria-busy', 'true');
  output.textContent = 'Running…';
  try { output.textContent = JSON.stringify(await audit(location.hash || 'home'), null, 2); }
  catch (error) { output.textContent = String(error); }
  finally { panel.setAttribute('aria-busy', 'false'); allButton.disabled = currentButton.disabled = false; }
});
