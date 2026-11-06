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
  lec_en: `This class asks one uncomfortable question: **who is the product when the service is free?** We answer it twice. First as economics: Zuboff's [[surv_cap]] and Varoufakis's [[technofeudalism]] explain why our behavior became raw material and why platforms charge rent instead of competing. Then as plumbing: a URL, a GET or POST, and a shell show *where* that data actually travels and what the friendly screen hides. The point for a designer is that every interface choice — a free tier, a form, a hidden setting — sits inside this economy, so you can't design responsibly without seeing it.`,
  lec_zh: `这一课只问一个让人不太舒服的问题：**服务免费的时候，谁才是产品？** 我们从两个角度回答。先讲经济：祖博夫的[[surv_cap]]和瓦鲁法基斯的[[technofeudalism]]解释了为什么我们的行为变成了原材料，为什么平台靠收租而不是靠竞争赚钱。再讲“管道”：URL、GET/POST 和 shell，让我们看到数据*到底*流向哪里、友好的界面藏起了什么。对设计师来说，每一个界面决定——免费版、一个表单、一个藏起来的设置——都发生在这个经济里，看不见它，就谈不上负责任地设计。`,
  lec_faq: [
    { q_en: `Is it surveillance if I clicked 'I agree'?`, q_zh: `我点了“同意”，还算被监视吗？`, a_en: `Zuboff would say yes. The terms are long, unreadable and take-it-or-leave-it, so you never really choose what surplus is taken or how predictions are sold. Agreeing to a service isn't agreeing to be the raw material.`, a_zh: `祖博夫会说算。条款又长又难懂，要么全收、要么别用，你根本没法真正选择哪些剩余被拿走、预测怎么被卖。同意使用服务，不等于同意成为原材料。` },
    { q_en: `Are surveillance capitalism and technofeudalism just two names for the same thing?`, q_zh: `监视资本主义和技术封建主义只是同一件事的两个名字吗？`, a_en: `No — related, not identical. Zuboff explains the mechanism (extract → predict → modify) and still calls it capitalism. Varoufakis says the result replaces markets with fiefs that earn rent. Exam phrase: mechanism vs. economic structure.`, a_zh: `不是——有关联，但不一样。祖博夫解释机制（提取 → 预测 → 矫正），仍称之为资本主义；瓦鲁法基斯说结果是用收租的“封地”取代了市场。考试关键词：机制 vs 经济结构。` },
    { q_en: `Does the server really never see the #part of a URL?`, q_zh: `服务器真的看不到网址里 # 后面的部分吗？`, a_en: `Right — the browser keeps the fragment and uses it to jump inside the page. (A page's own JavaScript can read it and send it somewhere, but the request itself doesn't carry it.)`, a_zh: `对——锚点由浏览器自己保留，用来在页面内跳转。（页面上的 JavaScript 可以读到它再发出去，但请求本身不会带上它。）` },
    { q_en: `So is POST safer than GET?`, q_zh: `那 POST 比 GET 更安全吗？`, a_en: `Only in one small way: the data isn't in the address bar, history or logs. It is not encrypted by POST — HTTPS does that for both. The real difference is retrieve vs. change something.`, a_zh: `只在一个小地方更好：数据不出现在地址栏、历史记录和日志里。POST 本身不加密——两者的加密都靠 HTTPS。真正的区别是“取东西”还是“改东西”。` },
    { q_en: `Do I need to memorize terminal commands for the exam?`, q_zh: `考试需要背终端命令吗？`, a_en: `No. You need to explain what a shell is (an interpreter for typed commands) and what the terminal shows that the GUI hides. One example command like ls -la is a nice touch.`, a_zh: `不用。你要能解释 shell 是什么（解释你输入的命令的程序），以及终端显示了哪些 GUI 藏起来的东西。举一个例子命令（比如 ls -la）会加分。` },
    { q_en: `Why is a URL lesson in a class about capitalism?`, q_zh: `为什么讲资本主义的课要讲网址？`, a_en: `Because the economics travels through the plumbing. Tracking IDs ride in query strings, form data goes by POST, and the shell lets you see what's really there. Understanding the pipes is how you see the surveillance.`, a_zh: `因为经济就是顺着这些“管道”流动的。追踪编号藏在查询参数里，表单数据走 POST，而 shell 让你看到底下真正有什么。懂了管道，才看得见监视。` }
  ],
  t_en: 'Surveillance Capitalism', t_zh: '监视资本主义',
  intro_en: 'The first class names the economic dilemma we design inside of — data extraction and platform power — and then opens the hood of the Web itself: what a URL says, what a request carries, and what the command line shows that the screen hides.',
  intro_zh: '第一课先命名我们所处的经济困境——数据攫取与平台权力；然后打开网络本身的“引擎盖”：URL 在说什么、一次请求带着什么，以及命令行显示了哪些屏幕隐藏的东西。',
  quiz: [
    { q_en: "In Zuboff's account, what does surveillance capitalism claim as its free raw material?", q_zh: "按祖博夫的说法，监视资本主义把什么当作免费原材料？",
      opts: [{ en: "Advertisers' budgets", zh: "广告主的预算" }, { en: "Human experience, turned into behavioral data", zh: "人的经验，被转成行为数据" }, { en: "The company's own source code", zh: "公司自己的源代码" }, { en: "Government census records", zh: "政府的人口普查记录" }], a: 1,
      why_en: "Zuboff's core claim: **human experience** (clicks, location, pauses, voice) is taken for free and translated into behavioral data. Advertisers' money is what *buys* the predictions at the end, not the raw material.",
      why_zh: "祖博夫的核心观点：**人的经验**（点击、位置、停留、声音）被免费拿走，再变成行为数据。广告主的钱是最后*购买*预测的，不是原材料。" },
    { q_en: "What is behavioral surplus?", q_zh: "什么是“行为剩余”？",
      opts: [{ en: "Data you deleted from your account", zh: "你从账户里删掉的数据" }, { en: "Extra features a product gives away for free", zh: "产品免费送的额外功能" }, { en: "Data collected beyond what is needed to improve the service", zh: "超出改进服务所需而收集的数据" }, { en: "Money left over after ads are paid for", zh: "付完广告费剩下的钱" }], a: 2,
      why_en: "[[behav_surplus]] is the **extra** behavioral data — more than the service needs to work better for you. That surplus is what machine intelligence turns into predictions. It has nothing to do with spare money or free features.",
      why_zh: "[[behav_surplus]]是**多出来的**行为数据——超出让服务对你更好用所需的部分。正是这部分剩余被机器智能加工成预测。它和“剩下的钱”“免费功能”都无关。" },
    { q_en: "Where are prediction products sold?", q_zh: "预测产品卖到哪里去？",
      opts: [{ en: "Back to the users who generated the data", zh: "卖回给产生数据的用户" }, { en: "In behavioral futures markets, mainly to advertisers", zh: "在行为期货市场上，主要卖给广告主" }, { en: "To universities for research", zh: "卖给大学做研究" }, { en: "They are not sold; they only improve the app", zh: "不卖，只用来改进应用" }], a: 1,
      why_en: "Zuboff calls the buyers' side **behavioral futures markets**: businesses (mostly advertisers) bet on what we will do next. We are not the customers; we are the source. Using data *only* to improve the app would be the small 'service improvement' share, not the business model.",
      why_zh: "祖博夫把买方那一侧叫做**行为期货市场**：企业（主要是广告主）押注我们接下来会做什么。我们不是顾客，而是原料来源。“只用来改进应用”只是那一小部分“改进服务”，不是这门生意的核心。" },
    { q_en: "Why does surveillance capitalism move toward behavior modification?", q_zh: "监视资本主义为什么会走向“行为矫正”？",
      opts: [{ en: "Because the surest prediction is one you cause", zh: "因为最确定的预测，是被促成的预测" }, { en: "Because laws require platforms to educate users", zh: "因为法律要求平台教育用户" }, { en: "Because users ask for more notifications", zh: "因为用户要求更多推送" }, { en: "Because data storage is too expensive", zh: "因为存数据太贵" }], a: 0,
      why_en: "Predictions sell better when they come true, so platforms **nudge, tune and herd** behavior (feeds, notifications, game rewards) to make them come true. That is [[behav_mod]]. It is a business incentive, not a legal duty or user demand.",
      why_zh: "预测越准越值钱，所以平台会用信息流、推送、游戏奖励去**推动、调教、引导**行为，让预测成真。这就是[[behav_mod]]。它出于商业动机，不是法律义务，也不是用户要求。" },
    { q_en: "What shift does technofeudalism (Varoufakis) highlight?", q_zh: "技术封建主义（瓦鲁法基斯）强调的是哪种转变？",
      opts: [{ en: "From cash to credit cards", zh: "从现金到信用卡" }, { en: "From factories to offices", zh: "从工厂到办公室" }, { en: "From state power to company power", zh: "从国家权力到公司权力" }, { en: "From profit earned in markets to rent paid to platform owners", zh: "从在市场中赚利润，到向平台主交地租" }], a: 3,
      why_en: "On a platform there is no open market: the platform *is* the market. Sellers pay [[cloud_rent]] just to be inside it, so the owners of [[cloud_capital]] earn **rent, not profit**. 'Company vs state power' is related but misses the key word: rent.",
      why_zh: "在平台上没有开放市场：平台本身*就是*市场。卖家为了能待在里面要交[[cloud_rent]]，所以[[cloud_capital]]的主人赚的是**地租，而不是利润**。“公司权力 vs 国家权力”有关联，但漏掉了关键词：地租。" },
    { q_en: "In technofeudalism, who are the 'cloud serfs'?", q_zh: "在技术封建主义里，“云农奴”指谁？",
      opts: [{ en: "Engineers who maintain the servers", zh: "维护服务器的工程师" }, { en: "Users whose unpaid posting, rating and scrolling builds the platform's cloud capital", zh: "用户——他们无偿的发帖、评分、刷屏在为平台建造云资本" }, { en: "Sellers who pay a cut of every sale", zh: "每笔交易都要交抽成的卖家" }, { en: "Governments that regulate the cloud", zh: "监管云服务的政府" }], a: 1,
      why_en: "[[cloud_serfs]] are ordinary users: our free activity trains the algorithm and grows the owner's capital. Sellers who pay a cut are the **vassals**, a different role in the same picture.",
      why_zh: "[[cloud_serfs]]就是普通用户：我们免费的活动在训练算法、壮大平台主的资本。交抽成的卖家是**附庸**，是同一幅图里的另一个角色。" },
    { q_en: "How do surveillance capitalism and technofeudalism relate?", q_zh: "监视资本主义和技术封建主义是什么关系？",
      opts: [{ en: "They describe opposite things", zh: "它们描述的是相反的东西" }, { en: "Technofeudalism is an older theory that Zuboff replaced", zh: "技术封建主义是被祖博夫取代的旧理论" }, { en: "Data extraction is the mechanism; technofeudalism is the economic structure it builds", zh: "数据攫取是机制；技术封建主义是这个机制建成的经济结构" }, { en: "They are two names for exactly the same idea", zh: "它们只是同一个概念的两个名字" }], a: 2,
      why_en: "Both start from extracting our behavior as data. Zuboff explains the **mechanism** (extract → predict → modify) as a new form of capitalism; Varoufakis argues that what it builds — fiefs collecting rent — is no longer capitalism at all. Related, not identical.",
      why_zh: "两者都从“把我们的行为当数据来攫取”出发。祖博夫讲的是**机制**（提取 → 预测 → 矫正），认为这是资本主义的新形态；瓦鲁法基斯则认为它建成的东西——收租的封地——已经不再是资本主义。相关，但不相同。" },
    { q_en: "Which part of https://www.example.com:443/path?q=jazz#top is never sent to the server?", q_zh: "在 https://www.example.com:443/path?q=jazz#top 中，哪一部分永远不会发给服务器？",
      opts: [{ en: "#top (the fragment)", zh: "#top（锚点 / 片段）" }, { en: "?q=jazz (the query)", zh: "?q=jazz（查询参数）" }, { en: ":443 (the port)", zh: ":443（端口）" }, { en: "/path (the path)", zh: "/path（路径）" }], a: 0,
      why_en: "MDN: the [[fragment]] after # points to a spot inside the page and is used **only by the browser**. The query is sent — it is extra information the server uses to build its answer.",
      why_zh: "MDN：# 后面的[[fragment]]指向页面里的某个位置，**只由浏览器使用**。查询参数是会发出去的——它是服务器用来生成回应的额外信息。" },
    { q_en: "You log in on a website by filling in a form. Which request usually happens, and where is your data?", q_zh: "你在网站上填表登录。通常发生的是哪种请求？你的数据放在哪？",
      opts: [{ en: "GET — the data goes in the URL", zh: "GET——数据放在 URL 里" }, { en: "GET — the data goes in the body", zh: "GET——数据放在正文里" }, { en: "POST — the data goes in the URL", zh: "POST——数据放在 URL 里" }, { en: "POST — the data goes in the request body", zh: "POST——数据放在请求正文里" }], a: 3,
      why_en: "Logging in or signing up **submits data that changes something on the server**, so the form uses [[post]] and the data travels in the [[req_body]]. GET only retrieves data and puts any data in the URL (like a search box's ?q=). Note: POST alone is not encryption — HTTPS is.",
      why_zh: "登录、注册是**提交会改变服务器状态的数据**，所以表单用[[post]]，数据放在[[req_body]]里。GET 只用来获取数据，附带的数据放在 URL 里（比如搜索框的 ?q=）。注意：POST 本身不等于加密，加密靠 HTTPS。" },
    { q_en: "What is the difference between the shell and the terminal?", q_zh: "shell 和终端有什么区别？",
      opts: [{ en: "The terminal is the window; the shell is the program that interprets your commands", zh: "终端是窗口；shell 是解释你命令的程序" }, { en: "The shell is the window; the terminal interprets commands", zh: "shell 是窗口；终端负责解释命令" }, { en: "They are the same thing", zh: "它们是同一个东西" }, { en: "The shell is a kind of GUI", zh: "shell 是一种图形界面" }], a: 0,
      why_en: "The [[terminal]] only shows text in and out; the [[shell]] (bash, zsh) reads your command, interprets it and asks the OS to run programs. Mixing them up is the most common mistake on this question.",
      why_zh: "[[terminal]]只负责显示输入和输出的文字；[[shell]]（bash、zsh）读取你的命令、解释它，再请操作系统运行程序。把两者混为一谈，是这道题最常见的错误。" }
  ],
  qs: [
    {
      id: '1.1',
      lec_open_en: `Ask: "Instagram, Google Maps and TikTok cost you nothing. So who is paying for the servers — and what are they buying?"`,
      lec_open_zh: `先问：“Instagram、谷歌地图、TikTok 都不收你钱。那服务器的钱是谁付的？他们到底在买什么？”`,
      lec_why_en: `Start from the business problem. Advertising used to be a guess: you bought a magazine page and hoped the right people saw it. Whoever could **predict behavior** better could sell ads for more. That is why data became valuable — not the data you *need* to give, but everything extra.

That extra is [[behav_surplus]]. Google discovered that the traces left behind by searches — typos, timing, clicks — were useless for improving search but excellent for predicting what you'll do. Zuboff's key move is to call this a **new raw material**: human experience, taken without asking, refined into [[pred_products]] and sold in [[behav_futures]].

Why does it end in [[behav_mod]]? Because the surest prediction is one you cause. If a company can nudge you — a notification at the right moment, a feed tuned to keep you scrolling — its predictions come true and are worth more. So the logic slides from *watching* to *steering*.

That's why Zuboff says it is not just "privacy": it is an **asymmetry of knowledge and power**. They know us in detail; we can't see them. For a designer, every free feature is worth asking: what surplus does this collect, and who is it really for?

**Fun fact:** in 2012 a US store famously sent baby-product coupons to a teenager before her own father knew she was pregnant — the shopping data predicted it. That's behavioral surplus doing its job a little *too* well.`,
      lec_why_zh: `从商业问题讲起。广告以前全靠猜：你买一页杂志版面，希望对的人能看到。谁能更准地**预测行为**，谁的广告就能卖得更贵。所以数据才值钱——不是你*必须*给的那部分，而是所有多出来的部分。

多出来的就是[[behav_surplus]]。谷歌发现，搜索留下的痕迹——打错的字、停留的时间、点了什么——对改进搜索没什么用，但用来预测你下一步会做什么却非常好用。祖博夫的关键一步，是把它叫作**一种新的原材料**：人的经验，没问过你就被拿走，加工成[[pred_products]]，在[[behav_futures]]里卖掉。

为什么最后会走到[[behav_mod]]？因为最准的预测，是你亲手促成的预测。如果公司能推你一把——在恰好的时刻推送一条通知、把信息流调到让你停不下来——它的预测就会成真，也就更值钱。于是逻辑从“看着你”滑向了“操纵你”。

所以祖博夫说，这不只是“隐私”问题，而是**知识和权力的不对称**：他们把我们看得一清二楚，我们却看不见他们。对设计师来说，每个免费功能都值得问一句：它收集了什么剩余？真正服务的是谁？

**冷知识：**2012 年，美国一家超市给一个高中女生寄去了婴儿用品优惠券——她爸爸都还不知道她怀孕了，购物数据却已经“猜”出来了。这就是行为剩余把活干得*太好*了。`,
      lec_trap_en: `Students say "companies collect data to show ads." That's tempting because it's true but too shallow — it misses that the *surplus* is the raw material, that predictions are the product, and that the system moves toward modifying behavior.`,
      lec_trap_zh: `学生常写“公司收集数据来投放广告”。这句话诱人，因为它没错，但太浅了——它漏掉了“剩余”才是原材料、“预测”才是产品，以及系统会走向修改行为这几层。`,
      lec_ask_en: `Ask: "Why would a company want to change your behavior, not just watch it?" — Listen for: because a caused behavior is a guaranteed prediction, and guaranteed predictions sell for more.`,
      lec_ask_zh: `问：“为什么公司不满足于看着你，还要改变你的行为？”——听他说出：因为被促成的行为就是有保证的预测，有保证的预测卖得更贵。`,
      lec_bridge_en: `If surveillance capitalism is how the raw material is taken, the next question is what kind of economy that builds — Varoufakis says it's not capitalism anymore.`,
      lec_bridge_zh: `如果监视资本主义讲的是原材料怎么被拿走，那下一个问题就是：这样建起来的是一种什么经济？瓦鲁法基斯说，那已经不是资本主义了。`, t_en: 'Surveillance capitalism', t_zh: '监视资本主义',
      q_en: 'Describe surveillance capitalism.', q_zh: '描述“监视资本主义”。',
      src: 'Zuboff; AI and Humanity (AH)',
      kid_en: "Imagine a school café that gives you free lunch. While you eat, a quiet helper writes down everything: what you pick, how long you stare at the dessert, who you sit with. A little of that list is used to make the menu better for you. Most of it goes into a notebook of guesses — \"Mia will want chocolate milk on Friday\" — and the café sells those guesses to snack companies. Then the café starts nudging you (a sign, a coupon) so the guess comes true. That business is surveillance capitalism: you are not the customer, you are the material.",
      kid_zh: "想象学校门口有家“免费”的午餐店。你吃饭时，有个人在旁边悄悄记：你拿了什么、盯着甜点看了多久、和谁坐一桌。一小部分记录真的用来改菜单，让你吃得更好；大部分被写进一本“猜测本”——“小美周五会想喝巧克力奶”——再把这些猜测卖给零食公司。接着店里还会“推”你一下（放张海报、给张优惠券），让猜测成真。这就是监视资本主义：你不是顾客，你是原材料。",
      steps: [
        { en: "Start at the left: that circle is YOU. Every click, search and pause becomes data.", zh: "从左边开始：那个圆就是“你”。你的每次点击、搜索、停顿都变成数据。", hi: ["k11_you", "k11_data"] },
        { en: "A thin blue stream goes back to you as a better app. That's the small part you get.", zh: "一条细细的蓝线回到你那里，变成更好用的 App——这是你得到的那一小部分。", hi: ["k11_service"] },
        { en: "The thick red stream is the extra — the 'behavioral surplus' the company keeps.", zh: "粗粗的红线是“多拿走的那部分”——公司留下的“行为剩余”。", hi: ["behav_surplus"] },
        { en: "Machine intelligence turns that extra into guesses about what you'll do next: prediction products.", zh: "机器智能把这些剩余加工成“你下一步会做什么”的猜测：预测产品。", hi: ["k11_mi", "pred_products"] },
        { en: "The guesses are sold to advertisers in a market that bets on your future behavior.", zh: "这些猜测卖给广告主，就像在一个“押注你未来行为”的市场里交易。", hi: ["behav_futures"] },
        { en: "Last, the dashed line: the system nudges you so its guesses come true. The loop starts again.", zh: "最后看虚线：系统“推”你一把，让它的猜测成真——循环又开始了。", hi: ["behav_mod", "k11_you"] }
      ],
      fig() {
        // Zuboff's cycle: experience → split → surplus → machine intelligence → prediction products → futures market → behavior modification → back to you
        let s = '';
        const node = (x, y, w, h, en, zh, o = {}) => F.rect(x, y, w, h, { rx: o.rx ?? 8, fill: o.fill || '#fff', stroke: o.stroke || F.C.ink, sw: o.sw, tip: o.tip, note: o.note }) +
          F.text(x + w / 2, y + h / 2 - 7, en, { cls: 'lt', color: o.tc || F.C.ink }) + F.sub(x + w / 2, y + h / 2 + 12, zh, { anchor: 'middle' });
        // you
        s += F.circle(92, 176, 46, { fill: '#fff', tip: 'k11_you', note: { en: 'Clicks, searches, location, pauses, faces, voices — claimed as free raw material.', zh: '点击、搜索、位置、停顿、面孔、声音——被当作免费原材料。' } });
        for (let i = 0; i < 26; i++) { const a = i * 2.4, r = 8 + (i % 5) * 6; s += `<circle cx="${(92 + r * Math.cos(a)).toFixed(1)}" cy="${(170 + r * 0.8 * Math.sin(a)).toFixed(1)}" r="1.2" fill="${F.C.ink}"/>`; }
        s += F.text(92, 238, 'YOU · EXPERIENCE', { cls: 'lt' }) + F.sub(92, 254, '你 · 人的经验', { anchor: 'middle' });
        // flow out of you
        s += F.path('M138,176 L208,176', { arrow: true, sw: 1.4 });
        // splitter
        s += F.g(F.circle(222, 176, 10, { fill: F.C.ink }) + F.text(222, 204, 'DATA', { cls: 'tiny', color: F.C.mute }), { tip: 'k11_data', note: { en: 'Everything you do becomes data. The platform decides how to split it.', zh: '你做的一切都变成数据，由平台决定怎么分。' } });
        // thin blue branch: service improvement, loops back to you
        s += F.path('M226,166 C240,96 270,80 300,80', { stroke: F.C.blue, sw: 1.2, arrow: true });
        s += node(300, 54, 170, 52, 'SERVICE IMPROVEMENT', '改进服务（返还给你）', { fill: F.C.blueF, stroke: F.C.blue, tc: F.C.blue, tip: 'k11_service', note: { en: 'The small share of data actually used to make the product better for you.', zh: '真正用来让产品更好用的那一小部分数据。' } });
        s += F.path('M300,70 C200,30 110,70 96,124', { stroke: F.C.blue, sw: 1.2, arrow: true, dash: '4 3' });
        // thick red branch: behavioral surplus
        s += F.path('M232,182 L298,206', { stroke: F.C.red, sw: 4, arrow: false }) + F.path('M290,203 L300,207', { stroke: F.C.red, sw: 1.2, arrow: true });
        s += node(302, 180, 150, 54, 'BEHAVIORAL SURPLUS', '行为剩余（被拿走）', { fill: F.C.redF, stroke: F.C.red, tc: F.C.red, sw: 1.6, tip: 'behav_surplus' });
        s += F.path('M452,207 L486,207', { stroke: F.C.red, sw: 4 }) + F.path('M480,207 L492,207', { stroke: F.C.red, sw: 1.2, arrow: true });
        // machine intelligence (chips)
        let chips = ''; for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) chips += `<rect x="${508 + i * 18}" y="${188 + j * 16}" width="9" height="9" fill="${F.C.ink}"/>`;
        s += F.g(F.rect(494, 172, 88, 70, { rx: 6 }) + chips + F.text(538, 262, 'MACHINE', { cls: 'tiny' }) + F.text(538, 274, 'INTELLIGENCE', { cls: 'tiny' }) + F.sub(538, 290, '机器智能', { anchor: 'middle' }),
          { tip: 'k11_mi', note: { en: 'Algorithms refine the surplus into forecasts.', zh: '算法把剩余数据加工成预测。' } });
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
      id: '1.2',
      lec_open_en: `Ask: "If you sell handmade earrings on Amazon or Etsy, are you in a market — or are you renting a stall in someone's castle?"`,
      lec_open_zh: `先问：“如果你在亚马逊或 Etsy 上卖手工耳环，你是在一个市场里，还是在别人的城堡里租了个摊位？”`,
      lec_why_en: `Capitalism, in the textbook picture, runs on **markets and profit**: many sellers compete, the best product wins, profit is the reward. Varoufakis asks: does that still describe Amazon? On Amazon, Amazon owns the marketplace, sets the rules, sees every transaction, and takes a cut of every sale. That is not profit from competing; it is **rent** for access.

That's why he reaches for the word *feudal*. In feudalism, lords owned the land and peasants paid to work it. Today the "land" is [[cloud_capital]] — servers, algorithms, the platform itself. Sellers are vassals paying [[cloud_rent]]; users are [[cloud_serfs]] whose unpaid posting, rating and scrolling keeps improving the algorithm that owns them.

Why does this matter next to Zuboff? Both start from the same engine — **extraction of behavior as data**. Zuboff explains the mechanism (extract → predict → modify) and still calls it a form of capitalism. Varoufakis says the result is so powerful it **replaces markets** with fiefdoms. Mechanism vs. structure: that's the relationship the exam wants.

**Picture it:** a medieval lord didn't need to grow better wheat than his neighbors — he just owned the field. Amazon doesn't need to sell better earrings than you. It owns the field you sell them in.`,
      lec_why_zh: `按教科书的说法，资本主义靠的是**市场和利润**：很多卖家竞争，最好的产品胜出，利润是奖赏。瓦鲁法基斯问：这还能描述亚马逊吗？在亚马逊上，市场本身归亚马逊所有，规则它定，每笔交易它都看得见，每笔还要抽成。这不是靠竞争赚来的利润，而是为“进门”付的**地租**。

所以他用了“封建”这个词。封建时代，领主拥有土地，农民交租才能种地。今天的“土地”是[[cloud_capital]]——服务器、算法、平台本身。卖家是交[[cloud_rent]]的附庸；用户是[[cloud_serfs]]，我们免费发帖、评分、刷屏，不断把那个“拥有”我们的算法养得更好。

为什么要把它和祖博夫放在一起？两人起点相同——**把行为当作数据来攫取**。祖博夫解释机制（提取 → 预测 → 矫正），仍把它看成资本主义的一种形态；瓦鲁法基斯则说，这个结果强大到**取代了市场**，变成了封地。一个讲机制，一个讲结构——这就是考试要的关系。

**想象一下：**中世纪的领主不需要比邻居种出更好的小麦——他只要拥有那块地。亚马逊也不需要卖出比你更好的耳环，它拥有的是你卖耳环的那块地。`,
      lec_trap_en: `Students treat technofeudalism as a synonym for surveillance capitalism. It's tempting because both are about Big Tech and data — but the key word is **rent vs. profit**, and the relationship is mechanism vs. economic structure.`,
      lec_trap_zh: `学生常把技术封建主义当成监视资本主义的同义词。这很诱人，因为两者讲的都是科技巨头和数据——但关键词是**地租 vs 利润**，两者的关系是“机制”与“经济结构”。`,
      lec_ask_en: `Ask: "What do Amazon sellers pay, and why is that rent and not profit?" — Listen for: a cut of every sale just to exist inside the platform; they pay for access, not because they out-competed anyone.`,
      lec_ask_zh: `问：“亚马逊卖家付的是什么钱？为什么那是地租而不是利润？”——听他说出：每笔交易被抽成，只为能在平台里存在；付的是准入费，不是因为赢了竞争。`,
      lec_bridge_en: `Now let's leave the economics and follow the data itself — starting with the address every request travels to: the URL.`,
      lec_bridge_zh: `现在先放下经济学，跟着数据本身走——从每个请求都要去的那个地址开始：URL。`, t_en: 'Technofeudalism', t_zh: '技术封建主义',
      q_en: 'What does technofeudalism highlight? How does it relate to surveillance capitalism?',
      q_zh: '“技术封建主义”强调了什么？它与监视资本主义有什么关系？',
      src: 'Varoufakis, Technofeudalism',
      kid_en: "Think of a huge game server that everyone plays on. If you want to sell skins there, you must pay the owner a cut of every sale — not because the owner made a better skin, but because they own the place. Players make the server fun by playing, chatting and posting for free, which makes the owner's server even more valuable. That's technofeudalism: the owner is like a lord, sellers pay rent to be inside, and players work for free.",
      kid_zh: "想象一个所有人都在玩的超大游戏服务器。你想在里面卖皮肤，每卖一件都要给服务器老板抽成——不是因为老板做的皮肤更好，而是因为地盘是他的。玩家们免费地玩、聊天、发帖，让这个服务器越来越热闹、越来越值钱。这就是技术封建主义：老板像领主，卖家交“地租”才能留在里面，玩家像农奴一样免费干活。",
      steps: [
        { en: "The big grid is the platform. It looks like a market, but one company owns all of it — a 'fief'.", zh: "这块大网格就是平台。它看起来像市场，其实整块地都归一家公司——一块“封地”。", hi: ["k12_fief"] },
        { en: "The yellow boxes are sellers. They pay a cut of every sale just to be inside: cloud rent.", zh: "黄色盒子是卖家。他们每卖一件都要抽成，只为能待在里面：这叫“云地租”。", hi: ["cloud_rent"] },
        { en: "The little blue people are users. Posting, rating and scrolling is free work for the owner.", zh: "蓝色小人是用户。发帖、打分、刷屏，都是给老板的免费劳动。", hi: ["cloud_serfs"] },
        { en: "Floating on top is the algorithm — cloud capital. It decides what everyone sees, and the owner collects rent instead of profit.", zh: "浮在上面的是算法——“云资本”。它决定每个人看到什么，老板靠收租而不是靠竞争赚钱。", hi: ["cloud_capital"] }
      ],
      fig() {
        F.setIso(24, 380, 84);
        let s = '';
        // the fief (platform) — big base
        s += F.g(F.plate({ x: 0, y: 0, z: 0, w: 7, d: 7, t: 0.25, pattern: 'grid', density: 7, fill: '#fff' }) +
          F.label(F.iso(0, 4.5, 0.25), 200, 'THE FIEF = PLATFORM') + F.sub(192, F.iso(0, 4.5, 0.25)[1] + 17, '封地 = 平台（亚马逊、应用商店）', { anchor: 'end' }),
          { tip: 'k12_fief', note: { en: 'Not a market: one company owns the space where buying and selling happen.', zh: '不是市场：交易发生的整个空间由一家公司拥有。' } });
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
      id: '1.3',
      lec_open_en: `Ask: "When you type a web address, how does a computer on the other side of the world know exactly which page you want?"`,
      lec_open_zh: `先问：“你输入一个网址，地球另一边的电脑怎么就知道你要的是哪一页？”`,
      lec_why_en: `A URL exists because the Web needed **one string that can locate any resource anywhere**. To do that, it has to answer several questions in order — and each part of the URL answers exactly one.

**How** do we talk? The [[scheme]] (https) says which protocol. **Who** do we talk to? The [[domain]] names the server, and DNS turns it into an IP address. **Which door?** The [[port]] — usually invisible because 443 and 80 are agreed defaults. **What** do we want? The [[path]]. **With what conditions?** The [[query]] — key=value pairs like a search term or a filter.

Why is the [[fragment]] different? Because it's about a spot *inside* the page you already got — the server has nothing to do with it, so the browser never sends it. That detail shows you understand the URL as a conversation with a server, not just a string.

For a designer the why is practical and political: query strings carry search terms and tracking IDs (?utm_source=…), so the URL is also where surveillance hitches a ride.

**Try it live:** paste any shopping link into a notes app and look at everything after the ?. Half of it is usually tracking — utm_source, ref, click IDs. The URL is quietly telling the store how you found it.`,
      lec_why_zh: `URL 存在，是因为网络需要**一个能定位世界上任何资源的字符串**。要做到这一点，它必须按顺序回答几个问题——URL 的每一段正好回答一个。

**怎么说话？**[[scheme]]（https）说明用哪种协议。**跟谁说？**[[domain]]指明服务器，DNS 再把它翻译成 IP 地址。**走哪扇门？**[[port]]——平时看不到，因为 443 和 80 是约定好的默认值。**要什么？**[[path]]。**附带什么条件？**[[query]]——像搜索词、筛选条件这样的 键=值。

为什么[[fragment]]不一样？因为它说的是你已经拿到的那一页*里面*的某个位置——跟服务器无关，所以浏览器根本不会把它发出去。答出这个细节，说明你把 URL 理解成了“和服务器的一次对话”，而不只是一串字。

对设计师来说，这个“为什么”既实用也有政治意味：查询参数里会带着搜索词和追踪编号（?utm_source=…），所以 URL 也是监视顺路搭车的地方。

**现场试一下：**随便把一个购物链接粘到备忘录里，看看 ? 后面那一大串。通常一半都是追踪参数——utm_source、ref、各种点击编号。网址在悄悄告诉商店你是怎么找过来的。`,
      lec_trap_en: `Students list the parts but not what each *tells the server* — and forget that the fragment tells it nothing. It's tempting to just label the pieces because that looks complete.`,
      lec_trap_zh: `学生常只列出各部分名字，没说每部分“告诉服务器什么”，还忘了锚点什么也不告诉服务器。只贴标签看起来很完整，所以容易掉进去。`,
      lec_ask_en: `Ask: "Point at ?q=jazz and #reviews in a URL — which one does the server see, and why?" — Listen for: the query is sent and used to build the answer; the fragment stays in the browser.`,
      lec_ask_zh: `问：“指着网址里的 ?q=jazz 和 #reviews——服务器能看到哪个？为什么？”——听他说出：查询参数会发出去，服务器用它生成回应；锚点留在浏览器里。`,
      lec_bridge_en: `The URL says where to go; the next question is what the browser says when it gets there — GET or POST.`,
      lec_bridge_zh: `URL 说的是“去哪”；下一个问题是浏览器到了那里说什么——GET 还是 POST。`, t_en: 'URL', t_zh: 'URL 网址',
      q_en: 'Name the parts of a URL and say what each one tells the server.',
      q_zh: '说出 URL 的各个组成部分，以及每一部分告诉服务器什么。',
      src: 'MDN, “What Is a URL?”',
      kid_en: "A URL is like the address on a package. First it says HOW to deliver it (by truck or by plane — that's https). Then WHICH building (the domain), WHICH door of the building (the port), WHICH room (the path), and a sticky note with extra requests (the query, like \"size: large\"). The part after # is a note only for you — like \"open to page 5\" — the post office never reads it.",
      kid_zh: "URL 就像快递单上的地址。先写“怎么送”（走陆运还是空运——就是 https），再写“哪栋楼”（域名）、“楼的哪个门”（端口）、“哪个房间”（路径），再贴一张写着额外要求的便利贴（查询参数，比如“要大号”）。# 后面的部分是写给你自己的小纸条——像“翻到第 5 页”——快递员根本不看。",
      steps: [
        { en: "Read the URL left to right. The pink part, https, says HOW the browser and server will talk.", zh: "从左往右读。粉色的 https 说的是浏览器和服务器“用什么方式说话”。", hi: ["scheme"] },
        { en: "Blue is the domain: WHICH server. DNS looks it up like a phone book.", zh: "蓝色是域名：找“哪台服务器”。DNS 像查电话簿一样把它查出来。", hi: ["domain"] },
        { en: "Yellow is the port: which door on that server. Usually hidden, because 443 is the default door.", zh: "黄色是端口：服务器上的“哪扇门”。通常不写，因为 443 是默认的门。", hi: ["port"] },
        { en: "Green is the path: WHICH page or file you want.", zh: "绿色是路径：你要“哪个页面或文件”。", hi: ["path"] },
        { en: "Red is the query: extra key=value wishes, like a search word.", zh: "红色是查询参数：额外的“键=值”要求，比如搜索词。", hi: ["query"] },
        { en: "Grey #section is the fragment — it never leaves your browser. The server never sees it!", zh: "灰色的 #section 是锚点——它从不离开你的浏览器，服务器根本看不到！", hi: ["fragment"] }
      ],
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
      id: '1.4',
      lec_open_en: `Ask: "Why does your browser warn you 'Confirm form resubmission' when you refresh after buying something — but never when you refresh a Google search?"`,
      lec_open_zh: `先问：“为什么买完东西刷新页面，浏览器会警告‘确认重新提交表单’，刷新谷歌搜索却从来不会？”`,
      lec_why_en: `HTTP gives every request a **verb**, because the server needs to know whether you are *asking* or *changing something*. That's the whole reason GET and POST exist.

[[get]] means "give me." It should only retrieve, so it's [[idempotent]]: do it ten times, nothing changes. Because it changes nothing, it's safe to put the data in the URL, bookmark it, cache it, and refresh freely — that's why a Google search is a GET and shows ?q= in the address bar.

[[post]] means "take this and act on it." It changes the server's state — an account is created, an order is placed — so repeating it is *not* safe (two orders!). That's exactly why the browser warns before resubmitting. The data goes in the [[req_body]], not the URL, so it doesn't land in history, logs or bookmarks.

So when you fill in a form — sign up, log in, check out — it's usually POST, *because* the action has side effects. And a key nuance: POST is not encryption. Only HTTPS protects the data in transit.

**A tiny drama:** every developer has a story about a buy button that was a GET — and a search-engine robot that "visited" every link and accidentally ordered the whole catalog. That's why verbs matter.`,
      lec_why_zh: `HTTP 给每个请求一个**动词**，因为服务器需要知道你是在*要东西*，还是在*改东西*。GET 和 POST 存在的全部理由就在这里。

[[get]]的意思是“给我”。它只应该用来取数据，所以它是[[idempotent]]的：做十次，什么也不会变。正因为什么都不改，把数据放进 URL、收藏、缓存、随便刷新都没关系——所以谷歌搜索用的是 GET，地址栏里会出现 ?q=。

[[post]]的意思是“收下这个，然后去处理”。它会改变服务器的状态——创建账户、生成订单——所以重复执行*不安全*（会下两次单！）。这正是浏览器在重新提交前警告你的原因。数据放在[[req_body]]里，不进 URL，也就不会留在历史记录、日志或书签里。

所以填写表单时——注册、登录、结账——通常是 POST，*因为*这个动作有副作用。还有一个关键细节：POST 不等于加密，真正在传输中保护数据的只有 HTTPS。

**一个小剧场：**几乎每个程序员都听过这种故事：购买按钮被做成了 GET，结果搜索引擎的爬虫把每个链接都“逛”了一遍，不小心把整个商品目录都下单了。所以“动词”很重要。`,
      lec_trap_en: `Students write "POST is secure, GET is not." Tempting because POST hides data from the URL — but hiding isn't encrypting; the real difference is retrieving vs. changing state.`,
      lec_trap_zh: `学生常写“POST 安全，GET 不安全”。这很诱人，因为 POST 确实把数据藏在了 URL 外面——但“藏起来”不等于“加密”，真正的区别是“取数据”还是“改状态”。`,
      lec_ask_en: `Ask: "Why is a search box GET but a sign-up form POST?" — Listen for: searching changes nothing and is fine to bookmark/repeat; signing up creates an account, a side effect you don't want repeated.`,
      lec_ask_zh: `问：“为什么搜索框用 GET，注册表单用 POST？”——听他说出：搜索不改变任何东西，可以收藏、重复；注册会创建账户，这种副作用不该重复发生。`,
      lec_bridge_en: `We've seen what the browser says to the server. The shell lets us say things to our own computer directly — without the friendly buttons.`,
      lec_bridge_zh: `我们看到了浏览器怎么跟服务器说话。shell 则让我们不用那些友好的按钮，直接跟自己的电脑说话。`, t_en: 'GET vs. POST', t_zh: 'GET 与 POST',
      q_en: 'What is the difference between GET and POST, and when you fill in a form on a website, which one happens?',
      q_zh: 'GET 和 POST 有什么区别？当你在网站上填写表单时，发生的是哪一个？',
      src: 'MDN, “HTTP Request Methods”',
      kid_en: "GET is like a postcard: whatever you write is on the outside, so anyone handling it can read it — and sending it again changes nothing, you're just asking for something. POST is like a sealed envelope you drop in a box: what you wrote is inside, and it makes something happen, like signing up for a club. Send the envelope twice and you might be signed up twice! When you fill in a form, you're usually mailing that envelope: POST.",
      kid_zh: "GET 像一张明信片：写的东西都在外面，经手的人都看得见；而且再寄一次也不会改变什么，你只是在“要”东西。POST 像一个封好的信封投进信箱：内容在里面，而且它会“让事情发生”，比如报名参加社团。同一个信封寄两次，你可能就报名了两次！填网页表单时，你通常寄的就是这个信封：POST。",
      steps: [
        { en: "Press G (or click the GET key). Watch the address bar: your search word appears right in the URL — that's the postcard.", zh: "按 G（或点 GET 键）。看地址栏：搜索词直接出现在网址里——这就是明信片。", hi: [] },
        { en: "Look at the server's rows: GET didn't change anything. It only fetched a page.", zh: "看服务器里的记录行：GET 什么都没改，它只是取回一个页面。", hi: [] },
        { en: "Now press P (POST). The data travels sealed in the body, and the server ADDS a new account row.", zh: "现在按 P（POST）。数据封在正文里送过去，服务器“新增”了一行账户记录。", hi: [] },
        { en: "Press P again. A second account appears — that's why POST is not safe to repeat, and why browsers warn before resubmitting a form.", zh: "再按一次 P。又多了一个账户——所以 POST 不能随便重复，浏览器在重新提交表单前才会警告你。", hi: [] }
      ],
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
      id: '1.5',
      lec_open_en: `Ask: "Your Finder or desktop shows you folders. Do you think it shows you *everything* in them?"`,
      lec_open_zh: `先问：“你的访达或桌面给你看文件夹。你觉得它把里面的东西*全部*给你看了吗？”`,
      lec_why_en: `The [[gui]] was invented to make computers easy, and it does that with **metaphors**: a desktop, folders, a trash can. Neal Stephenson's point is that every metaphor is also a filter — to make things simple, it hides how they really work.

The [[shell]] is the older, more direct layer: you type a command, it interprets it and asks the operating system to run a program. The [[terminal]] is just the window showing that conversation. Why does that matter? Because the command line shows you **the real thing behind the button**: the actual program, its [[cli_args]], full file paths, hidden dot-files, permissions, raw errors.

It also lets you **compose**: connect tools with a [[pipe]], write scripts, automate. A GUI rarely lets you do that, because each button was designed for one job.

Why this belongs in a class about surveillance: the course keeps asking what interfaces hide. The terminal is the habit of looking underneath — the same habit you need to see where data goes. It's also the native language of the agents we meet later: Claude Code and Hermes work by running shell commands.

**Stephenson's joke:** the GUI is like Disneyland — a beautiful, simplified world built on top of the real machinery, and you're not supposed to see the tunnels underneath. The terminal is the door to the tunnels.`,
      lec_why_zh: `[[gui]]的发明是为了让电脑变好用，它靠的是**隐喻**：桌面、文件夹、废纸篓。尼尔·斯蒂芬森的观点是：每个隐喻同时也是一道滤镜——为了让事情变简单，它把事情真正怎么运作藏了起来。

[[shell]]是更老、更直接的一层：你输入命令，它解释命令，再请操作系统去运行程序。[[terminal]]只是显示这场对话的窗口。为什么这很重要？因为命令行让你看到**按钮背后的真东西**：真正的程序、它的[[cli_args]]、完整路径、隐藏的“.”文件、权限、原始报错。

它还让你可以**组合**：用[[pipe]]把工具串起来、写脚本、自动化。GUI 很少允许这样，因为每个按钮只为一件事而设计。

为什么这一题出现在讲监视的这一课？因为整门课一直在问：界面藏起了什么？终端就是“往底下看”的习惯——正是看清数据去向所需要的那个习惯。它也是我们后面会遇到的智能体的母语：Claude Code 和 Hermes 就是靠运行 shell 命令来干活的。

**斯蒂芬森的比喻：**GUI 就像迪士尼乐园——在真实机器之上搭出来的、简化又漂亮的世界，你不该看到下面的地道。终端就是通往地道的那扇门。`,
      lec_trap_en: `Students confuse the terminal with the shell, and list vague things like "more control." Tempting because the two always appear together — but the terminal is the window; the shell is the interpreter. Name concrete hidden things.`,
      lec_trap_zh: `学生常把终端和 shell 混为一谈，还写些“更多控制”这种空话。这很诱人，因为两者总是一起出现——但终端是窗口，shell 是解释器。要说出具体被隐藏的东西。`,
      lec_ask_en: `Ask: "Name two things ls -la shows you that the Finder doesn't." — Listen for: hidden dot-files, permissions, exact sizes/dates, the actual command and its flags.`,
      lec_ask_zh: `问：“说出 ls -la 能显示、而访达不显示的两样东西。”——听他说出：隐藏的点文件、权限、精确的大小/日期、真正的命令和选项。`,
      lec_bridge_en: `That closes Class 1. Next class steps back in time: before computers, how did people organize information at all?`,
      lec_bridge_zh: `第 1 课到这里结束。下一课我们回到过去：在电脑出现之前，人们是怎么组织信息的？`, t_en: 'Command line / shell', t_zh: '命令行 / Shell',
      q_en: 'What is a shell, and what does the terminal show you that the GUI hides?',
      q_zh: '什么是 shell？终端向你展示了哪些图形界面（GUI）隐藏起来的东西？',
      src: 'Stephenson; The Missing Semester; Explainshell',
      kid_en: "Using a computer with icons is like ordering at a restaurant with a picture menu: easy, but you only get what's on the pictures and you never see the kitchen. The terminal is like talking straight to the chef in words. The shell is the chef who understands your words and makes things happen. Because you talk in exact words, you see everything — hidden ingredients (hidden files), what went wrong (errors), and you can combine orders in ways the picture menu never offered.",
      kid_zh: "用图标操作电脑，就像在餐厅看着图片菜单点菜：很方便，但你只能点图片上有的，也永远看不到厨房。终端就像直接用文字和厨师说话；shell 就是那个听懂你的话、把事情做出来的厨师。因为你用的是准确的文字，所以你什么都看得见：隐藏的配料（隐藏文件）、哪里出错了（报错），还能把好几道菜组合着点，这是图片菜单从来不提供的。",
      steps: [
        { en: "Click the screen and type ls, then press Enter. The terminal just shows your words.", zh: "点一下屏幕，输入 ls，按回车。终端只是把你的文字显示出来。", hi: [] },
        { en: "Watch the light travel down: the shell reads your command, the operating system does the work, the disk answers.", zh: "看光往下走：shell 读懂你的命令，操作系统去干活，硬盘给出回答。", hi: [] },
        { en: "Now type ls -la. The -la are 'flags': they ask for more detail, including hidden files that start with a dot.", zh: "再输入 ls -la。-la 是“选项”：要求更详细，连“.”开头的隐藏文件也列出来。", hi: [] },
        { en: "Press Tab to switch to the GUI view: the same folder now shows only a few icons — the hidden files and the command itself disappear. That's what the GUI hides.", zh: "按 Tab 切到图形界面：同一个文件夹只剩几个图标——隐藏文件和命令本身都不见了。这就是 GUI 藏起来的东西。", hi: [] }
      ],
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
