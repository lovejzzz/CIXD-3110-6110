/* CLASS 8 · WEIGHTS AND DATA */
defTerms({
  c8_vm: { en: 'Variable Machine', zh: 'Variable Machine（课程应用）',
    d_en: 'The instructor’s Mac app for changing small language models three ways — with words (system prompt), with examples (fine-tuning) and with taste (preference pairs). Every click shows the real command it runs.',
    d_zh: '老师自己做的 Mac 应用，可以用三种方式改变小型语言模型——用“话”（系统提示）、用“例子”（微调）、用“品味”（偏好对）。每次点击都会显示它实际运行的命令。' },
  c8_weights: { en: 'Weights', zh: '权重',
    d_en: 'The billions of numbers learned in training. They ARE the model: a model file is mostly its weights.',
    d_zh: '训练中学到的数十亿个数字。它们就是模型本身：一个模型文件绝大部分就是权重。' },
  c8_modelfile: { en: 'Modelfile', zh: 'Modelfile（模型配置文件）',
    d_en: 'Ollama’s blueprint for a model: a short text file of instructions (FROM, ADAPTER, PARAMETER, TEMPLATE, SYSTEM, MESSAGE, LICENSE). `ollama create name -f Modelfile` builds it.',
    d_zh: 'Ollama 的模型“蓝图”：一个由若干指令（FROM、ADAPTER、PARAMETER、TEMPLATE、SYSTEM、MESSAGE、LICENSE）组成的短文本文件。用 `ollama create 名字 -f Modelfile` 构建。' },
  c8_from: { en: 'FROM', zh: 'FROM 指令',
    d_en: 'Required. Names the base model whose weights you start from (e.g. llama3.2:3b or a .gguf file). Change this line and you change the weights.',
    d_zh: '必填。指定作为起点的基础模型及其权重（如 llama3.2:3b 或一个 .gguf 文件）。改这一行就等于换了权重。' },
  c8_adapter_line: { en: 'ADAPTER', zh: 'ADAPTER 指令',
    d_en: 'Applies a fine-tuned LoRA adapter on top of the FROM weights. The only other line that changes the numbers the model computes with.',
    d_zh: '在 FROM 的权重之上加载一个微调好的 LoRA 适配器。除 FROM 外唯一会改变模型计算所用数字的指令。' },
  c8_parameter: { en: 'PARAMETER', zh: 'PARAMETER 指令',
    d_en: 'Sets how the model runs and samples: temperature, num_ctx (context length), seed, top_p, stop… Same weights, different dice.',
    d_zh: '设置模型如何运行和采样：temperature（温度）、num_ctx（上下文长度）、seed、top_p、stop 等。权重不变，只是“掷骰子”的方式变了。' },
  c8_temperature: { en: 'Temperature', zh: '温度',
    d_en: 'How adventurous sampling is. Low = picks the most likely next token; high = more varied, more surprising, more errors.',
    d_zh: '采样有多“冒险”。低温总挑最可能的下一个 token；高温更多样、更出人意料，也更容易出错。' },
  c8_system: { en: 'SYSTEM', zh: 'SYSTEM 指令',
    d_en: 'A system prompt baked into the model’s package. It is text placed in front of every conversation — words, not weights.',
    d_zh: '打包进模型的系统提示词。它是放在每段对话前面的文字——是“话”，不是权重。' },
  c8_template: { en: 'TEMPLATE / MESSAGE', zh: 'TEMPLATE / MESSAGE 指令',
    d_en: 'TEMPLATE is the wrapper that formats system, user and assistant turns into the exact text the model reads; MESSAGE adds example turns to the conversation history. Both shape input, not weights.',
    d_zh: 'TEMPLATE 是把系统、用户、助手各轮包装成模型实际读入文本的格式模板；MESSAGE 在对话历史里预置示例轮次。两者塑造的是输入，不是权重。' },
  c8_finetune: { en: 'Fine-tuning', zh: '微调',
    d_en: 'Continuing training on a small, specific dataset so the weights themselves shift toward new behavior.',
    d_zh: '用一个小而具体的数据集继续训练，让权重本身朝新的行为方向移动。' },
  c8_lora: { en: 'LoRA adapter', zh: 'LoRA 适配器',
    d_en: 'Low-Rank Adaptation: instead of rewriting a huge weight matrix W, train two thin matrices B and A whose product ΔW = B·A is added to the frozen W.',
    d_zh: '低秩适配：不去改写巨大的权重矩阵 W，而是训练两个“细长”的矩阵 B 和 A，它们的乘积 ΔW = B·A 被加到冻结的 W 上。' },
  c8_rank: { en: 'Rank (r)', zh: '秩 (r)',
    d_en: 'The “thinness” of the adapter matrices — often 8 or 16 against a dimension of thousands. Low rank is why the adapter is megabytes, not gigabytes.',
    d_zh: '适配器矩阵的“粗细”——通常是 8 或 16，而模型维度是几千。秩低，所以适配器只有几 MB 而不是几 GB。' },
  c8_frozen: { en: 'Frozen base', zh: '冻结的基础模型',
    d_en: 'During LoRA training the original weights are not touched. Only A and B learn.',
    d_zh: 'LoRA 训练时原始权重完全不动，只有 A 和 B 在学习。' },
  c8_overfit: { en: 'Overfitting', zh: '过拟合',
    d_en: 'The model memorizes the training examples instead of learning the pattern: loss on training data keeps falling, but performance on new text gets worse.',
    d_zh: '模型死记硬背训练样本而没有学到规律：训练数据上的损失一直下降，但在新文本上的表现变差。' },
  c8_loss: { en: 'Loss', zh: '损失（loss）',
    d_en: 'A number measuring how wrong the model’s next-token predictions are on the training data (cross-entropy). Lower = less surprised by the right answer.',
    d_zh: '衡量模型在训练数据上“下一个 token 预测”错得有多离谱的数字（交叉熵）。越低 = 对正确答案越不“意外”。' },
  c8_validation: { en: 'Validation loss', zh: '验证损失',
    d_en: 'Loss measured on held-out examples the model never trains on. If training loss falls while validation loss rises, the model is memorizing.',
    d_zh: '在模型从未训练过的留出样本上测得的损失。训练损失下降而验证损失上升，说明模型在死记硬背。' },
  c8_sft: { en: 'Supervised fine-tuning (SFT)', zh: '监督微调（SFT）',
    d_en: 'Training on examples: a prompt and the one response to imitate. The model learns “answer like this.”',
    d_zh: '用“例子”训练：一个提示和一个要模仿的回答。模型学到的是“照这样回答”。' },
  c8_pref: { en: 'Preference tuning', zh: '偏好调优',
    d_en: 'Training on comparisons: the same prompt with a chosen and a rejected answer. The model learns “this is better than that.” DPO and RLHF are the main methods.',
    d_zh: '用“比较”训练：同一个提示配一个被选中的回答和一个被拒绝的回答。模型学到的是“这个比那个好”。主要方法有 DPO 和 RLHF。' },
  c8_dpo: { en: 'DPO', zh: '直接偏好优化 DPO',
    d_en: 'Direct Preference Optimization: pushes up the probability of the chosen answer and down the rejected one, directly from pairs — no separate reward model needed (unlike RLHF).',
    d_zh: '直接偏好优化：直接根据成对数据，提高“被选中”回答的概率、降低“被拒绝”回答的概率——不像 RLHF 那样需要单独的奖励模型。' },
  c8_pair: { en: 'Chosen / rejected pair', zh: '选中 / 拒绝 对',
    d_en: 'One row of preference data: {prompt, chosen, rejected}. The data is a human judgment — a record of taste.',
    d_zh: '偏好数据中的一行：{提示, 选中, 拒绝}。这些数据是人的判断——是对“品味”的记录。' },
  c8_merge: { en: 'Merge / blend', zh: '合并 / 混合',
    d_en: 'Combining two adapters (or models) by arithmetic on their weights. Linear blend: W = (1 − t)·A + t·B.',
    d_zh: '通过对权重做算术来合并两个适配器（或模型）。线性混合：W = (1 − t)·A + t·B。' },
  c8_t: { en: 't (blend ratio)', zh: 't（混合比例）',
    d_en: 't = 0 is pure adapter A, t = 1 is pure B, t = 0.5 is the exact numerical midpoint of every weight.',
    d_zh: 't = 0 完全是适配器 A，t = 1 完全是 B，t = 0.5 是每一个权重在数值上的正中点。' }
});

defClass({
  order: 8, n: '8',
  t_en: 'Weights and Data', t_zh: '权重与数据',
  intro_en: 'A model is a file, and the file is its data. In Variable Machine we changed small models three ways — with words, with examples, and with taste — and watched which changes reach the weights and which only wrap them.',
  intro_zh: '模型就是一个文件，而文件就是它的数据。我们在 Variable Machine 里用三种方式改变小模型——用“话”、用“例子”、用“品味”——并观察哪些改动真正触及权重，哪些只是包在外面。',
  qs: [
    {
      id: '8.1', t_en: 'Modelfile', t_zh: 'Modelfile',
      q_en: 'What is a Modelfile, and which of its lines change the weights and which do not?',
      q_zh: '什么是 Modelfile？其中哪些行会改变权重，哪些不会？',
      src: 'Ollama, Modelfile reference',
      fig() {
        let s = '';
        const rows = [
          { k: 'FROM llama3.2:3b', w: true, tip: 'c8_from' },
          { k: 'ADAPTER ./poems-lora.gguf', w: true, tip: 'c8_adapter_line' },
          { k: 'PARAMETER temperature 0.7', w: false, tip: 'c8_parameter' },
          { k: 'PARAMETER num_ctx 4096', w: false, tip: 'c8_parameter' },
          { k: 'TEMPLATE """{{ .Prompt }}…"""', w: false, tip: 'c8_template' },
          { k: 'SYSTEM """You are a poet."""', w: false, tip: 'c8_system' },
          { k: 'MESSAGE user Write a haiku', w: false, tip: 'c8_template' }
        ];
        s += F.text(24, 30, 'MODELFILE', { anchor: 'start', cls: 'tiny', color: F.C.mute });
        s += `<rect x="18" y="42" width="372" height="${rows.length * 36 + 18}" rx="8" fill="#1b1b1a"/>`;
        rows.forEach((r, i) => {
          const y = 52 + i * 36;
          const col = r.w ? F.C.mag : F.C.blue;
          s += F.g(`<rect x="28" y="${y}" width="352" height="28" rx="4" fill="${r.w ? 'rgba(176,24,110,.28)' : 'rgba(79,116,217,.18)'}"/>` +
            `<text x="40" y="${y + 18}" style="font:500 12px var(--mono)" fill="#f3f2ee">${r.k.replace(/</g, '&lt;')}</text>` +
            `<circle cx="368" cy="${y + 14}" r="4" fill="${col}"/>`, { tip: r.tip });
        });
        const by = 52 + rows.length * 36 + 30;
        s += `<circle cx="30" cy="${by}" r="4" fill="${F.C.mag}"/>` + F.text(42, by + 4, 'CHANGES THE WEIGHTS', { anchor: 'start', cls: 'tiny', color: F.C.mag }) + F.sub(200, by + 4, '改变权重');
        s += `<circle cx="30" cy="${by + 20}" r="4" fill="${F.C.blue}"/>` + F.text(42, by + 24, 'SAME WEIGHTS, NEW BEHAVIOR', { anchor: 'start', cls: 'tiny', color: F.C.blue }) + F.sub(250, by + 24, '权重不变，行为改变');
        const L = [
          { label: 'System · template', sub: '提示的外包装', tip: 'c8_system', pattern: 'hatch', density: 4, fill: F.C.blueF, side: '#d5def7', pc: F.C.blue, lc: F.C.blue },
          { label: 'Parameters', sub: '采样方式：温度 上下文', tip: 'c8_parameter', pattern: 'dots', density: 6, pc: F.C.blue, lc: F.C.blue },
          { label: 'Adapter · LoRA', sub: '适配器：几 MB 的改动', tip: 'c8_lora', fill: F.C.magF, side: '#efd2e2', pattern: 'diag', density: 3, pc: F.C.mag, lc: F.C.mag, t: 0.12 },
          { label: 'Base weights', sub: '基础权重：几 GB 的数字', tip: 'c8_weights', pattern: 'chips', density: 7, fill: '#fff', lc: F.C.mag, t: 0.5 }
        ];
        const o = { scale: 15, gap: 4.2, ox: 500, side: 'r', labelR: 585, top: 34 };
        s += F.stack(L, o);
        return F.svg(760, Math.max(F.stackH(L.length, o) + 20, by + 44), s, { label: 'Modelfile lines mapped to weights or behavior' });
      },
      cap_en: 'Left: a Modelfile. Right: the model it builds, exploded. Only the magenta lines reach the numbers; the blue lines wrap the same numbers in different words and dice.',
      cap_zh: '左：一个 Modelfile。右：它构建出的模型（爆炸图）。只有洋红色的行触及那些数字；蓝色的行只是用不同的话和不同的“骰子”包裹同一组数字。',
      a_en: `A [[c8_modelfile]] is Ollama’s plain-text recipe for a model — a list of instructions that \`ollama create mymodel -f Modelfile\` turns into a new, named model you can run. It is a *blueprint*, not the model itself: it points at weights and describes how to use them.

**Lines that change the weights**
- [[c8_from]] — chooses the base model, i.e. which file of [[c8_weights]] you start from. Change it and you have a different model.
- [[c8_adapter_line]] — loads a fine-tuned [[c8_lora]] on top of the base, so the numbers the model computes with actually change.

**Lines that do not change the weights**
- [[c8_parameter]] — [[c8_temperature]], context length (num_ctx), seed, stop words: *how* the same weights are run and sampled.
- [[c8_system]] — a system prompt: words in front of every conversation.
- [[c8_template]] — the formatting wrapper and pre-loaded example messages.
- LICENSE — just the legal text attached to the package.

Test: if you make a model that only changes SYSTEM, Ollama re-uses the same weight blob — the new “model” is a new name with new instructions around identical numbers. This is the same distinction [[c8_vm]] makes between changing a model *with words* (prompt) and changing it *with examples or taste* (training).`,
      a_zh: `[[c8_modelfile]]是 Ollama 的纯文本模型“配方”——一串指令，用 \`ollama create mymodel -f Modelfile\` 就能变成一个有名字、可运行的新模型。它是*蓝图*，不是模型本身：它指向权重，并说明如何使用这些权重。

**会改变权重的行**
- [[c8_from]]——选择基础模型，也就是从哪一份[[c8_weights]]文件出发。改了它，就是另一个模型。
- [[c8_adapter_line]]——在基础模型上加载一个微调过的[[c8_lora]]，模型计算用的数字因此真正改变。

**不会改变权重的行**
- [[c8_parameter]]——[[c8_temperature]]、上下文长度（num_ctx）、随机种子、停止词：同一组权重*如何*运行和采样。
- [[c8_system]]——系统提示：放在每段对话前面的文字。
- [[c8_template]]——格式包装和预置的示例消息。
- LICENSE——只是附在包上的法律文本。

检验方法：如果你做的新模型只改了 SYSTEM，Ollama 会复用同一个权重文件——新的“模型”只是在一模一样的数字外面换了名字和说明。这正是 [[c8_vm]] 区分的两种改法：*用话*改（提示词）与*用例子或品味*改（训练）。`,
      hook_en: 'FROM and ADAPTER touch the numbers. Everything else is words and dice around the same numbers.',
      hook_zh: 'FROM 和 ADAPTER 动的是数字；其余都是围绕同一组数字的“话”和“骰子”。',
      trap_en: 'SYSTEM does not “retrain” anything, and temperature is not a weight. Name at least FROM, ADAPTER, PARAMETER and SYSTEM and sort them correctly.',
      trap_zh: 'SYSTEM 不会“重新训练”任何东西，温度也不是权重。至少要写出 FROM、ADAPTER、PARAMETER、SYSTEM，并正确归类。'
    },
    {
      id: '8.2', t_en: 'Fine-tuning / LoRA adapter', t_zh: '微调 / LoRA 适配器',
      q_en: 'What is an adapter, why is it small, why must it match its base, and what does it change well and badly?',
      q_zh: '什么是适配器？它为什么很小？为什么必须与它的基础模型匹配？它擅长改变什么、不擅长改变什么？',
      src: 'Variable Machine; Class 8',
      fig() {
        let s = '';
        const gridRect = (x, y, w, h, n, m, o) => {
          let g = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${o.fill}" stroke="${o.stroke}" stroke-width="1.15" rx="2"/>`;
          for (let i = 1; i < n; i++) g += `<line x1="${x + w * i / n}" y1="${y}" x2="${x + w * i / n}" y2="${y + h}" stroke="${o.stroke}" stroke-width=".5" opacity=".55"/>`;
          for (let j = 1; j < m; j++) g += `<line x1="${x}" y1="${y + h * j / m}" x2="${x + w}" y2="${y + h * j / m}" stroke="${o.stroke}" stroke-width=".5" opacity=".55"/>`;
          return g;
        };
        // W frozen
        s += F.g(gridRect(30, 50, 190, 190, 14, 14, { fill: '#fff', stroke: F.C.ink }) +
          `<text x="125" y="152" text-anchor="middle" style="font:500 28px var(--mono)" fill="${F.C.ink}" opacity=".85">W</text>` +
          F.text(125, 262, 'FROZEN BASE WEIGHTS', { cls: 'lt' }) + F.sub(125, 278, '冻结的基础权重 · 4096×4096', { anchor: 'middle' }) +
          `<text x="125" y="40" text-anchor="middle" class="tiny" fill="${F.C.mute}">❄ NOT TRAINED</text>`, { tip: 'c8_frozen' });
        s += F.text(248, 150, '+', { cls: 'big' });
        // B (tall thin) × A (wide thin)
        s += F.g(gridRect(280, 50, 22, 190, 2, 14, { fill: F.C.magF, stroke: F.C.mag }) +
          F.text(291, 262, 'B', { cls: 'lt', color: F.C.mag }) + F.sub(291, 278, '4096×8', { anchor: 'middle' }), { tip: 'c8_rank' });
        s += F.text(318, 150, '×', { cls: 'big', color: F.C.mag });
        s += F.g(gridRect(334, 136, 190, 22, 14, 2, { fill: F.C.magF, stroke: F.C.mag }) +
          F.text(429, 128, 'A', { cls: 'lt', color: F.C.mag }) + F.sub(429, 180, '8×4096', { anchor: 'middle' }), { tip: 'c8_rank' });
        s += F.text(429, 214, 'ADAPTER ΔW = B·A', { cls: 'lt', color: F.C.mag }) + F.sub(429, 230, '只训练这两条细长矩阵', { anchor: 'middle' });
        // size comparison
        s += F.text(560, 60, 'FILE SIZE', { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.sub(620, 60, '文件大小');
        s += F.g(F.rect(560, 72, 180, 22, { fill: '#fff', rx: 3 }) + F.text(568, 87, 'BASE  ≈ 2 GB', { anchor: 'start', cls: 'tiny' }), { tip: 'c8_weights' });
        s += F.g(F.rect(560, 102, 6, 22, { fill: F.C.mag, stroke: F.C.mag, rx: 1 }) + F.text(574, 117, 'ADAPTER ≈ 10–50 MB', { anchor: 'start', cls: 'tiny', color: F.C.mag }), { tip: 'c8_lora' });
        // plug / socket
        s += F.text(560, 166, 'MUST MATCH ITS BASE', { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.sub(560, 182, '必须与基础模型严格匹配');
        s += F.g(F.path('M562,200 h40 v10 h12 v-10 h40 v40 h-92 z', { fill: '#fff' }) + F.path('M562,248 h40 v-10 h12 v10 h40', { stroke: F.C.mag }) +
          F.text(700, 222, '✓ fits', { cls: 'tiny', color: F.C.green }), { note: { en: 'Same architecture, same exact base: the deltas line up with the numbers they were trained against.', zh: '同样的架构、同一个基础模型：增量正好对上它训练时所针对的那些数字。' } });
        s += F.g(F.path('M562,262 h40 v10 h12 v-10 h40 v30 h-92 z', { fill: '#fff', dash: '3 3' }) + F.path('M562,308 h30 v-10 h20 v10 h42', { stroke: F.C.red }) +
          F.text(700, 284, '✗ other base', { cls: 'tiny', color: F.C.red }), { note: { en: 'Different base or architecture: the shapes or the meaning of each number differ, so the adapter breaks or produces nonsense.', zh: '换了基础模型或架构：矩阵形状或每个数字的含义都不同，适配器要么加载失败，要么输出乱码。' } });
        return F.svg(760, 320, s, { label: 'LoRA adapter anatomy' });
      },
      cap_en: 'LoRA leaves the big matrix W frozen and learns two thin matrices whose product is a small correction ΔW. The correction only makes sense on the exact W it was learned against.',
      cap_zh: 'LoRA 让大矩阵 W 保持冻结，只学习两个细长矩阵，它们的乘积是一个小修正 ΔW。这个修正只在它当初所针对的那个 W 上才有意义。',
      a_en: `An **adapter** is a small file of learned changes that sits on top of a model’s [[c8_weights]]. [[c8_lora]] (Low-Rank Adaptation) is the common kind: during [[c8_finetune]] the base is [[c8_frozen]], and for each big weight matrix W the training learns two thin matrices B and A. Their product ΔW = B·A is added to W when the model runs.

**Why it is small:** the matrices are thin — their [[c8_rank]] is something like 8 instead of 4,096. You store thousands of times fewer numbers, so an adapter is megabytes while the base is gigabytes. It is also cheap enough to train on a laptop.

**Why it must match its base:** an adapter stores only *differences* relative to one specific set of weights. Its shapes must fit that architecture, and each delta only means something added to the exact numbers it was trained against. Put it on a different base (or even a different version) and it either fails to load or nudges the wrong numbers — nonsense.

**What it changes well:** style, tone, voice, format and vocabulary — *how* the model says things (e.g. always answering as a short poem, or in your studio’s writing style).
**What it changes badly:** new facts and knowledge, reasoning ability, or things the base model cannot already do. With a small dataset it also easily [[c8_overfit|overfits]] — parroting the training examples.`,
      a_zh: `**适配器**是一个记录“学到的改动”的小文件，叠加在模型的[[c8_weights]]之上。[[c8_lora]]（低秩适配）是最常见的一种：[[c8_finetune]]时基础模型处于[[c8_frozen]]状态，训练只为每个大权重矩阵 W 学习两个细长矩阵 B 和 A。模型运行时，把它们的乘积 ΔW = B·A 加到 W 上。

**为什么小：**这两个矩阵很“细”——它们的[[c8_rank]]大约是 8，而不是 4096。需要存的数字少了成千上万倍，所以适配器只有几 MB，而基础模型有几 GB。它也便宜到可以在笔记本电脑上训练。

**为什么必须匹配基础模型：**适配器只存储相对于某一组特定权重的*差值*。它的形状必须符合那个架构，而且每个增量只有加到它训练时所针对的那组数字上才有意义。放到别的基础模型（甚至同一模型的不同版本）上，要么加载失败，要么推动了错误的数字——输出就是胡言乱语。

**擅长改变的：**风格、语气、口吻、格式和用词——模型*怎么*说话（例如总是用短诗回答，或用你工作室的文风）。
**不擅长改变的：**新的事实和知识、推理能力，或基础模型本来就做不到的事。数据集小的时候还很容易[[c8_overfit|过拟合]]——只会复读训练样本。`,
      hook_en: 'An adapter is a thin, base-specific correction: great at HOW the model talks, poor at WHAT it knows.',
      hook_zh: '适配器是一层很薄、只认一个基础模型的修正：擅长改“怎么说”，不擅长改“知道什么”。',
      trap_en: 'Answer all four parts: what it is (frozen base + small learned matrices), why small (low rank), why match (deltas relative to exact weights/shape), well vs. badly (style vs. facts).',
      trap_zh: '四个小问都要答：是什么（冻结的底座 + 小的可学习矩阵）、为什么小（低秩）、为什么要匹配（增量相对于特定权重和形状）、擅长与不擅长（风格 vs. 事实）。'
    },
    {
      id: '8.3', t_en: 'Loss', t_zh: '损失（Loss）',
      q_en: 'What does the loss number tell you during training?',
      q_zh: '训练过程中，损失（loss）这个数字告诉了你什么？',
      src: 'Variable Machine; Class 8',
      fig() {
        let s = '';
        const X0 = 90, Y0 = 280, X1 = 560, Y1 = 40;
        s += F.line(X0, Y0, X1 + 10, Y0, { arrow: true }) + F.line(X0, Y0, X0, Y1 - 10, { arrow: true });
        s += F.text(X1, Y0 + 22, 'TRAINING STEPS →', { anchor: 'end', cls: 'tiny', color: F.C.mute }) + F.sub(X1, Y0 + 38, '训练步数', { anchor: 'end' });
        s += F.text(X0 - 10, Y1 - 2, 'LOSS', { anchor: 'end', cls: 'tiny', color: F.C.mute }) + F.sub(X0 - 10, Y1 + 14, '损失', { anchor: 'end' });
        for (let i = 1; i <= 4; i++) s += F.line(X0, Y0 - i * 55, X1, Y0 - i * 55, { stroke: '#e6e3dc', sw: .7 });
        // train loss — falls and keeps falling
        s += F.g(F.path(`M${X0},60 C150,190 220,225 330,240 S480,262 ${X1},266`, { sw: 2, cls: 'draw' }), { tip: 'c8_loss' });
        // validation — falls then rises
        s += F.g(F.path(`M${X0},70 C150,195 230,222 320,226 S460,200 ${X1},170`, { sw: 1.6, stroke: F.C.red, dash: '6 4' }), { tip: 'c8_validation' });
        // flat — not learning
        s += F.g(F.path(`M${X0},90 C200,96 380,92 ${X1},94`, { sw: 1.4, stroke: F.C.mute, dash: '2 4' }), { note: { en: 'Flat loss: the model is not learning — learning rate too low, data broken, or nothing to learn.', zh: '损失不动：模型没在学——学习率太低、数据有问题，或者没什么可学的。' } });
        // overfitting marker
        s += F.line(320, Y0, 320, Y1 + 10, { stroke: F.C.red, sw: .8, dash: '2 3' });
        s += F.text(326, Y1 + 18, 'OVERFITTING STARTS', { anchor: 'start', cls: 'tiny', color: F.C.red }) + F.sub(326, Y1 + 33, '开始过拟合：该停了');
        // legend
        const lg = (y, col, dash, en, zh, tip, note) => F.g(F.line(590, y, 630, y, { stroke: col, sw: 2, dash }) + F.text(640, y + 4, en, { anchor: 'start', cls: 'tiny', color: col }) + F.sub(640, y + 19, zh), { tip, note });
        s += lg(80, F.C.ink, null, 'TRAINING LOSS', '训练损失：应当下降', 'c8_loss');
        s += lg(130, F.C.red, '6 4', 'VALIDATION LOSS', '验证损失：新样本上', 'c8_validation');
        s += lg(180, F.C.mute, '2 4', 'FLAT = NOT LEARNING', '平的 = 没在学', null, { en: 'If loss never moves, change the data or settings.', zh: '损失一直不动，就该改数据或设置。' });
        s += F.text(590, 240, 'LOW ≠ GOOD TASTE', { anchor: 'start', cls: 'tiny', color: F.C.mag }) + F.sub(590, 256, '损失低 ≠ 输出好看/有品味');
        return F.svg(760, 330, s, { label: 'loss curves during training' });
      },
      cap_en: 'Healthy training: the solid line drops quickly, then flattens. When the dashed validation line turns upward while training loss keeps falling, the model has started memorizing.',
      cap_zh: '健康的训练：实线先快速下降，然后趋于平缓。当虚线（验证损失）开始上翘而训练损失还在下降时，模型就开始死记硬背了。',
      a_en: `[[c8_loss]] is a running score of **how wrong the model’s predictions are on the training data**. For a language model it measures how surprised the model is by the actual next token in each example (cross-entropy): the more probability it put on the right token, the lower the loss.

Reading it during training:
- **Going down** — the weights are adjusting so the model predicts your examples better: it is learning.
- **Flat from the start** — it is not learning (learning rate too low, broken or tiny data).
- **Jumping around / going up** — training is unstable (learning rate too high).
- **Falling toward zero on a small dataset** — the model is memorizing the examples: [[c8_overfit]]. Comparing with [[c8_validation]] on unseen examples shows it: training loss keeps falling while validation loss rises.

What loss does **not** tell you: whether the output is good, true, creative or matches your taste. It only measures how closely the model imitates *this* data. A low number means “matches the examples,” not “good model” — you still have to read the outputs.`,
      a_zh: `[[c8_loss]]是一个持续更新的分数，表示**模型在训练数据上的预测错得有多厉害**。对语言模型来说，它衡量模型对每个样本中真实的下一个 token 有多“意外”（交叉熵）：给正确 token 的概率越高，损失就越低。

训练中如何解读：
- **下降**——权重在调整，模型对你的样本预测得越来越好：它在学习。
- **一开始就是平的**——没在学（学习率太低，数据有问题或太少）。
- **剧烈跳动 / 上升**——训练不稳定（学习率太高）。
- **在小数据集上降到接近零**——模型在死记样本：[[c8_overfit]]。和未见样本上的[[c8_validation]]对比就能看出来：训练损失继续下降，验证损失却在上升。

损失**不能**告诉你的：输出是否好、是否真实、是否有创意、是否符合你的品味。它只衡量模型在多大程度上模仿了*这批*数据。数字低意味着“像样本”，不等于“好模型”——你仍然得亲自读输出。`,
      hook_en: 'Loss = how surprised the model still is by your examples. Down is learning; near zero on little data is memorizing.',
      hook_zh: '损失 = 模型对你的样本还有多“意外”。下降是在学；小数据上接近零是在死记。',
      trap_en: 'Don’t call loss “accuracy” or “quality.” Say it is error on the training data, should decrease, and can mislead (overfitting).',
      trap_zh: '不要把损失说成“准确率”或“质量”。要说它是训练数据上的误差，应该下降，而且可能误导（过拟合）。'
    },
    {
      id: '8.4', t_en: 'Preference tuning', t_zh: '偏好调优',
      q_en: 'How is training on chosen/rejected pairs different from training on examples? What is the data, in that case?',
      q_zh: '用“选中/拒绝”成对数据训练，和用“例子”训练有什么不同？在这种情况下，数据是什么？',
      src: 'Variable Machine; Ouyang et al.; DPO',
      fig() {
        let s = '';
        const card = (x, y, w, h, k, v, o = {}) => F.rect(x, y, w, h, { fill: o.fill || '#fff', stroke: o.stroke || F.C.ink, rx: 5, tip: o.tip, note: o.note }) +
          F.text(x + 12, y + 17, k, { anchor: 'start', cls: 'tiny', color: o.kc || F.C.mute }) + F.text(x + 12, y + h - 13, v, { anchor: 'start', cls: 'mono', color: o.vc || F.C.ink });
        // left: SFT
        s += F.text(190, 30, 'EXAMPLES · SFT', { cls: 'big' }) + F.sub(190, 48, '例子：模仿这个', { anchor: 'middle' });
        s += F.g(card(40, 66, 300, 52, 'PROMPT · 提示', 'Describe the sea.') +
          F.arrow(190, 122, 190, 144) +
          card(40, 148, 300, 52, 'TARGET RESPONSE · 目标回答', 'Salt light, folding.', { fill: F.C.blueF, stroke: F.C.blue, vc: F.C.blue }), { tip: 'c8_sft' });
        s += F.text(190, 232, '“answer LIKE THIS”', { cls: 'tiny', color: F.C.blue }) + F.sub(190, 248, '学的是：照着写', { anchor: 'middle' });
        // right: preference
        s += F.text(570, 30, 'PAIRS · PREFERENCE', { cls: 'big', color: F.C.mag }) + F.sub(570, 48, '成对：更喜欢这个', { anchor: 'middle' });
        s += F.g(card(420, 66, 300, 52, 'PROMPT · 提示', 'Describe the sea.'), { tip: 'c8_pair' });
        s += F.path('M570,122 L570,132 L495,132 L495,146', { arrow: true }) + F.path('M570,132 L645,132 L645,146', { arrow: true });
        s += card(420, 150, 145, 62, '✓ CHOSEN · 选中', 'Salt light…', { fill: F.C.greenF, stroke: F.C.green, kc: F.C.green, vc: F.C.green, note: { en: 'The answer a person preferred.', zh: '人更喜欢的那个回答。' } });
        s += card(575, 150, 145, 62, '✗ REJECTED · 拒绝', 'The sea is…', { fill: F.C.redF, stroke: F.C.red, kc: F.C.red, vc: F.C.red, note: { en: 'A plausible answer a person ranked lower.', zh: '一个说得过去、但被人排在后面的回答。' } });
        s += F.text(570, 232, '“THIS, more than THAT”', { cls: 'tiny', color: F.C.mag }) + F.sub(570, 248, '学的是：两者之间的差别', { anchor: 'middle' });
        s += F.line(380, 70, 380, 250, { stroke: F.C.hair || '#ddd', dash: '3 4', sw: .8 });
        // data band
        s += F.g(F.rect(40, 276, 680, 40, { fill: '#fff', stroke: F.C.mag, dash: '4 3', rx: 6 }) +
          F.text(56, 300, 'THE DATA = { prompt, chosen, rejected }  →  a record of human judgment / taste', { anchor: 'start', cls: 'tiny', color: F.C.mag }), { tip: 'c8_pair' });
        return F.svg(760, 330, s, { label: 'SFT example vs preference pair' });
      },
      cap_en: 'An example says “write this.” A pair says “of these two plausible answers, this one is better.” The model learns the direction of the difference.',
      cap_zh: '例子说的是“写成这样”。成对数据说的是“这两个都说得过去，但这个更好”。模型学的是两者差别的方向。',
      a_en: `**Training on examples** ([[c8_sft]]) gives the model a prompt and *one* target answer. The model is pushed to reproduce that answer word by word: it learns **what to imitate**.

**Training on chosen/rejected pairs** ([[c8_pref]], e.g. [[c8_dpo]] or the reward-model step of RLHF) gives the same prompt with *two* answers — one a person chose and one they rejected. The model is pushed to make the chosen answer more likely *relative to* the rejected one: it learns **what to prefer**. Nothing has to be a perfect answer; it only has to be better than the other. That makes it good for qualities that are easy to judge but hard to write down — tone, helpfulness, safety, taste.

**What the data is:** rows of [[c8_pair|{prompt, chosen, rejected}]]. The real content is not text to copy but a **human judgment** — someone’s comparison, their values and taste, recorded as data. (In [[c8_vm]] this is changing the model “with taste.”) So whose preferences fill the dataset decides whose taste the model learns.`,
      a_zh: `**用例子训练**（[[c8_sft]]）给模型一个提示和*一个*目标回答。模型被推着一字一句地复现这个回答：它学的是**模仿什么**。

**用选中/拒绝对训练**（[[c8_pref]]，例如 [[c8_dpo]]，或 RLHF 中训练奖励模型的那一步）给出同一个提示和*两个*回答——一个被人选中，一个被人拒绝。模型被推着让“选中”的回答比“拒绝”的*相对*更可能出现：它学的是**更偏好什么**。不需要哪个回答是完美的，只要比另一个好就行。所以它适合那些容易判断、却很难写成标准答案的品质——语气、有用性、安全性、品味。

**这时数据是什么：**一行行 [[c8_pair|{提示, 选中, 拒绝}]]。真正的内容不是供模仿的文字，而是**人的判断**——某个人的比较、价值观和品味被记录成数据。（在 [[c8_vm]] 里，这就是“用品味”改变模型。）因此，数据集里装的是谁的偏好，模型学到的就是谁的品味。`,
      hook_en: 'Examples teach “say this.” Pairs teach “this is better than that.” The data is judgment.',
      hook_zh: '例子教“这样说”；成对数据教“这个比那个好”。数据本身就是判断。',
      trap_en: 'The second half asks “what is the data?” — answer literally (prompt + chosen + rejected) AND conceptually (human preference/taste).',
      trap_zh: '第二问“数据是什么”——既要字面回答（提示 + 选中 + 拒绝），也要概念上回答（人的偏好/品味）。'
    },
    {
      id: '8.5', t_en: 'Merge / blend', t_zh: '合并 / 混合',
      q_en: 'What happens when two adapters are blended at t = 0.5, and who wrote the result?',
      q_zh: '当两个适配器以 t = 0.5 混合时会发生什么？结果是谁“写”的？',
      src: 'Variable Machine; Class 8',
      fig() {
        let s = '';
        const pl = (ox, oy, fill, side, pc, pattern) => { F.setIso(16, ox, oy); return F.plate({ x: 0, y: 0, z: 0, w: 4, d: 4, t: 0.25, fill, side, pc, pattern, density: 5 }); };
        s += F.g(pl(130, 70, F.C.blueF, '#d5def7', F.C.blue, 'hatch') + F.text(130, 200, 'ADAPTER A', { cls: 'lt', color: F.C.blue }) + F.sub(130, 216, '适配器 A · 例：诗意', { anchor: 'middle' }),
          { note: { en: 'Trained on dataset A (say, poems). t = 0 gives pure A.', zh: '用数据集 A（比如诗歌）训练。t = 0 时完全是 A。' } });
        s += F.g(pl(630, 70, F.C.redF, '#f3d0d2', F.C.red, 'diag') + F.text(630, 200, 'ADAPTER B', { cls: 'lt', color: F.C.red }) + F.sub(630, 216, '适配器 B · 例：说明书', { anchor: 'middle' }),
          { note: { en: 'Trained on dataset B (say, instruction manuals). t = 1 gives pure B.', zh: '用数据集 B（比如说明书）训练。t = 1 时完全是 B。' } });
        s += F.g(pl(380, 40, F.C.magF, '#efd2e2', F.C.mag, 'cross') + F.text(380, 170, 'BLEND t = 0.5', { cls: 'lt', color: F.C.mag }) + F.sub(380, 186, '每个权重取正中间', { anchor: 'middle' }), { tip: 'c8_merge' });
        s += F.arrow(205, 120, 300, 100, { stroke: F.C.mag }) + F.arrow(555, 120, 460, 100, { stroke: F.C.mag });
        s += F.text(380, 214, 'W = (1 − t)·A + t·B', { cls: 'mono', color: F.C.ink });
        // slider
        const sx0 = 130, sx1 = 630, sy = 250;
        s += F.g(F.line(sx0, sy, sx1, sy, { sw: 1.4 }) + [0, .25, .5, .75, 1].map(t => F.line(sx0 + t * 500, sy - 5, sx0 + t * 500, sy + 5)).join('') +
          `<circle cx="${sx0 + 250}" cy="${sy}" r="8" fill="#fff" stroke="${F.C.mag}" stroke-width="2"/>` +
          F.text(sx0, sy + 22, 't = 0', { cls: 'tiny', color: F.C.blue }) + F.text(sx1, sy + 22, 't = 1', { cls: 'tiny', color: F.C.red }) + F.text(sx0 + 250, sy + 24, '0.5', { cls: 'tiny', color: F.C.mag }), { tip: 'c8_t' });
        // authors
        s += F.text(380, 300, 'WHO WROTE THE RESULT?', { cls: 'tiny', color: F.C.mute }) + F.sub(380, 316, '结果是谁写的？', { anchor: 'middle' });
        const au = [['DATASET A AUTHORS', 'A 的数据作者'], ['DATASET B AUTHORS', 'B 的数据作者'], ['BASE MODEL LAB', '基础模型的机构'], ['YOU · CHOSE t', '你：选了 t']];
        au.forEach(([en, zh], i) => {
          const x = 40 + i * 175;
          s += F.rect(x, 330, 160, 46, { fill: '#fff', rx: 5, dash: '3 3', note: { en: 'One of many hands — none of them wrote these exact outputs.', zh: '众多“作者”之一——没有任何人亲手写下这些具体输出。' } }) +
            F.text(x + 80, 349, en, { cls: 'tiny' }) + F.sub(x + 80, 366, zh, { anchor: 'middle' });
        });
        return F.svg(760, 390, s, { label: 'blending two adapters' });
      },
      cap_en: 'Blending is arithmetic: every number in the result is the average of the matching numbers in A and B. No one writes the output; authorship is spread across datasets, the base model and whoever chose t.',
      cap_zh: '混合就是算术：结果里的每个数字都是 A 和 B 对应数字的平均值。没有人写下输出；“作者身份”分散在数据集、基础模型以及选择 t 的那个人身上。',
      a_en: `A [[c8_merge]] combines two adapters trained on the **same base** by doing arithmetic on their weights: W = (1 − t)·A + t·B. At [[c8_t|t = 0.5]] every number in the new adapter is the exact midpoint between the corresponding numbers in A and B.

What happens: the blended model behaves *somewhere between* the two learned behaviors — e.g. half poem, half instruction manual. But a network is not linear, so “halfway in the numbers” is not reliably “half of each style.” You may get a genuine hybrid, one style dominating, or a muddy compromise where both effects weaken. You have to read the outputs to know.

**Who wrote the result?** No one directly. No person wrote those sentences and no dataset contains them. Authorship is **distributed**: the people whose texts or judgments made dataset A and dataset B, the lab that trained the base model (and the people whose data trained *it*), and you — who chose the adapters and the value of t. The output was “written” by arithmetic on everyone’s contributions, which is exactly why questions of credit and ownership get hard.`,
      a_zh: `[[c8_merge]]是对两个基于**同一个基础模型**训练的适配器的权重做算术：W = (1 − t)·A + t·B。在 [[c8_t|t = 0.5]] 时，新适配器里的每一个数字，都恰好是 A 和 B 中对应数字的正中点。

会发生什么：混合后的模型表现介于两种学到的行为*之间*——比如一半像诗、一半像说明书。但神经网络不是线性的，所以“数字上的一半”并不一定等于“两种风格各一半”。你可能得到真正的混血、某一种风格占上风，或者两种效果都被削弱的“糊”状妥协。必须读输出才知道。

**结果是谁写的？**没有任何人直接写。没有人写过那些句子，也没有哪个数据集包含它们。作者身份是**分散的**：构成数据集 A 和 B 的文本或判断的那些人、训练基础模型的机构（以及训练*它*所用数据的作者们），还有你——选了哪些适配器、定了 t 的值。输出是由对所有人贡献所做的算术“写”出来的，这正是署名和所有权问题变得困难的原因。`,
      hook_en: 't = 0.5 = the numerical midpoint of two learned behaviors. Authorship = everyone upstream + whoever turned the dial.',
      hook_zh: 't = 0.5 = 两种学到的行为在数值上的中点。作者 = 上游所有人 + 拧旋钮的那个人。',
      trap_en: 'Don’t answer “the AI wrote it” or just “me.” Explain the arithmetic and name the distributed authors.',
      trap_zh: '不要只答“AI 写的”或“我写的”。要解释这个算术，并说出分散的作者们。'
    }
  ]
});
