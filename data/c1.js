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
        const L = [
          { label: 'Behavioral futures market', sub: '行为期货市场 · 广告主下注', tip: 'behav_futures', pattern: 'grid', density: 5, fill: '#fff' },
          { label: 'Prediction products', sub: '预测产品', tip: 'pred_products', bars: { color: F.C.mag, fill: F.C.magF, n: 3, rows: 2 } },
          { label: 'Machine intelligence', sub: '机器智能 · 模型', note: { en: 'Algorithms that turn surplus into forecasts.', zh: '把剩余数据变成预测的算法。' }, pattern: 'chips', density: 6, pc: F.C.ink },
          { label: 'Behavioral surplus', sub: '行为剩余 · 被拿走的部分', tip: 'behav_surplus', bars: { color: F.C.red, fill: F.C.redF, n: 3, rows: 3 } },
          { label: 'Service improvement', sub: '用于改进服务的数据', note: { en: 'The small share of data actually used to make the product better for you.', zh: '真正用来让产品更好用的那一小部分数据。' }, bars: { color: F.C.blue, fill: F.C.blueF, n: 2, rows: 1 } },
          { label: 'Human experience', sub: '人的经验 · 点击 位置 停留', note: { en: 'Clicks, searches, location, pauses, faces, voices — claimed as free raw material.', zh: '点击、搜索、位置、停顿、面孔、声音——被当作免费原材料。' }, pattern: 'dots', density: 9 }
        ];
        const o = { alternate: true, gap: 2.7 };
        return F.svg(760, F.stackH(L.length, o), F.stack(L, o), { label: 'exploded view of surveillance capitalism' });
      },
      cap_en: 'Read bottom-up: experience is extracted, most of it becomes surplus, models turn it into predictions, predictions are sold. Only the thin blue layer comes back to you as a better service.',
      cap_zh: '从下往上读：经验被提取，大部分变成“剩余”，模型把它变成预测，预测被卖掉。只有薄薄的蓝色那层以“更好的服务”的形式回到你手里。',
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
        const sellers = [[0.6, 0.6], [0.6, 5.2], [5.2, 0.6]];
        let v = '';
        sellers.forEach(([x, y]) => { v += F.plate({ x, y, z: 0.25, w: 1.2, d: 1.2, t: 0.5, fill: F.C.amberF, side: '#f3e3bf' }); });
        s += F.g(v + F.label(F.iso(5.8, 0.6, 0.75), 580, 'VASSALS · SELLERS') + F.sub(588, F.iso(5.8, 0.6, 0.75)[1] + 17, '附庸 · 卖家：交云地租'), { tip: 'cloud_rent' });
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
        // rent & data arrows up
        const a1 = F.iso(1.2, 1.2, 0.9), a2 = F.iso(5.8, 1.2, 0.9), a3 = F.iso(3.6, 4.6, 0.7);
        s += F.path(`M${a1[0]},${a1[1]} Q${a1[0]},${c[1] - 10} ${c[0] - 30},${c[1] + 18}`, { stroke: F.C.amber, arrow: true, dash: '4 3' });
        s += F.path(`M${a2[0]},${a2[1]} Q${a2[0]},${c[1] - 10} ${c[0] + 30},${c[1] + 18}`, { stroke: F.C.amber, arrow: true, dash: '4 3' });
        s += F.path(`M${a3[0]},${a3[1] - 10} L${c[0]},${c[1] + 26}`, { stroke: F.C.blue, arrow: true, dash: '4 3' });
        s += F.text(c[0] + 120, c[1] + 30, 'rent ↑  data ↑', { cls: 'tiny', color: F.C.mute });
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

Together, scheme + domain + port are the “authority” — *who* you are talking to and *how*; path + query are *what* you are asking for.`,
      a_zh: `MDN：[[url]]是网络上某个唯一资源的地址。以 \`https://www.example.com:443/path/to/file.html?key1=value1&key2=value2#section\` 为例：
1. **[[scheme]]**（\`https\`）——用哪种协议通信。告诉浏览器（和服务器）这是加密的 HTTP。
2. **[[domain]]**（\`www.example.com\`）——要访问哪台网页服务器。[[dns]]会把它翻译成 IP 地址。
3. **[[port]]**（\`:443\`）——服务器上的哪扇“门”。通常省略，因为 80/443 是默认值。
4. **[[path]]**（\`/path/to/file.html\`）——你要服务器上的哪个资源。
5. **[[query]]**（\`?key1=value1&key2=value2\`）——服务器用来生成回应的额外 键=值 信息：搜索词、筛选条件、页码，也常常是追踪编号。
6. **[[fragment]]**（\`#section\`）——页面内的某个位置。它**不会发送给服务器**，只有浏览器会读取。

协议 + 域名 + 端口合起来叫“authority（权威部分）”——说明你在和*谁*、以*什么方式*通话；路径 + 查询参数说明你要*什么*。`,
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
      cap_en: 'Same HTTP request, two places to put your data. GET writes it on the outside of the envelope (the URL); POST seals it inside (the body).',
      cap_zh: '同样是 HTTP 请求，数据有两个放法。GET 把数据写在“信封外面”（URL 里）；POST 把它封进“信封里”（正文）。',
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
      cap_en: 'Left: the GUI is the top layer of metaphors; the terminal is a window onto the shell, which talks to programs and the OS. Right: the kind of breakdown Explainshell gives you for one command.',
      cap_zh: '左：GUI 是最上面那层“隐喻”；终端是通向 shell 的窗口，shell 再去调用程序和操作系统。右：Explainshell 对一条命令所做的那种拆解。',
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
      hook_en: 'Terminal = the window; shell = the interpreter; GUI = metaphors on top. The terminal shows the real command.',
      hook_zh: '终端是窗口，shell 是解释器，GUI 是盖在上面的隐喻。终端让你看到真实的命令。',
      trap_en: 'Don’t mix up terminal and shell. And answer both halves: define shell + list concrete things the GUI hides.',
      trap_zh: '别把终端和 shell 混为一谈。两问都要答：定义 shell + 列出 GUI 隐藏的具体东西。'
    }
  ]
});
