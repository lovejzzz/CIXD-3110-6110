/* Renders the Variable Machine appendix from data/vm.js into #vm.
   Layout: short intro → the four ways → four worked examples, each as numbered steps
   ending in a clear "Result" panel and a one-line takeaway → a recap table → install. */
(function () {
  const V = window.VM, host = document.getElementById('vm-body');
  if (!V || !host) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`([^`]+)`/g, '<code>$1</code>');
  const T = (en, zh) => `<span class="en">${md(en)}</span><span class="zh">${md(zh)}</span>`;           // short label, both shown
  const P = (en, zh) => `<div class="tx"><p class="en">${md(en)}</p><p class="zh">${md(zh)}</p></div>`;  // prose, one language shown
  const isHex = v => /^#[0-9a-f]{6}$/i.test(v);
  const qa = ids => ids.map(i => `<a class="vm-q" href="#q${i.replace('.', '-')}">${i}</a>`).join('');
  const out = s => `<pre class="vm-out">${esc(s)}</pre>`;
  const cmd = s => `<pre class="vm-cmd">${esc(s).split('\n').map(l => '<span class="pr">$</span> ' + l).join('\n')}</pre>`;
  const hexOut = v => isHex(v) ? `<div class="vm-hexout"><span class="vm-chip" style="background:${v}"></span><code>${v}</code></div>` : out(v);

  const step = (k, en, zh, body) => `<li class="vs"><div class="vs-n">${k}</div><div class="vs-b"><h4>${T(en, zh)}</h4>${body}</div></li>`;
  const result = (body) => `<div class="vr"><div class="vr-k">${T('Result', '结果')}</div>${body}</div>`;
  const take = (en, zh) => `<div class="vt"><span class="vt-k">${T('In one sentence', '一句话')}</span>${P(en, zh)}</div>`;
  const ex = (n, en, zh, way, q, steps, res, tk) => `<article class="vx" id="vx-${n}">
    <header class="vx-h"><span class="vx-n">${n}</span><div><div class="vx-meta">${esc(way)} ${qa(q)}</div><h3><span class="zh">${esc(zh)}</span><span class="en">${esc(en)}</span></h3></div></header>
    <ol class="vs-list">${steps.join('')}</ol>${result(res)}${tk}</article>`;

  function chart(pts, color, ymax, label) {
    const w = 460, h = 150, L = 30, B = 20, xmax = pts[pts.length - 1][0];
    const X = x => L + (x / xmax) * (w - L - 12), Y = y => 10 + (1 - y / ymax) * (h - B - 10);
    const first = pts[0], last = pts[pts.length - 1];
    return `<svg class="vm-chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">
      ${[0, ymax].map(y => `<line x1="${L}" x2="${w - 12}" y1="${Y(y)}" y2="${Y(y)}" class="g"/><text x="${L - 6}" y="${Y(y) + 4}" text-anchor="end">${y}</text>`).join('')}
      <polyline points="${pts.map(p => X(p[0]) + ',' + Y(p[1])).join(' ')}" style="stroke:${color}"/>
      <circle cx="${X(first[0])}" cy="${Y(first[1])}" r="4" style="fill:${color}"/><text class="v" x="${X(first[0]) + 9}" y="${Y(first[1]) + 4}">${first[1]}</text>
      <circle cx="${X(last[0])}" cy="${Y(last[1])}" r="4" style="fill:${color}"/><text class="v" x="${X(last[0])}" y="${Y(last[1]) - 10}" text-anchor="end">${last[1]}</text>
      <text x="${w - 12}" y="${h - 3}" text-anchor="end">${xmax} steps</text></svg>`;
  }

  /* ── intro: the four ways ── */
  const ways = `<div class="vw">${V.ways.map((w, i) => `<a class="vw-i" href="#vx-${i + 1}"><span class="vw-n">${i + 1}</span><span class="vw-t">${T(w.en, w.zh)}</span><small>${esc(w.tab)}</small><span class="vw-d">${P(w.d_en, w.d_zh)}</span><span class="vw-q">${w.q.join(' · ')}</span></a>`).join('')}</div>`;

  /* ── 1 · words ── */
  const C = V.crit;
  const mfTag = { w: T('the only line that names weights', '唯一指定权重的一行'), s: T('instructions in front', '放在前面的说明'), p: T('setting', '生成参数'), m: T('an example', '示范对话') };
  const mf = `<div class="vm-mf">${C.modelfile.map(([l, k]) => `<div class="mf-l mf-${k}"><code>${esc(l)}</code><span class="mf-tag">${mfTag[k]}</span></div>`).join('')}</div>`;
  const ex1 = ex(1, 'Studio crit: change it with words', '评图老师：只改“话”', 'Modelfile', ['8.1'], [
    step(1, 'Start: ask the original model', '起点：先问原模型', P(`Ask \`${C.base}\` about a cardboard chair. It answers with a 318-token, five-step how-to (glue, sandpaper, paint). It isn’t a critique at all.`, `问原模型 \`${C.base}\`：“我用纸筒做了把椅子，能坐但会晃，棕色看着有点廉价。”它回了一份 318 个 token 的五步教程：涂胶、打磨、刷漆。根本不是点评。`)),
    step(2, 'Change: write a Modelfile', '改法：写一个 Modelfile', P('Four kinds of line. Only the first one touches weights; the rest is text placed in front of the same model.', '一共四种行。只有第一行跟权重有关，其余都是放在同一个模型前面的文字。') + mf),
    step(3, 'Run: one command', '运行：一条命令', cmd(C.cmd))
  ], `<div class="vr-head">${T('318 → 61 tokens. A three-line crit. Weights changed: 0.', '318 → 61 个 token，变成三行点评。权重改动：0。')}</div>
    <div class="vm-ba"><div class="vm-col"><div class="vm-col-h">${T('before', '之前')} · <code>${C.base}</code></div>${out(C.before.text)}<div class="vm-tok"><i style="width:100%"></i>${C.before.tokens}</div></div>
    <div class="vm-col good"><div class="vm-col-h">${T('after', '之后')} · <code>${C.name}</code></div>${out(C.after.text)}<div class="vm-tok"><i style="width:${C.after.tokens / C.before.tokens * 100}%"></i>${C.after.tokens}</div></div></div>`,
    take('Only FROM names the weights; everything else in a Modelfile only changes how the same weights are used.', 'Modelfile 里只有 FROM 指定权重，其余各行只改变同一套权重怎么用。行为可以大变，权重一个数都不动。'));

  /* ── 2 · examples ── */
  const H = V.hex;
  const ex2 = ex(2, 'Colour → hex: change it with examples', '颜色 → 色号：用“例子”训练', 'Train · LoRA', ['8.2', '8.3'], [
    step(1, 'Start: the small model can’t do it', '起点：小模型做不到', P(`Ask the 360M model “The green of a tennis ball at dusk.” It writes a paragraph about the scene, not a colour code.`, '问 360M 的小模型：“黄昏时网球的那种绿。”它写了一段风景描写，没有给色号。') + out(H.chat[0].before)),
    step(2, 'Data: 3,000 examples', '准备数据：3,000 个例子', P(`Each row is a description and the hex code we want. 5% is kept aside as questions it never trains on.`, '每一行是“一句颜色描述 → 想要的色号”。留出 5% 不给它练，专门用来检验。') +
      `<div class="vm-row"><span class="vm-row-q">“${esc(H.sample.q)}”</span><span class="vm-arrow">→</span>${hexOut(H.sample.a)}</div>` + cmd(H.dataCmd)),
    step(3, 'Train: an adapter, 1,500 steps', '训练：学一个适配器，1,500 步', cmd(H.cmd) + P('Loss is “how wrong its guesses are” on the questions it didn’t train on. It drops fast, then flattens:', 'loss 就是它在没练过的题上“猜错的程度”。一开始掉得很快，后来就平了：') + `<figure class="vm-fig">${chart(H.val, '#3e9c52', 6, 'validation loss 5.67 to 1.0')}</figure>`)
  ], `<div class="vr-head">${T('Every answer is now a hex code. Close, but not exact.', '现在它只回色号。颜色大致对，但不精确。')}</div>
    <div class="vm-hexes">${H.chat.map(c => `<div class="vm-hx${c.miss ? ' miss' : ''}"><span class="vm-chip lg" style="background:${c.a}"></span><div><div class="vm-hx-q">“${esc(c.p)}”</div><code>${c.a}</code>${c.miss ? `<span class="vm-flag">${T('asked for plum, got beige', '要紫红，给了米色')}</span>` : ''}</div></div>`).join('')}</div>
    <div class="vm-meter"><div class="vm-meter-h">${T('How far off, on 60 descriptions it never saw (0 = exact, 441 = black vs white)', '在 60 条没见过的描述上差多远（0 = 完全对，441 = 黑和白的距离）')}</div>
      ${[H.dist[0], H.dist[2]].map((d, i) => `<div class="vm-d"><span>${T(d.en, d.zh)}</span><span class="vm-d-bar"><i class="${i ? 'gray' : ''}" style="width:${d.v / 441 * 100}%"></i></span><b>${d.v}</b></div>`).join('')}</div>`,
    take('An adapter is great at teaching a habit or format; it is weak at getting facts exactly right, and a falling loss only means it is learning to imitate.', '适配器很会教“习惯和格式”，不太会教准“事实”；loss 下降只说明它在学着模仿，好不好还得看输出。') +
    `<p class="vm-note">${T('Side note from the records: the first run was named “360M” but silently trained on the larger 1.7B base, so it couldn’t be blended later. An adapter only fits the exact base it was trained on.', '记录里的小插曲：第一次训练名字写着 360M，实际却用了更大的 1.7B 底模，后来就没法混合。适配器只认它训练时用的那个底模。')}</p>`);

  /* ── 3 · taste ── */
  const K = V.haiku;
  const bars = rows => `<div class="vm-bars">${rows.map(r => `<div class="vm-br${r.cls ? ' ' + r.cls : ''}"><span class="vm-br-l">${T(r.en, r.zh)}</span><span class="vm-br-bar"><i style="width:${r.v / 4 * 100}%"></i></span><b>${r.lbl}</b><span class="vm-br-s">${r.sub}</span></div>`).join('')}</div>`;
  const ex3 = ex(3, 'Haiku that keep 5-7-5: change it with taste', '守 5-7-5 的俳句：用“品味”调', 'Prefer · DPO', ['8.4'], [
    step(1, 'Start: the small model ignores the form', '起点：小模型不管格律', P('Asked for 12 haiku, the base model wrote 3 lines in 10 of them but got exactly 5-7-5 only once. Mean score 1.33 out of 4.', '让原模型写 12 首俳句：10 首是三行，可严格 5-7-5 的只有 1 首。平均分 1.33 / 4。')),
    step(2, 'Data: pairs, “this one, not that one”', '准备数据：一对一对，“要这个，不要那个”', P(`For ${K.topics} topics, a bigger model wrote a 5-7-5 haiku and the small model wrote its own. A simple rule counted syllables. ${K.pairs} pairs passed.`, `选 ${K.topics} 个题目，大模型写一首守格律的，小模型写一首自己的，再用一条简单规则数音节。合格的有 ${K.pairs} 对。`) +
      `<div class="vm-ba"><div class="vm-col good"><div class="vm-col-h">${T('chosen', '选中')} · 5-7-5</div>${out(K.pair.chosen)}</div><div class="vm-col bad"><div class="vm-col-h">${T('rejected', '拒绝')}</div>${out(K.pair.rejected)}</div></div>`),
    step(3, 'First try: it broke', '第一次训练：坏了', P('Plain DPO pushed its loss almost to zero. It looked perfect. Then it wrote this:', '普通 DPO 把 loss 压到几乎为 0，看起来完美。然后它写出了这个：') +
      `<div class="vm-ba"><figure class="vm-fig">${chart(K.collapsedLoss, '#d9474f', 0.8, 'collapsed DPO loss 0.693 to 0.027')}</figure><div>${out(K.collapsedSample)}${P(`Why: chosen haiku averaged ${K.chosenChars} characters, rejected ones ${K.rejectedChars}. The cheapest difference to learn was “write less”, not “keep the form”.`, `原因：选中的俳句平均 ${K.chosenChars} 个字符，被拒的 ${K.rejectedChars} 个。它学到的是最省事的区别“写短点”，而不是“守格律”。`)}</div></div>`),
    step(4, 'Fix: add --sft 1 and train again', '修正：加上 --sft 1 再训练', P('The new option also pulls the model toward actually writing the chosen haiku while the preference moves.', '这个选项让模型在“偏向好的那首”的同时，也真的去学写那首被选中的俳句。') + cmd(K.cmd))
  ], `<div class="vr-head">${T('Every answer is three lines now, and the score went up.', '现在每首都是三行，分数也上去了。')}</div>
    ${bars([{ en: 'original', zh: '原模型', v: 1.33, lbl: '1.33', sub: T('3 lines 10/12', '三行 10/12') },
      { en: 'plain DPO (broken)', zh: '普通 DPO（坏了）', v: 0.17, lbl: '0.17', sub: T('3 lines 2/12', '三行 2/12'), cls: 'bad' },
      { en: 'fixed (two samplings)', zh: '修好后（两次采样）', v: 2.42, lbl: '1.83–2.42', sub: T('3 lines 12/12', '三行 12/12'), cls: 'good' }])}
    <div class="vm-best"><span>${T('A 4/4 answer', '满分的一首')}</span>${out(K.best)}</div>`,
    take('Preference data teaches which answer to lean toward, so it records someone’s taste; and a perfect loss can still be a broken model.', '偏好数据教的是“更喜欢哪个”，记录的是人的品味；而且 loss 再完美，模型也可能是坏的。'));

  /* ── 4 · blend ── */
  const B = V.blend;
  const ex4 = ex(4, 'Colour + haiku: blend', '颜色 + 俳句：混合', 'Merge', ['8.5'], [
    step(1, 'Start: two adapters on the same base', '起点：同一个底模上的两个适配器', P('A = the colour adapter from example 2. B = the haiku adapter from example 3. Both were trained on the same 360M model, so they can be mixed.', 'A = 例子 2 的颜色适配器，B = 例子 3 的俳句适配器。两个都是在同一个 360M 底模上训练的，所以才能混。')),
    step(2, 'Formula: one slider, t', '公式：一个滑杆 t', `<div class="vm-formula">W = (1 − t) · A + t · B</div>` + P('t = 0 is all A (colour), t = 1 is all B (haiku). The merged adapter is exactly this mix (a check on one layer: largest difference 4.66e-10).', 't = 0 全是 A（颜色），t = 1 全是 B（俳句）。合出来的适配器严格等于这个公式（抽查一层，最大误差 4.66e-10）。')),
    step(3, 'Run: two blends', '运行：混两次', cmd(B.cmd))
  ], `<div class="vr-head">${T('Half the weights is not half the behaviour.', '权重一半一半，行为可不是一半一半。')}</div>
    ${P('Click t. The same three questions, answered by the recorded model at each point:', '点不同的 t，看同样三个问题在每个点上的真实回答：')}
    <div class="vm-blend"><div class="vm-stops">${B.stops.map((s, i) => `<button class="vm-stop" data-i="${i}">t = ${s.t}</button>`).join('')}</div>
      <div class="vm-say"></div>
      <div class="vm-qs">${[B.pA, B.pB, B.pC].map((p, i) => `<div class="vm-qa"><div class="vm-qa-q">“${esc(p)}”</div><div class="vm-qa-a" data-k="${'abc'[i]}"></div></div>`).join('')}</div></div>`,
    take('Blending at t = 0.5 averages the numbers, not the behaviour: the stronger, narrower habit can take over, so you have to listen to where one character turns into the other.', 't = 0.5 平均的是数字，不是行为：更强、更窄的习惯会压倒另一个，所以要亲耳听一种性格在哪一点变成另一种。'));

  /* ── recap ── */
  const recap = `<section class="vx vm-recap"><h3>${T('What the four examples show', '四个例子，一起看')}</h3>
    <table class="vm-tbl"><thead><tr><th>${T('way', '方法')}</th><th>${T('what you give it', '你给它什么')}</th><th>${T('weights change?', '动权重吗')}</th><th>${T('result', '结果')}</th><th></th></tr></thead><tbody>
    <tr><td>${T('1 Words', '1 用话')}</td><td>${T('a Modelfile', '一个 Modelfile')}</td><td class="no">${T('no', '不动')}</td><td>${T('318 → 61 tokens, three-line crit', '318 → 61 token，三行点评')}</td><td>${qa(['8.1'])}</td></tr>
    <tr><td>${T('2 Examples', '2 用例子')}</td><td>${T('3,000 question → answer rows', '3,000 条“问题 → 答案”')}</td><td class="yes">${T('adds an adapter', '加一个适配器')}</td><td>${T('only hex codes; 44.6 off vs 167.8 guessing', '只回色号；误差 44.6，瞎猜是 167.8')}</td><td>${qa(['8.2', '8.3'])}</td></tr>
    <tr><td>${T('3 Taste', '3 用品味')}</td><td>${T('44 “this, not that” pairs', '44 对“要这个不要那个”')}</td><td class="yes">${T('adds an adapter', '加一个适配器')}</td><td>${T('12/12 three lines; score 1.33 → up to 2.42', '12/12 都是三行；分数 1.33 → 最高 2.42')}</td><td>${qa(['8.4'])}</td></tr>
    <tr><td>${T('4 Blend', '4 混合')}</td><td>${T('two adapters and a t', '两个适配器和一个 t')}</td><td class="yes">${T('mixes adapters', '混合适配器')}</td><td>${T('t = 0.5 all hex; t = 0.75 does both', 't = 0.5 全是色号；t = 0.75 两样都会')}</td><td>${qa(['8.5'])}</td></tr>
    </tbody></table></section>`;

  /* ── try it ── */
  const tryit = `<section class="vx vm-tail"><h3>${T('Try it yourself: one line in Terminal', '自己跑一遍：终端里一行搞定')}</h3>
    ${P('Needs an Apple Silicon Mac (M1 or later), 16 GB+ memory, macOS 14+ and about 10 GB free. Open **Terminal** (cmd-space, type “Terminal”, Return), paste this line, press Return:', '需要 Apple 芯片的 Mac（M1 及以上）、16 GB 以上内存、macOS 14 以上、约 10 GB 空间。打开**终端**（按 cmd + 空格，输入 Terminal，回车），粘贴下面这一行，回车：')}
    <div class="vm-one"><pre class="vm-cmd" id="vm-one">${esc(V.oneLine)}</pre><button class="vm-copy" data-copy="vm-one">${T('Copy', '复制')}</button></div>
    <ol class="vm-steps">
      <li>${P('**Homebrew** (the Mac package installer) is installed if missing. This is the only part that asks for your Mac password; typing shows nothing, that’s normal.', '没有 **Homebrew**（Mac 上装软件的工具）就先装它。**只有这一步要输开机密码**，输入时屏幕不显示，是正常的。')}</li>
      <li>${P('**Node** (runs the app) and **Ollama** (runs the models) are installed or updated.', '装好或更新 **Node**（跑这个应用）和 **Ollama**（跑模型）。')}</li>
      <li>${P('The app’s own installer puts it in `~/variable-machine`, adds a **Variable Machine** app and starts it. First start installs the training packages, then opens `localhost:4817`.', '应用自己的安装脚本把它放进 `~/variable-machine`，生成 **Variable Machine** 图标并启动。第一次启动会装训练用的包，然后打开 `localhost:4817`。')}</li>
    </ol>
    ${P('First run: about 10–20 minutes. Next time just open the app; to update, paste the same line again. If Node 22+ and Ollama are already installed, the official line alone is enough:', '第一次大约 10–20 分钟。以后直接打开应用；想更新就再贴一次。已经装好 Node 22+ 和 Ollama 的话，只用官方这一行就行：')}
    <div class="vm-one"><pre class="vm-cmd" id="vm-app">${esc(V.appLine)}</pre><button class="vm-copy" data-copy="vm-app">${T('Copy', '复制')}</button></div>
    <p class="vm-src">${T('Every command, number and answer on this page is copied from the app’s own records.', '本页所有命令、数字和回答都照抄自这个应用自己的记录。')}
      <a href="${V.site}" target="_blank" rel="noopener">variablemachine.orpiment.studio ↗</a> · <a href="${V.anim}" target="_blank" rel="noopener">${T('animated examples', '动画版例子')} ↗</a> · <a href="${V.records}" target="_blank" rel="noopener">${T('raw records', '原始记录')} ↗</a> · Kevin Patton / Studio Orpiment, MIT</p></section>`;

  const intro = document.getElementById('vm-intro');
  if (intro) intro.innerHTML = V.intro_en.map((e, i) => P(e, V.intro_zh[i])).join('');
  host.innerHTML = ways + ex1 + ex2 + ex3 + ex4 + recap + tryit;

  host.querySelectorAll('.vm-copy').forEach(btn => btn.addEventListener('click', async () => {
    const el = document.getElementById(btn.dataset.copy);
    try { await navigator.clipboard.writeText(el.textContent); } catch (e) { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); document.execCommand('copy'); }
    btn.classList.add('ok'); setTimeout(() => btn.classList.remove('ok'), 1600);
  }));

  const box = host.querySelector('.vm-blend');
  const show = i => {
    const s = B.stops[i];
    box.querySelectorAll('.vm-stop').forEach(b => b.classList.toggle('on', +b.dataset.i === i));
    box.querySelector('.vm-say').innerHTML = `<code>${s.name}</code>${P(s.en, s.zh)}`;
    box.querySelectorAll('.vm-qa-a').forEach(el => { const v = s[el.dataset.k]; el.innerHTML = v ? hexOut(v) : `<span class="vm-na">${T('not recorded', '记录里没有')}</span>`; });
  };
  box.addEventListener('click', e => { const b = e.target.closest('.vm-stop'); if (b) show(+b.dataset.i); });
  show(1);
})();
