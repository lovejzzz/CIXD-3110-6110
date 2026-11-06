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
      `<a href="#glossary" class="nav-c nav-g" data-c="glossary"><span class="nav-n">≡</span><span class="nav-t"><span class="en">Glossary</span><span class="zh">词汇表</span></span><span class="nav-p"></span></a>` +
      `<a href="#zine" class="nav-c nav-g" data-c="zine"><span class="nav-n">Z</span><span class="nav-t"><span class="en">Zine sample</span><span class="zh">小册子范例</span></span><span class="nav-p"></span></a>`;
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
  ${q.steps && q.steps.length ? `<div class="stepper" data-stepper="${q.id}">
    <div class="st-top"><span class="st-lbl"><span class="en">Walk through it</span><span class="zh">一步一步看</span></span><span class="st-dots">${q.steps.map((_, i) => `<button class="st-dot" data-go="${i}" aria-label="Step ${i + 1}"></button>`).join('')}</span>
      <span class="st-btns"><button class="st-prev" aria-label="Previous step">←</button><button class="st-next"><span class="en">Next</span><span class="zh">下一步</span> →</button></span></div>
    <div class="st-say" aria-live="polite"></div>
  </div>` : ''}
  ${(q.embeds || []).map(e => `<figure class="plate cf-plate">
    <div class="cf-cap"><span>FIG. ${q.id} · <b class="live">3D · SEE-THROUGH</b></span><span class="cf-name"><span class="en">${esc(e.name_en)}</span><span class="zh">${esc(e.name_zh)}</span></span><a class="cf-open" href="${esc(e.src)}" target="_blank" rel="noopener"><span class="en">Open full screen ↗</span><span class="zh">全屏打开 ↗</span></a></div>
    <iframe class="cf-frame" src="${esc(e.src)}" title="${esc(e.name_en)}" loading="lazy" style="height:${e.h || 640}px"></iframe>
    <div class="cf-hint"><span class="en">${esc(e.hint_en || 'Drag to turn · switch on See-through to look inside')}</span><span class="zh">${esc(e.hint_zh || '拖动旋转 · 打开 See-through 看内部')}</span></div>
  </figure>`).join('')}
  <div class="recall-gate">
    <p class="en">Recall mode — say your answer out loud first.</p><p class="zh">自测模式——先用自己的话说一遍。</p>
    <button class="reveal-btn" data-reveal="${q.id}"><span class="en">Show answer</span><span class="zh">显示答案</span></button>
  </div>
  <div class="ans-wrap">
  ${q.kid_en ? `<section class="kid">
    ${two(q.kid_en, q.kid_zh)}
  </section>` : ''}
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
  <div class="lock-panel">
    <div class="lock-ico" aria-hidden="true"></div>
    <p class="en">Locked. Score <b>90%</b> or more on the <a href="#quiz-${CL[CL.indexOf(c) - 1] ? CL[CL.indexOf(c) - 1].n : ''}">Class ${CL[CL.indexOf(c) - 1] ? CL[CL.indexOf(c) - 1].n : ''} quiz</a> to open this chapter.</p>
    <p class="zh">未解锁。在<a href="#quiz-${CL[CL.indexOf(c) - 1] ? CL[CL.indexOf(c) - 1].n : ''}">第 ${CL[CL.indexOf(c) - 1] ? CL[CL.indexOf(c) - 1].n : ''} 课测验</a>中拿到 <b>90 分</b>以上即可解锁本章。</p>
  </div>
  <div class="cls-body">
  ${c.qs.map(q => card(c, q)).join('')}
  ${c.quiz && c.quiz.length ? quizHTML(c) : ''}
  </div>
</section>`;
  }
  function quizHTML(c) {
    return `<section class="quiz" id="quiz-${c.n}" data-quiz="${c.n}">
    <div class="qz-h">
      <div class="qz-tag">QUIZ · ${c.n}</div>
      <h3><span class="en">Check yourself: Class ${c.n}</span><span class="zh">第 ${c.n} 课小测验</span></h3>
      <p class="qz-rule"><span class="en">${c.quiz.length} questions. Every answer comes with an explanation. Score 90% or more to unlock the next chapter.</span><span class="zh">共 ${c.quiz.length} 题，每题选完都有讲解。拿到 90 分以上，就能解锁下一章。</span></p>
    </div>
    <ol class="qz-list"></ol>
    <div class="qz-result" hidden></div>
  </section>`;
  }
  const two0 = (en, zh) => en ? `<div class="bi intro"><div class="en">${md(en, 'en')}</div><div class="zh">${md(zh, 'zh')}</div></div>` : '';

  $('#nav').innerHTML = nav();
  $('#content').innerHTML = CL.map(section).join('');
  if (window.HERO) $('#hero-fig').innerHTML = window.HERO();

  /* steppers: walk a figure step by step, highlighting parts by their tooltip key */
  $$('[data-stepper]').forEach(el => {
    const q = qById[el.dataset.stepper], art = el.closest('.q'), plate = art.querySelector('.plate');
    let i = -1;
    const say = el.querySelector('.st-say');
    const show = n => {
      i = Math.max(-1, Math.min(q.steps.length - 1, n));
      const st = q.steps[i];
      el.querySelectorAll('.st-dot').forEach((d, k) => { d.classList.toggle('on', k === i); d.classList.toggle('done', k < i); });
      el.querySelector('.st-prev').disabled = i <= 0;
      const nx = el.querySelector('.st-next');
      nx.innerHTML = i === -1 ? '<span class="en">Start</span><span class="zh">开始</span> →' : i === q.steps.length - 1 ? '<span class="en">Again</span><span class="zh">再来一遍</span> ↺' : '<span class="en">Next</span><span class="zh">下一步</span> →';
      if (plate) {
        plate.querySelectorAll('.st-hl').forEach(x => x.classList.remove('st-hl'));
        const keys = st && st.hi || [];
        plate.classList.toggle('stepping', keys.length > 0);
        keys.forEach(k => plate.querySelectorAll(`[data-tip="${k}"], #${CSS.escape(k)}`).forEach(x => x.classList.add('st-hl')));
      }
      say.innerHTML = st ? `<b class="st-n">${i + 1}/${q.steps.length}</b>${two(st.en, st.zh, 'st-bi')}` :
        `<span class="st-intro"><span class="en">${q.steps.length} short steps. Press Start.</span><span class="zh">共 ${q.steps.length} 小步，按“开始”。</span></span>`;
    };
    el.addEventListener('click', e => {
      if (e.target.closest('.st-next')) show(i === q.steps.length - 1 ? 0 : i + 1);
      else if (e.target.closest('.st-prev')) show(i - 1);
      else if (e.target.closest('.st-dot')) show(+e.target.closest('.st-dot').dataset.go);
    });
    show(-1);
  });

  /* ── chapter locks + quizzes ─────────────────── */
  const TUTOR = /[?&]tutor=1/.test(location.search) || store.get('tutor', false);
  if (/[?&]tutor=1/.test(location.search)) store.set('tutor', true);
  if (/[?&]tutor=0/.test(location.search)) store.set('tutor', false);
  const best = store.get('quizBest', {});
  const passed = n => (best[n] || 0) >= 90;
  function applyLocks() {
    CL.forEach((c, i) => {
      const prev = CL[i - 1];
      const locked = !TUTOR && i > 0 && prev && prev.quiz && prev.quiz.length && !passed(prev.n) || (!TUTOR && i > 0 && CL.slice(0, i).some(p => p.quiz && p.quiz.length && !passed(p.n)));
      const sec = $('#c' + c.n); if (sec) sec.classList.toggle('locked', !!locked);
      const a = $(`.nav-c[data-c="${c.n}"]`); if (a) a.classList.toggle('locked', !!locked);
      const np = $(`[data-np="${c.n}"]`);
      if (np && c.quiz && c.quiz.length && passed(c.n)) np.dataset.quiz = best[c.n] + '%';
    });
    document.body.classList.toggle('tutor', TUTOR);
    // the zine follows the same locks
    const lockedNs = CL.filter(c => { const sec = $('#c' + c.n); return sec && sec.classList.contains('locked'); }).map(c => c.n);
    let st = $('#zine-locks'); if (!st) { st = document.createElement('style'); st.id = 'zine-locks'; document.head.appendChild(st); }
    st.textContent = lockedNs.map(n => `[data-cls="${n}"]{display:none!important}`).join('');
    const zl = $('#zine-locknote'); if (zl) zl.hidden = !lockedNs.length;
  }
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function buildQuiz(c) {
    const box = $(`#quiz-${c.n}`); if (!box) return;
    const list = box.querySelector('.qz-list'), res = box.querySelector('.qz-result');
    const answers = new Array(c.quiz.length).fill(null);
    res.hidden = true; res.innerHTML = '';
    list.innerHTML = c.quiz.map((item, qi) => {
      const order = shuffle(item.opts.map((o, k) => k));
      return `<li class="qz-q" data-qi="${qi}">
        <div class="qz-stem"><span class="qz-n">${qi + 1}</span><div><p class="en">${md(item.q_en, 'en').replace(/^<p>|<\/p>$/g, '')}</p><p class="zh">${md(item.q_zh, 'zh').replace(/^<p>|<\/p>$/g, '')}</p></div></div>
        <div class="qz-opts">${order.map((k, j) => `<button class="qz-opt" data-k="${k}"><span class="qz-l">${'ABCD'[j]}</span><span class="qz-t"><span class="en">${esc(item.opts[k].en)}</span><span class="zh">${esc(item.opts[k].zh)}</span></span></button>`).join('')}</div>
        <div class="qz-why" hidden></div>
      </li>`;
    }).join('');
    list.onclick = e => {
      const b = e.target.closest('.qz-opt'); if (!b) return;
      const li = b.closest('.qz-q'), qi = +li.dataset.qi, item = c.quiz[qi];
      if (answers[qi] !== null) return;
      const k = +b.dataset.k, ok = k === item.a; answers[qi] = ok;
      li.classList.add(ok ? 'right' : 'wrong');
      li.querySelectorAll('.qz-opt').forEach(o => { o.disabled = true; const kk = +o.dataset.k; if (kk === item.a) o.classList.add('is-a'); if (o === b) o.classList.add('picked'); });
      const why = li.querySelector('.qz-why'); why.hidden = false;
      why.innerHTML = `<h5><span class="en">${ok ? 'Correct' : 'Not quite'}</span><span class="zh">${ok ? '答对了' : '再想想'}</span></h5>${two(item.why_en, item.why_zh)}`;
      if (answers.every(x => x !== null)) finish();
    };
    function finish() {
      const n = answers.filter(Boolean).length, score = Math.round(n / answers.length * 100);
      best[c.n] = Math.max(best[c.n] || 0, score); store.set('quizBest', best);
      const ok = score >= 90, next = CL[CL.indexOf(c) + 1];
      res.hidden = false; res.className = 'qz-result ' + (ok ? 'pass' : 'fail');
      res.innerHTML = `<div class="qz-score">${score}<small>/100</small></div>
        <div class="qz-msg">${ok
          ? `<p class="en"><b>Passed.</b> ${next ? `Chapter ${next.n} is unlocked.` : 'All chapters are open.'}</p><p class="zh"><b>通过！</b>${next ? `第 ${next.n} 章已解锁。` : '全部章节都已开放。'}</p>${next ? `<a class="qz-go" href="#c${next.n}"><span class="en">Go to Class ${next.n} →</span><span class="zh">进入第 ${next.n} 课 →</span></a>` : ''}`
          : `<p class="en">${n} of ${answers.length} right. You need 90% to unlock the next chapter. Read the explanations above, then try again (options are reshuffled).</p><p class="zh">答对 ${n}/${answers.length} 题。需要 90 分才能解锁下一章。先看看上面的讲解，再重做一次（选项会重新打乱）。</p>`}
          <button class="qz-retry"><span class="en">Retry quiz</span><span class="zh">重做测验</span></button></div>`;
      res.querySelector('.qz-retry').onclick = () => { buildQuiz(c); box.scrollIntoView({ behavior: 'smooth' }); };
      applyLocks();
    }
  }
  CL.forEach(c => c.quiz && c.quiz.length && buildQuiz(c));
  applyLocks();
  // following a link into a locked chapter lands on its lock panel; flashcards skip locked chapters
  window.__isLocked = id => { const q = qById[id]; const sec = q && $('#c' + q._c.n); return sec && sec.classList.contains('locked'); };

  /* ── teacher mode: triple-click the ◇, password → lecture view ─────────── */
  const brand = $('.brand'); let clicks = [];
  const pw = $('#pw'), pwIn = $('#pw-in');
  const openPw = () => { pw.hidden = false; $('.pw-err').hidden = true; pwIn.value = ''; setTimeout(() => pwIn.focus(), 30); };
  const closePw = () => { pw.hidden = true; };
  brand.addEventListener('click', e => {
    const now = Date.now(); clicks = clicks.filter(t => now - t < 900); clicks.push(now);
    if (clicks.length >= 3) { e.preventDefault(); clicks = []; document.body.classList.contains('teacher') ? setTeacher(false) : openPw(); }
  });
  pw.querySelector('.pw-cancel').onclick = closePw;
  pw.addEventListener('click', e => { if (e.target === pw) closePw(); });
  pw.addEventListener('keydown', e => { if (e.key === 'Escape') closePw(); });
  pw.querySelector('form').onsubmit = e => {
    e.preventDefault();
    if (pwIn.value.trim().toLowerCase() === 'sky') { closePw(); setTeacher(true); }
    else { $('.pw-err').hidden = false; pwIn.select(); pw.querySelector('.pw-box').classList.remove('shake'); void pw.offsetWidth; pw.querySelector('.pw-box').classList.add('shake'); }
  };

  function lectureHTML() {
    const sec = c => {
      const qs = c.qs.map(q => {
        let fig = ''; try { fig = q.fig ? q.fig() : ''; } catch (e) { }
        const blk = (k, cls, en, zh) => q[k + '_en'] ? `<div class="lx ${cls}"><div class="lx-k"><span class="en">${en}</span><span class="zh">${zh}</span></div>${two(q[k + '_en'], q[k + '_zh'])}</div>` : '';
        return `<article class="lq" id="lq${q.id.replace('.', '-')}">
          <div class="lq-h"><span class="lq-id">${q.id}</span><h3><span class="en">${esc(q.t_en)}</span><span class="zh">${esc(q.t_zh)}</span></h3><a class="lq-jump" href="${qAnchor(q.id)}" data-exit-lecture><span class="en">student view</span><span class="zh">学生视图</span> ↗</a></div>
          <p class="lq-q"><span class="en">${esc(q.q_en)}</span><span class="zh">${esc(q.q_zh)}</span></p>
          ${blk('lec_open', 'lx-open', 'Open with', '开场先问')}
          ${blk('lec_why', 'lx-why', 'The why', '讲清“为什么”')}
          ${fig ? `<details class="lx-fig"><summary><span class="en">Show the drawing</span><span class="zh">展开示意图</span></summary><div class="lx-figbox">${fig}</div></details>` : ''}
          ${blk('lec_trap', 'lx-trap', 'Where students go wrong — and why', '学生容易错在哪，为什么')}
          ${blk('lec_ask', 'lx-ask', 'Check understanding', '检查理解')}
          ${blk('lec_bridge', 'lx-bridge', 'Bridge', '衔接')}
          ${!q.lec_why_en ? `<div class="lx lx-fallback">${two(q.short_en, q.short_zh)}</div>` : ''}
        </article>`;
      }).join('');
      return `<section class="lsec" id="l${c.n}">
        <div class="lsec-h"><div class="lsec-n">${c.n}</div><div><h2><span class="en">${esc(c.t_en)}</span><span class="zh">${esc(c.t_zh)}</span></h2>
        ${c.lec_en ? `<div class="lsec-why">${two(c.lec_en, c.lec_zh)}</div>` : ''}</div></div>${qs}
        ${c.lec_faq && c.lec_faq.length ? `<div class="lfaq"><h3><span class="en">Questions she might ask</span><span class="zh">她可能会问的问题</span></h3>
          ${c.lec_faq.map(f => `<details class="lfaq-i"><summary><span class="lfaq-q">Q</span><span><span class="en">${esc(f.q_en)}</span><span class="zh">${esc(f.q_zh)}</span></span></summary>${two(f.a_en, f.a_zh)}</details>`).join('')}</div>` : ''}</section>`;
    };
    return `<header class="lhead"><div class="lhead-tag">LECTURE · TEACHER MODE</div>
      <h1><span class="en">Why it works the way it does</span><span class="zh">不只是“是什么”，更是“为什么”</span></h1>
      <p><span class="en">Your teaching script for every exam question: what to ask first, the reasoning to walk through, where students slip, and how to check they got it.</span><span class="zh">每道考题的讲课稿：先问什么、要讲清的道理、学生容易卡在哪，以及怎样确认他真的懂了。</span></p>
      <div class="lsize"><span class="en">Text size</span><span class="zh">字号</span><button data-lsz="-1" aria-label="smaller">A−</button><button data-lsz="1" aria-label="larger">A+</button><button class="lexit" data-exit-lecture><span class="en">Exit teacher mode</span><span class="zh">退出教师模式</span></button></div></header>` +
      CL.map(sec).join('');
  }
  let lecBuilt = false;
  function setTeacher(on) {
    document.body.classList.toggle('teacher', on);
    store.set('teacher', on);
    const L = $('#lecture');
    if (on && !lecBuilt) { L.innerHTML = lectureHTML(); lecBuilt = true; }
    L.hidden = !on;
    // nav links point to lecture sections while teaching
    $$('.nav-c').forEach(a => { const n = a.dataset.c; if (!a.dataset.href0) a.dataset.href0 = a.getAttribute('href'); a.setAttribute('href', on && $('#l' + n) ? '#l' + n : a.dataset.href0); });
    if (on) { document.body.classList.add('tutor'); CL.forEach(c => { const s = $('#c' + c.n); s && s.classList.remove('locked'); const a = $(`.nav-c[data-c="${c.n}"]`); a && a.classList.remove('locked'); }); $('#zine-locks') && ($('#zine-locks').textContent = ''); window.scrollTo(0, 0); }
    else { applyLocks(); }
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-lsz]'); if (b) { const v = Math.max(-2, Math.min(4, (store.get('lsz', 0)) + +b.dataset.lsz)); store.set('lsz', v); document.documentElement.style.setProperty('--lsz', v); }
    if (e.target.closest('[data-exit-lecture]')) setTeacher(false);
  });
  document.documentElement.style.setProperty('--lsz', store.get('lsz', 0));
  if (store.get('teacher', false)) setTeacher(true);

  /* zine sample */
  if (window.renderZine) { try { renderZine($('#zine-pages')); } catch (e) { console.error('zine', e); } }
  $('#zine-print') && $('#zine-print').addEventListener('click', () => {
    document.body.classList.add('print-zine');
    const done = () => { document.body.classList.remove('print-zine'); removeEventListener('afterprint', done); };
    addEventListener('afterprint', done); setTimeout(() => print(), 50);
  });

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
    if (en.isIntersecting) $$('.nav-c').forEach(a => a.classList.toggle('cur', a.dataset.c === (/^c/.test(en.target.id) ? en.target.id.slice(1) : en.target.id)));
  }), { rootMargin: '-40% 0px -55% 0px' });
  $$('section.cls').forEach(s => navIO.observe(s));

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
  const cards = () => deck.filter(q => !(window.__isLocked && window.__isLocked(q.id))).filter(q => !onlyTodo || !done.has(q.id));
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
