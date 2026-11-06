/* CLASS 3 · LABOR, LLMS AND NEURAL NETWORKS */
defTerms({
  c3_neuron: { en: 'Neuron', zh: '神经元',
    d_en: '3Blue1Brown: “a thing that holds a number” — its activation, usually between 0 and 1.',
    d_zh: '3Blue1Brown：“一个装着数字的东西”——这个数字就是它的激活值，通常在 0 到 1 之间。' },
  c3_layer: { en: 'Layer', zh: '层',
    d_en: 'A column of neurons. Input layer (the raw data, e.g. pixels) → hidden layers → output layer (the answer, e.g. which digit).',
    d_zh: '一列神经元。输入层（原始数据，如像素）→ 隐藏层 → 输出层（答案，如是哪个数字）。' },
  c3_weight: { en: 'Weight', zh: '权重',
    d_en: 'The strength of one connection between a neuron and a neuron in the previous layer. Positive weights excite, negative weights inhibit. Learning = changing weights.',
    d_zh: '某个神经元与上一层某个神经元之间连接的强度。正权重是“促进”，负权重是“抑制”。学习＝调整权重。' },
  c3_bias: { en: 'Bias', zh: '偏置',
    d_en: 'A number added to the weighted sum — how easily the neuron lights up, its threshold.',
    d_zh: '加到加权和上的一个数——决定这个神经元多容易“亮起来”，相当于阈值。' },
  c3_activation: { en: 'Activation', zh: '激活值 / 激活函数',
    d_en: 'The number a neuron outputs. It is computed by squashing the weighted sum through a function such as sigmoid or ReLU.',
    d_zh: '神经元输出的数字。它是把加权和送进 sigmoid 或 ReLU 等函数“压缩”之后得到的。' },
  c3_relu: { en: 'Sigmoid / ReLU', zh: 'Sigmoid / ReLU',
    d_en: 'Squashing functions. Sigmoid maps any number into 0–1; ReLU = max(0, x). They make the network non-linear, so it can learn curves, not just straight lines.',
    d_zh: '“压缩”函数。Sigmoid 把任何数映射到 0–1；ReLU = max(0, x)。它们让网络变成非线性的，能学曲线而不只是直线。' },
  c3_playground: { en: 'TensorFlow Playground', zh: 'TensorFlow Playground',
    d_en: 'A browser toy where you add layers and neurons and watch a small network learn to draw a boundary between dots.',
    d_zh: '一个浏览器里的小工具：你可以增加层和神经元，看着小网络学会在两类点之间“画”出一条边界。' },
  c3_token: { en: 'Token', zh: '词元（Token）',
    d_en: 'The unit a language model reads and writes: a chunk of text — a whole word, part of a word, punctuation or a space — each mapped to an integer ID.',
    d_zh: '语言模型读写的单位：一小段文本——整个词、词的一部分、标点或空格——每一段都对应一个整数编号。' },
  c3_tokenizer: { en: 'Tokenizer', zh: '分词器',
    d_en: 'The program that splits text into tokens using a fixed vocabulary learned from data (e.g. byte-pair encoding). Different models use different tokenizers.',
    d_zh: '用一套从数据中学来的固定词表（如字节对编码 BPE）把文本切成词元的程序。不同模型使用不同的分词器。' },
  c3_vocab: { en: 'Vocabulary', zh: '词表',
    d_en: 'The fixed list of all tokens a model knows — typically 30,000 to 200,000 entries. Every token is one row in this list.',
    d_zh: '模型认识的所有词元的固定列表——通常有 3 万到 20 万条。每个词元就是这张表里的一行。' },
  c3_context: { en: 'Context window', zh: '上下文窗口',
    d_en: 'How many tokens a model can look at at once — its short-term memory. Limits and prices are counted in tokens, not words.',
    d_zh: '模型一次能“看见”多少词元——它的短期记忆。上限和价格都按词元而不是按单词计算。' },
  c3_embedding: { en: 'Embedding', zh: '嵌入（向量）',
    d_en: 'A list of numbers (a vector, often hundreds of dimensions) that places a token or word as a point in space. It is learned from how the word is used.',
    d_zh: '一串数字（一个向量，常有几百维），把一个词元或单词放到空间里的某个点上。它是从这个词的用法中学来的。' },
  c3_vector_space: { en: 'Vector space', zh: '向量空间',
    d_en: 'The high-dimensional space where embeddings live. Distance and direction in it carry meaning.',
    d_zh: '嵌入所在的高维空间。在这里，距离和方向都携带意义。' },
  c3_distributional: { en: 'Distributional idea', zh: '分布假说',
    d_en: '“You shall know a word by the company it keeps” (J.R. Firth): words used in similar contexts get similar vectors.',
    d_zh: '“观其伴，知其词”（J.R. 弗斯）：在相似语境中使用的词，会得到相似的向量。' },
  c3_projector: { en: 'Embedding Projector', zh: 'Embedding Projector 嵌入投影器',
    d_en: 'Google’s tool that squeezes hundreds of dimensions down to 3D (with PCA, t-SNE or UMAP) so you can fly through word neighborhoods.',
    d_zh: '谷歌的工具，用 PCA、t-SNE 或 UMAP 把几百维压到 3 维，让你可以在词语的“邻里”之间飞来飞去。' },
  c3_slider: { en: 'Autonomy slider', zh: '自主性滑块',
    d_en: 'Karpathy (Software 3.0): a control that lets the user choose how much autonomy the AI gets — from small suggestions to acting on its own. Examples: Cursor, Perplexity, Tesla Autopilot.',
    d_zh: '卡帕西（软件 3.0）：让用户自己选择给 AI 多少自主权的控件——从小建议到独立行动。例子：Cursor、Perplexity、特斯拉 Autopilot。' },
  c3_ironman: { en: 'Iron Man suit', zh: '钢铁侠战衣',
    d_en: 'Karpathy’s analogy: the best AI products are suits that both augment a human (Tony drives) and can act autonomously — build more augmentation than robots, for now.',
    d_zh: '卡帕西的比喻：最好的 AI 产品像战衣，既能增强人（托尼在驾驶），也能自主行动——现阶段要多做“增强”，少做“机器人”。' },
  c3_gen_verify: { en: 'Generation–verification loop', zh: '生成—验证循环',
    d_en: 'AI generates, the human verifies. Karpathy: make this loop fast, make verification easy, keep the AI “on a leash.”',
    d_zh: 'AI 负责生成，人负责验证。卡帕西：让这个循环转得快、让验证变容易、给 AI “拴上绳子”。' },
  c3_software3: { en: 'Software 3.0', zh: '软件 3.0',
    d_en: 'Karpathy: 1.0 = code you write, 2.0 = neural-network weights, 3.0 = prompts in English that program an LLM.',
    d_zh: '卡帕西：1.0＝你写的代码，2.0＝神经网络的权重，3.0＝用英语写的、给大模型编程的提示词。' },
  c3_anatomy: { en: 'Anatomy of an AI System', zh: '《AI 系统解剖图》',
    d_en: 'Kate Crawford & Vladan Joler (2018): a giant map tracing everything one Amazon Echo request depends on — minerals, labor, data and computation across the planet.',
    d_zh: '凯特·克劳福德与弗拉丹·约勒（2018）：一张巨大的地图，追踪一次亚马逊 Echo 语音请求所依赖的一切——遍布全球的矿物、劳动、数据和计算。' },
  c3_extractivism: { en: 'Extractivism', zh: '攫取主义',
    d_en: 'Mezzadra & Neilson’s term used by Crawford & Joler: AI is built by extracting materials from the earth, labor from people and data from users.',
    d_zh: '克劳福德与约勒借用梅扎德拉和尼尔森的术语：AI 靠从地球提取材料、从人身上提取劳动、从用户身上提取数据而建成。' },
  c3_digital_labor: { en: 'Digital labor', zh: '数字劳动',
    d_en: 'Following Fuchs: the embodied work of building and maintaining the digital stack — from mining and assembly to data labeling, content moderation and waste cleanup.',
    d_zh: '沿用福克斯的说法：建造和维护数字技术栈的“有身体的”劳动——从采矿、组装，到数据标注、内容审核和电子垃圾处理。' },
  c3_pyramid: { en: 'Fractal pyramid of value extraction', zh: '价值攫取的分形金字塔',
    d_en: 'Crawford & Joler: a pyramid with a billionaire at the top and mines, waste lakes, shipping containers and factory dormitories at the base — repeated at every scale.',
    d_zh: '克劳福德与约勒：顶端是亿万富翁，底层是矿山、废料湖、集装箱和工厂宿舍的金字塔——在每个尺度上重复出现。' }
});

defClass({
  order: 3, n: '3',
  t_en: 'Labor, LLMs and Neural Networks', t_zh: '劳动、大语言模型与神经网络',
  intro_en: 'How does a machine “read”? This class opens the model — layers of numbers, tokens, embeddings — and then zooms all the way out to the mines, factories and workers that every AI request quietly depends on.',
  intro_zh: '机器是怎么“阅读”的？这一课先打开模型——一层层数字、词元、嵌入——然后一直拉远镜头，看到每一次 AI 请求背后默默依赖的矿山、工厂和劳动者。',
  qs: [
    {
      id: '3.1', t_en: 'Neural network', t_zh: '神经网络',
      q_en: 'Layers, weights, activations: in your own words, what does one layer do to the layer before it?',
      q_zh: '层、权重、激活值：用你自己的话说，一层对它前面那一层做了什么？',
      src: '3Blue1Brown; TensorFlow Playground',
      fig() {
        const S = 18, n = 4, gap = 3.2;
        const L = [
          { label: 'Output layer', sub: '输出层：是哪个数字？', tip: 'c3_layer', pattern: null, fill: '#fff', nodes: 3, hiNode: 1 },
          { label: 'Hidden layer 2', sub: '隐藏层 2：组合成部件', tip: 'c3_activation', pattern: null, fill: '#fff', nodes: 4 },
          { label: 'Hidden layer 1', sub: '隐藏层 1：边缘、笔画', tip: 'c3_activation', pattern: null, fill: '#fff', nodes: 4 },
          { label: 'Input layer · pixels', sub: '输入层：像素亮度', tip: 'c3_neuron', pattern: 'grid', density: 6, fill: '#fff' }
        ];
        const W = 4;
        const pts = k => {
          const m = L[k].nodes; if (!m) return [];
          return Array.from({ length: m }, (_, i) => [W * (i + 1) / (m + 1), W / 2]);
        };
        L.forEach((Ly, k) => {
          const zb = (n - 2 - k) * gap; // z of layer below
          Ly.extra = z => {
            let e = '';
            const me = pts(k);
            const below = k === n - 1 ? [] : (L[k + 1].nodes ? pts(k + 1) : [[0.8, 2], [1.6, 1.2], [2.4, 2.8], [3.2, 2]]);
            if (below.length) me.forEach(([x, y], i) => below.forEach(([bx, by], j) => {
              const a = F.iso(x, y, z + 0.18), b = F.iso(bx, by, zb + 0.18);
              const pos = (i + j) % 3 !== 0;
              e += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${pos ? F.C.blue : F.C.red}" stroke-width="${0.4 + ((i * 3 + j) % 4) * 0.35}" opacity=".55"/>`;
            }));
            me.forEach(([x, y], i) => {
              const p = F.iso(x, y, z + 0.18); const on = k === 0 ? i === Ly.hiNode : (i + k) % 2 === 0;
              e += `<ellipse cx="${p[0]}" cy="${p[1]}" rx="7" ry="4" fill="${on ? F.C.mag : '#fff'}" stroke="${F.C.ink}" stroke-width="1"/>`;
            });
            return e;
          };
        });
        const o = { gap, scale: S, alternate: true, W: 760 };
        let s = F.stack(L, o);
        s += F.g(F.rect(20, 20, 210, 74, { fill: '#1b1b1a', stroke: '#1b1b1a', rx: 6 }) +
          F.text(125, 46, 'a′ = σ( W·a + b )', { cls: 'big', color: '#f3f2ee' }) +
          F.text(125, 72, 'weights · bias · squash', { cls: 'tiny', color: '#aaa' }),
          { note: { en: 'Each new activation = squash(weighted sum of ALL previous activations + bias). W is the weight matrix, b the biases, σ a function like sigmoid or ReLU.', zh: '每个新激活值 = 压缩（上一层所有激活值的加权和 + 偏置）。W 是权重矩阵，b 是偏置，σ 是 sigmoid 或 ReLU 之类的函数。' } });
        s += F.g(F.line(600, 40, 630, 40, { stroke: F.C.blue, sw: 2 }) + F.text(638, 44, '+ weight', { anchor: 'start', cls: 'tiny', color: F.C.blue }) +
          F.line(600, 60, 630, 60, { stroke: F.C.red, sw: 2 }) + F.text(638, 64, '− weight', { anchor: 'start', cls: 'tiny', color: F.C.red }), { tip: 'c3_weight' });
        return F.svg(760, F.stackH(4, { gap, scale: S }), s, { label: 'exploded neural network layers' });
      },
      cap_en: 'A digit-recognizing network pulled apart into its layers. Every line is a weight (blue excites, red inhibits); every dot is a neuron holding an activation. Magenta dots are “lit up.”',
      cap_zh: '把一个识别手写数字的网络按层拆开。每条线都是一个权重（蓝色促进，红色抑制）；每个点都是一个装着激活值的神经元。品红色的点表示“被点亮”。',
      a_en: `In 3Blue1Brown’s picture, a [[c3_neuron]] is just something that holds a number — its [[c3_activation]]. A [[c3_layer]] is a column of these numbers, and the network is a chain of layers from input (pixel brightness) to output (which digit it is).

**What one layer does to the layer before it:** every neuron in the new layer **looks at all the activations of the previous layer, multiplies each by a [[c3_weight]], adds them up, adds a [[c3_bias]], and squashes the result** through a function like [[c3_relu]]. That number is its own activation. (As a formula: a′ = σ(W·a + b).)

In my own words: each layer **re-describes** the layer before it. Weights decide which earlier features matter and whether they push up or down; the bias sets how much evidence is needed before the neuron “lights up.” So a pattern of pixels becomes a pattern of edges, which becomes a pattern of loops and strokes, which becomes “7.” Training doesn’t write rules — it nudges thousands of weights until the right outputs light up. In [[c3_playground]] you can watch this: add a layer and the boundary the network draws can bend into more complex shapes.`,
      a_zh: `在 3Blue1Brown 的讲法里，[[c3_neuron]]就是一个装着数字的东西——这个数字是它的[[c3_activation]]。一个[[c3_layer]]就是一列这样的数字，整个网络是一串从输入（像素亮度）到输出（是哪个数字）的层。

**一层对前一层做了什么：**新一层里的每个神经元都会**看前一层所有的激活值，把每一个乘上一个[[c3_weight]]，全部加起来，再加上一个[[c3_bias]]，然后把结果送进 [[c3_relu]] 之类的函数里“压缩”**。得到的数就是它自己的激活值。（公式：a′ = σ(W·a + b)。）

用我自己的话说：每一层都在**重新描述**前一层。权重决定前一层的哪些特征重要、是往上推还是往下压；偏置决定需要多少“证据”这个神经元才会“亮起来”。于是像素的图案变成边缘的图案，再变成圆圈和笔画的图案，最后变成“7”。训练不是在写规则，而是微调成千上万个权重，直到正确的输出亮起来。在 [[c3_playground]] 里可以亲眼看到：多加一层，网络画出的边界就能弯成更复杂的形状。`,
      hook_en: 'Each layer = weighted sum of the last layer + bias, squashed. It turns one description into a more abstract one.',
      hook_zh: '每一层＝上一层的加权和 + 偏置，再压缩。它把一种描述变成更抽象的描述。',
      trap_en: 'Use all three words from the question (layers, weights, activations) and say what each does. “Learning” = adjusting weights.',
      trap_zh: '题目里的三个词（层、权重、激活值）都要用上，并说清各自的作用。“学习”＝调整权重。'
    },
    {
      id: '3.2', t_en: 'Token / tokenizer', t_zh: '词元 / 分词器',
      q_en: 'What is a token, and why does the model see your sentence as tokens rather than words?',
      q_zh: '什么是词元（token）？为什么模型把你的句子看成词元，而不是单词？',
      src: 'tokenizer playground',
      fig() {
        let s = '';
        s += F.text(20, 34, 'YOUR SENTENCE', { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.sub(118, 34, '你的句子');
        s += F.text(20, 66, 'Unbelievably, ChatGPT can’t count r’s in strawberry!', { anchor: 'start', cls: 'mono', color: F.C.ink });
        const toks = ['Un', 'bel', 'iev', 'ably', ',', ' Chat', 'G', 'PT', ' can', '’t', ' count', ' r', '’s', ' in', ' str', 'aw', 'berry', '!'];
        const ids = [1844, 6667, 11203, 2845, 11, 13149, 38, 2898, 649, 1431, 1797, 436, 753, 304, 610, 675, 15717, 0];
        const cols = [[F.C.blueF, F.C.blue], [F.C.greenF, F.C.green], [F.C.amberF, F.C.amber], [F.C.redF, F.C.red], [F.C.magF, F.C.mag]];
        let x = 20, y = 120, row = '';
        toks.forEach((t, i) => {
          const w = Math.max(24, t.length * 8.4 + 12);
          if (x + w > 740) { x = 20; y += 74; }
          const [f, c] = cols[i % 5];
          row += F.rect(x, y, w, 28, { fill: f, stroke: c, rx: 4, text: t.replace(/ /g, '·'), tcls: 'mono', tcolor: F.C.ink });
          row += F.text(x + w / 2, y + 46, String(ids[i]), { cls: 'tiny', color: F.C.mute });
          x += w + 6;
        });
        s += F.g(row, { tip: 'c3_token' });
        s += F.text(20, 100, 'TOKENS (· = space)', { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.sub(160, 100, '词元（· 表示空格）');
        s += F.g(F.text(20, 270, 'IDS → the only thing the model sees', { anchor: 'start', cls: 'lt' }) + F.sub(20, 287, '编号 → 模型唯一能看到的东西 （示意编号）'), { tip: 'c3_vocab' });
        s += F.g(F.rect(470, 248, 270, 50, { fill: '#1b1b1a', rx: 6 }) + F.text(605, 270, '18 tokens  ≈  8 words', { cls: 'mono', color: '#f3f2ee' }) + F.text(605, 288, 'limits & prices count tokens', { cls: 'tiny', color: '#aaa' }), { tip: 'c3_context' });
        return F.svg(760, 310, s, { label: 'a sentence split into tokens' });
      },
      cap_en: 'A tokenizer cuts the sentence into chunks from its fixed vocabulary and swaps each chunk for a number. Notice “strawberry” never appears as letters — which is why models are bad at counting r’s. (IDs are illustrative.)',
      cap_zh: '分词器用它固定的词表把句子切成小块，再把每块换成一个编号。注意 “strawberry” 从来没有以字母的形式出现——这就是模型数不清里面有几个 r 的原因。（编号为示意。）',
      a_en: `A [[c3_token]] is the basic unit a language model reads and writes: a chunk of text — sometimes a whole word (“ count”), sometimes part of a word (“Un” + “believ” + “ably”), a punctuation mark, or a word with its leading space. A [[c3_tokenizer]] splits text using a fixed [[c3_vocab|vocabulary]] learned from data, and replaces each token with an **integer ID**. The model never sees letters or words — only this list of numbers (which it then turns into embeddings).

**Why tokens rather than words:**
- **A neural network can only take numbers**, from a fixed, finite list. A word list could never be complete — new words, names, typos, slang, code, emoji, other languages.
- **Sub-word pieces cover everything:** any new word can be built from smaller known pieces, so nothing is “out of vocabulary,” while common words stay one token for efficiency.
- It keeps the vocabulary a manageable size (tens of thousands) and the sequences reasonably short.

What you notice in the tokenizer playground: one word ≠ one token (roughly ¾ of a word per token in English, more tokens for Chinese or other languages), spaces and capitals change the split, and the model’s [[c3_context]] and prices are counted in tokens. It also explains odd failures, like miscounting the r’s in “strawberry”: the model sees “str|aw|berry,” not letters.`,
      a_zh: `[[c3_token]]是语言模型读写的基本单位：一小段文本——有时是一个完整的词（“ count”），有时是词的一部分（“Un”+“believ”+“ably”），也可能是一个标点，或带着前导空格的词。[[c3_tokenizer]]用一套从数据中学来的固定[[c3_vocab]]切分文本，并把每个词元换成一个**整数编号**。模型从来看不到字母或单词——只看到这一串数字（然后再把数字变成嵌入向量）。

**为什么用词元而不是单词：**
- **神经网络只能接收数字**，而且来自一个固定、有限的列表。单词表永远不可能完整——新词、人名、错别字、俚语、代码、表情符号、其他语言……
- **子词碎片能覆盖一切：**任何新词都能用已知的小碎片拼出来，所以不存在“词表外”的东西；常用词仍然是一个词元，保持高效。
- 让词表保持在可控的规模（几万个），序列长度也不会太长。

在分词器演示里你会注意到：一个词 ≠ 一个词元（英文大约每个词元 ¾ 个词，中文或其他语言会用更多词元）；空格和大小写会改变切法；模型的[[c3_context]]和价格都按词元计算。这也解释了一些奇怪的失误，比如数不对 “strawberry” 里有几个 r：模型看到的是 “str|aw|berry”，而不是字母。`,
      hook_en: 'Model sees: text → tokens → ID numbers. Sub-word pieces mean a fixed vocabulary can spell anything.',
      hook_zh: '模型看到的是：文本 → 词元 → 编号。子词碎片让固定词表能“拼”出任何东西。',
      trap_en: 'Don’t say “a token is a word.” Say chunk / sub-word + number ID, and give a reason (fixed vocabulary, new words, numbers only).',
      trap_zh: '不要写“词元就是一个词”。要写“文本片段/子词 + 编号”，并给出原因（固定词表、新词、只能处理数字）。'
    },
    {
      id: '3.3', t_en: 'Embedding', t_zh: '嵌入',
      q_en: 'What is an embedding, and what does it mean that two words are close in that space?',
      q_zh: '什么是嵌入（embedding）？两个词在那个空间里“距离近”意味着什么？',
      src: 'Embedding Projector',
      fig() {
        let s = '';
        // axes
        s += F.line(60, 300, 720, 300, { stroke: '#cfcbc2' }) + F.line(60, 300, 60, 30, { stroke: '#cfcbc2' });
        s += F.text(720, 318, 'dimension 1', { anchor: 'end', cls: 'tiny', color: F.C.mute }) + F.text(66, 40, 'dimension 2  (of ~768)', { anchor: 'start', cls: 'tiny', color: F.C.mute });
        const clusters = [
          { c: F.C.blue, f: F.C.blueF, en: 'ANIMALS', zh: '动物', pts: [['dog', 140, 90], ['puppy', 172, 70], ['cat', 120, 128], ['kitten', 160, 140]] },
          { c: F.C.green, f: F.C.greenF, en: 'MUSIC', zh: '音乐', pts: [['jazz', 500, 90], ['piano', 540, 120], ['saxophone', 470, 135], ['blues', 540, 74]] },
          { c: F.C.amber, f: F.C.amberF, en: 'CITIES', zh: '城市', pts: [['Paris', 590, 200], ['Tokyo', 640, 222], ['Beijing', 600, 240]] }
        ];
        clusters.forEach(cl => {
          let g = '';
          const xs = cl.pts.map(p => p[1]), ys = cl.pts.map(p => p[2]);
          const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
          g += `<ellipse cx="${cx}" cy="${cy}" rx="${(Math.max(...xs) - Math.min(...xs)) / 2 + 48}" ry="${(Math.max(...ys) - Math.min(...ys)) / 2 + 26}" fill="${cl.f}" stroke="${cl.c}" stroke-dasharray="3 3" opacity=".8"/>`;
          cl.pts.forEach(([w, x, y]) => g += `<circle cx="${x}" cy="${y}" r="3.5" fill="${cl.c}"/>` + F.text(x + 7, y - 6, w, { anchor: 'start', cls: 'mono', color: F.C.ink }));
          g += F.text(cx, cy + (Math.max(...ys) - Math.min(...ys)) / 2 + 42, cl.en, { cls: 'tiny', color: cl.c }) + F.sub(cx, cy + (Math.max(...ys) - Math.min(...ys)) / 2 + 56, cl.zh, { anchor: 'middle' });
          s += F.g(g, { note: { en: `A neighborhood: these words appear in similar sentences, so training pushed their vectors together.`, zh: `一个“街区”：这些词出现在相似的句子里，所以训练把它们的向量推到了一起。` } });
        });
        // close pair callout
        s += F.g(F.line(143, 92, 170, 72, { stroke: F.C.mag, sw: 2 }) + F.label([157, 82], 300, 'CLOSE = USED ALIKE', { color: F.C.mag }) + F.sub(308, 99, '距离近＝用法相似'), { tip: 'c3_distributional' });
        // analogy arrows
        const A = [[250, 230, 'man'], [300, 190, 'woman'], [360, 250, 'king'], [410, 210, 'queen']];
        let an = '';
        A.forEach(([x, y, w]) => an += `<circle cx="${x}" cy="${y}" r="3.5" fill="${F.C.ink}"/>` + F.text(x + 7, y + 14, w, { anchor: 'start', cls: 'mono' }));
        an += F.arrow(252, 228, 296, 193, { stroke: F.C.mag }) + F.arrow(362, 248, 406, 213, { stroke: F.C.mag });
        an += F.text(330, 290, 'same direction = same relation', { cls: 'tiny', color: F.C.mag });
        s += F.g(an, { note: { en: 'Directions carry meaning too: king − man + woman ≈ queen. (Biases in the training text get encoded the same way.)', zh: '方向也有意义：king − man + woman ≈ queen。（训练文本里的偏见也会以同样的方式被编码进去。）' } });
        return F.svg(760, 330, s, { label: '2D projection of word embeddings' });
      },
      cap_en: 'What the Embedding Projector shows, flattened to two dimensions: words become points, and meaning becomes geography.',
      cap_zh: 'Embedding Projector 展示的画面，压平成二维：单词变成了点，意义变成了“地理”。',
      a_en: `An [[c3_embedding]] is a **list of numbers — a vector — that represents a token or word as a point in a high-dimensional [[c3_vector_space]]** (often hundreds or thousands of dimensions). After tokenizing, the model turns each token ID into its embedding; this is where meaning starts. The numbers are not written by anyone: they are learned during training from the contexts in which each word appears.

**Two words being close** means their vectors point in nearly the same direction (small distance / high cosine similarity), which means **the model has seen them used in similar contexts** — the [[c3_distributional]]: “you shall know a word by the company it keeps.” So *dog* sits near *puppy* and *cat*, *jazz* near *blues* and *piano*. Closeness is similarity of **use**, which usually tracks similarity of meaning — but not always (opposites like *hot*/*cold* can be close because they appear in the same sentences).

Directions also matter: the step from *man* to *woman* roughly equals the step from *king* to *queen*. In the [[c3_projector]] you can fly through these neighborhoods — and also see how stereotypes in the training text become distances in the space.`,
      a_zh: `[[c3_embedding]]是**一串数字——一个向量——它把一个词元或单词表示为高维[[c3_vector_space]]中的一个点**（常常有几百甚至几千维）。分词之后，模型把每个词元编号变成它的嵌入；意义就从这里开始。这些数字不是谁写出来的，而是在训练中从每个词出现的语境里学出来的。

**两个词距离近**，意味着它们的向量方向几乎一样（距离小 / 余弦相似度高），也就是说**模型见过它们在相似的语境中被使用**——这就是[[c3_distributional]]：“观其伴，知其词”。所以 *dog* 挨着 *puppy* 和 *cat*，*jazz* 挨着 *blues* 和 *piano*。“近”指的是**用法**相似，通常也意味着意思相近——但不总是（*hot*/*cold* 这样的反义词也可能很近，因为它们出现在相同的句子里）。

方向同样有意义：从 *man* 到 *woman* 的那一步，大致等于从 *king* 到 *queen* 的那一步。在 [[c3_projector]] 里你可以在这些“街区”之间飞行——也能看到训练文本里的刻板印象是怎样变成空间里的距离的。`,
      hook_en: 'Embedding = a word as coordinates. Close = used in similar contexts.',
      hook_zh: '嵌入＝把词变成坐标。距离近＝在相似语境中使用。',
      trap_en: 'Say “vector / list of numbers,” “learned from context,” and that closeness = similar usage (not a dictionary definition).',
      trap_zh: '要写出“向量/一串数字”、“从语境中学来”，以及“近＝用法相似”（而不是字典意义上的相同）。'
    },
    {
      id: '3.4', t_en: 'Autonomy slider', t_zh: '自主性滑块',
      q_en: 'Karpathy\'s idea: what moves along the slider, and where would you set it for your own work right now?',
      q_zh: '卡帕西的想法：滑块上移动的是什么？就你目前的工作而言，你会把它设在哪里？',
      src: '',
      fig() {
        let s = '';
        const x0 = 60, x1 = 700;
        const track = (y, name, stops, knob, tipNote) => {
          let g = F.text(x0, y - 34, name, { anchor: 'start', cls: 'lt' });
          g += `<rect x="${x0}" y="${y - 3}" width="${x1 - x0}" height="6" rx="3" fill="#ecebe6" stroke="${F.C.ink}" stroke-width="1"/>`;
          g += `<rect x="${x0}" y="${y - 3}" width="${(x1 - x0) * knob}" height="6" rx="3" fill="${F.C.mag}"/>`;
          stops.forEach(([en, zh], i) => {
            const x = x0 + (x1 - x0) * i / (stops.length - 1);
            g += `<circle cx="${x}" cy="${y}" r="4" fill="#fff" stroke="${F.C.ink}"/>`;
            g += F.text(x, y + 24, en, { cls: 'tiny', anchor: i === 0 ? 'start' : i === stops.length - 1 ? 'end' : 'middle' }) + F.sub(x, y + 39, zh, { anchor: i === 0 ? 'start' : i === stops.length - 1 ? 'end' : 'middle' });
          });
          const kx = x0 + (x1 - x0) * knob;
          g += `<circle cx="${kx}" cy="${y}" r="10" fill="#fff" stroke="${F.C.mag}" stroke-width="2"/><circle cx="${kx}" cy="${y}" r="3" fill="${F.C.mag}"/>`;
          return F.g(g, { note: tipNote });
        };
        s += track(70, 'CURSOR', [['TAB COMPLETE', 'Tab 补全'], ['EDIT SELECTION', '改选中代码'], ['EDIT FILE', '改整个文件'], ['AGENT · WHOLE REPO', '智能体改整个仓库']], 0.34,
          { en: 'Cursor: the same tool at four levels of autonomy — the user picks how big a chunk the AI may change.', zh: 'Cursor：同一个工具的四档自主性——由用户决定 AI 能改多大一块。' });
        s += track(175, 'PERPLEXITY', [['SEARCH', '搜索'], ['RESEARCH', '研究'], ['DEEP RESEARCH', '深度研究']], 0.5,
          { en: 'Perplexity: more autonomy = longer unattended runs and less of your checking along the way.', zh: 'Perplexity：自主性越高＝无人看管地运行越久，途中你检查得越少。' });
        s += track(280, 'TESLA AUTOPILOT', [['DRIVER', '人驾驶'], ['LANE ASSIST', '车道辅助'], ['AUTOPILOT', '自动驾驶'], ['FULL SELF-DRIVING', '完全自动']], 0.66,
          { en: 'Autopilot: the classic example of handing control to the machine step by step.', zh: 'Autopilot：把控制权一步步交给机器的经典例子。' });
        s += F.g(F.text(x0, 345, '← AUGMENTATION · you verify every step', { anchor: 'start', cls: 'tiny', color: F.C.blue }) +
          F.text(x1, 345, 'AUTONOMY · AI acts, you check less →', { anchor: 'end', cls: 'tiny', color: F.C.red }) +
          F.sub(x0, 361, '增强：人验证每一步') + F.sub(x1, 361, '自主：AI 行动，人检查更少', { anchor: 'end' }), { tip: 'c3_ironman' });
        return F.svg(760, 372, s, { label: 'autonomy sliders in Cursor, Perplexity and Tesla' });
      },
      cap_en: 'Karpathy’s three examples. Moving right hands the AI a bigger chunk of the task and leaves the human less to verify — faster, but riskier.',
      cap_zh: '卡帕西的三个例子。往右移，就是把更大块的任务交给 AI，留给人验证的部分更少——更快，但风险更高。',
      a_en: `In his [[c3_software3]] talk, Andrej Karpathy argues that good AI products are “partial autonomy” apps with an [[c3_slider]]: the user chooses how much of the work the AI does on its own. **What moves along the slider is the division of control between human and AI** — how big a chunk of the task the AI takes per step, how long it runs without you, and therefore how much you must verify. Examples: Cursor (tab completion → edit a selection → edit a file → agent across the whole repo), Perplexity (search → research → deep research), Tesla Autopilot.

His advice: it’s an [[c3_ironman]] — for now build more **augmentation** than autonomous robots; keep the [[c3_gen_verify]] fast, keep the AI “on a leash,” because a large unchecked change is hard to review.

**Where I would set it (example answer):** low-to-middle. For my design and writing work I let AI generate options, summaries and first drafts in small pieces (“edit a selection” level) and I verify and choose each one, because taste, authorship and accuracy matter and errors are costly. For low-stakes, easy-to-check chores — renaming files, formatting references, boilerplate code — I’d push the slider further right. *(Write your own: name a level, a task, and why — what is easy or hard to verify.)*`,
      a_zh: `安德烈·卡帕西在[[c3_software3]]的演讲中认为，好的 AI 产品是带有[[c3_slider]]的“部分自主”应用：由用户选择 AI 自己完成多少工作。**滑块上移动的是人与 AI 之间控制权的分配**——每一步 AI 承担多大一块任务、它在没有你的情况下运行多久，因而你需要验证多少。例子：Cursor（Tab 补全 → 修改选中部分 → 修改整个文件 → 智能体改动整个仓库）、Perplexity（搜索 → 研究 → 深度研究）、特斯拉 Autopilot。

他的建议是：把它当作[[c3_ironman]]——现阶段多做**增强**，少做自主机器人；让[[c3_gen_verify]]转得快，给 AI “拴上绳子”，因为一大块未经检查的修改很难审阅。

**我会设在哪里（示例答案）：**偏低到中间。在我的设计和写作工作中，我让 AI 一小块一小块地生成选项、摘要和初稿（相当于“修改选中部分”这一档），每一块由我验证和挑选，因为品味、作者身份和准确性都很重要，出错代价高。对于低风险、容易检查的杂事——批量改文件名、整理参考文献格式、样板代码——我会把滑块往右推得更远。*（请写你自己的：说出一个档位、一项任务和理由——它是容易还是难以验证。）*`,
      hook_en: 'The slider moves CONTROL: how much the AI does before a human checks.',
      hook_zh: '滑块移动的是“控制权”：在人检查之前，AI 做了多少。',
      trap_en: 'Two parts: (1) what moves — autonomy/control vs. human verification, with an example; (2) YOUR setting with a reason. Don’t skip the personal part.',
      trap_zh: '两部分：（1）移动的是什么——自主/控制 vs 人的验证，并举例；（2）你自己的设定和理由。不要漏掉个人部分。'
    },
    {
      id: '3.5', t_en: 'Infrastructure as physical', t_zh: '基础设施是物质的',
      q_en: 'From Crawford & Joler: what does it mean that an AI system is a material system, a form of labor, and a computing system at once?',
      q_zh: '根据克劳福德与约勒：说一个 AI 系统同时是“物质系统”“一种劳动形式”和“计算系统”，是什么意思？',
      src: '',
      fig() {
        const L = [
          { label: '“Alexa, what time is it?”', sub: '一次语音请求 · 几秒钟的便利', note: { en: 'The tiny moment of convenience at the top of the map.', zh: '地图顶端那一刻小小的便利。' }, fill: F.C.blueF, side: '#d5def6', t: 0.6,
            extra: z => { const p = F.iso(2, 2, z + 0.6); return `<ellipse cx="${p[0]}" cy="${p[1]}" rx="22" ry="12" fill="#fff" stroke="${F.C.blue}"/>`; } },
          { label: 'Computing system', sub: '计算：数据 模型 数据中心', tip: 'c3_anatomy', pattern: 'chips', density: 6,
            note: { en: 'Training data, neural networks, cloud data centers, networks and the energy to run them.', zh: '训练数据、神经网络、云端数据中心、网络，以及驱动它们的能源。' } },
          { label: 'Labor', sub: '劳动：矿工 工人 标注员 用户', tip: 'c3_digital_labor', bars: { color: F.C.red, fill: F.C.redF, n: 4, rows: 3 } },
          { label: 'Material system', sub: '物质：矿物 能源 电子垃圾', tip: 'c3_extractivism', pattern: 'diag', density: 6, fill: F.C.amberF, side: '#f3e3bf', pc: F.C.amber }
        ];
        const o = { gap: 3.0, alternate: true };
        let s = F.stack(L, o);
        s += F.g(F.text(740, F.stackH(L.length, o) - 12, 'ONE ECHO REQUEST, TAKEN APART', { anchor: 'end', cls: 'tiny', color: F.C.mute }), {});
        return F.svg(760, F.stackH(L.length, o), s, { label: 'three layers of an AI system' });
      },
      cap_en: 'Crawford & Joler’s map of a single Amazon Echo request, reduced to three layers. The convenience on top only exists because of everything underneath.',
      cap_zh: '克劳福德与约勒对一次亚马逊 Echo 请求的解剖图，简化为三层。顶上的便利之所以存在，全靠下面的一切。',
      a_en: `In [[c3_anatomy]], Kate Crawford and Vladan Joler follow a single voice command to an Amazon Echo — “Alexa, what time is it?” — and map everything it depends on. Their point is that the “smart,” seemingly weightless AI is really three systems stacked together, and you can’t understand it as only one:
- **A material system:** it is made of the earth — lithium, cobalt, tin and rare minerals mined around the world, energy for data centers, shipping across oceans, and finally e-waste. Crawford & Joler call this [[c3_extractivism]].
- **A form of labor:** human work at every stage — miners, factory workers assembling devices, low-paid crowd workers labeling data and moderating content, and users themselves, whose unpaid speech and clicks train the system ([[c3_digital_labor]]). Value flows up a [[c3_pyramid]] to the top.
- **A computing system:** data collection, training sets, neural networks, cloud servers and networks that process the request in milliseconds.

**“At once”** means every few seconds of convenience simultaneously consumes planetary resources, uses hidden human work, and runs computation; the clean interface hides the first two. For designers it means AI is never neutral or immaterial — choosing to build with it is also choosing to participate in this chain.`,
      a_zh: `在[[c3_anatomy]]中，凯特·克劳福德与弗拉丹·约勒追踪了一条对亚马逊 Echo 说的语音指令——“Alexa，现在几点？”——并画出它所依赖的一切。他们的观点是：看似“聪明”、没有重量的 AI，其实是三个系统叠在一起，只看其中一个是无法理解它的：
- **物质系统：**它由地球构成——从世界各地开采的锂、钴、锡和稀有矿物，数据中心消耗的能源，跨洋运输，最后变成电子垃圾。克劳福德与约勒称之为[[c3_extractivism]]。
- **一种劳动形式：**每个环节都有人的劳动——矿工、组装设备的工厂工人、给数据做标注和内容审核的低薪众包工人，还有用户本身：他们无偿的说话和点击在训练这个系统（[[c3_digital_labor]]）。价值沿着[[c3_pyramid]]向顶端流动。
- **计算系统：**数据收集、训练集、神经网络、云服务器和网络，在毫秒之间处理这个请求。

**“同时”**的意思是：每几秒钟的便利，都同时在消耗地球资源、使用隐形的人类劳动、运行计算；干净的界面把前两者藏了起来。对设计师来说，这意味着 AI 从来不是中立的或非物质的——选择用它来创作，也就是选择参与这条链条。`,
      hook_en: 'Every “Alexa, what time is it?” = mines + workers + servers, all at the same time.',
      hook_zh: '每一句“Alexa，现在几点？”＝矿山 + 工人 + 服务器，同时发生。',
      trap_en: 'Give a concrete example for EACH of the three (minerals / workers incl. data labelers & users / data + models + servers) and explain “at once” — the interface hides it.',
      trap_zh: '三个方面各举一个具体例子（矿物 / 工人，包括标注员和用户 / 数据+模型+服务器），并解释“同时”——界面把它藏起来了。'
    }
  ]
});
