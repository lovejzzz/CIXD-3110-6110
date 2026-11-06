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
  quiz: [
    { q_en: 'What is a Modelfile?',
      q_zh: 'Modelfile 是什么？',
      opts: [{ en: 'The weights themselves', zh: '权重本身' },
             { en: 'A plain-text recipe Ollama uses to build a model', zh: 'Ollama 用来构建模型的纯文本“配方”' },
             { en: 'A dataset card', zh: '一张数据集卡' },
             { en: 'A log of your chats', zh: '你的聊天记录' }], a: 1,
      why_en: 'A Modelfile is a short **text blueprint** (`ollama create name -f Modelfile`) that says which weights to start from and how to wrap them. It points to the weights; it isn’t the weights.',
      why_zh: 'Modelfile 是一份简短的**文字蓝图**（`ollama create name -f Modelfile`），写明从哪个权重开始、怎么包装它。它指向权重，但本身不是权重。' },
    { q_en: 'Which Modelfile line actually changes the weights the model computes with?',
      q_zh: 'Modelfile 里哪一行真正改变了模型计算用的权重？',
      opts: [{ en: 'SYSTEM', zh: 'SYSTEM' },
             { en: 'PARAMETER temperature 0.7', zh: 'PARAMETER temperature 0.7' },
             { en: 'TEMPLATE', zh: 'TEMPLATE' },
             { en: 'FROM (and ADAPTER)', zh: 'FROM（以及 ADAPTER）' }], a: 3,
      why_en: '**FROM** picks the base weights and **ADAPTER** adds learned changes on top — those reach the numbers. SYSTEM, TEMPLATE and PARAMETER only change **what is fed in** or **how the output is sampled**; the weights stay identical.',
      why_zh: '**FROM** 选定基础权重，**ADAPTER** 在上面叠加学到的改动——只有它们碰到那些数字。SYSTEM、TEMPLATE、PARAMETER 只改变**喂进去的内容**或**输出的抽样方式**，权重完全不变。' },
    { q_en: 'Raising PARAMETER temperature from 0.2 to 1.2 makes the model…',
      q_zh: '把 PARAMETER temperature 从 0.2 调到 1.2，模型会……',
      opts: [{ en: 'More random and varied in its word choices', zh: '选词更随机、更多变' },
             { en: 'Learn new facts', zh: '学到新知识' },
             { en: 'Smaller on disk', zh: '在硬盘上变小' },
             { en: 'Retrain its weights', zh: '重新训练它的权重' }], a: 0,
      why_en: 'Temperature changes **how the next token is sampled**: higher = more surprising picks. It learns nothing and the weights don’t change — it’s a dial on the dice, not on the brain.',
      why_zh: '温度改变的是**下一个词元怎么抽样**：越高越容易选出意外的词。它不学任何东西，权重也不变——它是调骰子的旋钮，不是改大脑。' },
    { q_en: 'Why is a LoRA adapter so small (megabytes vs. gigabytes)?',
      q_zh: '为什么 LoRA 适配器这么小（几 MB，而不是几 GB）？',
      opts: [{ en: 'It is a compressed copy of the whole model', zh: '它是整个模型的压缩副本' },
             { en: 'It only stores the system prompt', zh: '它只存了系统提示词' },
             { en: 'It trains two thin low-rank matrices per layer; the base stays frozen', zh: '它每层只训练两个细长的低秩矩阵，基础模型保持冻结' },
             { en: 'It deletes most of the weights', zh: '它删掉了大部分权重' }], a: 2,
      why_en: '[[c8_lora]] keeps the big base matrix W **frozen** and learns a tiny correction ΔW = B·A from two **thin** matrices (rank ≈ 8 vs. 4,096). Only those are saved — hence megabytes.',
      why_zh: '[[c8_lora]]让大的基础矩阵 W 保持**冻结**，只用两个**细长**矩阵学一个小小的修正 ΔW = B·A（秩约 8，而原矩阵是 4096）。只保存这两个矩阵——所以只有几 MB。' },
    { q_en: 'Why must an adapter match its base model exactly?',
      q_zh: '为什么适配器必须和它的基础模型完全对应？',
      opts: [{ en: 'Because of the license only', zh: '只是因为许可证' },
             { en: 'Its changes are defined relative to those exact weights and shapes', zh: '它的改动是相对那套权重和矩阵形状来定义的' },
             { en: 'Because adapters contain the base model', zh: '因为适配器里包含了基础模型' },
             { en: 'It doesn’t — any adapter fits any model', zh: '不需要——任何适配器都能配任何模型' }], a: 1,
      why_en: 'ΔW was learned as a correction to **one specific W**. On another base the shapes may not fit, and even if they do the correction points the wrong way — behaviour becomes erratic.',
      why_zh: 'ΔW 是针对**某一个特定的 W** 学出来的修正。换一个基础模型，矩阵形状可能对不上；就算对得上，修正方向也是错的——表现会变得乱七八糟。' },
    { q_en: 'What does an adapter change WELL, and what BADLY?',
      q_zh: '适配器擅长改什么、不擅长改什么？',
      opts: [{ en: 'Well: style, tone, format. Badly: adding new facts.', zh: '擅长：风格、语气、格式。不擅长：加入新知识。' },
             { en: 'Well: new facts. Badly: style.', zh: '擅长：新知识。不擅长：风格。' },
             { en: 'Well: file size. Badly: speed.', zh: '擅长：文件大小。不擅长：速度。' },
             { en: 'It changes everything equally', zh: '什么都一样擅长' }], a: 0,
      why_en: 'A small set of examples teaches **how to answer** (voice, format, vocabulary) very well. Teaching **what is true** — new knowledge or better reasoning — needs far more data, so adapters do that badly and can overfit.',
      why_zh: '少量例子很擅长教会**怎么回答**（语气、格式、用词）。但要教**什么是对的**——新知识或更好的推理——需要多得多的数据，所以适配器做不好，还容易过拟合。' },
    { q_en: 'During training the loss number keeps going DOWN. What does that tell you?',
      q_zh: '训练时损失（loss）一直在下降。这说明什么？',
      opts: [{ en: 'The model’s outputs are now high quality', zh: '模型的输出质量已经很高了' },
             { en: 'The model got smaller', zh: '模型变小了' },
             { en: 'Its next-token guesses on the training data are getting less wrong', zh: '它在训练数据上猜下一个词元越来越不离谱' },
             { en: 'Training has failed', zh: '训练失败了' }], a: 2,
      why_en: '[[c8_loss]] measures **how wrong the predictions are on the training examples**. Falling loss = it’s learning to imitate them. It does **not** measure quality or taste — very low loss can mean memorizing.',
      why_zh: '[[c8_loss]]衡量的是**在训练样本上预测得有多错**。下降说明它在学着模仿这些样本。它**不**衡量质量或品味——损失太低反而可能是死记硬背。' },
    { q_en: 'Training loss keeps falling but validation loss starts RISING. This means…',
      q_zh: '训练损失一直下降，但验证损失开始上升。这说明……',
      opts: [{ en: 'The model is getting smarter everywhere', zh: '模型在所有方面都变聪明了' },
             { en: 'Overfitting: it is memorizing the training set', zh: '过拟合：它在死记训练集' },
             { en: 'The temperature is too high', zh: '温度设得太高了' },
             { en: 'The adapter is the wrong size', zh: '适配器大小不对' }], a: 1,
      why_en: 'Validation data is **new to the model**. If it gets worse there while improving on training data, it is **memorizing** rather than generalizing — time to stop training.',
      why_zh: '验证数据是模型**没见过的**。如果它在训练数据上越来越好、在验证数据上却越来越差，就是在**死记**而不是举一反三——该停止训练了。' },
    { q_en: 'Preference tuning (e.g. DPO) trains on what kind of data?',
      q_zh: '偏好训练（比如 DPO）用的是什么样的数据？',
      opts: [{ en: 'One target answer per prompt', zh: '每个提示配一个标准答案' },
             { en: 'Only raw web pages', zh: '只有原始网页' },
             { en: 'Only the system prompt', zh: '只有系统提示词' },
             { en: 'Pairs: a prompt with a chosen and a rejected answer', zh: '成对数据：一个提示配一个“选中”答案和一个“拒绝”答案' }], a: 3,
      why_en: 'Example training (SFT) says “answer **like this**.” Preference training says “**this one, rather than that one**” — the data is a record of **human judgment / taste**, and the model learns the direction of the difference.',
      why_zh: '例子训练（SFT）说的是“**照这样**回答”。偏好训练说的是“**要这个，不要那个**”——数据本身就是**人的判断和品味**的记录，模型学的是两者之间差别的方向。' },
    { q_en: 'Two adapters A and B are blended at t = 0.5. Which is true?',
      q_zh: '两个适配器 A 和 B 以 t = 0.5 融合。下面哪句是对的？',
      opts: [{ en: 'Every weight becomes the midpoint (1−t)·A + t·B; no one directly wrote the result', zh: '每个权重都变成中点 (1−t)·A + t·B；结果没有任何人直接写出来' },
             { en: 'The model randomly picks A or B each time', zh: '模型每次随机选 A 或 B' },
             { en: 'B is deleted and A is kept', zh: '删掉 B，保留 A' },
             { en: 'The base model is retrained from scratch', zh: '基础模型从头重新训练' }], a: 0,
      why_en: 'Blending is **arithmetic on the weights**: each number is the average of A’s and B’s. The behaviour lands somewhere between (a hybrid or mush). Authorship is **distributed** — dataset authors, base-model makers and whoever chose t.',
      why_zh: '融合是**对权重做算术**：每个数都是 A 和 B 对应数字的平均。表现落在两者之间（混合风格，或一团糊）。“作者”是**分散的**——两个数据集的作者、基础模型的开发者、以及选了 t 的人。' }
  ],
  qs: [
    {
      id: '8.1', t_en: 'Modelfile', t_zh: 'Modelfile',
      q_en: 'What is a Modelfile, and which of its lines change the weights and which do not?',
      q_zh: '什么是 Modelfile？其中哪些行会改变权重，哪些不会？',
      src: 'Ollama, Modelfile reference',
      kid_en: "Think of a robot chef and a recipe card. The line **FROM** picks *which robot chef* you hire — a different chef has a different brain. **ADAPTER** is extra cooking school that chef went to; it actually changes what the chef knows how to do. Everything else on the card — **SYSTEM**, **PARAMETER**, **TEMPLATE**, **MESSAGE** — is a sticky note for the *same* chef: “talk like a poet,” “be more adventurous,” “here’s an example dish.” And **LICENSE** is just the label on the box. A **Modelfile** is that recipe card for an Ollama model.",
      kid_zh: "想象一位机器人厨师和一张菜谱卡。**FROM** 这一行决定你雇*哪一位*机器人厨师——换一位厨师，就是换一颗“大脑”。**ADAPTER** 是这位厨师额外上过的烹饪课，它真的改变了厨师会做什么。卡片上其他的——**SYSTEM**、**PARAMETER**、**TEMPLATE**、**MESSAGE**——都是贴给*同一位*厨师的便利贴：“说话像诗人”“胆子大一点”“这里有一道示范菜”。**LICENSE** 只是盒子上的标签。**Modelfile** 就是 Ollama 模型的这张菜谱卡。",
      steps: [
        {"en": "Seven keys = seven kinds of Modelfile lines. On the right sits the **weights block** with an ID number; in front, the output screen.", "zh": "七个键 = 七种 Modelfile 指令。右边是带编号的**权重块**；前面是输出屏幕。", "hi": ["g81-k0", "g81-k1", "g81-k2", "g81-k3", "g81-k4", "g81-k5", "g81-k6"]},
        {"en": "Press **1 (FROM)**. A wire lights all the way to the weights, and the ID number changes: you picked a different model — different numbers.", "zh": "按 **1（FROM）**。一根线一路亮到权重块，编号变了：你换了一个模型——数字全变了。", "hi": ["g81-k0"]},
        {"en": "Press **2 (ADAPTER)**. The weights change again: a LoRA adapter adds learned changes on top.", "zh": "按 **2（ADAPTER）**。权重又变了：LoRA 适配器在上面叠加了学到的改动。", "hi": ["g81-k1"]},
        {"en": "Press **3, 4, 5, 6** (PARAMETER, TEMPLATE, SYSTEM, MESSAGE). Only the screen changes — the ID stays the same. Same brain, new instructions.", "zh": "按 **3、4、5、6**（PARAMETER、TEMPLATE、SYSTEM、MESSAGE）。只有屏幕变了——编号不变。同一颗大脑，新的指示。", "hi": ["g81-k2", "g81-k3", "g81-k4", "g81-k5"]},
        {"en": "Press **7 (LICENSE)**. Nothing lights: it’s just a label for sharing. So: FROM and ADAPTER change weights; the rest don’t.", "zh": "按 **7（LICENSE）**。什么都不亮：它只是用于分享的标签。结论：FROM 和 ADAPTER 改变权重，其余都不改。", "hi": ["g81-k6"]}
      ],
      short_en: 'A **Modelfile** is Ollama’s **plain-text blueprint** for building a model (`ollama create name -f Modelfile`). Only **FROM** (which base weights you start from) and **ADAPTER** (a fine-tuned LoRA applied on top) **change the weights**. **PARAMETER** (temperature, num_ctx…), **TEMPLATE**, **SYSTEM**, **MESSAGE** and **LICENSE** only change how the **same weights** are prompted, sampled or labeled.',
      short_zh: '**Modelfile** 是 Ollama 用来构建模型的**纯文本蓝图**（`ollama create 名字 -f Modelfile`）。只有 **FROM**（从哪份基础权重出发）和 **ADAPTER**（叠加一个微调好的 LoRA）**会改变权重**。**PARAMETER**（温度、num_ctx 等）、**TEMPLATE**、**SYSTEM**、**MESSAGE** 和 **LICENSE** 只改变**同一组权重**被如何提示、采样或标注。',
      basis_en: 'Checked against Ollama’s Modelfile reference: instructions FROM (required), PARAMETER, TEMPLATE, SYSTEM, ADAPTER, LICENSE, MESSAGE. ADAPTER “specifies a fine tuned LoRA adapter that should apply to the base model,” and the docs warn behavior is erratic if the base differs. (Newer docs also list REQUIRES and CAPABILITY — metadata, not weights.)',
      basis_zh: '已对照 Ollama 的 Modelfile 参考文档核对：指令有 FROM（必填）、PARAMETER、TEMPLATE、SYSTEM、ADAPTER、LICENSE、MESSAGE。文档说 ADAPTER 指定一个应作用于基础模型的微调 LoRA 适配器，并警告基础模型不一致时行为会失常。（新版文档还列出 REQUIRES 和 CAPABILITY——属于元数据，不是权重。）',
      links: [{ t: 'Ollama — Modelfile reference', u: 'https://docs.ollama.com/modelfile' }, { t: 'Modelfile reference (incl. ADAPTER)', u: 'https://ollama.readthedocs.io/en/modelfile' }],
      rel: ['8.2', '7.1', '4.4'],
      glow: {
        name_en: 'The Modelfile machine', name_zh: 'Modelfile 机器',
        hint_en: 'Keys 1–7 (or click) press one Modelfile line · watch which wire reaches the weights',
        hint_zh: '按 1–7（或点击）执行一行 Modelfile · 看哪根线通到权重',
        aria: 'Isometric console with seven keys, one per Modelfile instruction. FROM and ADAPTER are wired to the weights block; the others only reach the output screen.',
        mount(stage, api) {
          const K = api.iso.frame([[0, 0, 0], [470, 0, 0], [0, 290, 0], [470, 290, 0], [320, 30, 80], [345, 196, 100]]);
          const { TOP, FRONT, box, path } = K;
          const esc = api.iso.esc;
          const KEYS = ['FROM', 'ADAPTER', 'PARAMETER', 'TEMPLATE', 'SYSTEM', 'MESSAGE', 'LICENSE'];
          const kx = i => 48 + i * 41;
          let s = box(0, 0, 0, 470, 290, 8, 14);
          s += `<g transform="${TOP(0, 0, 8)}"><rect class="detail" x="8" y="8" width="454" height="274" rx="8"/></g>`;
          // wires
          const wires = [];
          wires[0] = path([[kx(0), 188, 20], [kx(0), 170, 9], [kx(0), 150, 9], [350, 150, 9], [350, 122, 9]]);
          wires[1] = path([[kx(1), 188, 20], [kx(1), 170, 9], [kx(1), 140, 9], [395, 140, 9], [395, 122, 9]]);
          for (let i = 2; i <= 5; i++) { const yy = 164 + (i - 2) * 4; wires[i] = path([[kx(i), 188, 20], [kx(i), yy + 6, 9], [kx(i), yy, 9], [338, yy, 9], [338, 203, 9]]); }
          wires[6] = path([[kx(6), 188, 20], [kx(6), 172, 9], [kx(6) + 22, 172, 9]]);
          const outw = path([[410, 122, 9], [410, 176, 9], [400, 176, 9], [400, 194, 9]]);
          s += `<path class="wire-under" d="${outw}"/><path id="g81-ow" class="wire" d="${outw}"/><path id="g81-op" class="pulse" pathLength="1000" d="${outw}"/>`;
          wires.forEach((d, i) => { s += `<path class="wire-under" d="${d}"/><path id="g81-w${i}" class="wire" d="${d}"/><path id="g81-p${i}" class="pulse" pathLength="1000" d="${d}"/>`; });
          s += `<g transform="${TOP(kx(6) + 22, 166, 9)}"><rect class="face" width="20" height="14" rx="1"/><text class="label" x="2" y="9" font-size="4.5">LICENSE</text></g>`;
          // console + keys
          s += box(20, 180, 8, 300, 80, 12, 6);
          s += `<g transform="${TOP(20, 180, 20)}"><rect class="detail" x="5" y="4" width="290" height="72" rx="5"/>
            ${KEYS.map((k, i) => `<text class="${i < 2 ? 'label-hi' : 'label'}" x="${kx(i) - 20 - 16}" y="52" font-size="${k.length > 7 ? 5.2 : 6}">${k}</text><text class="label" x="${kx(i) - 20 - 2}" y="64" font-size="6">${i + 1}</text>`).join('')}</g>`;
          KEYS.forEach((k, i) => { s += `<g id="g81-k${i}" class="press" data-tip="${['c8_from', 'c8_adapter_line', 'c8_parameter', 'c8_template', 'c8_system', 'c8_template', 'c8_modelfile'][i]}">${box(kx(i) - 16, 192, 20, 33, 26, 7, 3)}</g>`; });
          // weights block
          s += `<g id="g81-wb" class="press" data-tip="c8_weights">${box(320, 30, 8, 120, 90, 64)}<g transform="${TOP(320, 30, 72)}">${api.iso.slits(10, 110, 10, 8, 82, true)}${api.iso.slits(10, 80, 10, 8, 112, false)}</g></g>`;
          s += `<g transform="${FRONT(320, 120, 72)}"><text class="label-hi" x="8" y="14" font-size="8">WEIGHTS · 2 GB</text><text class="label-zh" x="8" y="25" font-size="7">权重（几十亿个数字）</text>
            <rect id="g81-hg" class="glass" x="8" y="34" width="104" height="18" rx="2"/><text id="g81-hash" class="scr" x="13" y="46" font-size="7"></text></g>`;
          // output screen
          s += box(345, 196, 8, 100, 10, 88);
          s += `<g transform="${FRONT(345, 206, 96)}"><rect id="g81-sg" class="glass" x="6" y="6" width="88" height="64" rx="2"/>
            ${[0, 1, 2, 3].map(k => `<text id="g81-s${k}" class="scr" x="10" y="${19 + k * 14}" font-size="6.2"></text>`).join('')}
            <text class="label" x="6" y="82" font-size="7">OUTPUT · 输出</text></g>`;
          stage.setAttribute('viewBox', K.viewBox); stage.innerHTML = s;
          const $ = id => stage.querySelector('#' + id);
          const st = { from: 0, adapter: false, temp: 1, tpl: 0, sys: 0, msgs: 0, changes: 0, last: null };
          const FROMS = ['llama3.2:3b', 'qwen2.5:3b'], TEMPS = [0.2, 0.7, 1.2], SYS = ['You are a poet.', 'One line only.', 'Speak like a manual.'];
          const hash = () => { const str = FROMS[st.from] + (st.adapter ? '+lora' : ''); let h = 2166136261; for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return ('00000000' + (h >>> 0).toString(16)).slice(-8); };
          function render() {
            $('g81-hash').textContent = `blob sha256:${hash()}…`;
            $('g81-s0').textContent = `FROM ${FROMS[st.from]}${st.adapter ? ' +lora' : ''}`;
            $('g81-s1').textContent = `SYSTEM "${SYS[st.sys]}"`;
            $('g81-s2').textContent = `temp ${TEMPS[st.temp]} · ctx 4096`;
            $('g81-s3').textContent = `tpl ${st.tpl ? 'raw' : 'chat'} · msgs ${st.msgs}`;
            $('g81-sg').classList.add('hot');
          }
          function press(i) {
            const key = $('g81-k' + i), w = $('g81-w' + i);
            api.flash(key, 260); w.classList.add('hot'); api.replay($('g81-p' + i));
            api.after(900, () => w.classList.remove('hot'));
            const name = KEYS[i];
            if (i === 0) st.from = (st.from + 1) % 2;
            if (i === 1) st.adapter = !st.adapter;
            if (i === 2) st.temp = (st.temp + 1) % 3;
            if (i === 3) st.tpl = 1 - st.tpl;
            if (i === 4) st.sys = (st.sys + 1) % 3;
            if (i === 5) st.msgs = (st.msgs + 1) % 3;
            api.after(420, () => {
              if (i < 2) {
                st.changes++; api.flash($('g81-wb'), 700); $('g81-hg').classList.add('hot');
                api.after(800, () => $('g81-hg').classList.remove('hot'));
                api.replay($('g81-op'));
                api.say(`${name} → weights changed · new blob ${hash()}`, `${name} → 权重改变 · 新的权重文件`);
              } else if (i < 6) {
                api.say(`${name} → same blob ${hash()} · new behavior`, `${name} → 权重文件不变 · 只改行为`);
              } else api.say('LICENSE → legal text only · nothing computed changes', 'LICENSE → 只是法律文本 · 计算的东西一点没变');
              api.power(true); render();
            });
          }
          KEYS.forEach((k, i) => $('g81-k' + i).addEventListener('click', () => press(i)));
          render(); api.say(`weights blob ${hash()}`, '当前权重文件');
          return {
            key: e => { const n = +e.key; if (n >= 1 && n <= 7) { press(n - 1); return true; } return false; },
            demo: () => { api.after(200, () => press(4)); api.after(1500, () => press(2)); api.after(2800, () => press(1)); }
          };
        }
      },
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
      cap_en: 'Seven keys, one per Modelfile instruction. Only FROM and ADAPTER are wired to the weights block — press them and the weight blob (its hash) changes. PARAMETER, TEMPLATE, SYSTEM and MESSAGE only reach the output screen: same blob, new behavior. LICENSE reaches nothing that computes.',
      cap_zh: '七个键，对应 Modelfile 的七种指令。只有 FROM 和 ADAPTER 接到权重块上——按下它们，权重文件（及其哈希）就变了。PARAMETER、TEMPLATE、SYSTEM、MESSAGE 只通到输出屏幕：权重文件不变，行为改变。LICENSE 什么计算都不碰。',
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
      kid_en: "Imagine a giant encyclopedia you are not allowed to rewrite. Instead you add a thin stack of sticky notes: “page 37, line 3: say it like a pirate.” That stack is a **LoRA adapter** — tiny compared with the book, because you only store the changes. But the notes only work in *that exact edition*: put them in a different printing and every page number points to the wrong place. Sticky notes are great for changing *how* the book talks (tone, style, format), but they can’t squeeze in whole new chapters of knowledge.",
      kid_zh: "想象一套你不能改动的巨型百科全书。你只能在上面贴一叠薄薄的便利贴：“第 37 页第 3 行：用海盗的口气说。”这叠便利贴就是 **LoRA 适配器**——跟整本书比小得多，因为你只记“改动”。但便利贴只对*这一个版本*有效：换一个印刷版本，所有页码都对不上了。便利贴很适合改变书*怎么说话*（语气、风格、格式），却塞不进一整章新知识。",
      steps: [
        {"en": "The big grid **W** is the base model’s weights — the encyclopedia. It is **frozen**: training doesn’t touch it.", "zh": "大方格 **W** 是基础模型的权重——那套百科全书。它是**冻结的**：训练不碰它。", "hi": ["c8_frozen"]},
        {"en": "Training learns only two **thin** strips, **B** and **A**. Multiply them and you get a small correction ΔW that gets added to W.", "zh": "训练只学两条**细长**的矩阵 **B** 和 **A**。两者相乘得到一个小修正 ΔW，加到 W 上。", "hi": ["c8_rank"]},
        {"en": "Why it’s small: thin strips hold far fewer numbers. The base is about 2 GB; the adapter is only 10–50 MB.", "zh": "为什么小：细长条装的数字少得多。基础模型约 2 GB，适配器只有 10–50 MB。", "hi": ["c8_weights", "c8_lora"]},
        {"en": "It must match its base, like a plug and its socket: on the exact base it was trained against, it fits.", "zh": "它必须与基础模型匹配，就像插头和插座：放在训练时针对的那个基础模型上，正好合适。", "hi": ["c82-fit"]},
        {"en": "On a different base the shapes or meanings don’t line up, so it breaks or talks nonsense. And remember: good at style, bad at new facts.", "zh": "换一个基础模型，形状或含义对不上，要么出错、要么胡言乱语。另外记住：擅长改风格，不擅长加新知识。", "hi": ["c82-misfit"]}
      ],
      short_en: 'An **adapter** (LoRA) is a **small set of learned changes** added on top of a **frozen base model**: for each big weight matrix it trains two **thin, low-rank matrices** whose product ΔW is added in. It is **small** because the rank is tiny (≈8 vs. 4,096) — megabytes, not gigabytes. It **must match its base** because it stores **differences relative to those exact weights and shapes** (otherwise it fails or behaves erratically). It changes **style, tone and format** well, and **new facts or reasoning** badly (and overfits small data).',
      short_zh: '**适配器**（LoRA）是叠加在**冻结的基础模型**上的**一小组学到的改动**：为每个大权重矩阵训练两个**细长的低秩矩阵**，把它们的乘积 ΔW 加进去。它**小**，因为秩极低（约 8 对 4096）——是几 MB 而不是几 GB。它**必须匹配基础模型**，因为它存的是**相对于那组特定权重和形状的差值**（否则会加载失败或行为失常）。它擅长改变**风格、语气、格式**，不擅长改变**新事实或推理能力**（小数据还容易过拟合）。',
      basis_en: 'Checked against Hu et al., “LoRA: Low-Rank Adaptation of Large Language Models” (2021): the pretrained weights are frozen and trainable rank-decomposition matrices are injected, cutting trainable parameters by up to 10,000× for GPT-3; and Ollama’s ADAPTER docs on matching the base. The “well vs. badly” split follows the Class 8 demo and common practice (a rule of thumb, not a law).',
      basis_zh: '已对照 Hu 等人《LoRA》（2021）核对：冻结预训练权重、注入可训练的低秩分解矩阵，对 GPT-3 可把可训练参数减少多达 1 万倍；以及 Ollama 关于基础模型必须匹配的 ADAPTER 文档。“擅长 / 不擅长”的划分依据第 8 课演示和通行经验（是经验法则，不是定律）。',
      links: [{ t: 'Hu et al. — LoRA (2021)', u: 'https://arxiv.org/abs/2106.09685' }, { t: 'Ollama — ADAPTER instruction', u: 'https://ollama.readthedocs.io/en/modelfile' }],
      rel: ['8.1', '8.5', '8.3'],
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
        s += '<g id="c82-fit">' + F.g(F.path('M562,200 h40 v10 h12 v-10 h40 v40 h-92 z', { fill: '#fff' }) + F.path('M562,248 h40 v-10 h12 v10 h40', { stroke: F.C.mag }) +
          F.text(700, 222, '✓ fits', { cls: 'tiny', color: F.C.green }), { note: { en: 'Same architecture, same exact base: the deltas line up with the numbers they were trained against.', zh: '同样的架构、同一个基础模型：增量正好对上它训练时所针对的那些数字。' } }) + '</g>';
        s += '<g id="c82-misfit">' + F.g(F.path('M562,262 h40 v10 h12 v-10 h40 v30 h-92 z', { fill: '#fff', dash: '3 3' }) + F.path('M562,308 h30 v-10 h20 v10 h42', { stroke: F.C.red }) +
          F.text(700, 284, '✗ other base', { cls: 'tiny', color: F.C.red }), { note: { en: 'Different base or architecture: the shapes or the meaning of each number differ, so the adapter breaks or produces nonsense.', zh: '换了基础模型或架构：矩阵形状或每个数字的含义都不同，适配器要么加载失败，要么输出乱码。' } }) + '</g>';
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
      kid_en: "Imagine practising for a spelling test with the same 20 words. **Loss** is like counting how many letters you still get wrong. At first you miss a lot; then the number drops — you’re learning. But if you practise those exact 20 words forever, you can score perfectly just by memorising the sheet, and still fail a new test with different words. That is **overfitting**: training loss near zero while a fresh test (validation) gets worse. And a low score never tells you whether your *writing* is any good — you still have to read it.",
      kid_zh: "想象你在练拼写测验，用的一直是同样的 20 个单词。**损失（loss）**就像数你还拼错了多少个字母。一开始错很多，然后数字下降——你在学习。可如果你一直只练这 20 个词，你可以靠背下整张单子拿满分，换一份新词的测验却照样不及格。这就是**过拟合**：训练损失接近零，新测验（验证集）的成绩反而变差。而且分数低从来不代表你*写得好*——你还是得亲自去读。",
      steps: [
        {"en": "Drag the **training steps** slider all the way to the left. Both lines start high: the model is very surprised by the right answers.", "zh": "把**训练步数**滑杆拖到最左。两条线都从高处开始：模型对正确答案非常“意外”。", "hi": []},
        {"en": "Slide right slowly. The solid line (training loss) drops fast — the model is learning to imitate your examples.", "zh": "慢慢往右拖。实线（训练损失）下降得很快——模型正在学会模仿你的例子。", "hi": []},
        {"en": "Keep going. Watch the dashed line (validation loss — new examples it never trained on). Around the marked point it stops falling and starts rising.", "zh": "继续拖。看虚线（验证损失——它从没训练过的新例子）。到标出的位置附近，它不再下降，反而开始上升。", "hi": []},
        {"en": "That’s **overfitting**: training loss keeps sinking because it’s memorising, while it gets worse on anything new. The best stop is where the dashed line was lowest.", "zh": "这就是**过拟合**：训练损失还在降，是因为它在死记硬背，可对新东西却越来越差。最好的停止点就是虚线最低的地方。", "hi": []},
        {"en": "Remember: loss measures *surprise*, not quality or taste. Even a low number needs you to read the actual outputs.", "zh": "记住：损失衡量的是*意外程度*，不是质量或品味。数字再低，也得亲自读输出。", "hi": []}
      ],
      short_en: '**Loss** is a running measure of **how wrong the model’s next-token predictions are on the training examples** (cross-entropy: how surprised it is by the right token). **Falling** loss means it is learning to imitate the data; **flat** means it isn’t learning; **falling toward zero on a small dataset while validation loss rises** means it is **memorizing (overfitting)**. It does **not** measure quality or taste — you still have to read the outputs.',
      short_zh: '**损失**是一个持续更新的数字，衡量**模型在训练样本上预测下一个 token 错得有多厉害**（交叉熵：对正确 token 有多“意外”）。**下降**说明它在学着模仿数据；**不动**说明没在学；**在小数据集上降到接近零、同时验证损失上升**，说明它在**死记硬背（过拟合）**。它**不衡量**质量或品味——仍要亲自读输出。',
      basis_en: 'Standard definition of training loss (cross-entropy over next tokens), as watched during the Variable Machine training runs in Class 8. The lecture slides were not available; the overfitting reading (training vs. validation loss) follows standard machine-learning practice.',
      basis_zh: '训练损失的标准定义（对下一个 token 的交叉熵），即第 8 课在 Variable Machine 里训练时看到的那个数字。未能看到课堂讲义；“训练损失 vs. 验证损失”判断过拟合，依据的是机器学习的通行做法。',
      links: [{ t: '3Blue1Brown — neural networks (cost & gradient descent)', u: 'https://www.3blue1brown.com/lessons/neural-networks' }],
      rel: ['3.1', '8.2', '8.4'],
      widget: {
        html() {
          return `<div class="w-ctrl"><label><span class="en">training steps</span><span class="zh">训练步数</span> <input type="range" min="1" max="100" value="60"></label><span class="w-out"></span></div><div class="w-svg"></div><div class="w-readout"></div>`;
        },
        mount(el) {
          const C = F.C, inp = el.querySelector('input'), out = el.querySelector('.w-out'), box = el.querySelector('.w-svg'), rd = el.querySelector('.w-readout');
          const X0 = 80, X1 = 560, Y0 = 270, Y1 = 40, MAX = 3.2;
          const L = s => 0.35 + 2.65 * Math.exp(-s / 17);
          const V = s => 0.72 + 2.4 * Math.exp(-s / 15) + 0.00022 * Math.max(0, s - 34) ** 2;
          const px = s => X0 + (X1 - X0) * s / 100, py = v => Y0 - (Y0 - Y1) * v / MAX;
          let best = 1; for (let s = 1; s <= 100; s++) if (V(s) < V(best)) best = s;
          function draw() {
            const S = +inp.value; let s = '';
            s += F.line(X0, Y0, X1 + 10, Y0, { arrow: true }) + F.line(X0, Y0, X0, Y1 - 10, { arrow: true });
            for (let i = 1; i <= 3; i++) s += F.line(X0, py(i), X1, py(i), { stroke: '#e6e3dc', sw: .7 });
            s += F.text(X1, Y0 + 22, 'STEPS →', { anchor: 'end', cls: 'tiny', color: C.mute }) + F.text(X0 - 10, Y1 - 2, 'LOSS', { anchor: 'end', cls: 'tiny', color: C.mute }) + F.sub(X0 - 10, Y1 + 14, '损失', { anchor: 'end' });
            const curve = (f, n) => { let d = ''; for (let k = 1; k <= n; k++) d += (k === 1 ? 'M' : 'L') + px(k).toFixed(1) + ',' + py(f(k)).toFixed(1); return d; };
            s += F.g(F.path(curve(L, S), { sw: 2 }), { tip: 'c8_loss' });
            s += F.g(F.path(curve(V, S), { sw: 1.6, stroke: C.red, dash: '6 4' }), { tip: 'c8_validation' });
            s += `<circle cx="${px(S)}" cy="${py(L(S))}" r="4" fill="${C.ink}"/><circle cx="${px(S)}" cy="${py(V(S))}" r="4" fill="${C.red}"/>`;
            if (S > best + 3) s += F.line(px(best), Y0, px(best), Y1 + 6, { stroke: C.green, dash: '3 3', sw: .9 }) + F.text(px(best) + 6, Y1 + 14, 'BEST STOP', { anchor: 'start', cls: 'tiny', color: C.green }) + F.sub(px(best) + 6, Y1 + 29, '最佳停止点', { anchor: 'start' });
            s += F.text(600, 80, 'TRAINING', { anchor: 'start', cls: 'tiny' }) + F.text(690, 80, L(S).toFixed(2), { anchor: 'start', cls: 'mono' });
            s += F.text(600, 106, 'VALIDATION', { anchor: 'start', cls: 'tiny', color: C.red }) + F.text(690, 106, V(S).toFixed(2), { anchor: 'start', cls: 'mono', color: C.red });
            s += F.sub(600, 124, '训练 / 验证损失', { anchor: 'start' });
            box.innerHTML = F.svg(760, 300, s, { label: 'loss curves explorer' });
            out.textContent = `step ${S}`;
            let en, zh;
            if (S < 12) { en = 'Loss is falling fast: the model is quickly getting less surprised by your examples — it is learning.'; zh = '损失在快速下降：模型对你的样本越来越不“意外”——它在学习。'; }
            else if (S <= best + 3) { en = 'Both losses are still going down together: learning the pattern, not just the examples.'; zh = '两条损失线还在一起下降：学到的是规律，而不只是样本。'; }
            else { en = `Training loss keeps falling but validation loss has turned up since ≈ step ${best}: the model is memorizing (overfitting). Stop at the green line — and still read the outputs; low loss ≠ good taste.`; zh = `训练损失还在降，但验证损失从约第 ${best} 步开始回升：模型在死记硬背（过拟合）。应在绿线处停——而且仍要读输出；损失低 ≠ 有品味。`; }
            rd.innerHTML = `<span class="en">${en}</span> <span class="zh">${zh}</span>`;
          }
          inp.addEventListener('input', draw); draw();
        }
      },
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
      kid_en: "Two ways a teacher can help you write better. One: the teacher hands you a model essay and says “write like this” — you copy the example. That is training on **examples**. Two: the teacher puts two of your drafts side by side and says “this one is better than that one” — no perfect answer, just a choice. Do that many times and you learn what the teacher likes. That is training on **chosen/rejected pairs**. The data in the second case isn’t essays to copy — it’s a long record of someone’s *judgment and taste*.",
      kid_zh: "老师帮你提高写作有两种方法。第一种：老师给你一篇范文，说“照这样写”——你模仿例子。这就是用**例子**训练。第二种：老师把你的两篇草稿并排放着，说“这篇比那篇好”——没有标准答案，只有一个选择。这样重复很多次，你就学会了老师喜欢什么。这就是用**选中/拒绝的成对数据**训练。第二种情况下，数据不是供你抄写的作文，而是一长串记录下来的某个人的*判断和品味*。",
      steps: [
        {"en": "Left: training on an **example**. One prompt, one target answer — the model learns “answer like THIS.”", "zh": "左边：用**例子**训练。一个提示，一个目标回答——模型学的是“照这样回答”。", "hi": ["c8_sft"]},
        {"en": "Right: the same prompt, but now with **two** answers.", "zh": "右边：同一个提示，但现在有**两个**回答。", "hi": ["c8_pair"]},
        {"en": "A person picked this one: **chosen** (green).", "zh": "一个人选了这个：**选中**（绿色）。", "hi": ["c84-chosen"]},
        {"en": "…and ranked this one lower: **rejected** (red). It isn’t terrible — just less preferred.", "zh": "……并把这个排在后面：**拒绝**（红色）。它并不差——只是不那么被喜欢。", "hi": ["c84-rejected"]},
        {"en": "The model learns the *direction* between them: “more like this, less like that.” So the data is rows of {prompt, chosen, rejected} — a record of human taste.", "zh": "模型学的是两者之间的*方向*：“多像这个，少像那个。”所以数据是一行行 {提示, 选中, 拒绝}——记录下来的人类品味。", "hi": ["c8_pair"]}
      ],
      short_en: 'Training on **examples** (SFT) shows the model **one target answer to imitate**: it learns “answer like this.” Training on **chosen/rejected pairs** (DPO, or RLHF’s reward model) shows **two answers to the same prompt** and pushes the chosen one **up relative to** the rejected one: it learns **what to prefer**, not what to copy. The data is rows of **{prompt, chosen, rejected}** — a **record of human judgment and taste**.',
      short_zh: '用**例子**训练（SFT）给模型**一个要模仿的目标回答**：它学的是“照这样答”。用**选中/拒绝对**训练（DPO，或 RLHF 里的奖励模型）给出**同一提示的两个回答**，把选中的那个**相对于**被拒绝的推高：它学的是**更偏好什么**，而不是照抄什么。数据是一行行 **{提示, 选中, 拒绝}**——是**人的判断与品味的记录**。',
      basis_en: 'Checked against Rafailov et al., “Direct Preference Optimization: Your Language Model Is Secretly a Reward Model” (NeurIPS 2023): the policy is optimized directly on preference pairs, with no separate reward model; and Ouyang et al. (InstructGPT) for RLHF: SFT on demonstrations, then a reward model trained on human comparisons. In Variable Machine this is changing a model “with taste.”',
      basis_zh: '已对照 Rafailov 等人《Direct Preference Optimization》（NeurIPS 2023）核对：直接在偏好对上优化模型，无需单独的奖励模型；RLHF 部分对照 Ouyang 等人（InstructGPT）：先用示范做 SFT，再用人类比较数据训练奖励模型。在 Variable Machine 里，这就是“用品味”改变模型。',
      links: [{ t: 'Rafailov et al. — Direct Preference Optimization', u: 'https://proceedings.neurips.cc/paper_files/paper/2023/hash/a85b405ed65c6477a4fe8302b5e06ce7-Abstract.html' }, { t: 'Ouyang et al. — InstructGPT (RLHF)', u: 'https://arxiv.org/abs/2203.02155' }],
      rel: ['8.3', '4.4', '5.5'],
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
        s += '<g id="c84-chosen">' + card(420, 150, 145, 62, '✓ CHOSEN · 选中', 'Salt light…', { fill: F.C.greenF, stroke: F.C.green, kc: F.C.green, vc: F.C.green, note: { en: 'The answer a person preferred.', zh: '人更喜欢的那个回答。' } }) + '</g>';
        s += '<g id="c84-rejected">' + card(575, 150, 145, 62, '✗ REJECTED · 拒绝', 'The sea is…', { fill: F.C.redF, stroke: F.C.red, kc: F.C.red, vc: F.C.red, note: { en: 'A plausible answer a person ranked lower.', zh: '一个说得过去、但被人排在后面的回答。' } }) + '</g>';
        s += F.text(570, 232, '“THIS, more than THAT”', { cls: 'tiny', color: F.C.mag }) + F.sub(570, 248, '学的是：两者之间的差别', { anchor: 'middle' });
        s += F.line(380, 70, 380, 250, { stroke: F.C.mute, dash: '3 4', sw: .8 });
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
      kid_en: "Mix blue paint and yellow paint half-and-half and you get green — not a half-blue, half-yellow stripe. **Blending two adapters at t = 0.5** works like that: every number in the model becomes exactly halfway between adapter A’s number and adapter B’s. The result might be a cool mix of both styles, one style might win, or it might come out muddy, so you have to try it and look. And who painted that green? Nobody mixed it by hand on purpose — the credit is shared by whoever made the blue, whoever made the yellow, and whoever chose to stir them half-and-half.",
      kid_zh: "把蓝色颜料和黄色颜料一半一半地混合，你得到的是绿色——不是一半蓝、一半黄的条纹。**以 t = 0.5 混合两个适配器**就是这样：模型里的每个数字都正好变成 A 和 B 对应数字的中间值。结果可能是两种风格的有趣混合，可能其中一种占上风，也可能变得一团糟，所以得亲自试、亲自看。那么这片绿色是谁画的？没有人刻意亲手调出它——功劳分散在做蓝颜料的人、做黄颜料的人，以及决定“一半一半”去搅拌的那个人身上。",
      steps: [
        {"en": "Adapter **A** learned poems; adapter **B** learned instruction manuals. Both were trained on the same base model.", "zh": "适配器 **A** 学的是诗；适配器 **B** 学的是说明书。两者都基于同一个基础模型训练。", "hi": []},
        {"en": "Drag **t** to 0: you get pure A. Drag it to 1: pure B. Watch the sample output change style.", "zh": "把 **t** 拖到 0：完全是 A。拖到 1：完全是 B。看示例输出的风格怎么变化。", "hi": []},
        {"en": "Set **t = 0.5**. Look at the formula: each number is (1 − t)·A + t·B — exactly the midpoint, like mixing paint.", "zh": "把 **t** 设为 0.5。看公式：每个数字都是 (1 − t)·A + t·B——正好是中点，就像调颜料。", "hi": []},
        {"en": "The output sits somewhere between poem and manual — but a model isn’t a straight line, so you must read it to know if it’s a nice mix or mush.", "zh": "输出落在“诗”和“说明书”之间——但模型不是一条直线，所以必须读一读，才知道是好的混合还是一团糟。", "hi": []},
        {"en": "Who wrote it? Read the line under the slider: the people behind dataset A and B, the base model’s makers, and whoever turned the dial.", "zh": "谁写的？看滑杆下面那一行：数据集 A 和 B 背后的人、基础模型的作者，以及转动旋钮的人。", "hi": []}
      ],
      short_en: 'Blending is **arithmetic on the weights**: W = (1 − t)·A + t·B, so at **t = 0.5 every number is the exact midpoint** of the two adapters (trained on the same base). The model behaves **somewhere between the two learned behaviors** — a hybrid, one style dominating, or mush — because the network is not linear, so you must read the outputs. **No one wrote the result directly**: authorship is **distributed** across the people behind datasets A and B, the base model’s makers and its data, and **whoever chose the adapters and t**.',
      short_zh: '混合就是**对权重做算术**：W = (1 − t)·A + t·B，所以 **t = 0.5 时每个数字都是两个适配器（同一基础模型）的正中点**。模型的表现**介于两种学到的行为之间**——可能是混血、一方占上风，或者一团糊——因为网络不是线性的，必须读输出才知道。**没有人直接写出结果**：作者身份**分散**在数据集 A 和 B 背后的人、基础模型的制作者及其数据，以及**选了适配器和 t 的那个人**身上。',
      basis_en: 'A linear merge of adapter weights, as in Variable Machine’s blend control (LoRA adapters on the same base, Hu et al.). That outputs do not mix linearly follows from the network being non-linear. “Who wrote it?” is the course’s framing — there is no single correct author; argue the distribution.',
      basis_zh: '这是对适配器权重的线性合并，就像 Variable Machine 的混合滑杆（同一基础模型上的 LoRA 适配器，见 Hu 等人）。输出不会线性混合，是因为网络本身是非线性的。“谁写的？”是课程的提问方式——没有唯一正确的作者，要论证作者身份是分散的。',
      links: [{ t: 'Hu et al. — LoRA (2021)', u: 'https://arxiv.org/abs/2106.09685' }],
      rel: ['8.2', '8.4', 'C5'],
      widget: {
        html() {
          return `<div class="w-ctrl"><label>t <input type="range" min="0" max="1" step="0.05" value="0.5"></label><span class="w-out"></span><span style="color:var(--mute)"><span class="en">A = poems · B = manuals (illustrative outputs)</span> <span class="zh">A = 诗 · B = 说明书（示意输出）</span></span></div><div class="w-svg"></div><div class="w-readout"></div>`;
        },
        mount(el) {
          const C = F.C, inp = el.querySelector('input'), out = el.querySelector('.w-out'), box = el.querySelector('.w-svg'), rd = el.querySelector('.w-readout');
          const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
          const mix = (a, b, t) => '#' + hex(a).map((v, i) => Math.round(v + (hex(b)[i] - v) * t).toString(16).padStart(2, '0')).join('');
          const A = [0.82, -0.10, 0.35], B = [0.20, 0.64, -0.41];
          const OUT = [
            [0.15, 'Salt light folds over the shore; the tide keeps its own time.', '盐色的光在岸边折叠；潮水守着自己的时辰。'],
            [0.4, 'Salt light folds the shore. First the tide, then the hush.', '盐色的光折叠海岸。先是潮水，然后是寂静。'],
            [0.6, 'Step 1: Let the salt light fold. Step 2: Wait for the hush of the tide.', '第一步：让盐色的光折叠。第二步：等待潮水的寂静。'],
            [0.85, 'Step 1: Observe the tide. Step 2: Note the light on the water.', '第一步：观察潮水。第二步：记录水面的光。'],
            [1.01, 'Step 1: Check the tide table. Step 2: Record the water level.', '第一步：查潮汐表。第二步：记录水位。']
          ];
          function draw() {
            const t = +inp.value; let s = '';
            const pl = (ox, oy, fill, side, pc, pattern) => { F.setIso(15, ox, oy); return F.plate({ x: 0, y: 0, w: 4, d: 4, t: 0.25, fill, side, pc, pattern, density: 5 }); };
            const op = (w) => `opacity:${(0.25 + 0.75 * w).toFixed(2)}`;
            s += `<g style="${op(1 - t)}">` + pl(110, 40, C.blueF, '#d5def7', C.blue, 'hatch') + F.text(110, 162, 'ADAPTER A', { cls: 'lt', color: C.blue }) + F.sub(110, 178, '适配器 A · 诗', { anchor: 'middle' }) + '</g>';
            s += `<g style="${op(t)}">` + pl(650, 40, C.redF, '#f3d0d2', C.red, 'diag') + F.text(650, 162, 'ADAPTER B', { cls: 'lt', color: C.red }) + F.sub(650, 178, '适配器 B · 说明书', { anchor: 'middle' }) + '</g>';
            const mc = mix(C.blue, C.red, t), mf = mix(C.blueF, C.redF, t);
            s += F.g(pl(380, 26, mf, mf, mc, t < 0.25 ? 'hatch' : t > 0.75 ? 'diag' : 'cross') + F.text(380, 148, `BLEND t = ${t.toFixed(2)}`, { cls: 'lt', color: mc }), { tip: 'c8_merge' });
            s += F.arrow(185, 95, 290, 85, { stroke: C.blue }) + F.arrow(575, 95, 470, 85, { stroke: C.red });
            // formula with live numbers
            s += F.text(380, 176, 'W = (1 − t)·A + t·B', { cls: 'mono' });
            A.forEach((a, i) => {
              const w = (1 - t) * a + t * B[i], y = 200 + i * 18;
              s += `<text x="230" y="${y}" class="mono" fill="${C.blue}" text-anchor="end">a${i + 1} ${a.toFixed(2)}</text>` +
                `<text x="380" y="${y}" class="mono" fill="${mc}" text-anchor="middle">→ ${w.toFixed(3)}</text>` +
                `<text x="530" y="${y}" class="mono" fill="${C.red}">b${i + 1} ${B[i].toFixed(2)}</text>`;
            });
            box.innerHTML = F.svg(760, 260, s, { label: 'adapter blend explorer' });
            out.textContent = `t = ${t.toFixed(2)}`;
            const o = OUT.find(x => t < x[0]);
            const who_en = t === 0 ? 'only dataset A’s authors (plus the base model)' : t === 1 ? 'only dataset B’s authors (plus the base model)' : 'both datasets’ authors, the base model’s makers and data, and you — who chose t';
            const who_zh = t === 0 ? '只有数据集 A 的作者（加上基础模型）' : t === 1 ? '只有数据集 B 的作者（加上基础模型）' : '两个数据集的作者、基础模型的制作者及其数据，还有选了 t 的你';
            rd.innerHTML = `<span class="en">Sample output: <b>“${o[1]}”</b> · Every weight is ${Math.round((1 - t) * 100)}% A + ${Math.round(t * 100)}% B. Who wrote it? ${who_en}.</span> <span class="zh">示例输出：<b>“${o[2]}”</b> · 每个权重 = ${Math.round((1 - t) * 100)}% A + ${Math.round(t * 100)}% B。谁写的？${who_zh}。</span>`;
          }
          inp.addEventListener('input', draw); draw();
        }
      },
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
