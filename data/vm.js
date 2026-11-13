/* Appendix: Variable Machine — the instructor's app from Class 8, and its four worked examples.
   Every number, command and model answer below is copied from the app's own records:
   github.com/studio0rpiment/variable-machine/tree/main/docs/examples (MIT, Kevin Patton / Studio Orpiment). */
window.VM = {
  site: 'https://variablemachine.orpiment.studio/',
  repo: 'https://github.com/studio0rpiment/variable-machine',
  records: 'https://github.com/studio0rpiment/variable-machine/tree/main/docs/examples',
  anim: 'https://variablemachine.orpiment.studio/examples/',

  intro_zh: [
    '第 8 课用的就是这个应用。**Variable Machine** 是一个装在 Apple 芯片 Mac 上、在本机浏览器里打开的小工具（地址是 localhost:4817），专门用来“改造”小语言模型。所有东西都在你自己的电脑上跑，做出来的东西不会上传到任何地方。',
    '它有个很好的习惯：**你每点一下按钮，页面底部的终端里就会显示它真正执行的那条命令。**所以它不是黑箱，你能看到“改模型”到底是哪几行字。',
    '你没法用手去改模型里那几亿个数字，但可以改它的行为。它给了四种办法，正好对上第 8 课的五道题。'
  ],
  intro_en: [
    'This is the app from Class 8. **Variable Machine** is a small tool for Apple Silicon Macs that opens in your browser at localhost:4817 and is built for changing small language models. Everything runs on your own computer; nothing you make is sent anywhere.',
    'It has one great habit: **every click shows, in a terminal at the bottom of the page, the real command it runs.** So it is not a black box. You can see exactly which lines “changing a model” comes down to.',
    'You can’t edit a model’s learned numbers by hand, but you can change what it does. The app gives four ways, and they line up with the five Class 8 questions.'
  ],

  ways: [
    { k: 'words', zh: '用话', en: 'Words', tab: 'Modelfile', q: ['8.1'],
      d_zh: '写一段固定的说明、温度和一个示范，放在模型前面。**不训练，权重一点没变。**',
      d_en: 'Standing instructions, a temperature and an example placed in front of the model. **No training; the weights don’t change.**' },
    { k: 'examples', zh: '用例子', en: 'Examples', tab: 'Train · LoRA', q: ['8.2', '8.3'],
      d_zh: '给它看一堆“问题 + 想要的答案”，直到它学会这样答。不改原模型，而是学出一个**适配器**。',
      d_en: 'Show it questions with the answers you want until it answers that way. The base stays untouched; it learns an **adapter**.' },
    { k: 'taste', zh: '用品味', en: 'Taste', tab: 'Prefer · DPO', q: ['8.4'],
      d_zh: '给它看两两一组的回答，标出哪个更好，它就往你挑的那种偏。',
      d_en: 'Show pairs of answers, mark the better one, and it leans toward the kind you picked.' },
    { k: 'blend', zh: '混合', en: 'Blend', tab: 'Merge', q: ['8.5'],
      d_zh: '把两个适配器按比例 t 混成第三个。',
      d_en: 'Mix two adapters into a third, with a slider t for how much of each.' }
  ],

  /* 1 · words */
  crit: {
    base: 'smollm2:1.7b', name: 'studio-crit',
    modelfile: [
      ['FROM smollm2:1.7b', 'w'],
      ['SYSTEM """You are a studio critic at an art and design school. Whatever work someone describes, answer in exactly three lines and nothing else:\nWhat works: one short sentence.\nWhat doesn\'t: one short sentence.\nTry next: one short sentence.\nNo greeting, no introduction, no lists, no extra lines."""', 's'],
      ['PARAMETER temperature 0.3', 'p'],
      ['PARAMETER num_predict 120', 'p'],
      ['MESSAGE user "I made a poster for a jazz night: black background, one huge yellow saxophone, and the date in tiny type at the bottom."', 'm'],
      ['MESSAGE assistant """What works: one yellow saxophone on black reads from across the room.\nWhat doesn\'t: the date is too small to find, and it\'s the thing people need.\nTry next: set the date as large as the saxophone\'s bell, in the same yellow."""', 'm']
    ],
    prompt: 'I built a chair out of cardboard tubes, glued at every joint. It holds my weight but wobbles, and the brown looks a bit cheap.',
    before: { tokens: 318, text: 'Sure, here\'s a simple method you can follow to reinforce your cardboard tube chair:\n1. Identify the Wobbly Points … 2. Apply Glue … 3. Secure the Joints … 4. Sand the Brown Look … 5. Apply Paint …' },
    after: { tokens: 61, text: 'What works: a sturdy cardboard chair that holds your weight.\nWhat doesn\'t: the brown color and wobbly wobble, which makes it less comfortable.\nTry next: paint the chair in a more durable, non-brown color, or add some extra glue to make it more stable.' }
  },

  /* 2 · examples */
  hex: {
    base: 'SmolLM2-360M-Instruct', name: 'colour-hex-3k-360m', rows: 3000, rank: 16, layers: 16, iters: 1500,
    sample: { q: 'Light mustard yellow: a vibrant shade of yellow…', a: '#ffcc40' },
    cmd: 'train colour-hex-3k-360m --data colour-hex-3k --base HuggingFaceTB/SmolLM2-360M-Instruct --rank 16 --layers 16 --iters 1500',
    val: [[1, 5.671], [50, 1.301], [100, 1.346], [150, 1.169], [200, 1.135], [250, 1.185], [300, 1.103], [350, 1.122], [400, 1.096], [450, 1.031], [500, 1.052], [550, 0.975], [600, 1.007], [650, 1.087], [700, 0.997], [750, 1.027], [800, 0.985], [850, 1.003], [900, 0.983], [950, 1.007], [1000, 0.948], [1050, 1], [1100, 0.981], [1150, 1.001], [1200, 0.935], [1250, 0.946], [1300, 0.946], [1350, 0.982], [1400, 0.996], [1450, 0.929], [1500, 1.003]],
    dist: [
      { zh: '训练好的模型（3,000 行，1,500 步）', en: 'trained model (3,000 rows, 1,500 steps)', v: 44.6 },
      { zh: '数据少一点的旧版（1,000 行，600 步）', en: 'smaller earlier run (1,000 rows, 600 steps)', v: 54.8 },
      { zh: '瞎猜', en: 'random guess', v: 167.8 }
    ],
    chat: [
      { p: 'The green of a tennis ball at dusk.', a: '#55a033', before: 'The green color of a tennis ball at dusk is described in the following text: "The green of a tennis ball at dusk is a vivid sight…"' },
      { p: 'Pale concrete grey on an overcast morning.', a: '#777060' },
      { p: 'The orange of a traffic cone in the rain.', a: '#a07760' },
      { p: 'A deep, dusty plum, like the inside of a velvet jewellery box.', a: '#998870', miss: true }
    ]
  },

  /* 3 · taste */
  haiku: {
    base: 'smollm2:360m', name: 'haiku-575-dpo', topics: 108, pairs: 44, train: 37, held: 7,
    chosenChars: 76.5, rejectedChars: 130.5,
    pair: { p: 'Write a haiku about bread rising.', chosen: 'Bread dough swells gently\nIn the warm kitchen’s embrace\nAir fills with yeast’s sigh', rejected: 'In the morning’s warm light,\nBread to rise, the morning’s dream,\nA fluffy sight, indeed.' },
    cmd: 'prefer haiku-575-dpo --data haiku-575 --rank 16 --layers 16 --lr 5e-5 --iters 150 --beta 0.1 --sft 1',
    collapsedLoss: [[1, 0.693], [25, 0.055], [50, 0.039], [75, 0.032], [100, 0.027]],
    collapsedSample: 'keyboards keyboard keyboards keys keys keystrokes keys keys keys keys',
    eval: [
      { zh: '原始模型 smollm2:360m', en: 'base smollm2:360m', three: '10/12', exact: '1/12', mean: 1.33 },
      { zh: '普通 DPO（崩了）', en: 'plain DPO (collapsed)', three: '2/12', exact: '0/12', mean: 0.17 },
      { zh: 'haiku-575-dpo（两次采样）', en: 'haiku-575-dpo (two samplings)', three: '12/12', exact: '1–2/12', mean: 2.42, mean2: 1.83 }
    ],
    best: 'Snow-covered fox steps\nSilent as a shadow’s sigh\nLeaves a trail of frost'
  },

  /* 4 · blend: the four recorded points along t */
  blend: {
    note: '4.66e-10',
    stops: [
      { t: 0, name: 'colour-hex-3k-360m', a: '#55a033', b: '#a08070' },
      { t: 0.5, name: 'colour-x-haiku-50', a: '#558833', b: '#97a0c0' },
      { t: 0.75, name: 'colour-x-haiku-75', a: '#50b040', b: 'Silent lantern glows\nIn the quiet garden’s embrace\nGlowing light on earth' },
      { t: 1, name: 'haiku-575-dpo', a: '“Here’s a revised version with some suggested edits for clarity and style: The green of a tennis ball on the sand at dusk. …”', b: 'Folding paper thin\nA lantern light in the breeze\nWarmth in the night.' }
    ],
    pA: 'The green of a tennis ball at dusk.',
    pB: 'Write a haiku about a paper lantern.',
    extra: [
      { t: 0.5, p: 'What colour is the sea in winter?', a: '#609090' },
      { t: 0.75, p: 'What colour is the sea in winter?', a: 'In winter, the sea is often a deep, icy grey. …' }
    ]
  }
};
