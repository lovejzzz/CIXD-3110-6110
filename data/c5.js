/* CLASS 5 · ORGANIZATIONAL STRUCTURES FOR PRODUCTIVITY AND AGENTS */
defTerms({
  c5_kanban: { en: 'Kanban board', zh: '看板（Kanban）',
    d_en: 'A board of columns (workflow states) with one card per piece of work. Cards move left to right; each column has a WIP limit. Kanban means “signal card” in Japanese.',
    d_zh: '由若干列（工作流状态）组成的面板，每项工作一张卡片。卡片从左往右移动；每列都有在制品上限。Kanban 在日语里是“信号卡”的意思。' },
  c5_card: { en: 'Kanban card (signal)', zh: '看板卡（信号）',
    d_en: 'Ohno / Toyota: the card that represents one piece of work and its permission to enter the system.',
    d_zh: '大野耐一 / 丰田：代表一项工作，以及它“获准进入系统”的那张卡。' },
  c5_wip: { en: 'WIP limit', zh: '在制品上限（WIP limit）',
    d_en: 'An explicit cap on how many items may be in a column at once — Kanban’s central rule (Anderson; Kniberg & Skarin). It exposes bottlenecks and forces finishing before starting.',
    d_zh: '对每一列同时容纳的工作项数量的明确上限——看板的核心规则（Anderson；Kniberg & Skarin）。它暴露瓶颈，迫使“先完成再开始”。' },
  c5_pull: { en: 'Pull system', zh: '拉动式系统',
    d_en: 'New work is pulled in only when there is free capacity (a free card/slot), instead of being pushed onto people.',
    d_zh: '只有在有空余产能（空出的卡片/位置）时才“拉”入新工作，而不是把工作“推”给人。' },
  c5_lead: { en: 'Lead time', zh: '交付周期（Lead time）',
    d_en: 'Time from when a card is committed to until it is delivered — a key flow measure the board makes visible.',
    d_zh: '从卡片被承诺开始到交付完成的时间——看板让它变得可见的一个关键流动指标。' },
  c5_plan: { en: 'Plan / checklist (todo)', zh: '计划 / 清单（todo）',
    d_en: 'An ordered list of steps an agent writes before acting and keeps updated (e.g. plan.md, a todo list with checkboxes). It lives outside the model’s head.',
    d_zh: '智能体在行动前写下、并持续更新的有序步骤清单（例如 plan.md、带勾选框的待办列表）。它存在于模型“脑子”之外。' },
  c5_context: { en: 'Context window', zh: '上下文窗口',
    d_en: 'The model’s short-term memory — everything it can “see” in one run. Long tasks overflow it, which is why agents write their plans down.',
    d_zh: '模型的短期记忆——一次运行中它能“看到”的全部内容。长任务会超出它，所以智能体要把计划写下来。' },
  c5_hermes_kb: { en: 'Hermes Kanban & goals', zh: 'Hermes 的看板与目标',
    d_en: 'Hermes Agent can track work as goals and kanban cards, so a long request is broken into tasks with a visible status.',
    d_zh: 'Hermes 智能体可以把工作记为“目标”和看板卡片，把一个长请求拆成状态可见的多个任务。' },
  c5_vault: { en: 'Obsidian vault', zh: 'Obsidian 库（vault）',
    d_en: 'A vault is simply a folder on your computer full of plain-text Markdown (.md) files, plus a hidden .obsidian folder for settings. Obsidian is just one app that reads it.',
    d_zh: 'vault 就是你电脑上的一个文件夹，里面是纯文本的 Markdown（.md）文件，另有一个存放设置的隐藏 .obsidian 文件夹。Obsidian 只是读取它的众多应用之一。' },
  c5_md: { en: 'Markdown (.md)', zh: 'Markdown（.md）',
    d_en: 'A plain-text format with light symbols for headings, lists and links. Any text editor, any computer, any agent can read it — today or in 30 years.',
    d_zh: '一种纯文本格式，用简单符号表示标题、列表和链接。任何文本编辑器、任何电脑、任何智能体都能读——今天或 30 年后都可以。' },
  c5_foa: { en: 'File over app', zh: '文件优先于应用（File over app）',
    d_en: 'Steph Ango (Obsidian CEO): apps are ephemeral, files can last. If you want your digital artifacts to endure, they must be files you control, in formats that are easy to retrieve and read.',
    d_zh: 'Steph Ango（Obsidian CEO）：应用是短暂的，文件才有机会长存。想让数字作品长久保存，它们必须是你掌控的文件，并采用容易读取的格式。' },
  c5_link: { en: 'Internal link [[ ]]', zh: '内部链接 [[ ]]',
    d_en: 'A link from one note to another written as double brackets. Links, not folders, are what the graph draws.',
    d_zh: '用双中括号写的、从一条笔记指向另一条笔记的链接。图谱画的是链接，而不是文件夹。' },
  c5_graphview: { en: 'Graph view', zh: '关系图谱视图',
    d_en: 'Obsidian core plugin that draws notes as circles and links as lines to visualize relationships in the vault.',
    d_zh: 'Obsidian 的核心插件：把笔记画成圆点、链接画成线，用来可视化库中的关系。' },
  c5_kg: { en: 'Knowledge graph', zh: '知识图谱',
    d_en: 'Graphify: a queryable graph of concepts and relationships built from code, docs, papers and diagrams — “query instead of grepping.”',
    d_zh: 'Graphify：从代码、文档、论文和图表中构建的、可查询的“概念—关系”图——“用查询代替逐字搜索”。' },
  c5_community: { en: 'Community (cluster)', zh: '社群（聚类）',
    d_en: 'A group of densely linked nodes found by an algorithm (Graphify uses Leiden). Reveals themes no folder was named after.',
    d_zh: '由算法（Graphify 使用 Leiden 算法）找出的、彼此链接紧密的一组节点。它揭示出没有哪个文件夹命名过的主题。' },
  c5_provenance: { en: 'EXTRACTED vs. INFERRED edges', zh: '“提取”与“推断”的边',
    d_en: 'Graphify tags each relationship: EXTRACTED if stated in the source, INFERRED if the tool guessed it — provenance you can check.',
    d_zh: 'Graphify 给每条关系打标签：源文件里明确写的是 EXTRACTED（提取），工具推测的是 INFERRED（推断）——可以核查的来源记录。' },
  c5_rubric: { en: 'Rubric / evaluation scheme', zh: '评分量规 / 评估方案',
    d_en: 'Zhang, Han & Ahmed-Kristensen: definitions of novelty and usefulness + four YES/NO questions for each + a rule table that maps the answers to a 0–6 score, embedded in the prompt.',
    d_zh: 'Zhang、Han 与 Ahmed-Kristensen：新颖性与有用性的定义 + 各四个“是/否”问题 + 把答案映射为 0–6 分的规则表，全部写进提示词。' },
  c5_baseline: { en: 'Baseline prompt', zh: '基线提示词',
    d_en: 'The trimmed prompt with only the task, design goals and the 7-point scale — the model uses its own idea of “novel” and “useful.”',
    d_zh: '只包含评估任务、设计目标和 7 分量表的简化提示词——模型只能按它自己对“新颖”“有用”的理解来打分。' },
  c5_novelty: { en: 'Novelty', zh: '新颖性',
    d_en: 'In the paper’s prompt: how unique, original or different a design is compared with what already exists; judged through function and structure.',
    d_zh: '论文提示词中的定义：一个设计与现有产品相比有多独特、原创、不同；从功能和结构两方面判断。' },
  c5_usefulness: { en: 'Usefulness', zh: '有用性',
    d_en: 'How well the design performs its intended function and how practical or beneficial it is to the user; judged through effectiveness and feasibility.',
    d_zh: '设计实现预期功能的程度，以及对用户有多实用、多有益；从有效性与可行性两方面判断。' },
  c5_cat: { en: 'Consensual Assessment Technique', zh: '共识评估法（CAT）',
    d_en: 'Amabile’s “gold standard”: domain experts rate creativity on a scale. The study compared LLM scores to expert scores.',
    d_zh: 'Amabile 提出的“黄金标准”：由领域专家给创造力打分。研究把大模型的评分与专家评分对比。' }
});

defClass({
  order: 5, n: '5',
  lec_en: "Class 5 is about **structure as the hidden half of intelligence**. A board, a checklist, a folder of plain-text notes, a graph of links, a rubric — none of these are 'AI', yet they decide whether people and agents can actually finish work. The reason is simple: memory and attention are limited, for humans and for models alike. Kanban came from a Toyota factory; Obsidian came from note-takers; rubrics came from teaching — and now agents use all three as their scaffolding. For a designer, the lesson is that **the way you organize information shapes what you (and your tools) can think**.",
  lec_zh: "第 5 课讲的是：**结构是智能被忽略的另一半**。看板、清单、一个装满纯文本笔记的文件夹、一张链接图、一份评分标准——它们都不是“AI”，却决定了人和智能体能不能真正把事做完。原因很简单：无论是人还是模型，记忆和注意力都是有限的。看板来自丰田的工厂，Obsidian 来自做笔记的人，评分标准来自教学——而现在智能体把这三样都当作自己的脚手架。对设计师来说，启示是：**你组织信息的方式，决定了你（和你的工具）能怎么思考**。",
  lec_faq: [{ q_en: "Is Kanban the same as a to-do list?", q_zh: "看板和待办清单是一样的吗？", a_en: "A to-do list says what's left; a Kanban board shows where each piece of work is in its journey — and limits how many can be 'in progress' at once. The WIP limit is what makes it Kanban.", a_zh: "待办清单只说还剩什么；看板显示每项工作走到了哪一步——还限制同时“进行中”的数量。在制品上限才是看板的灵魂。" }, { q_en: "Why not just remember everything in my head?", q_zh: "为什么不全记在脑子里？", a_en: "Because heads (and context windows) are small and leaky. Writing it down frees your attention for thinking, and lets others — or an agent — see the same plan.", a_zh: "因为脑子（和上下文窗口）容量小还会漏。写下来能把注意力留给思考，也让别人——或者智能体——看到同一份计划。" }, { q_en: "Do I need Obsidian to do 'file over app'?", q_zh: "要做到“文件优先于应用”，一定得用 Obsidian 吗？", a_en: "No — it's a principle, not a product. Any notes you keep as plain files in your own folders (Markdown, text, images) follow it. Obsidian just makes those files pleasant to use.", a_zh: "不用——这是一个原则，不是一个产品。只要你的笔记以纯文件形式放在自己的文件夹里（Markdown、文本、图片），就符合它。Obsidian 只是让这些文件用起来更舒服。" }, { q_en: "Is a knowledge graph just a mind map?", q_zh: "知识图谱就是思维导图吗？", a_en: "Similar look, different origin: a mind map is drawn by hand from one center; a knowledge graph grows from the links between notes (and can be generated by tools like Graphify), with no single center.", a_zh: "长得像，来源不同：思维导图是从一个中心手画出来的；知识图谱是从笔记之间的链接长出来的（也可以由 Graphify 之类的工具生成），没有唯一的中心。" }, { q_en: "Can AI really judge creativity?", q_zh: "AI 真的能评判创造力吗？", a_en: "Only as well as the question it's given. With a vague prompt, models disagree and drift; with a rubric written first, they become consistent and closer to experts — but a human still decides what the rubric values.", a_zh: "它的评判只能和你给的问题一样清楚。提示模糊，模型互相打架；先写好评分标准，它们就会一致、也更接近专家——但评分标准看重什么，仍然由人决定。" }, { q_en: "What's the difference between novelty and usefulness?", q_zh: "新颖性和有用性有什么区别？", a_en: "Novelty asks 'is this new or surprising?'; usefulness asks 'does it actually solve the problem for real people?'. A great design idea needs both — a new idea that doesn't work isn't creative, it's just weird.", a_zh: "新颖性问的是“它新吗、出人意料吗？”；有用性问的是“它真能帮真实的人解决问题吗？”。好的设计创意两者都要——新但没用，那不叫有创意，只叫奇怪。" }],
  t_en: 'Organizational Structures for Productivity and Agents', t_zh: '面向生产力与智能体的组织结构',
  intro_en: 'Boards, checklists, vaults and graphs: the structures people invented to organize work and knowledge are the same structures that now act as a harness for AI agents. And if a model is going to judge, the criteria must come first.',
  intro_zh: '看板、清单、笔记库和图谱：人类为组织工作与知识而发明的结构，如今也成了约束 AI 智能体的“挽具”。而如果要让模型来评判，标准必须先写好。',
  quiz: [
    { q_en: 'What is a Kanban board?', q_zh: '什么是看板（Kanban board）？',
      opts: [{ en: 'A calendar of deadlines', zh: '一张截止日期日历' },
        { en: 'Cards (pieces of work) in columns (workflow states), with limits on work in progress', zh: '卡片（一项项工作）排在各列（工作状态）里，并限制在制品数量' },
        { en: 'A chat channel for a team', zh: '团队聊天频道' },
        { en: 'A ranking of team members by speed', zh: '按速度给团队成员排名' }], a: 1,
      why_en: 'A [[c5_kanban]] shows each [[c5_card]] moving through columns like To do → Doing → Done. Its key rule is a [[c5_wip]]; it is not a calendar or a ranking.',
      why_zh: '[[c5_kanban]]把每张[[c5_card]]放在“待办 → 进行中 → 完成”这样的列里移动。它最关键的规则是[[c5_wip]]；它不是日历，也不是排名。' },
    { q_en: 'The "Doing" column has a WIP limit of 2 and already holds 2 cards. What should happen to a new task?', q_zh: '“进行中”一列的 WIP 上限是 2，里面已经有 2 张卡。新任务该怎么办？',
      opts: [{ en: 'Add it anyway — more work is better', zh: '照样加进去——做得越多越好' },
        { en: 'It waits until a card finishes and a slot is free, then it is pulled in', zh: '等一张卡完成、空出位置后再把它拉进来' },
        { en: 'Delete the oldest card', zh: '删掉最旧的那张卡' },
        { en: 'Move it straight to Done', zh: '直接移到“完成”' }], a: 1,
      why_en: 'Kanban is a **pull** system: work enters only when capacity frees up. Breaking the [[c5_wip]] hides the real bottleneck instead of fixing it.',
      why_zh: '看板是一种**拉动**系统：只有空出能力时，工作才能进来。突破[[c5_wip]]只会把真正的瓶颈藏起来，而不是解决它。' },
    { q_en: 'What can a Kanban board track?', q_zh: '看板能追踪什么？',
      opts: [{ en: 'Only bugs in code', zh: '只有代码里的 bug' },
        { en: 'Where every piece of work is, where work piles up, and how long it takes to flow through', zh: '每项工作在哪里、工作在哪里堆积、走完全程要多久' },
        { en: 'Only who is the fastest worker', zh: '只有谁干活最快' },
        { en: 'Nothing — it is decoration', zh: '什么都追踪不了——只是装饰' }], a: 1,
      why_en: 'It tracks **status, bottlenecks and flow** ([[c5_lead]]) for any work — a team’s, a student’s, or an agent’s tasks. It is not limited to code and it is not about ranking people.',
      why_zh: '它追踪任何工作的**状态、瓶颈和流动**（[[c5_lead]]）——团队的、学生的，甚至智能体的任务。它不限于代码，也不是用来给人排名的。' },
    { q_en: 'Why does an agent write its request down as a plan or checklist?', q_zh: '为什么智能体要把请求写成计划或清单？',
      opts: [{ en: 'To look busy', zh: '为了显得很忙' },
        { en: 'So the goal and steps survive outside its limited context window, and progress can be checked', zh: '这样目标和步骤能保存在有限的上下文窗口之外，进度也能被检查' },
        { en: 'Because models cannot read', zh: '因为模型不会读字' },
        { en: 'To make the task take longer', zh: '为了让任务拖得更久' }], a: 1,
      why_en: 'A written [[c5_plan]] is memory that lives **outside** the [[c5_context]]: the agent re-reads it each turn, ticks items off, and you can see what is done and what is next.',
      why_zh: '写下来的[[c5_plan]]是存在[[c5_context]]**之外**的记忆：智能体每一轮都会重读、逐项打勾，你也能看到哪些做完了、下一步是什么。' },
    { q_en: 'What is an Obsidian vault?', q_zh: '什么是 Obsidian 的“库”（vault）？',
      opts: [{ en: 'An encrypted cloud account owned by Obsidian', zh: 'Obsidian 公司拥有的加密云账户' },
        { en: 'A normal folder of plain-text Markdown files on your own disk', zh: '你自己硬盘上一个装着纯文本 Markdown 文件的普通文件夹' },
        { en: 'A paid premium feature', zh: '一项付费高级功能' },
        { en: 'A database you can only open in Obsidian', zh: '只能用 Obsidian 打开的数据库' }], a: 1,
      why_en: 'A [[c5_vault]] is just a **folder of .md files** you control. Any editor can open them; Obsidian is only one app on top of them.',
      why_zh: '[[c5_vault]]就是一个你自己掌控的 **.md 文件夹**。任何编辑器都能打开这些文件；Obsidian 只是架在它们上面的其中一个应用。' },
    { q_en: '"File over app" (Steph Ango) means…', q_zh: '“文件优先于应用”（Steph Ango）的意思是……',
      opts: [{ en: 'Apps are more important than files', zh: '应用比文件更重要' },
        { en: 'Keep your work in files you own; apps come and go, the files outlast them', zh: '把作品放在你拥有的文件里；应用会来来去去，文件比它们活得久' },
        { en: 'Always upload files to the app’s server', zh: '永远把文件上传到应用的服务器' },
        { en: 'Never use apps at all', zh: '完全不要用任何应用' }], a: 1,
      why_en: '[[c5_foa]] says durable work should be **files you control**, so the owner of your notes is you — not a company whose app (or server) might disappear.',
      why_zh: '[[c5_foa]]主张持久的作品应该是**你自己掌控的文件**，所以笔记的主人是你——而不是某家应用（或服务器）可能消失的公司。' },
    { q_en: 'What does a graph of your notes show that a folder does not?', q_zh: '笔记的关系图能显示哪些文件夹显示不了的东西？',
      opts: [{ en: 'The file sizes', zh: '文件大小' },
        { en: 'Connections across folders: hubs, clusters and unexpected links', zh: '跨文件夹的联系：枢纽、群组和意想不到的链接' },
        { en: 'Which notes were written first', zh: '哪些笔记最先写' },
        { en: 'Spelling mistakes', zh: '拼写错误' }], a: 1,
      why_en: 'A folder puts each note in **one place** (a tree). The [[c5_graphview]] shows **relationships**: a note linked from many places becomes a hub, and clusters reveal themes across folders.',
      why_zh: '文件夹让每条笔记只待在**一个地方**（一棵树）。[[c5_graphview]]显示的是**关系**：被很多地方链接的笔记成为枢纽，群组则显示出跨文件夹的主题。' },
    { q_en: 'Graphify builds a knowledge graph. What is that?', q_zh: 'Graphify 会生成知识图谱。知识图谱是什么？',
      opts: [{ en: 'A bar chart of your study hours', zh: '学习时间的柱状图' },
        { en: 'A queryable map of concepts and their relationships, built from your files', zh: '从你的文件中生成的、可查询的“概念 + 关系”地图' },
        { en: 'A list of folders sorted A–Z', zh: '按字母排序的文件夹列表' },
        { en: 'A picture of the hard drive', zh: '硬盘的照片' }], a: 1,
      why_en: 'A [[c5_kg]] stores concepts as nodes and relationships as edges, so you can ask questions of it ("query instead of grepping"). A sorted folder list has no relationships at all.',
      why_zh: '[[c5_kg]]把概念存成节点、把关系存成连线，所以你可以向它提问（“用查询代替逐字搜索”）。排序好的文件夹列表里根本没有关系。' },
    { q_en: 'Why write the rubric BEFORE asking a model to evaluate creative work?', q_zh: '为什么要在让模型评价创意作品**之前**先写好评分标准？',
      opts: [{ en: 'So the model can skip reading the work', zh: '这样模型就不用读作品了' },
        { en: 'Without shared criteria the model scores by its own vague taste; a rubric makes scores consistent and closer to experts', zh: '没有共同标准，模型凭自己模糊的“品味”打分；有了评分标准，分数更一致、更接近专家' },
        { en: 'Rubrics make every score 7/7', zh: '有了评分标准每次都会打满分' },
        { en: 'Because the rubric is the training data', zh: '因为评分标准就是训练数据' }], a: 1,
      why_en: 'In Zhang, Han & Ahmed-Kristensen, the **baseline** prompt gave scattered scores; adding definitions, yes/no questions and a rule table ([[c5_rubric]]) made models agree more and land nearer the expert ratings.',
      why_zh: '在 Zhang、Han 和 Ahmed-Kristensen 的研究里，**基线**提示词打出的分数很分散；加上定义、是/否问题和规则表（[[c5_rubric]]）之后，模型之间更一致，也更接近专家评分。' },
    { q_en: 'In that study, the two qualities of design creativity being scored were…', q_zh: '在那项研究里，被评分的两种设计创造力是……',
      opts: [{ en: 'Speed and price', zh: '速度和价格' },
        { en: 'Novelty and usefulness', zh: '新颖性和有用性' },
        { en: 'Colour and font', zh: '颜色和字体' },
        { en: 'Length and grammar', zh: '长度和语法' }], a: 1,
      why_en: 'Ideas were rated on [[c5_novelty]] and [[c5_usefulness]], each with its own definition and yes/no questions in the rubric. Speed or style were not the criteria.',
      why_zh: '创意按[[c5_novelty]]和[[c5_usefulness]]打分，每一项在评分标准里都有自己的定义和是/否问题。速度和外观都不是评分标准。' }
  ],
  qs: [
    {
      id: '5.1',
      lec_open_en: "Ask: why does a group project feel chaotic even when everyone is working hard?",
      lec_open_zh: "先问：为什么小组作业里人人都很努力，却还是一团乱？",
      lec_why_en: "Origin story: in the 1950s Taiichi Ohno visited American supermarkets and noticed shelves were refilled only when items were taken — the empty spot *was* the order. He brought that idea into the Toyota factory with paper cards called kanban. Your sticky-note board is a supermarket shelf for work.\n\nBecause **work you can't see can't be managed**. A [[c5_kanban]] makes every piece of work a visible card and every stage a column — to do, doing, review, done. Now the whole team sees the same picture.\n\nWhy the [[c5_wip]]? Ohno's Toyota insight: starting more doesn't finish more. When too many things are 'in progress', everything waits and nothing ships. Limiting a column forces you to **finish before you start**, and the pile-up shows you exactly where the bottleneck is.\n\nWhy [[c5_pull]] instead of assigning? Because a free slot is a signal: work moves only when there's capacity. That's why the board can track not just tasks, but **flow**: how long a card takes, where it gets stuck, who is overloaded.",
      lec_why_zh: "起源故事：1950 年代，大野耐一参观美国超市，发现货架只在东西被拿走后才补货——空出来的位置本身就是订单。他把这个点子用纸卡（kanban）带进了丰田工厂。你的便利贴看板，就是“工作的超市货架”。\n\n因为**看不见的工作就管不了**。[[c5_kanban]]把每项工作变成一张看得见的卡片，每个阶段变成一列——待办、进行中、审核、完成。全队看到的是同一张图。\n\n为什么要[[c5_wip]]？这是大野耐一在丰田的洞察：开始得更多，不等于完成得更多。“进行中”太多，所有事都在等，什么也交不出去。限制一列的数量，逼你**先做完再开始新的**，堆积的地方正好告诉你瓶颈在哪。\n\n为什么是[[c5_pull]]，而不是派任务？因为空出来的位置就是信号：有余力才让工作流动。所以看板追踪的不只是任务，还有**流动**：一张卡要多久、卡在哪、谁超负荷。",
      lec_trap_en: "Students describe Kanban as 'a to-do list with columns.' Tempting, because it looks like one — but the WIP limit and pull are what make it Kanban.",
      lec_trap_zh: "学生常把看板说成“分了栏的待办清单”。看上去确实像——但让它成为看板的，是在制品上限和拉动。",
      lec_ask_en: "Ask: 'The Review column has 6 cards and a limit of 2. What should the team do?' — Listen for: stop starting new work, help clear review; the pile shows the bottleneck.",
      lec_ask_zh: "问：“审核这一列有 6 张卡，上限是 2，团队该怎么做？”——好的回答：别再开新工作，先帮忙把审核清掉；堆积处就是瓶颈。",
      lec_bridge_en: "A board helps a team hold a project. Next: how does a single agent hold your request?",
      lec_bridge_zh: "看板帮一个团队拿住一个项目。接下来：一个智能体怎么拿住你的请求？",
     
      t_en: 'Kanban', t_zh: '看板',
      q_en: 'What is a Kanban board, and what can it track?', q_zh: '什么是看板（Kanban board）？它可以追踪什么？',
      fig() {
        F.setIso(28, 170, 60);
        let s = '';
        const W = 12, D = 5.5;
        s += F.g(F.plate({ x: 0, y: 0, z: 0, w: W, d: D, t: 0.25, fill: '#fff' }), { tip: 'c5_kanban' });
        const cols = [
          { n: 'BACKLOG', z: '待办池', cards: 4, c: F.C.ink, f: '#fff' },
          { n: 'DOING · WIP 2', z: '进行中：上限 2', cards: 2, c: F.C.mag, f: F.C.magF, tip: 'c5_wip' },
          { n: 'REVIEW · WIP 2', z: '审查：上限 2', cards: 1, c: F.C.blue, f: F.C.blueF, tip: 'c5_wip' },
          { n: 'DONE', z: '已完成', cards: 3, c: F.C.green, f: F.C.greenF }
        ];
        cols.forEach((col, i) => {
          const x = i * 3;
          // column divider
          if (i) { const a = F.iso(x, 0, 0.25), b = F.iso(x, D, 0.25); s += F.line(a[0], a[1], b[0], b[1], { stroke: F.C.ink, sw: 0.7, dash: '3 3' }); }
          let cs = '';
          for (let k = 0; k < col.cards; k++) {
            cs += F.plate({ x: x + 0.5, y: 0.4 + k * 1.25, z: 0.25 + 0.6, w: 2, d: 0.95, t: 0.12, fill: col.f, side: col.f });
          }
          // empty WIP slot
          if (i === 2) cs += F.plate({ x: x + 0.5, y: 0.4 + 1.25, z: 0.85, w: 2, d: 0.95, t: 0.05, fill: 'none', side: 'none', dash: '3 3' });
          cs = cs.replace(/stroke="#1b1b1a"/g, `stroke="${col.c}"`);
          const top = F.iso(x + 2.5, 0.4, 0.97);
          cs += F.label(top, 540, col.n, { color: col.c }) + F.sub(548, top[1] + 17, col.z);
          s += F.g(cs, { tip: col.tip || 'c5_card' });
        });
        // pull arrow
        const p1 = F.iso(2.6, D + 0.6, 0), p2 = F.iso(3.6, D + 0.6, 0);
        s += F.arrow(p1[0], p1[1] + 14, p2[0] + 10, p2[1] + 20, { stroke: F.C.mag });
        s += F.text(p1[0] - 90, p1[1] + 50, 'PULL when a slot is free', { anchor: 'start', cls: 'tiny', color: F.C.mag }) + F.sub(p1[0] - 90, p1[1] + 66, '有空位时才拉入新卡片');
        s += F.g(F.text(620, 290, 'LEAD TIME →', { cls: 'tiny', color: F.C.mute }) + F.sub(620, 306, '交付周期：从左到右的时间', { anchor: 'middle' }), { tip: 'c5_lead' });
        return F.svg(760, 330, s, { label: 'kanban board in isometric view' });
      },
      glow: {
        id: 'g5-1', name_en: 'Kanban board · a pull system', name_zh: '看板 · 拉动式系统',
        hint_en: 'Click a card to move it · space finishes a review card · N tries to push new work',
        hint_zh: '点卡片推进 · 空格完成一张审查卡 · N 键试着硬塞新工作',
        aria: 'Isometric kanban board with four columns and WIP limits. Click cards to move them right; space finishes the oldest review card and the board pulls work forward; N tries to push new work in.',
        css: `[data-fig="g5-1"] .press.done .face { fill: var(--recess); }
              [data-fig="g5-1"] .press.latched text, [data-fig="g5-1"] .press.lit text { fill: var(--panel); }`,
        mount(stage, api) {
          const COLW = 112, CW = 82, CD = 28, STEP = 38, Y0 = 52, BH = 12, BW = 448, BD = 270;
          const K = api.iso.frame([[0, 0, 0], [BW, 0, 0], [0, BD, 0], [BW, BD, 0], [0, 0, BH + 26]]);
          const { TOP, box, path } = K;
          const COLS = [{ en: 'BACKLOG', zh: '待办池', wip: 0 }, { en: 'DOING', zh: '进行中', wip: 2 }, { en: 'REVIEW', zh: '审查', wip: 2 }, { en: 'DONE', zh: '已完成', wip: 0 }];
          const st = { cols: [['2.3', '3.1', '4.2', '5.5', '7.4'], ['1.4', '6.2'], ['8.1'], ['1.1', '2.1']], msg: ['click a card', '点一张卡片'] };
          const cap = c => COLS[c].wip || Infinity;
          const pos = (c, i) => [c * COLW + 15, Y0 + i * STEP];
          const $ = q => stage.querySelector(q);
          function draw() {
            let s = box(0, 0, 0, BW, BD, BH, 10);
            s += `<g transform="${TOP(0, 0, BH)}">` + [1, 2, 3].map(c => `<line class="detail" x1="${c * COLW}" y1="8" x2="${c * COLW}" y2="${BD - 26}" stroke-dasharray="4 4"/>`).join('') +
              `<text class="label" x="14" y="${BD - 10}" font-size="8.5">← PULL · work enters a column only when a slot is free</text>` +
              `<text class="label-zh" x="300" y="${BD - 10}" font-size="8">有空位才拉入</text></g>`;
            COLS.forEach((col, c) => {
              const n = st.cols[c].length, full = col.wip && n >= col.wip;
              let h = `<g transform="${TOP(c * COLW + 12, 8, BH)}"><text class="${full ? 'scr-accent' : 'label-hi'}" x="0" y="10" font-size="9.5">${col.en}${col.wip ? ' · WIP ' + col.wip : ''}</text>` +
                `<text class="label-zh" x="0" y="22" font-size="8">${col.zh}${col.wip ? ' · 上限 ' + col.wip : ''}</text>`;
              if (col.wip) for (let k = 0; k < col.wip; k++) h += `<circle data-led="${c}" class="led${k < n ? ' hot' : ''}"${k < n ? ' filter="url(#soft)"' : ''} cx="${4 + k * 11}" cy="32" r="3.4"/>`;
              s += h + '</g>';
            });
            const cards = [];
            st.cols.forEach((list, c) => list.forEach((id, i) => { if (c === 3 && i < list.length - 4) return; cards.push({ id, c, i: c === 3 ? i - Math.max(0, list.length - 4) : i }); }));
            cards.sort((a, b) => { const A = pos(a.c, a.i), B = pos(b.c, b.i); return (A[0] + A[1]) - (B[0] + B[1]); });
            cards.forEach(({ id, c, i }) => {
              const [x, y] = pos(c, i);
              const cls = c === 1 ? 'press latched' : c === 3 ? 'press done' : 'press';
              s += `<g class="${cls}" data-card="${id}" data-c="${c}" data-i="${i}">${box(x, y, BH, CW, CD, 7, 3)}` +
                `<g transform="${TOP(x, y, BH + 7)}"><text class="${c === 3 ? 'label' : 'label-hi'}" x="9" y="18" font-size="10">Q ${id}</text></g></g>`;
            });
            const hid = st.cols[3].length - 4;
            if (hid > 0) s += `<g transform="${TOP(3 * COLW + 12, 8, BH)}"><text class="label" x="52" y="10" font-size="7.5">+${hid} earlier</text></g>`;
            s += `<path id="g51-pulse" class="pulse" pathLength="1000" d="M0 0"/>`;
            stage.innerHTML = s;
            const d = st.cols[1].length, r = st.cols[2].length, dn = st.cols[3].length;
            api.say(`doing ${d}/2 · review ${r}/2 · done ${dn} — ${st.msg[0]}`, `进行中 ${d}/2 · 审查 ${r}/2 · 完成 ${dn} — ${st.msg[1]}`);
            api.power(d > 0);
          }
          function pulse(a, b) {
            const p = $('#g51-pulse'); if (!p) return;
            p.setAttribute('d', path([[a[0] + CW / 2, a[1] + CD / 2, BH + 16], [b[0] + CW / 2, b[1] + CD / 2, BH + 16]]));
            api.replay(p);
          }
          function blockLeds(c) { stage.querySelectorAll(`[data-led="${c}"]`).forEach(l => l.classList.add('blink')); api.after(1100, () => stage.querySelectorAll('.blink').forEach(l => l.classList.remove('blink'))); }
          function move(c, i, msg) {
            if (c >= 3 || !st.cols[c][i]) return false;
            if (st.cols[c + 1].length >= cap(c + 1)) {
              st.msg = c + 1 === 1 ? ['WIP limit: finish before you start', 'WIP 上限：先完成，再开始'] : ['review is full — finish one first', '审查列已满——先完成一张'];
              draw(); blockLeds(c + 1); return false;
            }
            const [id] = st.cols[c].splice(i, 1); st.cols[c + 1].push(id);
            const a = pos(c, i), b = pos(c + 1, Math.min(st.cols[c + 1].length - 1, c + 1 === 3 ? 3 : 9));
            st.msg = msg || [`Q ${id} → ${COLS[c + 1].en.toLowerCase()}`, `Q ${id} → ${COLS[c + 1].zh}`];
            draw(); pulse(a, b); api.flash($(`[data-card="${id}"]`), 420);
            return true;
          }
          function cascade() {
            api.after(560, () => {
              if (st.cols[1].length && st.cols[2].length < 2) { move(1, 0, ['review pulls a card from doing', '审查列从“进行中”拉入一张']); cascade(); }
              else if (st.cols[0].length && st.cols[1].length < 2) { move(0, 0, ['doing pulls from the backlog', '“进行中”从待办池拉入一张']); cascade(); }
            });
          }
          function finish() {
            if (st.cols[2].length) { move(2, 0, ['finished a review → slot freed', '完成一张审查 → 空出一个位置']); cascade(); }
            else if (st.cols[1].length) { move(1, 0); cascade(); }
          }
          function pushNew() { if (st.cols[0].length) move(0, 0, ['pushed new work into doing', '把新工作塞进了“进行中”']); }
          stage.addEventListener('click', e => {
            const g = e.target.closest('[data-card]'); if (!g) return;
            const c = +g.dataset.c, i = +g.dataset.i;
            if (c === 3) { st.msg = ['already done', '已经完成']; draw(); return; }
            if (move(c, i) && c >= 1) cascade();
          });
          draw();
          return {
            key: e => { if (e.key === ' ' || e.key === 'Enter') { finish(); return true; } if (e.key === 'n' || e.key === 'N') { pushNew(); return true; } return false; },
            demo: () => { api.after(300, pushNew); api.after(1500, finish); }
          };
        }
      },
      cap_en: 'Each card is one piece of work; each column is a state. The lights show each column’s WIP limit: push into a full column and it refuses; finish a review card and the freed slot pulls the next card forward.',
      cap_zh: '每张卡片是一项工作，每一列是一种状态。指示灯显示每列的 WIP 上限：往满了的列硬塞会被拒绝；完成一张审查卡，空出的位置就把下一张卡拉过来。',
      a_en: `A [[c5_kanban]] is a visual board that **makes a workflow visible**: columns are the stages work passes through (e.g. *Backlog → Doing → Review → Done*) and each [[c5_card|card]] is one piece of work moving from left to right. The idea comes from Toyota’s production system (Ohno), where a *kanban* — “signal card” — was the permission for work to enter a process. Anderson and Kniberg & Skarin carried it into knowledge work with three rules: **visualize the workflow, limit work in progress ([[c5_wip]]), and manage flow** as a [[c5_pull]].

What it can track:
- **Status** — what is waiting, in progress, blocked, done;
- **Who** is doing what (owners on cards);
- **How much is in progress**, against each column’s WIP limit;
- **Bottlenecks** — columns where cards pile up;
- **Flow over time** — [[c5_lead]], throughput.

In class we saw the same structure used for agents: Hermes can hold a request as goals and kanban cards ([[c5_hermes_kb]]), and Obsidian can show notes as a kanban layout. A board can track any work that moves through stages — tasks, assignments, bugs, an agent’s sub-tasks.`,
      a_zh: `[[c5_kanban]]是一块**让工作流程可见**的面板：每一列是工作要经过的一个阶段（如 *待办 → 进行中 → 审查 → 完成*），每张[[c5_card|卡片]]是一项从左向右移动的工作。这个想法来自丰田生产方式（大野耐一）：*kanban*（“信号卡”）就是工作获准进入某道工序的许可。Anderson 以及 Kniberg & Skarin 把它带入知识工作，提出三条规则：**可视化工作流、限制在制品（[[c5_wip]]）、管理流动**——这是一种[[c5_pull]]。

它可以追踪：
- **状态**——哪些在等待、进行中、受阻、已完成；
- **谁**在做什么（卡片上的负责人）；
- **正在进行的工作量**，以及与每列 WIP 上限的比较；
- **瓶颈**——卡片堆积的那一列；
- **随时间的流动**——[[c5_lead]]、吞吐量。

课上我们看到智能体也使用同样的结构：Hermes 可以把一个请求记为目标和看板卡片（[[c5_hermes_kb]]），Obsidian 也能把笔记显示为看板布局。任何要经过若干阶段的工作都可以用看板追踪——任务、作业、bug、智能体的子任务。`,
      short_en: `A Kanban board **makes a workflow visible**: columns are the stages work moves through (Backlog → Doing → Review → Done) and each card is one piece of work. Its defining rule (Ohno’s signal card; Anderson; Kniberg & Skarin) is a **WIP limit** per column, so new work is **pulled** in only when a slot frees. It tracks the status of every task, who owns it, how much is in progress, where work piles up (bottlenecks), and lead time.`,
      short_zh: `看板**让工作流程可见**：每一列是工作经过的阶段（待办 → 进行中 → 审查 → 完成），每张卡片是一项工作。它的核心规则（大野耐一的“信号卡”；Anderson；Kniberg & Skarin）是每列的 **WIP 上限**，只有空出位置才**拉入**新工作。它能追踪每项任务的状态、负责人、在制品数量、工作堆积在哪（瓶颈）以及交付周期。`,
      basis_en: `Kniberg & Skarin, *Kanban and Scrum* (Kanban = visualize the workflow, limit WIP, measure lead time); Anderson, *Kanban*; Ohno’s Toyota Production System for the original signal card; Hermes Agent docs, “Kanban and Goals,” for the agent use. Definitions also match the course glossary.`,
      basis_zh: `Kniberg & Skarin《Kanban and Scrum》（看板 = 可视化工作流、限制在制品、衡量交付周期）；Anderson《Kanban》；大野耐一的丰田生产方式（信号卡的起源）；智能体用法见 Hermes Agent 文档“Kanban and Goals”。定义也与课程词汇表一致。`,
      links: [{ t: 'Kniberg & Skarin — Kanban and Scrum', u: 'https://www.infoq.com/minibooks/kanban-scrum-minibook/' }, { t: 'Hermes Agent — Kanban and Goals', u: 'https://hermes-agent.nousresearch.com/docs/user-guide/features/kanban' }],
      rel: ['5.2', '6.2'],
      kid_en: `Imagine your class is making a giant poster together. On the wall there are four sticky-note columns: “To do”, “Doing”, “Checking”, “Done”. Each sticky note is one job, like “draw the title”. The teacher has one rule: **only two notes may be in “Doing” at a time** — so nobody starts five things and finishes none. When a job is done, the empty spot pulls the next note in. That wall is a **Kanban board**, and the “only two” rule is its **WIP limit**.`,
      kid_zh: `想象全班一起做一张大海报。墙上贴了四列便利贴：“要做”“在做”“检查”“做完”。每张便利贴是一件活，比如“画标题”。老师只定了一条规矩：**“在做”那一列最多只能放两张**——这样就没人同时开五件事、一件也做不完。做完一件，空出的位置才把下一张便利贴“拉”进来。这面墙就是**看板**，“最多两张”就是它的 **WIP 上限**。`,
      steps: [
        { en: 'Look at the four columns. Each one is a “stage” a job passes through, left to right.', zh: '先看四列。每一列是一件工作要经过的一个“阶段”，从左往右走。', hi: [] },
        { en: 'Each small block is one card = one job. Press N to try pushing a new job into DOING.', zh: '每个小方块是一张卡 = 一件工作。按 N，试着把新工作塞进“进行中”。', hi: [] },
        { en: 'See the lights blink? DOING already has 2 cards — the WIP limit says “no more”. That is the rule!', zh: '看到灯在闪了吗？“进行中”已经有 2 张——WIP 上限说“不能再多了”。这就是规则！', hi: [] },
        { en: 'Now press space: one review card finishes, a slot opens, and the board PULLS the next card forward by itself.', zh: '现在按空格：完成一张审查卡，空出一个位置，看板自己就把下一张卡“拉”过来了。', hi: [] },
        { en: 'So a board tracks: what is waiting, what is being worked on, what is stuck, and what is done.', zh: '所以看板能追踪：哪些在等、哪些在做、哪些卡住了、哪些做完了。', hi: [] }
      ],
      hook_en: 'Columns = states, cards = work, WIP limit = the rule. Stop starting, start finishing.',
      hook_zh: '列 = 状态，卡片 = 工作，WIP 上限 = 规则。少开新头，多做完成。',
      trap_en: 'A to-do list with columns is not quite Kanban — mention the WIP limit / pull, which is what the sources say defines it.',
      trap_zh: '分了列的待办清单还不算真正的看板——要提到 WIP 上限 / 拉动，这是资料里定义看板的关键。'
    },
    {
      id: '5.2',
      lec_open_en: "Ask: when you have ten things to do, what do you do so you don't forget number seven?",
      lec_open_zh: "先问：你手上有十件事要做时，你会怎么做，才不会忘了第七件？",
      lec_why_en: "Ever walked into a room and forgotten why you came in? Agents do that too — after hours of work, the start of the conversation gets squeezed out of memory. The cure is the same as for humans: write it down where you'll see it again.\n\nAn agent has the same problem as you, only worse. Its working memory is the [[c5_context]] — and it fills up and gets compressed on long tasks. If the request only lives 'in its head', it drifts.\n\nSo the agent writes the request down as a [[c5_plan]]: a checklist in a file (plan.md, a todo tool, a board). Why does that help? Because **the plan lives outside the context window**: the agent re-reads it every turn, ticks steps off, and knows what's next even after hours of work.\n\nAnd it helps *you*: a written plan is something you can read and correct **before** the work happens. Vague requests become verifiable steps — and the agent can't quietly claim 'done' while boxes are still empty.",
      lec_why_zh: "你有没有走进一个房间，突然忘了自己进来干嘛？智能体也会——干了几个小时，对话开头的内容会被挤出记忆。解药和人一样：写下来，放在你会再看到的地方。\n\n智能体和你有同样的问题，只是更严重。它的工作记忆是[[c5_context]]——长任务里会被塞满、被压缩。请求如果只存在它“脑子里”，就会跑偏。\n\n所以智能体把请求写成[[c5_plan]]：放在文件里的清单（plan.md、待办工具、看板）。为什么有用？因为**计划存在上下文窗口之外**：智能体每一轮都重新读它、打勾，就算干了几个小时也知道下一步是什么。\n\n这对**你**也有用：写下来的计划，你可以在工作开始**之前**读、改。模糊的请求变成可检查的步骤——框还空着的时候，智能体也没法偷偷说“做完了”。",
      lec_trap_en: "Students say 'the agent just remembers.' Tempting, because chat feels continuous — but long tasks overflow memory, which is exactly why the plan is written down.",
      lec_trap_zh: "学生会说“智能体自己记得”。聊天感觉是连续的，所以很容易这么想——但长任务会撑爆记忆，正因为如此计划才要写下来。",
      lec_ask_en: "Ask: 'Why is a checklist better than the agent's memory for a 3-hour task?' — Listen for: it's outside the context window, re-read every turn, and visible to the human.",
      lec_ask_zh: "问：“三小时的任务，为什么清单比智能体的记忆可靠？”——好的回答：它在上下文窗口之外，每轮重读，而且人能看到。",
      lec_bridge_en: "If the plan lives in a file, the next question is: who owns your files? That's Obsidian and 'file over app'.",
      lec_bridge_zh: "既然计划存在文件里，下一个问题就是：你的文件归谁？这就是 Obsidian 和“文件优先于应用”。",
     
      t_en: 'How an agent holds a request', t_zh: '智能体如何“拿住”一个请求',
      q_en: 'How can an agent keep track of a request (a checklist, a board, a plan)? Pick one and describe how it helps.',
      q_zh: '智能体可以怎样追踪一个请求（清单、看板、计划）？选一种，说明它如何帮助智能体。',
      fig() {
        let s = '';
        // request bubble
        s += `<g id="s52-req" class="part">` + F.rect(30, 40, 200, 70, { fill: F.C.blueF, stroke: F.C.blue, rx: 10, note: { en: 'One big, fuzzy request from a person.', zh: '人提出的一个又大又模糊的请求。' } });
        s += F.text(130, 64, '“Build me a study', { cls: 'mono', color: F.C.blue }) + F.text(130, 82, 'site for my midterm”', { cls: 'mono', color: F.C.blue });
        s += F.text(130, 132, 'REQUEST', { cls: 'lt', color: F.C.blue }) + F.sub(130, 148, '请求', { anchor: 'middle' }) + `</g>`;
        s += F.arrow(236, 75, 286, 75);
        // checklist file
        const X = 290, Y = 30;
        let c = F.rect(X, Y, 250, 290, { fill: '#fff', rx: 4 });
        c += `<path d="M${X + 220},${Y} l30,30 h-30 z" fill="#f3f2ee" stroke="${F.C.ink}" stroke-width="1"/>`;
        c += F.text(X + 14, Y + 22, 'plan.md', { anchor: 'start', cls: 'mono', color: F.C.mute });
        const items = [['x', 'Read exam PDF'], ['x', 'Collect course sources'], ['x', 'Outline 44 questions'], ['>', 'Write answers 4.1–4.5'], [' ', 'Draw figures'], [' ', 'Check every answer'], [' ', 'Publish + share link']];
        items.forEach(([m, t], i) => {
          const y = Y + 52 + i * 33, col = m === 'x' ? F.C.green : m === '>' ? F.C.mag : F.C.ink;
          c += `<rect x="${X + 16}" y="${y - 11}" width="14" height="14" rx="2" fill="${m === 'x' ? F.C.greenF : m === '>' ? F.C.magF : '#fff'}" stroke="${col}"/>`;
          if (m === 'x') c += F.path(`M${X + 19},${y - 4} l3,4 l6,-8`, { stroke: F.C.green, sw: 1.6 });
          if (m === '>') c += `<circle cx="${X + 23}" cy="${y - 4}" r="3" fill="${F.C.mag}"/>`;
          c += F.text(X + 40, y, t, { anchor: 'start', cls: 'mono', color: m === 'x' ? F.C.mute : col });
        });
        s += F.g(c, { tip: 'c5_plan' });
        // loop on right
        const lx = 640;
        const loop = [['READ PLAN', '读计划'], ['DO NEXT STEP', '做下一步'], ['CHECK RESULT', '检查结果'], ['TICK + UPDATE', '打勾并更新']];
        s += `<g id="s52-loop" class="part">`;
        loop.forEach(([e, z], i) => {
          const y = 50 + i * 72;
          s += F.rect(lx - 75, y, 150, 46, { fill: i === 1 ? F.C.magF : '#fff', stroke: i === 1 ? F.C.mag : F.C.ink, rx: 23 });
          s += F.text(lx, y + 20, e, { cls: 'tiny', color: i === 1 ? F.C.mag : F.C.ink }) + F.sub(lx, y + 36, z, { anchor: 'middle' });
          if (i < 3) s += F.arrow(lx, y + 48, lx, y + 70);
        });
        s += F.path(`M${lx + 76},${50 + 3 * 72 + 23} C${lx + 120},${50 + 3 * 72} ${lx + 120},${73} ${lx + 78},${73}`, { stroke: F.C.mag, dash: '4 3', arrow: true }) + `</g>`;
        s += F.path(`M${X + 252},${Y + 150} H${lx - 78}`, { stroke: F.C.mute, dash: '3 3' });
        s += F.g(F.text(155, 300, 'lives OUTSIDE the context window', { cls: 'tiny', color: F.C.mute }) + F.sub(155, 316, '存在于上下文窗口之外', { anchor: 'middle' }), { tip: 'c5_context' });
        return F.svg(760, 340, s, { label: 'agent keeping a request as a checklist plan' });
      },
      cap_en: 'A request becomes a written checklist the agent re-reads every turn: done (green), now (magenta), next (empty). The plan is its memory and its progress bar.',
      cap_zh: '一个请求变成一份智能体每一轮都会重读的书面清单：已完成（绿）、正在做（洋红）、待做（空）。计划既是它的记忆，也是它的进度条。',
      a_en: `**I pick the checklist / plan** ([[c5_plan]]).

Before acting, the agent breaks the request into an ordered list of concrete steps and writes it down — a todo list in its interface or a \`plan.md\` file. Then it works in a loop: read the plan → do the next step → check the result → tick the box and update the plan (adding steps it discovered). It helps because:
- **Memory outside the model.** A model only “remembers” what fits in its [[c5_context]]. On a long task early details fall away; a written plan can always be re-read, even in a new session or by another agent.
- **Decomposition.** One vague request becomes small steps the model can actually complete and verify one at a time.
- **Nothing gets dropped.** Every part of the request has a line; the agent can’t declare “done” while boxes are empty.
- **Visibility for the human.** You can see where it is, catch a wrong plan *before* the work is done, and step in — the plan is an interface for oversight.
- **Recovery.** If something fails, the agent knows exactly which step to retry.

(A [[c5_kanban]] does the same for many parallel tasks with status columns — as in [[c5_hermes_kb]].)`,
      a_zh: `**我选择清单 / 计划**（[[c5_plan]]）。

在行动之前，智能体把请求拆成一串有顺序的具体步骤并写下来——界面里的待办清单，或一个 \`plan.md\` 文件。然后它循环工作：读计划 → 做下一步 → 检查结果 → 打勾并更新计划（补上新发现的步骤）。它的帮助在于：
- **模型之外的记忆。**模型只“记得”放得进[[c5_context]]的东西。长任务中早期细节会丢失；写下来的计划随时可以重读，换一个会话、换一个智能体也行。
- **拆解。**一个模糊的请求变成模型真正能逐一完成、逐一验证的小步骤。
- **不遗漏。**请求的每一部分都有一行；还有空框时，智能体不能宣布“完成”。
- **对人可见。**你能看到它进行到哪，*在*工作完成*之前*就发现计划错了并介入——计划是一种监督界面。
- **便于恢复。**出错时，智能体清楚该重试哪一步。

（[[c5_kanban]]对许多并行任务起同样的作用，用状态列来管理——例如[[c5_hermes_kb]]。）`,
      short_en: `I pick the **plan / checklist**. The agent breaks the request into ordered steps and **writes them down** (a todo list or plan.md), then loops: read the plan → do the next step → check → tick it off and update. It helps because the plan is **memory outside the context window** (nothing is forgotten on a long task), it decomposes a vague request into verifiable steps, the agent can’t claim “done” with boxes still empty, and the human can see and correct the plan before the work happens.`,
      short_zh: `我选**计划 / 清单**。智能体把请求拆成有顺序的步骤并**写下来**（待办清单或 plan.md），然后循环：读计划 → 做下一步 → 检查 → 打勾并更新。它的帮助在于：计划是**上下文窗口之外的记忆**（长任务不会遗忘），把模糊请求拆成可验证的步骤，还有空框时智能体不能宣布“完成”，而且人能在工作发生之前看到并纠正计划。`,
      basis_en: `Course Class 5 framing: productivity structures (plans, boards) act as a harness for agents. The plan-as-artifact idea follows spec-driven development notes (plan.md = “how”) and Agno’s description of the context window as the agent’s only knowledge at Level 1. Lecture slides were not available; this follows the course readings and glossary.`,
      basis_zh: `第 5 课的框架：计划、看板等生产力结构就是智能体的“挽具”。“计划是一份文件”的说法来自规格驱动开发的资料（plan.md = “怎么做”），以及 Agno 把上下文窗口描述为 1 级智能体唯一知识来源。没有讲义原件；本答案依据课程读物与词汇表。`,
      links: [{ t: 'Anthropic — Building Effective AI Agents', u: 'https://www.anthropic.com/engineering/building-effective-agents' }],
      rel: ['5.1', '6.1', '6.2'],
      kid_en: `Your mom says: “Clean your room.” That is huge and fuzzy, so you grab a paper and write a checklist: make the bed, put clothes away, take out the trash. Then you do one line, tick it, look at the list again, do the next. Even if your friend calls and you forget where you were, the list remembers for you — and mom can peek at it to see how far you got. An AI agent does the same: it turns a request into a **written plan** and ticks it off step by step.`,
      kid_zh: `妈妈说：“把房间收拾干净。”这件事又大又模糊，所以你拿张纸写了个清单：叠被子、把衣服收好、倒垃圾。然后做一行、打个勾、再看一眼清单、做下一行。就算中途朋友打电话来、你忘了做到哪，清单也替你记着——妈妈也可以瞄一眼，看你做到哪一步了。AI 智能体也一样：它把请求变成一份**写下来的计划**，一步一步打勾完成。`,
      steps: [
        { en: 'It starts with one big, fuzzy request from a person.', zh: '一开始，是人提出的一个又大又模糊的请求。', hi: ['s52-req'] },
        { en: 'The agent writes it down as a checklist: green = done, pink = doing now, empty = still to do.', zh: '智能体把它写成一份清单：绿色 = 做完，粉色 = 正在做，空框 = 还没做。', hi: ['c5_plan'] },
        { en: 'Then it goes round and round this loop: read the plan, do the next step, check, tick it off.', zh: '然后它一圈圈地转这个循环：读计划、做下一步、检查、打勾。', hi: ['s52-loop'] },
        { en: 'The list is written OUTSIDE the AI’s short memory, so on a long job nothing gets forgotten.', zh: '这份清单写在 AI 短暂的记忆“之外”，所以活儿再长也不会忘。', hi: ['c5_context'] }
      ],
      hook_en: 'The plan is the agent’s memory that doesn’t fade and the human’s window into what it is doing.',
      hook_zh: '计划是智能体不会遗忘的记忆，也是人观察它在做什么的窗口。',
      trap_en: 'The question says “pick one” — commit to one structure and explain HOW it helps (memory, decomposition, verification, oversight), not just what it is.',
      trap_zh: '题目要求“选一种”——明确选定一种结构，并说明它“如何”帮助（记忆、拆解、验证、监督），而不只是描述它是什么。'
    },
    {
      id: '5.3',
      lec_open_en: "Ask: if your favorite notes app shut down tomorrow, what would happen to five years of your notes?",
      lec_open_zh: "先问：如果你最喜欢的笔记 App 明天关门了，你五年的笔记会怎样？",
      lec_why_en: "A small horror story: people have lost years of notes when an app shut down or changed its export. Steph Ango, who helps make Obsidian, says the quiet part out loud: 'even our app will die someday — so your notes should never depend on it.'\n\nAn Obsidian [[c5_vault]] is just **a folder on your own disk full of plain [[c5_md]] files**. Obsidian is only a lens on that folder — links, graph, search. Delete the app and the notes are still there, readable by any text editor.\n\nWhy does Steph Ango insist on [[c5_foa]]? Because apps are temporary — companies pivot, get sold, shut down — but **files you control outlive any app**. If your notes live in someone's database, the app owns them; if they live in your folder, you do.\n\nAnd there's a new reason it matters: agents can read plain files. A vault is something an agent (via a skill or MCP) can search and write to — **your knowledge becomes usable by your tools without being locked in a platform**.",
      lec_why_zh: "一个小小的恐怖故事：有人因为某个 App 关门或改了导出方式，丢掉了好几年的笔记。参与打造 Obsidian 的 Steph Ango 直接把话挑明：“连我们的 App 有一天也会死——所以你的笔记永远不该依赖它。”\n\nObsidian 的[[c5_vault]]就是**你自己硬盘上的一个文件夹，里面全是纯文本的 [[c5_md]] 文件**。Obsidian 只是看这个文件夹的一副“眼镜”——链接、图谱、搜索。删掉 App，笔记还在，用任何文本编辑器都能打开。\n\n为什么 Steph Ango 坚持[[c5_foa]]？因为应用是暂时的——公司会转型、被收购、关门——但**你自己掌控的文件比任何应用都活得久**。笔记存在别人的数据库里，就归 App；存在你的文件夹里，就归你。\n\n现在还多了一个理由：智能体能读纯文本文件。库是智能体（通过 skill 或 MCP）可以搜索、可以写入的东西——**你的知识能被你的工具使用，却不会被锁在某个平台里**。",
      lec_trap_en: "Students say 'a vault is where Obsidian stores your notes securely.' Tempting because 'vault' sounds like a safe — but it's an ordinary folder; the point is ownership, not lock-up.",
      lec_trap_zh: "学生会说“库是 Obsidian 安全存放笔记的地方”。vault 听起来像保险箱，所以很诱人——但它只是一个普通文件夹；重点是所有权，不是上锁。",
      lec_ask_en: "Ask: 'Who owns your notes in a cloud-only app vs. in a vault — and why?' — Listen for: the app/company vs. you, because the vault is plain files on your disk.",
      lec_ask_zh: "问：“纯云端 App 和 Obsidian 库里的笔记，分别归谁？为什么？”——好的回答：前者归 App/公司，后者归你，因为库是你硬盘上的纯文件。",
      lec_bridge_en: "Once notes are files with links between them, you can see a new shape: the graph.",
      lec_bridge_zh: "当笔记变成彼此相连的文件，你就能看到一种新的形状：图谱。",
     
      t_en: 'Vault / file over app', t_zh: '库 / 文件优先于应用',
      q_en: 'What is an Obsidian vault, and what does "file over app" mean for who owns your notes?',
      q_zh: '什么是 Obsidian 库（vault）？“文件优先于应用（file over app）”对“谁拥有你的笔记”意味着什么？',
      fig() {
        const C = F.C; let s = '';
        const folder = (x, y, w, h, o = {}) => F.path(`M${x},${y + 12} v${h - 12} h${w} v${-h + 4} h${-w * 0.55} l-10,-10 h${-w * 0.45 + 10} z`, { fill: o.fill || '#fff', stroke: o.stroke || C.ink, ...o });
        // ── left: app over file
        s += `<g id="s53-left" class="part">` + F.text(170, 24, 'APP OVER FILE', { cls: 'big', color: C.red }) + F.sub(170, 41, '应用优先：笔记锁在别人的服务器里', { anchor: 'middle' });
        let L = F.rect(50, 64, 240, 130, { rx: 14, fill: '#f6f5f2', dash: '5 4' });
        L += F.text(170, 84, 'COMPANY SERVER · DATABASE', { cls: 'tiny', color: C.mute });
        [[78, 100], [148, 100], [218, 100], [78, 146], [148, 146]].forEach(([x, y]) => { L += F.rect(x, y, 56, 34, { fill: '#fff', rx: 3 }) + F.text(x + 28, y + 17, 'note', { cls: 'tiny', color: C.mute }); });
        L += F.path('M226,160 h24 v18 h-24 z M231,160 v-6 a7,7 0 0 1 14,0 v6', { stroke: C.red, sw: 1.3 });
        s += F.g(L, { note: { en: 'Your notes live in a proprietary database on servers you don’t control, in a format only this app reads.', zh: '笔记存在别人服务器上的私有数据库里，格式只有这个应用读得懂。' } });
        s += F.rect(110, 226, 120, 38, { text: 'THE APP', note: { en: 'The only door to your notes. If it changes, closes or raises its price, the door shuts.', zh: '通往笔记的唯一一扇门。它改版、倒闭或涨价，门就关上了。' } });
        s += F.line(170, 194, 170, 226, { sw: 1.2 });
        s += F.path('M156,203 l28,16 M184,203 l-28,16', { stroke: C.red, sw: 2 });
        s += F.text(170, 286, 'app shuts down → notes locked away', { cls: 'tiny', color: C.red }) + F.sub(170, 302, '应用一停，笔记就拿不回来', { anchor: 'middle' }) + `</g>`;
        s += F.line(380, 20, 380, 310, { dash: '3 4', stroke: C.mute, sw: 0.8 });
        // ── right: file over app
        s += F.text(575, 24, 'FILE OVER APP', { cls: 'big', color: C.green }) + F.sub(575, 41, '文件优先：笔记就是你硬盘上的文件', { anchor: 'middle' });
        let R = folder(500, 126, 150, 104, { fill: C.greenF, stroke: C.green });
        R += F.text(575, 150, '~/Notes  (THE VAULT)', { cls: 'tiny', color: C.green });
        [['a.md', 512, 166], ['b.md', 552, 166], ['c.md', 592, 166], ['.obsidian', 512, 198]].forEach(([n, x, y]) => {
          const w = n === '.obsidian' ? 76 : 34;
          R += F.rect(x, y, w, 22, { fill: '#fff', stroke: n === '.obsidian' ? C.mute : C.green, dash: n === '.obsidian' ? '3 2' : null, rx: 2 }) + F.text(x + w / 2, y + 11, n, { cls: 'tiny', color: n === '.obsidian' ? C.mute : C.ink });
        });
        s += F.g(R, { tip: 'c5_vault' });
        const apps = [['OBSIDIAN', 418, 70, true], ['VS CODE', 650, 70], ['TEXT EDITOR', 418, 262], ['AI AGENT · MCP', 640, 262]];
        s += `<g id="s53-apps" class="part">`;
        apps.forEach(([n, x, y, gone]) => {
          const w = n.length * 7.6 + 22, cx = x + w / 2;
          s += F.line(cx, y + (y < 150 ? 32 : 0), Math.max(512, Math.min(638, cx)), y < 150 ? 120 : 230, { stroke: gone ? C.mute : C.green, dash: gone ? '4 3' : null, sw: 1 });
          s += F.rect(x, y, w, 32, { text: n, dash: gone ? '4 3' : null, stroke: gone ? C.mute : C.ink, tcolor: gone ? C.mute : C.ink,
            note: gone ? { en: 'Remove any app — even Obsidian — and every file is still there, still readable.', zh: '拿掉任何一个应用——就算是 Obsidian——文件都还在，照样能读。' } : { en: 'Any tool that reads plain text can open the same notes.', zh: '任何能读纯文本的工具都能打开同样的笔记。' } });
        });
        s += F.text(418, 62, 'remove it → files stay', { cls: 'tiny', color: C.mute, anchor: 'start' }) + `</g>`;
        s += F.g(F.text(575, 318, 'apps are replaceable · the files are yours', { cls: 'tiny', color: C.green }) + F.sub(575, 334, '应用可替换 · 文件归你', { anchor: 'middle' }), { tip: 'c5_foa' });
        return F.svg(760, 345, s, { label: 'app over file versus file over app' });
      },
      cap_en: 'Left: the notes sit in a company’s database and the app is the only door, so when the app goes, so do they. Right: the vault is a folder of plain .md files on your own disk; any app can open it, and removing one (even Obsidian) loses nothing.',
      cap_zh: '左：笔记存在公司的数据库里，应用是唯一的门，应用没了，笔记也跟着没了。右：库就是你硬盘上一个装着 .md 纯文本的文件夹；任何应用都能打开，拿掉其中一个（就算是 Obsidian）也什么都不丢。',
      a_en: `An [[c5_vault]] is **just a folder on your own computer** that Obsidian opens: every note is a plain-text [[c5_md]] file, notes connect with [[c5_link|internal links]], and Obsidian keeps its own settings in a hidden \`.obsidian\` folder. There is no proprietary database and no required server — you can open the same files in any text editor, sync them however you like, or point an AI agent at them.

**[[c5_foa]]** is Steph Ango’s (Obsidian’s CEO) principle: *apps are ephemeral; files have a chance to last.* Most digital artifacts live on servers and databases the maker doesn’t control; if the company changes, closes or locks the format, your work goes with it. So if you want what you make to endure, it should be a **file you control, in an open, easy-to-read format.**

What it means for ownership: **you own your notes, not the app.** The app is a replaceable tool for reading and writing files. You can leave Obsidian tomorrow and keep everything, readable in 30 years. This is also why a vault is good for agents: the knowledge is in open files that any tool — including an agent through MCP — can read.`,
      a_zh: `[[c5_vault]]**就是你自己电脑上的一个文件夹**，由 Obsidian 打开：每条笔记都是一个纯文本的[[c5_md]]文件，笔记之间用[[c5_link|内部链接]]相连，Obsidian 把它自己的设置放在隐藏的 \`.obsidian\` 文件夹里。没有私有数据库，也不必依赖服务器——你可以用任何文本编辑器打开同样的文件、用任何方式同步，或者让 AI 智能体去读取它们。

**[[c5_foa]]**是 Steph Ango（Obsidian 的 CEO）提出的原则：*应用是短暂的，文件才有机会长存。*大多数数字作品存放在创作者无法掌控的服务器和数据库里；一旦公司改版、倒闭或锁定格式，你的作品也会随之消失。所以，想让你创造的东西长久留存，它就应该是**你掌控的文件，采用开放、易读的格式。**

对所有权的意义：**笔记属于你，而不属于应用。**应用只是一个可替换的、用来读写文件的工具。你明天就可以离开 Obsidian，而保留一切，30 年后依然可读。这也是 vault 适合智能体的原因：知识存在开放的文件里，任何工具——包括通过 MCP 接入的智能体——都能读取。`,
      short_en: `An Obsidian vault is **just a folder on your own computer** of plain-text Markdown (.md) files (plus a hidden .obsidian settings folder) — no proprietary database. Steph Ango’s **“file over app”**: apps are ephemeral, so lasting work must be **files you control, in formats that are easy to retrieve and read**. So *you* own your notes, not the app or the company: you can switch apps, sync any way, or let an agent read them, and they stay readable for decades.`,
      short_zh: `Obsidian 库**就是你自己电脑上的一个文件夹**，里面是纯文本 Markdown（.md）文件（外加一个隐藏的 .obsidian 设置文件夹）——没有私有数据库。Steph Ango 的**“文件优先于应用”**：应用是短暂的，所以想长久保存，就必须是**你掌控的文件，采用易于读取的格式**。因此笔记属于*你*，而不是应用或公司：你可以换应用、随意同步、让智能体读取，几十年后依然可读。`,
      basis_en: `Checked against Steph Ango, “File over app” (stephango.com): durable artifacts must be “files you can control, in formats that are easy to retrieve and read”; tool makers should accept their software is temporary. Vault structure per Obsidian’s help pages.`,
      basis_zh: `已对照 Steph Ango 的《File over app》（stephango.com）：要长久保存，必须是“你能掌控的文件，采用易于读取的格式”；工具开发者应接受软件是暂时的。库的结构依据 Obsidian 帮助文档。`,
      links: [{ t: 'Steph Ango — File over app', u: 'https://stephango.com/file-over-app' }, { t: 'Obsidian help — links', u: 'https://obsidian.md/help/links' }],
      rel: ['1.2', '5.4', '6.4'],
      kid_en: `Imagine writing your diary inside a game. If the game shuts down, your diary is gone forever — you could only read it through the game. Now imagine writing it in a normal notebook that sits on your own shelf. You can read it with any lamp, in any room, in 30 years. An **Obsidian vault** is that notebook: just a folder of plain text files on your computer. **“File over app”** means: keep your work as files you own, so no app can lock it away.`,
      kid_zh: `想象你把日记写在一个游戏里面。游戏一关服，日记就永远没了——你只能通过那个游戏才能看到它。再想象你把日记写在一本普通本子上，放在自己的书架上：在哪个房间、用哪盏灯都能读，30 年后也还能看。**Obsidian 库**就是那本本子：只是你电脑上一个装着纯文本文件的文件夹。**“文件优先于应用”**的意思是：把作品存成你自己拥有的文件，这样没有任何应用能把它锁起来。`,
      steps: [
        { en: 'Left side: your notes are locked in a company’s database. The app is the only door.', zh: '左边：笔记锁在一家公司的数据库里，应用是唯一的那扇门。', hi: ['s53-left'] },
        { en: 'Right side: the vault is just a folder on YOUR computer, full of simple .md text files.', zh: '右边：库只是你自己电脑上的一个文件夹，里面装满简单的 .md 文本文件。', hi: ['c5_vault'] },
        { en: 'Any app can open those files. Remove one app — even Obsidian — and the files are still there.', zh: '任何应用都能打开这些文件。拿掉一个应用——就算是 Obsidian——文件也还在。', hi: ['s53-apps'] },
        { en: 'That is “file over app”: apps come and go, the files are yours.', zh: '这就是“文件优先于应用”：应用来来去去，文件是你的。', hi: ['c5_foa'] }
      ],
      hook_en: 'Vault = a folder of .md files you own. File over app = the files outlive the app, so you — not the company — own your notes.',
      hook_zh: '库 = 你拥有的一文件夹 .md 文件。文件优先于应用 = 文件比应用活得久，所以拥有笔记的是你，而不是公司。',
      trap_en: 'Don’t describe Obsidian’s features. The point is ownership and durability: local, plain-text, app-independent files.',
      trap_zh: '不要去介绍 Obsidian 的功能。重点是所有权与持久性：本地、纯文本、不依赖应用的文件。'
    },
    {
      id: '5.4',
      lec_open_en: "Ask: you file a note about 'tokens' in the Class 3 folder. Where does it go if it's also about cost and about privacy?",
      lec_open_zh: "先问：一条关于“token”的笔记放进了第 3 课的文件夹。如果它同时也和费用、隐私有关，它该放哪？",
      lec_why_en: "Detective-board moment: in crime shows, the breakthrough comes when someone pins photos to a wall and connects them with red string. Folders are the filing cabinet; the graph is the red string — and the case is cracked by the connections.\n\nA folder answers one question: **where is it filed?** Each note lives in exactly one place — a hierarchy. But ideas don't live in one place; they connect. A [[c5_kg]] (Obsidian's [[c5_graphview]], Graphify) shows **how notes relate**: every link is a line, every note a dot.\n\nWhy is that more than a pretty picture? Because the graph reveals what the folder hides: **hubs** (ideas many others depend on), **clusters** (topics you didn't know you were building), and **orphans** (notes nothing connects to). Graphify can even infer links you didn't write.\n\nThis is Wright's Class 2 idea coming back: the folder is a hierarchy, the graph is a network — and you need both. For an agent, a graph is a map it can walk: 'what connects to this?' instead of searching by keyword.",
      lec_why_zh: "侦探墙时刻：刑侦剧里，突破总发生在有人把照片钉到墙上、用红线连起来的那一刻。文件夹是档案柜，图谱是那根红线——破案靠的是连接。\n\n文件夹只回答一个问题：**它放在哪？**每条笔记只能在一个地方——这是层级。但想法不是只住在一个地方，它们彼此相连。[[c5_kg]]（Obsidian 的[[c5_graphview]]、Graphify）展示的是**笔记之间的关系**：每个链接是一条线，每条笔记是一个点。\n\n为什么这不只是一张好看的图？因为图谱揭示了文件夹藏起来的东西：**枢纽**（很多想法都依赖它）、**聚类**（你不知不觉在建的主题）、**孤岛**（没有任何连接的笔记）。Graphify 甚至能推断出你没写的链接。\n\n这正是第 2 课赖特的观点回来了：文件夹是层级，图谱是网络——两者都需要。对智能体来说，图谱是一张可以走的地图：问“什么和这个相连？”，而不是靠关键词搜。",
      lec_trap_en: "Students say 'the graph is just a visualization of the folders.' Tempting, but it's built from links, not folders — two notes in different folders can be neighbors.",
      lec_trap_zh: "学生会说“图谱只是文件夹的可视化”。很诱人，但图谱是由链接而不是文件夹构成的——两个不同文件夹里的笔记可以是邻居。",
      lec_ask_en: "Ask: 'What's one thing a graph shows that a folder can't?' — Listen for: connections across folders, hubs, clusters, orphan notes.",
      lec_ask_zh: "问：“说一样图谱能显示、文件夹显示不了的东西。”——好的回答：跨文件夹的连接、枢纽、聚类、孤立的笔记。",
      lec_bridge_en: "Graphs organize what we know. The last question of Class 5: how do we judge what we make — and should a model do the judging?",
      lec_bridge_zh: "图谱整理我们知道的东西。第 5 课最后一题：我们怎么评判自己做的东西——又该不该让模型来评判？",
     
      t_en: 'Knowledge graph', t_zh: '知识图谱',
      q_en: 'What does a graph of your notes show that a folder does not?', q_zh: '笔记的关系图能显示哪些文件夹显示不了的东西？',
      src: 'Obsidian graph; Graphify',
      fig() {
        let s = '';
        // left: folder tree
        s += F.text(30, 30, 'FOLDER · ONE PLACE PER NOTE', { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.sub(30, 46, '文件夹：每条笔记只能放一个地方');
        const tree = [[0, 'Class 1/'], [1, 'surveillance.md'], [1, 'url.md'], [0, 'Class 3/'], [1, 'tokens.md'], [1, 'labor.md'], [0, 'Class 7/'], [1, 'training-data.md'], [1, 'local-models.md']];
        let t = '';
        tree.forEach(([lv, n], i) => {
          const y = 76 + i * 28, x = 40 + lv * 26;
          if (lv) t += F.path(`M${x - 16},${y - 22} V${y - 4} H${x - 4}`, { stroke: F.C.mute, sw: 0.8 });
          t += F.text(x, y, (lv ? '' : '▸ ') + n, { anchor: 'start', cls: 'mono', color: lv ? F.C.ink : F.C.mute });
        });
        s += `<g id="s54-tree" class="part">` + F.g(t, { note: { en: 'A hierarchy: each note sits in exactly one branch. Relations across branches are invisible.', zh: '层级结构：每条笔记只属于一个分支，跨分支的关系是看不见的。' } }) + `</g>`;
        s += F.line(300, 30, 300, 330, { stroke: '#ccc', dash: '3 4' });
        // right: graph
        s += F.text(330, 30, 'GRAPH · LINKS BETWEEN NOTES', { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.sub(330, 46, '图谱：笔记之间的链接');
        const N = {
          surv: [420, 110, 'surveillance', F.C.red], labor: [400, 220, 'labor', F.C.red], data: [520, 170, 'training-data', F.C.mag],
          tok: [640, 110, 'tokens', F.C.blue], local: [660, 240, 'local-models', F.C.blue], url: [500, 290, 'url', F.C.green]
        };
        const E = [['surv', 'labor', 0], ['surv', 'data', 0], ['labor', 'data', 1], ['data', 'tok', 0], ['data', 'local', 0], ['tok', 'local', 0], ['surv', 'url', 0], ['url', 'data', 1]];
        let g = '';
        E.forEach(([a, b, inf]) => { const A = N[a], B = N[b]; g += F.line(A[0], A[1], B[0], B[1], { stroke: inf ? F.C.mute : F.C.ink, sw: inf ? 0.9 : 1.1, dash: inf ? '4 3' : null }); });
        s += F.g(g, { tip: 'c5_provenance' });
        // communities halos
        s += F.g(`<ellipse cx="412" cy="165" rx="52" ry="88" fill="${F.C.redF}" opacity=".55"/>` + `<ellipse cx="650" cy="175" rx="50" ry="100" fill="${F.C.blueF}" opacity=".7"/>`, { tip: 'c5_community' });
        Object.values(N).forEach(([x, y, n, c]) => {
          const hub = n === 'training-data';
          if (hub) s += `<g id="s54-hub" class="part">`;
          s += F.circle(x, y, hub ? 15 : 9, { fill: hub ? F.C.magF : '#fff', stroke: c, tip: hub ? null : 'c5_graphview', note: hub ? { en: 'A hub: the note most things connect to — invisible in the folder tree, where it hides in Class 7.', zh: '枢纽节点：大多数笔记都连到它——在文件夹树里却看不出来，它被藏在 Class 7 里。' } : null });
          s += F.text(x, y + (hub ? 32 : 24), n, { cls: 'tiny' });
          if (hub) s += `</g>`;
        });
        s += F.text(530, 336, '— stated link   - - inferred link', { cls: 'tiny', color: F.C.mute });
        return F.svg(760, 350, s, { label: 'folder tree versus knowledge graph' });
      },
      cap_en: 'The same six notes. The folder tree shows where they are filed; the graph shows how they relate — a hub across classes, two clusters, and links a tool inferred (dashed).',
      cap_zh: '同样六条笔记。文件夹树显示它们被放在哪里；图谱显示它们彼此如何关联——一个跨课程的枢纽、两个聚类，以及工具推断出的链接（虚线）。',
      a_en: `A folder is a **hierarchy**: every note lives in exactly one place, so it shows *where* something is filed, not *how it relates* to anything else. A graph is a **network**: notes are nodes and [[c5_link|links]] are edges, so a note can belong to many contexts at once.

What the graph shows that a folder doesn’t:
- **Connections across folders** — that a note in “Class 1” and a note in “Class 7” talk about the same idea.
- **Hubs** — the ideas many notes point to (often the important ones you didn’t realize were central).
- **Clusters / [[c5_community|communities]]** — themes that emerge from the links rather than from the names you gave folders. Graphify finds these with the Leiden algorithm.
- **Orphans and gaps** — notes with no links, or two clusters with no bridge between them.
- **Paths** — how you get from one idea to another.

Obsidian’s [[c5_graphview]] draws your own links as circles and lines; Graphify goes further and builds a queryable [[c5_kg]] from notes, code and papers, marking which relations were stated (EXTRACTED) and which were guessed (INFERRED) — see [[c5_provenance]]. For an agent, that means it can *query relationships* instead of grepping through folders.`,
      a_zh: `文件夹是一种**层级结构**：每条笔记只放在唯一一个位置，所以它显示的是东西被放在*哪里*，而不是它和其他东西*有什么关系*。图谱是一种**网络**：笔记是节点，[[c5_link|链接]]是边，所以一条笔记可以同时属于多个情境。

图谱显示而文件夹显示不了的：
- **跨文件夹的联系**——“Class 1”里的一条笔记和“Class 7”里的一条笔记在讲同一个概念。
- **枢纽**——很多笔记都指向的那个想法（常常是你没意识到的核心概念）。
- **聚类 / [[c5_community|社群]]**——从链接中自己“长”出来的主题，而不是你给文件夹起的名字。Graphify 用 Leiden 算法找出它们。
- **孤立点与缺口**——没有任何链接的笔记，或两个聚类之间缺少桥梁。
- **路径**——从一个想法走到另一个想法的路线。

Obsidian 的[[c5_graphview]]把你自己写的链接画成圆点和线；Graphify 更进一步，从笔记、代码和论文中建立可查询的[[c5_kg]]，并标注哪些关系是原文明确写的（EXTRACTED）、哪些是推断的（INFERRED）——见[[c5_provenance]]。对智能体而言，这意味着它可以*查询关系*，而不是在文件夹里逐字搜索。`,
      short_en: `A folder is a **hierarchy** — each note sits in one place, so it shows only *where* a note is filed. A graph is a **network** of notes (nodes) and links (edges), so it shows *how ideas relate*: **connections across folders, hubs** that many notes point to, **clusters** of related notes (Graphify finds “communities” with the Leiden algorithm), orphan notes and gaps. Tools like Graphify make it queryable and mark which links were stated vs. inferred.`,
      short_zh: `文件夹是**层级结构**——每条笔记只在一个位置，所以只显示它被放在*哪里*。图谱是由笔记（节点）和链接（边）组成的**网络**，显示的是*想法之间怎样关联*：**跨文件夹的联系、很多笔记都指向的枢纽**、相关笔记形成的**聚类**（Graphify 用 Leiden 算法找出“社群”）、孤立笔记与缺口。Graphify 这类工具还能让它可查询，并标出哪些链接是原文写明的、哪些是推断的。`,
      basis_en: `Obsidian help: the Graph view draws notes as circles and links as lines. Graphify (graphify.net): a queryable knowledge graph with Leiden community detection and EXTRACTED vs. INFERRED edges — both definitions match the course glossary. The hierarchy/network contrast is Wright’s (Class 2).`,
      basis_zh: `Obsidian 帮助文档：关系图谱把笔记画成圆点、链接画成线。Graphify（graphify.net）：可查询的知识图谱，用 Leiden 算法做社群检测，并区分 EXTRACTED 与 INFERRED 的边——两者都与课程词汇表一致。“层级 vs 网络”的对比来自第 2 课的 Wright。`,
      links: [{ t: 'Graphify', u: 'https://graphify.net/' }, { t: 'Obsidian help', u: 'https://obsidian.md/help/links' }],
      rel: ['2.2', '2.5', '5.3'],
      kid_en: `Your school bag has folders: Math, Science, History. Each worksheet can only go in ONE folder. But what if your science worksheet about volcanoes connects to a history worksheet about Pompeii? The folders can’t show that. Now imagine a map of strings pinned between all your worksheets: you’d see which ones are connected, which one has the most strings (the most important idea), and which sit alone. That string map is a **knowledge graph**.`,
      kid_zh: `你的书包里有几个文件夹：数学、科学、历史。每张作业纸只能放进**一个**文件夹。可是，如果科学课讲火山的那张，和历史课讲庞贝古城的那张其实有关系呢？文件夹显示不出来。现在想象你用毛线把所有作业纸互相连起来：你就能看到哪些有关系、哪张连的线最多（最重要的想法）、哪张孤零零的。这张“毛线图”就是**知识图谱**。`,
      steps: [
        { en: 'Left: a folder tree. Every note lives in exactly one place — like one worksheet in one folder.', zh: '左边：文件夹树。每条笔记只住在一个地方——就像一张作业纸只能放一个文件夹。', hi: ['s54-tree'] },
        { en: 'Right: the same notes as dots. Each line is a link between two notes.', zh: '右边：同样的笔记变成了点，每条线是两条笔记之间的链接。', hi: ['c5_graphview'] },
        { en: 'This big dot has the most lines — a hub. In the folder it was hidden inside “Class 7”!', zh: '这个大点连的线最多——它是枢纽。在文件夹里，它却藏在“Class 7”里看不出来！', hi: ['s54-hub'] },
        { en: 'Colored clouds are groups of notes that stick together — themes the links reveal.', zh: '彩色的云是一群群抱在一起的笔记——是链接自己显出来的主题。', hi: ['c5_community'] },
        { en: 'Dashed lines are links a tool guessed; solid ones you wrote yourself.', zh: '虚线是工具猜出来的链接；实线是你自己写的。', hi: ['c5_provenance'] }
      ],
      hook_en: 'A folder answers “where is it?” A graph answers “what is it connected to?”',
      hook_zh: '文件夹回答“它在哪？”；图谱回答“它和什么相连？”',
      trap_en: 'Use the hierarchy vs. network contrast (it links back to Wright in Class 2), and name at least two concrete things: connections, hubs, clusters, orphans.',
      trap_zh: '用“层级 vs 网络”的对比来答（这和第 2 课 Wright 的内容呼应），并至少说出两样具体的东西：联系、枢纽、聚类、孤立点。'
    },
    {
      id: '5.5',
      lec_open_en: "Ask: if ten judges score the same drawing and get ten different scores, is the drawing the problem — or the judging?",
      lec_open_zh: "先问：十个评委给同一幅画打分，打出十个不同的分数——问题出在画上，还是出在评判上？",
      lec_why_en: "Imagine a talent show where one judge loves singing, one loves dancing and one loves anything with a dog. The scores tell you about the judges, not the acts. That is exactly what happened to the AI judges — until someone handed them the same scoring sheet.\n\nZhang, Han & Ahmed-Kristensen tested exactly this with LLMs judging design ideas. With a plain [[c5_baseline]] prompt ('rate novelty 0–6'), the models **disagreed with each other and with experts** — each used its own private idea of 'creative'.\n\nThen they wrote the [[c5_rubric]] first: definitions of [[c5_novelty]] and [[c5_usefulness]], four yes/no questions for each, and a rule table turning answers into a score. The scores **converged and moved closer to the experts**.\n\nWhy does writing it first work? Because 'creative' is vague, and a vague question gets taste, not judgment. A rubric turns taste into **explicit, shared criteria** — the same reason teachers publish rubrics. And it keeps the human in charge: **you decide what counts**; the model only applies it. Write it after seeing outputs, and you'll just describe whatever the model produced.",
      lec_why_zh: "想象一场选秀：一个评委爱唱歌，一个爱跳舞，还有一个只要有狗就给高分。分数说明的是评委，不是表演。AI 评委当时就是这样——直到有人给了它们同一张评分表。\n\nZhang、Han 和 Ahmed-Kristensen 正是用大模型评判设计创意来测试这个问题。用一个简单的[[c5_baseline]]（“给新颖性打 0–6 分”），模型之间**互相不一致，也和专家不一致**——每个模型都用自己私下理解的“有创意”。\n\n然后他们先写好[[c5_rubric]]：[[c5_novelty]]和[[c5_usefulness]]的定义、各四个是/否问题、再加一张把答案换算成分数的规则表。分数**趋于一致，也更接近专家**。\n\n为什么“先写”有用？因为“有创意”太模糊，模糊的问题得到的是口味，不是判断。评分标准把口味变成**明确、共享的标准**——这和老师公布评分标准是同一个道理。它也让人掌握主导权：**算不算数由你决定**，模型只是执行。看过输出再写标准，你只会照着模型的产出去描述。",
      lec_trap_en: "Students say 'the rubric makes the model smarter.' Tempting, but the model is the same; the rubric makes the question clearer, so the answers become consistent.",
      lec_trap_zh: "学生会说“评分标准让模型变聪明了”。很诱人，但模型没变；是评分标准让问题更清楚，所以答案才变得一致。",
      lec_ask_en: "Ask: 'Why would scores drift if you wrote the rubric after seeing the outputs?' — Listen for: you'd fit the criteria to what you saw; the standard must exist before the work is judged.",
      lec_ask_zh: "问：“看完输出再写评分标准，为什么分数会跑偏？”——好的回答：你会照着看到的东西去定标准；标准必须在评判之前就存在。",
      lec_bridge_en: "Boards, plans, files and rubrics are structures an agent can work inside. Class 6 opens the agent itself.",
      lec_bridge_zh: "看板、计划、文件和评分标准，都是智能体可以在里面干活的结构。第 6 课打开智能体本身。",
     
      t_en: 'Rubric before generation', t_zh: '先写评分标准，再让模型生成',
      q_en: 'Why write the rubric before asking a model to evaluate creative work?',
      q_zh: '为什么要在让模型评价创意作品之前，先写好评分标准（rubric）？',
      src: 'Zhang, Han & Ahmed-Kristensen',
      fig() {
        let s = '';
        const lane = (y, title, zh, col) => F.text(30, y, title, { anchor: 'start', cls: 'lt', color: col }) + F.sub(30, y + 16, zh);
        // baseline lane
        s += lane(40, 'A · BASELINE PROMPT', '基线提示词：只给任务和 7 分量表', F.C.red);
        s += F.rect(30, 66, 140, 54, { text: 'design +\n"rate 0–6"', tcls: 'mono', tip: 'c5_baseline' });
        s += F.arrow(174, 93, 222, 93);
        s += F.rect(226, 66, 110, 54, { text: 'MODEL', tcls: 'lt' });
        s += F.arrow(340, 93, 388, 93);
        // scattered scores
        let sc = '';
        [2, 5, 3, 6, 1, 4, 5, 2, 6, 3].forEach((v, i) => { sc += `<circle cx="${400 + v * 50}" cy="${80 + (i % 3) * 9}" r="5" fill="${F.C.redF}" stroke="${F.C.red}"/>`; });
        s += `<g id="s55-scatter" class="part">` + F.g(sc + F.text(550, 138, 'ten models disagree · far from experts', { cls: 'tiny', color: F.C.red }), { note: { en: 'Each model uses its own private idea of “creative” — scores scatter and drift from expert ratings.', zh: '每个模型都用自己私有的“创意”标准——分数分散，且偏离专家评分。' } }) + `</g>`;
        // axis
        s += F.line(400, 104, 700, 104, { stroke: '#bbb' }) + [0, 1, 2, 3, 4, 5, 6].map(v => F.text(400 + v * 50, 116, String(v), { cls: 'tiny', color: F.C.mute })).join('');
        s += F.line(30, 150, 730, 150, { stroke: '#ccc', dash: '3 4' });
        // rubric lane
        s += lane(180, 'B · RUBRIC WRITTEN FIRST', '评估方案先写好，嵌入提示词', F.C.green);
        const R = [['DEFINITIONS', '新颖性 / 有用性的定义', 'c5_novelty'], ['4 YES/NO · NOVELTY', '新颖性 4 个是/否问题', 'c5_novelty'], ['4 YES/NO · USEFULNESS', '有用性 4 个是/否问题', 'c5_usefulness'], ['RULE TABLE → 0–6', '规则表：答案 → 分数', 'c5_rubric']];
        R.forEach(([e, z, tp], i) => {
          s += F.rect(30, 206 + i * 44, 200, 38, { fill: F.C.greenF, stroke: F.C.green, rx: 4, tip: tp });
          s += F.text(42, 222 + i * 44, e, { anchor: 'start', cls: 'tiny', color: F.C.green }) + F.sub(42, 237 + i * 44, z);
        });
        s += F.arrow(234, 290, 282, 290);
        s += F.rect(286, 263, 110, 54, { text: 'MODEL', tcls: 'lt' });
        s += F.arrow(400, 290, 448, 290);
        let tight = '';
        [4, 4, 5, 4, 4, 4, 5, 4, 4, 4].forEach((v, i) => { tight += `<circle cx="${460 + v * 40 + (i % 4) * 4 - 6}" cy="${276 + (i % 3) * 9}" r="5" fill="${F.C.greenF}" stroke="${F.C.green}"/>`; });
        tight += `<rect x="${460 + 4 * 40 - 14}" y="262" width="56" height="46" rx="6" fill="none" stroke="${F.C.ink}" stroke-dasharray="3 3"/>`;
        s += F.g(tight + F.text(626, 330, 'models agree · closer to experts', { cls: 'tiny', color: F.C.green }), { tip: 'c5_cat', note: { en: 'Explicit criteria → scores cluster (low spread across models) and track the expert ratings more closely.', zh: '标准明确 → 分数集中（各模型间差异小），也更接近专家评分。' } });
        s += F.line(460, 304, 700, 304, { stroke: '#bbb' }) + [0, 1, 2, 3, 4, 5, 6].map(v => F.text(460 + v * 40, 316, String(v), { cls: 'tiny', color: F.C.mute })).join('');
        s += F.text(380, 395, 'the rubric is the success criteria — written BEFORE you see any output', { cls: 'tiny', color: F.C.mag }) + F.sub(380, 411, '评分标准就是成功标准——在看到任何输出之前就写好', { anchor: 'middle' });
        return F.svg(760, 425, s, { label: 'baseline prompt versus rubric-first evaluation' });
      },
      cap_en: 'Same designs, same models. Without a rubric each model scores by its own private taste; with definitions, yes/no questions and a rule table, the scores converge and move toward the experts.',
      cap_zh: '同样的设计、同样的模型。没有评分标准时，每个模型凭自己的“品味”打分；有了定义、是/否问题和规则表，分数趋于一致，也更接近专家。',
      a_en: `Because **“creative” is not self-defining** — and a model asked to judge it will silently invent its own standard. Zhang, Han & Ahmed-Kristensen tested LLMs evaluating design concepts for **[[c5_novelty]]** and **[[c5_usefulness]]**, comparing them with expert ratings (the [[c5_cat]]). They compared:
- a [[c5_baseline]] — just the task, the design goals and a 0–6 scale, so each model relied on its own idea of novelty and usefulness; and
- a structured [[c5_rubric]] written into the prompt — **definitions**, **four YES/NO questions** each for novelty (function and structure) and usefulness (effectiveness and feasibility), and a **rule table** mapping the answers to a score.

With the rubric, scores were more consistent across models and closer to the experts.

Why write it *first*:
- **It makes the judgment explicit and checkable** — you can see *why* a score was given, question by question.
- **It makes it consistent** — the same criteria for every design, every run, every model.
- **It keeps the standard yours.** If you write criteria after seeing outputs, you tend to adjust them to fit what came back (or to the model’s taste). Writing first protects your design values from being replaced by the model’s defaults.
- It is the same principle as [[c4_success]] in prompting: decide what “good” means before generation, or a fluent answer will define it for you.`,
      a_zh: `因为**“创意”不会自己定义自己**——让模型去评判，它会悄悄地发明一套自己的标准。Zhang、Han 与 Ahmed-Kristensen 测试了大模型评价设计概念的**[[c5_novelty]]**和**[[c5_usefulness]]**，并与专家评分（[[c5_cat]]）对比。他们比较了：
- [[c5_baseline]]——只有任务、设计目标和 0–6 分量表，每个模型只能凭自己对新颖和有用的理解打分；
- 写进提示词的结构化[[c5_rubric]]——**定义**、新颖性（功能与结构）和有用性（有效性与可行性）各**四个“是/否”问题**，以及把答案映射为分数的**规则表**。

有了评估方案，各模型的分数更一致，也更接近专家。

为什么要*先*写：
- **让判断变得明确、可检查**——你可以逐题看到某个分数是*怎么*来的。
- **让判断保持一致**——每个设计、每次运行、每个模型都用同一套标准。
- **让标准属于你。**如果看完输出再写标准，你往往会调整标准去迁就结果（或迁就模型的口味）。先写，可以保护你的设计价值不被模型的默认偏好替代。
- 这与提示词中的[[c4_success]]是同一个原则：在生成之前先决定什么是“好”，否则一个流畅的答案就会替你定义它。`,
      short_en: `Because **“creative” doesn’t define itself** — without criteria the model scores by its own hidden standard. Zhang, Han & Ahmed-Kristensen compared a **baseline prompt** (task + 0–6 scale) with a **rubric written into the prompt**: definitions of novelty and usefulness, **four YES/NO questions** for each, and a **rule table** mapping answers to a score. Across ten LLMs the rubric made scores **more consistent** and generally **closer to expert ratings**. Writing it first keeps the standard yours, not shaped by whatever output comes back.`,
      short_zh: `因为**“创意”不会自己定义自己**——没有标准，模型就按自己隐藏的标准打分。Zhang、Han 与 Ahmed-Kristensen 比较了**基线提示词**（任务 + 0–6 分量表）和**写进提示词的评分方案**：新颖性与有用性的定义、各**四个“是/否”问题**、以及把答案映射成分数的**规则表**。在十个大模型上，评分方案让分数**更一致**，整体也**更接近专家评分**。先写标准，标准才属于你，而不会被回来的输出牵着走。`,
      basis_en: `Checked against Zhang, Han & Ahmed-Kristensen, “Exploring the use of LLMs to evaluate design creativity” (ICED25): 78 design ideas rated by two experts (CAT); across ten LLMs the average score spread dropped from 0.970 to 0.822 (novelty) and 0.946 to 0.881 (usefulness), and alignment with experts improved for most models.`,
      basis_zh: `已对照 Zhang、Han 与 Ahmed-Kristensen《Exploring the use of LLMs to evaluate design creativity》（ICED25）：78 个设计想法由两位专家评分（CAT）；十个模型的平均分数标准差从 0.970 降到 0.822（新颖性）、从 0.946 降到 0.881（有用性），多数模型与专家的一致性提高。`,
      links: [{ t: 'Zhang, Han & Ahmed-Kristensen (Cambridge Core)', u: 'https://www.cambridge.org/core/product/B7D16E2612A33C0A9DE1B1922E054639/core-reader' }],
      rel: ['4.5', '4.4'],
      kid_en: `Imagine a drawing contest where the judges just say “score how creative it is, 0 to 6.” One judge loves bright colors, another loves funny ideas — the scores are all over the place. Now the teacher hands every judge the same checklist first: “Is it something new? Does it work? Yes or no?” plus a table that turns the answers into a score. Suddenly the judges agree much more. That checklist, written **before** judging, is a **rubric** — and it works the same way when the judge is an AI.`,
      kid_zh: `想象一场画画比赛，评委只被告诉：“按 0 到 6 分给它的创意打分。”一个评委喜欢鲜艳的颜色，另一个喜欢搞笑的点子——分数乱成一团。现在老师先发给每个评委同一张清单：“它新不新？好不好用？回答是或否”，再加一张把答案换算成分数的表格。评委们的分数一下子就接近多了。这张**在评分之前**写好的清单，就是**评分标准（rubric）**——评委换成 AI 也一样有效。`,
      steps: [
        { en: 'Lane A: the AI only gets the design and “rate it 0–6”.', zh: 'A 道：AI 只拿到设计和一句“按 0–6 打分”。', hi: ['c5_baseline'] },
        { en: 'Ten AIs give scores all over the place — each uses its own secret idea of “creative”.', zh: '十个 AI 打出的分数东一个西一个——每个都用自己私藏的“创意”标准。', hi: ['s55-scatter'] },
        { en: 'Lane B: first we write the rules — what “new” and “useful” mean, yes/no questions, and a score table.', zh: 'B 道：先把规则写好——“新”和“有用”是什么意思、是/否问题、以及打分表。', hi: ['c5_novelty', 'c5_usefulness', 'c5_rubric'] },
        { en: 'Now the scores bunch together and land closer to the human experts.', zh: '这下分数挤到了一起，也更接近人类专家的评分。', hi: ['c5_cat'] }
      ],
      hook_en: 'Define “good” before you look — otherwise the model (or the output) defines it for you.',
      hook_zh: '在看结果之前先定义“好”——否则就会由模型（或输出本身）替你来定义。',
      trap_en: 'Cite the study’s structure (definitions + yes/no questions + rule table vs. baseline) and its result (more consistent, closer to experts). “It’s more organized” alone is too vague.',
      trap_zh: '要引用研究的结构（定义 + 是/否问题 + 规则表 vs 基线）和结果（更一致、更接近专家）。只写“更有条理”太空泛。'
    }
  ]
});
