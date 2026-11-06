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
  c3_request: { en: 'One voice request', zh: '一次语音请求',
    d_en: 'The top of Crawford & Joler’s map: a few seconds of convenience (“what time is it?”) that depends on everything underneath.',
    d_zh: '克劳福德与约勒地图的最顶端：几秒钟的便利（“现在几点？”），却依赖下面的一切。' },
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
      id: '3.1',
      kid_en: `Imagine a row of classmates trying to guess a hidden drawing. The first row each sees a few squares and calls out how dark they are. The second row listens — but each kid trusts some voices more than others — and adds it up: “that sounds like a line across the top!” The last row votes on which number it is. How much each kid trusts each voice is a **weight**; how loudly they shout is the **activation**. Learning just means changing who trusts whom until the right answer wins.`,
      kid_zh: `想象一排排同学在猜一幅被遮住的画。第一排每人只看到几个小格子，大声报出它有多黑。第二排的同学听着——但每个人更相信某些人的声音——把听到的加起来：“上面好像有一条横线！”最后一排投票：这是几？每个同学有多相信某个声音，就是**权重**；喊得有多大声，就是**激活值**。“学习”就是不断调整谁信谁，直到正确答案赢。`,
      steps: [
        { en: 'Start on the left. The drawing of a 7 becomes numbers: dark squares are 1, white squares are 0. Each square is one neuron holding a number.', zh: '从左边开始。画的“7”变成了数字：黑格是 1，白格是 0。每个格子就是一个装着数字的神经元。', hi: ['c3_neuron'] },
        { en: 'Every line is a weight — how much one neuron listens to another. Blue means “this counts for it,” red means “this counts against it.”', zh: '每一条线都是一个权重——一个神经元有多“听”另一个神经元的话。蓝色表示“支持”，红色表示“反对”。', hi: ['c3_weight'] },
        { en: 'Each column is a layer. It listens to the whole column before it and lights up its own neurons (magenta = lit).', zh: '每一列是一层。它听前面一整列的话，然后点亮自己的神经元（洋红色＝亮了）。', hi: ['c3_activation'] },
        { en: 'Zoom into one neuron: multiply each input by its weight, add them up, add the bias, squash to 0–1. That is all one neuron does.', zh: '放大一个神经元：每个输入乘上权重，全部加起来，再加偏置，压到 0–1 之间。一个神经元做的就只有这些。', hi: ['c3_bias'] },
        { en: 'At the end the “7” neuron lights up. Training = nudging the weights until the right output lights.', zh: '最后，代表“7”的神经元亮了。训练＝一点点调整权重，直到正确的输出亮起来。', hi: ['c3_layer'] }
      ],
      t_en: 'Neural network', t_zh: '神经网络',
      short_en: `Each neuron holds an [[c3_activation]] (a number 0–1); a layer is a column of them. One layer **takes all the activations of the layer before it, multiplies each by a [[c3_weight]], adds them up with a [[c3_bias]], and squashes the sum** (sigmoid/ReLU) into its own activations: a′ = σ(W·a + b). So each layer **re-describes** the previous one at a more abstract level (pixels → edges → strokes → “7”), and learning means adjusting the weights.`,
      short_zh: `每个神经元装着一个[[c3_activation]]（0–1 的数），一层就是一列神经元。一层会**取前一层所有的激活值，各乘一个[[c3_weight]]，加起来再加上[[c3_bias]]，然后“压缩”**（sigmoid/ReLU）成自己的激活值：a′ = σ(W·a + b)。所以每一层都在更抽象的层次上**重新描述**前一层（像素 → 边缘 → 笔画 → “7”），而“学习”就是调整权重。`,
      basis_en: `3Blue1Brown, “But what is a neural network?”: a neuron is “a thing that holds a number” (0–1); each connection has a weight, a bias is added to the weighted sum, and a sigmoid squashes it; in matrix form the next layer = σ(W·a + b). Checked against the 3Blue1Brown lesson page. TensorFlow Playground shows the same idea visually.`,
      basis_zh: `3Blue1Brown《神经网络是什么？》：神经元是“装着一个数字的东西”（0–1）；每条连接有一个权重，加权和再加上偏置，然后用 sigmoid 压缩；写成矩阵就是下一层 = σ(W·a + b)。已对照 3Blue1Brown 课程页面核实。TensorFlow Playground 用可视化方式展示了同一个原理。`,
      links: [{ t: '3Blue1Brown — But what is a neural network?', u: 'https://www.3blue1brown.com/lessons/neural-networks' }, { t: 'TensorFlow Playground', u: 'https://playground.tensorflow.org/' }],
      rel: ['3.3', '8.3', '8.2'],
      q_en: 'Layers, weights, activations: in your own words, what does one layer do to the layer before it?',
      q_zh: '层、权重、激活值：用你自己的话说，一层对它前面那一层做了什么？',
      src: '3Blue1Brown; TensorFlow Playground',
      fig() {
        let s = '';
        const C = F.C;
        // input: 7x7 pixel grid of a hand-drawn "7"
        const seven = ['1111111', '0000011', '0000110', '0001100', '0011000', '0010000', '0110000'];
        const gx = 30, gy = 92, cs = 13;
        let g = '';
        seven.forEach((row, r) => [...row].forEach((v, c) => {
          g += `<rect x="${gx + c * cs}" y="${gy + r * cs}" width="${cs - 1}" height="${cs - 1}" fill="${v === '1' ? C.ink : '#fff'}" stroke="#cfcbc2" stroke-width=".6"/>`;
        }));
        s += F.g(g, { tip: 'c3_neuron', note: { en: 'Input layer: each pixel’s brightness (0–1) is one neuron’s activation.', zh: '输入层：每个像素的亮度（0–1）就是一个神经元的激活值。' } });
        s += F.text(gx + 45, gy - 16, 'INPUT · PIXELS', { cls: 'lt' }) + F.sub(gx + 45, gy - 2, '输入层：像素亮度', { anchor: 'middle' });
        // columns of neurons
        const colX = [210, 330, 450], colN = [6, 6, 10];
        const ys = (n, top, bot) => Array.from({ length: n }, (_, i) => top + (bot - top) * (i + 0.5) / n);
        const cols = colX.map((x, k) => ys(colN[k], 70, 320).map(y => [x, y]));
        const lit = [[0, 2, 4], [1, 3], [7]];
        // edges from grid to col 0 (a few)
        let e = '';
        const gridPts = [0, 1.5, 3, 4.5, 6].map(r => [gx + 7 * cs + 2, gy + r * cs + 6]);
        gridPts.forEach(([x, y], i) => cols[0].forEach(([bx, by], j) => {
          const pos = (i + j) % 3 !== 0;
          e += `<line x1="${x}" y1="${y}" x2="${bx}" y2="${by}" stroke="${pos ? C.blue : C.red}" stroke-width="${0.3 + ((i + j) % 3) * 0.25}" opacity=".35"/>`;
        }));
        for (let k = 0; k < 2; k++) cols[k].forEach(([x, y], i) => cols[k + 1].forEach(([bx, by], j) => {
          const pos = (i * 2 + j) % 3 !== 0;
          e += `<line x1="${x}" y1="${y}" x2="${bx}" y2="${by}" stroke="${pos ? C.blue : C.red}" stroke-width="${0.3 + ((i * 3 + j) % 4) * 0.3}" opacity=".45"/>`;
        }));
        s += F.g(e, { tip: 'c3_weight' });
        const names = [['HIDDEN 1', '隐藏层 1：笔画、边缘'], ['HIDDEN 2', '隐藏层 2：组合成部件'], ['OUTPUT', '输出层：是哪个数字？']];
        cols.forEach((col, k) => {
          let n = '';
          col.forEach(([x, y], i) => {
            const on = lit[k].includes(i);
            n += `<circle cx="${x}" cy="${y}" r="${k === 2 ? 8 : 10}" fill="${on ? C.mag : '#fff'}" stroke="${C.ink}" stroke-width="1.1"/>`;
            if (k === 2) n += F.text(x + 20, y, String(i), { anchor: 'start', cls: 'tiny', color: on ? C.mag : C.mute });
          });
          s += F.g(n, { tip: k === 2 ? 'c3_layer' : 'c3_activation' });
          s += F.text(colX[k], 40, names[k][0], { cls: 'lt' }) + F.sub(colX[k], 56, names[k][1], { anchor: 'middle' });
        });
        // zoom on one neuron of hidden 2
        const [zx, zy] = cols[1][1];
        s += `<circle cx="${zx}" cy="${zy}" r="15" fill="none" stroke="${C.mag}" stroke-width="1.2" stroke-dasharray="3 2"/>`;
        s += F.path(`M${zx + 15},${zy - 4} C${zx + 80},${zy - 60} 520,90 556,96`, { stroke: C.mag, dash: '3 3' });
        const X = 556, Y = 70;
        let z = F.rect(X, Y, 190, 196, { fill: '#fff', stroke: C.mag, rx: 8 });
        z += F.text(X + 12, Y + 18, 'ONE NEURON, ZOOMED', { anchor: 'start', cls: 'tiny', color: C.mag });
        [['a₁ × w₁', C.blue], ['a₂ × w₂', C.blue], ['a₃ × w₃', C.red], ['…  × wₙ', C.ink]].forEach(([t, c], i) => z += F.text(X + 14, Y + 44 + i * 19, t, { anchor: 'start', cls: 'mono', color: c }));
        z += F.line(X + 12, Y + 118, X + 178, Y + 118, { stroke: C.ink, sw: .8 });
        z += F.text(X + 14, Y + 136, 'Σ + b  (bias)', { anchor: 'start', cls: 'mono' });
        z += F.text(X + 14, Y + 158, 'σ( … ) → a′', { anchor: 'start', cls: 'mono', color: C.mag });
        z += F.text(X + 14, Y + 180, 'squash to 0–1 = activation', { anchor: 'start', cls: 'tiny', color: C.mute });
        s += F.g(z, { tip: 'c3_bias', note: { en: 'Each new activation = squash(weighted sum of ALL previous activations + bias): a′ = σ(W·a + b).', zh: '每个新激活值 = 压缩（上一层所有激活值的加权和 + 偏置）：a′ = σ(W·a + b)。' } });
        s += F.g(F.line(570, 300, 596, 300, { stroke: C.blue, sw: 2 }) + F.text(602, 304, '+ weight excites', { anchor: 'start', cls: 'tiny', color: C.blue }) +
          F.line(570, 318, 596, 318, { stroke: C.red, sw: 2 }) + F.text(602, 322, '− weight inhibits', { anchor: 'start', cls: 'tiny', color: C.red }), { tip: 'c3_weight' });
        return F.svg(760, 340, s, { label: 'neural network layers with one neuron zoomed' });
      },
      cap_en: 'A digit-recognizing network, left to right. Every line is a weight (blue excites, red inhibits); every circle is a neuron holding an activation; magenta = “lit up.” The zoom shows the one calculation every neuron repeats.',
      cap_zh: '一个识别手写数字的网络，从左到右。每条线是一个权重（蓝色促进，红色抑制）；每个圆是一个装着激活值的神经元；品红色表示“被点亮”。放大框展示的是每个神经元都在重复的那一个计算。',
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
      id: '3.2',
      kid_en: `Think of a secret club with a codebook. The codebook doesn’t list every word in the world — it lists common chunks like “un”, “believ”, “ably”, and gives each chunk a number. Any word, even a brand-new name, can be built from chunks. The computer only ever sees the numbers, never the letters. That’s a **tokenizer**: chunks → numbers. It’s also why AI is bad at counting the r’s in “strawberry” — it never saw the letters!`,
      kid_zh: `想象一个秘密社团有本密码本。密码本不会收录世界上每一个词，而是收录常见的“小块”，比如“un”“believ”“ably”，每块配一个编号。任何词，哪怕是新造的名字，都能用这些小块拼出来。电脑只看得到编号，看不到字母。这就是**分词器**：小块 → 数字。这也是为什么 AI 数不清“strawberry”里有几个 r——它根本没看到字母！`,
      steps: [
        { en: 'Look at the sentence in the box. The tokenizer cuts it into chunks — each colored block is one token.', zh: '看框里的句子。分词器把它切成小块——每个彩色方块就是一个 token。', hi: [] },
        { en: 'Under each block is its ID number. The model never sees letters — only this list of numbers.', zh: '每个方块下面是它的编号。模型从来看不到字母——只看到这串数字。', hi: [] },
        { en: 'Find “strawberry”: it is one or two chunks, not ten letters. That is why counting its r’s is hard for a model.', zh: '找到“strawberry”：它是一两个小块，而不是十个字母。所以模型很难数出里面有几个 r。', hi: [] },
        { en: 'Now press 中文 or “rare” and watch the token count change — unusual words get chopped into more pieces.', zh: '现在按“中文”或“rare”，看 token 数量怎么变——不常见的词会被切成更多块。', hi: [] }
      ],
      t_en: 'Token / tokenizer', t_zh: '词元 / 分词器',
      short_en: `A [[c3_token]] is **a chunk of text — a word, part of a word, punctuation or a space — that the [[c3_tokenizer]] maps to an integer ID** from a fixed [[c3_vocab]]. The model sees your sentence as tokens because **a neural network only takes numbers from a fixed, finite list**; sub-word pieces can spell any word (new words, names, typos, other languages) without an endless word list. That’s also why limits and prices are counted in tokens.`,
      short_zh: `[[c3_token]]是**一小段文本——一个词、词的一部分、标点或空格——由[[c3_tokenizer]]按照固定的[[c3_vocab]]映射成一个整数编号**。模型把句子看成词元，是因为**神经网络只能接收来自一个固定、有限列表的数字**；子词碎片可以拼出任何词（新词、人名、错别字、其他语言），而不需要一张无穷无尽的单词表。这也是上限和价格按词元计算的原因。`,
      basis_en: `Follows the tokenizer playground used in class (e.g. Tiktokenizer, listed in the course resources): text is split into sub-word tokens by a byte-pair-encoding vocabulary and each token becomes an ID. The live demo above uses the open-source gpt-tokenizer library (OpenAI’s o200k vocabulary) when it can load; otherwise a simplified offline splitter.`,
      basis_zh: `依据课上使用的分词器演示（例如课程资源里列出的 Tiktokenizer）：文本由字节对编码（BPE）词表切成子词词元，每个词元变成一个编号。上面的实时演示在能加载时使用开源的 gpt-tokenizer 库（OpenAI 的 o200k 词表），否则使用简化的离线切分器。`,
      links: [{ t: 'Tiktokenizer (course resource)', u: 'https://tiktokenizer.com/' }],
      rel: ['3.3', '4.4'],
      widget: {
        html() {
          return `<div class="w-ctrl"><input type="text" class="w32-in" value="Unbelievably, ChatGPT can’t count r’s in strawberry!" aria-label="Text to tokenize / 要切分的文字">
            <span class="w-seg w32-ex"><button data-t="Unbelievably, ChatGPT can’t count r’s in strawberry!">EN</button><button data-t="我明天要辅导一个学生的期中考试。">中文</button><button data-t="def count_r(word): return word.count('r')">code</button><button data-t="antidisestablishmentarianism 🍓🍓">rare</button></span>
            <span class="w32-badge w-out"></span></div><div class="w-svg"></div><div class="w-readout"></div>`;
        },
        mount(el) {
          const inp = el.querySelector('.w32-in'), badge = el.querySelector('.w32-badge'), box = el.querySelector('.w-svg'), out = el.querySelector('.w-readout');
          let enc = null, tried = false;
          const C = F.C;
          const cols = [[C.blueF, C.blue], [C.greenF, C.green], [C.amberF, C.amber], [C.redF, C.red], [C.magF, C.mag]];
          const cjk = ch => /[　-〿㐀-鿿＀-￯]/.test(ch);
          const hash = s => { let h = 7; for (const c of s) h = (h * 31 + c.codePointAt(0)) % 99991; return h; };
          function toy(text) { // simplified offline splitter (illustrative)
            const raw = text.match(/\s?[A-Za-z]+|\s?\d{1,3}|[㐀-鿿]|\s?[^\sA-Za-z\d㐀-鿿]|\s+/gu) || [];
            const out = [];
            raw.forEach(t => {
              const lead = /^\s/.test(t) && t.trim() ? ' ' : '', w = lead ? t.slice(1) : t;
              if (/^[A-Za-z]+$/.test(w) && w.length > 6) {
                const parts = w.match(/.{1,4}/g); parts.forEach((p, i) => out.push((i ? '' : lead) + p));
              } else out.push(t);
            });
            return out.map(p => ({ p, id: hash(p) }));
          }
          function real(text) {
            const ids = enc.encode(text);
            return ids.map(id => { let p = enc.decode([id]); if (p.includes('�')) p = '⟨byte⟩'; return { p, id }; });
          }
          function chipW(p) { let w = 0; for (const ch of p) w += cjk(ch) ? 13 : 7.4; return Math.max(22, w + 14); }
          function render() {
            const text = inp.value;
            let toks = [];
            try { toks = enc ? real(text) : toy(text); } catch (e) { toks = toy(text); }
            const MAX = 60; const shown = toks.slice(0, MAX);
            let x = 14, y = 26, s = '';
            shown.forEach((t, i) => {
              const label = t.p.replace(/\n/g, '↵').replace(/ /g, '·');
              const w = chipW(label);
              if (x + w > 746) { x = 14; y += 62; }
              const [f, c] = cols[i % 5];
              s += F.rect(x, y, w, 28, { fill: f, stroke: c, rx: 4, text: label, tcls: 'mono', tcolor: C.ink, note: { en: `token #${i + 1} · ID ${t.id}`, zh: `第 ${i + 1} 个词元 · 编号 ${t.id}` } });
              s += F.text(x + w / 2, y + 44, String(t.id), { cls: 'tiny', color: C.mute });
              x += w + 6;
            });
            if (toks.length > MAX) s += F.text(746, y + 44, `+${toks.length - MAX} more`, { anchor: 'end', cls: 'tiny', color: C.mag });
            const H = y + 64;
            s += F.text(14, H + 4, 'IDS → the only thing the model sees', { anchor: 'start', cls: 'tiny', color: C.mute }) + F.sub(14, H + 20, '编号 → 模型唯一能看到的东西');
            box.innerHTML = F.svg(760, H + 30, s, { label: 'live tokenization' });
            const words = (text.match(/[A-Za-z0-9’']+/g) || []).length + [...text].filter(cjk).length;
            const chars = [...text].length;
            const ratio = words ? (toks.length / words).toFixed(2) : '—';
            out.innerHTML = `<span class="en"><b>${toks.length}</b> tokens · <b>${words}</b> words · <b>${chars}</b> characters · ${ratio} tokens per word. Try Chinese, code or a rare word and watch the count change.</span> <span class="zh"><b>${toks.length}</b> 个词元 · <b>${words}</b> 个词（汉字按字计）· <b>${chars}</b> 个字符 · 每词约 ${ratio} 个词元。试试中文、代码或生僻词，看看数量怎么变。</span>`;
            badge.innerHTML = enc ? `<span class="en">● real GPT tokenizer (o200k)</span><span class="zh"> 真实 GPT 分词器</span>` : `<span class="en">○ offline demo splitter</span><span class="zh"> 离线示意切分器</span>`;
          }
          function load() {
            if (tried) return; tried = true;
            badge.innerHTML = '<span class="en">loading real tokenizer…</span><span class="zh"> 正在加载真实分词器…</span>';
            import('https://cdn.jsdelivr.net/npm/gpt-tokenizer@4/+esm').then(m => {
              if (m && typeof m.encode === 'function' && typeof m.decode === 'function') { enc = m; }
              render();
            }).catch(() => render());
          }
          inp.addEventListener('input', render);
          inp.addEventListener('focus', load);
          el.querySelector('.w32-ex').addEventListener('click', e => { const b = e.target.closest('button[data-t]'); if (!b) return; inp.value = b.dataset.t; el.querySelectorAll('.w32-ex button').forEach(x => x.classList.toggle('on', x === b)); render(); load(); });
          render();
          if ('IntersectionObserver' in window) { const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); load(); } }, { rootMargin: '300px' }); io.observe(el); } else load();
        }
      },
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
      cap_en: 'A tokenizer cuts the sentence into chunks from its fixed vocabulary and swaps each chunk for a number. Notice “strawberry” never appears as letters — which is why models are bad at counting r’s. (Type your own text above — IDs are real when the GPT tokenizer loads.)',
      cap_zh: '分词器用它固定的词表把句子切成小块，再把每块换成一个编号。注意 “strawberry” 从来没有以字母的形式出现——这就是模型数不清里面有几个 r 的原因。（可以在上方输入自己的文字——真实 GPT 分词器加载后编号为真实编号。）',
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
      id: '3.3',
      kid_en: `Picture a giant lunchroom where every word has a seat. Words that show up in the same conversations end up at the same table: “dog”, “puppy”, “cat” sit together; “jazz” and “piano” sit across the room. A word’s seat is written as numbers — like map coordinates, but with hundreds of directions instead of two. That list of numbers is an **embedding**, and “close” means “used in similar sentences.”`,
      kid_zh: `想象一个超大的食堂，每个词都有一个座位。经常出现在同一类对话里的词，会坐到同一张桌子：“狗”“小狗”“猫”坐在一起；“爵士”“钢琴”坐在食堂另一头。一个词的座位用一串数字表示——像地图坐标，只不过不是两个方向，而是几百个方向。这串数字就是**嵌入**，“离得近”就是“在相似的句子里出现”。`,
      steps: [
        { en: 'Each dot is a word, placed by its numbers. Words used in the same kinds of sentences form neighborhoods.', zh: '每个点是一个词，位置由它的数字决定。用在同类句子里的词，会聚成一个“街区”。', hi: ['c3_embedding'] },
        { en: '“dog” and “puppy” are almost touching: the model saw them used in very similar ways. Close = used alike.', zh: '“dog”和“puppy”几乎贴在一起：模型看到它们的用法非常像。离得近＝用法像。', hi: ['c3_distributional'] },
        { en: 'Directions mean something too: the step from “man” to “woman” is the same step as “king” to “queen.”', zh: '方向也有意义：从“man”到“woman”的那一步，和从“king”到“queen”是同一步。', hi: ['c3_vector_space'] },
        { en: 'Remember: the real map has hundreds of directions. This picture squashes it flat so our eyes can see it.', zh: '记住：真正的地图有几百个方向。这张图只是把它压扁，好让我们的眼睛看得见。', hi: [] }
      ],
      t_en: 'Embedding', t_zh: '嵌入',
      short_en: `An [[c3_embedding]] is **a vector — a long list of numbers — that places a token or word as a point in a high-dimensional space**, learned during training from the contexts the word appears in. Two words being close means **the model has seen them used in similar contexts** (similar usage, usually similar meaning — “you shall know a word by the company it keeps”); directions can also encode relations (man→woman ≈ king→queen).`,
      short_zh: `[[c3_embedding]]是**一个向量——一长串数字——把一个词元或单词放到高维空间中的某个点上**，它是在训练中从这个词出现的语境里学出来的。两个词距离近，意味着**模型见过它们在相似的语境中被使用**（用法相似，通常意思也相近——“观其伴，知其词”）；方向也能编码关系（man→woman ≈ king→queen）。`,
      basis_en: `Follows Google’s Embedding Projector (the class activity): it projects ~200–768-dimensional word vectors down to 3D with PCA/t-SNE/UMAP so nearest neighbours become visible. “Close = used alike” is the distributional idea (J.R. Firth).`,
      basis_zh: `依据课上使用的 Google Embedding Projector：它用 PCA/t-SNE/UMAP 把约 200–768 维的词向量投影到 3 维，让“最近邻”变得可见。“近＝用法相似”就是分布假说（J.R. 弗斯）。`,
      links: [{ t: 'Embedding Projector', u: 'https://projector.tensorflow.org/' }],
      rel: ['3.2', '3.1', '7.5'],
      q_en: 'What is an embedding, and what does it mean that two words are close in that space?',
      q_zh: '什么是嵌入（embedding）？两个词在那个空间里“距离近”意味着什么？',
      src: 'Embedding Projector',
      fig() {
        let s = '';
        // axes
        s += F.line(60, 300, 720, 300, { stroke: '#cfcbc2' }) + F.line(60, 300, 60, 30, { stroke: '#cfcbc2' });
        s += F.text(720, 318, 'dimension 1', { anchor: 'end', cls: 'tiny', color: F.C.mute }) + F.text(66, 22, 'dimension 2  (of ~768)', { anchor: 'start', cls: 'tiny', color: F.C.mute });
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
          cl.pts.forEach(([w, x, y]) => g += `<circle cx="${x}" cy="${y}" r="3.5" fill="${cl.c}"/>` + (w === 'dog' ? F.text(x - 8, y + 4, w, { anchor: 'end', cls: 'mono', color: F.C.ink }) : F.text(x + 7, y - 6, w, { anchor: 'start', cls: 'mono', color: F.C.ink })));
          g += F.text(cx, cy + (Math.max(...ys) - Math.min(...ys)) / 2 + 42, cl.en, { cls: 'tiny', color: cl.c }) + F.sub(cx, cy + (Math.max(...ys) - Math.min(...ys)) / 2 + 56, cl.zh, { anchor: 'middle' });
          s += F.g(g, { tip: 'c3_embedding', note: { en: `A neighborhood: these words appear in similar sentences, so training pushed their vectors together.`, zh: `一个“街区”：这些词出现在相似的句子里，所以训练把它们的向量推到了一起。` } });
        });
        // close pair callout
        s += F.g(F.line(143, 92, 170, 72, { stroke: F.C.mag, sw: 2 }) + F.label([157, 82], 300, 'CLOSE = USED ALIKE', { color: F.C.mag }) + F.sub(308, 99, '距离近＝用法相似'), { tip: 'c3_distributional' });
        // analogy arrows
        const A = [[250, 230, 'man'], [300, 190, 'woman'], [360, 250, 'king'], [410, 210, 'queen']];
        let an = '';
        A.forEach(([x, y, w]) => an += `<circle cx="${x}" cy="${y}" r="3.5" fill="${F.C.ink}"/>` + F.text(x + 7, y + 14, w, { anchor: 'start', cls: 'mono' }));
        an += F.arrow(252, 228, 296, 193, { stroke: F.C.mag }) + F.arrow(362, 248, 406, 213, { stroke: F.C.mag });
        an += F.text(330, 290, 'same direction = same relation', { cls: 'tiny', color: F.C.mag });
        s += F.g(an, { tip: 'c3_vector_space', note: { en: 'Directions carry meaning too: king − man + woman ≈ queen. (Biases in the training text get encoded the same way.)', zh: '方向也有意义：king − man + woman ≈ queen。（训练文本里的偏见也会以同样的方式被编码进去。）' } });
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
      id: '3.4',
      kid_en: `Think of learning to ride a bike. At first a parent holds the seat the whole time; later they let go for a few meters; one day you ride alone. An AI helper is the same, but backwards: it can give a hint, write one sentence, write the whole essay, or even hand it in for you. The further it goes alone, the more you have to check afterward. Karpathy’s **autonomy slider** is that dial — and you choose where to set it.`,
      kid_zh: `想想学骑自行车。一开始大人一直扶着后座；后来松手几米；终于有一天你自己骑。AI 助手也一样，只是方向反过来：它可以给你一点提示、帮你写一句、写完整篇作文，甚至直接帮你交上去。它自己走得越远，你事后要检查的就越多。卡帕西说的**自主性滑块**就是这个旋钮——由你决定拨到哪一档。`,
      steps: [
        { en: 'The dot on the line is the slider. Left = the AI only helps a little. Right = the AI does almost everything.', zh: '线上的圆点就是滑块。左边＝AI 只帮一点点；右边＝AI 几乎全包。', hi: [] },
        { en: 'Look at the bar: blue is how much you control, pink is how much the AI controls.', zh: '看这条横条：蓝色是你掌控的部分，粉色是 AI 掌控的部分。', hi: ['c3_gen_verify', 'c3_slider'] },
        { en: 'Drag the slider right. Pink grows — and the “You verify” card gets harder. Faster, but riskier.', zh: '把滑块往右拖。粉色变多——“你要检查的”卡片也变难了。更快，但风险更高。', hi: [] },
        { en: 'Click “Your work” and pick where YOU would set it, and why. That is the second half of the exam question.', zh: '点“你的工作”，选一个你自己会设的档位，并想好理由。这就是考题的后半部分。', hi: [] }
      ],
      t_en: 'Autonomy slider', t_zh: '自主性滑块',
      short_en: `Karpathy (Software 3.0) says good AI apps offer **partial autonomy with an [[c3_slider]]: what moves is the split of control between human and AI** — how big a chunk the AI does per step and how much the human must verify (Cursor: tab-complete → edit selection → edit file → agent on the whole repo; Perplexity: search → research → deep research). His advice: keep the AI “on a leash” and the [[c3_gen_verify]] fast. **My setting:** [name a level + a task + why — e.g. low/middle for design work, because taste and accuracy are hard to verify in big chunks].`,
      short_zh: `卡帕西（软件 3.0）认为，好的 AI 应用提供**带[[c3_slider]]的部分自主：移动的是人和 AI 之间控制权的分配**——AI 每一步做多大一块、人需要验证多少（Cursor：Tab 补全 → 改选中部分 → 改整个文件 → 智能体改整个仓库；Perplexity：搜索 → 研究 → 深度研究）。他的建议：给 AI “拴上绳子”，让[[c3_gen_verify]]保持快速。**我的设定：**[写出一个档位 + 一项任务 + 理由——例如设计工作设在偏低/中间，因为品味和准确性很难大块验证]。`,
      basis_en: `Karpathy, “Software Is Changing (Again)”, YC AI Startup School 2025 (annotated by Latent Space). The course glossary defines the autonomy slider as a user-selectable level of AI autonomy, with Cursor, Perplexity and Tesla Autopilot as examples, and the generation–verification loop as “verification made easy, generation kept on a tight leash.” The Latent Space notes are paywalled, so this follows the course glossary and widely published talk notes.`,
      basis_zh: `卡帕西《Software Is Changing (Again)》，YC AI Startup School 2025（Latent Space 有带注释的整理）。课程词汇表把自主性滑块定义为“用户可选的 AI 自主程度”，例子是 Cursor、Perplexity 和特斯拉 Autopilot；把生成—验证循环定义为“让验证变容易、把生成拴紧”。Latent Space 的笔记需付费，所以这里依据课程词汇表和公开的演讲笔记。`,
      links: [{ t: 'Latent Space — Karpathy on Software 3.0', u: 'https://www.latent.space/p/s3' }],
      rel: ['6.5', '6.1'],
      widget: {
        html() {
          return `<div class="w-ctrl"><span class="w-seg w34-p"><button data-p="0" class="on">Cursor</button><button data-p="1">Perplexity</button><button data-p="2">Tesla</button><button data-p="3"><span class="en">Your work</span><span class="zh"> 你的工作</span></button></span>
            <label><span class="en">autonomy</span><span class="zh">自主性</span> <input type="range" class="w34-r" min="0" max="3" step="1" value="1"></label><span class="w-out w34-v"></span></div><div class="w-svg"></div><div class="w-readout"></div>`;
        },
        mount(el) {
          const C = F.C;
          const P = [
            { name: 'CURSOR', stops: [
              ['TAB COMPLETE', 'Tab 补全', .1, 'finishes the line you are typing', '补全你正在打的这一行', 'glance at a few characters', '扫一眼几个字符'],
              ['EDIT SELECTION', '改选中代码', .3, 'rewrites the lines you selected', '重写你选中的几行', 'review a small diff', '检查一小段改动'],
              ['EDIT FILE', '改整个文件', .6, 'changes a whole file', '修改整个文件', 'read a long diff carefully', '仔细读一大段改动'],
              ['AGENT · REPO', '智能体改整个仓库', .9, 'plans and edits across the repo, runs commands', '跨仓库规划修改、运行命令', 'trust tests + spot-check; hard to review', '靠测试 + 抽查；很难完整审阅']] },
            { name: 'PERPLEXITY', stops: [
              ['SEARCH', '搜索', .2, 'answers with a few sources', '给出带少量来源的回答', 'open the sources', '点开来源核对'],
              ['RESEARCH', '研究', .55, 'runs several searches, writes a summary', '多轮搜索并写出摘要', 'check key claims', '核对关键论断'],
              ['DEEP RESEARCH', '深度研究', .85, 'works for minutes, writes a long report', '运行数分钟，写出长报告', 'verifying everything is costly', '全部核实代价很高']] },
            { name: 'TESLA AUTOPILOT', stops: [
              ['DRIVER', '人驾驶', 0, 'nothing', '什么都不做', 'you drive', '你自己开'],
              ['LANE ASSIST', '车道辅助', .3, 'keeps the lane', '保持车道', 'hands on, eyes on road', '手扶方向盘、眼看路'],
              ['AUTOPILOT', '自动驾驶', .65, 'steers and brakes on highways', '在高速上转向和刹车', 'supervise, ready to take over', '监督，随时接管'],
              ['FULL SELF-DRIVING', '完全自动', .95, 'drives the whole trip', '开完全程', 'almost nothing — the risk moves to the machine', '几乎不用——风险转给了机器']] },
            { name: 'YOUR WORK', stops: [
              ['ASK ONLY', '只提问', .1, 'explains; you do the work', '只解释，活由你干', 'nothing to verify but understanding', '只需确认自己理解'],
              ['SUGGEST', '给建议', .3, 'offers options and edits', '提供选项和修改建议', 'pick and adapt each one', '逐个挑选、改写'],
              ['DRAFT IN PIECES', '分块起草', .55, 'drafts sections you request', '按你的要求起草段落', 'read every piece before keeping it', '每块都读过再保留'],
              ['WHOLE DRAFT', '整篇起草', .75, 'writes the whole thing', '写出整篇', 'review a big output — easy to miss errors', '审阅一大块输出——容易漏错'],
              ['ACTS FOR YOU', '代你执行', .95, 'publishes / sends / submits on its own', '自行发布、发送、提交', 'you see it only afterward', '你事后才看到']] }
          ];
          const seg = el.querySelector('.w34-p'), r = el.querySelector('.w34-r'), v = el.querySelector('.w34-v'), box = el.querySelector('.w-svg'), out = el.querySelector('.w-readout');
          let pi = 0;
          function render() {
            const p = P[pi], k = +r.value, st = p.stops[k];
            const x0 = 50, x1 = 710, y = 70;
            let s = F.text(x0, 30, p.name, { anchor: 'start', cls: 'lt' });
            s += `<rect x="${x0}" y="${y - 3}" width="${x1 - x0}" height="6" rx="3" fill="#ecebe6" stroke="${C.ink}" stroke-width="1"/>`;
            const kx = x0 + (x1 - x0) * k / (p.stops.length - 1);
            s += `<rect x="${x0}" y="${y - 3}" width="${kx - x0}" height="6" rx="3" fill="${C.mag}"/>`;
            p.stops.forEach((sp, i) => {
              const x = x0 + (x1 - x0) * i / (p.stops.length - 1), a = i === 0 ? 'start' : i === p.stops.length - 1 ? 'end' : 'middle';
              s += `<circle cx="${x}" cy="${y}" r="4" fill="#fff" stroke="${C.ink}"/>` + F.text(x, y + 26, sp[0], { cls: 'tiny', anchor: a, color: i === k ? C.mag : C.ink }) + F.sub(x, y + 41, sp[1], { anchor: a });
            });
            s += `<circle cx="${kx}" cy="${y}" r="11" fill="#fff" stroke="${C.mag}" stroke-width="2"/><circle cx="${kx}" cy="${y}" r="3.5" fill="${C.mag}"/>`;
            // control split bar
            const by = 150, bw = x1 - x0, ai = st[2];
            s += F.text(x0, by - 10, 'WHO HOLDS CONTROL', { anchor: 'start', cls: 'tiny', color: C.mute }) + F.sub(x0 + 140, by - 10, '控制权在谁手里');
            s += F.g(`<rect x="${x0}" y="${by}" width="${bw * (1 - ai)}" height="22" fill="${C.blueF}" stroke="${C.blue}"/>` + F.text(x0 + 8, by + 15, `HUMAN ${Math.round((1 - ai) * 100)}%`, { anchor: 'start', cls: 'tiny', color: C.blue }), { tip: 'c3_gen_verify' });
            s += F.g(`<rect x="${x0 + bw * (1 - ai)}" y="${by}" width="${bw * ai}" height="22" fill="${C.magF}" stroke="${C.mag}"/>` + F.text(x1 - 8, by + 15, `AI ${Math.round(ai * 100)}%`, { anchor: 'end', cls: 'tiny', color: C.mag }), { tip: 'c3_slider' });
            // two cards
            const cy = 196;
            s += F.rect(x0, cy, 320, 70, { fill: '#fff', stroke: C.mag, rx: 6 }) + F.text(x0 + 12, cy + 18, 'THE AI DOES', { anchor: 'start', cls: 'tiny', color: C.mag }) + F.text(x0 + 12, cy + 40, st[3], { anchor: 'start', cls: 'mono' }) + F.sub(x0 + 12, cy + 58, st[4]);
            s += F.rect(x1 - 320, cy, 320, 70, { fill: '#fff', stroke: C.blue, rx: 6 }) + F.text(x1 - 308, cy + 18, 'YOU VERIFY', { anchor: 'start', cls: 'tiny', color: C.blue }) + F.text(x1 - 308, cy + 40, st[5], { anchor: 'start', cls: 'mono' }) + F.sub(x1 - 308, cy + 58, st[6]);
            box.innerHTML = F.svg(760, 282, s, { label: 'autonomy slider' });
            v.textContent = `${st[0]} · ${st[1]}`;
            const risk = ai < .35 ? ['low risk, slow', '风险低，但慢'] : ai < .7 ? ['balanced', '较平衡'] : ['fast, but big unchecked chunks', '快，但大块内容没人检查'];
            out.innerHTML = pi === 3
              ? `<span class="en">Where would you set it for your own work? At “${st[0].toLowerCase()}” the AI ${st[3]} and you ${st[5]} — ${risk[0]}. Pick a level and say why: what is easy or hard to verify in your work?</span> <span class="zh">你会把自己工作的滑块设在哪？在“${st[1]}”这一档，AI ${st[4]}，你${st[6]}——${risk[1]}。选一个档位并说明理由：你的工作里，什么容易验证、什么难验证？</span>`
              : `<span class="en">Moving right gives the AI a bigger chunk per step and leaves you less to verify — ${risk[0]}.</span> <span class="zh">往右移，AI 每一步承担的更多，留给你验证的更少——${risk[1]}。</span>`;
          }
          seg.addEventListener('click', e => { const b = e.target.closest('button[data-p]'); if (!b) return; pi = +b.dataset.p; seg.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); r.max = P[pi].stops.length - 1; r.value = Math.min(+r.value, +r.max); render(); });
          r.addEventListener('input', render);
          render();
        }
      },
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
      id: '3.5',
      embeds: [{ src: 'cf/smart-speaker.html', h: 680,
        name_en: 'One smart speaker, taken apart', name_zh: '把一台智能音箱拆开看',
        hint_en: 'Drag to turn · See-through shows ~50 real parts · Wake → Ask sends your voice to a datacenter · Materials lights the magnet, copper, gold, plastic',
        hint_zh: '拖动旋转 · 打开 See-through 看约 50 个真实零件 · 先 Wake 再 Ask，你的声音被送往数据中心 · Materials 点亮磁铁、铜、金、塑料' }],
      kid_en: `Asking a smart speaker “what time is it?” feels like magic — like a vending machine that answers. But think of the school lunch: before it reaches your tray, farmers grew it, trucks carried it, cooks made it, and someone washes the trays. One tiny question works the same way. It uses metals dug out of the ground (**material**), the work of many people — miners, factory workers, people who label data, even you, because your voice helps train it (**labor**) — and giant computers (**computing**). All three, every single time.`,
      kid_zh: `问智能音箱“现在几点？”感觉像魔法——像一台会说话的自动售货机。但想想学校的午饭：到你餐盘之前，有农民种菜、卡车运输、厨师做饭、有人洗盘子。一个小小的问题也是这样。它用到从地下挖出来的金属（**物质**），用到很多人的劳动——矿工、工厂工人、给数据贴标签的人，甚至还有你，因为你的声音也在帮它训练（**劳动**）——还用到巨大的计算机（**计算**）。每一次，三样同时都在。`,
      steps: [
        { en: 'Top: one tiny question — a few seconds of convenience. This is the only part you normally see.', zh: '最上面：一个小小的问题——几秒钟的便利。平时你只看得到这一层。', hi: ['c3_request'] },
        { en: 'Under it: the computing — microphones, the internet, data centers and the AI model that hears you.', zh: '它下面：计算——麦克风、互联网、数据中心，还有听懂你说话的 AI 模型。', hi: ['c3_anatomy'] },
        { en: 'Under that: people at work — miners, factory workers, data labelers… and you, whose voice trains it.', zh: '再下面：在干活的人——矿工、工厂工人、数据标注员……还有你，你的声音在训练它。', hi: ['c3_digital_labor'] },
        { en: 'At the bottom: the earth itself — metals, energy, shipping, and e-waste when the speaker is thrown away.', zh: '最底下：地球本身——金属、能源、运输，以及音箱被扔掉后的电子垃圾。', hi: ['c3_extractivism'] },
        { en: '“At once” means all layers are needed for every question. Take away any layer and the magic stops.', zh: '“同时”的意思是：每问一次，所有层都要用到。抽掉任何一层，魔法就停了。', hi: [] }
      ],
      t_en: 'Infrastructure as physical', t_zh: '基础设施是物质的',
      short_en: `In [[c3_anatomy]], Crawford & Joler trace one Amazon Echo request and show it is three systems working **at the same time**: a **material system** (minerals mined, energy, shipping, e-waste — [[c3_extractivism]]), a **form of labor** (miners, factory workers, data labelers, and users whose speech trains it — [[c3_digital_labor]]), and a **computing system** (data, models, cloud servers). “At once” means every second of convenience consumes the earth and hidden human work as well as computation — the clean interface hides the first two.`,
      short_zh: `在[[c3_anatomy]]中，克劳福德与约勒追踪一次亚马逊 Echo 请求，指出它是**同时运转**的三个系统：**物质系统**（开采的矿物、能源、运输、电子垃圾——[[c3_extractivism]]）、**一种劳动形式**（矿工、工厂工人、数据标注员，以及用说话训练它的用户——[[c3_digital_labor]]），以及**计算系统**（数据、模型、云服务器）。“同时”意味着每一秒的便利都在消耗地球资源和隐形的人类劳动，而不只是计算——干净的界面把前两者藏了起来。`,
      basis_en: `Crawford & Joler, Anatomy of an AI System (2018, anatomyof.ai), as summarized in the course glossary: extractivism (materials, labor and data), digital labor (from mining to data labeling to waste cleanup, after Fuchs), and the fractal pyramid of value extraction. The essay page itself could not be opened in this session.`,
      basis_zh: `克劳福德与约勒《AI 系统解剖图》（2018，anatomyof.ai），依据课程词汇表的总结：攫取主义（材料、劳动和数据）、数字劳动（沿用福克斯：从采矿到数据标注再到垃圾处理），以及价值攫取的分形金字塔。本次未能打开原文网页。`,
      links: [{ t: 'Crawford & Joler — Anatomy of an AI System', u: 'https://anatomyof.ai/' }],
      rel: ['1.1', '7.5', '1.2'],
      q_en: 'From Crawford & Joler: what does it mean that an AI system is a material system, a form of labor, and a computing system at once?',
      q_zh: '根据克劳福德与约勒：说一个 AI 系统同时是“物质系统”“一种劳动形式”和“计算系统”，是什么意思？',
      src: '',
      fig() {
        const L = [
          { label: '“Alexa, what time is it?”', sub: '一次语音请求 · 几秒钟的便利', tip: 'c3_request', note: { en: 'The tiny moment of convenience at the top of the map.', zh: '地图顶端那一刻小小的便利。' }, fill: F.C.blueF, side: '#d5def6', t: 0.6,
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
