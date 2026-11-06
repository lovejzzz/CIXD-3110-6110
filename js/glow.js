/* ─────────────────────────────────────────────────────────────
   GLOW — interactive isometric hairline figures with glow lighting.
   Kernel, glow vocabulary and figure contract adapted from the
   iso-glow skill (which builds on iso-figure by Tolga Cohce, MIT).
   A question opts in with  q.glow = { mount(stage, api) {...}, hint_en, hint_zh, aria, css }
   Same contract as iso-glow FIGS: mount returns { key(e), keyup(e), demo(), unmount() }.
   ───────────────────────────────────────────────────────────── */
window.GLOW = (function () {
  const ISO = (() => {
    const C = Math.cos(Math.PI / 6), S = Math.sin(Math.PI / 6);
    function kernel(OX, OY) {
      const P = (x, y, z) => [(x - y) * C + OX, (x + y) * S - z + OY];
      const D = (x, y, z) => [(x - y) * C, (x + y) * S - z];
      const plane = (O, U, V) => { const o = P(...O), u = D(...U), v = D(...V);
        return `matrix(${u[0]} ${u[1]} ${v[0]} ${v[1]} ${o[0]} ${o[1]})`; };
      const TOP = (x, y, z) => plane([x, y, z], [1, 0, 0], [0, 1, 0]);
      const FRONT = (x, y, z) => plane([x, y, z], [1, 0, 0], [0, 0, -1]);
      const SIDE = (x, y, z) => plane([x, y, z], [0, -1, 0], [0, 0, -1]);
      const rect = (t, w, h, r = 0, cls = 'face') => `<g transform="${t}"><rect class="${cls}" width="${w}" height="${h}" rx="${r}"/></g>`;
      const rounded = (x, y, z, w, d, h, r, cls) => {
        r = Math.min(r, w / 2, d / 2);
        const n = 10, z1 = z + h, q = Math.PI / 4, H = Math.PI / 2, c = cls ? ' ' + cls : '';
        const arc = (cx, cy, a0, a1) => { const o = []; for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; o.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); } return o; };
        const ring = [...arc(x + w - r, y + r, -H, 0), ...arc(x + w - r, y + d - r, 0, H), ...arc(x + r, y + d - r, H, 2 * H), ...arc(x + r, y + r, 2 * H, 3 * H)];
        const vis = [...arc(x + w - r, y + r, -q, 0), ...arc(x + w - r, y + d - r, 0, H), ...arc(x + r, y + d - r, H, 3 * q)];
        const d3 = pts => 'M' + pts.map(p => P(...p).map(v => v.toFixed(2)).join(' ')).join('L') + 'Z';
        const wall = [...vis.map(([a, b]) => [a, b, z]), ...vis.slice().reverse().map(([a, b]) => [a, b, z1])];
        return `<path class="face${c}" d="${d3(wall)}"/><path class="face top${c}" d="${d3(ring.map(([a, b]) => [a, b, z1]))}"/>`;
      };
      const box = (x, y, z, w, d, h, r = 0) => r > 0 ? rounded(x, y, z, w, d, h, r, '') :
        rect(SIDE(x + w, y + d, z + h), d, h) + rect(FRONT(x, y + d, z + h), w, h) + rect(TOP(x, y, z + h), w, d, 0, 'face top');
      const boxc = (x, y, z, w, d, h, r, cls) => r > 0 ? rounded(x, y, z, w, d, h, r, cls) :
        rect(SIDE(x + w, y + d, z + h), d, h, 0, 'face ' + cls) + rect(FRONT(x, y + d, z + h), w, h, 0, 'face ' + cls) + rect(TOP(x, y, z + h), w, d, 0, 'face top ' + cls);
      const path = pts => 'M' + pts.map(p => P(...p).map(n => n.toFixed(2)).join(' ')).join('L');
      return { C, S, P, D, plane, TOP, FRONT, SIDE, rect, box, boxc, path };
    }
    function frame(points, margin = 0.09, aspect = 4 / 3) {
      const d = points.map(([x, y, z]) => [(x - y) * C, (x + y) * S - z]);
      let x0 = Math.min(...d.map(p => p[0])), x1 = Math.max(...d.map(p => p[0]));
      let y0 = Math.min(...d.map(p => p[1])), y1 = Math.max(...d.map(p => p[1]));
      const m = margin * Math.max(x1 - x0, y1 - y0);
      let w = x1 - x0 + 2 * m, h = y1 - y0 + 2 * m;
      let ox = m - x0, oy = m - y0;
      if (w / h < aspect) { const nw = h * aspect; ox += (nw - w) / 2; w = nw; }
      else { const nh = w / aspect; oy += (nh - h) / 2; h = nh; }
      return { ...kernel(ox, oy), viewBox: `0 0 ${w.toFixed(1)} ${h.toFixed(1)}`, W: w, H: h };
    }
    const slits = (a0, a1, step, b0, b1, vertical = true, cls = 'detail') => {
      let s = ''; for (let a = a0; a <= a1 + 1e-6; a += step)
        s += vertical ? `<line class="${cls}" x1="${a}" y1="${b0}" x2="${a}" y2="${b1}"/>` : `<line class="${cls}" x1="${b0}" y1="${a}" x2="${b1}" y2="${a}"/>`;
      return s;
    };
    const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return { kernel, frame, slits, esc };
  })();

  const AUDIO = (() => {
    let ctx = null, out = null, analyser = null;
    return () => {
      if (!ctx) {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        out = ctx.createGain(); out.gain.value = 0.4;
        analyser = ctx.createAnalyser(); analyser.fftSize = 1024;
        out.connect(analyser); analyser.connect(ctx.destination);
      }
      if (ctx.state === 'suspended') ctx.resume();
      return { ctx, out, analyser };
    };
  })();

  const ACCENTS = [['Ember', '#ff7a1a', '#ffb070'], ['Magenta', '#ff4fa3', '#ff9fcb'], ['Cyan', '#22d3ee', '#9beefa'],
    ['Lime', '#a3e635', '#d6f79f'], ['Violet', '#a78bfa', '#d6caff'], ['Ice', '#dfe9ef', '#ffffff']];
  const accentVars = (a, hi) => `--accent:${a}; --accent-hi:${hi}; --accent-dim:color-mix(in srgb, ${a} 12%, transparent); --glass-on:color-mix(in srgb, ${a} 10%, #101112);`;

  function injectOnce() {
    if (document.getElementById('glow-defs')) return;
    const fx = document.createElement('div');
    fx.id = 'glow-defs';
    fx.innerHTML = `<svg class="glow-fx" aria-hidden="true" width="0" height="0" style="position:absolute"><defs>
<filter id="glow" filterUnits="userSpaceOnUse" x="-2000" y="-2000" width="6000" height="6000"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<filter id="soft" filterUnits="userSpaceOnUse" x="-2000" y="-2000" width="6000" height="6000"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<filter id="bloom" filterUnits="userSpaceOnUse" x="-2000" y="-2000" width="6000" height="6000"><feGaussianBlur stdDeviation="9"/></filter>
</defs></svg>`;
    document.body.appendChild(fx);
    const st = document.createElement('style');
    st.textContent = ACCENTS.map(([n, a, hi]) => `.glow-plate[data-accent="${n.toLowerCase()}"] { ${accentVars(a, hi)} }`).join('\n');
    document.head.appendChild(st);
  }

  let current = null; // handle that receives keys
  const plates = [];

  function mountPlate(holder, q) {
    const fig = q.glow;
    const plate = holder.closest('.glow-plate');
    const readoutEl = plate.querySelector('.g-readout');
    let timers = [], frames = [], handle = {};
    const api = {
      iso: ISO,
      readout: s => { readoutEl.textContent = s; },
      audio: AUDIO,
      after: (ms, fn) => { const t = setTimeout(fn, ms); timers.push(t); return t; },
      every: (ms, fn) => { const t = setInterval(fn, ms); timers.push(t); return t; },
      loop: fn => { let alive = true; const f = ts => { if (!alive) return; fn(ts); requestAnimationFrame(f); };
        requestAnimationFrame(f); const stop = () => { alive = false; }; frames.push(stop); return stop; },
      flash: (el, ms = 160) => { if (!el) return; el.classList.add('down', 'lit'); clearTimeout(el._f1); clearTimeout(el._f2);
        el._f1 = setTimeout(() => el.classList.remove('down'), 110); el._f2 = setTimeout(() => el.classList.remove('lit'), ms); },
      replay: (el, cls = 'go') => { if (!el) return; el.classList.remove(cls); void el.getBoundingClientRect(); el.classList.add(cls); },
      power: on => { holder.classList.toggle('glow', !!on); },
      lang: () => document.body.classList.contains('lang-zh') ? 'zh' : document.body.classList.contains('lang-en') ? 'en' : 'both',
      // bilingual readout helper: api.say('on · 3 keys', '开 · 3 个键')
      say: (en, zh) => { const l = api.lang(); readoutEl.textContent = l === 'en' ? en : l === 'zh' ? (zh || en) : (zh ? `${en} · ${zh}` : en); },
    };
    function mount() {
      if (handle.unmount) try { handle.unmount(); } catch (e) { }
      timers.forEach(t => { clearTimeout(t); clearInterval(t); }); timers = [];
      frames.forEach(s => s()); frames = [];
      holder.classList.remove('glow');
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'g-stage'); svg.setAttribute('role', 'img'); svg.setAttribute('tabindex', '0');
      svg.setAttribute('aria-label', fig.aria || q.t_en);
      svg.dataset.fig = fig.id || ('g' + q.id.replace('.', '-'));
      holder.replaceChildren(svg);
      try { handle = fig.mount(svg, api) || {}; } catch (e) { console.error('glow mount error', q.id, e); handle = {}; }
      svg.addEventListener('pointerdown', () => { current = handle; svg.focus({ preventScroll: true }); });
      svg.addEventListener('focus', () => { current = handle; });
    }
    mount();
    plates.push({ plate, mount, get handle() { return handle; } });
    plate.querySelector('.g-replay') && plate.querySelector('.g-replay').addEventListener('click', () => { mount(); if (handle.demo) setTimeout(() => handle.demo(), 120); });
    return { demo: () => handle.demo && handle.demo() };
  }

  function init(CL) {
    const qs = []; CL.forEach(c => c.qs.forEach(q => q.glow && qs.push(q)));
    if (!qs.length) return;
    injectOnce();
    qs.forEach(q => { if (q.glow.css) { const st = document.createElement('style'); st.textContent = q.glow.css; document.head.appendChild(st); } });
    let saved = 'ember'; try { saved = localStorage.getItem('cixd-glow-accent') || 'ember'; } catch (e) { }
    const setAccent = k => {
      document.querySelectorAll('.glow-plate').forEach(p => {
        p.dataset.accent = k;
        p.querySelectorAll('.g-sw button').forEach(b => b.setAttribute('aria-checked', b.dataset.accent === k));
      });
      try { localStorage.setItem('cixd-glow-accent', k); } catch (e) { }
    };
    document.querySelectorAll('.glow-plate .g-sw').forEach(sw => {
      sw.innerHTML = ACCENTS.map(([n, a]) => `<button role="radio" data-accent="${n.toLowerCase()}" aria-label="${n}" title="${n}" style="--sw:${a}"><i></i></button>`).join('');
      sw.addEventListener('click', e => { const b = e.target.closest('button[data-accent]'); if (b) setAccent(b.dataset.accent); });
    });
    setAccent(saved);
    // lazy mount + auto demo when the plate first scrolls into view
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return; io.unobserve(en.target);
      const q = qs.find(x => x.id === en.target.dataset.glow);
      const h = mountPlate(en.target, q);
      if (q.glow.autoDemo !== false) setTimeout(() => h.demo(), 350);
    }), { rootMargin: '200px 0px' });
    document.querySelectorAll('[data-glow]').forEach(el => io.observe(el));
    window.addEventListener('keydown', e => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (!current || !document.activeElement || !document.activeElement.classList || !document.activeElement.classList.contains('g-stage')) return;
      if (current.key && current.key(e)) e.preventDefault();
    });
    window.addEventListener('keyup', e => { if (current && current.keyup && document.activeElement && document.activeElement.classList.contains('g-stage')) current.keyup(e); });
  }
  return { init, ISO };
})();
