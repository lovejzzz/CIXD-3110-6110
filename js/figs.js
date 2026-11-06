/* ─────────────────────────────────────────────────────────────
   F — a tiny "teardown" illustration engine.
   Everything returns SVG strings. Two coordinate systems:
     • iso world (x, y, z)  → projected with F.iso()
     • flat screen (sx, sy) → used directly
   Any element can carry `tip: 'termKey'` (looks up TERMS) or
   `note: {en, zh}` (inline) — the app turns these into tooltips.
   ───────────────────────────────────────────────────────────── */
(function () {
  const C = {
    ink: '#1b1b1a', paper: '#ffffff', mute: '#9b978e',
    blue: '#4f74d9', green: '#3e9c52', red: '#d9474f', mag: '#b0186e', amber: '#d99a1e',
    blueF: '#e6ecfb', greenF: '#e4f3e7', redF: '#fbe6e7', magF: '#f7e3ee', amberF: '#fbf0d9'
  };
  const SW = 1.15; // stroke width
  let S = 26, OX = 0, OY = 0; // iso scale + origin (set per figure)

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const attrs = o => Object.entries(o).filter(([, v]) => v !== undefined && v !== null && v !== false)
    .map(([k, v]) => `${k}="${esc(v)}"`).join(' ');
  const tipAttrs = (o = {}) => {
    const a = {};
    if (o.tip) a['data-tip'] = o.tip;
    if (o.note) { a['data-note-en'] = o.note.en || ''; a['data-note-zh'] = o.note.zh || ''; }
    if (o.jump) a['data-jump'] = o.jump;
    if (o.tip || o.note) a.class = 'part' + (o.cls ? ' ' + o.cls : ''); else if (o.cls) a.class = o.cls;
    return a;
  };
  const r2 = n => Math.round(n * 100) / 100;

  const F = {
    C,
    /* set up iso projection for the next drawing calls */
    setIso(scale, ox, oy) { S = scale; OX = ox; OY = oy; },
    iso(x, y, z = 0) { return [r2(OX + (x - y) * 0.866 * S), r2(OY + (x + y) * 0.5 * S - z * S)]; },

    svg(w, h, body, o = {}) {
      return `<svg class="fig ${o.cls || ''}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(o.label || 'diagram')}">
<defs>
 <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="${C.ink}" stroke-width="1.4"/></marker>
 <marker id="ahm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="${C.mag}" stroke-width="1.4"/></marker>
</defs>${body}</svg>`;
    },

    g(children, o = {}) {
      const a = tipAttrs(o);
      if (o.ex) { a.class = (a.class ? a.class + ' ' : '') + 'ex'; a.style = `--ex:${o.ex}px`; }
      if (o.transform) a.transform = o.transform;
      return `<g ${attrs(a)}>${children}</g>`;
    },

    /* ── iso primitives ───────────────────────────── */
    poly(pts, o = {}) {
      return `<polygon points="${pts.map(p => p.join(',')).join(' ')}" ${attrs({ fill: o.fill || C.paper, stroke: o.stroke || C.ink, 'stroke-width': o.sw || SW, 'stroke-linejoin': 'round', 'stroke-dasharray': o.dash })}/>`;
    },
    /* one plate: footprint (x,y,w,d) at height z, thickness t, top pattern */
    plate(o) {
      const { x = 0, y = 0, z = 0, w = 4, d = 4, t = 0.18, fill = C.paper, side = '#f3f2ee', pattern = null, pc = C.ink, density = 7, dash } = o;
      const I = F.iso;
      const top = [I(x, y, z + t), I(x + w, y, z + t), I(x + w, y + d, z + t), I(x, y + d, z + t)];
      const left = [I(x, y + d, z + t), I(x + w, y + d, z + t), I(x + w, y + d, z), I(x, y + d, z)];
      const right = [I(x + w, y, z + t), I(x + w, y + d, z + t), I(x + w, y + d, z), I(x + w, y, z)];
      let pat = '';
      const zt = z + t;
      const L = (a, b, c = pc, sw = 0.7) => `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${c}" stroke-width="${sw}"/>`;
      if (pattern === 'hatch' || pattern === 'cross') {
        const n = density * 2;
        for (let i = 1; i < n; i++) { const f = i / n; pat += L(I(x + w * f, y, zt), I(x + w * f, y + d, zt)); }
        if (pattern === 'cross') for (let i = 1; i < n; i++) { const f = i / n; pat += L(I(x, y + d * f, zt), I(x + w, y + d * f, zt)); }
      }
      if (pattern === 'diag') {
        const n = density * 2;
        for (let i = 1; i < n * 2; i++) {
          const k = i / n; // line x - y = const in unit square
          const a = k <= 1 ? [x + w * k, y] : [x + w, y + d * (k - 1)];
          const b = k <= 1 ? [x, y + d * k] : [x + w * (k - 1), y + d];
          pat += L(I(a[0], a[1], zt), I(b[0], b[1], zt), pc, 0.6);
        }
      }
      if (pattern === 'grid') {
        for (let i = 1; i < density; i++) { const f = i / density; pat += L(I(x + w * f, y, zt), I(x + w * f, y + d, zt)); pat += L(I(x, y + d * f, zt), I(x + w, y + d * f, zt)); }
      }
      if (pattern === 'dots') {
        for (let i = 1; i < density; i++) for (let j = 1; j < density; j++) {
          const p = I(x + w * i / density, y + d * j / density, zt); pat += `<circle cx="${p[0]}" cy="${p[1]}" r="0.9" fill="${pc}"/>`;
        }
      }
      if (pattern === 'chips') { // TFT-like squares
        for (let i = 1; i < density; i++) for (let j = 1; j < density; j++) {
          const cx = x + w * i / density, cy = y + d * j / density, h = Math.min(w, d) / density * 0.22;
          pat += F.poly([I(cx - h, cy - h, zt), I(cx + h, cy - h, zt), I(cx + h, cy + h, zt), I(cx - h, cy + h, zt)], { fill: pc, stroke: pc, sw: 0.5 });
        }
      }
      return F.poly(left, { fill: side, dash }) + F.poly(right, { fill: side, dash }) + F.poly(top, { fill, dash }) + pat;
    },
    /* a row of colored bars on a plane (like the RGB filters) */
    bars(o) {
      const { x = 0, y = 0, z = 0, w = 4, d = 4, n = 3, rows = 3, color = C.blue, fill = C.blueF } = o;
      let s = '';
      for (let r = 0; r < rows; r++) for (let i = 0; i < n; i++) {
        const bx = x + (w / n) * i + 0.15, by = y + (d / rows) * r + 0.15;
        s += F.plate({ x: bx, y: by, z, w: (w / n) * 0.7, d: (d / rows) * 0.42, t: 0.12, fill, side: fill, pc: color });
      }
      return s.replace(/stroke="#1b1b1a"/g, `stroke="${color}"`);
    },
    /* leader-line label: from anchor point `at` to x=`lx`, text on the far side */
    label(at, lx, text, o = {}) {
      const [ax, ay] = at; const right = lx > ax; const col = o.color || C.ink;
      const tx = right ? lx + 8 : lx - 8;
      const lines = String(text).split('\n');
      const t = lines.map((ln, i) => `<tspan x="${tx}" dy="${i ? 13 : 0}">${esc(ln)}</tspan>`).join('');
      return `<g class="lbl"><line x1="${ax}" y1="${ay}" x2="${lx}" y2="${ay}" stroke="${col}" stroke-width="0.8"/><circle cx="${ax}" cy="${ay}" r="2" fill="${col}"/>` +
        `<text x="${tx}" y="${ay + 4 - (lines.length - 1) * 6.5}" text-anchor="${right ? 'start' : 'end'}" class="lt" fill="${col}">${t}</text></g>`;
    },
    /* small secondary caption (e.g. Chinese under a label) */
    sub(x, y, text, o = {}) {
      return `<text x="${x}" y="${y}" text-anchor="${o.anchor || 'start'}" class="st ${o.cls || ''}" fill="${o.color || C.mute}">${esc(text)}</text>`;
    },

    /* ── flat primitives ──────────────────────────── */
    rect(x, y, w, h, o = {}) {
      const a = tipAttrs(o);
      return `<g ${attrs(a)}><rect ${attrs({ x, y, width: w, height: h, rx: o.rx ?? 2, fill: o.fill || C.paper, stroke: o.stroke || C.ink, 'stroke-width': o.sw || SW, 'stroke-dasharray': o.dash })}/>` +
        (o.text !== undefined ? F.lines(x + (o.align === 'left' ? 10 : w / 2), y + h / 2, o.text, { anchor: o.align === 'left' ? 'start' : 'middle', cls: o.tcls, color: o.tcolor }) : '') + `</g>`;
    },
    lines(x, y, text, o = {}) {
      const ls = String(text).split('\n'); const lh = o.lh || 14;
      const y0 = y - (ls.length - 1) * lh / 2 + 4;
      return `<text x="${x}" y="${y0}" text-anchor="${o.anchor || 'middle'}" class="${o.cls || 'lt'}" fill="${o.color || C.ink}">` +
        ls.map((l, i) => `<tspan x="${x}" dy="${i ? lh : 0}">${esc(l)}</tspan>`).join('') + `</text>`;
    },
    text(x, y, t, o = {}) { return F.lines(x, y, t, o); },
    circle(cx, cy, r, o = {}) {
      const a = tipAttrs(o);
      return `<g ${attrs(a)}><circle ${attrs({ cx, cy, r, fill: o.fill || C.paper, stroke: o.stroke || C.ink, 'stroke-width': o.sw || SW, 'stroke-dasharray': o.dash })}/>` +
        (o.text !== undefined ? F.lines(cx, cy, o.text, { cls: o.tcls || 'lt', color: o.tcolor }) : '') + `</g>`;
    },
    line(x1, y1, x2, y2, o = {}) {
      return `<line ${attrs({ x1, y1, x2, y2, stroke: o.stroke || C.ink, 'stroke-width': o.sw || SW, 'stroke-dasharray': o.dash, 'marker-end': o.arrow ? (o.stroke === C.mag ? 'url(#ahm)' : 'url(#ah)') : null, 'marker-start': o.both ? 'url(#ah)' : null, class: o.cls })}/>`;
    },
    arrow(x1, y1, x2, y2, o = {}) { return F.line(x1, y1, x2, y2, { ...o, arrow: true }); },
    path(d, o = {}) {
      const a = tipAttrs(o);
      return `<path ${attrs({ d, fill: o.fill || 'none', stroke: o.stroke || C.ink, 'stroke-width': o.sw || SW, 'stroke-dasharray': o.dash, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'marker-end': o.arrow ? (o.stroke === C.mag ? 'url(#ahm)' : 'url(#ah)') : null, ...a })}/>`;
    },
    /* bracket under a span (for things like URL parts) */
    bracket(x1, x2, y, o = {}) {
      const h = o.h || 7, m = (x1 + x2) / 2;
      return F.path(`M${x1},${y} v${h} H${m - 4} l4,${h * 0.8} l4,${-h * 0.8} H${x2} v${-h}`, { stroke: o.stroke || C.ink, sw: 0.9 });
    },

    /* ── composite: exploded iso stack ─────────────
       layers: top→bottom [{label, sub, pattern, fill, side, pc, tip, note, bars:{color,fill}, h}]
       returns full figure body (call inside F.svg) */
    stack(layers, o = {}) {
      const { w = 4, d = 4, gap = 3.0, t = 0.18, scale = 20, W = 760 } = o;
      const ox = o.ox ?? W / 2, labelL = o.labelL ?? ox - 175, labelR = o.labelR ?? ox + 175;
      const oy = o.oy ?? ((o.top ?? 26) + (layers.length - 1) * gap * scale);
      F.setIso(scale, ox, oy);
      const n = layers.length; let out = '';
      // draw bottom first so upper plates overlap
      for (let k = n - 1; k >= 0; k--) {
        const L = layers[k];
        const z = (n - 1 - k) * gap;
        const tt = L.t ?? t;
        let body = '';
        if (L.bars) body += F.bars({ x: 0, y: 0, z, w, d, ...L.bars });
        else body += F.plate({ x: 0, y: 0, z, w, d, t: tt, pattern: L.pattern, fill: L.fill, side: L.side, pc: L.pc, density: L.density });
        if (L.extra) body += L.extra(z);
        // label anchor: left-front corner area or right corner
        const side = L.side_ || o.side || (o.alternate && k % 2 ? 'r' : 'l');
        const anchor = side === 'l' ? F.iso(0, d * 0.55, z + tt) : F.iso(w * 0.55, 0, z + tt);
        const ttext = (L.label || '').toUpperCase();
        body += F.label(anchor, side === 'l' ? labelL : labelR, ttext, { color: L.lc });
        if (L.sub) {
          const lx = side === 'l' ? labelL - 8 : labelR + 8;
          body += F.sub(lx, anchor[1] + 17, L.sub, { anchor: side === 'l' ? 'end' : 'start' });
        }
        const collapse = (n - 1 - k) * (gap - tt) * scale * 0.82;
        out += F.g(body, { tip: L.tip, note: L.note, jump: L.jump, ex: Math.round(collapse) });
      }
      return out;
    }
  };
  /* height a stack needs: F.stackH(nLayers, {gap, scale, w, d, top}) */
  F.stackH = (n, o = {}) => {
    const { gap = 3.0, scale = 20, w = 4, d = 4, top = 26, t = 0.18 } = o;
    return Math.ceil(top + (n - 1) * gap * scale + (w + d) * 0.5 * scale + t * scale + 30);
  };
  /* monospace string laid out char-by-char so brackets line up (cw = char width) */
  // parts: [{s:'https', color, bg, tip, note}] → {svg, spans:[[x0,x1],...], end}
  F.mono = (x, y, parts, o = {}) => {
    const cw = o.cw || 8.4; let cx = x, svg = '', spans = [];
    for (const p of parts) {
      const w = p.s.length * cw;
      const a = tipAttrs(p);
      if (p.bg) svg += `<rect x="${cx - 1}" y="${y - (o.size || 14) + 1}" width="${w + 2}" height="${(o.size || 14) + 6}" rx="3" fill="${p.bg}"/>`;
      svg += `<g ${attrs(a)}>` + [...p.s].map((ch, i) => `<text x="${r2(cx + i * cw + cw / 2)}" y="${y}" text-anchor="middle" style="font:500 ${o.size || 14}px var(--mono)" fill="${p.color || C.ink}">${esc(ch)}</text>`).join('') +
        `<rect x="${cx}" y="${y - (o.size || 14)}" width="${w}" height="${(o.size || 14) + 6}" fill="transparent" stroke="none"/></g>`;
      spans.push([cx, cx + w]); cx += w;
    }
    return { svg, spans, end: cx };
  };
  window.F = F;
})();
