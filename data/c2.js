/* CLASS 2 · FUTURES PAST */
defTerms({
  c2_hierarchy: { en: 'Hierarchy', zh: '层级 / 等级结构',
    d_en: 'Wright: a top-down system that orders things by inclusiveness — broad categories contain narrower ones, like the branches of a tree. Each item has one place, and authority flows from the top.',
    d_zh: '赖特：一种自上而下的秩序，按“包含关系”排列事物——大类包含小类，像树枝一样分叉。每个东西只有一个位置，权威从顶端往下流。' },
  c2_network: { en: 'Network', zh: '网络',
    d_en: 'Wright: a bottom-up web of peer-to-peer connections with no single top. Order emerges from many local links rather than being imposed from above.',
    d_zh: '赖特：一张自下而上、点对点相连的网，没有唯一的顶端。秩序来自无数局部连接，而不是由上而下强加。' },
  c2_informatica: { en: 'Informatica', zh: '《Informatica》',
    d_en: 'Alex Wright’s history of information architecture before computers — from folk taxonomies and libraries to Otlet’s Mundaneum.',
    d_zh: '亚历克斯·赖特写的“计算机出现之前的信息架构史”——从民间分类学、图书馆，一直到奥特莱的“世界宫”（Mundaneum）。' },
  c2_folk_tax: { en: 'Folk taxonomy', zh: '民间分类学',
    d_en: 'The way ordinary people in every culture name and group living things — a shared, intuitive hierarchy built from everyday experience, not from science.',
    d_zh: '各种文化中普通人给生物命名、分组的方式——一种来自日常经验而非科学的、共享的直觉式层级。' },
  c2_berlin_ranks: { en: 'Berlin’s ranks', zh: '伯林的分类等级',
    d_en: 'Brent Berlin found the same levels across cultures: unique beginner (plant) → life-form (tree) → generic (oak) → specific (white oak) → varietal.',
    d_zh: '布伦特·伯林发现不同文化中都有同样的等级：起始类（植物）→ 生活型（树）→ 属级（橡树）→ 种级（白橡）→ 变种。' },
  c2_basic_level: { en: 'Basic level (generic rank)', zh: '基本层级（属级）',
    d_en: 'Rosch’s “basic-level category” = Berlin’s generic rank: the level we learn first, name fastest, picture most easily and interact with physically (dog, oak, chair).',
    d_zh: '罗施的“基本层级范畴”＝伯林的属级：我们最先学会、命名最快、最容易在脑中成像、也最常用身体去互动的层级（狗、橡树、椅子）。' },
  c2_stigmergy: { en: 'Stigmergy', zh: '共识主动性 / 痕迹协作',
    d_en: 'Coined by Pierre-Paul Grassé (1959) studying termites: coordination through traces left in the environment. Each action leaves a mark that stimulates the next action — no plan, no boss, no direct messages.',
    d_zh: '皮埃尔-保罗·格拉塞（1959）研究白蚁时提出：通过留在环境中的痕迹来协调。每个动作留下的痕迹会刺激下一个动作——没有计划、没有领导、也没有直接沟通。' },
  c2_pheromone: { en: 'Pheromone trace', zh: '信息素痕迹',
    d_en: 'Termites mix a chemical signal into each mud pellet. Fresh pellets attract more pellets, so piles grow into pillars and arches.',
    d_zh: '白蚁在每个泥球里混入化学信号。新泥球会吸引更多泥球，于是土堆长成柱子和拱门。' },
  c2_dewey: { en: 'Dewey Decimal Classification', zh: '杜威十进分类法',
    d_en: 'An enumerative, top-down tree: 10 main classes split into 10, then 10 again. Every subject is pre-listed and every book gets one place on one branch.',
    d_zh: '一种“列举式”、自上而下的树：10 个大类各分 10 类，再各分 10 类。所有主题事先列好，每本书只在一条分支上有一个位置。' },
  c2_udc: { en: 'UDC', zh: '国际十进分类法 UDC',
    d_en: 'Universal Decimal Classification (Otlet & La Fontaine, 1905): built on Dewey but adds signs like “:” and “+” so numbers can be combined to express relations between subjects.',
    d_zh: '国际十进分类法（奥特莱与拉方丹，1905）：以杜威为基础，但加入“:”“+”等符号，可以把号码组合起来表达主题之间的关系。' },
  c2_pmest: { en: 'PMEST', zh: 'PMEST 五个基本面',
    d_en: 'Ranganathan’s Colon Classification: describe any subject by five facets — Personality (what it is), Matter (material/property), Energy (action/process), Space (where), Time (when).',
    d_zh: '阮冈纳赞的冒号分类法：用五个“面”描述任何主题——本体 Personality（是什么）、物质 Matter（材料/属性）、动力 Energy（行为/过程）、空间 Space（在哪）、时间 Time（何时）。' },
  c2_facet: { en: 'Facet', zh: '分面',
    d_en: 'One independent dimension of description (color, size, era, place). Faceted systems compose an item’s description from several facets instead of locating it on one branch.',
    d_zh: '一个独立的描述维度（颜色、尺寸、年代、地点）。分面系统用多个分面“组合”出对一个东西的描述，而不是把它放到某一条分支上。' },
  c2_faceted_search: { en: 'Faceted search', zh: '分面检索',
    d_en: 'The filter sidebar on shopping, library or photo sites: narrow results by any facet in any order.',
    d_zh: '购物网站、图书馆或图片网站的筛选侧栏：可以按任意分面、以任意顺序缩小结果。' }
});

defClass({
  order: 2, n: '2',
  t_en: 'Futures Past', t_zh: '过去的未来',
  intro_en: 'Before computers, people already built information systems: trees of names, library shelves, card catalogs. Alex Wright’s *Informatica* shows that today’s software still runs on two old shapes — the hierarchy and the network — and on ways of classifying that are older than writing.',
  intro_zh: '在计算机出现之前，人类早已在建造信息系统：名称之树、图书馆书架、卡片目录。亚历克斯·赖特的《Informatica》告诉我们，今天的软件仍然运行在两个古老的形状之上——层级与网络——以及比文字还古老的分类方式。',
  qs: [
    {
      id: '2.1', t_en: 'Hierarchy', t_zh: '层级',
      q_en: 'Wright\'s definition of a hierarchy, and one example from software you use every day.',
      q_zh: '赖特对“层级”的定义，并举一个你每天使用的软件中的例子。',
      src: 'Wright, Informatica, ch. 1',
      kid_en: "A hierarchy is like a set of nesting boxes, or your school: the school contains grades, each grade contains classes, each class contains students. Every student belongs to exactly one class, so there is exactly one path to find them: School → Grade 7 → Class B → Leo. Bigger boxes are 'more inclusive' — they hold more things. Your computer's folders work the same way.",
      kid_zh: "层级就像一套套娃，或者你的学校：学校里有年级，年级里有班，班里有学生。每个学生只属于一个班，所以找到他只有一条路：学校 → 七年级 → 二班 → 小李。越外面的盒子越“包容”——装的东西越多。电脑里的文件夹也是这样。",
      steps: [
        { en: "Start at the top: DRIVE / is the biggest box. Everything on the computer is inside it.", zh: "从最上面开始：DRIVE / 是最大的盒子，电脑里的一切都在它里面。", hi: ["k21_root"] },
        { en: "Each folder sits inside exactly ONE parent folder — like each class belongs to one grade.", zh: "每个文件夹只放在“一个”上级文件夹里——就像每个班只属于一个年级。", hi: ["k21_off", "k21_on"] },
        { en: "Follow the pink line down: Users → skyx → Documents → Midterm → answers.pdf.", zh: "顺着粉色的线往下走：Users → skyx → Documents → Midterm → answers.pdf。", hi: ["k21_on", "k21_file"] },
        { en: "Written as text, that one road is the file path. Each slash is one step down the hierarchy.", zh: "把这条唯一的路写成文字，就是文件路径。每个斜杠就是往下走一层。", hi: ["k21_path"] }
      ],
      fig() {
        // a real tree: one root, every node has exactly one parent; the path to the file is highlighted
        const N = {
          root: [380, 44, 'DRIVE /', 1], apps: [190, 116, 'Applications', 0], users: [380, 116, 'Users', 1], sys: [570, 116, 'System', 0],
          skyx: [300, 188, 'skyx', 1], guest: [460, 188, 'Guest', 0],
          docs: [220, 260, 'Documents', 1], music: [380, 260, 'Music', 0],
          mid: [220, 332, 'Midterm', 1], file: [220, 404, 'answers.pdf', 2]
        };
        const E = [['root', 'apps'], ['root', 'users'], ['root', 'sys'], ['users', 'skyx'], ['users', 'guest'], ['skyx', 'docs'], ['skyx', 'music'], ['docs', 'mid'], ['mid', 'file']];
        let s = '';
        E.forEach(([a, b]) => {
          const A = N[a], B = N[b], on = A[3] && B[3];
          s += F.line(A[0], A[1] + 13, B[0], B[1] - 13, { stroke: on ? F.C.mag : F.C.ink, sw: on ? 1.8 : 1 });
        });
        Object.entries(N).forEach(([k, [x, y, t, on]]) => {
          const w = Math.max(70, t.length * 8.2 + 26);
          s += F.rect(x - w / 2, y - 13, w, 26, { rx: 13, text: t, tcls: 'mono', tip: k === 'root' ? 'k21_root' : k === 'file' ? 'k21_file' : on ? 'k21_on' : 'k21_off', fill: on === 2 ? F.C.magF : '#fff', stroke: on ? F.C.mag : F.C.ink, sw: on ? 1.5 : 1.1, tcolor: on ? F.C.mag : F.C.ink,
            note: k === 'root' ? { en: 'The root: the most inclusive category — everything is inside it.', zh: '根：最大的类，一切都在它里面。' }
              : k === 'file' ? { en: 'The leaf has ONE address. Moving it means taking it out of one box and putting it in another.', zh: '叶子只有一个地址。要“移动”它，就得把它从一个盒子拿出来放进另一个。' }
              : { en: 'Each folder sits inside exactly one parent.', zh: '每个文件夹只属于一个上级。' } });
        });
        // inclusiveness axis
        s += F.g(F.arrow(40, 404, 40, 50) + F.text(52, 56, 'MORE INCLUSIVE', { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.sub(52, 72, '更大、更包容') +
          F.text(52, 398, 'NARROWER', { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.sub(52, 384, '更小、更具体'), { tip: 'c2_hierarchy' });
        // the single path
        s += F.g(F.rect(430, 330, 310, 70, { fill: '#fff', stroke: F.C.mute, rx: 8 }) +
          F.text(446, 350, 'ONE THING · ONE PATH', { anchor: 'start', cls: 'tiny', color: F.C.mag }) + F.sub(600, 350, '每样东西只有一条路径') +
          F.text(446, 378, '/Users/skyx/Documents/Midterm/answers.pdf', { anchor: 'start', cls: 'tiny', color: F.C.ink }),
          { tip: 'k21_path', note: { en: 'The path IS the hierarchy written as text: each slash steps one level down.', zh: '路径就是写成文字的层级：每个斜杠往下走一层。' } });
        s += F.text(580, 44, 'TOP-DOWN', { cls: 'lt' }) + F.sub(580, 60, '自上而下', { anchor: 'middle' });
        return F.svg(760, 424, s, { label: 'a file system drawn as a tree' });
      },
      cap_en: 'Your file system is a hierarchy you use every day: one root, each folder inside exactly one parent, and each file reachable by exactly one path (magenta).',
      cap_zh: '文件系统就是你每天在用的层级：一个根，每个文件夹只属于一个上级，每个文件只有一条路径（洋红色）。',
      a_en: `Wright defines a [[c2_hierarchy]] as a **top-down** system that orders things by **inclusiveness**: broad categories contain narrower ones, which contain narrower ones still, like a tree with one trunk. Every item has one proper place, and the structure is fixed from above — it is how institutions, armies, churches and libraries keep control and make knowledge findable. (Our course glossary: “the ordering of concepts by inclusiveness, used with categorization to control and apply association.”)

**Everyday software example:** the **file system** in Finder or Explorer. Drive → Users → Documents → Midterm → answers.pdf. Each folder sits inside exactly one parent, and each file has exactly one path. Other examples: a website’s main menu → submenu → page; a company org chart in Slack; Settings → Privacy → Location Services on a phone.`,
      a_zh: `赖特把[[c2_hierarchy]]定义为一种**自上而下**、按**包含关系**排列事物的系统：大类包含小类，小类再包含更小的类，就像一棵只有一个树干的树。每个东西都有一个“正确”的位置，结构由上方固定下来——机构、军队、教会和图书馆都靠它维持控制、让知识可被找到。（课程词汇表：“按包含关系排列概念，并与分类结合，用来控制和运用联想。”）

**日常软件中的例子：****文件系统**（访达或资源管理器）。磁盘 → 用户 → 文稿 → 期中 → answers.pdf。每个文件夹只属于一个上级文件夹，每个文件只有一条路径。其他例子：网站的主菜单 → 子菜单 → 页面；Slack 里的公司组织架构；手机里的 设置 → 隐私 → 定位服务。`,
      short_en: `Wright: a [[c2_hierarchy]] is a **top-down** structure that orders things by **inclusiveness** — broad categories contain narrower ones, like a tree, so **each item has one place**. Everyday example: my computer’s file system — Drive → Users → Documents → Midterm → answers.pdf; every folder has one parent and every file one path.`,
      short_zh: `赖特：[[c2_hierarchy]]是一种**自上而下**、按**包含关系**排列事物的结构——大类包含小类，像一棵树，所以**每样东西只有一个位置**。日常例子：电脑的文件系统——磁盘 → 用户 → 文稿 → 期中 → answers.pdf；每个文件夹只有一个上级，每个文件只有一条路径。`,
      basis_en: `Alex Wright, *Informatica: Mastering Information through the Ages* (Cornell, 2023 — the book first published as *Glut*), ch. 1 “Networks and Hierarchies”, assigned for Class 2. The wording “ordering of concepts by inclusiveness” is from the course glossary. The chapter text itself was not available to check line by line.`,
      basis_zh: `亚历克斯·赖特《Informatica: Mastering Information through the Ages》（康奈尔，2023；即先前出版的《Glut》）第 1 章“网络与层级”，为第 2 课指定阅读。“按包含关系排列概念”的说法来自课程词汇表。章节原文无法逐句核对。`,
      links: [{ t: 'Glut / Informatica — book summary (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Glut:_Mastering_Information_Through_the_Ages' }],
      rel: ['2.2', '2.5', '5.4'],
      hook_en: 'Hierarchy = boxes inside boxes, ordered by inclusiveness, one place per thing.',
      hook_zh: '层级＝盒子套盒子，按包含关系排序，每样东西只有一个位置。',
      trap_en: 'Use Wright’s key word “inclusiveness” (or top-down / tree), and give a concrete software example with its actual levels.',
      trap_zh: '要用到赖特的关键词“包含关系”（或自上而下 / 树状），并举一个写出具体层级的软件例子。'
    },
    {
      id: '2.2', t_en: 'Network', t_zh: '网络',
      q_en: 'Wright\'s definition of a network, and what he means when he says networks and hierarchies give rise to each other.',
      q_zh: '赖特对“网络”的定义，以及他说“网络与层级相互催生”是什么意思。',
      src: 'Wright, Informatica, ch. 1',
      kid_en: "A hierarchy is like your school's org chart: the principal at the top, teachers under them, orders go down. A network is like your friends' group chats: anyone can message anyone, no top. But watch what happens: in every school, kids form friendships across classes (a network inside the hierarchy). And in a group chat, one popular kid soon becomes the one everyone listens to (a hierarchy growing out of the network). They keep turning into each other.",
      kid_zh: "层级像学校的组织结构图：校长在最上面，老师在下面，命令一层层往下传。网络像朋友之间的群聊：谁都能给谁发消息，没有“顶端”。但注意：每个学校里，孩子都会跨班交朋友（层级里长出了网络）；而群聊里，很快会有个最受欢迎的人，大家都听他的（网络里长出了层级）。两者会不断变成对方。",
      steps: [
        { en: "Left: a hierarchy. One top, and every line goes down. One path between any two nodes.", zh: "左边是层级：一个顶端，每条线都往下走，任意两点之间只有一条路。", hi: ["c2_hierarchy"] },
        { en: "Right: a network. Nodes link to each other directly, many paths, no top.", zh: "右边是网络：节点之间直接相连，路有很多条，没有顶端。", hi: ["c2_network"] },
        { en: "Find the hub: many nodes link to it. Rank by links and a hierarchy appears inside the network.", zh: "找到那个枢纽：很多节点都连着它。按连接数排个名，网络里就出现了层级。", hi: ["k22_hub"] },
        { en: "The two arrows are Wright's point: hierarchies grow side-links into networks, and networks grow hubs into hierarchies.", zh: "两条箭头就是赖特的观点：层级会长出横向联系变成网络，网络会长出枢纽变成层级。", hi: ["k22_h2n", "k22_n2h"] }
      ],
      fig() {
        let s = '';
        // hierarchy (left)
        const H = [[150, 70], [90, 140], [210, 140], [55, 210], [125, 210], [175, 210], [245, 210]];
        const He = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]];
        let h = He.map(([a, b]) => F.line(H[a][0], H[a][1], H[b][0], H[b][1])).join('');
        h += H.map((p, i) => F.circle(p[0], p[1], i ? 9 : 12, { fill: i ? '#fff' : F.C.ink })).join('');
        s += F.g(h + F.text(150, 262, 'HIERARCHY', { cls: 'lt' }) + F.sub(150, 278, '层级：自上而下 · 一条路径', { anchor: 'middle' }), { tip: 'c2_hierarchy' });
        // network (right)
        const N = [[560, 80], [640, 70], [700, 130], [610, 140], [530, 160], [680, 200], [580, 215], [640, 250], [505, 235]];
        const Ne = [[0, 1], [1, 2], [0, 3], [1, 3], [3, 2], [3, 4], [4, 0], [2, 5], [3, 5], [3, 6], [6, 4], [6, 7], [5, 7], [4, 8], [8, 6], [3, 7]];
        let n = Ne.map(([a, b]) => F.line(N[a][0], N[a][1], N[b][0], N[b][1], { stroke: F.C.blue, sw: 0.9 })).join('');
        n += N.map((p, i) => F.circle(p[0], p[1], i === 3 ? 13 : 8, { fill: i === 3 ? F.C.blueF : '#fff', stroke: F.C.blue })).join('');
        s += F.g(n + F.text(605, 290, 'NETWORK', { cls: 'lt', color: F.C.blue }) + F.sub(605, 306, '网络：自下而上 · 点对点', { anchor: 'middle' }), { tip: 'c2_network' });
        // hub callout
        s += F.g(F.circle(N[3][0], N[3][1], 13, { fill: F.C.blueF, stroke: F.C.blue }) + F.label([623, 140], 724, '') + F.text(728, 158, 'HUB', { anchor: 'start', cls: 'tiny', color: F.C.mag }) + F.sub(728, 174, '枢纽'),
          { tip: 'k22_hub', note: { en: 'A hub: a node many others link to. Rank nodes by links and a hierarchy appears inside the network (PageRank, follower counts).', zh: '枢纽：很多节点都连向它。按链接数给节点排名，网络内部就长出了层级（PageRank、粉丝数）。' } });
        // arrows between
        s += F.g(F.path('M290,120 C360,80 430,80 490,110', { stroke: F.C.mag, arrow: true }) + F.text(390, 70, 'hierarchies spawn networks', { cls: 'tiny', color: F.C.mag }) + F.sub(390, 86, '机构催生交叉联系', { anchor: 'middle' }),
          { tip: 'k22_h2n', note: { en: 'Inside any hierarchy people form side-links: cross-references in a library, informal ties in an org, hyperlinks between folders.', zh: '任何层级内部都会长出横向联系：图书馆里的“参见”、组织里的非正式关系、文件之间的超链接。' } });
        s += F.g(F.path('M490,200 C430,240 360,240 290,200', { stroke: F.C.mag, arrow: true }) + F.text(390, 252, 'networks spawn hierarchies', { cls: 'tiny', color: F.C.mag }) + F.sub(390, 268, '链接汇聚成排名', { anchor: 'middle' }),
          { tip: 'k22_n2h', note: { en: 'Out of open networks, structure emerges: popular hubs, rankings, platforms that end up on top.', zh: '开放的网络里会涌现结构：热门枢纽、排行榜、最终占据顶端的平台。' } });
        return F.svg(760, 320, s, { label: 'hierarchy vs network' });
      },
      cap_en: 'Two shapes of order. The arrows are Wright’s point: each one keeps growing out of the other.',
      cap_zh: '两种秩序的形状。中间的箭头就是赖特的观点：两者不断地从对方之中生长出来。',
      a_en: `Wright defines a [[c2_network]] as a **bottom-up**, distributed structure: many nodes connected peer-to-peer, with **no single top** and no fixed path. Order is not imposed; it emerges from countless local connections (gossip, trade, the Web’s hyperlinks, social media). A [[c2_hierarchy]] is the opposite shape: top-down, ordered by inclusiveness, one place for each thing.

**“They give rise to each other”** means the two are not rival eras (old hierarchies replaced by new networks) but a continual dance:
- **Networks produce hierarchies.** Left alone, networks develop hubs and rankings. Links on the Web are a network, but Google ranks them into a top-ten list; followers turn a social network into celebrities and platforms that sit on top.
- **Hierarchies produce networks.** Every formal tree grows side-connections: a library catalog adds cross-references (“see also”), an organization runs on informal relationships, folders get linked by hyperlinks and tags.

So the history of information is a back-and-forth between the two, and neither ever wins completely.`,
      a_zh: `赖特把[[c2_network]]定义为一种**自下而上**、分布式的结构：许多节点点对点相连，**没有唯一的顶端**，也没有固定路径。秩序不是被强加的，而是从无数局部连接中涌现出来的（流言、贸易、网页超链接、社交媒体）。[[c2_hierarchy]]则是相反的形状：自上而下、按包含关系排列、每样东西只有一个位置。

**“相互催生”**的意思是：两者不是前后替代的两个时代（旧层级被新网络取代），而是一场持续的“双人舞”：
- **网络催生层级。**任其发展，网络会长出枢纽和排名。网页链接是网络，但谷歌把它们排成前十名；粉丝关系把社交网络变成了明星和高高在上的平台。
- **层级催生网络。**任何正式的树状结构都会长出横向联系：图书馆目录加上“参见”，组织靠非正式人际关系运转，文件夹之间又被超链接和标签连起来。

所以信息的历史就是两者之间的来回往复，谁都不会彻底获胜。`,
      short_en: `Wright: a [[c2_network]] is a **bottom-up**, distributed web of peer-to-peer links with **no single top**; a hierarchy is a top-down tree. They **give rise to each other**: networks grow hubs and rankings that harden into new hierarchies (links on the Web → Google’s ranking), and every hierarchy sprouts side-connections that form networks (“see also” cross-references, informal ties in an org chart).`,
      short_zh: `赖特：[[c2_network]]是一种**自下而上**、点对点相连的分布式结构，**没有唯一的顶端**；层级则是自上而下的树。两者**相互催生**：网络会长出枢纽和排名，固化成新的层级（网页链接 → 谷歌排名）；而任何层级都会长出横向联系，形成网络（目录里的“参见”、组织架构中的非正式关系）。`,
      basis_en: `Wright, *Informatica / Glut*, ch. 1. Checked against a summary of the book: Wright argues the two forms have always coexisted in tension (“percolating for eons”) rather than one replacing the other — the exam’s “give rise to each other”. The two-direction examples are illustrations, not quotations.`,
      basis_zh: `赖特《Informatica / Glut》第 1 章。已对照该书摘要核对：赖特认为两种形式一直并存、彼此拉扯，而不是一个取代另一个——这就是考题里的“相互催生”。两个方向的例子是说明用的，不是原文引用。`,
      links: [{ t: 'Glut / Informatica — book summary (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Glut:_Mastering_Information_Through_the_Ages' }],
      rel: ['2.1', '2.4', '5.4'],
      hook_en: 'Network = bottom-up links, no top. Hierarchy = top-down tree. Each keeps growing out of the other.',
      hook_zh: '网络＝自下而上的连接、没有顶端；层级＝自上而下的树。两者不断从对方之中长出来。',
      trap_en: 'Don’t frame it as “networks replaced hierarchies.” Give one example in EACH direction.',
      trap_zh: '不要写成“网络取代了层级”。两个方向各举一个例子。'
    },
    {
      id: '2.3', t_en: 'Folk taxonomy', t_zh: '民间分类学',
      q_en: 'What is a folk taxonomy, and why does the psychologically primary category (oak, dog) sit in the middle of it rather than at the top?',
      q_zh: '什么是民间分类学？为什么心理上最基本的类别（橡树、狗）位于这个分类的中间，而不是顶端？',
      src: 'Wright, ch. 2; Berlin; Rosch',
      kid_en: "Point at a dog and ask a little kid what it is. They won't say \"animal\" or \"golden retriever\" — they'll say \"dog!\" That middle word is the first one we learn, the quickest to picture, and usually the shortest. Going up (animal, living thing) gets too vague to picture; going down (golden retriever) needs an expert. A folk taxonomy is the everyday way a culture names and groups things, and people live in its middle.",
      kid_zh: "指着一只狗问小朋友这是什么，他不会说“动物”，也不会说“金毛寻回犬”，而是说“狗！”这个“中间”的词，是我们最先学会、最容易想象、通常也最短的词。往上（动物、生物）太笼统，脑子里画不出来；往下（金毛）需要专家才分得清。民间分类学就是一种文化在日常里给东西起名、分组的方式，而人们就生活在它的“中间层”。",
      steps: [
        { en: "These are Berlin's five ranks, found in folk taxonomies all over the world, from most abstract to most detailed.", zh: "这是伯林发现的五个等级，世界各地的民间分类里都有，从最抽象排到最细。", hi: ["c2_berlin_ranks"] },
        { en: "Going up the arrow = more abstract (plant). Going down = finer detail only experts need (white oak).", zh: "沿箭头往上＝更抽象（植物）；往下＝只有专家才需要的细分（白橡）。", hi: ["k23_axis"] },
        { en: "The pink band is the middle: oak, pine, maple. That's the basic level — what people actually say.", zh: "粉色那一条就是“中间”：橡树、松树、枫树。这是基本层级——人们平时真正说的词。", hi: ["c2_basic_level"] },
        { en: "Why the middle? Rosch: it's built from how we see and use things — learned first, named fastest, shortest words.", zh: "为什么在中间？罗施说：它建立在我们怎么“看”和怎么“用”东西之上——最先学会、叫得最快、词最短。", hi: ["c2_basic_level"] }
      ],
      fig() {
        let s = '';
        const ranks = [
          { y: 46, r: 'UNIQUE BEGINNER', zh: '起始类', nodes: [['PLANT', '植物']] },
          { y: 124, r: 'LIFE-FORM', zh: '生活型', nodes: [['TREE', '树'], ['GRASS', '草'], ['VINE', '藤']] },
          { y: 202, r: 'GENERIC', zh: '属级 · 基本层级', nodes: [['OAK', '橡树'], ['PINE', '松树'], ['MAPLE', '枫树']], hi: true },
          { y: 280, r: 'SPECIFIC', zh: '种级', nodes: [['WHITE OAK', '白橡'], ['RED OAK', '红橡']] },
          { y: 358, r: 'VARIETAL', zh: '变种', nodes: [['…', '']] }
        ];
        const X = { 1: [470], 3: [340, 470, 600], 2: [420, 520] };
        s += F.g(`<rect x="200" y="176" width="550" height="62" rx="8" fill="${F.C.magF}"/>` +
          F.text(212, 230, 'BASIC LEVEL', { anchor: 'start', cls: 'tiny', color: F.C.mag }), { tip: 'c2_basic_level' });
        const pos = ranks.map(R => (R.nodes.length === 1 ? X[1] : X[R.nodes.length]));
        // edges start below each node's Chinese caption so they never cross it
        const ed = (x1, r1, x2, r2, o) => F.line(x1, ranks[r1].y + 36, x2, ranks[r2].y - 13, o);
        s += ed(470, 0, 340, 1) + ed(470, 0, 470, 1) + ed(470, 0, 600, 1);
        s += ed(340, 1, 340, 2) + ed(340, 1, 470, 2) + ed(340, 1, 600, 2, { dash: '3 3' });
        s += ed(340, 2, 420, 3) + ed(340, 2, 520, 3);
        s += ed(420, 3, 470, 4, { dash: '3 3' });
        ranks.forEach((R, i) => {
          R.nodes.forEach(([en, zh], j) => {
            const x = pos[i][j], w = Math.max(60, en.length * 8 + 22);
            s += F.rect(x - w / 2, R.y - 12, w, 24, { fill: '#fff', stroke: R.hi ? F.C.mag : F.C.ink, sw: R.hi ? 1.6 : 1.1, text: en, tcolor: R.hi ? F.C.mag : F.C.ink, rx: 12 });
            if (zh) s += F.sub(x, R.y + 27, zh, { anchor: 'middle' });
          });
          s += F.g(F.text(190, R.y, R.r, { anchor: 'end', cls: 'lt', color: R.hi ? F.C.mag : F.C.ink }) + F.sub(190, R.y + 15, R.zh, { anchor: 'end' }), { tip: 'c2_berlin_ranks' });
        });
        s += F.g(F.arrow(30, 350, 30, 50) + F.text(42, 60, 'abstract', { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.text(42, 350, 'expert detail', { anchor: 'start', cls: 'tiny', color: F.C.mute }),
          { tip: 'k23_axis', note: { en: 'Going up = more abstract groupings few people name in daily life. Going down = finer distinctions only specialists need.', zh: '往上＝越来越抽象、日常很少说的大类；往下＝越来越细、只有专家才需要的区分。' } });
        return F.svg(760, 380, s, { label: 'folk taxonomy ranks with basic level highlighted' });
      },
      cap_en: 'Berlin’s five ranks, found in folk taxonomies all over the world. The highlighted band is where people actually live: oak, dog, chair.',
      cap_zh: '伯林发现、世界各地民间分类中都存在的五个等级。高亮的那一条，才是人们真正生活的层级：橡树、狗、椅子。',
      a_en: `A [[c2_folk_tax]] is the everyday, unwritten classification a culture uses to name and group the living world. Wright (drawing on anthropologist Brent Berlin) shows that folk taxonomies everywhere share the same shape — a shallow hierarchy of about five [[c2_berlin_ranks]]: unique beginner (*plant*, *animal*) → life-form (*tree*, *bird*) → **generic** (*oak*, *dog*) → specific (*white oak*, *poodle*) → varietal.

**Why the primary category sits in the middle:** the hierarchy is built from **perception and use**, not from logic going downward. Eleanor Rosch called this the [[c2_basic_level]]: the level at which things look alike, are handled alike, and are most useful to tell apart. It is the level children learn first, the one with the shortest, most common names, and the first one we reach for (“look, a dog,” not “an animal” or “a Labrador”).
- Levels **above** it (*plant*, *life-form*) are abstractions — groupings of things that don’t share one shape, rarely used in daily speech.
- Levels **below** it are specialist distinctions — gardeners and breeders need them, most people don’t.

So the most “real” category for the mind is the middle one; the top of the tree is a later, more abstract summary, which is why our own software menus often feel wrong when they force us to start at the top.`,
      a_zh: `[[c2_folk_tax]]是一种文化用来给生物世界命名和分组的、日常的、未成文的分类。赖特（引用人类学家布伦特·伯林）指出：世界各地的民间分类都有相同的形状——一个只有大约五层的浅层级，即[[c2_berlin_ranks]]：起始类（*植物*、*动物*）→ 生活型（*树*、*鸟*）→ **属级**（*橡树*、*狗*）→ 种级（*白橡*、*贵宾犬*）→ 变种。

**为什么最基本的类别在中间：**这个层级是从**感知和使用**出发建立的，而不是从逻辑一路往下推。埃莉诺·罗施把它称为[[c2_basic_level]]：在这一层，同类东西长得像、用起来一样，区分它们也最有用。这是儿童最先学会的一层，名字最短、最常用，也是我们第一反应会说出的那一层（“看，一只狗”，而不是“一只动物”或“一只拉布拉多”）。
- **往上**的层级（*植物*、*生活型*）是抽象概括——把形状不同的东西归为一类，日常很少用。
- **往下**的层级是专业区分——园丁和育种者需要，大多数人不需要。

所以对大脑来说最“真实”的类别是中间那一层；树的顶端只是后来更抽象的总结。这也解释了为什么软件菜单强迫我们从最顶层开始找东西时，常常让人觉得别扭。`,
      short_en: `A [[c2_folk_tax]] is a culture’s everyday, unwritten way of naming and grouping living things; Berlin found the same few ranks everywhere (plant → tree → **oak** → white oak). The psychologically primary category sits in the **middle** because it is Rosch’s [[c2_basic_level]]: the level built from **perception and use** — learned first, named fastest, shortest words. Levels above are abstractions; levels below are specialist detail.`,
      short_zh: `[[c2_folk_tax]]是一种文化日常、未成文的给生物命名和分组的方式；伯林发现各地都有同样几个等级（植物 → 树 → **橡树** → 白橡）。心理上最基本的类别位于**中间**，因为它是罗施所说的[[c2_basic_level]]：建立在**感知与使用**之上的层级——最先学会、命名最快、词最短。上面的层级是抽象概括，下面的是专业细分。`,
      basis_en: `Wright, *Informatica* ch. 2, drawing on anthropologist Brent Berlin’s cross-cultural ranks (unique beginner, life-form, generic, specific, varietal) and Eleanor Rosch’s basic-level categories — the three names on the exam hint. These are standard findings in cognitive anthropology; the chapter text was not available to quote.`,
      basis_zh: `赖特《Informatica》第 2 章，引用人类学家布伦特·伯林的跨文化等级（起始类、生活型、属级、种级、变种）和埃莉诺·罗施的“基本层级范畴”——正是考卷提示里的三个名字。这些是认知人类学的经典结论；章节原文无法引用。`,
      rel: ['2.1', '2.5', '3.3'],
      hook_en: 'The mind starts in the middle (dog), then generalizes up (animal) or specializes down (poodle).',
      hook_zh: '大脑从中间开始（狗），再往上概括（动物）或往下细分（贵宾犬）。',
      trap_en: 'Name both sources: Berlin (the generic rank) and Rosch (basic level). Explain WHY: perception/use, learned first, shortest names.',
      trap_zh: '两个出处都要提：伯林（属级）和罗施（基本层级）。并解释“为什么”：基于感知与使用、最先习得、名字最短。'
    },
    {
      id: '2.4', t_en: 'Stigmergy', t_zh: '痕迹协作（Stigmergy）',
      q_en: 'Define stigmergy from the termites, then give a human or digital example.',
      q_zh: '从白蚁的例子出发定义“stigmergy”，再举一个人类或数字世界的例子。',
      src: '',
      kid_en: "Imagine kids building a sandcastle at the beach without talking. One kid drops a bucket of sand. The next kid sees a bump and adds sand to the bump, because a bump looks like a good place to build. More sand makes a bigger bump, which attracts even more sand — and towers appear that nobody planned. That's stigmergy: the work itself leaves a sign that tells the next worker what to do. Termites build mounds this way, and people do it on Wikipedia, where each edit invites the next one.",
      kid_zh: "想象几个小孩在沙滩上堆沙堡，彼此不说话。一个孩子倒下一桶沙；下一个孩子看到一个小鼓包，就往鼓包上加沙，因为那里看起来适合堆。沙越多鼓包越大，吸引来的沙就更多——最后出现了谁也没设计过的塔。这就是“痕迹协作”（stigmergy）：做出来的东西本身留下信号，告诉下一个人该做什么。白蚁就是这样筑巢的；维基百科上，每次编辑也会引来下一次编辑。",
      steps: [
        { en: "Press Space to start the swarm. Each termite drops a pellet — nobody gives orders.", zh: "按空格让白蚁开始活动。每只白蚁放下一颗泥球——没有谁下命令。", hi: [] },
        { en: "Fresh pellets glow: that's the pheromone mark. It says 'build here'. It fades over time.", zh: "新放下的泥球会发光：这是信息素标记，意思是“在这里继续堆”，过一会儿会变淡。", hi: [] },
        { en: "Watch: termites prefer spots with the strongest traces, so piles grow into pillars. Check the 'pillars' count in the readout.", zh: "看：白蚁更喜欢痕迹最强的位置，于是小堆长成柱子。看看读数里“柱子”的数量。", hi: [] },
        { en: "Click a cell yourself to drop a pellet — you just left a trace, and the swarm will follow it. Press R to reset.", zh: "自己点一个格子放一颗泥球——你刚留下了痕迹，白蚁会跟着来。按 R 重置。", hi: [] }
      ],
      fig() {
        F.setIso(22, 230, 140);
        let s = '';
        s += F.g(F.plate({ x: 0, y: 0, z: 0, w: 8, d: 8, t: 0.2, pattern: 'dots', density: 10 }) +
          F.label(F.iso(0, 5, 0.2), 40, '') + F.text(30, F.iso(0, 5, 0.2)[1] - 8, 'ENVIRONMENT', { anchor: 'start', cls: 'lt' }) + F.sub(30, F.iso(0, 5, 0.2)[1] + 22, '环境＝共享的“记事板”'),
          { note: { en: 'The environment itself holds the information — the ground is the message board.', zh: '信息储存在环境本身之中——地面就是留言板。' } });
        // pillars growing
        const P = [[2, 2, 1], [5.2, 2.4, 2.2], [3.2, 5, 3.4], [5.8, 5.6, 0.6]];
        let pil = '';
        P.forEach(([x, y, h]) => {
          for (let k = 0; k < h / 0.4; k++) pil += F.plate({ x, y, z: 0.2 + k * 0.4, w: 0.9, d: 0.9, t: 0.4, fill: k === Math.floor(h / 0.4) - 1 ? F.C.amberF : '#fff', side: '#f3e3bf' });
        });
        s += F.g(pil, { tip: 'c2_pheromone' });
        // pheromone halo on tallest
        const top = F.iso(3.65, 5.45, 3.6);
        s += F.g(`<circle cx="${top[0]}" cy="${top[1]}" r="16" fill="none" stroke="${F.C.green}" stroke-dasharray="2 3"/><circle cx="${top[0]}" cy="${top[1]}" r="26" fill="none" stroke="${F.C.green}" stroke-dasharray="2 4" opacity=".6"/>` +
          F.label([top[0] + 26, top[1]], 360, 'PHEROMONE MARK') + F.sub(368, top[1] + 17, '信息素：在这里继续堆'), { tip: 'c2_pheromone' });
        // loop diagram (right)
        const cx = 590, cy = 160, R = 72;
        const st = [
          ['ACT', '行动：放下泥球', -90],
          ['TRACE', '痕迹：留在环境里', 15],
          ['STIMULUS', '刺激：吸引下一只', 165]
        ];
        let loop = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${F.C.ink}" stroke-dasharray="1 5" stroke-width="1"/>`;
        st.forEach(([en, zh, a], i) => {
          const r = a * Math.PI / 180, x = cx + R * Math.cos(r), y = cy + R * Math.sin(r);
          loop += F.circle(x, y, 6, { fill: i === 1 ? F.C.mag : '#fff', stroke: i === 1 ? F.C.mag : F.C.ink });
          const ly = i === 1 ? y - 2 : i === 0 ? y - 30 : y + 26;
          const an = i === 1 ? 'start' : 'middle', tx = i === 1 ? x + 14 : x;
          loop += F.text(tx, ly, en, { cls: 'lt', anchor: an }) + F.sub(tx, ly + 15, zh, { anchor: an });
          const a2 = (a + 40) * Math.PI / 180, a3 = (a + 80) * Math.PI / 180;
          loop += F.path(`M${cx + R * Math.cos(a2)},${cy + R * Math.sin(a2)} A${R},${R} 0 0 1 ${cx + R * Math.cos(a3)},${cy + R * Math.sin(a3)}`, { arrow: true, stroke: F.C.mag });
        });
        loop += F.text(cx, cy + R + 24, 'NO PLAN · NO BOSS · NO MESSAGES', { cls: 'tiny', color: F.C.mute });
        s += F.g(loop, { tip: 'c2_stigmergy' });
        return F.svg(760, 330, s, { label: 'stigmergy: termite pillars and the action-trace loop' });
      },
      cap_en: 'A live stigmergy model. Each termite picks where to drop its pellet only by smelling the traces already on the ground: fresh pellets glow (pheromone) and fade. Nobody plans the pillars — they emerge from the loop act → trace → stimulus.',
      cap_zh: '一个可以运行的痕迹协作模型。每只白蚁只靠“闻”地上已有的痕迹决定把泥球放在哪：新泥球发光（信息素），然后慢慢褪去。没有谁规划柱子——它们从“行动 → 痕迹 → 刺激”的循环里长出来。',
      a_en: `[[c2_stigmergy]] (from Greek *stigma* “mark” + *ergon* “work”) was named by the French biologist Pierre-Paul Grassé in 1959 to explain how termites build huge, complex mounds without a plan or a leader. A termite drops a mud pellet laced with a [[c2_pheromone]]. That trace in the environment **stimulates** the next termite to drop its pellet in the same place; bigger piles attract more pellets, so pillars rise and arch together. **Definition:** indirect coordination through traces left in a shared environment — the work itself becomes the instruction for the next piece of work. No direct communication, no blueprint, no boss.

**Human / digital examples:**
- **Wikipedia:** an article’s current state (a stub, a “citation needed” tag) prompts the next editor to add to it; millions coordinate without talking to each other.
- **Desire paths** across a lawn: each walker flattens the grass a little, which invites the next walker to use the same path.
- **Likes, stars and trending lists**, GitHub issues, or a shared Kanban board: people (and AI agents) react to marks left by others rather than to orders.`,
      a_zh: `[[c2_stigmergy]]（来自希腊语 *stigma*“标记”＋ *ergon*“工作”）是法国生物学家皮埃尔-保罗·格拉塞在 1959 年提出的，用来解释白蚁如何在没有计划、没有领导的情况下建造巨大而复杂的蚁丘。一只白蚁放下一个混有[[c2_pheromone]]的泥球。这个留在环境中的痕迹会**刺激**下一只白蚁把泥球放在同一个地方；土堆越大，吸引的泥球越多，于是柱子升起、在顶部合拢成拱。**定义：**通过留在共享环境中的痕迹进行的间接协调——工作本身就成了下一步工作的指令。没有直接沟通，没有蓝图，没有领导。

**人类 / 数字例子：**
- **维基百科：**条目的当前状态（一个小作品、一个“需要引用”的标记）提示下一位编辑去补充；数以百万计的人无需交谈就协调起来。
- **草坪上的“欲望之路”：**每个路人都把草踩平一点，这又引导下一个路人走同一条路。
- **点赞、星标、热门榜**、GitHub issue 或共享的看板：人（以及 AI 智能体）回应的是别人留下的痕迹，而不是命令。`,
      glow: {
        name_en: 'Termite mound · traces build pillars', name_zh: '白蚁丘 · 痕迹长出柱子',
        hint_en: 'Space runs / pauses the swarm · click a cell to drop a pellet yourself · R resets',
        hint_zh: '空格开始/暂停蚁群 · 点格子亲手放泥球 · R 重置',
        aria: 'Isometric termite mound simulation. Each new pellet glows with pheromone and attracts the next pellets, so pillars grow without a plan. Space runs or pauses, click a cell to add a pellet, R resets.',
        mount(stage, api) {
          const N = 8, CS = 20, M = 10, PH = 6, MAXH = 14;
          const K = api.iso.frame([[0, 0, 0], [N * CS + 2 * M, 0, 0], [0, N * CS + 2 * M, 0], [N * CS + 2 * M, N * CS + 2 * M, 0], [0, 0, 6 + MAXH * PH + 10]], 0.06);
          const { TOP, FRONT, box, boxc } = K;
          const st = { h: [], f: [], run: false, n: 0, last: null };
          const reset = () => { st.h = Array.from({ length: N }, () => Array(N).fill(0)); st.f = Array.from({ length: N }, () => Array(N).fill(0)); st.n = 0; st.last = null; };
          reset();
          const W = N * CS + 2 * M;
          // pheromone field around a cell: its own fresh trace + half of its neighbours'
          const field = (i, j) => {
            let v = st.f[i][j] + 0.12 * Math.min(st.h[i][j], 4);
            for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const a = i + di, b = j + dj; if (a >= 0 && b >= 0 && a < N && b < N) v += 0.45 * st.f[a][b]; }
            return v;
          };
          function drop(i, j) {
            if (st.h[i][j] >= MAXH) return false;
            st.h[i][j]++; st.f[i][j] = 1; st.n++; st.last = [i, j];
            return true;
          }
          function step() {
            // decay every trace a little, then one termite chooses where to drop (weighted by the traces)
            for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) st.f[i][j] *= 0.88;
            const w = []; let tot = 0;
            for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { const x = st.h[i][j] >= MAXH ? 0 : 0.12 + Math.pow(field(i, j), 1.6) * 2.2; w.push(x); tot += x; }
            let r = Math.random() * tot, k = 0;
            while (k < w.length - 1 && (r -= w[k]) > 0) k++;
            drop(Math.floor(k / N), k % N);
          }
          function render() {
            let s = box(0, 0, 0, W, W, 6, 10);
            s += `<g transform="${TOP(0, 0, 6)}"><rect class="detail" x="6" y="6" width="${W - 12}" height="${W - 12}" rx="6"/>${api.iso.slits(M, M + N * CS, CS, M, M + N * CS, true)}${api.iso.slits(M, M + N * CS, CS, M, M + N * CS, false)}</g>`;
            s += `<g transform="${FRONT(0, W, 6)}"><text class="label label-en" x="12" y="4.6" font-size="4">GROUND = SHARED MESSAGE BOARD</text><text class="label-zh" x="100" y="4.8" font-size="4.4">地面＝共享的留言板</text></g>`;
            // back to front: smaller i+j first
            const cells = []; for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) cells.push([i, j]);
            cells.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
            for (const [i, j] of cells) {
              const x = M + i * CS + 2, y = M + j * CS + 2, h = st.h[i][j], f = st.f[i][j];
              s += `<g class="g24-cell" data-ij="${i},${j}"><g transform="${TOP(M + i * CS, M + j * CS, 6)}"><rect width="${CS}" height="${CS}" fill="transparent"/></g>`;
              if (h > 0) {
                if (h > 1) s += box(x, y, 6, CS - 4, CS - 4, (h - 1) * PH);
                const z = 6 + (h - 1) * PH;
                if (f > 0.12) s += `<g filter="url(#soft)" opacity="${(0.35 + 0.65 * f).toFixed(2)}">${boxc(x, y, z, CS - 4, CS - 4, PH, 0, 'g24-fresh')}</g>`;
                else s += box(x, y, z, CS - 4, CS - 4, PH);
                if (f > 0.55) { const c = K.P(x + (CS - 4) / 2, y + (CS - 4) / 2, z + PH + 2); s += `<ellipse class="halo hot" filter="url(#bloom)" cx="${c[0]}" cy="${c[1]}" rx="${14 * f}" ry="${8 * f}"/>`; }
              }
              s += `</g>`;
            }
            stage.setAttribute('viewBox', K.viewBox); stage.innerHTML = s;
            const pillars = st.h.flat().filter(v => v >= 6).length, tallest = Math.max(...st.h.flat());
            api.say(`${st.run ? 'swarm on' : 'paused'} · ${st.n} pellets · tallest ${tallest} · pillars ${pillars}`, `${st.run ? '蚁群运行中' : '已暂停'} · ${st.n} 个泥球 · 最高 ${tallest} · 柱子 ${pillars}`);
            api.power(st.run || st.n > 0);
          }
          stage.addEventListener('click', e => {
            const c = e.target.closest('.g24-cell'); if (!c) return;
            const [i, j] = c.dataset.ij.split(',').map(Number);
            for (let a = 0; a < N; a++) for (let b = 0; b < N; b++) st.f[a][b] *= 0.9;
            drop(i, j); render();
          });
          let acc = 0, lastT = 0;
          api.loop(t => {
            if (!st.run) { lastT = t; return; }
            acc += t - lastT; lastT = t;
            let changed = false;
            while (acc > 70) { acc -= 70; step(); changed = true; if (st.n >= 260) { st.run = false; break; } }
            if (changed) render();
          });
          const toggle = () => { st.run = !st.run; render(); };
          render();
          return {
            key: e => {
              if (e.key === ' ' || e.key === 'Enter') { toggle(); return true; }
              if (e.key === 'r' || e.key === 'R') { reset(); st.run = false; render(); return true; }
              return false;
            },
            demo: () => { reset(); st.run = true; render(); api.after(9000, () => { st.run = false; render(); }); }
          };
        },
        css: `.glow-plate .g24-fresh.face { fill: var(--accent); stroke: var(--accent-hi); } .glow-plate .g24-fresh.face.top { fill: var(--accent-hi); } .glow-plate .g24-cell { cursor: crosshair; }`
      },
      short_en: `[[c2_stigmergy]] (Grassé, 1959, studying termites) is **indirect coordination through traces left in the environment**: a termite drops a pheromone-laced pellet, the mark **stimulates** the next termite to build in the same spot, and pillars and arches emerge **with no plan, leader or direct communication**. Digital example: Wikipedia — each edit (or “citation needed” tag) is a trace that prompts the next editor.`,
      short_zh: `[[c2_stigmergy]]（格拉塞 1959 年研究白蚁时提出）是**通过留在环境中的痕迹进行的间接协调**：白蚁放下带信息素的泥球，这个痕迹**刺激**下一只白蚁在同一处继续建造，于是柱子和拱门在**没有计划、没有领导、没有直接沟通**的情况下出现。数字例子：维基百科——每次编辑（或“需要引用”标记）都是一个痕迹，引导下一位编辑。`,
      basis_en: `Checked against the stigmergy literature: Grassé coined the term in 1959 for termites, as “stimulation of workers by the performance they have achieved”; it is now defined as indirect coordination through the environment, and Wikipedia is the classic human example. The course covered it under Wright’s Class 2 readings.`,
      basis_zh: `已对照有关 stigmergy 的资料核对：格拉塞 1959 年为白蚁提出这个词，原意是“工蚁受到自己已完成工作的刺激”；现在定义为通过环境进行的间接协调，维基百科是最经典的人类例子。本课在第 2 课赖特的阅读中讲到。`,
      links: [{ t: 'Stigmergy (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Stigmergy' }],
      rel: ['2.2', '5.1', '5.2'],
      hook_en: 'Stigmergy = the work leaves a mark, the mark directs the next work.',
      hook_zh: '痕迹协作＝工作留下痕迹，痕迹指挥下一步工作。',
      trap_en: 'Must include: termites/Grassé, coordination through the ENVIRONMENT, no direct communication or central plan — then a clear example that has the same loop.',
      trap_zh: '必须写到：白蚁/格拉塞、通过“环境”协调、没有直接沟通或中央计划——然后给一个具有同样循环的清楚例子。'
    },
    {
      id: '2.5', t_en: 'Faceted classification', t_zh: '分面分类',
      q_en: 'What changes when a classification is composed (UDC, Ranganathan\'s PMEST) rather than descended (Dewey)? Why does this matter for tagging and search?',
      q_zh: '当分类是“组合出来的”（UDC、阮冈纳赞的 PMEST）而不是“沿树往下找的”（杜威）时，有什么改变？这对标签和搜索为什么重要？',
      src: 'Wright, appendixes A–E',
      kid_en: "Dewey is like a single shelf map in a library: a book about jazz piano in New York has to go in ONE spot, so you can only find it by walking down one path. Faceted classification is like a game where you build a character by picking from separate menus — hair, outfit, weapon, pet. Ranganathan's PMEST works the same way: pick a value for each facet (what it is, what it's made of, what's happening, where, when) and snap them together. That's why you can search or filter by any of them — just like tags.",
      kid_zh: "杜威分类像图书馆里一张固定的书架地图：一本讲“纽约爵士钢琴”的书只能放在“一个”位置，你只能沿着一条路走过去找。分面分类像游戏里捏人物：发型、衣服、武器、宠物，各选一样再拼起来。阮冈纳赞的 PMEST 也是这样：每个“面”（是什么、什么材料、在做什么、在哪里、什么时候）各选一个值，再拼到一起。所以你能按其中任何一个去搜索、筛选——就像打标签。",
      steps: [
        { en: "Left: Dewey. You climb down one branch — 700 Arts → 780 Music → 781 → 781.65 Jazz. One book, one shelf spot.", zh: "左边是杜威：沿着一根枝往下爬——700 艺术 → 780 音乐 → 781 → 781.65 爵士。一本书，一个书架位置。", hi: ["c2_dewey"] },
        { en: "Right: PMEST. Five separate menus: Personality, Matter, Energy, Space, Time.", zh: "右边是 PMEST：五个分开的“菜单”——本体、物质、动力、空间、时间。", hi: ["c2_pmest"] },
        { en: "Pick one value from each menu and join them with signs. You COMPOSE the address instead of descending to it.", zh: "每个菜单选一个值，用符号连起来。地址是“拼”出来的，不是“往下找”出来的。", hi: ["c2_pmest"] },
        { en: "Because each facet is separate, you can search by any one: all things from the 1950s, all things about piano. That's how tags and filters work.", zh: "因为每个面都是独立的，你可以只按其中一个搜：所有 1950 年代的、所有关于钢琴的。标签和筛选就是这样工作的。", hi: ["c2_pmest", "c2_dewey"] }
      ],
      fig() {
        let s = '';
        // Dewey descent (left)
        const D = [['700', 'ARTS', '艺术'], ['780', 'MUSIC', '音乐'], ['781', 'GENERAL PRINCIPLES', '总论'], ['781.65', 'JAZZ', '爵士']];
        let d = F.text(150, 30, 'DESCENDED · DEWEY', { cls: 'lt' }) + F.sub(150, 46, '沿树向下：只有一个位置', { anchor: 'middle' });
        D.forEach(([n, en, zh], i) => {
          const y = 70 + i * 62, x = 40 + i * 22;
          d += F.rect(x, y, 200, 34, { text: `${n}  ${en}`, align: 'left', fill: i === 3 ? F.C.blueF : '#fff', stroke: i === 3 ? F.C.blue : F.C.ink, tcolor: i === 3 ? F.C.blue : F.C.ink });
          d += F.sub(x + 206, y + 22, zh);
          if (i) d += F.arrow(x - 12, y - 28, x - 12, y + 14);
          if (i < 3) d += F.text(x + 230 + 20, y + 52, '+9 siblings', { anchor: 'start', cls: 'tiny', color: F.C.mute });
        });
        s += F.g(d, { tip: 'c2_dewey' });
        // PMEST composition (right)
        const cols = [
          ['P', 'PERSONALITY', '本体', ['jazz', 'opera', 'folk'], 0],
          ['M', 'MATTER', '物质', ['piano', 'voice', 'sax'], 0],
          ['E', 'ENERGY', '动力', ['improv', 'record', 'teach'], 0],
          ['S', 'SPACE', '空间', ['NYC', 'Paris', 'Tokyo'], 0],
          ['T', 'TIME', '时间', ['1950s', '1990s', 'today'], 0]
        ];
        let p = F.text(560, 30, 'COMPOSED · PMEST', { cls: 'lt', color: F.C.mag }) + F.sub(560, 46, '从分面组合：任意维度可检索', { anchor: 'middle' });
        cols.forEach(([k, en, zh, vals, pick], i) => {
          const x = 410 + i * 66;
          p += F.text(x + 28, 74, k, { cls: 'big', color: F.C.mag }) + F.text(x + 28, 90, en, { cls: 'tiny', color: F.C.mute }) + F.sub(x + 28, 104, zh, { anchor: 'middle' });
          vals.forEach((v, j) => {
            p += F.rect(x, 116 + j * 36, 58, 26, { text: v, rx: 13, fill: j === pick ? F.C.magF : '#fff', stroke: j === pick ? F.C.mag : F.C.mute, tcls: 'tiny', tcolor: j === pick ? F.C.mag : F.C.ink });
          });
          p += F.line(x + 29, 228, 523 + 37, 262, { stroke: F.C.mag, sw: 0.8 });
        });
        p += F.rect(400, 262, 330, 36, { text: 'Music ,jazz ;piano :improvise .NYC \'1950s', fill: F.C.ink, tcolor: F.C.paper, tcls: 'mono', rx: 6 });
        s += F.g(p, { tip: 'c2_pmest' });
        s += F.line(340, 60, 340, 300, { stroke: '#d9d6ce', dash: '3 4' });
        return F.svg(760, 320, s, { label: 'Dewey descent vs PMEST composition' });
      },
      cap_en: 'Left: in Dewey you climb down one branch and the book gets one shelf address. Right: Ranganathan builds the address from five independent facets — pick one value per facet and join them with each facet’s sign (, ; : . ’).',
      cap_zh: '左：在杜威体系里你沿一条分支往下爬，书只得到一个书架地址。右：阮冈纳赞用五个独立的分面拼出地址——每个分面选一个值，再用各分面的符号（, ; : . ’）连起来。',
      a_en: `**Descended (enumerative)** — [[c2_dewey]] is a single top-down tree. Every possible subject is listed in advance; you find a book by descending 700 Arts → 780 Music → 781.65 Jazz, and it gets **one** place. Anything the designers didn’t foresee (or anything that is about two things at once) fits badly.

**Composed (synthetic / faceted)** — [[c2_udc]] (Otlet) adds connecting signs such as “:” so two class numbers can be joined to express a relation. Ranganathan’s Colon Classification goes all the way: any subject is described by five fundamental [[c2_facet|facets]], [[c2_pmest]] — Personality, Matter, Energy, Space, Time — and the class number is **built** by combining a value from each (e.g. Music ,jazz ;piano :improvisation .New York ’1950s — each facet has its own sign: “,” P, “;” M, “:” E, “.” S, “’” T).

**What changes:**
- From **one location** to **many dimensions**: the item can be reached through any facet, in any order.
- The scheme no longer has to predict every subject; new combinations are made on the spot.
- Relations between subjects can be expressed, not just positions.

**Why it matters for tagging and search:** tags *are* facets. A photo can be tagged *beach*, *2024*, *Mom*, *film* at the same time, and found by any of them. [[c2_faceted_search]] — the filter sidebar on Amazon, a library catalog or a photo app — is Ranganathan in software: combine size + color + price in any order. Folders force one place (descent); tags and filters let the user compose their own path, which is how most search works today.`,
      a_zh: `**“下降式”（列举式）**——[[c2_dewey]]是一棵单一的、自上而下的树。所有可能的主题都事先列好；你找书时沿着 700 艺术 → 780 音乐 → 781.65 爵士 往下走，书只得到**一个**位置。设计者没预料到的主题（或同时涉及两件事的主题）都很难放进去。

**“组合式”（综合式 / 分面式）**——[[c2_udc]]（奥特莱）加入了“:”等连接符号，可以把两个类号连起来表达它们的关系。阮冈纳赞的冒号分类法走得更彻底：任何主题都用五个基本[[c2_facet|分面]]，即[[c2_pmest]]来描述——本体、物质、动力、空间、时间——类号是由每个分面各取一个值**组合出来的**（例如 音乐 ,爵士 ;钢琴 :即兴 .纽约 ’1950 年代——每个分面都有自己的符号：“,”本体、“;”物质、“:”动力、“.”空间、“’”时间）。

**改变了什么：**
- 从**一个位置**变成**多个维度**：可以从任何一个分面、以任何顺序找到它。
- 分类体系不必预测所有主题，新的组合可以随时拼出来。
- 能表达主题之间的关系，而不只是位置。

**为什么对标签和搜索重要：**标签*就是*分面。一张照片可以同时被标为*海滩*、*2024*、*妈妈*、*胶片*，用其中任何一个都能找到。[[c2_faceted_search]]——亚马逊、图书馆目录或相册里的筛选侧栏——就是软件中的阮冈纳赞：按尺寸 + 颜色 + 价格任意组合。文件夹强迫一个位置（下降式）；标签和筛选让用户自己组合路径，今天大多数搜索都是这样工作的。`,
      short_en: `**Descended** (Dewey): one pre-listed top-down tree — you climb down 700 → 780 → 781.65 and each item gets **one place**. **Composed** (UDC, Ranganathan’s Colon Classification): the description is **built from independent facets** — [[c2_pmest]] = Personality, Matter, Energy, Space, Time — joined by signs, so new subjects and relations can be expressed. For tagging and search this means **one item, many access points**: tags are facets, and filter sidebars let you combine them in any order.`,
      short_zh: `**下降式**（杜威）：一棵事先列好的自上而下的树——沿 700 → 780 → 781.65 往下走，每个东西只得到**一个位置**。**组合式**（UDC、阮冈纳赞的冒号分类法）：描述由**独立的分面组合而成**——[[c2_pmest]]＝本体、物质、动力、空间、时间——用符号连接，因此能表达新主题和主题间的关系。对标签和搜索而言就是**一个东西，多个入口**：标签就是分面，筛选栏让你以任意顺序组合它们。`,
      basis_en: `Wright, *Informatica*, appendixes A–E (classification schemes). Checked the Colon Classification facts: PMEST, each facet marked by its own sign (, ; : . ’), and numbers synthesised from facets rather than chosen from a fixed list. UDC as Otlet & La Fontaine’s Dewey-based scheme with connecting signs is standard library-science history.`,
      basis_zh: `赖特《Informatica》附录 A–E（分类体系）。已核对冒号分类法：PMEST、每个分面有自己的符号（, ; : . ’）、类号由分面组合而非从固定列表中挑选。UDC 是奥特莱与拉方丹在杜威基础上加入连接符号的体系，这是图书馆学的标准史实。`,
      links: [{ t: 'Colon classification (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Colon_classification' }, { t: 'List of Dewey Decimal classes', u: 'https://en.wikipedia.org/wiki/List_of_Dewey_Decimal_classes' }],
      rel: ['2.1', '5.4', '3.3'],
      hook_en: 'Dewey: one shelf, found by climbing down. PMEST: an address built from facets, found from any side — that’s tags and filters.',
      hook_zh: '杜威：一个书架，靠往下爬找到。PMEST：由分面拼出地址，从任何一边都能找到——这就是标签和筛选。',
      trap_en: 'Spell out what PMEST stands for, and connect it explicitly to tags / faceted search (one item, many access points).',
      trap_zh: '要写出 PMEST 五个字母各代表什么，并明确联系到标签/分面检索（一个东西，多个入口）。'
    }
  ]
});
