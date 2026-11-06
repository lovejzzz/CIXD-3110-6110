/* CLASS 7 · RUNNING A LOCAL LLM */
defTerms({
  c7_local: { en: 'Local model', zh: '本地模型',
    d_en: 'A model whose weights file sits on your own disk and runs on your own chip (here through Ollama). The prompt never leaves the machine.',
    d_zh: '权重文件存在你自己的硬盘上、在你自己的芯片上运行的模型（课上用 Ollama）。提示词从不离开这台电脑。' },
  c7_hosted: { en: 'Hosted model', zh: '云端托管模型',
    d_en: 'A model running on a company’s servers (ChatGPT, Claude, Gemini). Your prompt travels over the Internet and passes through their system prompt, filters and logging.',
    d_zh: '运行在公司服务器上的模型（ChatGPT、Claude、Gemini）。你的提示词经互联网传过去，要经过他们的系统提示、过滤器和日志记录。' },
  c7_ollama: { en: 'Ollama', zh: 'Ollama',
    d_en: 'A free app that downloads and runs open-weight models on a laptop (`ollama pull llama3.2:3b`, `ollama run …`) and serves them at localhost:11434.',
    d_zh: '一个免费应用，在笔记本上下载并运行开放权重模型（`ollama pull llama3.2:3b`、`ollama run …`），并在 localhost:11434 提供服务。' },
  c7_weights: { en: 'Weights file', zh: '权重文件',
    d_en: '“A model is a file.” Billions of learned numbers stored on disk (a .gguf file in Ollama). The file is the model — and it is shaped by its data.',
    d_zh: '“模型就是一个文件。”数十亿个学到的数字存在硬盘上（Ollama 里是 .gguf 文件）。文件就是模型——而它是由数据塑造的。' },
  c7_open_weights: { en: 'Open weights', zh: '开放权重',
    d_en: 'The trained weights are downloadable, but the training data and full recipe are not released, and the license may restrict use (e.g. Llama 3.2 Community License).',
    d_zh: '训练好的权重可以下载，但训练数据和完整配方不公开，许可证还可能限制用途（例如 Llama 3.2 社区许可证）。' },
  c7_open_source: { en: 'Open source (AI)', zh: '开源（AI 模型）',
    d_en: 'Everything needed to study and rebuild the model is released — weights, training data, code, recipe and logs — under an OSI-approved license. Example: Ai2’s OLMo 2 (Apache 2.0, open training data).',
    d_zh: '研究和重建模型所需的一切都公开——权重、训练数据、代码、配方和日志——并采用 OSI 认可的许可证。例子：Ai2 的 OLMo 2（Apache 2.0，训练数据公开）。' },
  c7_license: { en: 'License', zh: '许可证',
    d_en: 'The legal terms that say what you may do with the weights: Apache 2.0 and MIT are permissive; Llama’s and Qwen’s research licenses add custom limits on use.',
    d_zh: '规定你能拿权重做什么的法律条款：Apache 2.0、MIT 很宽松；Llama 许可证和 Qwen 研究许可证则附加了自定义的使用限制。' },
  c7_quant: { en: 'Quantization', zh: '量化',
    d_en: 'Storing each weight with fewer bits — 16-bit floats rounded to 8- or 4-bit numbers. The file shrinks and runs faster; some precision is lost.',
    d_zh: '用更少的位数存储每个权重——把 16 位浮点数四舍五入成 8 位或 4 位数字。文件变小、运行更快，但损失一部分精度。' },
  c7_gguf: { en: 'GGUF · Q4_K_M', zh: 'GGUF · Q4_K_M',
    d_en: 'GGUF is the model-file format Ollama and llama.cpp use. Q4_K_M = about 4–5 bits per weight with mixed precision (“K-quants”) — the usual sweet spot and Ollama’s default.',
    d_zh: 'GGUF 是 Ollama 和 llama.cpp 使用的模型文件格式。Q4_K_M = 每个权重约 4–5 位、混合精度（“K 量化”）——常用的平衡点，也是 Ollama 的默认值。' },
  c7_params: { en: 'Parameters (3B, 7B, 8B)', zh: '参数量（3B、7B、8B）',
    d_en: 'How many weights the model has (B = billion). A different kind of “smaller” than quantization: fewer parameters = less knowledge, not just less precision.',
    d_zh: '模型有多少个权重（B = 十亿）。这和量化是不同意义上的“变小”：参数更少 = 知识更少，而不只是精度更低。' },
  c7_model_card: { en: 'Model card', zh: '模型卡',
    d_en: 'Mitchell et al. (2019): a short document shipped with a model — who made it, intended and out-of-scope uses, training data, evaluation (also across groups), limitations, biases, ethical considerations, license.',
    d_zh: 'Mitchell 等人（2019）：随模型一起发布的简短文档——谁做的、预期用途与不适用场景、训练数据、评估（包括分人群评估）、局限、偏见、伦理考量、许可证。' },
  c7_dataset_card: { en: 'Dataset card / datasheet', zh: '数据集卡 / 数据表',
    d_en: 'Gebru et al., “Datasheets for Datasets”: motivation, composition, collection process, preprocessing, recommended uses, distribution and maintenance of a dataset.',
    d_zh: 'Gebru 等人《Datasheets for Datasets》：说明数据集的动机、组成、采集过程、预处理、推荐用途、分发与维护。' },
  c7_cc: { en: 'Common Crawl', zh: 'Common Crawl',
    d_en: 'A nonprofit that has crawled the public web since 2008 and publishes huge monthly snapshots (petabytes of raw pages). The quarry most training corpora are cut from.',
    d_zh: '一个自 2008 年起持续抓取公共网页的非营利组织，每月发布巨大的快照（PB 级原始网页）。大多数训练语料都是从这座“采石场”里挖出来的。' },
  c7_c4: { en: 'C4', zh: 'C4',
    d_en: 'Colossal Clean Crawled Corpus — Google’s 2019 cleaned-up Common Crawl snapshot built to train T5 (English only, blocklist filtering, dedup). The Washington Post made it searchable by website.',
    d_zh: '“巨型清洁爬取语料库”——谷歌 2019 年为训练 T5 而清洗的一份 Common Crawl 快照（仅英文、按黑名单过滤、去重）。《华盛顿邮报》做了一个可按网站搜索的工具。' },
  c7_fineweb: { en: 'FineWeb', zh: 'FineWeb',
    d_en: 'Hugging Face’s 2024 corpus: about 15 trillion tokens filtered and deduplicated from 96 Common Crawl snapshots, with its pipeline documented in the open.',
    d_zh: 'Hugging Face 2024 年的语料库：从 96 份 Common Crawl 快照中过滤、去重得到约 15 万亿 token，处理流程公开记录。' },
  c7_dolma: { en: 'Dolma', zh: 'Dolma',
    d_en: 'Ai2’s open training corpus for OLMo: Common Crawl web text mixed with code, Reddit, scientific papers, books and Wikipedia — released so the model can be traced.',
    d_zh: 'Ai2 为 OLMo 打造的开放训练语料：Common Crawl 网页文本，再混入代码、Reddit、学术论文、书籍和维基百科——公开发布，因此模型可以被追溯。' },
  c7_hibt: { en: 'Have I Been Trained?', zh: 'Have I Been Trained?',
    d_en: 'Spawning’s search engine over LAION-5B (image–text pairs scraped from Common Crawl): check whether your images are in a training set.',
    d_zh: 'Spawning 做的搜索工具，可检索 LAION-5B（从 Common Crawl 抓取的图文对）：查一查你的图片是否在训练集里。' },
  c7_modelfile_hint: { en: 'ollama show', zh: 'ollama show 命令',
    d_en: 'Prints what a local model is made of: architecture, parameters, quantization, context length, template, system prompt and license.',
    d_zh: '列出本地模型的构成：架构、参数量、量化方式、上下文长度、模板、系统提示和许可证。' }
});

defClass({
  order: 7, n: '7',
  t_en: 'Running a Local LLM', t_zh: '运行本地大语言模型',
  intro_en: '“A model is a file, and the file is its data.” We pulled four small open-weight models onto our laptops, sent them the same prompts, watched them diverge, and then walked each one back to where its data lives.',
  intro_zh: '“模型就是一个文件，而文件就是它的数据。”我们把四个小型开放权重模型下载到笔记本上，给它们发同样的提示，看着答案各不相同，然后把每个模型一路追溯回它的数据来源。',
  qs: [
    {
      id: '7.1',
      embeds: [{ src: 'cf/laptop-llm.html', h: 680,
        name_en: 'Inside the laptop: where a local model lives', name_zh: '笔记本里面：本地模型住在哪',
        hint_en: 'Pick a model size → Load (SSD → memory) → Run prompt · FP16 does not fit in 8 GB · turn Wi-Fi off: it still runs',
        hint_zh: '选模型大小 → Load（硬盘 → 内存）→ Run prompt · FP16 放不进 8GB · 关掉 Wi-Fi 照样能跑' }],
      t_en: 'Local vs. hosted', t_zh: '本地 vs. 云端',
      q_en: 'When the same prompt goes to a hosted model and to a model on your laptop, what changes about where it goes, what you can see, and what you can change?',
      q_zh: '同一个提示词分别发给云端托管模型和你笔记本上的模型时，它“去了哪里”、你“能看到什么”、你“能改变什么”有什么不同？',
      src: 'Class 7: Local vs. Hosted; Ollama',
      kid_en: "Imagine you have a tricky homework question. **Hosted** is like mailing it to a big homework-help company: your letter travels across the city, someone there reads it, keeps a copy in their files, and mails back only the answer. You never see how they worked it out. **Local** is like having a tutor who lives in your own room: the question never leaves the house, and you can watch the tutor work, read their notebook, and even swap in a different tutor. That is the difference between a hosted model and a local model.",
      kid_zh: "想象你有一道很难的作业题。**云端**就像把题目寄给一家大型“作业辅导公司”：信穿过整座城市，那边有人读它、在档案里留一份副本，最后只把答案寄回来。他们怎么算的，你完全看不到。**本地**就像一位住在你自己房间里的家教：题目从没离开过家，你可以看着家教怎么解题、翻他的笔记本，甚至换一位家教。这就是云端模型和本地模型的区别。",
      steps: [
        {"en": "Meet the pieces: your laptop on the left, a small Ollama box right beside it, and a big datacenter far away on the right.", "zh": "先认识一下：左边是你的笔记本电脑，旁边是一个小小的 Ollama 盒子，右边远处是一座大数据中心。", "hi": []},
        {"en": "Press **H**, then **Enter**. Watch your prompt leave the laptop, cross the Internet and light up the company’s servers. The LOGS light goes on: they keep a copy.", "zh": "按 **H**，再按 **回车**。看你的提示词离开笔记本、穿过互联网，点亮公司的服务器。LOGS 灯亮了：他们留了一份副本。", "hi": []},
        {"en": "Look at the laptop screen: in hosted mode you only get the answer. Their hidden system prompt, filters and logs stay on their side.", "zh": "看笔记本屏幕：云端模式下你只拿到答案。他们隐藏的系统提示词、过滤器和日志都留在他们那边。", "hi": []},
        {"en": "Now press **L**, then **Enter**. The prompt stays inside the dashed line — “your machine”. Nobody else gets a copy.", "zh": "现在按 **L**，再按 **回车**。提示词留在虚线框里——“你的电脑”。没有任何人拿到副本。", "hi": []},
        {"en": "Read the screen again: now you can see the weights file, the Modelfile, the temperature and the license — and change any of them. More control and privacy, but only as smart as your laptop allows.", "zh": "再看屏幕：现在你能看到权重文件、Modelfile、温度和许可证——而且都能改。更多掌控、更多隐私，但聪明程度受限于你的电脑。", "hi": []}
      ],
      short_en: 'With a **hosted** model the prompt **leaves my laptop** and crosses the Internet to the company’s servers, where a hidden system prompt, filters and logging act on it; I **see only the output** and can change only the settings the interface offers. With a **local** model (Ollama) the prompt goes to `localhost` and **never leaves the machine**; I can **see the weights file, Modelfile, parameters and license** and **change all of it** (swap models, rewrite the system prompt, temperature, quantization). Trade-off: hosted is more capable; local gives privacy and control but is limited by my hardware.',
      short_zh: '用**云端**模型时，提示词**离开我的电脑**，穿过互联网到达公司服务器，被隐藏的系统提示、过滤器和日志处理；我**只看得到输出**，只能改界面给的设置。用**本地**模型（Ollama）时，提示词发往 `localhost`，**从不离开这台电脑**；我能**看到权重文件、Modelfile、参数和许可证**，并且**全都能改**（换模型、改系统提示、温度、量化）。取舍：云端更强；本地有隐私和控制权，但受硬件限制。',
      basis_en: 'Class 7’s “Local vs. Hosted” decision and the Ollama exercise. Checked against Ollama’s Modelfile docs for what a local model exposes (FROM, PARAMETER, TEMPLATE, SYSTEM, LICENSE). What happens on the hosted side (system prompts, logging, retention, training use) depends on each provider’s policy; the lecture slides were not available.',
      basis_zh: '依据第 7 课“本地 vs. 云端”的决策讨论和 Ollama 练习。本地模型能看到什么，已对照 Ollama 的 Modelfile 文档核对（FROM、PARAMETER、TEMPLATE、SYSTEM、LICENSE）。云端那一侧（系统提示、日志、保存、是否用于训练）取决于各家政策；未能看到课堂讲义。',
      links: [{ t: 'Ollama — download & model library', u: 'https://ollama.com/download' }, { t: 'Ollama — Modelfile reference', u: 'https://docs.ollama.com/modelfile' }],
      rel: ['4.4', '8.1', '6.5'],
      glow: {
        name_en: 'Same prompt, two routes', name_zh: '同一个提示，两条路线',
        hint_en: 'H hosted · L local · Enter sends (or click the laptop / servers / Ollama box)',
        hint_zh: 'H 云端 · L 本地 · 回车发送（或点笔记本 / 服务器 / Ollama 盒子）',
        aria: 'Isometric desk: a laptop, a small local Ollama box beside it, and a remote datacenter. Press H or L to choose the route and Enter to send the prompt.',
        mount(stage, api) {
          const K = api.iso.frame([[0, 0, 0], [470, 0, 0], [0, 300, 0], [470, 300, 0], [300, 20, 150], [30, 164, 104]]);
          const { TOP, FRONT, box, path } = K;
          const esc = api.iso.esc;
          let s = box(0, 0, 0, 470, 300, 8, 14);
          s += `<g transform="${TOP(0, 0, 8)}"><rect class="detail" x="8" y="8" width="454" height="284" rx="8"/>
            <rect id="g71-zone" class="wire" x="18" y="150" width="240" height="138" rx="8" stroke-dasharray="5 4"/>
            <text class="label label-en" x="28" y="166" font-size="9">YOUR MACHINE</text><text class="label-zh" x="28" y="178" font-size="9">你的电脑</text>
            <text class="label label-en" x="300" y="166" font-size="8">THEIR SERVERS</text><text class="label-zh" x="300" y="177" font-size="8">他们的服务器</text>
            <text class="label" x="300" y="190" font-size="6.5">? system prompt · ? filters · ? logging</text>
            <text class="label label-en" x="236" y="191" font-size="7">INTERNET</text></g>`;
          const hp = path([[160, 196, 9], [276, 196, 9], [276, 112, 9], [320, 112, 9], [320, 92, 9]]);
          const lp = path([[160, 240, 9], [188, 240, 9]]);
          s += `<path class="wire-under" d="${hp}"/><path id="g71-hw" class="wire" d="${hp}"/><path id="g71-hp" class="pulse" pathLength="1000" d="${hp}"/>`;
          s += `<path class="wire-under" d="${lp}"/><path id="g71-lw" class="wire" d="${lp}"/><path id="g71-lp" class="pulse" pathLength="1000" d="${lp}"/>`;
          // datacenter racks
          let racks = '';
          for (let i = 0; i < 3; i++) {
            const x = 300 + i * 45;
            racks += box(x, 20, 8, 40, 70, 140);
            let f = api.iso.slits(12, 128, 9, 12, 36, false);
            for (let k = 0; k < 13; k++) f += `<circle id="g71-led${i}-${k}" class="led" cx="7" cy="${12 + k * 9}" r="1.8"/>`;
            racks += `<g transform="${FRONT(x, 90, 148)}">${f}</g>`;
          }
          s += `<g id="g71-dc" class="press" data-tip="c7_hosted">${racks}</g>`;
          s += box(438, 44, 8, 24, 40, 26, 3);
          s += `<g transform="${FRONT(438, 84, 34)}"><circle id="g71-log" class="led" cx="12" cy="9" r="2.6"/><text class="label" x="3" y="21" font-size="6">LOGS</text></g>`;
          // router
          s += box(266, 140, 8, 20, 20, 12, 3) + `<g transform="${FRONT(266, 160, 20)}"><circle id="g71-rt" class="led" cx="10" cy="6" r="2"/></g>`;
          // local Ollama box
          s += `<g id="g71-local" class="press" data-tip="c7_ollama">${box(188, 215, 8, 52, 48, 34, 5)}</g>`;
          s += `<g transform="${FRONT(188, 263, 42)}"><circle id="g71-lled" class="led" cx="44" cy="8" r="2.2"/><text class="label-hi" x="6" y="12" font-size="7.5">OLLAMA</text><text class="label" x="6" y="23" font-size="6">.gguf 2.0 GB</text></g>`;
          // laptop: screen then base
          s += box(30, 164, 14, 130, 6, 90);
          s += `<g transform="${FRONT(30, 170, 104)}"><rect id="g71-glass" class="glass" x="6" y="6" width="118" height="76" rx="2"/>
            ${[0, 1, 2, 3, 4].map(k => `<text id="g71-l${k}" class="scr" x="11" y="${19 + k * 13}" font-size="7"></text>`).join('')}</g>`;
          s += `<g id="g71-lap" class="press">${box(30, 170, 8, 130, 90, 6, 3)}<g transform="${TOP(30, 170, 14)}"><rect class="detail" x="8" y="6" width="114" height="50" rx="2"/>${api.iso.slits(16, 114, 8, 8, 54, true)}${api.iso.slits(16, 46, 10, 8, 122, false)}<rect class="detail" x="45" y="62" width="40" height="20" rx="2"/></g></g>`;
          stage.setAttribute('viewBox', K.viewBox); stage.innerHTML = s;
          const $ = id => stage.querySelector('#' + id);
          const st = { mode: 'hosted', sent: 0, logged: 0, last: null };
          const lines = arr => arr.forEach((t, k) => { $('g71-l' + k).textContent = t || ''; });
          function render() {
            $('g71-hw').classList.toggle('hot', st.mode === 'hosted');
            $('g71-lw').classList.toggle('hot', st.mode === 'local');
            $('g71-zone').classList.toggle('hot', st.mode === 'local');
            $('g71-log').classList.toggle('hot', st.logged > 0);
            if (!st.last) lines(['$ prompt ready', `route: ${st.mode}`, 'press Enter']);
            else if (st.last === 'hosted') lines(['> answer received', 'see: output only', 'system prompt: ?', 'model version: ?', `logged: yes (${st.logged})`]);
            else lines(['> answer (wifi off ok)', 'weights llama3.2:3b', 'SYSTEM: editable', 'temp 0.7 · ctx 4096', 'license: on disk']);
            $('g71-glass').classList.toggle('hot', !!st.last);
            const h = st.mode === 'hosted';
            api.say(h ? `hosted · leaves your machine · logged ${st.logged}` : `local · stays on localhost:11434 · all visible`,
              h ? `云端 · 离开电脑 · 已记录 ${st.logged} 次` : `本地 · 留在 localhost · 全部可见`);
          }
          function setMode(m) { st.mode = m; render(); }
          function send() {
            st.sent++; api.flash($('g71-lap'), 220);
            const m = st.mode;
            api.replay($(m === 'hosted' ? 'g71-hp' : 'g71-lp'));
            if (m === 'hosted') api.after(180, () => api.flash($('g71-rt').parentNode, 300));
            api.after(m === 'hosted' ? 520 : 260, () => {
              if (m === 'hosted') {
                st.logged++;
                const on = [];
                for (let i = 0; i < 3; i++) for (let k = 0; k < 13; k++) if (Math.random() < 0.45) { const e = $(`g71-led${i}-${k}`); e.classList.add('hot'); on.push(e); }
                api.flash($('g71-dc'), 380);
                api.after(900, () => on.forEach(e => e.classList.remove('hot')));
              } else {
                $('g71-lled').classList.add('hot'); api.flash($('g71-local'), 380);
              }
              st.last = m; api.power(true); render();
            });
            render();
          }
          $('g71-lap').addEventListener('click', send);
          $('g71-dc').addEventListener('click', () => { setMode('hosted'); send(); });
          $('g71-local').addEventListener('click', () => { setMode('local'); send(); });
          render();
          return {
            key: e => {
              const k = e.key.toLowerCase();
              if (k === 'h') { setMode('hosted'); return true; }
              if (k === 'l') { setMode('local'); return true; }
              if (e.key === 'Enter' || e.key === ' ') { send(); return true; }
              return false;
            },
            demo: () => { api.after(200, send); api.after(1900, () => { setMode('local'); send(); }); }
          };
        }
      },
      fig() {
        const C = F.C; let s = '';
        const tile = (cx, cy, S, o) => { F.setIso(S, cx, cy); return F.plate({ x: -(o.w || 2) / 2, y: -(o.d || 2) / 2, ...o }); };
        // hosted lane
        s += F.text(20, 26, 'HOSTED', { cls: 'big', anchor: 'start', color: C.red }) + F.sub(92, 26, '云端：提示词离开你的电脑');
        s += F.g(tile(70, 92, 20, { w: 2.2, d: 1.6, t: 0.15, pattern: 'grid', density: 4 }) + F.text(70, 135, 'YOU', { cls: 'tiny' }), { note: { en: 'Your laptop: just a window.', zh: '你的电脑：只是一个窗口。' } });
        s += F.g(F.arrow(115, 92, 245, 92, { dash: '5 4', stroke: C.red }) + F.text(180, 82, 'INTERNET', { cls: 'tiny', color: C.red }), { tip: 'c7_hosted' });
        s += F.g(tile(310, 92, 18, { w: 3.6, d: 2.6, t: 0.35, pattern: 'chips', density: 5 }) + F.text(310, 150, 'THEIR SERVERS', { cls: 'tiny' }), { tip: 'c7_hosted' });
        const hid = [['SYSTEM PROMPT', '看不到'], ['SAFETY FILTERS', '看不到'], ['LOGS · RETENTION', '可能被保存'], ['MODEL VERSION', '可能悄悄更换']];
        hid.forEach(([t, z], i) => s += F.rect(400, 44 + i * 26, 210, 22, { text: t + '  ✕', dash: '3 3', tcls: 'tiny', tcolor: C.mute, note: { en: t.toLowerCase() + ': decided by the company, mostly invisible to you.', zh: t + '：由公司决定，你基本看不到——' + z + '。' } }));
        s += F.text(634, 66, 'SEE: output only', { anchor: 'start', cls: 'tiny', color: C.red }) + F.sub(634, 82, '只看到回答') +
          F.text(634, 108, 'CHANGE: their options', { anchor: 'start', cls: 'tiny', color: C.red }) + F.sub(634, 124, '只能改界面给的选项');
        s += F.line(20, 178, 740, 178, { dash: '3 4', stroke: C.mute, sw: 0.8 });
        // local lane
        s += F.text(20, 210, 'LOCAL', { cls: 'big', anchor: 'start', color: C.green }) + F.sub(80, 210, '本地：一切都留在这台电脑里');
        s += `<rect x="20" y="222" width="600" height="128" rx="10" fill="none" stroke="${C.green}" stroke-dasharray="5 4"/>`;
        s += F.g(tile(70, 290, 20, { w: 2.2, d: 1.6, t: 0.15, pattern: 'grid', density: 4 }) + F.text(70, 333, 'YOU', { cls: 'tiny' }), { tip: 'c7_local' });
        s += F.g(F.arrow(115, 290, 245, 290, { stroke: C.green }) + F.text(180, 280, 'localhost:11434', { cls: 'tiny', color: C.green }), { note: { en: 'The request goes to your own machine — works with Wi-Fi off.', zh: '请求发往你自己的电脑——断网也能用。' } });
        s += F.g(tile(310, 290, 18, { w: 2.6, d: 2.6, t: 0.5, fill: C.greenF, side: '#d3eadb', pattern: 'dots', density: 5 }) + F.text(310, 343, 'OLLAMA + .GGUF', { cls: 'tiny' }), { tip: 'c7_ollama' });
        const vis = [['llama3.2:3b · 2.0 GB', 'c7_weights'], ['SYSTEM prompt · Modelfile', 'c7_modelfile_hint'], ['temperature · num_ctx', 'c7_modelfile_hint'], ['LICENSE · model card', 'c7_license']];
        vis.forEach(([t, k], i) => s += F.rect(400, 236 + i * 26, 210, 22, { text: t, tcls: 'tiny', fill: '#fff', stroke: C.green, tip: k }));
        s += F.text(634, 262, 'SEE: the file, the', { anchor: 'start', cls: 'tiny', color: C.green }) + F.text(634, 276, 'prompt, the params', { anchor: 'start', cls: 'tiny', color: C.green }) + F.sub(634, 292, '看得到全部') +
          F.text(634, 318, 'CHANGE: all of it', { anchor: 'start', cls: 'tiny', color: C.green }) + F.sub(634, 334, '全都能改');
        return F.svg(760, 360, s, { label: 'hosted vs local model route' });
      },
      cap_en: 'Same prompt, two journeys. Hosted: it crosses the Internet into a black box you can only see the output of. Local: it never leaves the dashed line, and every layer is open to inspect and edit.',
      cap_zh: '同一个提示，两段旅程。云端：它穿过互联网进入一个黑箱，你只能看到输出。本地：它从不离开虚线框，每一层都可以查看和修改。',
      a_en: `**Where it goes.** To a [[c7_hosted]], the prompt leaves your laptop, crosses the Internet and lands on the company’s servers, where it passes through their hidden system prompt and safety filters and may be logged, retained, reviewed or used for training under their policy. To a [[c7_local]] run with [[c7_ollama]], the prompt goes to \`localhost\` — your own machine — and never leaves it. It even works offline.

**What you can see.** Hosted: only the answer. The model, its version (which can change silently), the system prompt and the logging are invisible. Local: everything — the [[c7_weights]] on your disk, its size, [[c7_params]] and [[c7_quant]], and with [[c7_modelfile_hint]] its template, system prompt, parameters and [[c7_license]]; plus the model card that says where it came from.

**What you can change.** Hosted: only what the interface exposes. Local: almost anything — swap models, rewrite the system prompt in a Modelfile, change temperature and context length, choose a quantization, run the same prompt through four models side by side.

**The trade-off:** local models are smaller and limited by your hardware, and you take on the responsibility; hosted models are more capable but you give up privacy, visibility and control.`,
      a_zh: `**它去了哪里。**发给[[c7_hosted]]时，提示词离开你的电脑，穿过互联网，到达公司的服务器，在那里经过他们隐藏的系统提示和安全过滤器，并可能按他们的政策被记录、保存、人工审核或用于训练。发给用[[c7_ollama]]运行的[[c7_local]]时，提示词发往 \`localhost\`——你自己的电脑——从不离开，甚至断网也能运行。

**你能看到什么。**云端：只有回答。模型本身、它的版本（可能悄悄更换）、系统提示、日志记录都看不见。本地：一切——硬盘上的[[c7_weights]]、它的大小、[[c7_params]]和[[c7_quant]]方式；用[[c7_modelfile_hint]]还能看到模板、系统提示、参数和[[c7_license]]；再加上说明它从哪里来的模型卡。

**你能改变什么。**云端：只能改界面开放的选项。本地：几乎所有——换模型、在 Modelfile 里重写系统提示、调整温度和上下文长度、选择量化版本、把同一个提示同时发给四个模型对比。

**取舍：**本地模型更小、受你的硬件限制，责任也由你承担；云端模型更强，但你让出了隐私、可见性和控制权。`,
      hook_en: 'Hosted: it leaves, you see the output, you change the settings they give you. Local: it stays, you see the file, you change everything.',
      hook_zh: '云端：数据离开，你只看到输出，只能改他们给的设置。本地：数据留下，你看得到文件，什么都能改。',
      trap_en: 'Answer all three parts explicitly — where it goes / what you can see / what you can change — and mention the trade-off (capability vs. privacy and control).',
      trap_zh: '三问都要明确回答——去了哪里 / 能看到什么 / 能改变什么——并提到取舍（能力 vs. 隐私与控制）。'
    },
    {
      id: '7.2', t_en: 'Open weights vs. open source', t_zh: '开放权重 vs. 开源',
      q_en: 'What is the difference? Name one model you ran in each category and its license.',
      q_zh: '两者有什么区别？各举一个你运行过的模型，并说出它的许可证。',
      src: 'Hugging Face model cards & licenses; Ai2 OLMo',
      kid_en: "Think of a bakery. **Open weights** is a bakery that sells you the finished cake: you can eat it, decorate it, even cut it differently — but they won’t tell you the recipe or show you the ingredients. **Open source** is a bakery that gives you the cake *and* the recipe *and* the list of every ingredient and where it came from, so you could bake it yourself and check what’s inside. Llama is the first kind of bakery; OLMo is the second.",
      kid_zh: "想象一家面包店。**开放权重**就像面包店卖给你一个做好的蛋糕：你可以吃、可以装饰、可以随便切——但他们不告诉你配方，也不给你看用了什么原料。**开源**就像面包店给你蛋糕，*还*给你配方，*还*给你每样原料的清单和产地，你可以自己烤一个，也能检查里面到底放了什么。Llama 属于第一种面包店，OLMo 属于第二种。",
      steps: [
        {"en": "Two bakeries side by side: **open weights** on the left (orange), **open source** on the right (green).", "zh": "两家面包店并排：左边（橙色）是**开放权重**，右边（绿色）是**开源**。", "hi": ["c7_open_weights", "c7_open_source"]},
        {"en": "Both give you the cake: the **weights** and the code to run them. That’s why you could `ollama pull` either one.", "zh": "两家都给你蛋糕：**权重**和运行它的代码。所以两种你都能用 `ollama pull` 下载。", "hi": ["c72-r0", "c72-r1"]},
        {"en": "Here’s the big difference: the **training data**. Open weights keeps it secret (dashed box); open source shows you what the model read.", "zh": "最大的区别在这里：**训练数据**。开放权重把它藏起来（虚线框）；开源会告诉你模型读过什么。", "hi": ["c72-r2"]},
        {"en": "The **recipe** — training code, settings and logs — is also only shared by open source. Without it, nobody can rebuild or fully study the model.", "zh": "**配方**——训练代码、设置和日志——也只有开源会公开。没有它，就没人能重建或彻底研究这个模型。", "hi": ["c72-r3"]},
        {"en": "Last, the **license**: open weights often comes with its own custom rules; open source uses a standard, approved license like Apache 2.0.", "zh": "最后是**许可证**：开放权重常常附带自己定的特殊规则；开源用的是标准、公认的许可证，比如 Apache 2.0。", "hi": ["c7_license"]}
      ],
      short_en: '**Open weights** means the trained **weights are downloadable** to run and fine-tune, but the **training data and recipe are withheld**, often under a **custom license** with use limits. **Open source** means **weights, training data, code and recipe** are all released under an **OSI-approved license**, so you can study and rebuild the model. Open weights: `llama3.2:3b` (Meta, Llama 3.2 Community License). Open source: `olmo2:7b` (Ai2, Apache 2.0, with open training data, code and checkpoints).',
      short_zh: '**开放权重**：训练好的**权重可以下载**、运行和微调，但**训练数据和配方不公开**，常附带有使用限制的**自定义许可证**。**开源**：**权重、训练数据、代码和配方**全部公开，采用 **OSI 认可的许可证**，可以研究并重建模型。开放权重例子：`llama3.2:3b`（Meta，Llama 3.2 社区许可证）。开源例子：`olmo2:7b`（Ai2，Apache 2.0，训练数据、代码和检查点都公开）。',
      basis_en: 'Checked the Hugging Face model cards: Qwen2.5-3B lists the “qwen-research” license; OLMo-2-1124-7B states code and model are Apache 2.0 and that all code, checkpoints and training details are released, with its OLMo-Mix-1124 / Dolmino pretraining data published by Ai2. DeepSeek’s distilled Llama models ship with an MIT license although built on Meta’s Llama base (Simon Willison flags the mismatch).',
      basis_zh: '已核对 Hugging Face 模型卡：Qwen2.5-3B 标注的是“qwen-research”许可证；OLMo-2-1124-7B 写明代码和模型为 Apache 2.0，并公开全部代码、检查点和训练细节，预训练数据 OLMo-Mix-1124 / Dolmino 由 Ai2 发布。DeepSeek 的 Llama 蒸馏版附 MIT 许可证，但底座是 Meta 的 Llama（Simon Willison 指出两者不太一致）。',
      links: [{ t: 'Ai2 — OLMo 2', u: 'https://allenai.org/blog/olmo2' }, { t: 'Qwen2.5-3B model card', u: 'https://huggingface.co/Qwen/Qwen2.5-3B' }, { t: 'Hugging Face — model cards & licenses', u: 'https://huggingface.co/docs/hub/model-cards' }],
      rel: ['7.4', '7.5', '8.2'],
      fig() {
        const C = F.C; let s = '';
        s += F.g(F.text(180, 30, 'OPEN WEIGHTS', { cls: 'big', color: C.amber }) + F.sub(180, 48, '开放权重 · 只给成品', { anchor: 'middle' }), { tip: 'c7_open_weights' });
        s += F.g(F.text(580, 30, 'OPEN SOURCE', { cls: 'big', color: C.green }) + F.sub(580, 48, '开源 · 给成品也给配方', { anchor: 'middle' }), { tip: 'c7_open_source' });
        const rows = [
          ['WEIGHTS', '权重文件', 1, 1, { en: 'The trained numbers you download and run.', zh: '你下载并运行的那些训练好的数字。' }],
          ['INFERENCE CODE', '推理代码', 1, 1, { en: 'Code to run the model.', zh: '运行模型的代码。' }],
          ['TRAINING DATA', '训练数据', 0, 1, { en: 'What the model learned from. Open-weight labs usually say only “publicly available data.”', zh: '模型从什么里学的。开放权重的实验室通常只写“公开可得的数据”。' }],
          ['TRAINING RECIPE', '训练代码与配方 日志', 0, 1, { en: 'Training code, hyperparameters, checkpoints, logs — what you need to rebuild or study it.', zh: '训练代码、超参数、中间检查点、日志——重建或研究模型所需的东西。' }]
        ];
        rows.forEach(([t, z, a, b, note], i) => {
          const y = 66 + i * 50;
          let g = F.text(380, y + 15, t, { cls: 'lt' }) + F.sub(380, y + 31, z, { anchor: 'middle' });
          g += a ? F.rect(60, y, 240, 36, { text: '✓ RELEASED', fill: C.amberF, stroke: C.amber, tcls: 'tiny' }) : F.rect(60, y, 240, 36, { text: '— WITHHELD', dash: '4 3', tcolor: C.mute, tcls: 'tiny' });
          g += b ? F.rect(460, y, 240, 36, { text: '✓ RELEASED', fill: C.greenF, stroke: C.green, tcls: 'tiny' }) : '';
          s += `<g id="c72-r${i}">` + F.g(g, { note }) + '</g>';
        });
        const y = 266;
        s += F.g(F.text(380, y + 15, 'LICENSE', { cls: 'lt' }) + F.sub(380, y + 31, '许可证', { anchor: 'middle' }) +
          F.rect(60, y, 240, 36, { text: 'custom · use limits', fill: '#fff', stroke: C.amber, tcls: 'tiny' }) +
          F.rect(460, y, 240, 36, { text: 'OSI · Apache 2.0', fill: '#fff', stroke: C.green, tcls: 'tiny' }), { tip: 'c7_license' });
        s += F.line(20, 318, 740, 318, { dash: '2 3', stroke: C.mute, sw: 0.6 });
        s += F.text(180, 340, 'llama3.2:3b · qwen2.5:3b · deepseek-r1:8b', { cls: 'tiny' }) + F.text(580, 340, 'olmo2:7b  (Ai2 · open data)', { cls: 'tiny' });
        s += F.sub(180, 357, '我们课上跑过的开放权重模型', { anchor: 'middle' }) + F.sub(580, 357, '我们课上跑过的真正开源模型', { anchor: 'middle' });
        return F.svg(760, 370, s, { label: 'open weights vs open source' });
      },
      cap_en: 'Both let you download and run the model. Only open source hands over the data and recipe — the parts you need to know where its behavior came from.',
      cap_zh: '两者都能让你下载并运行模型。只有开源会交出数据和配方——要想知道模型的行为从何而来，恰恰需要这些。',
      a_en: `**[[c7_open_weights]]**: the lab releases the trained **weights** so you can download, run and fine-tune the model — but not the **training data** or the full **training recipe**, and often under a custom [[c7_license]] with limits on use. You get the cake, not the recipe or the ingredients list.

**[[c7_open_source]]**: everything needed to **study, reproduce and modify** the model is released — weights, training data, training code, recipe and logs — under an OSI-approved license. You can trace a behavior back to the data that caused it.

From class (via Ollama):
- **Open weights:** \`llama3.2:3b\` — Meta, **Llama 3.2 Community License** (custom: acceptable-use policy, attribution, special terms above 700M monthly users). Also \`qwen2.5:3b\` (Alibaba, Qwen Research License for the 3B size) and \`deepseek-r1:8b\` (MIT-licensed distill, built on a Llama base).
- **Open source:** \`olmo2:7b\` — Ai2’s OLMo 2, **Apache 2.0**, with its training data (OLMo-Mix and Dolmino, the successors of [[c7_dolma]]), code and checkpoints all public.

So “open” on a model card can mean very different things — check what is actually released.`,
      a_zh: `**[[c7_open_weights]]**：实验室公开训练好的**权重**，你可以下载、运行、微调——但不公开**训练数据**和完整的**训练配方**，而且常常附带有使用限制的自定义[[c7_license]]。你拿到的是蛋糕，不是配方，也没有配料表。

**[[c7_open_source]]**：**研究、复现和修改**模型所需的一切都公开——权重、训练数据、训练代码、配方和日志——并采用 OSI 认可的许可证。你可以把某个行为一路追溯到导致它的数据。

课上（通过 Ollama）跑过的例子：
- **开放权重：**\`llama3.2:3b\`——Meta，**Llama 3.2 社区许可证**（自定义条款：可接受使用政策、署名要求、月活超过 7 亿需另行授权）。还有 \`qwen2.5:3b\`（阿里巴巴，3B 版本采用 Qwen 研究许可证）和 \`deepseek-r1:8b\`（MIT 许可的蒸馏模型，底座是 Llama）。
- **开源：**\`olmo2:7b\`——Ai2 的 OLMo 2，**Apache 2.0**，训练数据（OLMo-Mix 和 Dolmino，[[c7_dolma]] 的后继版本）、代码和检查点全部公开。

所以模型卡上写的“开放”可能意思大不相同——要看实际公开了什么。`,
      hook_en: 'Open weights = you get the cake. Open source = you get the cake, the recipe and the ingredients (Llama vs. OLMo).',
      hook_zh: '开放权重 = 给你蛋糕；开源 = 给你蛋糕、配方和原料（Llama vs. OLMo）。',
      trap_en: 'The question asks for a model AND its license in each category. “Llama is open source” is the classic wrong answer — it is open weights under a custom license.',
      trap_zh: '题目要求每类各给一个模型**及其许可证**。“Llama 是开源的”是典型错误——它是开放权重，用的是自定义许可证。'
    },
    {
      id: '7.3', t_en: 'Quantization', t_zh: '量化',
      q_en: 'What is quantization, and what do you gain and lose by running a smaller version of a model?',
      q_zh: '什么是量化？运行一个“更小版本”的模型，你得到了什么、失去了什么？',
      src: 'GGUF quantization explained; Ollama',
      kid_en: "Imagine measuring everyone in your class with a ruler. A ruler with millimetre marks gives exact heights but takes lots of writing. A ruler with only a mark every 10 cm is quicker and your list gets much shorter — but everyone’s height gets rounded, so a few answers come out a bit wrong. **Quantization** does this to every number inside a model: it rounds them onto a coarser ruler so the model file shrinks enough to fit and run fast on a laptop, at the cost of a little accuracy.",
      kid_zh: "想象你用尺子给全班同学量身高。带毫米刻度的尺子量得很准，但要记很多数字；如果尺子每 10 厘米才有一个刻度，量得快，记录也短得多——可每个人的身高都被“四舍五入”了，有些就不太准。**量化**就是对模型里的每个数字做这件事：把它们放到更粗的“尺子”上取整，让模型文件小到能装进笔记本电脑、跑得更快，代价是精度稍微下降。",
      steps: [
        {"en": "Click **FP16** first. One weight sits on a super-fine ruler — almost exact. But look at the file: 6.4 GB, too big for an 8 GB laptop once the system takes its share.", "zh": "先点 **FP16**。一个权重放在非常精细的“尺子”上——几乎完全准确。但看文件：6.4 GB，系统再占一部分，8 GB 的笔记本就装不下了。", "hi": []},
        {"en": "Click **Q8_0**. Now the ruler has 256 marks. The weight moves a tiny bit to the nearest mark, and the file is cut in half. You’d barely notice a difference in answers.", "zh": "点 **Q8_0**。现在尺子只有 256 个刻度。权重挪到最近的刻度，移动得很少，文件直接减半。回答几乎看不出差别。", "hi": []},
        {"en": "Click **Q4_K_M**. Only about 16 marks — the rounding error grows, but the file is about 2 GB: it fits and runs fast. This is the usual sweet spot.", "zh": "点 **Q4_K_M**。大约只剩 16 个刻度——取整误差变大了，但文件只有约 2 GB：装得下、跑得快。这是最常用的平衡点。", "hi": []},
        {"en": "Click **Q2_K**. Just a few marks. Tiny file — but every number is now quite wrong, and the model makes clearly more mistakes.", "zh": "点 **Q2_K**。只剩几个刻度。文件很小——但每个数字都偏差不少，模型明显更容易出错。", "hi": []},
        {"en": "So quantization is a trade: **gain** size and speed (it fits on your laptop), **lose** precision (more mistakes on hard tasks).", "zh": "所以量化是一笔交换：**得到**体积和速度（能装进你的笔记本），**失去**精度（难题上错得更多）。", "hi": []}
      ],
      short_en: '**Quantization** stores each weight with **fewer bits** (16-bit → 8 or about 4) by **rounding it onto a coarser scale**. **Gain:** a much smaller file (Llama 3.2 3B: 6.4 GB → 2.0 GB at Q4_K_M) that **fits in a laptop’s memory** and runs **faster**, so the model can run locally. **Lose:** **precision** — a small error in every weight, which shows up as more mistakes in reasoning, math and long or detailed tasks (Q8 ≈ lossless, Q4 a good compromise, Q2 clearly worse).',
      short_zh: '**量化**就是用**更少的位数**存每个权重（16 位 → 8 位或约 4 位），把它**四舍五入到更粗的刻度上**。**得到：**文件小得多（Llama 3.2 3B：6.4 GB → Q4_K_M 2.0 GB），**装得进笔记本内存**、运行**更快**，模型才能本地运行。**失去：****精度**——每个权重都有一点误差，表现为推理、数学和长而细的任务上更多错误（Q8 几乎无损，Q4 是不错的折中，Q2 明显变差）。',
      basis_en: 'File sizes checked against the published GGUF files of Llama 3.2 3B Instruct on Hugging Face (F16 6.43 GB, Q8_0 3.42 GB, Q4_K_M 2.02 GB, Q2_K 1.36 GB). The quality ranking follows the course reading “GGUF quantization explained.”',
      basis_zh: '文件大小已对照 Hugging Face 上 Llama 3.2 3B Instruct 的 GGUF 文件核对（F16 6.43 GB、Q8_0 3.42 GB、Q4_K_M 2.02 GB、Q2_K 1.36 GB）。质量排序依据课程读物《GGUF quantization explained》。',
      links: [{ t: 'GGUF quantization explained (course reading)', u: 'https://dev.to/pat9000/gguf-quantization-explained-q4km-vs-q5km-vs-q8-which-to-pick-2026-31pl' }, { t: 'Llama 3.2 3B Instruct — GGUF files & sizes', u: 'https://huggingface.co/unsloth/Llama-3.2-3B-Instruct-GGUF' }],
      rel: ['7.1', '8.2'],
      widget: {
        html() {
          return `<div class="w-ctrl"><span class="w-seg">${['FP16', 'Q8_0', 'Q4_K_M', 'Q2_K'].map(k => `<button data-k="${k}" class="${k === 'Q4_K_M' ? 'on' : ''}">${k}</button>`).join('')}</span>
            <span class="w-out"></span><span style="color:var(--mute)"><span class="en">Llama 3.2 3B · real GGUF sizes</span> <span class="zh">Llama 3.2 3B · 真实 GGUF 文件大小</span></span></div>
            <div class="w-svg"></div><div class="w-readout"></div>`;
        },
        mount(el) {
          const C = F.C;
          const Q = {
            FP16: { bits: 16, gb: 6.43, levels: 0, col: C.ink, f: '#fff', q_en: 'original', q_zh: '原始精度', d_en: 'Original 16-bit weights. The file alone is 6.4 GB — with the OS and apps also needing memory, it does not fit in an 8 GB laptop.', d_zh: '原始 16 位权重。光文件就 6.4 GB——加上系统和其他程序要占的内存，8 GB 的笔记本装不下。' },
            Q8_0: { bits: 8, gb: 3.42, levels: 256, col: C.blue, f: C.blueF, q_en: 'near-lossless', q_zh: '几乎无损', d_en: '8 bits, 256 steps per block. Half the size, and answers are almost indistinguishable from FP16.', d_zh: '8 位，每块 256 个刻度。体积减半，回答和 FP16 几乎分不出差别。' },
            Q4_K_M: { bits: 4.8, gb: 2.02, levels: 16, col: C.mag, f: C.magF, q_en: 'small loss', q_zh: '轻微损失', d_en: '~4–5 bits, 16 steps. Under a third of the size and much faster; slightly more mistakes on reasoning and long, detailed tasks. Ollama’s usual default.', d_zh: '约 4–5 位，16 个刻度。不到三分之一的体积、快得多；推理和长而细的任务上错误略多。Ollama 的常用默认值。' },
            Q2_K: { bits: 2.6, gb: 1.36, levels: 4, col: C.red, f: C.redF, q_en: 'big loss', q_zh: '明显变差', d_en: '~2–3 bits, only 4 steps. Tiny and fast, but every weight is far off — output gets noticeably worse and incoherent.', d_zh: '约 2–3 位，只有 4 个刻度。又小又快，但每个权重都偏得厉害——输出明显变差、前言不搭后语。' }
          };
          const TRUE = 0.68359375;
          const box = el.querySelector('.w-svg'), out = el.querySelector('.w-out'), rd = el.querySelector('.w-readout');
          let cur = 'Q4_K_M';
          function draw() {
            const r = Q[cur]; let s = '';
            // block: thickness ∝ bits
            F.setIso(17, 95, 120);
            s += F.g(F.plate({ x: -1.6, y: -1.6, w: 3.2, d: 3.2, t: r.bits / 16 * 2.2, fill: r.f, side: r.f, pattern: 'grid', density: 4, pc: r.col }), { tip: 'c7_quant' });
            s += F.text(95, 200, cur, { cls: 'big', color: r.col }) + F.text(95, 218, (r.bits === 16 ? '16' : '≈' + r.bits) + ' BITS / WEIGHT', { cls: 'tiny', color: C.mute }) + F.sub(95, 234, '每个权重的位数', { anchor: 'middle' });
            // ruler
            const x0 = 225, x1 = 505, y = 112;
            s += F.text((x0 + x1) / 2, 40, 'ONE WEIGHT ON THE RULER', { cls: 'tiny', color: C.mute }) + F.sub((x0 + x1) / 2, 56, '一个权重落在“尺子”上', { anchor: 'middle' });
            s += F.line(x0, y, x1, y, { sw: 1.2 });
            if (!r.levels) s += `<rect x="${x0}" y="${y - 6}" width="${x1 - x0}" height="12" fill="${C.ink}" opacity=".1"/>`;
            else { const n = Math.min(r.levels, 64); for (let k = 0; k <= n; k++) { const x = x0 + (x1 - x0) * k / n; s += F.line(x, y - 6, x, y + 6, { sw: .7, stroke: r.col }); } }
            const snap = r.levels ? Math.round(TRUE * r.levels) / r.levels : TRUE;
            const xt = x0 + (x1 - x0) * TRUE, xs = x0 + (x1 - x0) * snap;
            s += `<circle cx="${xt}" cy="${y}" r="4" fill="none" stroke="${C.mute}" stroke-width="1.2"/>` + `<circle cx="${xs}" cy="${y}" r="5" fill="${r.col}"/>`;
            if (Math.abs(xs - xt) > 2) s += F.arrow(xt, y + 16, xs, y + 16, { stroke: r.col });
            s += F.text(xs, y - 16, snap.toFixed(r.levels === 0 ? 8 : 4), { cls: 'mono', color: r.col });
            s += F.text((x0 + x1) / 2, y + 40, `true 0.68359375 → error ${Math.abs(snap - TRUE).toFixed(5)}`, { cls: 'tiny', color: C.mute }) +
              F.sub((x0 + x1) / 2, y + 56, r.levels ? `${r.levels} 个刻度${r.levels > 64 ? '（图中只画 64 个）' : ''}` : '几乎连续', { anchor: 'middle' });
            // RAM bar
            const rx = 548, rw = 190, ry = 92, GB = 8, os = 3;
            s += F.text(rx, 40, 'LAPTOP RAM · 8 GB', { anchor: 'start', cls: 'tiny', color: C.mute }) + F.sub(rx, 56, '笔记本内存', { anchor: 'start' });
            const used = Math.min(GB, os + r.gb), over = os + r.gb > GB;
            s += `<rect x="${rx}" y="${ry}" width="${rw}" height="26" rx="4" fill="#fff" stroke="${C.ink}"/>`;
            s += `<rect x="${rx}" y="${ry}" width="${rw * os / GB}" height="26" rx="4" fill="#ecebe6"/>` + F.text(rx + rw * os / GB / 2, ry + 15, 'OS+APPS', { cls: 'tiny', color: C.mute });
            s += F.g(`<rect x="${rx + rw * os / GB}" y="${ry}" width="${rw * (used - os) / GB}" height="26" fill="${r.f}" stroke="${r.col}"/>` +
              F.text(rx + rw * (os + (used - os) / 2) / GB, ry + 15, r.gb.toFixed(2) + ' GB', { cls: 'tiny', color: r.col }), { tip: 'c7_gguf' });
            if (over) s += `<rect x="${rx + rw}" y="${ry}" width="${rw * (os + r.gb - GB) / GB}" height="26" fill="${C.redF}" stroke="${C.red}" stroke-dasharray="3 2"/>`;
            s += F.text(rx, ry + 48, over ? '✗ DOES NOT FIT' : '✓ FITS', { anchor: 'start', cls: 'lt', color: over ? C.red : C.green }) + F.sub(rx, ry + 64, over ? '装不下：会卡死或无法运行' : '装得下：可以本地运行', { anchor: 'start' });
            // quality
            s += F.text(rx, 200, 'QUALITY KEPT', { anchor: 'start', cls: 'tiny', color: C.mute }) + F.sub(rx + 90, 200, '保留的质量', { anchor: 'start' });
            ['FP16', 'Q8_0', 'Q4_K_M', 'Q2_K'].forEach((k, i) => { const on = k === cur; s += `<rect x="${rx + i * 48}" y="210" width="42" height="10" rx="2" fill="${on ? Q[k].col : '#ecebe6'}"/>` + F.text(rx + i * 48 + 21, 234, k, { cls: 'tiny', color: on ? Q[k].col : C.mute }); });
            s += F.text(rx, 254, r.q_en.toUpperCase(), { anchor: 'start', cls: 'lt', color: r.col }) + F.sub(rx + 110, 254, r.q_zh, { anchor: 'start' });
            box.innerHTML = F.svg(760, 268, s, { label: 'quantization explorer' });
            out.textContent = `${r.gb.toFixed(2)} GB`;
            rd.innerHTML = `<span class="en"><b>${cur}</b> · ${r.q_en}. ${r.d_en}</span> <span class="zh"><b>${cur}</b> · ${r.q_zh}。${r.d_zh}</span>`;
          }
          el.querySelectorAll('.w-seg button').forEach(b => b.addEventListener('click', () => {
            cur = b.dataset.k; el.querySelectorAll('.w-seg button').forEach(x => x.classList.toggle('on', x === b)); draw();
          }));
          draw();
        }
      },
      fig() {
        const C = F.C; let s = '';
        const tile = (cx, cy, S, o) => { F.setIso(S, cx, cy); return F.plate({ x: -(o.w || 2) / 2, y: -(o.d || 2) / 2, ...o }); };
        s += F.text(95, 22, 'BITS / WEIGHT', { cls: 'tiny', color: C.mute }) + F.text(390, 22, 'ONE WEIGHT, ROUNDED', { cls: 'tiny', color: C.mute }) + F.text(640, 22, 'FILE SIZE · LLAMA 3.2 3B', { cls: 'tiny', color: C.mute });
        const rows = [
          { name: 'FP16', zh: '16 位浮点 · 原始', bits: 16, t: 1.3, val: '0.734130859', levels: 0, gb: 6.4, col: C.ink, f: '#fff' },
          { name: 'Q8_0', zh: '8 位 · 256 个刻度', bits: 8, t: 0.65, val: '0.7344', levels: 64, gb: 3.4, col: C.blue, f: C.blueF },
          { name: 'Q4_K_M', zh: '约 4.5 位 · 16 个刻度', bits: 4, t: 0.33, val: '0.75', levels: 16, gb: 2.0, col: C.mag, f: C.magF }
        ];
        rows.forEach((r, i) => {
          const cy = 92 + i * 100;
          let g = tile(70, cy, 17, { w: 2.6, d: 2.6, t: r.t, fill: r.f, side: r.f, pattern: 'grid', density: 4 });
          g += F.text(130, cy - 8, r.name, { anchor: 'start', cls: 'lt', color: r.col }) + F.sub(130, cy + 9, r.zh);
          // number line
          const x0 = 260, x1 = 520, ly = cy;
          g += F.line(x0, ly, x1, ly, { sw: 1 });
          if (!r.levels) g += `<rect x="${x0}" y="${ly - 5}" width="${x1 - x0}" height="10" fill="${C.ink}" opacity=".12"/>`;
          else for (let k = 0; k <= r.levels; k++) { const x = x0 + (x1 - x0) * k / r.levels; g += F.line(x, ly - 5, x, ly + 5, { sw: 0.7, stroke: r.col }); }
          const xv = x0 + (x1 - x0) * 0.734, xs = x0 + (x1 - x0) * (r.levels ? Math.round(0.734 * r.levels) / r.levels : 0.734);
          g += `<circle cx="${xv}" cy="${ly}" r="3" fill="none" stroke="${C.mute}"/>` + `<circle cx="${xs}" cy="${ly}" r="4" fill="${r.col}"/>`;
          g += F.text(xs, ly - 14, r.val, { cls: 'tiny', color: r.col });
          // size bar
          const bw = r.gb / 6.4 * 150;
          g += `<rect x="560" y="${cy - 9}" width="${bw}" height="18" rx="3" fill="${r.f}" stroke="${r.col}"/>` + F.text(568 + bw, cy + 4, r.gb.toFixed(1) + ' GB', { anchor: 'start', cls: 'mono', color: r.col });
          s += F.g(g, { tip: i === 2 ? 'c7_gguf' : 'c7_quant' });
        });
        s += F.text(260, 340, '← smaller · faster · fits in RAM', { anchor: 'start', cls: 'tiny', color: C.mute }) + F.text(520, 340, 'more precise →', { anchor: 'end', cls: 'tiny', color: C.mute });
        return F.svg(760, 355, s, { label: 'quantization bit depth vs size' });
      },
      cap_en: 'Quantization rounds every weight onto a coarser ruler. At 4 bits a weight can land on only 16 positions instead of thousands — the file is a third of the size, and each number is a little off.',
      cap_zh: '量化把每个权重放到一把更粗的“尺子”上。4 位时，一个权重只能落在 16 个刻度之一，而不是成千上万个——文件只有原来的三分之一，但每个数字都稍微偏了一点。',
      a_en: `A model is billions of numbers (weights). Normally each is stored as a 16-bit float. [[c7_quant]] stores each weight with **fewer bits** — 8 or about 4 — by rounding it onto a coarser scale (with a shared scale factor per block). In Ollama this is the tag on the file: [[c7_gguf]] is Ollama’s default.

For Llama 3.2 3B: about **6.4 GB** at FP16 → **3.4 GB** at 8-bit → **2.0 GB** at Q4_K_M.

**What you gain:**
- A much smaller download and file — it **fits in your laptop’s memory** at all.
- **Faster** responses and less energy per token.
- The ability to run models **locally** — privacy and control (see 7.1).

**What you lose:**
- **Precision.** Every weight is slightly wrong; small errors add up.
- Some **quality**: more mistakes in reasoning, math, rare languages, long contexts and following detailed instructions. Q8 is nearly lossless, Q4 is a good compromise, Q2–Q3 degrade badly.

Note the other kind of “smaller version”: fewer [[c7_params]] (3B vs. 70B). That loses **knowledge and capability**, not just precision — a bigger change than quantization.`,
      a_zh: `模型是数十亿个数字（权重）。通常每个数字用 16 位浮点存储。[[c7_quant]]就是用**更少的位数**——8 位或约 4 位——来存每个权重：把它四舍五入到一把更粗的刻度上（每一小块权重共享一个缩放系数）。在 Ollama 里这就是文件上的标签：[[c7_gguf]]是 Ollama 的默认值。

以 Llama 3.2 3B 为例：FP16 约 **6.4 GB** → 8 位 **3.4 GB** → Q4_K_M **2.0 GB**。

**得到的：**
- 下载和文件都小得多——它才**装得进笔记本的内存**。
- 回答**更快**，每个 token 耗能更少。
- 能在**本地**运行模型——隐私与控制权（见 7.1）。

**失去的：**
- **精度。**每个权重都有一点点偏差，小误差会累积。
- 一部分**质量**：在推理、数学、小语种、长上下文和遵循复杂指令上更容易出错。Q8 几乎无损，Q4 是不错的折中，Q2–Q3 会明显变差。

还要注意另一种“更小版本”：更少的[[c7_params]]（3B vs. 70B）。那丢掉的是**知识和能力**，而不只是精度——比量化的影响更大。`,
      hook_en: 'Same model, coarser ruler: ⅓ the size and much faster, a little dumber.',
      hook_zh: '同一个模型，换一把更粗的尺子：体积约三分之一、快得多，只是笨了一点。',
      trap_en: 'Define it as fewer bits PER WEIGHT (not fewer weights), then give both gains and losses. Bonus: distinguish quantization from a smaller parameter count.',
      trap_zh: '要定义为“每个权重用更少的位数”（不是“更少的权重”），然后同时写出得与失。加分项：区分量化和参数量变小。'
    },
    {
      id: '7.4', t_en: 'Model card / dataset card', t_zh: '模型卡 / 数据集卡',
      q_en: 'What is each one supposed to disclose?',
      q_zh: '这两种文档各自应该披露什么？',
      src: 'Mitchell et al., Model Cards; Gebru et al., Datasheets for Datasets',
      kid_en: "Think of a new board game. Inside the box there’s a rule sheet that tells you what age it’s for, how to play, what it’s *not* meant for, and known problems (“the spinner sometimes sticks”). That is a **model card**: the instruction sheet and honest report card for an AI model. Now think of the snack you eat while playing: the package lists every ingredient, where it came from and warnings like “may contain nuts.” That is a **dataset card**: the ingredient label for the data the model learned from.",
      kid_zh: "想象一款新的桌游。盒子里有一张说明书：适合几岁、怎么玩、*不*适合拿来干什么，还有已知的问题（“转盘有时会卡住”）。这就是**模型卡**：AI 模型的说明书和一份诚实的“成绩单”。再想想你边玩边吃的零食：包装上写着所有配料、产地，还有“可能含有坚果”这样的提醒。这就是**数据集卡**：模型所学数据的“配料表”。",
      steps: [
        {"en": "Left: the **model card** — the instruction sheet that comes with a model.", "zh": "左边：**模型卡**——随模型一起发布的说明书。", "hi": ["c7_model_card"]},
        {"en": "It says what the model is **for** and what it is **not for**, how well it did on tests, and where it fails or is biased.", "zh": "它写明模型**用来做什么**、**不该用来做什么**、测试成绩如何，以及在哪里会出错或有偏见。", "hi": ["c74-m1", "c74-m3", "c74-m4"]},
        {"en": "Right: the **dataset card** — the ingredient label for the data.", "zh": "右边：**数据集卡**——数据的“配料表”。", "hi": ["c7_dataset_card"]},
        {"en": "It says why the data was collected and who paid, what’s inside (any personal info?), and how it was gathered — did people agree?", "zh": "它写明为什么收集这些数据、谁出的钱、里面有什么（有没有个人信息？），以及怎么收集的——人们同意了吗？", "hi": ["c74-d0", "c74-d1", "c74-d2"]},
        {"en": "Follow the arrow: the model card’s “training data” line should point to a dataset card. That link is how you trace a model back to what it learned from.", "zh": "顺着箭头看：模型卡里“训练数据”那一行，应该指向一份数据集卡。这条链接就是你把模型追溯回它学习材料的路径。", "hi": ["c74-m2", "c74-trace"]}
      ],
      short_en: 'A **model card** (Mitchell et al., 2019) discloses the **model**: who made it and its license, **intended and out-of-scope uses**, its training data, **evaluation results broken down across groups**, and **limitations, biases and ethical considerations**. A **dataset card / datasheet** (Gebru et al.) discloses the **data**: **motivation** (why, by whom, funded by whom), **composition** (what’s in it, any personal data), **collection process** and consent, preprocessing, recommended uses, distribution and maintenance.',
      short_zh: '**模型卡**（Mitchell 等人，2019）披露的是**模型**：谁做的、许可证、**预期用途与不适用场景**、训练数据、**按人群分组的评估结果**，以及**局限、偏见和伦理考量**。**数据集卡 / 数据表**（Gebru 等人）披露的是**数据**：**动机**（为什么做、谁做的、谁出资）、**组成**（里面有什么、是否含个人信息）、**采集过程**与是否同意、预处理、推荐用途、分发与维护。',
      basis_en: 'Checked against Mitchell et al., “Model Cards for Model Reporting” (sections: model details, intended use, factors, metrics, evaluation data, training data, quantitative analyses, ethical considerations, caveats & recommendations) and Gebru et al., “Datasheets for Datasets” (motivation, composition, collection process, preprocessing/cleaning/labeling, uses, distribution, maintenance).',
      basis_zh: '已对照 Mitchell 等人《Model Cards for Model Reporting》（模型细节、预期用途、影响因素、指标、评估数据、训练数据、定量分析、伦理考量、注意事项与建议）和 Gebru 等人《Datasheets for Datasets》（动机、组成、采集过程、预处理/清洗/标注、用途、分发、维护）核对。',
      links: [{ t: 'Mitchell et al. — Model Cards for Model Reporting', u: 'https://arxiv.org/abs/1810.03993' }, { t: 'Gebru et al. — Datasheets for Datasets', u: 'https://arxiv.org/abs/1803.09010' }, { t: 'Hugging Face — dataset cards & viewer', u: 'https://huggingface.co/docs/hub/datasets-cards' }],
      rel: ['7.5', '7.2'],
      fig() {
        const C = F.C; let s = '';
        const card = (x, title, zh, col, fill, tip, rows, idp) => {
          let g = `<rect x="${x + 6}" y="26" width="300" height="320" rx="8" fill="#f3f2ee" stroke="${C.ink}" stroke-width="1"/>` +
            `<rect x="${x}" y="20" width="300" height="320" rx="8" fill="#fff" stroke="${C.ink}" stroke-width="1.15"/>` +
            `<rect x="${x}" y="20" width="300" height="44" rx="8" fill="${fill}" stroke="${col}"/>` +
            F.text(x + 16, 38, title, { anchor: 'start', cls: 'lt', color: col }) + F.sub(x + 16, 55, zh);
          s += F.g(g, { tip });
          rows.forEach(([t, z, n], i) => {
            const y = 72 + i * 41;
            s += `<g id="${idp}${i}">` + F.g(F.rect(x + 12, y, 276, 35, { rx: 3 }) + F.text(x + 24, y + 11, t, { anchor: 'start', cls: 'tiny' }) + F.sub(x + 24, y + 29, z, { anchor: 'start' }),
              { note: n }) + '</g>';
          });
        };
        card(30, 'MODEL CARD', '模型卡 · Mitchell 等人 2019', C.mag, C.magF, 'c7_model_card', [
          ['MODEL DETAILS · LICENSE', '谁做的 版本 类型 许可证', { en: 'Developer, version, architecture, date, license, contact.', zh: '开发者、版本、架构、日期、许可证、联系方式。' }],
          ['INTENDED USE', '预期用途与不适用场景', { en: 'What it is for — and explicitly what it is NOT for.', zh: '它是做什么用的——以及明确不该用来做什么。' }],
          ['TRAINING DATA', '训练数据 → 指向数据集卡', { en: 'What it learned from: the link back to the dataset card.', zh: '它从什么学来的：通往数据集卡的链接。' }],
          ['EVALUATION · METRICS', '评估：在哪些测试上 多好', { en: 'Benchmarks and metrics, ideally broken down across groups (disaggregated).', zh: '测试基准和指标，最好按人群分组报告（分组评估）。' }],
          ['LIMITATIONS · BIAS', '局限与偏见', { en: 'Known failure modes and biases.', zh: '已知的失败情况与偏见。' }],
          ['ETHICAL CONSIDERATIONS', '伦理考量与建议', { en: 'Risks, sensitive uses, recommendations.', zh: '风险、敏感用途、使用建议。' }],
          ['', '', null]
        ].slice(0, 6), 'c74-m');
        card(430, 'DATASET CARD', '数据集卡 · Gebru 等人 “数据表”', C.blue, C.blueF, 'c7_dataset_card', [
          ['MOTIVATION', '为什么做 谁出资', { en: 'Why was the dataset created, by whom, funded by whom?', zh: '为什么创建、由谁创建、谁出资？' }],
          ['COMPOSITION', '里面有什么 含个人信息吗', { en: 'What the instances are, how many, what is missing, any personal or sensitive data.', zh: '每条数据是什么、有多少、缺了什么、是否有个人或敏感信息。' }],
          ['COLLECTION PROCESS', '怎么采集的 是否同意', { en: 'How it was gathered (crawl, scrape, labeling), over what time, with whose consent.', zh: '如何采集（爬取、抓取、标注）、时间范围、是否经过同意。' }],
          ['PREPROCESSING', '清洗 过滤 标注', { en: 'Cleaning, filtering, deduplication, labeling — what was removed and why.', zh: '清洗、过滤、去重、标注——删掉了什么、为什么。' }],
          ['USES', '适合与不适合的用途', { en: 'What it has been / should / should not be used for.', zh: '已用于、适合用于、不应用于什么。' }],
          ['DISTRIBUTION · MAINTENANCE', '许可证 维护与更新', { en: 'License, how it is shared, who maintains and updates it.', zh: '许可证、如何分发、由谁维护和更新。' }]
        ], 'c74-d');
        s += '<g id="c74-trace">' + F.path('M318,163 C370,163 380,42 428,42', { stroke: C.mag, arrow: true, dash: '4 3' }) +
          F.text(375, 110, 'trace', { cls: 'tiny', color: C.mag }) + '</g>';
        return F.svg(760, 355, s, { label: 'model card vs dataset card' });
      },
      cap_en: 'Two documents that are meant to travel with the artifact. The model card’s “training data” section should point to a dataset card — that link is how you walk a model back to its data.',
      cap_zh: '两份本应随作品一起发布的文档。模型卡里的“训练数据”一节应当指向一份数据集卡——这条链接就是你把模型追溯回数据的路径。',
      a_en: `Both are **disclosure documents** that should travel with the thing they describe, so people can judge whether to trust and how to use it.

A **[[c7_model_card]]** (Mitchell et al., 2019) discloses the **model**:
- who built it, version, architecture, date and **license**;
- **intended uses** and out-of-scope uses;
- the **training data** it learned from;
- **evaluation**: benchmarks and metrics, ideally broken down across demographic groups;
- **limitations, biases**, ethical considerations and recommendations.

A **[[c7_dataset_card]]** (Gebru et al., “Datasheets for Datasets”) discloses the **data**:
- **motivation** — why it was made, by whom, who paid;
- **composition** — what is in it, what is missing, any personal or sensitive information;
- **collection process** — how it was gathered, when, with whose consent;
- **preprocessing** — cleaning, filtering, labeling;
- **uses, distribution (license) and maintenance**.

In class we read real cards on Hugging Face. What a card leaves out — “trained on publicly available data” and nothing more — is itself information.`,
      a_zh: `两者都是**披露文档**，应当随所描述的对象一起发布，让人们判断能否信任、该怎么使用。

**[[c7_model_card]]**（Mitchell 等人，2019）披露的是**模型**：
- 谁做的、版本、架构、日期和**许可证**；
- **预期用途**和不适用的用途；
- 它学习所用的**训练数据**；
- **评估**：测试基准与指标，最好按不同人群分组报告；
- **局限、偏见**、伦理考量与使用建议。

**[[c7_dataset_card]]**（Gebru 等人《Datasheets for Datasets》）披露的是**数据**：
- **动机**——为什么做、谁做的、谁出资；
- **组成**——里面有什么、缺了什么、是否含个人或敏感信息；
- **采集过程**——怎么收集、什么时候、是否经过同意；
- **预处理**——清洗、过滤、标注；
- **用途、分发（许可证）与维护**。

课上我们在 Hugging Face 上读过真实的卡片。一张卡片“没写什么”——比如只写一句“使用公开可得的数据训练”——本身就是信息。`,
      hook_en: 'Model card = what it is for, how well it works, for whom it fails. Dataset card = where the data came from, what’s in it, how it was collected.',
      hook_zh: '模型卡 = 用来干什么、效果如何、对谁会失效；数据集卡 = 数据从哪来、里面有什么、怎么采集的。',
      trap_en: 'Keep them separate: the model card is about the model’s use and performance; the dataset card is about origin, composition and collection. Name the authors (Mitchell; Gebru).',
      trap_zh: '两者要分开写：模型卡讲模型的用途和表现；数据集卡讲数据的来源、组成和采集。最好写出作者（Mitchell；Gebru）。'
    },
    {
      id: '7.5', t_en: 'Training corpus', t_zh: '训练语料',
      q_en: 'Common Crawl, C4, FineWeb, Dolma: how do these relate, and how do you trace a model back to its data?',
      q_zh: 'Common Crawl、C4、FineWeb、Dolma 之间是什么关系？你如何把一个模型追溯回它的数据？',
      src: 'Class 7; WaPo C4 search; Have I Been Trained',
      kid_en: "Imagine someone photocopied almost every page on the Internet and dumped them into one gigantic warehouse — ads, spam, recipes, homework, everything. That warehouse is **Common Crawl**. Nobody wants to learn from the whole messy pile, so different teams sort through it: one keeps only clean English pages (**C4**), one keeps the best educational-looking pages (**FineWeb**), one mixes web pages with books, code and science papers (**Dolma**). Models are trained on these sorted boxes. To find out what a model read, you follow the labels back: model card → dataset card → open the box and search inside.",
      kid_zh: "想象有人把互联网上几乎每一页都复印下来，全堆进一个巨大的仓库——广告、垃圾信息、菜谱、作业，什么都有。这个仓库就是 **Common Crawl**。没人想从这一大堆乱七八糟的东西里学习，所以不同的团队去挑拣：有的只留下干净的英文网页（**C4**），有的留下最像“好教材”的网页（**FineWeb**），有的把网页和书、代码、科学论文混在一起（**Dolma**）。模型就是用这些挑好的箱子训练出来的。想知道一个模型读过什么，就顺着标签往回找：模型卡 → 数据集卡 → 打开箱子在里面搜索。",
      steps: [
        {"en": "Start at the bottom: **Common Crawl**, the giant warehouse of photocopied web pages, collected since 2008.", "zh": "从最下面开始：**Common Crawl**，一个装满网页“复印件”的巨型仓库，从 2008 年开始收集。", "hi": ["c7_cc"]},
        {"en": "**C4** (Google): one snapshot, cleaned up — English only, junk and bad words filtered out. It trained T5.", "zh": "**C4**（谷歌）：取一份快照清洗干净——只留英文，过滤掉垃圾和不雅词。用来训练 T5。", "hi": ["c7_c4"]},
        {"en": "**FineWeb** (Hugging Face): a much bigger, carefully filtered and de-duplicated cut — about 15 trillion tokens.", "zh": "**FineWeb**（Hugging Face）：规模大得多、经过仔细过滤和去重的一份——约 15 万亿个 token。", "hi": ["c7_fineweb"]},
        {"en": "**Dolma** (Ai2): web pages mixed with code, papers, books and Wikipedia — all public, so OLMo’s data can be checked.", "zh": "**Dolma**（Ai2）：网页加上代码、论文、书和维基百科——全部公开，所以 OLMo 的数据可以被检查。", "hi": ["c7_dolma"]},
        {"en": "Now walk backwards along the bottom row: model card → dataset card → dataset viewer → search tools like the C4 search or Have I Been Trained.", "zh": "现在沿着最下面一行往回走：模型卡 → 数据集卡 → 数据集查看器 → 搜索工具，比如 C4 搜索或 Have I Been Trained。", "hi": ["c7_model_card", "c7_dataset_card", "c7_hibt"]}
      ],
      short_en: '**Common Crawl** is the **raw web scrape** (monthly snapshots since 2008). **C4, FineWeb and Dolma are filtered, deduplicated cuts of it**: C4 (Google, built to train T5), FineWeb (Hugging Face, ~15 trillion tokens from 96 snapshots), Dolma (Ai2, Common Crawl mixed with code, papers, books and Wikipedia, for OLMo). To **trace a model back**: model card → its training-data section → the **dataset card** → the dataset viewer → search the corpus itself (Washington Post C4 search, Have I Been Trained).',
      short_zh: '**Common Crawl** 是**原始网页抓取**（2008 年起每月快照）。**C4、FineWeb、Dolma 都是从它过滤、去重切出来的**：C4（谷歌，为训练 T5）、FineWeb（Hugging Face，来自 96 份快照、约 15 万亿 token）、Dolma（Ai2，Common Crawl 再混入代码、论文、书和维基百科，用于 OLMo）。**追溯模型**：模型卡 → “训练数据”一节 → **数据集卡** → 数据集查看器 → 直接搜索语料（《华盛顿邮报》C4 搜索、Have I Been Trained）。',
      basis_en: 'Checked: FineWeb paper (15T tokens from 96 Common Crawl snapshots); Dolma README (v1.6 sources: Common Crawl, The Stack, C4, Reddit, peS2o, Project Gutenberg, Wikipedia/Wikibooks; ODC-BY license). C4 is T5’s cleaned Common Crawl (Raffel et al.). Note: OLMo 2 itself was trained on Dolma’s successors, OLMo-Mix-1124 and Dolmino-Mix-1124.',
      basis_zh: '已核对：FineWeb 论文（来自 96 份 Common Crawl 快照，15 万亿 token）；Dolma 说明文档（v1.6 来源：Common Crawl、The Stack、C4、Reddit、peS2o、古登堡计划、维基百科/维基教科书；ODC-BY 许可）。C4 是 T5 使用的清洗版 Common Crawl（Raffel 等人）。注意：OLMo 2 本身用的是 Dolma 的后继版本 OLMo-Mix-1124 和 Dolmino-Mix-1124。',
      links: [{ t: 'FineWeb dataset (Hugging Face)', u: 'https://huggingface.co/datasets/HuggingFaceFW/fineweb' }, { t: 'Dolma dataset (Ai2)', u: 'https://huggingface.co/datasets/allenai/dolma' }, { t: 'Washington Post — the websites inside C4', u: 'https://www.washingtonpost.com/technology/interactive/2023/ai-chatbot-learning/' }],
      rel: ['7.4', '2.5', '1.1'],
      fig() {
        const C = F.C; let s = '';
        const tile = (cx, cy, S, o) => { F.setIso(S, cx, cy); return F.plate({ x: -(o.w || 2) / 2, y: -(o.d || 2) / 2, ...o }); };
        // Common Crawl base
        s += F.g(tile(330, 292, 15, { w: 5.5, d: 5.5, t: 0.4, pattern: 'dots', density: 9 }) + F.text(420, 288, 'COMMON CRAWL', { anchor: 'start', cls: 'lt' }) + F.sub(420, 305, '原始网页快照 · 2008 至今 · PB 级'), { tip: 'c7_cc' });
        // derivatives
        const der = [
          { cx: 110, k: 'c7_c4', t: 'C4 · GOOGLE 2019', z: '清洗版 → 训练 T5', col: C.blue, f: C.blueF, m: 'T5' },
          { cx: 330, k: 'c7_fineweb', t: 'FINEWEB · HF 2024', z: '约 15 万亿 token', col: C.green, f: C.greenF, m: 'SMOLLM …' },
          { cx: 560, k: 'c7_dolma', t: 'DOLMA · AI2', z: '网页+代码+论文+书', col: C.mag, f: C.magF, m: 'OLMO 2' }
        ];
        der.forEach(d => {
          s += F.path(`M330,${250} Q${d.cx},${215} ${d.cx},${190}`, { stroke: d.col, arrow: true, dash: '4 3' });
          s += F.g(tile(d.cx, 165, 14, { w: 2.6, d: 2.6, t: 0.35, fill: d.f, side: d.f, pattern: 'hatch', pc: d.col, density: 4 }) +
            F.text(d.cx + 44, 162, d.t, { anchor: 'start', cls: 'tiny', color: d.col }) + F.sub(d.cx + 44, 178, d.z), { tip: d.k });
          s += F.arrow(d.cx, 132, d.cx, 92, { stroke: d.col });
          s += F.g(tile(d.cx, 72, 13, { w: 1.6, d: 1.6, t: 0.3, pattern: 'chips', density: 4 }) + F.text(d.cx + 34, 74, d.m, { anchor: 'start', cls: 'tiny' }) + F.sub(d.cx + 34, 90, '模型'), { note: { en: 'A model trained (mostly) on this corpus.', zh: '（主要）用这份语料训练的模型。' } });
        });
        s += F.text(20, 24, 'FILTER · DEDUPLICATE · MIX', { anchor: 'start', cls: 'tiny', color: C.mute }) + F.sub(20, 40, '过滤 · 去重 · 混合', { anchor: 'start' });
        // trace strip
        s += F.line(20, 340, 740, 340, { dash: '2 3', stroke: C.mute, sw: 0.6 });
        s += F.text(20, 362, 'TRACE BACK · 追溯', { anchor: 'start', cls: 'tiny', color: C.mag });
        const steps = [['MODEL CARD', 'c7_model_card'], ['DATASET CARD', 'c7_dataset_card'], ['DATASET VIEWER', 'c7_fineweb'], ['C4 SEARCH (WaPo)', 'c7_c4'], ['HAVE I BEEN TRAINED', 'c7_hibt']];
        steps.forEach(([t, k], i) => {
          const x = 20 + i * 148;
          s += F.rect(x, 372, 128, 32, { text: t, tcls: 'tiny', stroke: C.mag, tip: k });
          if (i < steps.length - 1) s += F.arrow(x + 129, 388, x + 146, 388, { stroke: C.mag });
        });
        return F.svg(760, 415, s, { label: 'training corpus lineage and how to trace it' });
      },
      cap_en: 'Common Crawl is the quarry; C4, FineWeb and Dolma are different cuts of it — filtered, deduplicated, and (for Dolma) mixed with other sources. The bottom row is the path you walk back from a model to the pages it read.',
      cap_zh: 'Common Crawl 是“采石场”；C4、FineWeb 和 Dolma 是从中切出的不同“石料”——经过过滤、去重，Dolma 还混入了其他来源。最下面一行是你从模型走回它读过的网页的路径。',
      a_en: `**How they relate — one quarry, several cuts:**
- **[[c7_cc]]** is the raw source: a nonprofit crawl of the public web since 2008, released as huge monthly snapshots of raw pages. Almost nobody trains on it directly — it is full of spam, boilerplate and duplicates.
- **[[c7_c4]]** (Google, 2019) is a **cleaned subset** of one Common Crawl snapshot (English only, blocklist filtering, dedup), built to train T5.
- **[[c7_fineweb]]** (Hugging Face, 2024) is a newer, much larger **filtered and deduplicated** derivative of 96 Common Crawl snapshots (~15 trillion tokens), with its pipeline documented.
- **[[c7_dolma]]** (Ai2) is an open **mixed corpus** for OLMo: Common Crawl web text plus code, Reddit, papers, books and Wikipedia.

So C4, FineWeb and Dolma are all *refinements of Common Crawl*; each filtering choice decides whose words a model learns from (and whose are thrown out).

**How to trace a model back to its data:** start at the [[c7_model_card]] → follow its training-data section to the [[c7_dataset_card]] → open the Hugging Face **dataset viewer** to browse actual rows → search the corpus: the Washington Post’s **C4 search** shows whether a website is inside C4; [[c7_hibt]] searches LAION-5B for images. For open-source models (OLMo + Dolma) the trail goes all the way down; for open-weight models it usually stops at “publicly available data” — and that gap is a finding in itself.`,
      a_zh: `**它们的关系——一座采石场，几种切法：**
- **[[c7_cc]]**是原始来源：一个非营利组织自 2008 年起抓取公共网页，按月发布巨大的原始网页快照。几乎没人直接用它训练——里面充满垃圾内容、模板文字和重复页面。
- **[[c7_c4]]**（谷歌，2019）是某一份 Common Crawl 快照的**清洗子集**（仅英文、黑名单过滤、去重），用来训练 T5。
- **[[c7_fineweb]]**（Hugging Face，2024）是更新、更大的**过滤与去重**版本，来自 96 份 Common Crawl 快照（约 15 万亿 token），处理流程有公开记录。
- **[[c7_dolma]]**（Ai2）是为 OLMo 打造的开放**混合语料**：Common Crawl 网页文本，再加上代码、Reddit、论文、书籍和维基百科。

所以 C4、FineWeb 和 Dolma 都是 *Common Crawl 的精炼版*；每一次过滤选择，都决定了模型学习谁的文字（又丢掉了谁的）。

**怎样把模型追溯回数据：**从[[c7_model_card]]开始 → 顺着“训练数据”一节找到[[c7_dataset_card]] → 打开 Hugging Face 的**数据集查看器**浏览真实的数据行 → 搜索语料：《华盛顿邮报》的 **C4 搜索**能查某个网站是否在 C4 里；[[c7_hibt]]可以在 LAION-5B 里搜图片。对开源模型（OLMo + Dolma），这条线索能一直追到底；对开放权重模型，通常止步于一句“公开可得的数据”——这个断点本身就是一个发现。`,
      hook_en: 'Common Crawl = raw quarry. C4 / FineWeb / Dolma = cleaned cuts. Trace: model card → dataset card → viewer → search.',
      hook_zh: 'Common Crawl = 原始采石场；C4 / FineWeb / Dolma = 清洗后的石料。追溯：模型卡 → 数据集卡 → 查看器 → 搜索。',
      trap_en: 'Don’t list them as four unrelated datasets — say the three are filtered derivatives of Common Crawl. And give the trace as concrete steps, not just “look it up.”',
      trap_zh: '别把它们写成四个互不相关的数据集——要说明后三个都是 Common Crawl 的过滤衍生品。追溯要写成具体步骤，而不是一句“查一下”。'
    }
  ]
});
