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
      <span class="nav-p" data-np="${c.n}"></span></a>`).join('');
  }

  function card(c, q) {
    let fig = '';
    try { fig = q.fig ? q.fig() : ''; } catch (e) { console.error('figure error', q.id, e); fig = `<p class="err">figure error ${q.id}</p>`; }
    const two = (en, zh, cls = '') => `<div class="bi ${cls}"><div class="en">${md(en, 'en')}</div><div class="zh">${md(zh, 'zh')}</div></div>`;
    return `<article class="q" id="q${q.id.replace(".", "-")}" data-id="${q.id}">
  <header class="q-h">
    <div class="q-id">${q.id}</div>
    <div class="q-title"><span class="en">${esc(q.t_en)}</span><span class="zh">${esc(q.t_zh)}</span></div>
    ${q.src ? `<div class="q-src" title="Source hint on the exam / 考卷上的出处提示">↳ ${esc(q.src)}</div>` : ''}
    <button class="q-done ${done.has(q.id) ? 'on' : ''}" data-done="${q.id}" aria-pressed="${done.has(q.id)}"><span class="box"></span><span class="en">Got it</span><span class="zh">懂了</span></button>
  </header>
  <div class="q-prompt"><p class="en">${esc(q.q_en)}</p><p class="zh">${esc(q.q_zh)}</p></div>
  ${fig ? `<figure class="plate">
    <div class="plate-tag"><span>FIG. ${q.id}</span><span class="plate-hint"><span class="en">hover the parts</span><span class="zh">悬停部件查看说明</span></span></div>
    ${fig}
    ${(q.cap_en || q.cap_zh) ? `<figcaption>${two(q.cap_en, q.cap_zh)}</figcaption>` : ''}
  </figure>` : ''}
  <section class="ans">
    <h4><span class="en">Answer</span><span class="zh">参考答案</span></h4>
    ${two(q.a_en, q.a_zh)}
  </section>
  ${(q.hook_en || q.trap_en) ? `<div class="notes">
    ${q.hook_en ? `<div class="note hook"><h5><span class="en">Remember it in one line</span><span class="zh">一句话记住</span></h5>${two(q.hook_en, q.hook_zh)}</div>` : ''}
    ${q.trap_en ? `<div class="note trap"><h5><span class="en">Don't lose points</span><span class="zh">易错点</span></h5>${two(q.trap_en, q.trap_zh)}</div>` : ''}
  </div>` : ''}
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
    if (en.isIntersecting) $$('.nav-c').forEach(a => a.classList.toggle('cur', a.dataset.c === en.target.id.slice(1)));
  }), { rootMargin: '-40% 0px -55% 0px' });
  $$('section.cls').forEach(s => navIO.observe(s));

  /* hero layers jump */
  document.addEventListener('click', e => { const g = e.target.closest('[data-jump]'); if (g) location.hash = g.dataset.jump; });
  /* expand/collapse print */
  $('#print') && $('#print').addEventListener('click', () => print());
  window.__ready = true;
})();
