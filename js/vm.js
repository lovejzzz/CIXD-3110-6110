/* Renders the Variable Machine appendix from data/vm.js into #vm. */
(function () {
  const V = window.VM, host = document.getElementById('vm-body');
  if (!V || !host) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`([^`]+)`/g, '<code>$1</code>');
  const bi = (en, zh, tag = 'p') => `<${tag} class="en">${md(en)}</${tag}><${tag} class="zh">${md(zh)}</${tag}>`;
  const biBlock = (en, zh) => `<div class="bi"><div class="en">${[].concat(en).map(x => `<p>${md(x)}</p>`).join('')}</div><div class="zh">${[].concat(zh).map(x => `<p>${md(x)}</p>`).join('')}</div></div>`;
  const qa = ids => ids.map(i => `<a class="vm-q" href="#q${i.replace('.', '-')}">${i}</a>`).join('');
  const pre = s => `<pre class="vm-out">${esc(s)}</pre>`;
  const sw = hex => /^#[0-9a-f]{6}$/i.test(hex) ? `<span class="vm-sw" style="background:${hex}"></span><code>${hex}</code>` : '';
  const head = (n, en, zh, way, q) => `<header class="vm-h"><span class="vm-num">${n}</span><div><div class="vm-way">${esc(way)} · ${qa(q)}</div><h3><span class="en">${esc(en)}</span><span class="zh">${esc(zh)}</span></h3></div></header>`;
  const lesson = (en, zh) => `<div class="vm-lesson"><div class="vm-lk"><span class="en">What this shows</span><span class="zh">这说明了什么</span></div>${biBlock(en, zh)}</div>`;

  /* small line chart */
  function chart(series, { w = 520, h = 170, ymax, label }) {
    const xs = series.flatMap(s => s.pts.map(p => p[0])), xmax = Math.max(...xs);
    ymax = ymax || Math.max(...series.flatMap(s => s.pts.map(p => p[1])));
    const L = 34, B = 24, X = x => L + (x / xmax) * (w - L - 10), Y = y => 8 + (1 - y / ymax) * (h - B - 8);
    const grid = [0, ymax / 2, ymax].map(y => `<line x1="${L}" x2="${w - 10}" y1="${Y(y)}" y2="${Y(y)}" class="g"/><text x="${L - 6}" y="${Y(y) + 4}" text-anchor="end">${+y.toFixed(2)}</text>`).join('');
    const lines = series.map(s => `<polyline points="${s.pts.map(p => X(p[0]) + ',' + Y(p[1])).join(' ')}" style="stroke:${s.c}"/>` +
      s.pts.filter((p, i) => i === 0 || i === s.pts.length - 1).map(p => `<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="3.5" style="fill:${s.c}"/><text x="${X(p[0]) + (p[0] === 1 ? 7 : -7)}" y="${Y(p[1]) - 8}" text-anchor="${p[0] === 1 ? 'start' : 'end'}" class="v">${p[1]}</text>`).join('')).join('');
    return `<svg class="vm-chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">${grid}<text x="${w - 10}" y="${h - 4}" text-anchor="end">step →</text>${lines}</svg>`;
  }

  /* 0 · intro + map */
  const map = `<div class="vm-ways">${V.ways.map(w => `<div class="vm-w"><div class="vm-w-k"><span class="en">${w.en}</span><span class="zh">${w.zh}</span><small>${esc(w.tab)}</small></div>${bi(w.d_en, w.d_zh)}<div class="vm-w-q">${qa(w.q)}</div></div>`).join('')}</div>`;

  /* 1 · words */
  const C = V.crit;
  const mf = `<div class="vm-mf">${C.modelfile.map(([l, k]) => `<div class="mf-l mf-${k}"><code>${esc(l)}</code><span class="mf-tag">${{ w: '<span class="en">names the weights</span><span class="zh">唯一指定权重的一行</span>', s: '<span class="en">instructions in front</span><span class="zh">放在前面的说明</span>', p: '<span class="en">sampling setting</span><span class="zh">生成参数</span>', m: '<span class="en">one example exchange</span><span class="zh">一组示范对话</span>' }[k]}</span></div>`).join('')}</div>`;
  const ex1 = `<article class="vm-ex">${head(1, 'Studio crit: change it with words', '评图老师：只用“话”改变它', 'Modelfile', ['8.1'])}
    ${biBlock(['A Modelfile turns `smollm2:1.7b` into a design critic who always answers in exactly three lines: *What works / What doesn’t / Try next*.'.replace(/\*/g, ''), 'Read the file line by line:'],
      ['用一个 Modelfile，把 `smollm2:1.7b` 变成一位“评图老师”：不管你描述什么作品，它都只回三行：做得好的、不够好的、下一步试试。', '一行一行看这个文件：'])}
    ${mf}
    <div class="vm-prompt"><span class="en">Same question to both:</span><span class="zh">问两个模型同一句话：</span> <q>${esc(C.prompt)}</q></div>
    <div class="vm-ba">
      <div class="vm-col"><div class="vm-col-h"><code>${C.base}</code><span class="en">original</span><span class="zh">原模型</span></div>${pre(C.before.text)}<div class="vm-tok"><i style="width:100%"></i><b>${C.before.tokens} tokens</b></div></div>
      <div class="vm-col good"><div class="vm-col-h"><code>${C.name}</code><span class="en">with the Modelfile</span><span class="zh">套上 Modelfile 后</span></div>${pre(C.after.text)}<div class="vm-tok"><i style="width:${C.after.tokens / C.before.tokens * 100}%"></i><b>${C.after.tokens} tokens</b></div></div>
    </div>
    ${lesson(['Only `FROM` names weights. `SYSTEM`, `PARAMETER` and `MESSAGE` are text placed in front of the *same* model. The behaviour changed completely, from a 318-token how-to list to a 61-token, three-line crit, and not one weight moved. That is exactly the 8.1 answer.'.replace(/\*/g, '')],
      ['整份文件里只有 `FROM` 这一行指定了权重。`SYSTEM`、`PARAMETER`、`MESSAGE` 都只是放在**同一个**模型前面的文字。行为彻底变了：从 318 个 token 的“五步教程”变成 61 个 token 的三行点评，可权重一个数都没动。这正是 8.1 的答案。'])}
  </article>`;

  /* 2 · examples */
  const H = V.hex;
  const dist = `<div class="vm-dist">${H.dist.map(d => `<div class="vm-d"><span class="vm-d-l"><span class="en">${esc(d.en)}</span><span class="zh">${esc(d.zh)}</span></span><span class="vm-d-bar"><i style="width:${d.v / 441 * 100}%"></i></span><b>${d.v}</b></div>`).join('')}<div class="vm-d-scale"><span class="en">0 = exact colour · 441 = as far as black is from white</span><span class="zh">0 = 颜色完全对 · 441 = 黑和白之间的距离</span></div></div>`;
  const hexChat = `<div class="vm-hexes">${H.chat.map(c => `<div class="vm-hx${c.miss ? ' miss' : ''}"><span class="vm-big" style="background:${c.a}"></span><div><q>${esc(c.p)}</q><div>${sw(c.a)}${c.miss ? '<span class="vm-flag"><span class="en">plum came back beige</span><span class="zh">要紫红，给了米色</span></span>' : ''}</div></div></div>`).join('')}</div>`;
  const ex2 = `<article class="vm-ex">${head(2, 'Colour → hex: change it with examples', '颜色 → 色号：用“例子”训练它', 'Train · LoRA', ['8.2', '8.3'])}
    ${biBlock([`Data: ${H.rows.toLocaleString()} colours, each a description and its hex code. For example “${H.sample.q}” → \`${H.sample.a}\`. They trained a LoRA adapter on the 360M model: rank ${H.rank}, ${H.layers} layers, ${H.iters} steps.`],
      [`数据是 3,000 条颜色，每条一句描述配一个色号，比如 “${H.sample.q}” → \`${H.sample.a}\`。在 360M 的小模型上训练一个 LoRA 适配器：rank ${H.rank}，${H.layers} 层，${H.iters} 步。`])}
    <pre class="vm-cmd">$ ${esc(H.cmd)}</pre>
    <div class="vm-two">
      <figure><figcaption><span class="en">Validation loss (questions it never trained on)</span><span class="zh">验证集 loss（它没练过的题）</span></figcaption>${chart([{ pts: H.val, c: '#3e9c52' }], { ymax: 6, label: 'validation loss 5.67 to about 1.0' })}</figure>
      <figure><figcaption><span class="en">How far off are its colours? (60 held-out descriptions)</span><span class="zh">它给的颜色差多远？（60 条没见过的描述）</span></figcaption>${dist}</figure>
    </div>
    <div class="vm-prompt"><span class="en">Before training, the base model just writes a paragraph:</span><span class="zh">训练前，原模型只会写一段话：</span> <q>${esc(H.chat[0].before)}</q></div>
    <div class="vm-prompt"><span class="en">After training, only a hex code:</span><span class="zh">训练后，只回一个色号：</span></div>
    ${hexChat}
    ${lesson(['The adapter taught a new **habit**: every answer is now a hex code and nothing else. Loss fell fast: from 5.67 to 1.3 in the first 50 steps, then it crept down to about 1.0 and flattened. But look at the facts: on average it is 44.6 away from the true colour, far better than guessing (167.8) but not exact, and “dusty plum” came back beige. That is 8.2 in one picture: adapters are great at changing **form and style**, weaker at getting **facts** right. And it is 8.3: a falling loss means it is learning to imitate the answers; you still have to look at the outputs.', 'One more lesson from the records: the first run silently used the bigger 1.7B base even though it was named “360M”, so it could not be blended later. An adapter only works with the exact base it was trained on.'],
      ['适配器教会了它一个新**习惯**：不管问什么，只回一个色号。loss 降得很快：前 50 步就从 5.67 掉到 1.3，之后慢慢挪到 1 左右，就平了。可是看“事实”：平均离正确颜色差 44.6，比瞎猜（167.8）好得多，但并不准，“灰紫红”还给成了米色。这就是 8.2：适配器很会改**形式和风格**，不太会教准**事实**。这也是 8.3：loss 下降只说明它在学着模仿，输出好不好还得你亲眼看。', '记录里还有个小插曲：第一次训练时，名字写着 360M，实际却默认用了更大的 1.7B 底模，结果后来没法和 360M 的俳句适配器混合。适配器只能配它当初训练用的那个底模。'])}
  </article>`;

  /* 3 · taste */
  const K = V.haiku;
  const evalT = `<table class="vm-tbl"><thead><tr><th></th><th><span class="en">three lines</span><span class="zh">是三行</span></th><th><span class="en">exact 5-7-5</span><span class="zh">严格 5-7-5</span></th><th><span class="en">mean score / 4</span><span class="zh">平均分 / 4</span></th></tr></thead><tbody>${K.eval.map(r => `<tr><td><span class="en">${esc(r.en)}</span><span class="zh">${esc(r.zh)}</span></td><td>${r.three}</td><td>${r.exact}</td><td><span class="vm-mbar"><i style="width:${r.mean / 4 * 100}%"></i></span>${r.mean2 ? r.mean2 + '–' : ''}${r.mean}</td></tr>`).join('')}</tbody></table>`;
  const ex3 = `<article class="vm-ex">${head(3, 'Haiku that keep 5-7-5: change it with taste', '守住 5-7-5 的俳句：用“品味”调它', 'Prefer · DPO', ['8.4'])}
    ${biBlock([`They made the preference pairs themselves. For ${K.topics} topics, the small model wrote a haiku and a bigger model (qwen3:4b) wrote one asked for 5-7-5. A simple rule counted lines and syllables. When the big model’s haiku scored 4/4 and the small one’s didn’t, that became a pair: **chosen** = the 5-7-5 one, **rejected** = the small model’s. ${K.pairs} pairs passed (${K.train} to train, ${K.held} held out).`],
      [`偏好数据是他们自己做的：选了 ${K.topics} 个题目，小模型写一首俳句，大模型（qwen3:4b）按 5-7-5 要求也写一首。再用一条简单规则数行数和音节。大模型那首拿满 4 分、小模型那首没拿满，就组成一对：**选中** = 守格律的那首，**拒绝** = 小模型的那首。最后合格 ${K.pairs} 对（${K.train} 对训练，${K.held} 对留着检验）。`])}
    <div class="vm-pair"><div class="vm-prompt"><q>${esc(K.pair.p)}</q></div><div class="vm-ba"><div class="vm-col good"><div class="vm-col-h"><span class="en">chosen</span><span class="zh">选中</span> · 5-7-5</div>${pre(K.pair.chosen)}</div><div class="vm-col bad"><div class="vm-col-h"><span class="en">rejected</span><span class="zh">拒绝</span></div>${pre(K.pair.rejected)}</div></div></div>
    <div class="vm-two">
      <figure><figcaption><span class="en">Plain DPO: validation loss heads to zero…</span><span class="zh">普通 DPO：验证 loss 一路掉到接近 0……</span></figcaption>${chart([{ pts: K.collapsedLoss, c: '#d9474f' }], { ymax: 0.8, label: 'collapsed DPO validation loss 0.693 to 0.027' })}</figure>
      <figure><figcaption><span class="en">…and this is what it writes</span><span class="zh">……可它写出来的是这个</span></figcaption>${pre(K.collapsedSample)}<p class="vm-small"><span class="en">Chosen haiku averaged ${K.chosenChars} characters, rejected ones ${K.rejectedChars}. The easiest difference to learn was “write less”.</span><span class="zh">选中的俳句平均 ${K.chosenChars} 个字符，被拒的平均 ${K.rejectedChars} 个。最容易学到的区别就是“写短一点”。</span></p></figure>
    </div>
    <pre class="vm-cmd">$ ${esc(K.cmd)}</pre>
    ${evalT}
    <div class="vm-prompt"><span class="en">A 4/4 answer from the fixed model:</span><span class="zh">修好之后的模型拿满分的一首：</span></div>${pre(K.best)}
    ${lesson(['DPO doesn’t show the model the right answer; it shows **which of two it should prefer**, so the data is a record of someone’s taste (here, a rule for 5-7-5). The failure is the best part: plain DPO drove its loss toward zero and still fell apart into “keyboards keyboard keys…”, because it learned the cheapest difference between the pairs (shorter) instead of the one they meant (form). A perfect loss, a broken model. The fix, `--sft 1`, also pulls the model toward actually writing the chosen haiku while the preference moves. After that every answer was three lines (12/12) and the mean score rose from 1.33 to 1.83–2.42.'],
      ['DPO 不是告诉模型“正确答案是什么”，而是告诉它“**两个里面更喜欢哪个**”，所以这种数据记录的是某个人的品味，这里就是“守 5-7-5”这条规矩。最精彩的是失败的那次：普通 DPO 把 loss 压到接近 0，写出来却是“keyboards keyboard keys……”这种碎片。因为它学到的是两组数据之间最省事的区别（短），而不是我们真正想要的区别（格律）。loss 完美，模型却坏了。修法是加上 `--sft 1`，在调偏好的同时，也拉着模型真的去写那首被选中的俳句。修好后每一首都是三行（12/12），平均分从 1.33 升到 1.83–2.42。'])}
  </article>`;

  /* 4 · blend */
  const B = V.blend;
  const stopsBtns = B.stops.map((s, i) => `<button class="vm-stop${i === 1 ? ' on' : ''}" data-i="${i}">t = ${s.t}</button>`).join('');
  const ex4 = `<article class="vm-ex">${head(4, 'Colour + haiku: blend', '颜色 + 俳句：混合', 'Merge', ['8.5'])}
    ${biBlock(['Both adapters were trained on the same 360M base, so they can be blended: **W = (1 − t)·A + t·B**, where A is the colour adapter and B the haiku adapter. t = 0 is all colour, t = 1 is all haiku. The merge stacks the two adapters side by side, so the result is exactly that formula (rank 16 + 16 = 32; the check on one layer printed a largest difference of 4.66e-10).', 'They recorded four points along the slider. Click through them:'],
      ['两个适配器都是在同一个 360M 底模上训练的，所以能混：**W = (1 − t)·A + t·B**。A 是颜色适配器，B 是俳句适配器；t = 0 全是颜色，t = 1 全是俳句。合并时把两个适配器并排叠起来，结果就严格等于这个公式（rank 变成 16 + 16 = 32；对一层做的检查，最大误差只有 4.66e-10）。', '他们在滑杆上记录了四个点，点一点看看：'])}
    <div class="vm-blend">
      <div class="vm-track"><span class="vm-end"><span class="en">A · colour</span><span class="zh">A · 颜色</span></span><div class="vm-stops">${stopsBtns}</div><span class="vm-end"><span class="en">B · haiku</span><span class="zh">B · 俳句</span></span></div>
      <div class="vm-model"></div>
      <div class="vm-ba">
        <div class="vm-col"><div class="vm-col-h"><q>${esc(B.pA)}</q></div><div class="vm-oa"></div></div>
        <div class="vm-col"><div class="vm-col-h"><q>${esc(B.pB)}</q></div><div class="vm-ob"></div></div>
      </div>
    </div>
    ${lesson(['**Half the weights is not half the behaviour.** At t = 0.5 the colour habit wins everything: even “write a haiku” and “what colour is the sea in winter?” get hex codes. The colour habit is strong and narrow (1,500 steps, one kind of answer); the haiku preference is a gentler change. At t = 0.75 the model does both: colour descriptions get hex codes, haiku requests get haiku, and the sea question gets ordinary prose. Where one character turns into the other is the thing to listen for. And who is the author of colour-x-haiku-50? Nobody wrote it directly: the colour dataset, the people and model who made the haiku pairs, the base model and its data, and whoever picked t.'],
      ['**权重一半一半，行为可不是一半一半。** t = 0.5 时颜色习惯全面压倒：连“写一首俳句”“冬天的海是什么颜色”都回了色号。因为颜色习惯又强又窄（练了 1,500 步，只有一种答法），俳句偏好是一个温和得多的改动。到 t = 0.75，模型两样都会了：描述颜色就给色号，要俳句就写俳句，问大海就用普通的话回答。一种性格在哪一点变成另一种，这才是值得仔细听的地方。那 colour-x-haiku-50 的作者是谁？没有人直接写过它：颜色数据集、做俳句配对的人和模型、底模和它的训练数据，还有决定 t 的那个人。'])}
  </article>`;

  const tail = `<div class="vm-ex vm-tail">
    <div class="vm-try"><h4><span class="en">Try it yourself: one line in Terminal</span><span class="zh">自己跑一遍：终端里一行搞定</span></h4>
      ${biBlock(['Needs an Apple Silicon Mac (M1 or later), 16 GB+ memory, macOS 14+ and about 10 GB free. Open **Terminal** (cmd-space, type “Terminal”, Return), paste this line, press Return:'],
        ['需要 Apple 芯片的 Mac（M1 及以上）、16 GB 以上内存、macOS 14 以上、约 10 GB 空间。打开**终端**（按 cmd + 空格，输入“终端”或 Terminal，回车），把下面这一行粘贴进去，回车：'])}
      <div class="vm-one"><pre class="vm-cmd" id="vm-one">${esc(V.oneLine)}</pre><button class="vm-copy" data-copy="vm-one"><span class="en">Copy</span><span class="zh">复制</span></button></div>
      <ol class="vm-steps">
        <li><span class="en"><b>Homebrew</b> (the Mac package installer) is installed if it’s missing. This is the only part that asks for your Mac login password; typing it shows nothing, that’s normal. It may also install Apple’s command-line tools.</span><span class="zh">如果没有 <b>Homebrew</b>（Mac 上装软件的工具），先装它。<b>只有这一步会要你输入开机密码</b>，输的时候屏幕上不显示，这是正常的；它可能还会顺带装苹果的命令行工具。</span></li>
        <li><span class="en"><b>Node</b> (runs the app) and <b>Ollama</b> (runs the models) are installed, or updated if you already have them.</span><span class="zh">装好 <b>Node</b>（跑这个应用）和 <b>Ollama</b>（跑模型）；已经装过的会更新到新版。</span></li>
        <li><span class="en">The app’s own installer downloads Variable Machine into <code>~/variable-machine</code>, makes a <b>Variable Machine</b> app in Applications and starts it. On first start it installs <code>uv</code> and the Python training packages, then opens <code>localhost:4817</code> in your browser.</span><span class="zh">应用自己的安装脚本把 Variable Machine 下载到 <code>~/variable-machine</code>，在“应用程序”里生成一个 <b>Variable Machine</b> 图标并启动。第一次启动会自动装 <code>uv</code> 和训练用的 Python 包，然后在浏览器里打开 <code>localhost:4817</code>。</span></li>
      </ol>
      ${biBlock(['The first run takes about 10–20 minutes, depending on the internet. Every command is printed in green with ▸ in front, so you can watch what it does. Next time, just open the Variable Machine app; to update, paste the same line again. Already have Node 22+ and Ollama? The app’s official line alone is enough:'],
        ['第一次大概要 10–20 分钟，看网速。每条命令执行前都会用绿色、前面带 ▸ 打出来，你能看着它一步步做了什么。以后直接打开 Variable Machine 这个应用就行；想更新，再贴一次同一行。如果你已经装好了 Node 22+ 和 Ollama，只用官方这一行就够了：'])}
      <div class="vm-one"><pre class="vm-cmd" id="vm-app">${esc(V.appLine)}</pre><button class="vm-copy" data-copy="vm-app"><span class="en">Copy</span><span class="zh">复制</span></button></div>
      ${biBlock(['Then the first ten minutes: Start (the map) → Models (`ollama pull smollm2:360m`, about 700 MB) → Modelfile (pick a preset, make variant, ask both the same question) → Data → Train with a bundled dataset → it exports your model and opens Chat.'],
        ['装好后的头十分钟：Start（总览图）→ Models（`ollama pull smollm2:360m`，约 700 MB）→ Modelfile（选一个预设，make variant，问两个模型同一句话）→ Data → 用自带数据集 Train → 训练完会自动导出模型并打开 Chat。'])}</div>
    <p class="vm-src"><span class="en">Source: every command, number and answer above is copied from the app’s own records.</span><span class="zh">来源：上面所有命令、数字和回答都照抄自这个应用自己的记录。</span>
      <a href="${V.site}" target="_blank" rel="noopener">variablemachine.orpiment.studio ↗</a> · <a href="${V.anim}" target="_blank" rel="noopener"><span class="en">animated examples</span><span class="zh">动画版例子</span> ↗</a> · <a href="${V.records}" target="_blank" rel="noopener"><span class="en">raw records</span><span class="zh">原始记录</span> ↗</a> · Kevin Patton / Studio Orpiment, MIT</p>
  </div>`;

  const intro = document.getElementById('vm-intro');
  if (intro) intro.innerHTML = `<div class="en">${V.intro_en.map(x => `<p>${md(x)}</p>`).join('')}</div><div class="zh">${V.intro_zh.map(x => `<p>${md(x)}</p>`).join('')}</div>`;
  host.innerHTML = `${map}${ex1}${ex2}${ex3}${ex4}${tail}`;

  host.querySelectorAll('.vm-copy').forEach(btn => btn.addEventListener('click', async () => {
    const txt = document.getElementById(btn.dataset.copy).textContent;
    try { await navigator.clipboard.writeText(txt); } catch (e) { const r = document.createRange(); r.selectNodeContents(document.getElementById(btn.dataset.copy)); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); document.execCommand('copy'); }
    btn.classList.add('ok'); setTimeout(() => btn.classList.remove('ok'), 1600);
  }));

  /* blend stops */
  const box = host.querySelector('.vm-blend');
  const show = i => {
    const s = B.stops[i];
    box.querySelectorAll('.vm-stop').forEach(b => b.classList.toggle('on', +b.dataset.i === i));
    box.querySelector('.vm-model').innerHTML = `<code>${s.name}</code>`;
    const out = v => /^#[0-9a-f]{6}$/i.test(v) ? `<div class="vm-hexout"><span class="vm-big" style="background:${v}"></span><code>${v}</code></div>` : pre(v);
    box.querySelector('.vm-oa').innerHTML = out(s.a);
    box.querySelector('.vm-ob').innerHTML = out(s.b) + (s.t === 0.5 ? '<div class="vm-flag"><span class="en">a hex code, not a haiku</span><span class="zh">回了色号，不是俳句</span></div>' : '');
  };
  box.addEventListener('click', e => { const b = e.target.closest('.vm-stop'); if (b) show(+b.dataset.i); });
  show(1);
})();
