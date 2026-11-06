(function () {
  const T = window.TERMS, CL = window.CLASSES.sort((a, b) => a.order - b.order);
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const store = {
    get(k, d) { try { const v = localStorage.getItem('cixd-' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('cixd-' + k, JSON.stringify(v)); } catch (e) { } }
  };

  /* ── tiny markup: [[key]] [[key|text]] **bold** `code` "- " bullets, blank-line paragraphs ── */
  function md(src, lang) {
    if (!src) return '';
    const inline = s => esc(s)
      .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, k, t) => {
        k = k.trim();
        if (!T[k]) console.warn('missing term', k);
        const label = t || (T[k] ? (lang === 'zh' ? T[k].zh : T[k].en) : k);
        return `<span class="term" data-tip="${k}" tabindex="0">${label}</span>`;
      })
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?![*\w])/g, '$1<em>$2</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
    return src.trim().split(/\n\s*\n/).map(block => {
      // group consecutive lines by kind: ul item, ol item, or text
      const out = []; let cur = null;
      for (const l of block.split('\n')) {
        const kind = /^\s*[-•]\s+/.test(l) ? 'ul' : /^\s*\d+[.)]\s+/.test(l) ? 'ol' : 'p';
        if (!cur || cur.kind !== kind) { cur = { kind, lines: [] }; out.push(cur); }
        cur.lines.push(l.replace(/^\s*(?:[-•]|\d+[.)])\s+/, ''));
      }
      return out.map(g => g.kind === 'p' ? `<p>${g.lines.map(inline).join('<br>')}</p>`
        : `<${g.kind}>${g.lines.map(l => `<li>${inline(l)}</li>`).join('')}</${g.kind}>`).join('');
    }).join('');
  }

  /* ── render ───────────────────────────────────── */
  const done = new Set(store.get('done', []));
  const total = CL.reduce((n, c) => n + c.qs.length, 0);

  function nav() {
    return CL.map(c => `<a href="#c${c.n}" class="nav-c" data-c="${c.n}">
      <span class="nav-n">${c.n}</span><span class="nav-t"><span class="en">${esc(c.t_en)}</span><span class="zh">${esc(c.t_zh)}</span></span>
      <span class="nav-p" data-np="${c.n}"></span></a>`).join('') +
      `<a href="#glossary" class="nav-c nav-g" data-c="glossary"><span class="nav-n">≡</span><span class="nav-t"><span class="en">Glossary</span><span class="zh">词汇表</span></span><span class="nav-p"></span></a>`;
  }

  const qById = {}; CL.forEach(c => c.qs.forEach(q => { qById[q.id] = q; q._c = c; }));
  const qAnchor = id => '#q' + id.replace('.', '-');
  const two = (en, zh, cls = '') => `<div class="bi ${cls}"><div class="en">${md(en, 'en')}</div><div class="zh">${md(zh, 'zh')}</div></div>`;

  function card(c, q) {
    let fig = '';
    try { fig = q.fig ? q.fig() : ''; } catch (e) { console.error('figure error', q.id, e); fig = `<p class="err">figure error ${q.id}</p>`; }
    let widget = '';
    try { widget = q.widget ? q.widget.html() : ''; } catch (e) { console.error('widget error', q.id, e); }
    const hasShort = q.short_en || q.short_zh;
    const rel = (q.rel || []).filter(id => qById[id]);
    const links = q.links || [];
    return `<article class="q" id="q${q.id.replace(".", "-")}" data-id="${q.id}">
  <header class="q-h">
    <div class="q-id">${q.id}</div>
    <h3 class="q-title"><span class="en">${esc(q.t_en)}</span><span class="zh">${esc(q.t_zh)}</span></h3>
    ${q.src ? `<div class="q-src" title="Source hint on the exam / 考卷上的出处提示">↳ ${esc(q.src)}</div>` : ''}
    <button class="q-done ${done.has(q.id) ? 'on' : ''}" data-done="${q.id}" aria-pressed="${done.has(q.id)}"><span class="box"></span><span class="en">Got it</span><span class="zh">懂了</span></button>
  </header>
  <div class="q-prompt"><p class="en">${esc(q.q_en)}</p><p class="zh">${esc(q.q_zh)}</p></div>
  ${q.glow ? `<figure class="plate glow-plate" data-accent="ember">
    <div class="g-cap"><span class="g-num">FIG. ${q.id} · <b class="live">INTERACTIVE</b></span><span class="g-name"><span class="en">${esc(q.glow.name_en || q.t_en)}</span><span class="zh">${esc(q.glow.name_zh || q.t_zh)}</span></span><span class="g-sw" role="radiogroup" aria-label="Glow colour"></span></div>
    <div class="g-holder" data-glow="${q.id}"></div>
    <div class="g-cap g-bottom"><span class="g-hint"><span class="en">${esc(q.glow.hint_en || '')}</span><span class="zh">${esc(q.glow.hint_zh || '')}</span></span><button class="g-replay" title="Reset & replay demo / 重置并演示">↻</button><span class="g-readout"></span></div>
    ${(q.cap_en || q.cap_zh) ? `<figcaption>${two(q.cap_en, q.cap_zh)}</figcaption>` : ''}
  </figure>` : ''}
  ${!q.glow && (fig || widget) ? `<figure class="plate${widget ? ' has-widget' : ''}">
    <div class="plate-tag"><span>FIG. ${q.id}${widget ? ' · <b class="live">INTERACTIVE</b>' : ''}</span><span class="plate-hint"><span class="en">${widget ? 'try the controls' : 'hover the parts'}</span><span class="zh">${widget ? '动手试一试' : '悬停部件查看说明'}</span></span></div>
    ${widget ? `<div class="widget" data-widget="${q.id}">${widget}</div>` : fig}
    ${(q.cap_en || q.cap_zh) ? `<figcaption>${two(q.cap_en, q.cap_zh)}</figcaption>` : ''}
  </figure>` : ''}
  <div class="recall-gate">
    <p class="en">Recall mode — say your answer out loud first.</p><p class="zh">自测模式——先用自己的话说一遍。</p>
    <button class="reveal-btn" data-reveal="${q.id}"><span class="en">Show answer</span><span class="zh">显示答案</span></button>
  </div>
  <div class="ans-wrap">
  ${hasShort ? `<section class="ans short">
    <h4><span class="en">Full-credit answer</span><span class="zh">得分版答案</span><i class="h4-note"><span class="en">what to write on the exam</span><span class="zh">考卷上写到这些就够</span></i></h4>
    ${two(q.short_en, q.short_zh)}
  </section>` : ''}
  <details class="ans long" ${hasShort ? '' : 'open'}>
    <summary><span class="en">${hasShort ? 'Full explanation' : 'Answer'}</span><span class="zh">${hasShort ? '完整讲解' : '参考答案'}</span><span class="chev"></span></summary>
    ${two(q.a_en, q.a_zh)}
  </details>
  ${(q.hook_en || q.trap_en) ? `<div class="notes">
    ${q.hook_en ? `<div class="note hook"><h5><span class="en">Remember it in one line</span><span class="zh">一句话记住</span></h5>${two(q.hook_en, q.hook_zh)}</div>` : ''}
    ${q.trap_en ? `<div class="note trap"><h5><span class="en">Don't lose points</span><span class="zh">易错点</span></h5>${two(q.trap_en, q.trap_zh)}</div>` : ''}
  </div>` : ''}
  ${(q.basis_en || links.length || rel.length) ? `<footer class="q-foot">
    ${(q.basis_en || links.length) ? `<div class="basis"><h5><span class="en">Where this comes from</span><span class="zh">依据与出处</span></h5>
      ${q.basis_en ? two(q.basis_en, q.basis_zh) : ''}
      ${links.length ? `<div class="links">${links.map(l => `<a href="${esc(l.u)}" target="_blank" rel="noopener">${esc(l.t)} ↗</a>`).join('')}</div>` : ''}
    </div>` : ''}
    ${rel.length ? `<div class="rel"><h5><span class="en">Connects to</span><span class="zh">相关题目</span></h5>${rel.map(id => `<a href="${qAnchor(id)}" class="rel-chip"><b>${id}</b> <span class="en">${esc(qById[id].t_en)}</span><span class="zh">${esc(qById[id].t_zh)}</span></a>`).join('')}</div>` : ''}
  </footer>` : ''}
  </div>
</article>`;
  }

  function section(c) {
    return `<section class="cls" id="c${c.n}">
  <div class="cls-h">
    <div class="cls-n">${c.n === 'C' ? 'C' : c.n}<small>${c.n === 'C' ? '' : 'CLASS'}</small></div>
    <div>
      <h2><span class="en">${esc(c.t_en)}</span><span class="zh">${esc(c.t_zh)}</span></h2>
      ${two0(c.intro_en, c.intro_zh)}
    </div>
  </div>
  ${c.qs.map(q => card(c, q)).join('')}
</section>`;
  }
  const two0 = (en, zh) => en ? `<div class="bi intro"><div class="en">${md(en, 'en')}</div><div class="zh">${md(zh, 'zh')}</div></div>` : '';

  $('#nav').innerHTML = nav();
  $('#content').innerHTML = CL.map(section).join('');
  if (window.HERO) $('#hero-fig').innerHTML = window.HERO();

  /* glow figures (lazy, per plate) */
  if (window.GLOW) try { GLOW.init(CL); } catch (e) { console.error('glow init', e); }

  /* mount interactive widgets */
  CL.forEach(c => c.qs.forEach(q => {
    if (!q.widget || !q.widget.mount) return;
    const el = $(`[data-widget="${q.id}"]`);
    try { el && q.widget.mount(el); } catch (e) { console.error('widget mount error', q.id, e); }
  }));

  /* ── glossary (built from TERMS + where each is used) ── */
  const usedIn = {};
  CL.forEach(c => c.qs.forEach(q => {
    const txt = [q.a_en, q.short_en, q.a_zh, q.short_zh].join(' ');
    (txt.match(/\[\[([^\]|]+)/g) || []).forEach(m => { const k = m.slice(2).trim(); (usedIn[k] = usedIn[k] || new Set()).add(q.id); });
  }));
  const gkeys = Object.keys(T).sort((a, b) => T[a].en.localeCompare(T[b].en));
  $('#glossary-list').innerHTML = gkeys.map(k => {
    const t = T[k], ids = [...(usedIn[k] || [])];
    const hay = (t.en + ' ' + t.zh + ' ' + (t.d_en || '') + ' ' + (t.d_zh || '')).toLowerCase();
    return `<div class="g-item" data-hay="${esc(hay)}">
      <div class="g-h"><b>${esc(t.en)}</b><span class="zh">${esc(t.zh)}</span></div>
      <div class="g-d"><p class="en">${esc(t.d_en || '')}</p><p class="zh">${esc(t.d_zh || '')}</p></div>
      ${ids.length ? `<div class="g-used">${ids.map(id => `<a href="${qAnchor(id)}">${id}</a>`).join('')}</div>` : ''}
    </div>`;
  }).join('');
  $('#g-count').textContent = gkeys.length;
  $('#g-search').addEventListener('input', e => {
    const v = e.target.value.trim().toLowerCase(); let n = 0;
    $$('.g-item').forEach(it => { const show = !v || it.dataset.hay.includes(v); it.hidden = !show; n += show; });
    $('#g-count').textContent = n;
  });

  /* ── language mode ───────────────────────────── */
  const setLang = m => {
    document.body.classList.remove('lang-both', 'lang-en', 'lang-zh');
    document.body.classList.add('lang-' + m);
    $$('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === m));
    store.set('lang', m);
  };
  $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  setLang(store.get('lang', 'both'));

  /* ── progress ────────────────────────────────── */
  function progress() {
    $('#prog-bar').style.width = (done.size / total * 100) + '%';
    $('#prog-n').textContent = `${done.size}/${total}`;
    CL.forEach(c => {
      const n = c.qs.filter(q => done.has(q.id)).length;
      const el = $(`[data-np="${c.n}"]`); if (el) el.textContent = n ? `${n}/${c.qs.length}` : '';
      el && el.classList.toggle('full', n === c.qs.length);
    });
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-done]'); if (!b) return;
    const id = b.dataset.done;
    done.has(id) ? done.delete(id) : done.add(id);
    b.classList.toggle('on', done.has(id)); b.setAttribute('aria-pressed', done.has(id));
    store.set('done', [...done]); progress();
  });
  progress();

  /* ── tooltip ─────────────────────────────────── */
  const tip = $('#tip'); let pinned = null;
  function tipHTML(el) {
    const k = el.dataset.tip;
    const lang = document.body.classList.contains('lang-en') ? 'en' : document.body.classList.contains('lang-zh') ? 'zh' : 'both';
    let head_en = '', head_zh = '', d_en = '', d_zh = '';
    if (k && T[k]) { head_en = T[k].en; head_zh = T[k].zh; d_en = T[k].d_en; d_zh = T[k].d_zh; }
    if (el.dataset.noteEn || el.dataset.noteZh) {
      if (!k) { d_en = el.dataset.noteEn; d_zh = el.dataset.noteZh; }
      else { d_en = el.dataset.noteEn + (d_en ? ' — ' + d_en : ''); d_zh = el.dataset.noteZh + (d_zh ? ' —— ' + d_zh : ''); }
    }
    if (!head_en && !d_en) return '';
    const h = lang === 'en' ? head_en : lang === 'zh' ? (head_zh || head_en) : [head_en, head_zh].filter(Boolean).join(' · ');
    return (h ? `<div class="tip-h">${esc(h)}</div>` : '') +
      (lang !== 'zh' && d_en ? `<div class="tip-en">${md(d_en, 'en').replace(/<span class="term"[^>]*>(.*?)<\/span>/g, '<b>$1</b>')}</div>` : '') +
      (lang !== 'en' && d_zh ? `<div class="tip-zh">${md(d_zh, 'zh').replace(/<span class="term"[^>]*>(.*?)<\/span>/g, '<b>$1</b>')}</div>` : '');
  }
  function place(el, ev) {
    const html = tipHTML(el); if (!html) return hide();
    tip.innerHTML = html; tip.classList.add('show');
    const r = el.getBoundingClientRect();
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let x = ev && ev.clientX ? ev.clientX - tw / 2 : r.left + r.width / 2 - tw / 2;
    let y = (ev && ev.clientY ? ev.clientY : r.top) - th - 14;
    if (!(ev && ev.clientY) && el.closest('svg') === null) y = r.top - th - 10;
    if (y < 8) y = (ev && ev.clientY ? ev.clientY : r.bottom) + 18;
    x = Math.max(8, Math.min(x, innerWidth - tw - 8));
    tip.style.transform = `translate(${x}px, ${y}px)`;
  }
  function hide() { tip.classList.remove('show'); }
  const target = e => e.target.closest && e.target.closest('[data-tip],[data-note-en]');
  document.addEventListener('mouseover', e => { if (pinned) return; const el = target(e); el ? place(el, e) : hide(); });
  document.addEventListener('mousemove', e => { if (pinned) return; const el = target(e); if (el && el.closest('svg')) place(el, e); });
  document.addEventListener('focusin', e => { const el = target(e); el && place(el); });
  document.addEventListener('focusout', hide);
  // touch: tap to pin, tap elsewhere to close
  document.addEventListener('click', e => {
    const el = target(e);
    if (el && matchMedia('(hover: none)').matches) { pinned = el; place(el, e); e.preventDefault(); }
    else if (!el) { pinned = null; hide(); }
  });
  addEventListener('scroll', () => { if (!pinned) hide(); }, { passive: true });

  /* ── exploded-view reveal + nav highlight ───── */
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: 0.25 });
  $$('svg.fig').forEach(s => io.observe(s));
  const navIO = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) $$('.nav-c').forEach(a => a.classList.toggle('cur', a.dataset.c === (en.target.id === 'glossary' ? 'glossary' : en.target.id.slice(1))));
  }), { rootMargin: '-40% 0px -55% 0px' });
  $$('section.cls, #glossary').forEach(s => navIO.observe(s));

  /* one entrance per card (skipped for cards already on screen at load) */
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const cio = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('reveal-in'); en.target.classList.remove('pre'); cio.unobserve(en.target); } }), { threshold: 0.06 });
    $$('article.q').forEach(q => { if (q.getBoundingClientRect().top > innerHeight) { q.classList.add('pre'); cio.observe(q); } });
  }

  /* hero layers jump */
  document.addEventListener('click', e => { const g = e.target.closest('[data-jump]'); if (g) location.hash = g.dataset.jump; });
  /* expand/collapse print */
  $('#print') && $('#print').addEventListener('click', () => print());

  /* ── recall mode ─────────────────────────────── */
  const setRecall = on => {
    document.body.classList.toggle('recall', on);
    $('#recall-toggle').setAttribute('aria-pressed', on);
    $('#recall-toggle').classList.toggle('on', on);
    if (!on) $$('.q.revealed').forEach(q => q.classList.remove('revealed'));
    store.set('recall', on);
  };
  $('#recall-toggle').addEventListener('click', () => setRecall(!document.body.classList.contains('recall')));
  setRecall(store.get('recall', false));
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-reveal]'); if (!b) return;
    b.closest('.q').classList.add('revealed');
  });

  /* ── flashcards ──────────────────────────────── */
  const deck = []; CL.forEach(c => c.qs.forEach(q => deck.push(q)));
  let fi = 0, flipped = false, onlyTodo = false;
  const fc = $('#flash');
  const cards = () => onlyTodo ? deck.filter(q => !done.has(q.id)) : deck;
  function drawCard() {
    const list = cards(); if (!list.length) { fi = 0; $('#fc-card').innerHTML = `<div class="fc-empty"><span class="en">Everything is marked “Got it”.</span><span class="zh">全部标记为“懂了”。</span></div>`; $('#fc-pos').textContent = '0/0'; return; }
    fi = (fi + list.length) % list.length; const q = list[fi];
    $('#fc-pos').textContent = `${fi + 1}/${list.length}`;
    $('#fc-card').classList.toggle('flipped', flipped);
    $('#fc-card').innerHTML = `
      <div class="fc-face fc-front">
        <div class="fc-meta"><b>${q.id}</b> <span class="en">${esc(q.t_en)}</span><span class="zh">${esc(q.t_zh)}</span></div>
        <p class="fc-q en">${esc(q.q_en)}</p><p class="fc-q zh">${esc(q.q_zh)}</p>
        <p class="fc-hint"><span class="en">Answer out loud, then press space to flip.</span><span class="zh">先说出答案，再按空格翻面。</span></p>
      </div>
      <div class="fc-face fc-back">
        <div class="fc-meta"><b>${q.id}</b> <span class="en">${esc(q.t_en)}</span><span class="zh">${esc(q.t_zh)}</span></div>
        ${q.hook_en ? `<div class="fc-hook">${two(q.hook_en, q.hook_zh)}</div>` : ''}
        ${q.short_en ? two(q.short_en, q.short_zh) : ''}
        <a class="fc-go" href="${qAnchor(q.id)}" data-fc-close><span class="en">Open full question →</span><span class="zh">打开完整题目 →</span></a>
      </div>`;
    $('#fc-know').classList.toggle('on', done.has(q.id));
  }
  let fcReturn = null;
  const openFlash = () => { fcReturn = document.activeElement; fc.hidden = false; document.body.classList.add('fc-open'); flipped = false; drawCard(); $('#fc-card').focus(); };
  const closeFlash = () => { fc.hidden = true; document.body.classList.remove('fc-open'); if (fcReturn && fcReturn.focus) fcReturn.focus(); };
  $('#flash-open').addEventListener('click', openFlash);
  fc.addEventListener('click', e => {
    if (e.target === fc || e.target.closest('[data-fc-close]')) return closeFlash();
    if (e.target.closest('#fc-prev')) { fi--; flipped = false; drawCard(); }
    else if (e.target.closest('#fc-next')) { fi++; flipped = false; drawCard(); }
    else if (e.target.closest('#fc-know')) {
      const q = cards()[fi]; if (!q) return;
      done.has(q.id) ? done.delete(q.id) : done.add(q.id); store.set('done', [...done]); progress();
      $$(`[data-done="${q.id}"]`).forEach(b => b.classList.toggle('on', done.has(q.id)));
      if (onlyTodo) { flipped = false; } drawCard();
    }
    else if (e.target.closest('#fc-todo')) { onlyTodo = !onlyTodo; e.target.closest('#fc-todo').classList.toggle('on', onlyTodo); fi = 0; flipped = false; drawCard(); }
    else if (e.target.closest('#fc-shuffle')) { for (let i = deck.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [deck[i], deck[j]] = [deck[j], deck[i]]; } fi = 0; flipped = false; drawCard(); }
    else if (e.target.closest('#fc-card') && !e.target.closest('a,.term')) { flipped = !flipped; $('#fc-card').classList.toggle('flipped', flipped); }
  });
  document.addEventListener('keydown', e => {
    if (fc.hidden) return;
    if (e.key === 'Escape') closeFlash();
    else if (e.key === 'ArrowRight') { fi++; flipped = false; drawCard(); }
    else if (e.key === 'ArrowLeft') { fi--; flipped = false; drawCard(); }
    else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipped = !flipped; $('#fc-card').classList.toggle('flipped', flipped); }
  });

  /* expand / collapse all explanations */
  $('#expand-all') && $('#expand-all').addEventListener('click', e => {
    const open = !e.currentTarget.classList.contains('on');
    e.currentTarget.classList.toggle('on', open);
    $$('details.ans.long').forEach(d => d.open = open);
  });

  /* deep links: open details when navigating to a question */
  window.__ready = true;
})();
