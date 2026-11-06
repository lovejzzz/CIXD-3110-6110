/* CLASS 1 · SURVEILLANCE CAPITALISM */
defTerms({
  surv_cap: { en: 'Surveillance capitalism', zh: '监视资本主义',
    d_en: 'Shoshana Zuboff’s name for an economic order that claims human experience as free raw material, turns it into behavioral data, and sells predictions of what we will do.',
    d_zh: '肖莎娜·祖博夫提出的概念：把人的经验当作免费原材料，转成行为数据，再把“你接下来会做什么”的预测卖出去的经济秩序。' },
  behav_surplus: { en: 'Behavioral surplus', zh: '行为剩余',
    d_en: 'Data collected beyond what is needed to improve the service — the extra traces (timing, location, pauses, likes) that become the raw material for prediction.',
    d_zh: '超出“改进服务”所需的数据——停留时间、位置、点赞等额外痕迹，它们成为预测的原材料。' },
  pred_products: { en: 'Prediction products', zh: '预测产品',
    d_en: 'What machine intelligence manufactures from behavioral surplus: forecasts of what you will click, buy or do next.',
    d_zh: '机器智能用行为剩余“生产”出来的东西：对你下一步会点什么、买什么、做什么的预测。' },
  behav_futures: { en: 'Behavioral futures market', zh: '行为期货市场',
    d_en: 'The market where prediction products are sold — mainly to advertisers who are betting on our future behavior. We are not the customers; we are the source.',
    d_zh: '出售预测产品的市场，买家主要是广告主，他们在“押注”我们未来的行为。我们不是顾客，而是原料来源。' },
  behav_mod: { en: 'Behavior modification', zh: '行为矫正 / 行为修正',
    d_en: 'The most certain prediction is one you cause. Platforms nudge, tune and herd behavior (notifications, feeds, game rewards) so predictions come true.',
    d_zh: '最准确的预测是你亲手促成的预测。平台通过推送、信息流、游戏奖励来引导和“放牧”行为，让预测成真。' },
  technofeudalism: { en: 'Technofeudalism', zh: '技术封建主义',
    d_en: 'Yanis Varoufakis’s argument that platforms have replaced markets with digital fiefdoms: profit is replaced by rent paid to the owners of cloud capital.',
    d_zh: '雅尼斯·瓦鲁法基斯的观点：平台用“数字封地”取代了市场，利润被付给“云资本”所有者的地租所取代。' },
  cloud_capital: { en: 'Cloud capital', zh: '云资本',
    d_en: 'Varoufakis: the networked machines, servers, software and algorithms that do not produce goods but command attention and behavior — and that users build for free.',
    d_zh: '瓦鲁法基斯：联网的服务器、软件与算法。它不生产商品，而是支配注意力和行为——而且是用户免费帮它建起来的。' },
  cloud_rent: { en: 'Cloud rent', zh: '云地租',
    d_en: 'The fee sellers pay to exist inside a platform (e.g., Amazon’s cut of each sale). Rent, not profit from competition, is how the cloudalist earns.',
    d_zh: '卖家为了能在平台里“存在”而交的钱（例如亚马逊从每笔交易中抽成）。云领主靠收租而不是靠竞争获利。' },
  cloud_serfs: { en: 'Cloud serfs', zh: '云农奴',
    d_en: 'Users who work for free — posting, rating, scrolling, training the algorithm — and thereby reproduce the platform’s cloud capital.',
    d_zh: '免费劳动的用户——发帖、评分、刷屏、训练算法——从而不断再生产平台的云资本。' },
  url: { en: 'URL', zh: '统一资源定位符 URL',
    d_en: 'Uniform Resource Locator: the address of a unique resource on the Web. Each part tells the browser and server something different.',
    d_zh: '统一资源定位符：网络上某个唯一资源的地址。每个部分告诉浏览器和服务器不同的信息。' },
  scheme: { en: 'Scheme', zh: '协议 / 方案',
    d_en: 'The part before “://”. Tells the browser which protocol to use to talk to the server — usually https (encrypted HTTP).',
    d_zh: '“://”前面的部分。告诉浏览器用哪种协议和服务器通信，通常是 https（加密的 HTTP）。' },
  domain: { en: 'Domain name', zh: '域名',
    d_en: 'Which web server is being requested. DNS translates the name into an IP address; you could type the IP directly.',
    d_zh: '指明要访问哪台网页服务器。DNS 会把域名翻译成 IP 地址；你也可以直接输入 IP。' },
  port: { en: 'Port', zh: '端口',
    d_en: 'The technical “gate” on the server. Usually omitted because the defaults are standard: 80 for HTTP, 443 for HTTPS.',
    d_zh: '服务器上的技术“门”。通常省略，因为有默认值：HTTP 用 80，HTTPS 用 443。' },
  path: { en: 'Path', zh: '路径',
    d_en: 'Which resource on that server — once a real file path, today often a route the server interprets.',
    d_zh: '服务器上的哪个资源——过去是真实的文件路径，现在往往是由服务器解释的“路由”。' },
  query: { en: 'Query parameters', zh: '查询参数',
    d_en: 'After “?”: key=value pairs separated by “&”. Extra information the server can use (a search term, a page number, a tracking ID).',
    d_zh: '“?”之后，用“&”分隔的 键=值 对。服务器可以使用的额外信息（搜索词、页码、追踪编号等）。' },
  fragment: { en: 'Anchor / fragment', zh: '锚点 / 片段',
    d_en: 'After “#”: a spot inside the page. It is never sent to the server — only the browser uses it.',
    d_zh: '“#”之后：页面内部的某个位置。它从不发送给服务器，只由浏览器使用。' },
  dns: { en: 'DNS', zh: '域名系统 DNS',
    d_en: 'Domain Name System — the Internet’s phone book that turns names like example.com into IP addresses.',
    d_zh: '域名系统——互联网的“电话簿”，把 example.com 这样的名字翻译成 IP 地址。' },
  http: { en: 'HTTP', zh: '超文本传输协议 HTTP',
    d_en: 'The request–response protocol of the Web: the browser sends a request (method + URL + headers + optional body); the server sends back a response.',
    d_zh: '网络的“请求—响应”协议：浏览器发出请求（方法 + URL + 头部 + 可选的正文），服务器返回响应。' },
  get: { en: 'GET', zh: 'GET 请求',
    d_en: 'MDN: requests a representation of a resource and should only retrieve data. Any data rides in the URL’s query string.',
    d_zh: 'MDN：请求某个资源的表示，只应用于获取数据。附带的数据放在 URL 的查询字符串里。' },
  post: { en: 'POST', zh: 'POST 请求',
    d_en: 'MDN: submits an entity to the resource, often causing a change in state or side effects on the server. Data travels in the request body.',
    d_zh: 'MDN：向资源提交一个实体，常常会改变服务器的状态或产生副作用。数据放在请求正文（body）里传输。' },
  req_body: { en: 'Request body', zh: '请求正文',
    d_en: 'The payload after the headers. POST puts form data here, so it is not in the address bar, history or bookmarks.',
    d_zh: '头部之后的数据载荷。POST 把表单数据放在这里，所以它不会出现在地址栏、历史记录或书签里。' },
  idempotent: { en: 'Safe / idempotent', zh: '安全 / 幂等',
    d_en: 'GET is “safe” (doesn’t change the server) and idempotent (repeating it has the same effect). POST is neither — that’s why browsers warn before resubmitting a form.',
    d_zh: 'GET 是“安全的”（不改变服务器）且幂等（重复执行效果相同）。POST 两者都不是——所以浏览器在重新提交表单前会警告你。' },
  shell: { en: 'Shell', zh: 'Shell（命令解释器）',
    d_en: 'A program that reads the text commands you type, interprets them, and asks the operating system to run programs (bash, zsh, PowerShell).',
    d_zh: '读取你输入的文字命令、解释它们，并让操作系统运行程序的程序（如 bash、zsh、PowerShell）。' },
  terminal: { en: 'Terminal', zh: '终端',
    d_en: 'The window application that shows the shell’s text input and output. Terminal = the screen; shell = the interpreter inside it.',
    d_zh: '显示 shell 文字输入与输出的窗口程序。终端是“屏幕”，shell 是里面的“解释器”。' },
  gui: { en: 'GUI', zh: '图形用户界面 GUI',
    d_en: 'Graphical User Interface — windows, icons, folders, trash cans: visual metaphors layered over the same files and programs.',
    d_zh: '图形用户界面——窗口、图标、文件夹、废纸篓：覆盖在同样的文件和程序之上的视觉隐喻。' },
  cli_args: { en: 'Command · flags · arguments', zh: '命令 · 选项 · 参数',
    d_en: 'The grammar Explainshell takes apart: the program name, the options that change its behavior (-l, -a), and what it acts on (a path).',
    d_zh: 'Explainshell 拆解的语法：程序名、改变其行为的选项（-l、-a），以及它作用的对象（比如路径）。' },
  pipe: { en: 'Pipe ( | )', zh: '管道 ( | )',
    d_en: 'Sends the output of one program into the input of the next — composition that a GUI rarely lets you see or do.',
    d_zh: '把一个程序的输出送进下一个程序的输入——这种“组合”是 GUI 很少让你看到或做到的。' }
});

defClass({
  order: 1, n: '1',
  t_en: 'Surveillance Capitalism', t_zh: '监视资本主义',
  intro_en: 'The first class names the economic dilemma we design inside of — data extraction and platform power — and then opens the hood of the Web itself: what a URL says, what a request carries, and what the command line shows that the screen hides.',
  intro_zh: '第一课先命名我们所处的经济困境——数据攫取与平台权力；然后打开网络本身的“引擎盖”：URL 在说什么、一次请求带着什么，以及命令行显示了哪些屏幕隐藏的东西。',
  qs: [
    {
      id: '1.1', t_en: 'Surveillance capitalism', t_zh: '监视资本主义',
      q_en: 'Describe surveillance capitalism.', q_zh: '描述“监视资本主义”。',
      src: 'Zuboff; AI and Humanity (AH)',
      fig() {
        // Zuboff's cycle: experience → split → surplus → machine intelligence → prediction products → futures market → behavior modification → back to you
        let s = '';
        const node = (x, y, w, h, en, zh, o = {}) => F.rect(x, y, w, h, { rx: o.rx ?? 8, fill: o.fill || '#fff', stroke: o.stroke || F.C.ink, sw: o.sw, tip: o.tip, note: o.note }) +
          F.text(x + w / 2, y + h / 2 - 7, en, { cls: 'lt', color: o.tc || F.C.ink }) + F.sub(x + w / 2, y + h / 2 + 12, zh, { anchor: 'middle' });
        // you
        s += F.circle(92, 176, 46, { fill: '#fff', note: { en: 'Clicks, searches, location, pauses, faces, voices — claimed as free raw material.', zh: '点击、搜索、位置、停顿、面孔、声音——被当作免费原材料。' } });
        for (let i = 0; i < 26; i++) { const a = i * 2.4, r = 8 + (i % 5) * 6; s += `<circle cx="${(92 + r * Math.cos(a)).toFixed(1)}" cy="${(170 + r * 0.8 * Math.sin(a)).toFixed(1)}" r="1.2" fill="${F.C.ink}"/>`; }
        s += F.text(92, 238, 'YOU · EXPERIENCE', { cls: 'lt' }) + F.sub(92, 254, '你 · 人的经验', { anchor: 'middle' });
        // flow out of you
        s += F.path('M138,176 L208,176', { arrow: true, sw: 1.4 });
        // splitter
        s += F.g(F.circle(222, 176, 10, { fill: F.C.ink }) + F.text(222, 204, 'DATA', { cls: 'tiny', color: F.C.mute }), { note: { en: 'Everything you do becomes data. The platform decides how to split it.', zh: '你做的一切都变成数据，由平台决定怎么分。' } });
        // thin blue branch: service improvement, loops back to you
        s += F.path('M226,166 C240,96 270,80 300,80', { stroke: F.C.blue, sw: 1.2, arrow: true });
        s += node(300, 54, 170, 52, 'SERVICE IMPROVEMENT', '改进服务（返还给你）', { fill: F.C.blueF, stroke: F.C.blue, tc: F.C.blue, note: { en: 'The small share of data actually used to make the product better for you.', zh: '真正用来让产品更好用的那一小部分数据。' } });
        s += F.path('M300,70 C200,30 110,70 96,124', { stroke: F.C.blue, sw: 1.2, arrow: true, dash: '4 3' });
        // thick red branch: behavioral surplus
        s += F.path('M232,182 L298,206', { stroke: F.C.red, sw: 4, arrow: false }) + F.path('M290,203 L300,207', { stroke: F.C.red, sw: 1.2, arrow: true });
        s += node(302, 180, 150, 54, 'BEHAVIORAL SURPLUS', '行为剩余（被拿走）', { fill: F.C.redF, stroke: F.C.red, tc: F.C.red, sw: 1.6, tip: 'behav_surplus' });
        s += F.path('M452,207 L486,207', { stroke: F.C.red, sw: 4 }) + F.path('M480,207 L492,207', { stroke: F.C.red, sw: 1.2, arrow: true });
        // machine intelligence (chips)
        let chips = ''; for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) chips += `<rect x="${508 + i * 18}" y="${188 + j * 16}" width="9" height="9" fill="${F.C.ink}"/>`;
        s += F.g(F.rect(494, 172, 88, 70, { rx: 6 }) + chips + F.text(538, 262, 'MACHINE', { cls: 'tiny' }) + F.text(538, 274, 'INTELLIGENCE', { cls: 'tiny' }) + F.sub(538, 290, '机器智能', { anchor: 'middle' }),
          { note: { en: 'Algorithms refine the surplus into forecasts.', zh: '算法把剩余数据加工成预测。' } });
        s += F.path('M582,207 L612,207', { stroke: F.C.mag, sw: 1.6, arrow: true });
        s += node(614, 180, 136, 54, 'PREDICTION PRODUCTS', '预测产品', { fill: F.C.magF, stroke: F.C.mag, tc: F.C.mag, tip: 'pred_products' });
        s += F.path('M682,234 L682,300', { stroke: F.C.mag, sw: 1.6, arrow: true });
        s += node(560, 302, 190, 56, 'BEHAVIORAL FUTURES MARKET', '行为期货市场 · 广告主下注', { stroke: F.C.mag, tc: F.C.mag, tip: 'behav_futures' });
        // behavior modification loop back to you
        s += F.g(F.path('M560,330 C300,392 -14,330 44,192', { stroke: F.C.mag, sw: 1.6, arrow: true, dash: '6 4' }) +
          F.text(330, 362, 'BEHAVIOR MODIFICATION · feeds, nudges, rewards', { cls: 'tiny', color: F.C.mag }) + F.sub(330, 378, '行为矫正：信息流、推送、奖励——让预测成真', { anchor: 'middle' }), { tip: 'behav_mod' });
        // proportion note
        s += F.text(600, 140, 'thin = what comes back · thick = what is taken', { cls: 'tiny', color: F.C.mute });
        return F.svg(760, 392, s, { label: 'the surveillance capitalism cycle' });
      },
      cap_en: 'Zuboff’s cycle. Your experience becomes data; a thin share comes back as a better service, the thick share is surplus that machine intelligence turns into predictions, which are sold — and then the system nudges you so the predictions come true.',
      cap_zh: '祖博夫描述的循环。你的经验变成数据：细细一股以“更好的服务”回到你手里，粗的那股是“剩余”，被机器智能加工成预测并卖掉——然后系统再“推”你一把，让预测成真。',
      a_en: `[[surv_cap]] is Shoshana Zuboff’s term for an economic order that **claims human experience as free raw material** and turns it into behavioral data for hidden practices of extraction, prediction and sale. Our course reading (AI and Humanity) frames it simply: a business model built on relentless data collection to feed targeted advertising — corporate surveillance, distinct from state surveillance.

How it works:
- Platforms collect far more than they need to serve you. The extra is [[behav_surplus]].
- Machine intelligence refines the surplus into [[pred_products]] — forecasts of what you will do next.
- Those forecasts are sold in [[behav_futures]] to advertisers and others. We are not the customer; we are the source of the raw material.
- The surest prediction is one you cause, so the system moves toward [[behav_mod]]: feeds, notifications and rewards that nudge us into the predicted behavior.

The result is a huge **asymmetry of knowledge**: they know a great deal about us; we know almost nothing about them.`,
      a_zh: `[[surv_cap]]是肖莎娜·祖博夫（Shoshana Zuboff）提出的术语，指一种**把人的经验当作免费原材料**的经济秩序：把经验转化为行为数据，用于隐蔽的提取、预测和出售。课程读物《AI and Humanity》给出的简洁定义是：一种依靠不间断收集数据来投放精准广告的商业模式——属于企业监视，与国家监视不同。

运作方式：
- 平台收集的数据远超服务你所需，多出的部分就是[[behav_surplus]]。
- 机器智能把这些剩余加工成[[pred_products]]——对你下一步行为的预测。
- 这些预测在[[behav_futures]]里卖给广告主等买家。我们不是顾客，而是原材料的来源。
- 最确定的预测是被“促成”的预测，于是系统走向[[behav_mod]]：用信息流、推送和奖励把我们推向被预测的行为。

结果是巨大的**知识不对称**：他们对我们了如指掌，我们对他们几乎一无所知。`,
      short_en: `[[surv_cap]] is Shoshana Zuboff’s name for an economic order that **claims human experience as free raw material**. Platforms collect more than they need ([[behav_surplus]]), machine intelligence turns it into **prediction products**, and these are sold in **behavioral futures markets** to advertisers — then the system nudges behavior so the predictions come true ([[behav_mod]]). It creates a huge asymmetry: they know us, we don’t know them.`,
      short_zh: `[[surv_cap]]是肖莎娜·祖博夫提出的概念，指一种**把人的经验当作免费原材料**的经济秩序。平台收集远超所需的数据（[[behav_surplus]]），机器智能把它加工成**预测产品**，在**行为期货市场**卖给广告主——系统再推动我们的行为，让预测成真（[[behav_mod]]）。结果是巨大的不对称：他们了解我们，我们却不了解他们。`,
      basis_en: `Shoshana Zuboff, *The Age of Surveillance Capitalism* (2019) — the terms surplus, prediction products, futures markets and behavior modification are hers. The one-line definition (“a business model based on relentless data collection to feed targeted advertising… corporate surveillance distinct from state digital authoritarianism”) is from the course glossary, via the AI and Humanity reading.`,
      basis_zh: `肖莎娜·祖博夫《监控资本主义时代》（2019）——行为剩余、预测产品、行为期货市场、行为矫正都是她的术语。一句话定义（“一种靠不间断收集数据来投放精准广告的商业模式……与国家数字威权不同的企业监视”）来自课程词汇表，出自《AI and Humanity》读物。`,
      rel: ['1.2', '3.5', '7.5'],
      hook_en: 'You are not the product — you are the raw material. The product is the prediction of you.',
      hook_zh: '你不是产品，你是原材料；真正的产品是“对你的预测”。',
      trap_en: 'Don’t just say “companies collect data.” Name the chain: experience → behavioral surplus → prediction products → sold to advertisers → behavior modification.',
      trap_zh: '不要只写“公司收集数据”。要写出完整链条：经验 → 行为剩余 → 预测产品 → 卖给广告主 → 行为矫正。'
    },
    {
      id: '1.2', t_en: 'Technofeudalism', t_zh: '技术封建主义',
      q_en: 'What does technofeudalism highlight? How does it relate to surveillance capitalism?',
      q_zh: '“技术封建主义”强调了什么？它与监视资本主义有什么关系？',
      src: 'Varoufakis, Technofeudalism',
      fig() {
        F.setIso(24, 380, 84);
        let s = '';
        // the fief (platform) — big base
        s += F.g(F.plate({ x: 0, y: 0, z: 0, w: 7, d: 7, t: 0.25, pattern: 'grid', density: 7, fill: '#fff' }) +
          F.label(F.iso(0, 4.5, 0.25), 200, 'THE FIEF = PLATFORM') + F.sub(192, F.iso(0, 4.5, 0.25)[1] + 17, '封地 = 平台（亚马逊、应用商店）', { anchor: 'end' }),
          { note: { en: 'Not a market: one company owns the space where buying and selling happen.', zh: '不是市场：交易发生的整个空间由一家公司拥有。' } });
        // vassals (sellers)
        const sellers = [[0.5, 5.0], [5.0, 0.5], [0.5, 2.6]];
        let v = '';
        sellers.forEach(([x, y]) => { v += F.plate({ x, y, z: 0.25, w: 1.2, d: 1.2, t: 0.5, fill: F.C.amberF, side: '#f3e3bf' }); });
        s += F.g(v + F.label(F.iso(5.9, 0.5, 0.75), 580, 'VASSALS · SELLERS') + F.sub(588, F.iso(5.9, 0.5, 0.75)[1] + 17, '附庸 · 卖家：交云地租'), { tip: 'cloud_rent' });
        // serfs (users) dots
        let u = '';
        for (let i = 0; i < 14; i++) { const x = 2 + (i % 5) * 0.75, y = 2.2 + Math.floor(i / 5) * 1.3; const p = F.iso(x + (i % 2) * 0.3, y + 2.2 * 0.3, 0.25); u += `<circle cx="${p[0]}" cy="${p[1] - 5}" r="4.5" fill="${F.C.blueF}" stroke="${F.C.blue}" stroke-width="1"/><line x1="${p[0]}" y1="${p[1] - 1}" x2="${p[0]}" y2="${p[1] + 6}" stroke="${F.C.blue}"/>`; }
        s += F.g(u + F.label(F.iso(5.6, 5.2, 0.25), 580, 'CLOUD SERFS · USERS') + F.sub(588, F.iso(5.6, 5.2, 0.25)[1] + 17, '云农奴 · 用户：免费劳动'), { tip: 'cloud_serfs' });
        // cloud capital floating above
        const cz = 4.2;
        let cc = F.plate({ x: 2.3, y: 2.3, z: cz, w: 2.4, d: 2.4, t: 0.55, pattern: 'chips', density: 5, fill: '#fff' });
        const c = F.iso(3.5, 3.5, cz);
        cc += F.label(F.iso(2.3, 3.8, cz + 0.55), 240, 'CLOUD CAPITAL · ALGORITHM') + F.sub(232, F.iso(2.3, 3.8, cz + 0.55)[1] + 17, '云资本 · 算法（云领主所有）', { anchor: 'end' });
        s += F.g(cc, { tip: 'cloud_capital' });
        // rent arrows (amber) from every seller, data arrow (blue) from users, all into the cloud capital above
        let ar = '';
        sellers.forEach(([x, y]) => {
          const a = F.iso(x + 0.6, y + 0.6, 0.85);
          ar += F.path(`M${a[0]},${a[1] - 6} Q${a[0]},${c[1] + 12} ${c[0] + (a[0] < c[0] ? -26 : 26)},${c[1] + 22}`, { stroke: F.C.amber, arrow: true, dash: '4 3' });
        });
        const ua = F.iso(3.4, 4.0, 0.6);
        ar += F.path(`M${ua[0]},${ua[1] - 14} L${c[0]},${c[1] + 30}`, { stroke: F.C.blue, arrow: true, dash: '4 3' });
        ar += F.line(560, 22, 590, 22, { stroke: F.C.amber, dash: '4 3' }) + F.text(598, 26, 'RENT ↑', { anchor: 'start', cls: 'tiny', color: F.C.amber }) + F.sub(650, 26, '地租');
        ar += F.line(560, 42, 590, 42, { stroke: F.C.blue, dash: '4 3' }) + F.text(598, 46, 'DATA + UNPAID WORK ↑', { anchor: 'start', cls: 'tiny', color: F.C.blue }) + F.sub(598, 62, '数据与无偿劳动');
        s += ar;
        return F.svg(760, 285, s, { label: 'technofeudalism diagram' });
      },
      cap_en: 'Capitalism needs a market where many sellers compete for profit. In the technofeudal picture the market sits inside one owner’s cloud: sellers pay rent, users work for free, and the algorithm sets the rules.',
      cap_zh: '资本主义需要一个众多卖家竞争利润的市场。在技术封建主义图景里，市场被装进一个所有者的“云”里：卖家交租，用户免费劳动，算法制定规则。',
      a_en: `[[technofeudalism]] (Yanis Varoufakis) highlights a shift in **who earns and how**. In capitalism, firms make *profit* by competing in markets. On today’s platforms there is no open market — Amazon, the App Store or Uber *is* the marketplace, owned by one company. So:
- Sellers become vassals who pay [[cloud_rent]] (a cut of every sale) just to exist inside the platform.
- Users become [[cloud_serfs]]: our unpaid posting, rating and scrolling keeps building the owner’s [[cloud_capital]].
- The owners (“cloudalists”) earn **rent, not profit**; power comes from controlling access, not from making better goods.

**Relation to surveillance capitalism:** both start from the same engine — the extraction of our behavior as data. Zuboff describes the extraction → prediction → behavior-modification loop as a new, “rogue” *form* of capitalism. Varoufakis takes the next step: the data and algorithms we produce become a new kind of capital so powerful that it replaces markets with fiefdoms. Surveillance is the **mechanism**; technofeudalism is the **economic structure** that mechanism builds.`,
      a_zh: `[[technofeudalism]]（雅尼斯·瓦鲁法基斯）强调的是**“谁在赚钱、怎么赚”**的转变。在资本主义里，企业通过在市场中竞争获得*利润*。而在今天的平台上并不存在开放市场——亚马逊、App Store、Uber 本身*就是*市场，并归一家公司所有。于是：
- 卖家成为附庸，为了能在平台里存在而交[[cloud_rent]]（每笔交易抽成）。
- 用户成为[[cloud_serfs]]：我们无偿的发帖、评分、刷屏不断为平台主建造[[cloud_capital]]。
- 所有者（“云领主”）赚的是**地租，而不是利润**；权力来自控制准入，而不是做出更好的产品。

**与监视资本主义的关系：**两者出自同一个引擎——把我们的行为当作数据来提取。祖博夫把“提取 → 预测 → 行为矫正”的循环描述为资本主义的一种新的、“流氓式”的*形态*。瓦鲁法基斯更进一步：我们产生的数据和算法成为一种新型资本，强大到用“封地”取代了市场。监视是**机制**，技术封建主义是这个机制所搭建起来的**经济结构**。`,
      short_en: `[[technofeudalism]] (Varoufakis) highlights that platforms are no longer markets but **fiefs**: owners of [[cloud_capital]] earn **rent, not profit** — sellers pay [[cloud_rent]] to exist inside Amazon or an app store, and users are [[cloud_serfs]] whose unpaid posting and scrolling keeps building that capital. Relation: both start from the same extraction of behavior as data — surveillance capitalism describes the **mechanism** (extract → predict → modify); technofeudalism names the **economic structure** it builds.`,
      short_zh: `[[technofeudalism]]（瓦鲁法基斯）强调平台已不是市场，而是**封地**：[[cloud_capital]]的所有者赚的是**地租而不是利润**——卖家为了在亚马逊或应用商店里存在而交[[cloud_rent]]，用户是[[cloud_serfs]]，无偿发帖和刷屏不断建造这种资本。关系：两者都始于把行为当作数据来提取——监视资本主义描述的是**机制**（提取 → 预测 → 矫正），技术封建主义命名的是这一机制搭建出的**经济结构**。`,
      basis_en: `Yanis Varoufakis, *Technofeudalism: What Killed Capitalism* (2023). Checked against an interview summary: cloud capital as a “mutation” of capital, rent replacing profit, capitalists becoming vassals and users working “in the direct (unremunerated) service of cloud capital”. Varoufakis does not frame it through Zuboff — the link between the two is the course’s comparison.`,
      basis_zh: `雅尼斯·瓦鲁法基斯《技术封建主义：是什么杀死了资本主义》（2023）。已对照访谈摘要核对：云资本是资本的一种“变异”，地租取代利润，资本家沦为附庸，用户“直接（无偿）为云资本服务”。瓦鲁法基斯本人并不借用祖博夫的框架——两者的联系是本课的比较。`,
      links: [{ t: 'The Age of Cloud Capital (Persuasion interview)', u: 'https://www.persuasion.community/p/the-age-of-cloud-capital' }],
      rel: ['1.1', '3.5', '9.3'],
      hook_en: 'Surveillance capitalism = how they extract. Technofeudalism = what that extraction builds: fiefs that collect rent instead of markets that earn profit.',
      hook_zh: '监视资本主义讲“怎么提取”；技术封建主义讲“提取建成了什么”：收租的封地，而不是赚利润的市场。',
      trap_en: 'The key word is RENT (vs. profit). Mention cloud capital and that users’ unpaid activity builds it.',
      trap_zh: '关键词是“地租”（相对于利润）。要提到云资本，以及用户的无偿活动在建造它。'
    },
    {
      id: '1.3', t_en: 'URL', t_zh: 'URL 网址',
      q_en: 'Name the parts of a URL and say what each one tells the server.',
      q_zh: '说出 URL 的各个组成部分，以及每一部分告诉服务器什么。',
      src: 'MDN, “What Is a URL?”',
      fig() {
        const parts = [
          { s: 'https', color: F.C.mag, tip: 'scheme' }, { s: '://', color: F.C.mute },
          { s: 'www.example.com', color: F.C.blue, tip: 'domain' }, { s: ':', color: F.C.mute },
          { s: '443', color: F.C.amber, tip: 'port' },
          { s: '/path/to/file.html', color: F.C.green, tip: 'path' },
          { s: '?key1=value1&key2=value2', color: F.C.red, tip: 'query' },
          { s: '#section', color: F.C.mute, tip: 'fragment' }
        ];
        const m = F.mono(18, 70, parts, { cw: 8.6, size: 14.5 });
        let s = m.svg;
        const sp = m.spans;
        const lab = (i, row, en, zh, col, server = true) => {
          const [a, b] = sp[i], mid = (a + b) / 2, y = 84;
          const ty = row === 0 ? 150 : 228;
          let o = F.bracket(a + 1, b - 1, y, { stroke: col });
          o += F.line(mid, y + 13, mid, ty - 26, { stroke: col, sw: 0.8 });
          o += `<circle cx="${mid}" cy="${ty - 26}" r="2.2" fill="${col}"/>`;
          o += F.text(mid, ty - 10, en, { cls: 'lt', color: col }) + F.sub(mid, ty + 7, zh, { anchor: 'middle' });
          return F.g(o, { tip: parts[i].tip });
        };
        s += lab(0, 0, 'SCHEME', '协议：怎么说话', F.C.mag);
        s += lab(2, 1, 'DOMAIN · AUTHORITY', '域名：找哪台服务器', F.C.blue);
        s += lab(4, 0, 'PORT', '端口：哪扇门', F.C.amber);
        s += lab(5, 1, 'PATH', '路径：要哪个资源', F.C.green);
        s += lab(6, 0, 'QUERY / PARAMETERS', '参数：额外条件', F.C.red);
        s += lab(7, 1, 'FRAGMENT', '锚点：页面里的位置', F.C.mute);
        // what reaches the server
        const x0 = sp[0][0], x1 = sp[6][1];
        s += F.line(x0, 268, x1, 268, { stroke: F.C.ink, sw: 1 }) + F.line(x0, 262, x0, 274) + F.line(x1, 262, x1, 274);
        s += F.text((x0 + x1) / 2, 290, 'SENT TO THE SERVER', { cls: 'lt' }) + F.sub((x0 + x1) / 2, 306, '这些会发到服务器', { anchor: 'middle' });
        const f0 = sp[7][0], f1 = sp[7][1];
        s += F.line(f0, 268, f1, 268, { stroke: F.C.mute, dash: '3 3' });
        s += F.text((f0 + f1) / 2, 290, 'BROWSER ONLY', { cls: 'lt', color: F.C.mute }) + F.sub((f0 + f1) / 2, 306, '只留在浏览器', { anchor: 'middle' });
        s += F.text(18, 28, 'ANATOMY OF A URL', { anchor: 'start', cls: 'tiny', color: F.C.mute });
        return F.svg(Math.max(720, m.end + 20), 320, s, { label: 'parts of a URL' });
      },
      cap_en: 'MDN’s example URL taken apart. Everything up to the “#” travels to the server; the fragment never leaves your browser.',
      cap_zh: '把 MDN 的示例网址拆开。“#”之前的一切都会发到服务器；锚点永远不会离开你的浏览器。',
      a_en: `MDN: a [[url]] is the address of a unique resource on the Web. Take \`https://www.example.com:443/path/to/file.html?key1=value1&key2=value2#section\`:
1. **[[scheme]]** (\`https\`) — which protocol to speak. Tells the browser (and server) this is encrypted HTTP.
2. **[[domain]]** (\`www.example.com\`) — which web server is being asked. [[dns]] turns it into an IP address.
3. **[[port]]** (\`:443\`) — which “gate” on that server. Usually hidden because 80/443 are the defaults.
4. **[[path]]** (\`/path/to/file.html\`) — which resource on that server you want.
5. **[[query]]** (\`?key1=value1&key2=value2\`) — extra key=value information the server uses to build the answer: a search term, a filter, a page, often a tracking ID.
6. **[[fragment]]** (\`#section\`) — a place inside the page. It is **not sent to the server**; only the browser reads it.

MDN calls domain + port together the **authority** — *who* you are talking to; the scheme says *how*; path + query say *what* you are asking for.`,
      a_zh: `MDN：[[url]]是网络上某个唯一资源的地址。以 \`https://www.example.com:443/path/to/file.html?key1=value1&key2=value2#section\` 为例：
1. **[[scheme]]**（\`https\`）——用哪种协议通信。告诉浏览器（和服务器）这是加密的 HTTP。
2. **[[domain]]**（\`www.example.com\`）——要访问哪台网页服务器。[[dns]]会把它翻译成 IP 地址。
3. **[[port]]**（\`:443\`）——服务器上的哪扇“门”。通常省略，因为 80/443 是默认值。
4. **[[path]]**（\`/path/to/file.html\`）——你要服务器上的哪个资源。
5. **[[query]]**（\`?key1=value1&key2=value2\`）——服务器用来生成回应的额外 键=值 信息：搜索词、筛选条件、页码，也常常是追踪编号。
6. **[[fragment]]**（\`#section\`）——页面内的某个位置。它**不会发送给服务器**，只有浏览器会读取。

MDN 把域名 + 端口合称为 **authority（权威部分）**——说明你在和*谁*通话；协议说明*怎么*通话；路径 + 查询参数说明你要*什么*。`,
      short_en: `MDN: a [[url]] is the address of a unique resource on the Web. **Scheme** (https) — which protocol to use; **domain** (www.example.com) — which server; **port** (:443) — which gate on it, usually implicit; **path** (/path/file.html) — which resource; **query parameters** (?key=value&…) — extra information the server uses; **fragment** (#section) — a spot in the page that is **never sent to the server**.`,
      short_zh: `MDN：[[url]]是网络上某个唯一资源的地址。**协议**（https）——用哪种协议；**域名**（www.example.com）——找哪台服务器；**端口**（:443）——服务器上的哪扇门，通常省略；**路径**（/path/file.html）——要哪个资源；**查询参数**（?key=value&…）——服务器使用的额外信息；**锚点**（#section）——页面内的位置，**从不发送给服务器**。`,
      basis_en: `MDN Web Docs, “What Is a URL?” (the hint on the exam): scheme, authority (domain + port), path to resource, parameters and anchor, with the note that the anchor is never sent to the server. The example URL follows MDN’s own pattern.`,
      basis_zh: `MDN Web Docs《What Is a URL?》（考卷提示）：协议、authority（域名 + 端口）、资源路径、参数、锚点，并说明锚点从不发送到服务器。示例网址沿用 MDN 自己的格式。`,
      links: [{ t: 'MDN — What is a URL?', u: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL' }],
      rel: ['1.4', '1.1', '4.3'],
      hook_en: 'HOW (scheme) · WHO (domain) · WHICH DOOR (port) · WHAT (path) · WITH WHAT CONDITIONS (query) · WHERE ON THE PAGE (fragment — browser only).',
      hook_zh: '怎么说（协议）· 找谁（域名）· 哪扇门（端口）· 要什么（路径）· 附带什么条件（参数）· 页面哪里（锚点——只给浏览器）。',
      trap_en: 'The question says “what each one tells the server” — point out that the fragment tells the server nothing.',
      trap_zh: '题目问“每部分告诉服务器什么”——要特别指出：锚点（#）什么也不告诉服务器。'
    },
    {
      id: '1.4', t_en: 'GET vs. POST', t_zh: 'GET 与 POST',
      q_en: 'What is the difference between GET and POST, and when you fill in a form on a website, which one happens?',
      q_zh: 'GET 和 POST 有什么区别？当你在网站上填写表单时，发生的是哪一个？',
      src: 'MDN, “HTTP Request Methods”',
      fig() {
        let s = '';
        const col = (x, title, zh, rows, accent, tipKey) => {
          let o = F.text(x + 130, 26, title, { cls: 'big', color: accent }) + F.sub(x + 130, 44, zh, { anchor: 'middle' });
          let y = 62;
          rows.forEach(r => {
            o += F.rect(x, y, 260, r.h, { fill: r.fill || '#fff', stroke: r.stroke || F.C.ink, dash: r.dash, rx: 4, note: r.note });
            o += F.text(x + 12, y + 17, r.k, { anchor: 'start', cls: 'tiny', color: F.C.mute });
            o += F.text(x + 12, y + r.h / 2 + 10, r.v, { anchor: 'start', cls: 'mono', color: r.vc || F.C.ink });
            y += r.h + 8;
          });
          return F.g(o, { tip: tipKey });
        };
        s += col(30, 'GET', '获取 · 只读', [
          { k: 'REQUEST LINE · 请求行', v: 'GET /search?q=jazz+piano', h: 50, vc: F.C.blue, fill: F.C.blueF, stroke: F.C.blue, note: { en: 'The data is IN the URL: visible in the address bar, history, server logs, bookmarks.', zh: '数据就在 URL 里：地址栏、历史记录、服务器日志、书签里都看得见。' } },
          { k: 'HEADERS · 头部', v: 'Host: example.com', h: 50 },
          { k: 'BODY · 正文', v: '(empty)', h: 62, dash: '4 3', vc: F.C.mute, note: { en: 'GET has no body.', zh: 'GET 没有正文。' } }
        ], F.C.blue, 'get');
        s += col(400, 'POST', '提交 · 改变状态', [
          { k: 'REQUEST LINE · 请求行', v: 'POST /signup', h: 50 },
          { k: 'HEADERS · 头部', v: 'Content-Type: form…', h: 50 },
          { k: 'BODY · 正文', v: 'name=Ying&email=…', h: 62, vc: F.C.red, fill: F.C.redF, stroke: F.C.red, note: { en: 'The form data is IN THE BODY — not in the URL. (Still only private on HTTPS!)', zh: '表单数据放在正文里——不在 URL 中。（但只有在 HTTPS 下才是加密的！）' } }
        ], F.C.red, 'post');
        s += F.text(345, 120, 'vs', { cls: 'big', color: F.C.mute });
        // result row
        s += F.text(160, 300, 'safe · idempotent · cacheable', { cls: 'tiny', color: F.C.mute }) + F.sub(160, 316, '安全 · 幂等 · 可缓存', { anchor: 'middle' });
        s += F.text(530, 300, 'side effects · not repeatable', { cls: 'tiny', color: F.C.mute }) + F.sub(530, 316, '有副作用 · 不可随意重复', { anchor: 'middle' });
        return F.svg(720, 330, s, { label: 'GET vs POST request anatomy' });
      },
      cap_en: 'Same HTTP request, two places to put your data. GET writes it on the outside like a postcard (the URL — see the address bar) and changes nothing on the server. POST seals it in an envelope (the body) and the server adds a row — send it twice and you get two accounts.',
      cap_zh: '同样是 HTTP 请求，数据有两种放法。GET 像明信片，把数据写在外面（URL 里——看地址栏），服务器什么都不变。POST 把数据封进信封（正文），服务器会新增一行记录——发两次就有两个账户。',
      glow: {
        name_en: 'GET postcard vs POST envelope', name_zh: 'GET 明信片 vs POST 信封',
        hint_en: 'Press G (GET) or P (POST), or click the keys · watch the address bar and the server’s rows',
        hint_zh: '按 G（GET）或 P（POST），或点键盘上的键 · 看地址栏和服务器里的记录行',
        aria: 'Isometric laptop and server. GET sends a postcard with the data written on the outside, in the URL, and changes nothing on the server. POST sends a sealed envelope whose data is in the body, and adds a row to the server database.',
        mount(stage, api) {
          const K = api.iso.frame([[0, 0, 0], [340, 0, 0], [0, 220, 0], [340, 220, 0], [236, 30, 120], [24, 110, 92]], 0.05);
          const { TOP, FRONT, SIDE, box, boxc, D, P } = K;
          const esc = api.iso.esc;
          const route = [[134, 150, 9], [273, 150, 9], [273, 92, 9]];
          const segL = []; let L = 0; for (let i = 1; i < route.length; i++) { const d = Math.hypot(route[i][0] - route[i - 1][0], route[i][1] - route[i - 1][1]); segL.push(d); L += d; }
          const at = u => { let d = u * L; for (let i = 0; i < segL.length; i++) { if (d <= segL[i] || i === segL.length - 1) { const k = Math.min(1, d / segL[i]); const a = route[i], b = route[i + 1]; return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2]]; } d -= segL[i]; } };
          const st = { rows: 2, url: 'example.com', q: '', page: ['Welcome.', 'Search or sign up.'], status: 'idle', anim: null, busy: false, posts: 0 };
          function scene() {
            let s = box(0, 0, 0, 340, 220, 8, 12);
            s += `<g transform="${TOP(0, 0, 8)}"><rect class="detail" x="8" y="8" width="324" height="204" rx="8"/></g>`;
            const wd = K.path(route);
            s += `<path class="wire-under" d="${wd}"/><path id="g14-wire" class="wire" d="${wd}"/>`;
            // server
            s += box(236, 30, 8, 74, 60, 104);
            s += `<g transform="${SIDE(310, 90, 112)}">${api.iso.slits(8, 52, 6, 10, 96, true)}</g>`;
            s += `<g transform="${FRONT(236, 90, 112)}">
              <rect id="g14-disp" class="glass" x="6" y="8" width="62" height="24" rx="2"/>
              <text id="g14-st1" class="scr" x="10" y="18" font-size="5">idle</text>
              <text id="g14-st2" class="scr" x="10" y="27" font-size="4.4"></text>
              <text class="label" x="6" y="44" font-size="4.6">DATABASE · ACCOUNTS</text>
              ${Array.from({ length: 6 }, (_, i) => `<rect class="led g14-row" data-i="${i}" x="6" y="${49 + i * 7}" width="62" height="4.5" rx="1"/>`).join('')}
              <text class="label" x="6" y="98" font-size="4.6">SERVER</text></g>`;
            // laptop
            s += box(24, 110, 8, 110, 80, 6, 4);
            s += `<g transform="${TOP(24, 110, 14)}">${api.iso.slits(8, 100, 7, 8, 26, true)}</g>`;
            s += `<g id="g14-kget" class="press">${box(36, 142, 14, 38, 24, 5, 3)}<g transform="${TOP(36, 142, 19)}"><text class="label-hi" x="9" y="15" font-size="7">GET</text></g></g>`;
            s += `<g id="g14-kpost" class="press">${box(84, 142, 14, 38, 24, 5, 3)}<g transform="${TOP(84, 142, 19)}"><text class="label-hi" x="6" y="15" font-size="7">POST</text></g></g>`;
            s += box(24, 110, 14, 110, 5, 72);
            s += `<g transform="${FRONT(24, 115, 86)}">
              <rect id="g14-glass" class="glass hot" x="5" y="5" width="100" height="62" rx="2"/>
              <rect class="face recess" x="9" y="9" width="92" height="10" rx="2"/>
              <text id="g14-url" x="12" y="16" font-size="5"></text>
              <text id="g14-p1" class="scr" x="12" y="32" font-size="5"></text>
              <text id="g14-p2" class="scr" x="12" y="41" font-size="4.4" opacity=".8"></text>
              <text id="g14-p3" class="label" x="12" y="60" font-size="4"></text></g>`;
            s += `<g id="g14-pk"></g>`;
            stage.setAttribute('viewBox', K.viewBox); stage.innerHTML = s;
          }
          scene();
          const $ = id => stage.querySelector('#' + id);
          function packetSVG(kind) {
            const [x, y, z] = route[0], w = 26, d = 18;
            if (kind === 'get') return boxc(x, y - d / 2, z, w, d, 1.5, 0, 'g14-card') + `<g transform="${TOP(x, y - d / 2, z + 1.5)}"><text class="scr" x="2.5" y="8" font-size="4.6">?q=jazz</text><text class="scr" x="2.5" y="14" font-size="3.6">in the URL</text></g>`;
            if (kind === 'post') return boxc(x, y - d / 2, z, w, d, 8, 0, 'g14-env') + `<g transform="${TOP(x, y - d / 2, z + 8)}"><path class="detail" d="M1 1 L13 9 L25 1"/><text class="label" x="7" y="15" font-size="3.6">sealed</text></g>`;
            return boxc(x, y - d / 2, z, w, d, 1.5, 0, 'g14-card') + `<g transform="${TOP(x, y - d / 2, z + 1.5)}"><text class="scr" x="3" y="11" font-size="5">${kind}</text></g>`;
          }
          function render() {
            const hasQ = !!st.q;
            $('g14-url').innerHTML = `<tspan class="label-hi">${esc(st.url)}</tspan>` + (hasQ ? `<tspan class="scr-accent">${esc(st.q)}</tspan>` : '');
            $('g14-p1').textContent = st.page[0] || ''; $('g14-p2').textContent = st.page[1] || '';
            $('g14-p3').textContent = hasQ ? 'data visible in address bar · history · logs' : (st.url.endsWith('/signup') ? 'data travelled in the body, not the URL' : '');
            stage.querySelectorAll('.g14-row').forEach(r => r.classList.toggle('hot', +r.dataset.i < st.rows));
          }
          function send(kind) {
            if (st.busy) return;
            st.busy = true; api.power(true);
            api.flash($(kind === 'get' ? 'g14-kget' : 'g14-kpost'), 260);
            if (kind === 'get') { st.url = 'example.com/search'; st.q = '?q=jazz+piano'; st.page = ['loading…', '']; }
            else { st.url = 'example.com/signup'; st.q = ''; st.page = ['sending form…', '']; }
            render(); $('g14-wire').classList.add('hot');
            $('g14-pk').innerHTML = packetSVG(kind);
            st.anim = { kind, t0: performance.now(), dir: 1 };
            api.say(kind === 'get' ? 'GET → data rides in the URL' : 'POST → data sealed in the body', kind === 'get' ? 'GET → 数据写在网址上' : 'POST → 数据封在正文里');
          }
          function arrive(kind) {
            const disp = $('g14-disp'); disp.classList.add('hot');
            if (kind === 'get') { $('g14-st1').textContent = 'GET /search'; $('g14-st2').textContent = '200 OK · nothing changed'; }
            else {
              st.rows = Math.min(6, st.rows + 1); st.posts++;
              $('g14-st1').textContent = 'POST /signup'; $('g14-st2').textContent = st.posts > 1 ? '201 · ANOTHER account!' : '201 Created · +1 row';
              const r = stage.querySelector(`.g14-row[data-i="${st.rows - 1}"]`); if (r) { r.setAttribute('filter', 'url(#glow)'); api.after(700, () => r.removeAttribute('filter')); }
            }
            render();
            $('g14-pk').innerHTML = packetSVG(kind === 'get' ? '200 OK' : '201');
            st.anim = { kind, t0: performance.now(), dir: -1 };
          }
          function back(kind) {
            $('g14-pk').innerHTML = ''; $('g14-wire').classList.remove('hot'); st.busy = false; st.anim = null;
            if (kind === 'get') { st.page = ['Results: jazz piano', '12 videos · 4 lessons']; api.say(`GET done · server unchanged · accounts ${st.rows}`, `GET 完成 · 服务器没变 · 账户 ${st.rows}`); }
            else { st.page = [st.posts > 1 ? 'Welcome again?!' : 'Welcome, Ying!', st.posts > 1 ? 'resubmitted = duplicate' : 'account created']; api.say(`POST done · server changed · accounts ${st.rows}${st.posts > 1 ? ' · not idempotent' : ''}`, `POST 完成 · 服务器被改变 · 账户 ${st.rows}${st.posts > 1 ? ' · 重复提交' : ''}`); }
            render();
          }
          api.loop(t => {
            const A = st.anim; if (!A) return;
            const u = Math.min(1, (t - A.t0) / 1000);
            const e = u < .5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
            const p = at(A.dir > 0 ? e : 1 - e), p0 = route[0];
            const dd = D(p[0] - p0[0], p[1] - p0[1], 0);
            $('g14-pk').setAttribute('transform', `translate(${dd[0].toFixed(2)} ${dd[1].toFixed(2)})`);
            if (u >= 1) { const k = A.kind; st.anim = null; A.dir > 0 ? api.after(250, () => arrive(k)) : back(k); }
          });
          $('g14-kget').addEventListener('click', () => send('get'));
          $('g14-kpost').addEventListener('click', () => send('post'));
          render(); api.say('press G or P', '按 G 或 P');
          return {
            key: e => {
              const k = e.key.toLowerCase();
              if (k === 'g' || k === '1') { send('get'); return true; }
              if (k === 'p' || k === '2') { send('post'); return true; }
              return false;
            },
            demo: () => { api.after(200, () => send('get')); api.after(3400, () => send('post')); }
          };
        },
        css: `.glow-plate .g14-card.face { fill: var(--glass-on); stroke: var(--accent); } .glow-plate .g14-card.face.top { fill: var(--glass-on); }
              .glow-plate .g14-env.face { fill: var(--accent); stroke: var(--accent-hi); } .glow-plate .g14-env.face.top { fill: var(--accent-hi); }
              .glow-plate #g14-pk { filter: url(#soft); }`
      },
      a_en: `Both are [[http]] request methods — the verb the browser sends with a URL.
- **[[get]]** asks the server to *send back* a resource. MDN: it should only retrieve data. Any data goes in the URL’s query string, so it is visible, bookmarkable, cached and saved in history. It is [[idempotent]]: doing it twice changes nothing.
- **[[post]]** *sends data to* the server to be processed. MDN: it often causes a change of state or side effects (an account is created, an order is placed). The data travels in the [[req_body]], not in the URL.

**When you fill in a form:** for most forms — logging in, signing up, checking out, posting a comment — the browser sends a **POST**, because you are submitting data that changes something on the server. (The form’s \`method\` attribute decides; a simple search box uses GET — that’s why \`?q=…\` appears in the address bar.)

Note: POST is not encryption. It only hides data from the URL; HTTPS is what protects it in transit.`,
      a_zh: `两者都是[[http]]请求方法——浏览器随 URL 一起发出的“动词”。
- **[[get]]**请服务器*把资源送回来*。MDN：它只应该用于获取数据。附带的数据放在 URL 的查询字符串里，因此可见、可收藏、可缓存、会留在历史记录中。它是[[idempotent]]的：做两次也不会改变任何东西。
- **[[post]]**把数据*发送给*服务器去处理。MDN：它常常会改变服务器状态或产生副作用（创建账户、下订单）。数据放在[[req_body]]里，而不是 URL 里。

**填写表单时：**大多数表单——登录、注册、结账、发表评论——浏览器发送的是 **POST**，因为你在提交会改变服务器内容的数据。（由表单的 \`method\` 属性决定；简单的搜索框用的是 GET——所以地址栏里会出现 \`?q=…\`。）

注意：POST 不等于加密。它只是让数据不出现在 URL 里；真正在传输中保护数据的是 HTTPS。`,
      short_en: `Both are HTTP request methods. **[[get]]** asks the server to **send back** a resource and should only retrieve data — any data rides **in the URL** (visible, cached, bookmarkable, repeatable). **[[post]]** **submits data** to be processed, often **changing the server’s state** — the data travels in the **request body**. When you fill in a form (log in, sign up, check out), it is usually **POST**; simple search boxes use GET, which is why “?q=” shows in the address bar.`,
      short_zh: `两者都是 HTTP 请求方法。**[[get]]**请服务器**把资源送回来**，只应用于获取数据——附带的数据放**在 URL 里**（可见、可缓存、可收藏、可重复）。**[[post]]**把**数据提交**给服务器处理，常常**改变服务器状态**——数据放在**请求正文**里。填写表单（登录、注册、结账）时通常是 **POST**；简单的搜索框用 GET，所以地址栏里会出现“?q=”。`,
      basis_en: `MDN Web Docs, “HTTP request methods” (the exam hint): GET requests a representation of a resource and should only retrieve data; POST submits an entity, often causing a change in state or side effects on the server. That an HTML form’s method attribute decides (GET by default) is standard HTML behaviour.`,
      basis_zh: `MDN Web Docs《HTTP request methods》（考卷提示）：GET 请求某个资源的表示，只应获取数据；POST 提交一个实体，常导致服务器状态改变或副作用。HTML 表单由 method 属性决定（默认 GET）是标准 HTML 行为。`,
      links: [{ t: 'MDN — What is a URL? / HTTP methods (course link)', u: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL' }],
      rel: ['1.3', '6.5', '1.1'],
      hook_en: 'GET = “give me.” POST = “take this.” Forms usually POST.',
      hook_zh: 'GET =“给我”；POST =“收下这个”。表单通常是 POST。',
      trap_en: 'Don’t say “POST is secure.” Say where the data lives (URL vs. body) and whether the request changes the server.',
      trap_zh: '不要写“POST 是安全的”。要说清数据放在哪（URL 还是正文），以及请求是否会改变服务器。'
    },
    {
      id: '1.5', t_en: 'Command line / shell', t_zh: '命令行 / Shell',
      q_en: 'What is a shell, and what does the terminal show you that the GUI hides?',
      q_zh: '什么是 shell？终端向你展示了哪些图形界面（GUI）隐藏起来的东西？',
      src: 'Stephenson; The Missing Semester; Explainshell',
      fig() {
        const L = [
          { label: 'GUI · metaphors', sub: '图形界面：图标与文件夹', tip: 'gui', pattern: 'grid', density: 4, fill: '#fff',
            extra: z => { let e = ''; [[0.5, 0.5], [2.2, 0.5], [0.5, 2.2]].forEach(([x, y]) => e += F.plate({ x, y, z: z + 0.18, w: 1.3, d: 1.3, t: 0.12, fill: F.C.blueF, side: F.C.blueF })); return e; } },
          { label: 'Terminal · window', sub: '终端：显示文字的窗口', tip: 'terminal', pattern: 'hatch', density: 5, fill: '#fff' },
          { label: 'Shell · interpreter', sub: 'Shell：解释命令', tip: 'shell', fill: F.C.magF, side: '#efd2e2', pattern: 'diag', pc: F.C.mag, density: 4 },
          { label: 'Programs + files', sub: '程序与文件（含隐藏）', note: { en: 'ls, git, ollama, python… and every file, including hidden dot-files the Finder never shows.', zh: 'ls、git、ollama、python……以及所有文件，包括访达从不显示的“.”开头隐藏文件。' }, pattern: 'chips', density: 6 },
          { label: 'Operating system', sub: '操作系统内核', note: { en: 'The kernel actually runs processes and touches the disk and network.', zh: '内核真正负责运行进程、读写磁盘和网络。' }, pattern: 'dots', density: 7 }
        ];
        const o = { gap: 2.9, ox: 170, scale: 17, side: 'r', labelR: 300 };
        let s = F.stack(L, o);
        // explainshell breakdown on the right
        const x0 = 548, y0 = 80;
        const m = F.mono(x0, y0, [
          { s: 'ls', color: F.C.mag, tip: 'cli_args' }, { s: ' ' }, { s: '-la', color: F.C.blue, tip: 'cli_args' }, { s: ' ' }, { s: '~/Documents', color: F.C.green, tip: 'cli_args' }
        ], { cw: 9.6, size: 16 });
        s += `<rect x="${x0 - 14}" y="${y0 - 34}" width="${m.end - x0 + 28}" height="60" rx="6" fill="#1b1b1a"/>` + F.text(x0 - 4, y0 - 20, '$', { anchor: 'start', cls: 'tiny', color: '#888' });
        s += m.svg.replace(/fill="#1b1b1a"/g, 'fill="#f3f2ee"');
        const lb = (i, row, en, zh, col) => {
          const [a, b] = m.spans[i], mid = (a + b) / 2, ty = 140 + row * 52;
          return F.bracket(a, b, y0 + 32, { stroke: col }) + F.line(mid, y0 + 46, mid, ty - 14, { stroke: col, sw: .8 }) +
            F.text(mid, ty, en, { cls: 'lt', color: col }) + F.sub(mid, ty + 15, zh, { anchor: 'middle' });
        };
        s += F.g(lb(0, 0, 'COMMAND', '命令：运行哪个程序', F.C.mag) + lb(2, 1, 'FLAGS', '选项：-l 详细 -a 含隐藏', F.C.blue) + lb(4, 0, 'ARGUMENT', '参数：作用对象', F.C.green), { tip: 'cli_args' });
        s += F.text(548 + 85, 310, 'EXPLAINSHELL-STYLE BREAKDOWN', { cls: 'tiny', color: F.C.mute });
        return F.svg(760, Math.max(F.stackH(L.length, o), 330), s, { label: 'shell layers and command anatomy' });
      },
      cap_en: 'Type a command and follow it: the terminal only displays text; the shell interprets it (command · flags · argument), asks the OS kernel, which reads the disk, and the output comes back as text. Switch to the GUI view and the same folder shows 3 icons — the hidden files and the command itself disappear.',
      cap_zh: '输入一条命令，跟着它走：终端只负责显示文字；shell 解释它（命令 · 选项 · 参数），交给操作系统内核，内核去读磁盘，结果再以文字返回。切换到图形界面，同一个文件夹只剩 3 个图标——隐藏文件和命令本身都看不见了。',
      glow: {
        name_en: 'Terminal → shell → OS → files', name_zh: '终端 → shell → 操作系统 → 文件',
        hint_en: 'Click the screen and type (try ls, ls -la, pwd, whoami, ps, help) · Enter runs · Tab switches to the GUI view',
        hint_zh: '点屏幕后输入（试试 ls、ls -la、pwd、whoami、ps、help）· 回车执行 · Tab 切换到图形界面',
        aria: 'Isometric computer. Type a shell command into the terminal and press Enter: the command travels to the shell, the kernel and the disk, and real-looking output returns. Tab switches to a GUI view that hides the hidden files.',
        mount(stage, api) {
          const K = api.iso.frame([[0, 0, 0], [330, 0, 0], [0, 230, 0], [330, 230, 0], [20, 128, 136], [210, 40, 126]], 0.05);
          const { TOP, FRONT, SIDE, box, path } = K;
          const esc = api.iso.esc;
          const st = { buf: '', lines: ['Last login: Fri Nov 6 on ttys001', 'skyx@mac ~ %'], gui: false, runs: 0, busy: false };
          const FILES = ['Documents', 'Music', 'Midterm'], HIDDEN = ['.git', '.ssh', '.zshrc'];
          // tower: DISK (bottom) · KERNEL · SHELL (top)
          const T = [['g15-disk', 8, 'DISK · FILES', '磁盘 · 文件'], ['g15-kern', 42, 'OS · KERNEL', '操作系统内核'], ['g15-shell', 76, 'SHELL · zsh', 'Shell 解释器']];
          let s = box(0, 0, 0, 330, 230, 8, 12);
          s += `<g transform="${TOP(0, 0, 8)}"><rect class="detail" x="8" y="8" width="314" height="214" rx="8"/></g>`;
          T.forEach(([id, z, en, zh]) => {
            s += `<g id="${id}" class="press">${box(210, 40, z, 90, 64, 30)}</g>`;
            s += `<g transform="${FRONT(210, 104, z + 30)}"><text class="label label-en" x="8" y="13" font-size="6">${en}</text><text class="label-zh" x="8" y="13" font-size="6.4">${zh}</text><circle id="${id}-led" class="led" cx="80" cy="11" r="2.4"/>${api.iso.slits(8, 70, 4, 19, 25, true)}</g>`;
          });
          const wire = path([[160, 132, 74], [186, 132, 74], [210, 104, 94]]);
          s += `<path class="wire-under" d="${wire}"/><path id="g15-wire" class="wire" d="${wire}"/><path id="g15-pulse" class="pulse" pathLength="1000" d="${wire}"/>`;
          // monitor
          s += box(66, 120, 8, 52, 34, 4, 3) + box(88, 128, 12, 8, 6, 24);
          s += box(20, 128, 34, 140, 8, 100);
          s += `<g transform="${FRONT(20, 136, 134)}">
            <rect id="g15-glass" class="glass hot" x="5" y="5" width="130" height="88" rx="3"/>
            <g id="g15-screen"></g></g>`;
          // keyboard
          s += `<g id="g15-kb" class="press">${box(24, 168, 8, 132, 44, 5, 3)}</g>`;
          s += `<g transform="${TOP(24, 168, 13)}">${api.iso.slits(8, 124, 8, 6, 38, true)}${api.iso.slits(6, 38, 8, 8, 124, false)}</g>`;
          // GUI toggle button
          s += `<g id="g15-gui" class="press">${box(240, 160, 8, 56, 32, 6, 4)}<g transform="${TOP(240, 160, 14)}"><text class="label-hi" x="9" y="19" font-size="8">GUI ⇄</text></g></g>`;
          stage.setAttribute('viewBox', K.viewBox); stage.innerHTML = s;
          const $ = id => stage.querySelector('#' + id);
          function screen() {
            let g = '';
            if (st.gui) {
              const icons = FILES.map((f, i) => `<g transform="translate(${14 + i * 40} 18)"><path class="face" d="M0 4 h10 l3 3 h17 v18 h-30z"/><text class="label" x="15" y="34" font-size="5" text-anchor="middle">${f}</text></g>`).join('');
              g = `<rect class="face recess" x="9" y="9" width="122" height="7" rx="1.5"/><text class="label" x="12" y="14.5" font-size="4.4">Finder — skyx</text>${icons}
                   <text class="scr" x="12" y="84" font-size="4.4">3 items · hidden files: not shown</text>`;
            } else {
              const shown = st.lines.slice(-9);
              g = shown.map((l, i) => `<text class="${l.startsWith('skyx@') ? 'label-hi' : 'scr'}" x="10" y="${15 + i * 8.2}" font-size="5.2">${esc(l.slice(0, 44))}</text>`).join('');
              g += `<text class="scr" x="10" y="${15 + shown.length * 8.2}" font-size="5.2">$ ${esc(st.buf.slice(-38))}<tspan class="blink">▍</tspan></text>`;
            }
            $('g15-screen').innerHTML = g;
          }
          function out(cmd) {
            const [c, ...rest] = cmd.trim().split(/\s+/); const flags = rest.filter(r => r.startsWith('-')).join(' '), args = rest.filter(r => !r.startsWith('-')).join(' ');
            let o, disk = false;
            if (!c) o = [];
            else if (c === 'ls') { disk = true; o = /a/.test(flags) ? ['.  ..  ' + HIDDEN.join('  '), FILES.join('  ')] : [FILES.join('  ')]; }
            else if (c === 'pwd') o = ['/Users/skyx'];
            else if (c === 'whoami') o = ['skyx'];
            else if (c === 'ps') o = ['PID  812 zsh', 'PID  913 ollama serve'];
            else if (c === 'echo') o = [args];
            else if (c === 'date') o = ['Fri Nov  6 09:41:00 EST 2026'];
            else if (c === 'cat') { disk = true; o = args ? ['midterm due Fri 5pm'] : ['cat: missing file']; }
            else if (c === 'help') o = ['try: ls · ls -la · pwd · whoami · ps · date'];
            else if (c === 'clear') o = null;
            else o = [`zsh: command not found: ${c}`];
            return { c, flags, args, o, disk };
          }
          function run() {
            if (st.busy || st.gui) return;
            const cmd = st.buf; const r = out(cmd);
            st.lines.push('skyx@mac ~ % ' + cmd); st.buf = ''; st.busy = true; st.runs++; screen();
            api.power(true); api.replay($('g15-pulse')); $('g15-wire').classList.add('hot');
            const seq = ['g15-shell', 'g15-kern'].concat(r.disk ? ['g15-disk'] : []);
            seq.forEach((id, i) => api.after(380 + i * 230, () => { api.flash($(id), 420); $(id + '-led').classList.add('hot'); api.after(600, () => $(id + '-led').classList.remove('hot')); }));
            api.after(400 + seq.length * 230 + 120, () => {
              if (r.o === null) st.lines = ['skyx@mac ~ %']; else st.lines.push(...r.o);
              $('g15-wire').classList.remove('hot'); st.busy = false; screen();
              api.say(r.c ? `cmd ${r.c} · flags ${r.flags || '—'} · arg ${r.args || '—'}` : 'empty line', r.c ? `命令 ${r.c} · 选项 ${r.flags || '无'} · 参数 ${r.args || '无'}` : '空命令');
            });
          }
          function typeKey(ch) { if (st.gui) return; st.buf += ch; api.flash($('g15-kb'), 90); screen(); }
          function toggleGui() { st.gui = !st.gui; api.flash($('g15-gui'), 200); screen(); api.say(st.gui ? 'GUI · 3 items · hidden files and commands not shown' : 'terminal · every command visible', st.gui ? '图形界面 · 3 个项目 · 隐藏文件和命令都看不到' : '终端 · 每条命令都看得见'); }
          $('g15-gui').addEventListener('click', toggleGui);
          screen(); api.say('click the screen, then type', '点屏幕后输入');
          return {
            key: e => {
              if (e.key === 'Tab') { toggleGui(); return true; }
              if (e.key === 'Enter') { run(); return true; }
              if (e.key === 'Backspace') { st.buf = st.buf.slice(0, -1); screen(); return true; }
              if (e.key.length === 1) { typeKey(e.key); return true; }
              return false;
            },
            demo: () => {
              const cmd = 'ls -la';
              [...cmd].forEach((ch, i) => api.after(250 + i * 140, () => typeKey(ch)));
              api.after(250 + cmd.length * 140 + 250, run);
            }
          };
        }
      },
      a_en: `A [[shell]] is a program that takes the text commands you type, interprets them, and asks the operating system to run other programs with the options and inputs you give (bash and zsh are shells). The [[terminal]] is just the window that displays the shell’s input and output. The Missing Semester calls the shell a textual interface that lets you run programs, pass them arguments, and **combine and automate** them.

What the terminal shows that the [[gui]] hides:
- **The actual command** behind an action — program, [[cli_args]] — instead of a button. (Explainshell breaks any command into these parts.)
- **The real structure of the system**: full file paths, hidden “dot” files, permissions, running processes.
- **Raw output and errors** — what really happened, not a friendly spinner.
- **Composition**: connecting tools with a [[pipe]] and scripts, which a GUI rarely allows.

Neal Stephenson’s point (*In the Beginning… Was the Command Line*): a GUI is a layer of **metaphors** (desktop, folders, trash) that makes computers easy but mediates and hides what is going on; the command line is closer to the text the computer actually runs. Ease has a cost: we no longer see — or control — the machinery.`,
      a_zh: `[[shell]]是一个程序：它读取你输入的文字命令，进行解释，再请操作系统按你给的选项和输入去运行其他程序（bash、zsh 都是 shell）。[[terminal]]只是显示 shell 输入和输出的窗口。《The Missing Semester》把 shell 称为一种文本界面，可以运行程序、给程序传参数，并把它们**组合起来、自动化**。

终端展示了哪些[[gui]]隐藏的东西：
- **一个操作背后的真实命令**——程序、[[cli_args]]——而不是一个按钮。（Explainshell 就是把任何命令拆成这几部分。）
- **系统的真实结构**：完整的文件路径、“.”开头的隐藏文件、权限、正在运行的进程。
- **原始输出和报错**——到底发生了什么，而不是一个友好的加载圈。
- **组合能力**：用[[pipe]]和脚本把工具串起来，这在 GUI 里几乎做不到。

尼尔·斯蒂芬森（《In the Beginning… Was the Command Line》）的观点：GUI 是一层**隐喻**（桌面、文件夹、废纸篓），让电脑变得好用，但同时也在“中介”和隐藏真实发生的事；命令行更接近电脑真正执行的文字。便利是有代价的：我们不再看见、也不再掌控那台机器。`,
      short_en: `A [[shell]] is a program that **reads the text commands you type, interprets them and asks the operating system to run programs** (bash, zsh); the [[terminal]] is just the window that shows it. The terminal shows what the GUI hides: the **actual command** behind an action (command · flags · arguments), the **real file structure** (full paths, hidden dot-files, permissions, processes), **raw output and errors**, and the ability to **combine** tools. Stephenson’s point: the GUI is a layer of metaphors that makes things easy by hiding the machinery.`,
      short_zh: `[[shell]]是一个程序，**读取你输入的文字命令、解释它们，并请操作系统运行程序**（bash、zsh）；[[terminal]]只是显示它的窗口。终端展示了 GUI 隐藏的东西：一个操作背后的**真实命令**（命令 · 选项 · 参数）、**真实的文件结构**（完整路径、“.”开头的隐藏文件、权限、进程）、**原始输出与报错**，以及把工具**组合**起来的能力。斯蒂芬森的观点：GUI 是一层隐喻，靠隐藏机器来变得好用。`,
      basis_en: `The three sources on the exam hint: Neal Stephenson, *In the Beginning… Was the Command Line* (GUIs as metaphors that mediate and hide), MIT’s *The Missing Semester* lectures 1–2 (the shell as a textual interface for running, combining and automating programs) and Explainshell (breaking a command into program, flags and arguments).`,
      basis_zh: `考卷提示中的三个出处：尼尔·斯蒂芬森《In the Beginning… Was the Command Line》（GUI 是一层起中介和隐藏作用的隐喻）、MIT《The Missing Semester》第 1–2 讲（shell 是运行、组合、自动化程序的文本界面）、Explainshell（把命令拆成程序、选项、参数）。`,
      links: [{ t: 'Stephenson — In the Beginning… Was the Command Line', u: 'https://www.nealstephenson.com/in-the-beginning-was-the-command-line.html' }, { t: 'MIT — The Missing Semester', u: 'https://missing.csail.mit.edu/' }, { t: 'Explainshell', u: 'https://explainshell.com/' }],
      rel: ['7.1', '8.1', '6.2'],
      hook_en: 'Terminal = the window; shell = the interpreter; GUI = metaphors on top. The terminal shows the real command.',
      hook_zh: '终端是窗口，shell 是解释器，GUI 是盖在上面的隐喻。终端让你看到真实的命令。',
      trap_en: 'Don’t mix up terminal and shell. And answer both halves: define shell + list concrete things the GUI hides.',
      trap_zh: '别把终端和 shell 混为一谈。两问都要答：定义 shell + 列出 GUI 隐藏的具体东西。'
    }
  ]
});
