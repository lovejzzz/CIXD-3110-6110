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
    d_en: 'Everything needed to study and rebuild the model is released — weights, training data, code, recipe and logs — under an OSI-approved license. Example: Ai2’s OLMo 2 (Apache 2.0, Dolma data).',
    d_zh: '研究和重建模型所需的一切都公开——权重、训练数据、代码、配方和日志——并采用 OSI 认可的许可证。例子：Ai2 的 OLMo 2（Apache 2.0，Dolma 数据）。' },
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
      id: '7.1', t_en: 'Local vs. hosted', t_zh: '本地 vs. 云端',
      q_en: 'When the same prompt goes to a hosted model and to a model on your laptop, what changes about where it goes, what you can see, and what you can change?',
      q_zh: '同一个提示词分别发给云端托管模型和你笔记本上的模型时，它“去了哪里”、你“能看到什么”、你“能改变什么”有什么不同？',
      src: 'Class 7: Local vs. Hosted; Ollama',
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
        s += F.text(626, 66, 'SEE: output only', { anchor: 'start', cls: 'tiny', color: C.red }) + F.sub(626, 82, '只看到回答') +
          F.text(626, 108, 'CHANGE: their options', { anchor: 'start', cls: 'tiny', color: C.red }) + F.sub(626, 124, '只能改界面给的选项');
        s += F.line(20, 178, 740, 178, { dash: '3 4', stroke: C.mute, sw: 0.8 });
        // local lane
        s += F.text(20, 210, 'LOCAL', { cls: 'big', anchor: 'start', color: C.green }) + F.sub(80, 210, '本地：一切都留在这台电脑里');
        s += `<rect x="20" y="222" width="600" height="128" rx="10" fill="none" stroke="${C.green}" stroke-dasharray="5 4"/>`;
        s += F.g(tile(70, 290, 20, { w: 2.2, d: 1.6, t: 0.15, pattern: 'grid', density: 4 }) + F.text(70, 333, 'YOU', { cls: 'tiny' }), { tip: 'c7_local' });
        s += F.g(F.arrow(115, 290, 245, 290, { stroke: C.green }) + F.text(180, 280, 'localhost:11434', { cls: 'tiny', color: C.green }), { note: { en: 'The request goes to your own machine — works with Wi-Fi off.', zh: '请求发往你自己的电脑——断网也能用。' } });
        s += F.g(tile(310, 290, 18, { w: 2.6, d: 2.6, t: 0.5, fill: C.greenF, side: '#d3eadb', pattern: 'dots', density: 5 }) + F.text(310, 343, 'OLLAMA + .GGUF', { cls: 'tiny' }), { tip: 'c7_ollama' });
        const vis = [['llama3.2:3b · 2.0 GB', 'c7_weights'], ['SYSTEM prompt · Modelfile', 'c7_modelfile_hint'], ['temperature · num_ctx', 'c7_modelfile_hint'], ['LICENSE · model card', 'c7_license']];
        vis.forEach(([t, k], i) => s += F.rect(400, 236 + i * 26, 210, 22, { text: t, tcls: 'tiny', fill: '#fff', stroke: C.green, tip: k }));
        s += F.text(626, 262, 'SEE: the file, the', { anchor: 'start', cls: 'tiny', color: C.green }) + F.text(626, 276, 'prompt, the params', { anchor: 'start', cls: 'tiny', color: C.green }) + F.sub(626, 292, '看得到全部') +
          F.text(626, 318, 'CHANGE: all of it', { anchor: 'start', cls: 'tiny', color: C.green }) + F.sub(626, 334, '全都能改');
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
          s += F.g(g, { note });
        });
        const y = 266;
        s += F.g(F.text(380, y + 15, 'LICENSE', { cls: 'lt' }) + F.sub(380, y + 31, '许可证', { anchor: 'middle' }) +
          F.rect(60, y, 240, 36, { text: 'custom · use limits', fill: '#fff', stroke: C.amber, tcls: 'tiny' }) +
          F.rect(460, y, 240, 36, { text: 'OSI · Apache 2.0', fill: '#fff', stroke: C.green, tcls: 'tiny' }), { tip: 'c7_license' });
        s += F.line(20, 318, 740, 318, { dash: '2 3', stroke: C.mute, sw: 0.6 });
        s += F.text(180, 340, 'llama3.2:3b · qwen2.5:3b · deepseek-r1:8b', { cls: 'tiny' }) + F.text(580, 340, 'olmo2:7b  (Ai2 · Dolma data)', { cls: 'tiny' });
        s += F.sub(180, 357, '我们课上跑过的开放权重模型', { anchor: 'middle' }) + F.sub(580, 357, '我们课上跑过的真正开源模型', { anchor: 'middle' });
        return F.svg(760, 370, s, { label: 'open weights vs open source' });
      },
      cap_en: 'Both let you download and run the model. Only open source hands over the data and recipe — the parts you need to know where its behavior came from.',
      cap_zh: '两者都能让你下载并运行模型。只有开源会交出数据和配方——要想知道模型的行为从何而来，恰恰需要这些。',
      a_en: `**[[c7_open_weights]]**: the lab releases the trained **weights** so you can download, run and fine-tune the model — but not the **training data** or the full **training recipe**, and often under a custom [[c7_license]] with limits on use. You get the cake, not the recipe or the ingredients list.

**[[c7_open_source]]**: everything needed to **study, reproduce and modify** the model is released — weights, training data, training code, recipe and logs — under an OSI-approved license. You can trace a behavior back to the data that caused it.

From class (via Ollama):
- **Open weights:** \`llama3.2:3b\` — Meta, **Llama 3.2 Community License** (custom: acceptable-use policy, attribution, special terms above 700M monthly users). Also \`qwen2.5:3b\` (Alibaba, Qwen Research License for the 3B size) and \`deepseek-r1:8b\` (MIT-licensed distill, built on a Llama base).
- **Open source:** \`olmo2:7b\` — Ai2’s OLMo 2, **Apache 2.0**, with its training corpus ([[c7_dolma]]), code and checkpoints all public.

So “open” on a model card can mean very different things — check what is actually released.`,
      a_zh: `**[[c7_open_weights]]**：实验室公开训练好的**权重**，你可以下载、运行、微调——但不公开**训练数据**和完整的**训练配方**，而且常常附带有使用限制的自定义[[c7_license]]。你拿到的是蛋糕，不是配方，也没有配料表。

**[[c7_open_source]]**：**研究、复现和修改**模型所需的一切都公开——权重、训练数据、训练代码、配方和日志——并采用 OSI 认可的许可证。你可以把某个行为一路追溯到导致它的数据。

课上（通过 Ollama）跑过的例子：
- **开放权重：**\`llama3.2:3b\`——Meta，**Llama 3.2 社区许可证**（自定义条款：可接受使用政策、署名要求、月活超过 7 亿需另行授权）。还有 \`qwen2.5:3b\`（阿里巴巴，3B 版本采用 Qwen 研究许可证）和 \`deepseek-r1:8b\`（MIT 许可的蒸馏模型，底座是 Llama）。
- **开源：**\`olmo2:7b\`——Ai2 的 OLMo 2，**Apache 2.0**，训练语料（[[c7_dolma]]）、代码和检查点全部公开。

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
        s += F.text(390, 340, '← smaller · faster · fits in RAM          more precise →', { cls: 'tiny', color: C.mute });
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
      fig() {
        const C = F.C; let s = '';
        const card = (x, title, zh, col, fill, tip, rows) => {
          let g = `<rect x="${x + 6}" y="26" width="300" height="320" rx="8" fill="#f3f2ee" stroke="${C.ink}" stroke-width="1"/>` +
            `<rect x="${x}" y="20" width="300" height="320" rx="8" fill="#fff" stroke="${C.ink}" stroke-width="1.15"/>` +
            `<rect x="${x}" y="20" width="300" height="44" rx="8" fill="${fill}" stroke="${col}"/>` +
            F.text(x + 16, 38, title, { anchor: 'start', cls: 'lt', color: col }) + F.sub(x + 16, 55, zh);
          s += F.g(g, { tip });
          rows.forEach(([t, z, n], i) => {
            const y = 72 + i * 41;
            s += F.g(F.rect(x + 12, y, 276, 35, { rx: 3 }) + F.text(x + 24, y + 11, t, { anchor: 'start', cls: 'tiny' }) + F.sub(x + 24, y + 29, z, { anchor: 'start' }),
              { note: n });
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
        ].slice(0, 6));
        card(430, 'DATASET CARD', '数据集卡 · Gebru 等人 “数据表”', C.blue, C.blueF, 'c7_dataset_card', [
          ['MOTIVATION', '为什么做 谁出资', { en: 'Why was the dataset created, by whom, funded by whom?', zh: '为什么创建、由谁创建、谁出资？' }],
          ['COMPOSITION', '里面有什么 含个人信息吗', { en: 'What the instances are, how many, what is missing, any personal or sensitive data.', zh: '每条数据是什么、有多少、缺了什么、是否有个人或敏感信息。' }],
          ['COLLECTION PROCESS', '怎么采集的 是否同意', { en: 'How it was gathered (crawl, scrape, labeling), over what time, with whose consent.', zh: '如何采集（爬取、抓取、标注）、时间范围、是否经过同意。' }],
          ['PREPROCESSING', '清洗 过滤 标注', { en: 'Cleaning, filtering, deduplication, labeling — what was removed and why.', zh: '清洗、过滤、去重、标注——删掉了什么、为什么。' }],
          ['USES', '适合与不适合的用途', { en: 'What it has been / should / should not be used for.', zh: '已用于、适合用于、不应用于什么。' }],
          ['DISTRIBUTION · MAINTENANCE', '许可证 维护与更新', { en: 'License, how it is shared, who maintains and updates it.', zh: '许可证、如何分发、由谁维护和更新。' }]
        ]);
        s += F.path('M318,163 C370,163 380,42 428,42', { stroke: C.mag, arrow: true, dash: '4 3' });
        s += F.text(375, 110, 'trace', { cls: 'tiny', color: C.mag });
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
