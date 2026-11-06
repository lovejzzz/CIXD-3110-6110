/* People named in the teacher-mode lecture scripts.
   Single source of truth: the lecture finds each person by `m_en` / `m_zh`
   and builds the per-class "People in this class" card and the inline name tooltips from here. */
window.PEOPLE = [
  {
    id: 'zuboff', en: 'Shoshana Zuboff', zh: '肖莎娜·祖博夫', yrs: 'b. 1951',
    role_en: 'Social psychologist, Harvard Business School (emerita)', role_zh: '社会心理学家，哈佛商学院荣休教授',
    bio_en: 'Wrote *The Age of Surveillance Capitalism* (2019). She argues that tech companies treat our everyday behavior as free raw material, turn it into predictions about us, and sell those predictions.',
    bio_zh: '著有《监控资本主义时代》（2019）。她认为科技公司把我们日常的行为当作免费原材料，加工成对我们的预测，再把预测卖出去。',
    m_en: ['Zuboff'], m_zh: ['祖博夫']
  },
  {
    id: 'varoufakis', en: 'Yanis Varoufakis', zh: '雅尼斯·瓦鲁法基斯', yrs: 'b. 1961',
    role_en: 'Economist; Greece’s finance minister in 2015', role_zh: '经济学家，2015 年任希腊财政部长',
    bio_en: 'Wrote *Technofeudalism* (2023). His claim: platforms like Amazon no longer compete inside a market; they own the market itself and collect rent from everyone in it, like lords collecting from serfs.',
    bio_zh: '著有《技术封建主义》（2023）。他的观点是：亚马逊这类平台已经不是在市场里竞争，而是拥有了市场本身，向里面所有人收“租”，像领主向农奴收租一样。',
    m_en: ['Varoufakis'], m_zh: ['瓦鲁法基斯']
  },
  {
    id: 'wright', en: 'Alex Wright', zh: '亚历克斯·赖特', yrs: 'b. 1966',
    role_en: 'Writer and information architect', role_zh: '作家、信息架构师',
    bio_en: 'Trained as a librarian, then led user-experience work at places like The New York Times and Google. His *Informatica* (2023, first published as *Glut*) traces how people have organized information through history, from hierarchies to networks.',
    bio_zh: '图书馆员出身，后来在《纽约时报》、Google 等机构负责用户体验。《Informatica》（2023，初版名为《Glut》）梳理了人类组织信息的历史，从层级讲到网络。',
    m_en: ['Alex Wright', 'Wright'], m_zh: ['亚历克斯·赖特', '赖特']
  },
  {
    id: 'aristotle', en: 'Aristotle', zh: '亚里士多德', yrs: '384–322 BCE',
    role_en: 'Greek philosopher', role_zh: '古希腊哲学家',
    bio_en: 'One of the first to sort the world into categories, grouping living things by shared traits. That top-down habit of classifying runs through Western knowledge.',
    bio_zh: '最早系统地给世界分类的人之一，按共同特征把生物分组。这种自上而下的分类习惯贯穿了整个西方知识体系。',
    m_en: ['Aristotle'], m_zh: ['亚里士多德']
  },
  {
    id: 'linnaeus', en: 'Carl Linnaeus', zh: '卡尔·林奈', yrs: '1707–1778',
    role_en: 'Swedish botanist', role_zh: '瑞典植物学家',
    bio_en: 'His *Systema Naturae* (1735) put all of nature into one nested hierarchy (kingdom, class, order, genus, species) and gave us two-part names like *Homo sapiens*.',
    bio_zh: '《自然系统》（1735）把整个自然界装进一棵层层嵌套的树（界、纲、目、属、种），还发明了“双名法”，比如 *Homo sapiens*。',
    m_en: ['Linnaeus'], m_zh: ['林奈']
  },
  {
    id: 'dewey', en: 'Melvil Dewey', zh: '麦尔威·杜威', yrs: '1851–1931',
    role_en: 'American librarian', role_zh: '美国图书馆学家',
    bio_en: 'Created the Dewey Decimal Classification (1876): every book gets one number in a fixed tree of 10 main classes. It is the classic example of a descending, top-down scheme.',
    bio_zh: '1876 年发明杜威十进制分类法：每本书在一棵固定的十大类树上只有一个编号。是“自上而下、逐级细分”体系的经典例子。',
    m_en: ['Dewey'], m_zh: ['杜威']
  },
  {
    id: 'ranganathan', en: 'S. R. Ranganathan', zh: '阮冈纳赞', yrs: '1892–1972',
    role_en: 'Indian mathematician and librarian', role_zh: '印度数学家、图书馆学家',
    bio_en: 'Invented Colon Classification (1933), the first major faceted system: describe a work along separate facets (Personality, Matter, Energy, Space, Time) and combine them. Every shopping-site filter is his idea.',
    bio_zh: '1933 年发明冒号分类法，第一个重要的分面分类体系：从几个独立的“面”（主体、物质、动作、空间、时间）分别描述，再组合起来。今天购物网站的筛选器就是他的思路。',
    m_en: ['Ranganathan'], m_zh: ['阮冈纳赞']
  },
  {
    id: 'rosch', en: 'Eleanor Rosch', zh: '埃莉诺·罗施', yrs: 'b. 1938',
    role_en: 'Cognitive psychologist, UC Berkeley', role_zh: '认知心理学家，加州大学伯克利分校',
    bio_en: 'In the 1970s she showed people think in prototypes and that one middle level of categories (“chair”, not “furniture” or “armchair”) is the one we name and picture first: the basic level.',
    bio_zh: '1970 年代她发现人是按“原型”来思考类别的，而且中间那一层（“椅子”，而不是“家具”或“扶手椅”）是我们最先说出、最先想到的，这就是“基本层级”。',
    m_en: ['Eleanor Rosch', 'Rosch'], m_zh: ['埃莉诺·罗施', '罗施']
  },
  {
    id: 'berlin', en: 'Brent Berlin', zh: '布伦特·伯林', yrs: 'b. 1936',
    role_en: 'Anthropologist', role_zh: '人类学家',
    bio_en: 'Studied how cultures around the world name plants, animals and colors. He found striking agreement: people everywhere sort living things around the same middle, “generic” level.',
    bio_zh: '研究世界各地的文化怎样给植物、动物和颜色命名，发现惊人的一致：各地的人都围绕同一个中间的“属”级来给生物分类。',
    m_en: ['Brent Berlin'], m_zh: ['布伦特·伯林', '伯林']
  },
  {
    id: 'grasse', en: 'Pierre-Paul Grassé', zh: '皮埃尔-保罗·格拉塞', yrs: '1895–1985',
    role_en: 'French zoologist', role_zh: '法国动物学家',
    bio_en: 'Coined “stigmergy” in 1959 while studying termites: no termite has a plan, but each one reacts to what the others left behind, and a mound gets built.',
    bio_zh: '1959 年研究白蚁时提出“共识主动性（stigmergy）”：没有一只白蚁有图纸，每只只是对别的白蚁留下的痕迹作出反应，蚁丘就这样建起来了。',
    m_en: ['Pierre-Paul Grassé', 'Grassé'], m_zh: ['皮埃尔-保罗·格拉塞', '格拉塞']
  },
  {
    id: 'crawford', en: 'Kate Crawford', zh: '凯特·克劳福德', yrs: '',
    role_en: 'AI researcher and writer (USC, Microsoft Research)', role_zh: 'AI 研究者、作家（南加大、微软研究院）',
    bio_en: 'Wrote *Atlas of AI* (2021). With Vladan Joler she made *Anatomy of an AI System* (2018), a giant map of everything behind one Amazon Echo request: mines, factories, data, hidden labor. MoMA holds it in its collection.',
    bio_zh: '著有《AI 地图集》（2021）。和 Vladan Joler 合作《AI 系统解剖图》（2018），把一次 Amazon Echo 语音请求背后的一切画成巨幅地图：矿山、工厂、数据、隐形劳动。现藏于纽约现代艺术博物馆。',
    m_en: ['Crawford'], m_zh: ['克劳福德', 'Crawford']
  },
  {
    id: 'joler', en: 'Vladan Joler', zh: '弗拉丹·约勒', yrs: '',
    role_en: 'Serbian artist and researcher (University of Novi Sad, SHARE Lab)', role_zh: '塞尔维亚艺术家、研究者（诺维萨德大学、SHARE Lab）',
    bio_en: 'Makes huge, detailed maps of how technology really works. Co-author of *Anatomy of an AI System* with Kate Crawford.',
    bio_zh: '擅长把技术的真实运作方式画成巨幅、细密的地图。和 Kate Crawford 合作了《AI 系统解剖图》。',
    m_en: ['Joler'], m_zh: ['约勒', 'Joler']
  },
  {
    id: 'karpathy', en: 'Andrej Karpathy', zh: '安德烈·卡帕西', yrs: 'b. 1986',
    role_en: 'AI researcher; OpenAI founding member, former head of AI at Tesla', role_zh: 'AI 研究者；OpenAI 创始成员，前特斯拉 AI 负责人',
    bio_en: 'Known for explaining AI clearly. His “Software 3.0” talk argues good AI products are *partially* autonomous, with an autonomy slider that lets people decide how much the AI does on its own.',
    bio_zh: '以把 AI 讲得清楚易懂出名。他的“软件 3.0”演讲认为好的 AI 产品是“部分自主”的，要有一个“自主度滑杆”，让人决定 AI 自己做多少。',
    m_en: ['Karpathy'], m_zh: ['卡帕西']
  },
  {
    id: 'ango', en: 'Steph Ango', zh: '斯蒂芬·安戈', yrs: '',
    role_en: 'CEO of Obsidian', role_zh: 'Obsidian 首席执行官',
    bio_en: 'Wrote the essay “File over app” (2023): apps come and go, so keep your work in plain files you own (like Markdown) that any tool can open, now and decades from now.',
    bio_zh: '写了《File over app（文件优先于应用）》（2023）：应用会消失，所以要把成果存成你自己拥有的普通文件（比如 Markdown），现在和几十年后任何工具都能打开。',
    m_en: ['Steph Ango'], m_zh: ['Steph Ango']
  },
  {
    id: 'ohno', en: 'Taiichi Ohno', zh: '大野耐一', yrs: '1912–1990',
    role_en: 'Toyota engineer', role_zh: '丰田工程师',
    bio_en: 'Father of the Toyota Production System. Inspired by how American supermarkets restock shelves only as items sell, he created kanban and the rule of limiting work in progress.',
    bio_zh: '丰田生产方式之父。他受到美国超市“卖掉多少才补多少”的启发，发明了看板（kanban）和“限制在制品数量”的规则。',
    m_en: ['Taiichi Ohno', 'Ohno'], m_zh: ['大野耐一']
  },
  {
    id: 'torvalds', en: 'Linus Torvalds', zh: '林纳斯·托瓦兹', yrs: 'b. 1969',
    role_en: 'Finnish-American software engineer', role_zh: '芬兰裔美国软件工程师',
    bio_en: 'Created the Linux kernel (1991) and, in 2005, Git, the version-control system that GitHub is built on.',
    bio_zh: '1991 年创造了 Linux 内核，2005 年又写出了 Git，也就是 GitHub 所基于的版本控制系统。',
    m_en: ['Linus Torvalds'], m_zh: ['Linus Torvalds']
  },
  {
    id: 'stephenson', en: 'Neal Stephenson', zh: '尼尔·斯蒂芬森', yrs: 'b. 1959',
    role_en: 'Science-fiction writer', role_zh: '科幻作家',
    bio_en: 'Wrote *Snow Crash* (1992), which coined the word “metaverse”, and the essay *In the Beginning… Was the Command Line* (1999), where he compares the friendly graphical interface to Disneyland: lovely, but it hides how things really work.',
    bio_zh: '写了首创“元宇宙（metaverse）”一词的《雪崩》（1992），还写了长文《一开始……是命令行》（1999），把友好的图形界面比作迪士尼乐园：很美，但把真实的运作藏了起来。',
    m_en: ['Neal Stephenson', 'Stephenson'], m_zh: ['尼尔·斯蒂芬森', '斯蒂芬森']
  },
  {
    id: 'herzog', en: 'Werner Herzog', zh: '沃纳·赫尔佐格', yrs: 'b. 1942',
    role_en: 'German filmmaker', role_zh: '德国电影导演',
    bio_en: 'Made the documentary *Lo and Behold, Reveries of the Connected World* (2016), about the birth of the internet and what it is doing to us. It is the course’s prep film.',
    bio_zh: '拍了纪录片《Lo and Behold, Reveries of the Connected World》（2016），讲互联网的诞生以及它在怎样改变我们。是这门课的课前观看影片。',
    m_en: ['Werner Herzog', 'Herzog'], m_zh: ['沃纳·赫尔佐格', '赫尔佐格']
  },
  {
    id: 'gebru', en: 'Timnit Gebru', zh: '蒂姆尼特·格布鲁', yrs: 'b. 1983',
    role_en: 'Computer scientist; founder of the DAIR Institute', role_zh: '计算机科学家，DAIR 研究所创始人',
    bio_en: 'Lead author of “Datasheets for Datasets” (2018): every dataset should come with a sheet saying where it came from, who is in it, and what it should not be used for, like a spec sheet for an electronic part.',
    bio_zh: '《数据集的数据说明书》（2018）的第一作者：每个数据集都该附一份说明，写清来源、里面有谁、不该拿来做什么，就像电子元件附带的规格书。',
    m_en: ['Gebru'], m_zh: ['Gebru']
  },
  {
    id: 'amershi', en: 'Saleema Amershi', zh: '萨利玛·阿默希', yrs: '',
    role_en: 'Researcher, Microsoft Research', role_zh: '微软研究院研究员',
    bio_en: 'Lead author of “Guidelines for Human-AI Interaction” (CHI 2019): 18 design rules for AI products, such as “make clear what the system can do” and “support efficient correction”.',
    bio_zh: '《人机交互 AI 设计准则》（CHI 2019）的第一作者：给 AI 产品的 18 条设计规则，比如“讲清系统能做什么”、“让纠错变得容易”。',
    m_en: ['Amershi'], m_zh: ['Amershi']
  }
];
