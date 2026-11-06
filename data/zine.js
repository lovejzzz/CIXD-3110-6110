/* ZINE SAMPLE — what a printed, hand-made midterm zine can look like.
   Everything on these pages can be done with a pen, scissors, tape, a highlighter and sticky notes.
   Single source: window.ZINE = { pages: [...] }; rendered by renderZine() at the end of the site. */
(function () {
  const ink = '#1f2a44', red = '#d2453a', hi = '#ffe66b', blue = '#3b6fd8', green = '#2f9e5b', pencil = '#6b6b6b';
  const rough = 'filter="url(#zrough)"';
  const W = 600, H = 800;
  // tiny hand-drawn helpers (the #zrough filter adds the wobble)
  const ln = (x1, y1, x2, y2, c = ink, w = 2.2, extra = '') => `<path d="M${x1},${y1} Q${(x1 + x2) / 2 + 2},${(y1 + y2) / 2 - 3} ${x2},${y2}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round" ${extra}/>`;
  const arrow = (x1, y1, x2, y2, c = ink) => {
    const a = Math.atan2(y2 - y1, x2 - x1), l = 12;
    return ln(x1, y1, x2, y2, c) + `<path d="M${x2 - l * Math.cos(a - .45)},${y2 - l * Math.sin(a - .45)} L${x2},${y2} L${x2 - l * Math.cos(a + .45)},${y2 - l * Math.sin(a + .45)}" stroke="${c}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  };
  const box = (x, y, w, h, c = ink, fill = 'none', sw = 2.2) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" stroke="${c}" stroke-width="${sw}" fill="${fill}"/>`;
  const circ = (x, y, r, c = ink, fill = 'none') => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * .94}" stroke="${c}" stroke-width="2.2" fill="${fill}"/>`;
  const hand = (x, y, t, size = 26, c = ink, anchor = 'start', rot = 0) => `<text x="${x}" y="${y}" font-family="Caveat, 'Patrick Hand', cursive" font-size="${size}" fill="${c}" text-anchor="${anchor}" ${rot ? `transform="rotate(${rot} ${x} ${y})"` : ''}>${t}</text>`;
  const marker = (x, y, t, size = 30, c = ink, anchor = 'start', rot = 0) => `<text x="${x}" y="${y}" font-family="'Permanent Marker', Caveat, cursive" font-size="${size}" fill="${c}" text-anchor="${anchor}" ${rot ? `transform="rotate(${rot} ${x} ${y})"` : ''}>${t}</text>`;
  const hl = (x, y, w, h = 18, rot = -1) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${hi}" opacity=".75" transform="rotate(${rot} ${x} ${y})"/>`;
  const tape = (x, y, w = 90, rot = -6) => `<rect x="${x}" y="${y}" width="${w}" height="26" fill="#f4e7b8" opacity=".78" stroke="#d9c98f" stroke-width="1" transform="rotate(${rot} ${x + w / 2} ${y + 13})"/>`;
  const sticky = (x, y, w, h, c = '#ffe97a', rot = 2) => `<g transform="rotate(${rot} ${x + w / 2} ${y + h / 2})"><rect x="${x + 3}" y="${y + 4}" width="${w}" height="${h}" fill="rgba(0,0,0,.10)"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"/></g>`;
  // a cut-out typed slip (printed answer cut & pasted)
  const slip = (x, y, w, lines, rot = -1) => `<g transform="rotate(${rot} ${x} ${y})"><rect x="${x + 3}" y="${y + 3}" width="${w}" height="${lines.length * 22 + 18}" fill="rgba(0,0,0,.12)"/><rect x="${x}" y="${y}" width="${w}" height="${lines.length * 22 + 18}" fill="#fff" stroke="#bbb" stroke-width=".8"/>` +
    lines.map((l, i) => `<text x="${x + 12}" y="${y + 28 + i * 22}" font-family="'JetBrains Mono', monospace" font-size="13.5" fill="#222">${l}</text>`).join('') + `</g>`;
  // printed exam header (as it comes out of the printer) — typed, not handwritten
  const qhead = (id, title, q) => `<text x="40" y="58" font-family="'JetBrains Mono', monospace" font-size="13" fill="#b0186e">${id}</text><text x="80" y="58" font-family="'JetBrains Mono', monospace" font-size="13" fill="#333">${title}</text>` +
    q.map((l, i) => `<text x="40" y="${86 + i * 20}" font-family="'JetBrains Mono', monospace" font-size="14.5" fill="#7b776f">${l}</text>`).join('') +
    `<line x1="40" y1="${100 + q.length * 20}" x2="560" y2="${100 + q.length * 20}" stroke="#999" stroke-dasharray="4 4"/>`;
  const writing = (x, y, lines, size = 27, c = ink, lh = 34) => lines.map((l, i) => hand(x, y + i * lh, l, size, c)).join('');
  const pageNo = n => hand(560, 775, String(n), 24, pencil, 'end');

  const pages = [
    { // COVER
      id: 'cover', tip_en: 'Cover: hand-letter the title, add your name, one drawing that sums up the course. The exam’s own header can be cut out and taped on.',
      tip_zh: '封面：手写大标题、写上名字，再画一张能概括整门课的图。考卷打印出来的页眉可以剪下来贴上。',
      svg: `
        <rect x="0" y="0" width="${W}" height="${H}" fill="#fbf7ee"/>
        ${marker(50, 130, 'EXPERIMENTAL', 54, ink, 'start', -2)}${marker(50, 195, 'MIDTERM', 66, red, 'start', -2)}${marker(360, 195, 'F26', 40, ink, 'start', -4)}
        ${hand(54, 245, 'CIXD 3110 · a zine about the tools that watch, learn & act', 25, pencil)}
        <g ${rough}>
          ${[0, 1, 2, 3, 4].map(i => { const y = 560 - i * 62; const c = [green, '#999', blue, red, ink][i]; return `<path d="M300,${y - 40} L440,${y} L300,${y + 40} L160,${y} Z" fill="${['#e4f3e7', '#fff', '#e6ecfb', '#fbe6e7', '#fff'][i]}" stroke="${c}" stroke-width="2.4"/>`; }).join('')}
          ${ln(445, 560, 500, 560)}${ln(445, 498, 500, 498)}${ln(445, 436, 500, 436)}${ln(445, 374, 500, 374)}${ln(445, 312, 500, 312)}
        </g>
        ${hand(505, 566, 'data & labor', 22, green)}${hand(505, 504, 'information', 22, pencil)}${hand(505, 442, 'models', 22, blue)}${hand(505, 380, 'agents', 22, red)}${hand(505, 318, 'me', 24, ink)}
        ${tape(70, 640, 150, -4)}
        <g transform="rotate(-3 80 660)"><rect x="80" y="655" width="280" height="70" fill="#fff" stroke="#ccc"/>
        ${hand(96, 690, 'Name: ____________________', 26)}${hand(96, 718, 'Section:  3110  /  6110', 24, pencil)}</g>
        <g transform="translate(250 8)"><rect x="0" y="0" width="100" height="34" rx="4" fill="#222"/><path d="M14,34 L14,62 M86,34 L86,62" stroke="#888" stroke-width="4"/><path d="M14,62 Q50,78 86,62" stroke="#888" stroke-width="4" fill="none"/></g>
        ${hand(360, 30, '← binder clip (provided)', 20, pencil)}` },
    { // 1.3 URL
      id: 'q13', tip_en: 'Copy the URL by hand in big letters, then bracket each part and label it. Colour-coding works great with 3–4 pens.',
      tip_zh: '用大字手抄一遍网址，再给每一段画括号、写标注。准备 3–4 支彩笔分颜色，效果很好。',
      svg: `${qhead('1.3', 'URL', ['Name the parts of a URL and say what each', 'one tells the server.'])}
        ${hand(36, 200, 'https', 34, red)}${hand(102, 200, '://', 34, pencil)}${hand(140, 200, 'www.example.com', 34, blue)}${hand(352, 200, '/path/page', 34, green)}${hand(488, 200, '?q=jazz', 34, '#b07a00')}${hand(36, 436, '#top', 34, pencil)}
        <g ${rough}>${ln(38, 212, 98, 212, red)}${ln(140, 212, 345, 212, blue)}${ln(352, 212, 480, 212, green)}${ln(488, 212, 580, 212, '#b07a00')}
          ${arrow(66, 216, 70, 290, red)}${arrow(240, 216, 230, 330, blue)}${arrow(412, 216, 410, 290, green)}${arrow(534, 216, 520, 330, '#b07a00')}</g>
        ${writing(30, 316, ['scheme =', 'HOW to talk'], 25, red, 28)}
        ${writing(170, 356, ['domain =', 'WHICH server'], 25, blue, 28)}
        ${writing(350, 316, ['path =', 'WHAT page'], 25, green, 28)}
        ${writing(470, 368, ['query =', 'extras'], 25, '#b07a00', 28)}
        ${hand(118, 434, '← fragment: never sent to the server!', 22, pencil)}
        ${hl(36, 490, 300)}${writing(40, 506, ['The URL is an address. Each part answers', 'one question for the server: how, who,', 'which door (port, usually hidden), what,', 'and with which extras. (MDN)'], 27)}
        ${sticky(370, 600, 190, 130, '#cdeffd', 3)}${writing(386, 636, ['TIP: the', 'fragment stays', 'in my browser'], 24, ink, 28)}
        ${pageNo(1)}` },
    { // 2.3 folk taxonomy
      id: 'q23', tip_en: 'Draw the tree, then HIGHLIGHT the middle row. A highlighter stripe across the drawing is the whole answer in one glance.',
      tip_zh: '画出分类树，再用荧光笔把中间那一层涂亮。一条荧光带，一眼就看懂整个答案。',
      svg: `${qhead('2.3', 'Folk taxonomy', ['What is a folk taxonomy, and why does the', 'basic category (oak, dog) sit in the middle?'])}
        <rect x="40" y="356" width="520" height="56" fill="${hi}" opacity=".7" transform="rotate(-1 40 356)"/>
        <g ${rough}>
          ${circ(300, 200, 34)}${circ(170, 290, 30)}${circ(430, 290, 30)}${circ(110, 385, 30)}${circ(230, 385, 30)}${circ(370, 385, 30)}${circ(490, 385, 30)}${circ(110, 480, 26)}${circ(180, 480, 26)}
          ${ln(280, 228, 186, 264)}${ln(320, 228, 414, 264)}${ln(158, 318, 120, 356)}${ln(182, 318, 222, 356)}${ln(418, 318, 380, 356)}${ln(442, 318, 482, 356)}${ln(104, 414, 108, 456)}${ln(118, 414, 172, 456)}
        </g>
        ${hand(300, 208, 'plant', 22, ink, 'middle')}${hand(170, 298, 'tree', 22, ink, 'middle')}${hand(430, 298, 'animal', 20, ink, 'middle')}
        ${hand(110, 393, 'OAK', 24, red, 'middle')}${hand(230, 393, 'pine', 22, ink, 'middle')}${hand(370, 393, 'DOG', 24, red, 'middle')}${hand(490, 393, 'cat', 22, ink, 'middle')}
        ${hand(110, 487, 'white', 17, pencil, 'middle')}${hand(180, 487, 'red', 17, pencil, 'middle')}
        ${hand(560, 210, 'too general', 22, pencil, 'end')}${hand(560, 480, 'experts only', 22, pencil, 'end')}${marker(545, 340, 'BASIC LEVEL!', 22, red, 'end', -3)}
        ${writing(40, 560, ['Folk taxonomy = the everyday way people', 'name & group living things (Berlin: same', 'ranks everywhere). The middle level is', '"basic" (Rosch): we see it, use it, learn', 'it first, and it has the shortest names.'], 27)}
        ${pageNo(2)}` },
    { // 3.2 token
      id: 'q32', tip_en: 'Collage idea: print a sentence, cut it into token chips with scissors, glue them in a row and write the ID numbers under them.',
      tip_zh: '拼贴点子：把一句话打印出来，用剪刀剪成一个个“词元”小纸片，排成一行贴好，下面手写编号。',
      svg: `${qhead('3.2', 'Token / tokenizer', ['What is a token, and why does the model see', 'your sentence as tokens rather than words?'])}
        ${hand(40, 196, 'I cut my sentence with scissors:', 26, pencil)}
        ${(() => { let cx = 40; return ['Un', 'believ', 'ably', ',', ' Chat', 'GPT', ' can', "'t", ' count'].map(t => { const w = t.length * 9.6 + 14, x = cx; cx += w + 6; return [t, x, w]; }); })().map(([t, x, w], i) => { return `<g transform="rotate(${(i % 3) - 1} ${x} 240)"><rect x="${x + 2}" y="226" width="${w}" height="38" fill="rgba(0,0,0,.12)"/><rect x="${x}" y="224" width="${w}" height="38" fill="${['#fff', '#fdf2c4', '#e3f1ff', '#fff', '#e8f7e9', '#fde6ea', '#fff', '#fdf2c4', '#e3f1ff'][i]}" stroke="#bbb"/><text x="${x + 7}" y="249" font-family="'JetBrains Mono', monospace" font-size="15">${t.replace(/ /g, '·')}</text></g>` + hand(x + 6, 290, ['2265', '9880', '...', '11', '17554', '...', '665', '1573', '3605'][i], 19, pencil); }).join('')}
        ${tape(250, 214, 80, 4)}
        ${writing(40, 360, ['A token = a chunk of text (a word, part', 'of a word, punctuation) that the', 'tokenizer swaps for an ID number.'], 27)}
        ${hl(40, 456, 260)}${writing(40, 472, ['WHY: the model only does math on', 'numbers, and a fixed vocabulary of', 'chunks can spell ANY word, even new ones.'], 27)}
        <g ${rough}>${box(360, 590, 200, 140, blue)}</g>${writing(376, 626, ['"strawberry"', '= 1 token', 'so it can’t', 'count the r’s!'], 24, blue, 26)}
        ${pageNo(3)}` },
    { // 4.3 deploy — comic strip
      id: 'q43', tip_en: 'A process question = a comic strip. Four boxes, stick-figure level drawings are enough; arrows do the explaining.',
      tip_zh: '“过程题”就画成四格漫画。火柴人水平的画就够了，靠箭头讲清楚。',
      svg: `${qhead('4.3', 'Deployment', ['What happens between a push to GitHub and', 'a page appearing on Vercel?'])}
        <g ${rough}>${box(40, 180, 250, 190)}${box(310, 180, 250, 190)}${box(40, 390, 250, 190)}${box(310, 390, 250, 190)}
          ${box(80, 250, 110, 70)}${ln(70, 330, 200, 330)}${arrow(200, 270, 260, 230, red)}
          ${circ(435, 270, 40)}${arrow(470, 300, 520, 340, red)}
          ${box(90, 440, 70, 90)}${box(170, 440, 70, 90)}${ln(100, 470, 150, 470, pencil)}${ln(100, 490, 150, 490, pencil)}${ln(180, 470, 230, 470, pencil)}
          ${box(350, 430, 170, 110)}${ln(350, 450, 520, 450)}</g>
        ${hand(50, 210, '1. git push', 26, red)}${hand(320, 210, '2. GitHub tells Vercel', 24, red)}${hand(50, 420, '3. Vercel builds', 26, red)}${hand(320, 420, '4. live URL!', 26, red)}
        ${hand(435, 278, 'repo', 22, ink, 'middle')}${hand(366, 500, 'my-site.vercel.app', 20, blue)}${hand(56, 360, '"ship it"', 22, pencil)}${hand(206, 560, 'install + build', 18, pencil, 'middle')}
        ${writing(40, 630, ['Push → GitHub stores the commit → a webhook', 'tells Vercel → Vercel clones, builds, uploads', 'to its CDN → points a URL at it. If the build', 'fails, the old version stays live.'], 26)}
        ${pageNo(4)}` },
    { // 5.1 kanban — real sticky notes
      id: 'q51', tip_en: 'Use REAL sticky notes on the page. Three columns drawn with a ruler; the WIP limit written on top of a column.',
      tip_zh: '直接贴真的便利贴。用尺子画三栏，在栏目顶上写上 WIP 上限。',
      svg: `${qhead('5.1', 'Kanban', ['What is a Kanban board, and what can it track?'])}
        <g ${rough}>${ln(220, 160, 222, 560)}${ln(400, 160, 398, 560)}${ln(40, 200, 560, 200)}</g>
        ${marker(70, 190, 'TO DO', 26)}${marker(250, 190, 'DOING', 26, red)}${marker(430, 190, 'DONE', 26, green)}${hand(330, 190, 'max 2!', 22, red)}
        ${sticky(60, 230, 130, 80, '#ffe97a', -3)}${hand(72, 270, 'read ch.2', 24)}
        ${sticky(70, 330, 130, 80, '#ffd1dc', 2)}${hand(82, 370, 'draw 2.3', 24)}
        ${sticky(240, 240, 130, 80, '#cdeffd', 3)}${hand(252, 280, 'write 4.3', 24)}
        ${sticky(236, 340, 130, 80, '#ffe97a', -2)}${hand(248, 380, 'zine cover', 24)}
        ${sticky(420, 236, 130, 80, '#d6f5c9', 1)}${hand(432, 276, 'Q 1.1 ✓', 24)}
        ${sticky(424, 330, 130, 80, '#d6f5c9', -2)}${hand(436, 370, 'Q 1.3 ✓', 24)}
        <g ${rough}>${arrow(180, 470, 260, 470, red)}</g>${hand(70, 476, 'pull only when', 22, red)}${hand(270, 476, 'a slot frees up', 22, red)}
        ${writing(40, 590, ['A board of cards in columns (states).', 'It tracks work in progress: what’s', 'waiting, doing, done — and a WIP limit', 'shows where work piles up.'], 27)}
        ${pageNo(5)}` },
    { // 6.1 agent loop
      id: 'q61', tip_en: 'Two drawings side by side make any "X rather than Y" question easy: a straight line (chatbot) vs a circle (agent).',
      tip_zh: '“是 X 而不是 Y”这类题，左右各画一张最好懂：直线（聊天机器人）vs 圆圈（智能体）。',
      svg: `${qhead('6.1', 'Agent', ['What makes a system an agent rather than', 'a chatbot?'])}
        ${marker(60, 190, 'chatbot', 26)}${marker(330, 190, 'agent', 28, red)}
        <g ${rough}>${box(60, 220, 160, 50)}${arrow(140, 272, 140, 320)}${box(60, 324, 160, 50)}${arrow(140, 376, 140, 424)}${box(60, 428, 160, 50)}
          ${circ(430, 340, 110, red)}${arrow(530, 300, 512, 270, red)}${arrow(330, 380, 346, 410, red)}</g>
        ${hand(140, 252, 'prompt', 24, ink, 'middle')}${hand(140, 356, 'model', 24, ink, 'middle')}${hand(140, 460, 'answer', 24, ink, 'middle')}${hand(140, 510, '(I am the loop)', 20, pencil, 'middle')}
        ${hand(430, 250, 'plan', 26, red, 'middle')}${hand(545, 360, 'use a', 22, red, 'middle')}${hand(545, 384, 'tool', 22, red, 'middle')}${hand(430, 460, 'see result', 24, red, 'middle')}${hand(318, 360, 'repeat', 22, red, 'middle')}${hand(430, 346, 'GOAL', 30, ink, 'middle')}
        ${hl(40, 552, 330)}${writing(40, 568, ['An agent runs in a LOOP: the model plans,', 'calls tools, sees what really happened,', 'and decides the next step until the goal is', 'met (Anthropic). A chatbot just answers once.'], 26)}
        ${pageNo(6)}` },
    { // 7.3 quantization — rulers
      id: 'q73', tip_en: 'Measure the same line with three rulers you draw yourself (fine, medium, coarse). It shows "rounding" without any math.',
      tip_zh: '自己画三把尺子（细刻度、中刻度、粗刻度）量同一条线，不用任何数学就能讲清“取整”。',
      svg: `${qhead('7.3', 'Quantization', ['What is quantization, and what do you gain and', 'lose by running a smaller version of a model?'])}
        <g ${rough}>${[0, 1, 2].map(i => { const y = 220 + i * 90, n = [32, 8, 4][i]; let t = ln(60, y, 520, y); for (let k = 0; k <= n; k++) { const x = 60 + k * 460 / n; t += ln(x, y, x, y - (k % 4 ? 10 : 18), pencil, 1.6); } return t; }).join('')}
          ${ln(60, 186, 400, 186, red, 4)}</g>
        ${hand(530, 226, '16-bit', 22, ink)}${hand(530, 316, '8-bit', 22, ink)}${hand(530, 406, '4-bit', 22, ink)}${hand(380, 176, 'the real weight', 20, red)}
        ${hand(390, 250, '≈ exact', 20, green)}${hand(400, 340, 'close', 20, '#b07a00')}${hand(400, 430, 'rounded off!', 20, red)}
        ${writing(40, 500, ['Quantization = storing each weight with', 'fewer bits, so every number gets rounded.'], 27)}
        ${slip(40, 580, 250, ['GAIN: smaller file,', 'fits in RAM, faster'], -2)}${slip(310, 590, 250, ['LOSE: a bit less', 'precise / accurate'], 2)}
        ${pageNo(7)}` },
    { // 8.5 blend
      id: 'q85', tip_en: 'Mix two colours of paint/marker on the page. A physical blend is the best picture of t = 0.5.',
      tip_zh: '在纸上把两种颜色的颜料或马克笔混在一起。实物的“混色”就是 t = 0.5 最好的图。',
      svg: `${qhead('8.5', 'Merge / blend', ['What happens when two adapters are blended at', 't = 0.5, and who wrote the result?'])}
        <g ${rough}>${circ(130, 270, 70, blue, '#bcd3fb')}${circ(470, 270, 70, '#d1a400', '#ffe58a')}${circ(300, 270, 70, green, '#b9e5b9')}${arrow(205, 270, 225, 270)}${arrow(395, 270, 375, 270)}</g>
        ${hand(130, 278, 'adapter A', 22, ink, 'middle')}${hand(470, 278, 'adapter B', 22, ink, 'middle')}${hand(300, 278, 't = 0.5', 24, ink, 'middle')}${hand(130, 370, '"poems"', 22, pencil, 'middle')}${hand(470, 370, '"manuals"', 22, pencil, 'middle')}${hand(300, 370, 'half & half?', 22, pencil, 'middle')}
        ${marker(150, 440, 'W = (1−t)·A + t·B', 30, red)}
        ${writing(40, 510, ['Every weight becomes the average of the', 'two adapters — a mix of both styles (or', 'mush). WHO WROTE IT? Nobody directly:', 'the two datasets’ authors, the base model’s', 'makers, and the person who picked t.'], 26)}
        ${pageNo(8)}` },
    { // 9.1 guidelines — checklist + doodles
      id: 'q91', tip_en: 'Four boxes = four phases. One guideline per box, a tiny doodle of an app you know, and a ✓ or ✗.',
      tip_zh: '四个格子 = 四个阶段。每格写一条准则，配一个你熟悉的 App 小涂鸦，再打 ✓ 或 ✗。',
      svg: `${qhead('9.1', 'When the guidelines apply', ['Choose one guideline from each group and say', 'what it asks of the designer. (Amershi et al.)'])}
        <g ${rough}>${box(40, 180, 250, 200)}${box(310, 180, 250, 200)}${box(40, 400, 250, 200)}${box(310, 400, 250, 200)}</g>
        ${marker(55, 214, 'INITIALLY', 22, blue)}${writing(55, 248, ['G1 Make clear what', 'it can do', '→ show the menu!'], 24, ink, 28)}
        ${marker(325, 214, 'DURING', 22, green)}${writing(325, 248, ['G4 Show info that', 'fits the moment', '→ maps: next turn'], 24, ink, 28)}
        ${marker(55, 434, 'WHEN WRONG', 22, red)}${writing(55, 468, ['G9 Easy to correct', '→ undo / edit', 'autocorrect ✓'], 24, ink, 28)}
        ${marker(325, 434, 'OVER TIME', 22, '#b07a00')}${writing(325, 468, ['G17 Global controls', '→ one switch to', 'turn it all off'], 24, ink, 28)}
        ${hand(250, 360, '✓', 40, green)}${hand(520, 360, '✓', 40, green)}${hand(250, 580, '✓', 40, green)}${hand(520, 580, '✗', 40, red)}
        ${writing(40, 650, ['Each guideline asks the designer to plan', 'for one moment of using AI — not just', 'the moment it works.'], 26)}
        ${pageNo(9)}` },
    { // C5 practice map
      id: 'qC5', tip_en: 'The last question is about YOU. A mind map of your own practice with + and − in two colours. Only you can fill this page.',
      tip_zh: '最后一题是关于你自己的。画一张你自己创作实践的思维导图，用两种颜色写 + 和 −。这一页只有你能填。',
      svg: `${qhead('C5', 'What would you do with it', ['Where in your practice do these technologies', 'resonate the most? Positive and negative.'])}
        <g ${rough}>${circ(300, 380, 70)}${ln(240, 340, 150, 250)}${ln(360, 340, 450, 250)}${ln(240, 420, 150, 520)}${ln(360, 420, 450, 520)}</g>
        ${marker(300, 375, 'MY', 24, ink, 'middle')}${marker(300, 404, 'PRACTICE', 20, ink, 'middle')}
        ${hand(150, 230, 'research', 26, ink, 'middle')}${hand(150, 200, '+ faster', 22, green, 'middle')}${hand(150, 256, '− fake sources', 22, red, 'middle')}
        ${hand(450, 230, 'sketching', 26, ink, 'middle')}${hand(450, 200, '+ more ideas', 22, green, 'middle')}${hand(450, 256, '− all look alike', 22, red, 'middle')}
        ${hand(150, 550, 'making', 26, ink, 'middle')}${hand(150, 578, '+ agents code', 22, green, 'middle')}${hand(150, 604, '− I learn less', 22, red, 'middle')}
        ${hand(450, 550, 'sharing', 26, ink, 'middle')}${hand(450, 578, '+ live in minutes', 22, green, 'middle')}${hand(450, 604, '− my data trains it', 22, red, 'middle')}
        ${sticky(160, 650, 280, 90, '#ffd1dc', -2)}${writing(178, 688, ['← YOUR words here!', '(this is only a model)'], 24, red, 28)}
        ${pageNo(10)}` },
    { // BACK COVER
      id: 'back', tip_en: 'Back cover: a checklist before you clip it together. Small, but it shows care.',
      tip_zh: '封底：交之前的检查清单。很小的细节，但能看出用心。',
      svg: `<rect x="0" y="0" width="${W}" height="${H}" fill="#fbf7ee"/>
        ${marker(60, 120, 'before I clip it:', 40, ink, 'start', -2)}
        ${['every question answered (no blanks!)', 'definitions as the SOURCES say them', 'source named (Wright, Zuboff, MDN...)', 'in MY own words, not copied', 'one drawing / collage per class', 'name + section on the cover', 'pages in order, binder clip on'].map((t, i) => `<g ${rough}>${box(64, 170 + i * 66, 30, 30)}</g>${hand(80, 196 + i * 66, '✓', 34, green, 'middle')}${hand(112, 196 + i * 66, t, 28)}`).join('')}
        ${hand(300, 690, 'due Fri Nov 20 · 5 pm', 30, red, 'middle', -2)}
` }
  ];

  // hand-drawn art reused for these questions: crop window [y0, y1] of each custom page (drawing only)
  const CROP = { q13: [150, 452], q23: [150, 500], q32: [168, 300], q43: [170, 588], q51: [158, 492], q61: [168, 525],
    q73: [158, 445], q85: [160, 462], q91: [170, 612], qC5: [150, 625] };
  const art = {}; pages.forEach(p => { if (CROP[p.id]) art[p.id.slice(1).replace(/^(\d)(\d)$/, '$1.$2')] = p; });
  const cover = pages.find(p => p.id === 'cover'), back = pages.find(p => p.id === 'back');
  window.ZINE = { pages, art, W, H };

  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // site markup → handwritten HTML: [[k|text]] → text, **bold** → highlighter, *em* → underline
  const handHTML = src => esc(src || '').trim()
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, k, t) => t || ((window.TERMS || {})[k.trim()] || {}).en || k)
    .replace(/\*\*([^*]+)\*\*/g, '<mark>$1</mark>')
    .replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?![*\w])/g, '$1<u>$2</u>')
    .replace(/`([^`]+)`/g, '<span class="zc">$1</span>')
    .split(/\n\s*\n/).map(b => `<p>${b.replace(/\n/g, '<br>')}</p>`).join('');
  // pages where the zine needs a written-out answer instead of the site's template
  const ZTEXT = {
    'C5': `These tools resonate most in the **making** stage of my design work. **Positive:** a local model and an agent harness let me prototype in an afternoon — I write a clear spec (prompt as specification), the agent builds, and I check it against a rubric I wrote first; with *file over app* my notes and sketches stay mine. **Negative:** the same speed risks **de-skilling** and sameness — if every idea starts from the same model, the work starts to look alike; and hosted tools feed **surveillance capitalism** with my drafts. My rule: research and ideas by hand first, AI for building, and local models for anything private.`
  };
  const words = t => (t || '').split(/\s+/).length;

  function svgPage(p, n) {
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img"><rect width="${W}" height="${H}" fill="#fffdf8"/>${p.svg}</svg>`;
  }
  function qPage(q, n) {
    let fig = '';
    const a = art[q.id];
    if (a) { const [y0, y1] = CROP[a.id]; fig = `<svg class="zart" viewBox="0 ${y0} ${W} ${y1 - y0}" xmlns="http://www.w3.org/2000/svg">${a.svg}</svg>`; }
    else { try { fig = q.fig ? q.fig() : ''; } catch (e) { fig = ''; } }
    const wc = words(ZTEXT[q.id] || q.short_en);
    const fs = Math.max(2.9, Math.min(3.9, 4.6 - wc * 0.017)).toFixed(2);
    return `<div class="zq">
      <div class="zq-h"><b>${esc(q.id)}</b> ${esc(q.t_en)}</div>
      <div class="zq-q">${esc(q.q_en)}</div>
      <div class="zq-fig ${a ? 'is-art' : 'is-site'}">${fig}</div>
      <div class="zq-a" style="font-size:${fs}cqw">${handHTML(ZTEXT[q.id] || q.short_en)}</div>
      <div class="zq-n">${n}</div>
    </div>`;
  }

  window.renderZine = function (host) {
    const defs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
      <filter id="zrough" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.6"/></filter>
      <filter id="zrough2" x="-2%" y="-2%" width="104%" height="104%"><feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="3.2"/></filter>
    </defs></svg>`;
    const qs = (window.CLASSES || []).slice().sort((a, b) => a.order - b.order).flatMap(c => c.qs.map(q => ({ q, c })));
    let html = defs;
    html += `<figure class="zpage-wrap"><div class="zpage">${svgPage(cover)}</div><figcaption class="ztip"><span class="en">${cover.tip_en}</span><span class="zh">${cover.tip_zh}</span></figcaption></figure>`;
    let lastC = null;
    qs.forEach(({ q, c }, i) => {
      const a = art[q.id];
      const sep = c !== lastC ? `<h3 class="zclass"><span>${c.n === 'C' ? 'C' : c.n}</span> <span class="en">${esc(c.t_en)}</span><span class="zh">${esc(c.t_zh)}</span></h3>` : '';
      lastC = c;
      html += (sep ? sep.replace('<h3 class="zclass">', `<h3 class="zclass" data-cls="${c.n}">`) : '') + `<figure class="zpage-wrap" data-cls="${c.n}"><div class="zpage zpage-q">${qPage(q, i + 1)}</div>` +
        (a ? `<figcaption class="ztip"><span class="en">${a.tip_en}</span><span class="zh">${a.tip_zh}</span></figcaption>` : '') + `</figure>`;
    });
    html += `<figure class="zpage-wrap"><div class="zpage">${svgPage(back)}</div><figcaption class="ztip"><span class="en">${back.tip_en}</span><span class="zh">${back.tip_zh}</span></figcaption></figure>`;
    host.innerHTML = html;
  };
})();
