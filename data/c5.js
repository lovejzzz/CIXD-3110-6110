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
  t_en: 'Organizational Structures for Productivity and Agents', t_zh: '面向生产力与智能体的组织结构',
  intro_en: 'Boards, checklists, vaults and graphs: the structures people invented to organize work and knowledge are the same structures that now act as a harness for AI agents. And if a model is going to judge, the criteria must come first.',
  intro_zh: '看板、清单、笔记库和图谱：人类为组织工作与知识而发明的结构，如今也成了约束 AI 智能体的“挽具”。而如果要让模型来评判，标准必须先写好。',
  qs: [
    {
      id: '5.1', t_en: 'Kanban', t_zh: '看板',
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
      cap_en: 'Each card is one piece of work; each column is a state. The dashed empty slot in REVIEW is a signal: that column may pull one more card.',
      cap_zh: '每张卡片是一项工作，每一列是一种状态。“审查”列里虚线的空位就是信号：这一列还可以拉入一张卡片。',
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
      hook_en: 'Columns = states, cards = work, WIP limit = the rule. Stop starting, start finishing.',
      hook_zh: '列 = 状态，卡片 = 工作，WIP 上限 = 规则。少开新头，多做完成。',
      trap_en: 'A to-do list with columns is not quite Kanban — mention the WIP limit / pull, which is what the sources say defines it.',
      trap_zh: '分了列的待办清单还不算真正的看板——要提到 WIP 上限 / 拉动，这是资料里定义看板的关键。'
    },
    {
      id: '5.2', t_en: 'How an agent holds a request', t_zh: '智能体如何“拿住”一个请求',
      q_en: 'How can an agent keep track of a request (a checklist, a board, a plan)? Pick one and describe how it helps.',
      q_zh: '智能体可以怎样追踪一个请求（清单、看板、计划）？选一种，说明它如何帮助智能体。',
      fig() {
        let s = '';
        // request bubble
        s += F.rect(30, 40, 200, 70, { fill: F.C.blueF, stroke: F.C.blue, rx: 10, note: { en: 'One big, fuzzy request from a person.', zh: '人提出的一个又大又模糊的请求。' } });
        s += F.text(130, 64, '“Build me a study', { cls: 'mono', color: F.C.blue }) + F.text(130, 82, 'site for my midterm”', { cls: 'mono', color: F.C.blue });
        s += F.text(130, 132, 'REQUEST', { cls: 'lt', color: F.C.blue }) + F.sub(130, 148, '请求', { anchor: 'middle' });
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
        loop.forEach(([e, z], i) => {
          const y = 50 + i * 72;
          s += F.rect(lx - 75, y, 150, 46, { fill: i === 1 ? F.C.magF : '#fff', stroke: i === 1 ? F.C.mag : F.C.ink, rx: 23 });
          s += F.text(lx, y + 20, e, { cls: 'tiny', color: i === 1 ? F.C.mag : F.C.ink }) + F.sub(lx, y + 36, z, { anchor: 'middle' });
          if (i < 3) s += F.arrow(lx, y + 48, lx, y + 70);
        });
        s += F.path(`M${lx + 76},${50 + 3 * 72 + 23} C${lx + 120},${50 + 3 * 72} ${lx + 120},${73} ${lx + 78},${73}`, { stroke: F.C.mag, dash: '4 3', arrow: true });
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
      hook_en: 'The plan is the agent’s memory that doesn’t fade and the human’s window into what it is doing.',
      hook_zh: '计划是智能体不会遗忘的记忆，也是人观察它在做什么的窗口。',
      trap_en: 'The question says “pick one” — commit to one structure and explain HOW it helps (memory, decomposition, verification, oversight), not just what it is.',
      trap_zh: '题目要求“选一种”——明确选定一种结构，并说明它“如何”帮助（记忆、拆解、验证、监督），而不只是描述它是什么。'
    },
    {
      id: '5.3', t_en: 'Vault / file over app', t_zh: '库 / 文件优先于应用',
      q_en: 'What is an Obsidian vault, and what does "file over app" mean for who owns your notes?',
      q_zh: '什么是 Obsidian 库（vault）？“文件优先于应用（file over app）”对“谁拥有你的笔记”意味着什么？',
      fig() {
        const L = [
          { label: 'Apps · replaceable', sub: '应用：可替换', note: { en: 'Obsidian, VS Code, TextEdit, an AI agent — any of them can open the same files. Apps come and go.', zh: 'Obsidian、VS Code、文本编辑、AI 智能体——任何一个都能打开同样的文件。应用来来去去。' }, pattern: 'grid', density: 3, fill: '#fff',
            extra: z => { let e = ''; [[0.4, 0.4, F.C.magF], [2.2, 0.4, '#fff'], [0.4, 2.2, '#fff'], [2.2, 2.2, F.C.blueF]].forEach(([x, y, f]) => e += F.plate({ x, y, z: z + 0.18, w: 1.4, d: 1.4, t: 0.3, fill: f, side: '#eee' })); return e; } },
          { label: '.obsidian · settings', sub: '.obsidian：设置与插件（可丢弃）', note: { en: 'Hidden folder with Obsidian’s own settings. Lose it and you lose themes and plugins — never your notes.', zh: '存放 Obsidian 自身设置的隐藏文件夹。丢了它只会丢主题和插件——不会丢笔记。' }, pattern: 'hatch', density: 4, fill: '#fff' },
          { label: 'Markdown files · .md', sub: '纯文本笔记：每条笔记一个文件', tip: 'c5_md', bars: { color: F.C.green, fill: F.C.greenF, n: 3, rows: 3 } },
          { label: 'A folder on YOUR disk', sub: '你硬盘上的一个文件夹 = 库', tip: 'c5_vault', fill: F.C.magF, side: '#efd2e2', pattern: 'diag', pc: F.C.mag, density: 4 }
        ];
        const o = { alternate: true, gap: 2.9 };
        return F.svg(760, F.stackH(L.length, o), F.stack(L, o), { label: 'exploded view of an Obsidian vault' });
      },
      cap_en: 'Pull a vault apart and the app is only the replaceable top layer. The part that matters — plain-text files in a folder you own — sits underneath and outlives any app.',
      cap_zh: '把一个库拆开，应用只是最上面那层可替换的东西。真正重要的部分——你自己文件夹里的纯文本文件——在下面，比任何应用都活得久。',
      a_en: `An [[c5_vault]] is **just a folder on your own computer** that Obsidian opens: every note is a plain-text [[c5_md]] file, notes connect with [[c5_link|internal links]], and Obsidian keeps its own settings in a hidden \`.obsidian\` folder. There is no proprietary database and no required server — you can open the same files in any text editor, sync them however you like, or point an AI agent at them.

**[[c5_foa]]** is Steph Ango’s (Obsidian’s CEO) principle: *apps are ephemeral; files have a chance to last.* Most digital artifacts live on servers and databases the maker doesn’t control; if the company changes, closes or locks the format, your work goes with it. So if you want what you make to endure, it should be a **file you control, in an open, easy-to-read format.**

What it means for ownership: **you own your notes, not the app.** The app is a replaceable tool for reading and writing files. You can leave Obsidian tomorrow and keep everything, readable in 30 years. This is also why a vault is good for agents: the knowledge is in open files that any tool — including an agent through MCP — can read.`,
      a_zh: `[[c5_vault]]**就是你自己电脑上的一个文件夹**，由 Obsidian 打开：每条笔记都是一个纯文本的[[c5_md]]文件，笔记之间用[[c5_link|内部链接]]相连，Obsidian 把它自己的设置放在隐藏的 \`.obsidian\` 文件夹里。没有私有数据库，也不必依赖服务器——你可以用任何文本编辑器打开同样的文件、用任何方式同步，或者让 AI 智能体去读取它们。

**[[c5_foa]]**是 Steph Ango（Obsidian 的 CEO）提出的原则：*应用是短暂的，文件才有机会长存。*大多数数字作品存放在创作者无法掌控的服务器和数据库里；一旦公司改版、倒闭或锁定格式，你的作品也会随之消失。所以，想让你创造的东西长久留存，它就应该是**你掌控的文件，采用开放、易读的格式。**

对所有权的意义：**笔记属于你，而不属于应用。**应用只是一个可替换的、用来读写文件的工具。你明天就可以离开 Obsidian，而保留一切，30 年后依然可读。这也是 vault 适合智能体的原因：知识存在开放的文件里，任何工具——包括通过 MCP 接入的智能体——都能读取。`,
      hook_en: 'Vault = a folder of .md files you own. File over app = the files outlive the app, so you — not the company — own your notes.',
      hook_zh: '库 = 你拥有的一文件夹 .md 文件。文件优先于应用 = 文件比应用活得久，所以拥有笔记的是你，而不是公司。',
      trap_en: 'Don’t describe Obsidian’s features. The point is ownership and durability: local, plain-text, app-independent files.',
      trap_zh: '不要去介绍 Obsidian 的功能。重点是所有权与持久性：本地、纯文本、不依赖应用的文件。'
    },
    {
      id: '5.4', t_en: 'Knowledge graph', t_zh: '知识图谱',
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
        s += F.g(t, { note: { en: 'A hierarchy: each note sits in exactly one branch. Relations across branches are invisible.', zh: '层级结构：每条笔记只属于一个分支，跨分支的关系是看不见的。' } });
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
          s += F.circle(x, y, hub ? 15 : 9, { fill: hub ? F.C.magF : '#fff', stroke: c, tip: hub ? null : 'c5_graphview', note: hub ? { en: 'A hub: the note most things connect to — invisible in the folder tree, where it hides in Class 7.', zh: '枢纽节点：大多数笔记都连到它——在文件夹树里却看不出来，它被藏在 Class 7 里。' } : null });
          s += F.text(x, y + (hub ? 32 : 24), n, { cls: 'tiny' });
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
      hook_en: 'A folder answers “where is it?” A graph answers “what is it connected to?”',
      hook_zh: '文件夹回答“它在哪？”；图谱回答“它和什么相连？”',
      trap_en: 'Use the hierarchy vs. network contrast (it links back to Wright in Class 2), and name at least two concrete things: connections, hubs, clusters, orphans.',
      trap_zh: '用“层级 vs 网络”的对比来答（这和第 2 课 Wright 的内容呼应），并至少说出两样具体的东西：联系、枢纽、聚类、孤立点。'
    },
    {
      id: '5.5', t_en: 'Rubric before generation', t_zh: '先写评分标准，再让模型生成',
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
        s += F.g(sc + F.text(550, 138, 'ten models disagree · far from experts', { cls: 'tiny', color: F.C.red }), { note: { en: 'Each model uses its own private idea of “creative” — scores scatter and drift from expert ratings.', zh: '每个模型都用自己私有的“创意”标准——分数分散，且偏离专家评分。' } });
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
      hook_en: 'Define “good” before you look — otherwise the model (or the output) defines it for you.',
      hook_zh: '在看结果之前先定义“好”——否则就会由模型（或输出本身）替你来定义。',
      trap_en: 'Cite the study’s structure (definitions + yes/no questions + rule table vs. baseline) and its result (more consistent, closer to experts). “It’s more organized” alone is too vague.',
      trap_zh: '要引用研究的结构（定义 + 是/否问题 + 规则表 vs 基线）和结果（更一致、更接近专家）。只写“更有条理”太空泛。'
    }
  ]
});
