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
      fig() {
        F.setIso(19, 300, 235);
        const lv = [
          { w: 10, label: 'DRIVE  /', sub: '磁盘（根）', note: { en: 'The root: the most inclusive category. Everything lives inside it.', zh: '根目录：最大的类，所有东西都在它里面。' } },
          { w: 7.2, label: 'USERS / SKYX', sub: '用户文件夹', note: { en: 'A narrower category nested inside the root.', zh: '嵌在根目录里的较小类别。' } },
          { w: 4.8, label: 'DOCUMENTS', sub: '文稿', note: { en: 'Each folder has exactly one parent.', zh: '每个文件夹只有一个上级。' } },
          { w: 2.6, label: 'MIDTERM', sub: '期中', note: { en: 'Narrower still.', zh: '更小一层。' } },
          { w: 1.1, label: 'ANSWERS.PDF', sub: '文件：唯一的位置', note: { en: 'The leaf: the item has ONE address: /Users/skyx/Documents/Midterm/answers.pdf', zh: '叶子节点：这个文件只有一个地址：/Users/skyx/Documents/Midterm/answers.pdf' } }
        ];
        let s = '';
        lv.forEach((L, i) => {
          const off = (10 - L.w) / 2, z = i * 2.6;
          const fill = i === 4 ? F.C.magF : '#fff';
          let b = F.plate({ x: off, y: off, z, w: L.w, d: L.w, t: 0.2, fill, side: i === 4 ? '#efd2e2' : '#f3f2ee', pattern: i === 0 ? 'grid' : null, density: 8 });
          const left = i % 2 === 0;
          const a = left ? F.iso(off, off + L.w * 0.5, z + 0.2) : F.iso(off + L.w * 0.5, off, z + 0.2);
          const lx = left ? 120 : 520;
          b += F.label(a, lx, L.label, { color: i === 4 ? F.C.mag : F.C.ink }) + F.sub(left ? lx - 8 : lx + 8, a[1] + 17, L.sub, { anchor: left ? 'end' : 'start' });
          s += F.g(b, { note: L.note, ex: Math.round(i * 2.4 * 19 * 0.8) });
        });
        s += F.text(620, 440, 'MORE INCLUSIVE ↓   ·   NARROWER ↑', { cls: 'tiny', color: F.C.mute });
        return F.svg(760, 452, s, { label: 'nested hierarchy of folders' });
      },
      cap_en: 'A file system drawn as nested plates: each layer is contained by the one below it. Inclusiveness decides the order, and every file has exactly one path.',
      cap_zh: '把文件系统画成嵌套的板：每一层都被下面那层包含。“包含关系”决定顺序，每个文件只有一条路径。',
      a_en: `Wright defines a [[c2_hierarchy]] as a **top-down** system that orders things by **inclusiveness**: broad categories contain narrower ones, which contain narrower ones still, like a tree with one trunk. Every item has one proper place, and the structure is fixed from above — it is how institutions, armies, churches and libraries keep control and make knowledge findable. (Our course glossary: “the ordering of concepts by inclusiveness, used with categorization to control and apply association.”)

**Everyday software example:** the **file system** in Finder or Explorer. Drive → Users → Documents → Midterm → answers.pdf. Each folder sits inside exactly one parent, and each file has exactly one path. Other examples: a website’s main menu → submenu → page; a company org chart in Slack; Settings → Privacy → Location Services on a phone.`,
      a_zh: `赖特把[[c2_hierarchy]]定义为一种**自上而下**、按**包含关系**排列事物的系统：大类包含小类，小类再包含更小的类，就像一棵只有一个树干的树。每个东西都有一个“正确”的位置，结构由上方固定下来——机构、军队、教会和图书馆都靠它维持控制、让知识可被找到。（课程词汇表：“按包含关系排列概念，并与分类结合，用来控制和运用联想。”）

**日常软件中的例子：****文件系统**（访达或资源管理器）。磁盘 → 用户 → 文稿 → 期中 → answers.pdf。每个文件夹只属于一个上级文件夹，每个文件只有一条路径。其他例子：网站的主菜单 → 子菜单 → 页面；Slack 里的公司组织架构；手机里的 设置 → 隐私 → 定位服务。`,
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
        s += F.g(F.label([623, 140], 740, '') + F.text(735, 120, 'HUB', { anchor: 'end', cls: 'tiny', color: F.C.mag }) + F.sub(735, 158, '涌现的中心', { anchor: 'end' }),
          { note: { en: 'A hub: a node many others link to. Rank nodes by links and a hierarchy appears inside the network (PageRank, follower counts).', zh: '枢纽：很多节点都连向它。按链接数给节点排名，网络内部就长出了层级（PageRank、粉丝数）。' } });
        // arrows between
        s += F.g(F.path('M290,120 C360,80 430,80 490,110', { stroke: F.C.mag, arrow: true }) + F.text(390, 70, 'hierarchies spawn networks', { cls: 'tiny', color: F.C.mag }) + F.sub(390, 86, '机构催生交叉联系', { anchor: 'middle' }),
          { note: { en: 'Inside any hierarchy people form side-links: cross-references in a library, informal ties in an org, hyperlinks between folders.', zh: '任何层级内部都会长出横向联系：图书馆里的“参见”、组织里的非正式关系、文件之间的超链接。' } });
        s += F.g(F.path('M490,200 C430,240 360,240 290,200', { stroke: F.C.mag, arrow: true }) + F.text(390, 252, 'networks spawn hierarchies', { cls: 'tiny', color: F.C.mag }) + F.sub(390, 268, '链接汇聚成排名', { anchor: 'middle' }),
          { note: { en: 'Out of open networks, structure emerges: popular hubs, rankings, platforms that end up on top.', zh: '开放的网络里会涌现结构：热门枢纽、排行榜、最终占据顶端的平台。' } });
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
      fig() {
        let s = '';
        const ranks = [
          { y: 50, r: 'UNIQUE BEGINNER', zh: '起始类', nodes: [['PLANT', '植物']] },
          { y: 115, r: 'LIFE-FORM', zh: '生活型', nodes: [['TREE', '树'], ['GRASS', '草'], ['VINE', '藤']] },
          { y: 180, r: 'GENERIC', zh: '属级 · 基本层级', nodes: [['OAK', '橡树'], ['PINE', '松树'], ['MAPLE', '枫树']], hi: true },
          { y: 245, r: 'SPECIFIC', zh: '种级', nodes: [['WHITE OAK', '白橡'], ['RED OAK', '红橡']] },
          { y: 310, r: 'VARIETAL', zh: '变种', nodes: [['…', '']] }
        ];
        const X = { 1: [470], 3: [340, 470, 600], 2: [420, 520] };
        // band highlight for basic level
        s += F.g(`<rect x="200" y="152" width="550" height="56" rx="8" fill="${F.C.magF}"/>` +
          F.text(212, 203, 'BASIC LEVEL', { anchor: 'start', cls: 'tiny', color: F.C.mag }), { tip: 'c2_basic_level' });
        const pos = ranks.map(R => (R.nodes.length === 1 ? X[1] : X[R.nodes.length]));
        // edges
        s += F.line(470, 62, 340, 103) + F.line(470, 62, 470, 103) + F.line(470, 62, 600, 103);
        s += F.line(340, 127, 340, 168) + F.line(340, 127, 470, 168) + F.line(340, 127, 600, 168, { dash: '3 3' });
        s += F.line(340, 192, 420, 233) + F.line(340, 192, 520, 233);
        s += F.line(420, 257, 470, 298, { dash: '3 3' });
        ranks.forEach((R, i) => {
          R.nodes.forEach(([en, zh], j) => {
            const x = pos[i][j], w = Math.max(60, en.length * 8 + 22);
            s += F.rect(x - w / 2, R.y - 12, w, 24, { fill: R.hi ? '#fff' : '#fff', stroke: R.hi ? F.C.mag : F.C.ink, sw: R.hi ? 1.6 : 1.1, text: en, tcolor: R.hi ? F.C.mag : F.C.ink, rx: 12 });
            if (zh) s += F.sub(x, R.y + 26, zh, { anchor: 'middle' });
          });
          s += F.g(F.text(190, R.y, R.r, { anchor: 'end', cls: 'lt', color: R.hi ? F.C.mag : F.C.ink }) + F.sub(190, R.y + 15, R.zh, { anchor: 'end' }), { tip: 'c2_berlin_ranks' });
        });
        s += F.g(F.arrow(30, 300, 30, 60) + F.text(42, 70, 'abstract', { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.text(42, 300, 'expert detail', { anchor: 'start', cls: 'tiny', color: F.C.mute }),
          { note: { en: 'Going up = more abstract groupings few people name in daily life. Going down = finer distinctions only specialists need.', zh: '往上＝越来越抽象、日常很少说的大类；往下＝越来越细、只有专家才需要的区分。' } });
        return F.svg(760, 340, s, { label: 'folk taxonomy ranks with basic level highlighted' });
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
          F.label([top[0] + 26, top[1]], 380, 'PHEROMONE MARK') + F.sub(388, top[1] + 17, '信息素：“在这里继续堆”'), { tip: 'c2_pheromone' });
        // loop diagram (right)
        const cx = 630, cy = 165, R = 72;
        const st = [
          ['ACT', '行动：放下泥球', -90],
          ['TRACE', '痕迹：留在环境里', 15],
          ['STIMULUS', '刺激：吸引下一只', 165]
        ];
        let loop = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${F.C.ink}" stroke-dasharray="1 5" stroke-width="1"/>`;
        st.forEach(([en, zh, a], i) => {
          const r = a * Math.PI / 180, x = cx + R * Math.cos(r), y = cy + R * Math.sin(r);
          loop += F.circle(x, y, 6, { fill: i === 1 ? F.C.mag : '#fff', stroke: i === 1 ? F.C.mag : F.C.ink });
          const ly = i === 1 ? y - 34 : i === 0 ? y - 32 : y + 26;
          const an = i === 1 ? 'end' : 'middle', tx = i === 1 ? x + 12 : x;
          loop += F.text(tx, ly, en, { cls: 'lt', anchor: an }) + F.sub(tx, ly + 15, zh, { anchor: an });
          const a2 = (a + 40) * Math.PI / 180, a3 = (a + 80) * Math.PI / 180;
          loop += F.path(`M${cx + R * Math.cos(a2)},${cy + R * Math.sin(a2)} A${R},${R} 0 0 1 ${cx + R * Math.cos(a3)},${cy + R * Math.sin(a3)}`, { arrow: true, stroke: F.C.mag });
        });
        loop += F.text(cx, cy + R + 24, 'NO PLAN · NO BOSS · NO MESSAGES', { cls: 'tiny', color: F.C.mute });
        s += F.g(loop, { tip: 'c2_stigmergy' });
        return F.svg(760, 330, s, { label: 'stigmergy: termite pillars and the action-trace loop' });
      },
      cap_en: 'Termites never discuss the plan. Each pellet changes the ground, and the changed ground tells the next termite what to do. Pillars and arches emerge from the loop.',
      cap_zh: '白蚁从不讨论计划。每个泥球都改变了地面，而被改变的地面告诉下一只白蚁该做什么。柱子和拱门就从这个循环里“长”出来。',
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
          ['E', 'ENERGY', '动力', ['improvise', 'record', 'teach'], 0],
          ['S', 'SPACE', '空间', ['New York', 'Paris', 'Tokyo'], 0],
          ['T', 'TIME', '时间', ['1950s', '1990s', 'today'], 0]
        ];
        let p = F.text(560, 30, 'COMPOSED · PMEST', { cls: 'lt', color: F.C.mag }) + F.sub(560, 46, '从分面组合：任意维度可检索', { anchor: 'middle' });
        cols.forEach(([k, en, zh, vals, pick], i) => {
          const x = 410 + i * 66;
          p += F.text(x + 28, 74, k, { cls: 'big', color: F.C.mag }) + F.text(x + 28, 90, en, { cls: 'tiny', color: F.C.mute }) + F.sub(x + 28, 104, zh, { anchor: 'middle' });
          vals.forEach((v, j) => {
            p += F.rect(x, 116 + j * 36, 58, 26, { text: v, rx: 13, fill: j === pick ? F.C.magF : '#fff', stroke: j === pick ? F.C.mag : F.C.hair || '#ccc', tcls: 'tiny', tcolor: j === pick ? F.C.mag : F.C.ink });
          });
          p += F.line(x + 29, 228, 523 + 37, 262, { stroke: F.C.mag, sw: 0.8 });
        });
        p += F.rect(400, 262, 330, 36, { text: 'jazz : piano : improvise . NYC \' 1950s', fill: '#1b1b1a', tcolor: '#f3f2ee', tcls: 'mono', rx: 6 });
        s += F.g(p, { tip: 'c2_pmest' });
        s += F.line(340, 60, 340, 300, { stroke: '#d9d6ce', dash: '3 4' });
        return F.svg(760, 320, s, { label: 'Dewey descent vs PMEST composition' });
      },
      cap_en: 'Left: in Dewey you climb down one branch and the book gets one shelf address. Right: Ranganathan builds the address from five independent facets — pick one value per facet and join them with signs like the colon.',
      cap_zh: '左：在杜威体系里你沿一条分支往下爬，书只得到一个书架地址。右：阮冈纳赞用五个独立的分面拼出地址——每个分面选一个值，再用冒号等符号连起来。',
      a_en: `**Descended (enumerative)** — [[c2_dewey]] is a single top-down tree. Every possible subject is listed in advance; you find a book by descending 700 Arts → 780 Music → 781.65 Jazz, and it gets **one** place. Anything the designers didn’t foresee (or anything that is about two things at once) fits badly.

**Composed (synthetic / faceted)** — [[c2_udc]] (Otlet) adds connecting signs such as “:” so two class numbers can be joined to express a relation. Ranganathan’s Colon Classification goes all the way: any subject is described by five fundamental [[c2_facet|facets]], [[c2_pmest]] — Personality, Matter, Energy, Space, Time — and the class number is **built** by combining a value from each (e.g. jazz : piano : improvisation . New York ’ 1950s).

**What changes:**
- From **one location** to **many dimensions**: the item can be reached through any facet, in any order.
- The scheme no longer has to predict every subject; new combinations are made on the spot.
- Relations between subjects can be expressed, not just positions.

**Why it matters for tagging and search:** tags *are* facets. A photo can be tagged *beach*, *2024*, *Mom*, *film* at the same time, and found by any of them. [[c2_faceted_search]] — the filter sidebar on Amazon, a library catalog or a photo app — is Ranganathan in software: combine size + color + price in any order. Folders force one place (descent); tags and filters let the user compose their own path, which is how most search works today.`,
      a_zh: `**“下降式”（列举式）**——[[c2_dewey]]是一棵单一的、自上而下的树。所有可能的主题都事先列好；你找书时沿着 700 艺术 → 780 音乐 → 781.65 爵士 往下走，书只得到**一个**位置。设计者没预料到的主题（或同时涉及两件事的主题）都很难放进去。

**“组合式”（综合式 / 分面式）**——[[c2_udc]]（奥特莱）加入了“:”等连接符号，可以把两个类号连起来表达它们的关系。阮冈纳赞的冒号分类法走得更彻底：任何主题都用五个基本[[c2_facet|分面]]，即[[c2_pmest]]来描述——本体、物质、动力、空间、时间——类号是由每个分面各取一个值**组合出来的**（例如 爵士 : 钢琴 : 即兴 . 纽约 ’ 1950 年代）。

**改变了什么：**
- 从**一个位置**变成**多个维度**：可以从任何一个分面、以任何顺序找到它。
- 分类体系不必预测所有主题，新的组合可以随时拼出来。
- 能表达主题之间的关系，而不只是位置。

**为什么对标签和搜索重要：**标签*就是*分面。一张照片可以同时被标为*海滩*、*2024*、*妈妈*、*胶片*，用其中任何一个都能找到。[[c2_faceted_search]]——亚马逊、图书馆目录或相册里的筛选侧栏——就是软件中的阮冈纳赞：按尺寸 + 颜色 + 价格任意组合。文件夹强迫一个位置（下降式）；标签和筛选让用户自己组合路径，今天大多数搜索都是这样工作的。`,
      hook_en: 'Dewey: one shelf, found by climbing down. PMEST: an address built from facets, found from any side — that’s tags and filters.',
      hook_zh: '杜威：一个书架，靠往下爬找到。PMEST：由分面拼出地址，从任何一边都能找到——这就是标签和筛选。',
      trap_en: 'Spell out what PMEST stands for, and connect it explicitly to tags / faceted search (one item, many access points).',
      trap_zh: '要写出 PMEST 五个字母各代表什么，并明确联系到标签/分面检索（一个东西，多个入口）。'
    }
  ]
});
