/* CLASS 9 · GUIDELINES FOR HUMAN-AI INTERACTION */
(function () {
  // [id, title_en, title_zh, desc_en, desc_zh, category_en, category_zh, example_en, example_zh]
  // Checked against Table 1 of the CHI 2019 camera-ready paper (Microsoft Research PDF).
  const G = [
    ['G1', 'Make clear what the system can do', '说清系统能做什么', 'Help the user understand what the AI system is capable of doing.', '帮助用户理解这个 AI 系统能做哪些事。', 'Activity trackers', '活动追踪器', 'Displays all the metrics that it tracks and explains how.', '列出它追踪的所有指标，并说明是怎么测的。'],
    ['G2', 'Make clear how well the system can do what it can do', '说清系统做得有多好', 'Help the user understand how often the AI system may make mistakes.', '帮助用户理解这个 AI 系统大概多常出错。', 'Music recommenders', '音乐推荐', 'Hedging language: “we think you’ll like”.', '用留有余地的措辞：“我们觉得你会喜欢”。'],
    ['G3', 'Time services based on context', '根据情境把握时机', 'Time when to act or interrupt based on the user’s current task and environment.', '根据用户当前的任务和环境决定何时行动或打断。', 'Navigation', '导航', 'Provides timely route guidance.', '在恰当的时刻给出路线指引。'],
    ['G4', 'Show contextually relevant information', '显示与情境相关的信息', 'Display information relevant to the user’s current task and environment.', '显示与用户当前任务和环境相关的信息。', 'Web search', '网页搜索', 'Returns show times near my location for today’s date.', '直接给出我附近、今天的放映时间。'],
    ['G5', 'Match relevant social norms', '符合社会规范', 'Ensure the experience is delivered in a way that users would expect, given their social and cultural context.', '以符合用户社会与文化背景预期的方式提供体验。', 'Voice assistants', '语音助手', 'Uses a semiformal voice to talk to you.', '用半正式的语气和你说话。'],
    ['G6', 'Mitigate social biases', '减轻社会偏见', 'Ensure the AI system’s language and behaviors do not reinforce undesirable and unfair stereotypes and biases.', '确保系统的语言和行为不强化不良、不公平的刻板印象和偏见。', 'Autocomplete', '自动补全', 'Suggests both genders (him / her) without bias.', '同时给出两种性别的建议（him / her），不带偏向。'],
    ['G7', 'Support efficient invocation', '方便地调用', 'Make it easy to invoke or request the AI system’s services when needed.', '让用户在需要时可以轻松调用或请求 AI 服务。', 'Voice assistants', '语音助手', 'A wake command starts it.', '说一句唤醒词就能启动。'],
    ['G8', 'Support efficient dismissal', '方便地关掉/忽略', 'Make it easy to dismiss or ignore undesired AI system services.', '让用户可以轻松关闭或忽略不想要的 AI 服务。', 'E-commerce', '电商', 'Recommendations are easy to ignore.', '推荐内容很容易忽略。'],
    ['G9', 'Support efficient correction', '方便地纠正', 'Make it easy to edit, refine, or recover when the AI system is wrong.', '当 AI 出错时，让用户容易编辑、修正或恢复。', 'Voice assistants', '语音助手', '“Tap to Edit” the transcribed request.', '识别出的请求可以“点按编辑”。'],
    ['G10', 'Scope services when in doubt', '不确定时缩小范围', 'Engage in disambiguation or gracefully degrade the AI system’s services when uncertain about a user’s goals.', '不确定用户目标时，先澄清，或优雅地降级服务。', 'Autocomplete', '自动补全', 'Offers 3–4 suggestions instead of auto-completing directly.', '给出 3–4 个候选，而不是直接替你补全。'],
    ['G11', 'Make clear why the system did what it did', '说清系统为什么这样做', 'Enable the user to access an explanation of why the AI system behaved as it did.', '让用户能看到系统为何如此表现的解释。', 'Navigation', '导航', 'Says the route was chosen because it is the fastest.', '说明之所以选这条路线，是因为它最快。'],
    ['G12', 'Remember recent interactions', '记住最近的交互', 'Maintain short-term memory and allow the user to make efficient references to that memory.', '保持短期记忆，并让用户能方便地引用它。', 'Web search', '网页搜索', 'Remembers the context of certain queries.', '记得前几次搜索的上下文。'],
    ['G13', 'Learn from user behavior', '从用户行为中学习', 'Personalize the user’s experience by learning from their actions over time.', '随时间从用户的行为中学习，实现个性化。', 'Music recommenders', '音乐推荐', 'Each song you add triggers new recommendations.', '每添加一首歌，都会触发新的推荐。'],
    ['G14', 'Update and adapt cautiously', '谨慎地更新和适应', 'Limit disruptive changes when updating and adapting the AI system’s behaviors.', '更新和调整系统行为时，限制破坏性的变化。', 'Music recommenders', '音乐推荐', 'Updates one list while keeping the other constant.', '更新一个列表时，保持另一个不变。'],
    ['G15', 'Encourage granular feedback', '鼓励细粒度反馈', 'Enable the user to provide feedback indicating their preferences during regular interaction with the AI system.', '让用户在日常使用中就能表达自己的偏好。', 'Music recommenders', '音乐推荐', 'Love / dislike buttons are prominent and easy to reach.', '“喜欢 / 不喜欢”按钮醒目、随手可点。'],
    ['G16', 'Convey the consequences of user actions', '说明用户操作的后果', 'Immediately update or convey how user actions will impact future behaviors of the AI system.', '立即更新或说明用户的操作将如何影响系统未来的行为。', 'Music recommenders', '音乐推荐', 'A popup says you will now get more / fewer recommendations like this.', '弹窗告诉你：以后会多推 / 少推这类内容。'],
    ['G17', 'Provide global controls', '提供全局控制', 'Allow the user to globally customize what the AI system monitors and how it behaves.', '允许用户全局设置系统监测什么、如何表现。', 'Photo organizers', '照片管理', 'Lets users turn location history on or off.', '允许用户开启或关闭位置记录。'],
    ['G18', 'Notify users about changes', '变化时通知用户', 'Inform the user when the AI system adds or updates its capabilities.', '当系统新增或更新能力时告知用户。', 'Navigation', '导航', 'Small in-app teaching callouts for important new features.', '用应用内的小提示介绍重要的新功能。']
  ];
  window.__AMERSHI = G;
  const t = {};
  G.forEach(([id, en, zh, den, dzh, cen, czh, xen, xzh]) => { t['c9_' + id.toLowerCase()] = { en: `${id} · ${en}`, zh: `${id} · ${zh}`, d_en: `${den} Paper example [${cen}]: ${xen}`, d_zh: `${dzh} 论文示例【${czh}】：${xzh}` }; });
  defTerms(t);
})();

defTerms({
  c9_amershi: { en: 'Guidelines for Human-AI Interaction', zh: '人机交互设计准则（Amershi 等）',
    d_en: 'Amershi et al., CHI 2019 (Microsoft): 18 design guidelines for AI-infused products, distilled from 150+ recommendations and tested by designers on 20 products. Table 1 lists each with an example.',
    d_zh: 'Amershi 等，CHI 2019（微软）：面向含 AI 产品的 18 条设计准则，从 150 多条建议中提炼，并由设计师在 20 款产品上测试。表 1 列出每条准则及示例。' },
  c9_initially: { en: 'Initially', zh: '初始阶段',
    d_en: 'Before or at first use: set expectations (G1–G2).',
    d_zh: '开始使用之前或之初：设定预期（G1–G2）。' },
  c9_during: { en: 'During interaction', zh: '交互过程中',
    d_en: 'While the user is working: timing, relevance, norms, bias (G3–G6).',
    d_zh: '用户使用过程中：时机、相关性、社会规范、偏见（G3–G6）。' },
  c9_wrong: { en: 'When wrong', zh: '出错时',
    d_en: 'AI will be wrong — design for invoking, dismissing, correcting, scoping and explaining (G7–G11).',
    d_zh: 'AI 一定会出错——要为调用、忽略、纠正、缩小范围和解释而设计（G7–G11）。' },
  c9_overtime: { en: 'Over time', zh: '随时间推移',
    d_en: 'As the system learns and changes: memory, learning, cautious updates, feedback, consequences, controls, notifications (G12–G18).',
    d_zh: '系统学习和变化的过程中：记忆、学习、谨慎更新、反馈、后果、控制、通知（G12–G18）。' },
  c9_permission: { en: 'Permission modes', zh: '权限模式',
    d_en: 'In an agent harness like Claude Code: a global setting for what may run without asking (e.g. ask before every edit, auto-accept edits, plan-only).',
    d_zh: '在 Claude Code 这类智能体框架中：一个全局设置，决定哪些操作可以不经询问直接执行（例如每次编辑前都问、自动接受编辑、只做计划）。' }
});

defClass({
  order: 9, n: '9',
  lec_en: "Class 9 turns the camera around: after eight classes about how AI works, we ask **how it should behave with people**. Amershi et al. (Microsoft, CHI 2019) distilled **18 guidelines** from 20+ years of research and tested them with designers on real products. The clever part is how they're organised — by **when** they apply: Initially, During interaction, When wrong, and Over time. **Why time?** Because AI is uncertain: it will be wrong sometimes, and it changes as it learns. A good design plans for the first meeting, the everyday use, the mistake, and the long relationship — not just the demo where everything works.",
  lec_zh: "第 9 课把镜头掉转过来：前八课讲 AI 怎么运作，这一课问的是**它应该怎样对待人**。Amershi 等人（微软，CHI 2019）从二十多年的研究里提炼出 **18 条准则**，并让设计师在真实产品上检验过。巧妙之处在于它的分组方式——按**什么时候**适用来分：初始、交互中、出错时、长期使用。**为什么按时间分？**因为 AI 是不确定的：它有时会出错，也会随着学习而改变。好的设计要为第一次见面、日常使用、犯错的那一刻、以及长期关系都做好计划——而不是只为一切都顺利的演示做设计。",
  lec_faq: [
    { q_en: "Do I have to memorise all 18 guidelines?", q_zh: "18 条准则都要背下来吗？", a_en: "No — know the four groups and be able to explain one or two from each in your own words. It's open book, so you can look up exact wording; what earns points is explaining what it asks of the designer.", a_zh: "不用——记住四个分组，每组能用自己的话讲一两条就行。考试是开卷，原话可以查；得分的关键是讲清它要求设计师做什么。" },
    { q_en: "Why are they grouped by time instead of by topic?", q_zh: "为什么按时间分组，而不是按主题？", a_en: "Because using AI is a relationship that unfolds: first meeting, daily use, mistakes, and change over months. Grouping by time makes designers ask 'what does the person need right now?'", a_zh: "因为使用 AI 是一段逐步展开的关系：初次见面、日常使用、出错、几个月里的变化。按时间分组，会逼设计师去问“这个人此刻需要什么？”" },
    { q_en: "Is it bad if an AI makes mistakes?", q_zh: "AI 出错就是坏的吗？", a_en: "Mistakes are guaranteed with AI. The guidelines judge how the design handles them: can you dismiss it easily, correct it, understand why it did that? A system that's wrong but easy to fix can be better than one that's rarely wrong but impossible to fix.", a_zh: "AI 出错是必然的。准则评判的是设计怎么处理错误：能不能轻松关掉、纠正、理解它为什么这么做？一个会错但容易纠正的系统，可能比一个很少错但没法纠正的系统更好。" },
    { q_en: "Can one product follow some guidelines and break others?", q_zh: "一个产品可以遵守一些准则、同时违反另一些吗？", a_en: "Yes — almost every product does. That's exactly what 9.3 asks you to show: one done well, one broken, and a fix.", a_zh: "可以——几乎每个产品都是这样。9.3 要你展示的正是这个：一条做得好，一条违反了，再加一个修改方案。" },
    { q_en: "Where do I find the examples for 9.2?", q_zh: "9.2 的例子去哪里找？", a_en: "In Table 1 of Amershi et al. (CHI 2019) — each guideline has an example product category the participants tested, like activity trackers, navigation, email, autocomplete and voice assistants.", a_zh: "在 Amershi 等人论文（CHI 2019）的表 1 里——每条准则都配了受试者测试过的产品类别，比如活动追踪器、导航、邮件、自动补全和语音助手。" },
    { q_en: "What's 'Variable Machine' — can I use it for 9.3?", q_zh: "“Variable Machine”是什么？9.3 能用它吗？", a_en: "It's the instructor's app for changing small models with words, examples and taste, showing the real command behind every click. Yes — it's on the list; it applies G11-style transparency well because it shows what it actually runs.", a_zh: "是老师做的 App，用“话、例子、品味”来改小模型，每次点击都显示背后真实运行的命令。可以用——它就在题目列表里；它把“让人明白系统在做什么”（类似 G11）做得很好，因为它把实际运行的东西都展示出来了。" }
  ],
  t_en: 'Guidelines for Human-AI Interaction', t_zh: '人机交互设计准则',
  intro_en: 'Amershi et al. turned two decades of advice into 18 testable guidelines, grouped by when they matter: initially, during interaction, when the system is wrong, and over time. Here we use them as a lens on products — including the tools we used this term.',
  intro_zh: 'Amershi 等人把二十年来的建议整理成 18 条可检验的准则，并按“什么时候起作用”分组：初始、交互中、出错时、随时间推移。我们把它们当作透镜来审视产品——包括本学期用过的工具。',
  quiz: [
    { q_en: 'How does Amershi et al. (CHI 2019) group the 18 guidelines?',
      q_zh: 'Amershi 等人（CHI 2019）是怎样给 18 条准则分组的？',
      opts: [{ en: 'By company: Microsoft, Google, Apple', zh: '按公司：微软、谷歌、苹果' },
             { en: 'By when they apply: Initially, During interaction, When wrong, Over time', zh: '按起作用的时间：初始、交互中、出错时、随时间推移' },
             { en: 'By difficulty: easy, medium, hard', zh: '按难度：易、中、难' },
             { en: 'By device: phone, laptop, speaker', zh: '按设备：手机、电脑、音箱' }], a: 1,
      why_en: 'Table 1 sorts the guidelines by **the moment of use** they address: **Initially** (G1–2), **During interaction** (G3–6), **When wrong** (G7–11), **Over time** (G12–18).',
      why_zh: 'Table 1 按准则针对的**使用时刻**来排：**初始**（G1–2）、**交互中**（G3–6）、**出错时**（G7–11）、**随时间推移**（G12–18）。' },
    { q_en: 'G1 “Make clear what the system can do” asks the designer to…',
      q_zh: 'G1“说清系统能做什么”要求设计者……',
      opts: [{ en: 'Hide limitations so users trust it', zh: '藏起局限，让用户信任它' },
             { en: 'Make the AI answer faster', zh: '让 AI 回答得更快' },
             { en: 'Show the system’s scope up front so expectations match', zh: '一开始就展示系统的能力范围，让期待和实际相符' },
             { en: 'Ask users for feedback after every action', zh: '每次操作后都请用户反馈' }], a: 2,
      why_en: 'G1 is about **scope**: tell people what the AI can (and can’t) do before they rely on it. Hiding limits is the opposite — it sets people up to be surprised. Feedback is G15.',
      why_zh: 'G1 讲的是**能力范围**：在用户依赖它之前，就告诉他们 AI 能做什么、不能做什么。藏起局限正好相反——会让人措手不及。请用户反馈是 G15。' },
    { q_en: 'The paper’s example for G1 is an activity tracker that…',
      q_zh: '论文里 G1 的例子是一个活动追踪器，它……',
      opts: [{ en: 'Displays all the metrics it tracks and explains how', zh: '展示它追踪的所有指标，并说明是怎么测的' },
             { en: 'Plays music when you run', zh: '你跑步时会放音乐' },
             { en: 'Sends your data to advertisers', zh: '把你的数据发给广告商' },
             { en: 'Turns off automatically at night', zh: '晚上自动关机' }], a: 0,
      why_en: 'In Table 1 the **activity tracker** applies G1 by **listing every metric and how it measures it**, so users learn its scope. A smart speaker with no menu is the classic counter-example.',
      why_zh: '在 Table 1 中，**活动追踪器**通过**列出每个指标及测量方式**体现 G1，让用户了解它的能力范围。没有菜单的智能音箱就是典型的反例。' },
    { q_en: 'Which guideline belongs to “When wrong”?',
      q_zh: '哪条准则属于“出错时”这一组？',
      opts: [{ en: 'G4 Show contextually relevant information', zh: 'G4 显示与情境相关的信息' },
             { en: 'G13 Learn from user behavior', zh: 'G13 从用户行为中学习' },
             { en: 'G1 Make clear what the system can do', zh: 'G1 说清系统能做什么' },
             { en: 'G9 Support efficient correction', zh: 'G9 支持高效纠正' }], a: 3,
      why_en: 'G7–G11 cover **when the AI is wrong**: easy invocation, dismissal, **correction (G9)**, scoping when unsure, explaining why. G4 is During interaction, G13 is Over time, G1 is Initially.',
      why_zh: 'G7–G11 处理 **AI 出错的时候**：方便调用、方便忽略、**方便纠正（G9）**、不确定时缩小范围、解释原因。G4 属于交互中，G13 属于随时间推移，G1 属于初始。' },
    { q_en: 'A navigation app reroutes you and lets you fix a wrong turn in one tap. That supports…',
      q_zh: '导航软件给你改了路线，你点一下就能纠正走错的路口。这体现了……',
      opts: [{ en: 'G2 Make clear how well the system can do', zh: 'G2 说清系统做得多好' },
             { en: 'G9 Support efficient correction', zh: 'G9 支持高效纠正' },
             { en: 'G18 Notify users about changes', zh: 'G18 变化时通知用户' },
             { en: 'G5 Match relevant social norms', zh: 'G5 符合社会规范' }], a: 1,
      why_en: 'Fixing the AI’s mistake **quickly and easily** is exactly **G9**. G2 is about stating how reliable it is; G18 is about telling users when the system itself changes.',
      why_zh: '**又快又容易地**纠正 AI 的错误，正是 **G9**。G2 讲的是说明它有多可靠；G18 讲的是系统本身更新时要通知用户。' },
    { q_en: 'G17 “Provide global controls” — which feature applies it?',
      q_zh: 'G17“提供全局控制”——哪个功能体现了它？',
      opts: [{ en: 'One setting that changes what the AI may do everywhere (e.g. permission modes)', zh: '一个设置就能改变 AI 在所有地方能做什么（比如权限模式）' },
             { en: 'A loading spinner', zh: '一个加载动画' },
             { en: 'A new logo', zh: '一个新 logo' },
             { en: 'A longer answer', zh: '更长的回答' }], a: 0,
      why_en: 'Global controls let users set **how the AI behaves overall**, once — like Claude Code’s permission modes or a “turn personalization off” switch — instead of correcting it case by case.',
      why_zh: '全局控制让用户**一次性**设定 AI 的整体行为——比如 Claude Code 的权限模式，或者“关闭个性化”开关——而不是一次次逐个纠正。' },
    { q_en: 'An agent says “Done!” confidently but never ran the tests. Which guideline does that break?',
      q_zh: '智能体很自信地说“完成了！”，其实根本没跑测试。这违反了哪条准则？',
      opts: [{ en: 'G17 Provide global controls', zh: 'G17 提供全局控制' },
             { en: 'G12 Remember recent interactions', zh: 'G12 记住最近的交互' },
             { en: 'G2 Make clear how well the system can do what it can do', zh: 'G2 说清系统能把事做得多好' },
             { en: 'G7 Support efficient invocation', zh: 'G7 支持高效调用' }], a: 2,
      why_en: 'Reporting success with the same confidence whether or not it was checked hides **how well** the system did — that breaks **G2**. The fix: say what was verified and how sure it is.',
      why_zh: '不管有没有验证都用同样的自信报告成功，就把系统**做得有多好**藏起来了——违反 **G2**。改法：说明验证了什么、有多大把握。' },
    { q_en: 'Which guideline is in the “Over time” group?',
      q_zh: '哪条准则属于“随时间推移”这一组？',
      opts: [{ en: 'G3 Time services based on context', zh: 'G3 根据情境把握时机' },
             { en: 'G8 Support efficient dismissal', zh: 'G8 支持高效忽略' },
             { en: 'G10 Scope services when in doubt', zh: 'G10 不确定时缩小服务范围' },
             { en: 'G14 Update and adapt cautiously', zh: 'G14 谨慎地更新和适应' }], a: 3,
      why_en: 'G12–G18 are **Over time**: remember recent interactions, learn from behavior, **update cautiously (G14)**, encourage feedback, convey consequences, global controls, notify about changes. G3 is During; G8 and G10 are When wrong.',
      why_zh: 'G12–G18 属于**随时间推移**：记住最近交互、从行为中学习、**谨慎更新（G14）**、鼓励反馈、说明后果、全局控制、变化时通知。G3 属于交互中；G8、G10 属于出错时。' },
    { q_en: 'Why are these guidelines useful for designers?',
      q_zh: '这些准则为什么对设计者有用？',
      opts: [{ en: 'They guarantee the AI is never wrong', zh: '它们保证 AI 永远不出错' },
             { en: 'They make you plan for every moment of use, especially when the AI is wrong', zh: '它们让你为每个使用时刻做规划，尤其是 AI 出错的时候' },
             { en: 'They replace user testing', zh: '它们可以代替用户测试' },
             { en: 'They only apply to voice assistants', zh: '它们只适用于语音助手' }], a: 1,
      why_en: 'AI is uncertain and will sometimes fail, so the guidelines push designers to plan **before, during, when wrong and over time** — not just the happy path. They were tested on many product categories, not just voice assistants, and don’t replace testing.',
      why_zh: 'AI 有不确定性，总会出错，所以准则逼设计者为**之前、之中、出错时、长期**都做规划——而不只是一切顺利的情况。它们在许多类产品上检验过，不只是语音助手，也不能代替测试。' },
    { q_en: 'A smart speaker only reveals what it can do when you ask and it fails. Which guideline does it break?',
      q_zh: '智能音箱只有在你问了、它答不上来时，你才知道它能做什么。它违反了哪条准则？',
      opts: [{ en: 'G1 Make clear what the system can do', zh: 'G1 说清系统能做什么' },
             { en: 'G15 Encourage granular feedback', zh: 'G15 鼓励细粒度反馈' },
             { en: 'G6 Mitigate social biases', zh: 'G6 减轻社会偏见' },
             { en: 'G16 Convey the consequences of user actions', zh: 'G16 说明用户操作的后果' }], a: 0,
      why_en: 'With no visible menu, users learn the scope only **by failing** — the opposite of **G1**, which wants the scope shown up front (like the activity tracker’s metric list).',
      why_zh: '没有看得见的菜单，用户只能**靠失败**摸清范围——这正好违反 **G1**，G1 要求一开始就展示能力范围（就像活动追踪器的指标列表）。' }
  ],
  qs: [
    {
      lec_open_en: "Scene: a new robot assistant arrives at school. On day one, what do you need to know? When it's helping you mid-homework? When it gets your name wrong? After a month together? \"Those four moments are the four groups.\"",
      lec_open_zh: "场景：学校来了一个新的机器人助手。第一天，你需要知道什么？它在你写作业中途帮忙时呢？它叫错你名字时呢？相处一个月以后呢？“这四个时刻，就是四组准则。”",
      lec_why_en: "**Initially** — G1 *Make clear what the system can do*. **Why first?** Because people's expectations of AI are wildly off — either \"it can do anything\" or \"it's useless\". If you don't set expectations at the start, every later surprise feels like betrayal.\n\n**During interaction** — G4 *Show contextually relevant information*. **Why?** Because AI's value is knowing the moment: the right info now, not a pile of everything.\n\n**When wrong** — G9 *Support efficient correction*. **Why is \"wrong\" a whole group?** Because AI is probabilistic — mistakes aren't bugs you can fully fix, they're guaranteed. The design question becomes: how cheap is it to fix?\n\n**Over time** — G17 *Provide global controls*. **Why?** Because the system learns and changes; people need one place to say \"less of this\" or \"stop\".\n\nThe guidelines ask the designer to design the **whole relationship**, including the bad days.",
      lec_why_zh: "**初始阶段**——G1 *讲清楚系统能做什么*。**为什么放在第一条？**因为人们对 AI 的预期常常离谱——要么“它无所不能”，要么“它没用”。一开始不把预期设好，之后每一次意外都会让人觉得被骗了。\n\n**交互过程中**——G4 *显示与情境相关的信息*。**为什么？**因为 AI 的价值在于“懂时机”：此刻给对的信息，而不是一堆什么都有。\n\n**出错时**——G9 *支持高效纠正*。**为什么“出错”能单独成一组？**因为 AI 是概率性的——错误不是能彻底修掉的 bug，而是一定会发生的。设计问题就变成：纠正起来有多省事？\n\n**长期使用**——G17 *提供全局控制*。**为什么？**因为系统会学习、会变；人需要一个地方说“少一点这个”或者“停下”。\n\n这些准则要求设计师设计的是**整段关系**，包括不顺利的日子。",
      lec_trap_en: "Copying the guideline titles without saying \"what it asks of the designer\". Each answer needs a verb for the designer: show, explain, make it easy to undo, give a switch.",
      lec_trap_zh: "只抄准则标题，没说“它要求设计师做什么”。每一条都要有给设计师的动作：显示、说明、让撤销变容易、给一个开关。",
      lec_ask_en: "Ask: \"Why is there a whole group just for when the AI is wrong?\" — Listen for: because AI mistakes are inevitable, so the design must make them cheap to fix.",
      lec_ask_zh: "问：“为什么要专门有一组准则讲 AI 出错的时候？”——要听到：因为 AI 出错是必然的，所以设计要让纠错代价很低。",
      lec_bridge_en: "Guidelines are abstract until you see them in a product. The paper gives an example for each — 9.2.",
      lec_bridge_zh: "准则只有在产品里看到才具体。论文给每一条都配了例子——9.2。",
      id: '9.1', t_en: 'When the guidelines apply', t_zh: '准则适用的时机',
      q_en: 'The 18 guidelines are grouped by when they apply: Initially, During interaction, When wrong, and Over time. Choose one guideline from each group and say in your own words what it asks of the designer.',
      q_zh: '18 条准则按适用时机分组：初始阶段、交互过程中、出错时、随时间推移。从每组各选一条准则，用你自己的话说明它对设计者提出了什么要求。',
      src: 'Amershi et al., "Guidelines for Human-AI Interaction," CHI 2019, Table 1',
      fig() {
        const G = window.__AMERSHI;
        const SHORT = ['What it can do', 'How well it can do', 'Time by context', 'Relevant info', 'Social norms', 'Mitigate bias', 'Easy to invoke', 'Easy to dismiss', 'Easy to correct', 'Scope when unsure', 'Explain why', 'Remember recent', 'Learn from user', 'Adapt cautiously', 'Granular feedback', 'Show consequences', 'Global controls', 'Notify of changes'];
        const cols = [
          { k: 'c9_initially', en: 'INITIALLY', zh: '初始', ids: [0, 1], pick: 0, col: F.C.blue, fill: F.C.blueF },
          { k: 'c9_during', en: 'DURING', zh: '交互中', ids: [2, 3, 4, 5], pick: 3, col: F.C.green, fill: F.C.greenF },
          { k: 'c9_wrong', en: 'WHEN WRONG', zh: '出错时', ids: [6, 7, 8, 9, 10], pick: 8, col: F.C.red, fill: F.C.redF },
          { k: 'c9_overtime', en: 'OVER TIME', zh: '随时间', ids: [11, 12, 13, 14, 15, 16, 17], pick: 16, col: F.C.mag, fill: F.C.magF }
        ];
        let s = '';
        // timeline arrow
        s += F.arrow(20, 24, 740, 24, { sw: 1 });
        const cw = 172, gx = 12;
        cols.forEach((c, i) => {
          const x = 20 + i * (cw + gx);
          s += F.g(F.text(x, 50, c.en, { anchor: 'start', cls: 'lt', color: c.col }) + F.sub(x + c.en.length * 7.6 + 8, 50, c.zh), { tip: c.k });
          c.ids.forEach((gi, j) => {
            const y = 64 + j * 44, g = G[gi], on = gi === c.pick;
            const short = SHORT[gi];
            s += F.rect(x, y, cw, 38, { fill: on ? c.fill : '#fff', stroke: on ? c.col : F.C.ink, sw: on ? 1.6 : 1, rx: 4, tip: 'c9_' + g[0].toLowerCase() }) +
              F.text(x + 8, y + 14, g[0], { anchor: 'start', cls: 'tiny', color: c.col }) +
              F.text(x + 40, y + 14, short, { anchor: 'start', cls: 'tiny', color: F.C.ink }) +
              F.sub(x + 40, y + 31, g[2]);
          });
        });
        s += F.text(20, 392, '■ = the four picked in the answer below', { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.sub(330, 392, '彩色格 = 下方答案所选的四条');
        return F.svg(760, 402, s, { label: '18 guidelines in four phases' });
      },
      widget: {
        html() {
          return `<div class="w-ctrl"><span class="en">Click any guideline — the panel below shows its full wording, what it asks of the designer, and the paper’s own example.</span><span class="zh">点任意一条准则——下方会显示完整表述、它对设计者的要求，以及论文里的原例。</span></div><div class="w-svg"></div><div class="w-readout"></div>`;
        },
        mount(el) {
          const G = window.__AMERSHI;
          const SHORT = ['What it can do', 'How well it can do', 'Time by context', 'Relevant info', 'Social norms', 'Mitigate bias', 'Easy to invoke', 'Easy to dismiss', 'Easy to correct', 'Scope when unsure', 'Explain why', 'Remember recent', 'Learn from user', 'Adapt cautiously', 'Granular feedback', 'Show consequences', 'Global controls', 'Notify of changes'];
          const cols = [
            { k: 'c9_initially', en: 'INITIALLY', zh: '初始', ids: [0, 1], pick: 0, col: F.C.blue, fill: F.C.blueF, ph_en: 'Initially', ph_zh: '初始阶段' },
            { k: 'c9_during', en: 'DURING', zh: '交互中', ids: [2, 3, 4, 5], pick: 3, col: F.C.green, fill: F.C.greenF, ph_en: 'During interaction', ph_zh: '交互过程中' },
            { k: 'c9_wrong', en: 'WHEN WRONG', zh: '出错时', ids: [6, 7, 8, 9, 10], pick: 8, col: F.C.red, fill: F.C.redF, ph_en: 'When wrong', ph_zh: '出错时' },
            { k: 'c9_overtime', en: 'OVER TIME', zh: '随时间', ids: [11, 12, 13, 14, 15, 16, 17], pick: 16, col: F.C.mag, fill: F.C.magF, ph_en: 'Over time', ph_zh: '随时间推移' }
          ];
          const colOf = gi => cols.find(c => c.ids.includes(gi));
          let sel = 0;
          const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');
          function draw() {
            // keep any stepper highlight across redraws (a click re-renders the grid)
            const keep = [...el.querySelectorAll('.st-hl[data-tip]')].map(x => x.dataset.tip);
            let s = F.arrow(20, 24, 740, 24, { sw: 1 });
            const cw = 172, gx = 12;
            cols.forEach((c, i) => {
              const x = 20 + i * (cw + gx);
              s += `<g class="part" data-tip="${c.k}">` + F.text(x, 50, c.en, { anchor: 'start', cls: 'lt', color: c.col }) + F.sub(x + c.en.length * 7.6 + 8, 50, c.zh) + `</g>`;
              c.ids.forEach((gi, j) => {
                const y = 64 + j * 44, g = G[gi], on = gi === sel, picked = gi === c.pick;
                s += `<g data-g="${gi}" class="part" data-tip="c9_${g[0].toLowerCase()}" style="cursor:pointer">` +
                  `<rect x="${x}" y="${y}" width="${cw}" height="38" rx="4" fill="${on ? c.fill : '#fff'}" stroke="${on ? c.col : F.C.ink}" stroke-width="${on ? 2 : 1}"/>` +
                  F.text(x + 8, y + 14, g[0], { anchor: 'start', cls: 'tiny', color: c.col }) +
                  F.text(x + 40, y + 14, SHORT[gi], { anchor: 'start', cls: 'tiny', color: F.C.ink }) +
                  F.sub(x + 40, y + 31, g[2]) +
                  (picked ? `<circle cx="${x + cw - 10}" cy="${y + 10}" r="3.2" fill="${c.col}"/>` : '') + `</g>`;
              });
            });
            s += `<circle cx="24" cy="388" r="3.2" fill="${F.C.ink}"/>` + F.text(32, 388, 'used in the model answer', { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.sub(210, 391, '= 参考答案选用的四条');
            el.querySelector('.w-svg').innerHTML = F.svg(760, 402, s, { label: '18 guidelines in four phases — click one' });
            keep.forEach(k => el.querySelectorAll(`[data-tip="${k}"]`).forEach(x => x.classList.add('st-hl')));
            const g = G[sel], c = colOf(sel);
            el.querySelector('.w-readout').innerHTML =
              `<p><b style="color:${c.col}">${g[0]} · ${esc(g[1])}</b> <span class="zh">${esc(g[2])}</span> — <span class="en">${c.ph_en}</span><span class="zh"> ${c.ph_zh}</span></p>` +
              `<p class="en"><b>Asks the designer:</b> ${esc(g[3])}</p><p class="zh"><b>对设计者的要求：</b>${esc(g[4])}</p>` +
              `<p class="en"><b>Paper example</b> [${esc(g[5])}]: ${esc(g[7])}</p><p class="zh"><b>论文示例</b>【${esc(g[6])}】：${esc(g[8])}</p>`;
          }
          el.addEventListener('click', e => { const t = e.target.closest('[data-g]'); if (t) { sel = +t.dataset.g; draw(); } });
          draw();
        }
      },
      kid_en: "Imagine your school gets a new robot helper. A good one behaves well at four different moments. **When you first meet it**, it tells you what it can and can’t do — like a new classmate introducing themselves. **While you work together**, it speaks up at the right time with useful things, not random facts in the middle of a test. **When it messes up**, it’s easy to say “no, not that” and fix it — like having an eraser. **Over the weeks**, it lets you change its settings and tells you when it changes. Amershi’s 18 guidelines are sorted into exactly these four moments.",
      kid_zh: "想象学校来了一个机器人助手。一个好助手要在四个时刻表现得体。**刚认识时**，它先告诉你它会什么、不会什么——就像新同学先做自我介绍。**一起做事时**，它在合适的时候说有用的话，而不是考试时在你耳边乱插嘴。**它出错时**，你能很容易地说“不是这个”然后改掉——就像手边有块橡皮。**过了几周后**，它让你自己调设置，自己有变化时也会提前告诉你。Amershi 的 18 条准则，就是按这四个时刻分组的。",
      steps: [{"en": "Read the arrow at the top from left to right: it is **time**, from the first meeting to weeks later. The 18 rules are sorted by WHEN they matter.", "zh": "从左往右看最上面那根箭头：它代表**时间**，从第一次见面到几周以后。18 条准则是按“什么时候起作用”来分的。", "hi": ["c9_initially", "c9_during", "c9_wrong", "c9_overtime"]}, {"en": "**Initially** — before you rely on it. Only two rules: say what you can do (G1) and how well you can do it (G2).", "zh": "**初始阶段**——在你依赖它之前。只有两条：说清能做什么（G1），说清做得有多好（G2）。", "hi": ["c9_initially", "c9_g1", "c9_g2"]}, {"en": "**During interaction** — while you are using it: show up at the right time, show only what helps right now, be polite, be fair.", "zh": "**交互过程中**——你正在用它的时候：时机要对，只给此刻有用的信息，要有礼貌，要公平。", "hi": ["c9_during", "c9_g3", "c9_g4", "c9_g5", "c9_g6"]}, {"en": "**When wrong** — AI WILL make mistakes. So make it easy to call it up, wave it away, fix it, play safe when unsure, and explain itself.", "zh": "**出错时**——AI 一定会出错。所以要让人容易叫它出来、容易打发它走、容易改正；它没把握时要收着点，还要能解释自己为什么这么做。", "hi": ["c9_wrong", "c9_g7", "c9_g8", "c9_g9", "c9_g10", "c9_g11"]}, {"en": "**Over time** — it learns and changes, so it must remember carefully, change slowly, take your feedback, give you master controls, and tell you when it changes.", "zh": "**随时间推移**——它会学习、会变化，所以要谨慎地记住、慢慢地改变、接收你的反馈、给你总开关，有变化时要通知你。", "hi": ["c9_overtime", "c9_g12", "c9_g13", "c9_g14", "c9_g15", "c9_g16", "c9_g17", "c9_g18"]}, {"en": "For the exam, pick one rule from each column — the four with dots (G1, G4, G9, G17) are a safe set. Click any cell to read its exact wording and the paper’s example.", "zh": "考试时每列选一条——带圆点的四条（G1、G4、G9、G17）就是稳妥的组合。点任何一格都能看到原文表述和论文里的例子。", "hi": ["c9_g1", "c9_g4", "c9_g9", "c9_g17"]}],
      short_en: `Amershi et al. group the 18 guidelines by **when they apply**. **Initially** — G1 *Make clear what the system can do*: show users the AI’s scope before they rely on it. **During interaction** — G4 *Show contextually relevant information*: surface only what fits the user’s current task and setting. **When wrong** — G9 *Support efficient correction*: assume errors and make editing or undoing cheap. **Over time** — G17 *Provide global controls*: let users set what the system monitors and how it behaves overall.`,
      short_zh: `Amershi 等人按**适用时机**把 18 条准则分组。**初始阶段**——G1“说清系统能做什么”：在用户依赖 AI 之前，先让他们看到它的能力范围。**交互过程中**——G4“显示与情境相关的信息”：只呈现符合用户当前任务和处境的内容。**出错时**——G9“方便地纠正”：预设会出错，让编辑和撤销的成本很低。**随时间推移**——G17“提供全局控制”：让用户设定系统监测什么、整体如何表现。`,
      basis_en: `Checked against Table 1 of the CHI 2019 camera-ready paper (Microsoft Research PDF): the four phase groups (G1–2, G3–6, G7–11, G12–18) and every guideline title, description and example in the grid match the table. The lecture slides themselves were not available.`,
      basis_zh: `已对照 CHI 2019 论文终稿（微软研究院 PDF）的表 1 核对：四个阶段的分组（G1–2、G3–6、G7–11、G12–18）以及图中每条准则的标题、描述和示例都与原表一致。课堂幻灯片本身无法获取。`,
      links: [
        { t: 'Amershi et al. 2019 — paper (PDF)', u: 'https://www.microsoft.com/en-us/research/uploads/prod/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf' },
        { t: 'ACM Digital Library entry', u: 'https://dl.acm.org/doi/10.1145/3290605.3300233' },
        { t: 'Microsoft HAX Toolkit — AI guidelines', u: 'https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/' }
      ],
      rel: ['9.2', '9.3', '6.5'],
      cap_en: 'All 18 guidelines laid out on the timeline of use. Click a cell for its full wording and the paper’s example; dots mark the four picked in the answer.',
      cap_zh: '把 18 条准则按使用时间线排开。点任一格可看完整表述和论文原例；圆点标出答案中选的四条。',
      a_en: `[[c9_amershi]] groups the guidelines by the moment in the user’s experience when they matter. One from each group, in my own words:

- **[[c9_initially]] — [[c9_g1|G1, Make clear what the system can do]].** Before people rely on an AI feature, the designer must show them its scope — what it does and what it doesn’t — so expectations are realistic from the first use.
- **[[c9_during]] — [[c9_g4|G4, Show contextually relevant information]].** While someone is working, the AI should surface what fits their current task and situation, not everything it knows. The designer has to model the context, not just the data.
- **[[c9_wrong]] — [[c9_g9|G9, Support efficient correction]].** The designer must assume the AI will be wrong and make fixing it cheap: easy to edit, undo or refine the output instead of starting over.
- **[[c9_overtime]] — [[c9_g17|G17, Provide global controls]].** Over the long run, users need settings to decide what the system watches and how it behaves overall (turn personalization off, limit data use), not only one-off fixes.

The grouping itself is the lesson: an AI product is not designed once at the first screen — it must be designed for first contact, for ongoing use, for failure, and for change.`,
      a_zh: `[[c9_amershi]]按用户体验中“准则起作用的时刻”来分组。每组各选一条，用我自己的话说：

- **[[c9_initially]]——[[c9_g1|G1：说清系统能做什么]]。**在人们依赖某个 AI 功能之前，设计者必须让他们看到它的范围——能做什么、不能做什么——从第一次使用起就形成现实的预期。
- **[[c9_during]]——[[c9_g4|G4：显示与情境相关的信息]]。**在用户工作的过程中，AI 应该呈现与当前任务和处境相符的内容，而不是把知道的一切都抛出来。设计者要建模的是“情境”，而不只是数据。
- **[[c9_wrong]]——[[c9_g9|G9：方便地纠正]]。**设计者必须预设 AI 会出错，并让修正的成本很低：能轻松编辑、撤销或微调输出，而不必从头再来。
- **[[c9_overtime]]——[[c9_g17|G17：提供全局控制]]。**长期来看，用户需要设置项来决定系统监测什么、整体如何表现（关闭个性化、限制数据使用），而不仅仅是一次次的局部修正。

分组本身就是要点：AI 产品不是在第一个页面设计一次就完事——它必须为初次接触、持续使用、出错和变化分别设计。`,
      hook_en: 'Initially = set expectations · During = fit the moment · When wrong = make fixing cheap · Over time = give control as it changes.',
      hook_zh: '初始 = 设定预期 · 交互中 = 契合当下 · 出错时 = 让纠错变便宜 · 随时间 = 变化中给用户控制权。',
      trap_en: 'Use the right group for each guideline (G1–2 / G3–6 / G7–11 / G12–18) and explain in your OWN words what the designer must do — not just copy the title.',
      trap_zh: '每条准则要放对组（G1–2 / G3–6 / G7–11 / G12–18），并用自己的话说明设计者要做什么——不要只抄标题。'
    },
    {
      lec_open_en: "Two restaurants: one hands you a menu; the other has a waiter who says \"we make lots of things!\" and you have to guess. Which one would you go back to?",
      lec_open_zh: "两家餐厅：一家递给你菜单；另一家服务员只说“我们能做很多东西哦！”你得自己猜。你会再去哪一家？",
      lec_why_en: "The paper's G1 example: an **activity tracker** that shows all the metrics it tracks and explains how. **Why does that apply the guideline?** Because the screen itself is the menu: before you ask anything, you know its scope (steps, heart rate, sleep) and roughly how it measures — so you trust what it can do and don't expect what it can't.\n\nA product that breaks it: many **smart speakers**. A cylinder with a light ring gives no menu at all. You discover its abilities by failing — \"Sorry, I can't help with that.\" **Why is that bad design?** Each failure teaches users to ask for less, so they never find the features that do exist.\n\nThe pattern to teach: pick the paper's example, name the guideline, explain **how the design makes the guideline visible**, then show a product where the same need is ignored.",
      lec_why_zh: "论文里 G1 的例子：**活动追踪器**把它追踪的所有指标都显示出来，并说明是怎么测的。**为什么这体现了这条准则？**因为屏幕本身就是菜单：你还没开口，就知道它的范围（步数、心率、睡眠）和大概的测量方式——所以你相信它能做的事，也不会期待它做不到的事。\n\n违反这条准则的产品：很多**智能音箱**。一个带灯环的圆柱体，没有任何“菜单”。你只能靠失败来发现它会什么——“抱歉，我帮不了这个。”**为什么这是糟糕的设计？**每一次失败都在教用户少问一点，于是那些真正存在的功能，用户永远找不到。\n\n要教的答题套路：选论文里的例子，说出准则，解释**设计是怎样让这条准则“看得见”的**，再举一个忽视了同样需求的产品。",
      lec_trap_en: "Picking a broken product without connecting it to the SAME guideline as the paper's example. The question asks for one guideline, applied and then broken.",
      lec_trap_zh: "举了一个糟糕的产品，却没和论文例子对应到**同一条**准则。题目要的是同一条准则：先看它被做好，再看它被违反。",
      lec_ask_en: "Ask: \"Describe one app on your phone that breaks G1.\" — Listen for: a concrete app + what it hides about its abilities.",
      lec_ask_zh: "问：“说一个你手机上违反 G1 的 App。”——要听到：一个具体的 App，以及它把自己的哪些能力藏起来了。",
      lec_bridge_en: "Now turn the same lens on the tools we used this term — Claude Code, Ollama, Variable Machine. 9.3.",
      lec_bridge_zh: "现在把同样的眼光对准这学期我们用过的工具——Claude Code、Ollama、Variable Machine。9.3。",
      id: '9.2', t_en: 'An example application', t_zh: '一个应用实例',
      q_en: 'Each guideline comes with an example from a product category the participants tested (activity trackers, music recommenders, navigation, voice assistants, autocomplete, email and others). Pick one example and explain why it applies its guideline. Then describe a product you use that breaks the same guideline.',
      q_zh: '每条准则都配有一个来自参与者测试过的产品类别的例子（活动追踪器、音乐推荐、导航、语音助手、自动补全、电子邮件等）。选一个例子，解释它为什么体现了该准则；再描述一个你使用的、违反同一条准则的产品。',
      src: 'Amershi et al., Table 1',
      fig() {
        let s = '';
        // LEFT — activity tracker applies G1
        s += F.text(190, 26, 'APPLIES G1', { cls: 'big', color: F.C.green }) + F.sub(190, 44, '体现 G1 · 活动追踪器', { anchor: 'middle' });
        s += F.g(F.rect(150, 70, 80, 22, { fill: '#fff', rx: 6 }) + F.rect(150, 238, 80, 22, { fill: '#fff', rx: 6 }) +
          F.rect(120, 90, 140, 150, { fill: '#fff', rx: 26, sw: 1.6 }) +
          F.text(190, 122, 'WHAT I TRACK', { cls: 'tiny', color: F.C.mute }) +
          F.text(140, 148, 'STEPS', { anchor: 'start', cls: 'tiny' }) + F.text(140, 172, 'HEART', { anchor: 'start', cls: 'tiny' }) + F.text(140, 196, 'SLEEP', { anchor: 'start', cls: 'tiny' }) +
          F.text(242, 148, 'motion', { anchor: 'end', cls: 'tiny', color: F.C.green }) + F.text(242, 172, 'optical', { anchor: 'end', cls: 'tiny', color: F.C.green }) + F.text(242, 196, 'movement', { anchor: 'end', cls: 'tiny', color: F.C.green }) +
          F.text(190, 222, 'ⓘ how it works', { cls: 'tiny', color: F.C.green }), { tip: 'c9_g1', note: { en: 'Lists every metric it tracks and how — the user knows the scope before trusting it.', zh: '列出它追踪的每项指标以及如何追踪——用户在信任它之前就知道它的范围。' } });
        s += F.label([262, 150], 330, 'METRICS LISTED', { color: F.C.green }) + F.sub(338, 166, '列出全部指标');
        s += F.label([262, 222], 330, 'EXPLAINS HOW', { color: F.C.green }) + F.sub(338, 238, '说明原理');
        s += F.line(470, 30, 470, 290, { stroke: '#ddd', dash: '3 4', sw: .8 });
        // RIGHT — voice assistant breaks G1
        s += F.text(615, 26, 'BREAKS G1', { cls: 'big', color: F.C.red }) + F.sub(615, 44, '违反 G1 · 智能音箱', { anchor: 'middle' });
        s += F.g(`<ellipse cx="560" cy="120" rx="44" ry="13" fill="#fff" stroke="${F.C.ink}" stroke-width="1.2"/>` +
          F.path('M516,120 V230 A44,13 0 0 0 604,230 V120', { fill: '#fff' }) + `<ellipse cx="560" cy="120" rx="44" ry="13" fill="#fff" stroke="${F.C.ink}" stroke-width="1.2"/>` +
          [150, 165, 180, 195, 210].map(y => F.line(526, y, 594, y, { stroke: '#bbb', sw: .7 })).join('') +
          `<ellipse cx="560" cy="120" rx="22" ry="6" fill="${F.C.blueF}" stroke="${F.C.blue}"/>`, { tip: 'c9_g1', note: { en: 'No screen, no menu: the only way to learn what it can do is to guess and fail.', zh: '没有屏幕也没有菜单：想知道它能做什么，只能靠猜和失败。' } });
        s += F.rect(612, 70, 130, 40, { fill: F.C.redF, stroke: F.C.red, rx: 8, text: "Sorry, I can't\nhelp with that.", tcls: 'tiny', tcolor: F.C.red });
        s += F.text(660, 160, '?', { cls: 'big', color: F.C.mute }) + F.text(690, 190, '?', { cls: 'big', color: F.C.mute }) + F.text(640, 210, '?', { cls: 'big', color: F.C.mute });
        s += F.text(615, 262, 'CAPABILITIES HIDDEN', { cls: 'tiny', color: F.C.red }) + F.sub(615, 278, '能力藏起来：只能试错', { anchor: 'middle' });
        return F.svg(760, 300, s, { label: 'G1 applied and broken' });
      },
      glow: {
        name_en: 'Same desk, same guideline (G1)', name_zh: '同一张桌子，同一条准则（G1）',
        hint_en: 'T or click the tracker · S, space or click the speaker to ask it something', hint_zh: '按 T 或点追踪器 · 按 S / 空格或点音箱向它提问',
        aria: 'Isometric desk with an activity tracker and a smart speaker. Press T to wake the tracker, which lists what it measures; press S to ask the speaker, which hides what it can do.',
        mount(stage, api) {
          const K = api.iso.frame([[0, 0, 0], [330, 0, 0], [0, 230, 0], [330, 230, 0], [240, 70, 185]]);
          const { P, TOP, box, path } = K;
          const esc = api.iso.esc;
          let s = box(0, 0, 0, 330, 230, 8, 14);
          s += `<g transform="${TOP(0, 0, 8)}"><rect class="detail" x="10" y="10" width="310" height="210" rx="10"/></g>`;
          // desk labels (printed on the desk top)
          s += `<g transform="${TOP(22, 196, 8)}"><text class="label label-en" font-size="8.5">ACTIVITY TRACKER</text><text class="label-zh" y="12" font-size="8">活动追踪器：先告诉你它能做什么</text></g>`;
          s += `<g transform="${TOP(176, 128, 8)}"><text class="label label-en" font-size="8.5">SMART SPEAKER</text><text class="label-zh" y="12" font-size="8">智能音箱：能力藏在声音里</text></g>`;
          // ── tracker (front-left, drawn first) ──
          s += box(18, 136, 8, 34, 34, 3, 3);
          s += `<g id="g92-trk" class="press">${box(50, 124, 8, 70, 58, 14, 14)}</g>`;
          s += `<g transform="${TOP(50, 124, 22)}"><rect id="g92-thalo" class="halo" filter="url(#bloom)" x="-6" y="-6" width="82" height="70" rx="16"/></g>`;
          s += `<g transform="${TOP(57, 131, 22)}"><rect id="g92-tglass" class="glass" width="56" height="44" rx="7"/>
                  <g id="g92-tscr" opacity="0">
                    <text class="scr" x="5" y="10" font-size="5.6">STEPS   8,412</text>
                    <text class="scr" x="5" y="19" font-size="5.6">HEART   72 bpm</text>
                    <text class="scr" x="5" y="28" font-size="5.6">SLEEP   7h 10m</text>
                    <text class="scr-accent" x="5" y="38" font-size="5">ⓘ HOW IT MEASURES</text>
                  </g></g>`;
          s += box(120, 136, 8, 34, 34, 3, 3);
          // ── speaker (back-right) ──
          s += `<g id="g92-spk" class="press">${box(200, 30, 8, 70, 70, 110, 35)}</g>`;
          for (let z = 34; z <= 104; z += 10) {
            const pts = []; for (let i = 0; i <= 18; i++) { const a = -Math.PI / 4 + i / 18 * Math.PI; pts.push([235 + 35 * Math.cos(a), 65 + 35 * Math.sin(a), z]); }
            s += `<path class="detail" d="${path(pts)}"/>`;
          }
          s += `<g transform="${TOP(200, 30, 118)}"><circle id="g92-shalo" class="halo" filter="url(#bloom)" cx="35" cy="35" r="40"/>
                  <circle class="detail" cx="35" cy="35" r="30"/><circle id="g92-ring" class="glass" cx="35" cy="35" r="22" stroke-width="2"/></g>`;
          // reply bubble (flat, floating above the speaker)
          const b = P(235, 65, 168);
          s += `<g id="g92-bub" opacity="0" transform="translate(${b[0].toFixed(1)} ${b[1].toFixed(1)})">
                  <rect id="g92-bubr" class="face" x="-80" y="-24" width="160" height="34" rx="8"/>
                  <text id="g92-be" class="label-hi label-en" text-anchor="middle" y="-9" font-size="8"></text>
                  <text id="g92-bz" class="label-zh" text-anchor="middle" y="4" font-size="7.5"></text></g>`;
          const qa = P(285, 40, 110), qb = P(300, 90, 70), qc = P(268, 20, 60);
          s += `<g id="g92-q" opacity="0"><text class="label" x="${qa[0]}" y="${qa[1]}" font-size="14">?</text><text class="label" x="${qb[0]}" y="${qb[1]}" font-size="11">?</text><text class="label" x="${qc[0]}" y="${qc[1]}" font-size="9">?</text></g>`;
          stage.setAttribute('viewBox', K.viewBox); stage.innerHTML = s;
          const $ = id => stage.querySelector('#' + id);
          const ASKS = [
            ['What can you do?', '你能做什么？', 'I can help with lots of things!', '我能帮你做很多事！', 'vague'],
            ['Track my sleep.', '记录我的睡眠。', "Sorry, I can't help with that.", '抱歉，这个我帮不了。', 'no'],
            ['Set a timer, 10 min.', '定个 10 分钟的计时器。', 'Timer set for 10 minutes.', '已设定 10 分钟计时。', 'yes'],
            ['Read my last email.', '读一下我最新的邮件。', "Hmm, I don't know that one.", '嗯……这个我不知道。', 'no']
          ];
          const st = { trk: false, i: -1, talking: false };
          function render() {
            $('g92-tglass').classList.toggle('hot', st.trk);
            $('g92-thalo').classList.toggle('hot', st.trk);
            $('g92-tscr').setAttribute('opacity', st.trk ? 1 : 0);
            $('g92-ring').classList.toggle('hot', st.talking);
            $('g92-shalo').classList.toggle('hot', st.talking);
            api.power(st.trk || st.talking);
          }
          function tracker() {
            st.trk = !st.trk; render();
            api.say(st.trk ? 'tracker · shows its 3 metrics + how → G1 applied' : 'tracker · off',
                    st.trk ? '追踪器 · 列出 3 项指标和测量方式 → 体现 G1' : '追踪器 · 关');
          }
          let t1;
          function ask() {
            st.i = (st.i + 1) % ASKS.length; const [qe, qz, ae, az, kind] = ASKS[st.i];
            st.talking = true; render();
            $('g92-be').textContent = ae; $('g92-bz').textContent = az;
            const w = Math.max(ae.length * 4.9, az.length * 7.6) + 22;
            $('g92-bubr').setAttribute('width', w.toFixed(0)); $('g92-bubr').setAttribute('x', (-w / 2).toFixed(0));
            $('g92-bub').setAttribute('opacity', 1);
            $('g92-q').setAttribute('opacity', kind === 'yes' ? 0 : 1);
            api.say(`"${qe}" → ${kind === 'yes' ? 'works — but only a guess told you so' : kind === 'vague' ? 'vague — scope still hidden' : 'fails — you only learn by failing'} · G1 broken`,
                    `“${qz}” → ${kind === 'yes' ? '成功——但只是碰巧猜对' : kind === 'vague' ? '含糊——范围仍看不见' : '失败——只能靠试错来发现'} · 违反 G1`);
            clearTimeout(t1); t1 = setTimeout(() => { st.talking = false; render(); }, 1600);
          }
          $('g92-trk').addEventListener('click', tracker);
          $('g92-spk').addEventListener('click', ask);
          render(); api.say('press T or S', '按 T 或 S');
          return {
            key: e => {
              const k = e.key.toLowerCase();
              if (k === 't') { tracker(); return true; }
              if (k === 's' || k === ' ') { ask(); return true; }
              return false;
            },
            unmount: () => clearTimeout(t1),
            demo: () => { if (!st.trk) tracker(); api.after(1100, ask); }
          };
        }
      },
      kid_en: "Think of two restaurants. The first gives you a **menu**: you see every dish and what’s in it before you order. The second has no menu — you just guess dishes and the waiter keeps saying “sorry, we don’t have that.” An activity tracker is the first restaurant: on day one it shows the list of what it measures and how. A smart speaker is the second: you only find out what it can’t do when it fails. Guideline G1 is simply: **show the menu**.",
      kid_zh: "想象两家餐厅。第一家给你**菜单**：点菜前你就能看到每道菜和里面有什么。第二家没有菜单——你只能猜着点，服务员一次次说“不好意思，这个没有”。运动手环就是第一家：第一天它就列出它测什么、怎么测。智能音箱是第二家：你只有在它答不上来时，才知道它不会什么。准则 G1 说的就是：**把菜单拿出来**。",
      steps: [{"en": "This desk has two gadgets that both use AI. We are testing one rule: **G1 — make clear what the system can do**.", "zh": "桌上有两个都用了 AI 的小设备。我们只检验一条准则：**G1——说清系统能做什么**。", "hi": []}, {"en": "Press **T** (or click the band). Its screen lists exactly what it measures and how — like reading the menu before you order.", "zh": "按 **T**（或点手环）。它的屏幕列出它到底测什么、怎么测——就像点菜前先看菜单。", "hi": []}, {"en": "Now press **S** (or click the speaker) and ask it something. No screen, no list — you only learn what it can’t do when it says sorry.", "zh": "现在按 **S**（或点音箱）问它点什么。没有屏幕，也没有清单——只有它说“对不起”时，你才知道它不会什么。", "hi": []}, {"en": "Press **S** a few more times. Notice you are **guessing**. That guessing is what breaking G1 feels like.", "zh": "再按几次 **S**。你会发现自己在**瞎猜**。这种“只能猜”的感觉，就是违反 G1。", "hi": []}, {"en": "Exam recipe: name the paper’s example (activity tracker), say WHY it applies G1 (shows its scope up front), then name a product you use that breaks it.", "zh": "考试写法：说出论文里的例子（运动手环），说明它为什么体现 G1（一开始就亮出能力范围），再举一个你用过、违反这条的产品。", "hi": []}],
      short_en: `In Table 1, **G1 – Make clear what the system can do** is illustrated by **activity trackers**: the product displays all the metrics it tracks and explains how. That applies G1 because users learn the system’s **scope** before trusting it, so their expectations match what it can really do. A smart speaker (e.g. Alexa) breaks G1: it shows no list of abilities, so I only discover its limits when it answers “Sorry, I can’t help with that.”`,
      short_zh: `在表 1 中，**G1“说清系统能做什么”**的例子是**活动追踪器**：产品列出它追踪的所有指标，并说明是怎么测的。这体现了 G1，因为用户在信任它之前就知道了系统的**能力范围**，预期和实际能力一致。智能音箱（如 Alexa）违反了 G1：它不展示任何能力清单，我只有在它回答“抱歉，这个我帮不了”时才知道它的局限。`,
      basis_en: `Checked against Table 1 of the CHI 2019 paper: G1’s example is [Activity Trackers] — it “displays all the metrics that it tracks and explains how.” The other examples listed in the answer (music recommenders’ hedging for G2, “Tap to Edit” for G9, 3–4 autocomplete suggestions for G10, fastest-route explanation for G11, teaching callouts for G18) are from the same table.`,
      basis_zh: `已对照 CHI 2019 论文表 1 核对：G1 的示例是【活动追踪器】——“列出它追踪的所有指标，并说明如何测量”。答案中列出的其他示例（G2 音乐推荐的留余地措辞、G9 的“点按编辑”、G10 自动补全给 3–4 个候选、G11 解释选了最快路线、G18 新功能小提示）都出自同一张表。`,
      links: [
        { t: 'Amershi et al. 2019 — paper (PDF), Table 1', u: 'https://www.microsoft.com/en-us/research/uploads/prod/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf' },
        { t: 'Microsoft Research blog — the guidelines', u: 'https://www.microsoft.com/en-us/research/blog/guidelines-for-human-ai-interaction-design/' }
      ],
      rel: ['9.1', '9.3', '6.1'],
      cap_en: 'Same guideline, two products on one desk. The tracker shows its scope the moment you wake it; the speaker hides its scope inside a voice, so you discover its limits only by failing.',
      cap_zh: '同一条准则，同一张桌上的两个产品。追踪器一唤醒就展示它的能力范围；音箱把范围藏在声音里，你只能通过失败来发现它的局限。',
      a_en: `**Example: [[c9_g1|G1 — Make clear what the system can do]], activity trackers.** In Table 1 the activity-tracker example shows the product displaying all the metrics it tracks and explaining how it measures them. That applies G1 because the user learns the system’s **scope** before relying on it: it counts steps and estimates sleep from movement — so a user will not expect it to know, say, their stress level, and will read the sleep number as an estimate. Good expectations at the start prevent disappointment and over-trust later.

**A product that breaks G1: a smart speaker / voice assistant (e.g. Alexa or Siri).** There is no screen or menu of abilities. You find out what it can do only by asking and getting “Sorry, I can’t help with that,” or by it doing something different from what you meant. Its capabilities change silently with updates, and similar-sounding requests succeed or fail unpredictably. Because the scope is invisible, people either under-use it (only timers and weather) or over-trust it.

What it should do: a short spoken or in-app list of what it can do, examples tied to the current context, and a clear answer when a request is out of scope.

**Other Table 1 examples you could pick instead:** G2 — music recommenders hedge with “we think you’ll like”; G9 — voice assistants let you “tap to edit” a misheard request; G10 — autocomplete offers 3–4 suggestions instead of completing for you; G11 — navigation says the route was chosen because it is fastest; G15 — music apps keep love/dislike buttons in reach; G18 — navigation apps show small callouts for new features.`,
      a_zh: `**示例：[[c9_g1|G1——说清系统能做什么]]，活动追踪器。**表 1 中的活动追踪器示例是：产品展示它追踪的全部指标，并解释如何测量。这体现了 G1，因为用户在依赖它之前就了解了系统的**范围**：它能数步数、根据身体活动估计睡眠——所以用户不会指望它知道自己的压力水平，也会把睡眠数据当成估计值来看。一开始建立正确的预期，就能避免日后的失望和过度信任。

**违反 G1 的产品：智能音箱 / 语音助手（如 Alexa 或 Siri）。**它没有屏幕，也没有能力清单。你只能靠提问、听到“抱歉，我帮不了这个”，或者它做了与你本意不同的事，才知道它能做什么。它的能力会随更新悄悄改变，听起来相似的请求时而成功、时而失败，毫无规律。因为范围是看不见的，人们要么用得很少（只设定时器、问天气），要么过度信任它。

它应该做的：用一段简短的语音或 App 内的清单说明能做什么，给出与当前情境相关的示例，并在请求超出范围时清楚地说明。

**表 1 里你也可以改选的其他例子：**G2——音乐推荐用“我们觉得你会喜欢”这种留余地的说法；G9——语音助手让你“点按编辑”听错的请求；G10——自动补全给出 3–4 个候选，而不是直接替你补全；G11——导航说明选这条路线是因为最快；G15——音乐应用把“喜欢 / 不喜欢”按钮放在手边；G18——导航应用用小提示介绍新功能。`,
      hook_en: 'Pick one Table 1 example → say WHY it applies the guideline (what the user now understands) → a product you use that fails at the same thing.',
      hook_zh: '选表 1 的一个例子 → 说明它为什么体现准则（用户因此明白了什么）→ 再举一个你用过、在同一点上失败的产品。',
      trap_en: 'The broken example must break the SAME guideline you picked. Be concrete: name the product and the moment it fails.',
      trap_zh: '反例必须违反你所选的“同一条”准则。要具体：说出产品名和它失败的那个时刻。'
    },
    {
      lec_open_en: "Ask: \"You've used an AI agent all semester. If it were a student, what grade would you give it — and for what?\"",
      lec_open_zh: "先问：“这学期你一直在用 AI 智能体。如果它是个学生，你会给它打几分？凭什么？”",
      lec_why_en: "Take Claude Code (an agent harness). It applies **G17 global controls** well: permission modes let you decide once what it may do without asking — **why that matters**: you set the autonomy level instead of approving 40 pop-ups. It applies **G9 efficient correction**: every edit is a diff you can reject or undo.\n\nWhere it breaks: **G2 make clear how well it can do what it can do**. It can say \"Done!\" with the same confidence whether it ran the tests or not. **Why is that dangerous?** Because confident language makes people stop checking — exactly when they should check.\n\nWhat to change: report what was **verified** versus **assumed** (\"tests passed\" vs \"not run\"), with a confidence level. The structure of a great answer: tool → one guideline done well and why → one broken and why → a concrete fix.",
      lec_why_zh: "拿 Claude Code（一个智能体 harness）来说。它把 **G17 全局控制**做得很好：权限模式让你一次决定它哪些事可以不问就做——**这为什么重要**：你设定的是自主程度，而不是点 40 次弹窗。它也做到了 **G9 高效纠正**：每一处修改都是一个 diff，你可以拒绝或撤销。\n\n它违反的地方：**G2 说清楚它做得有多好**。不管它有没有跑测试，它都能用同样自信的语气说“搞定了！”。**为什么这很危险？**因为自信的语言会让人停止检查——恰恰是在最该检查的时候。\n\n怎么改：报告里区分**验证过的**和**假设的**（“测试通过” vs “没跑测试”），再给一个把握程度。好答案的结构：工具 → 一条做得好的准则及原因 → 一条违反的及原因 → 一个具体的修改方案。",
      lec_trap_en: "Giving opinions (\"it's annoying\") instead of naming a guideline number and its wording. The grader looks for Amershi's language.",
      lec_trap_zh: "只给感受（“它挺烦的”），不说准则编号和原话。阅卷看的是 Amershi 的用语。",
      lec_ask_en: "Ask: \"Which guideline does a confident 'Done!' break, and what would you add to the screen?\" — Listen for: G2; show what was checked and how sure it is.",
      lec_ask_zh: "问：“一句自信的‘搞定了！’违反了哪条准则？你会在屏幕上加什么？”——要听到：G2；显示检查了什么、有多大把握。",
      lec_bridge_en: "We've judged the tools. The last question turns to her: where do all of these tools meet her own practice? C5.",
      lec_bridge_zh: "我们评价完了工具。最后一题转向她自己：这些工具和她自己的创作实践在哪里相遇？C5。",
      id: '9.3', t_en: 'The guidelines and our tools', t_zh: '准则与我们的工具',
      q_en: 'Pick one tool we used this term (a commercial assistant, an agent harness, a local model, Variable Machine). Which guideline does it apply well, which does it break, and what would you change?',
      q_zh: '选一个本学期用过的工具（商业 AI 助手、智能体框架、本地模型、Variable Machine）。它很好地体现了哪条准则？违反了哪条？你会怎么改？',
      src: 'Amershi et al.',
      fig() {
        const C = F.C;
        let s = '';
        // the tool: a Claude Code session in a terminal window
        s += F.rect(14, 14, 440, 352, { fill: '#fff', rx: 8 });
        s += F.line(14, 40, 454, 40, { sw: 1 });
        [28, 42, 56].forEach(x => s += `<circle cx="${x}" cy="27" r="4" fill="#fff" stroke="${C.ink}"/>`);
        s += F.text(234, 27, 'claude — ~/my-site', { cls: 'tiny', color: C.mute });
        const L = (y, t, col = C.ink, cls = 'mono') => F.text(30, y, t, { anchor: 'start', cls, color: col });
        // rows (y positions are reused by the leader lines)
        const Y = { req: 66, edit: 100, diff: 132, perm: 196, done: 290 };
        s += F.g(L(Y.req, '> add a contact form to the homepage', C.blue), { tip: 'c9_g10', note: { en: 'A vague request: which page? which fields? It never asks.', zh: '一个含糊的请求：哪个页面？哪些字段？它从不追问。' } });
        s += L(Y.edit, '● Edit(index.html)');
        s += F.g(F.rect(30, Y.diff - 18, 406, 50, { fill: '#fff', stroke: '#ccc', rx: 4 }) +
          `<rect x="31" y="${Y.diff - 17}" width="404" height="22" fill="${C.greenF}"/><rect x="31" y="${Y.diff + 7}" width="404" height="22" fill="${C.redF}"/>` +
          F.text(40, Y.diff - 2, '+ <form method="post" action="/contact">', { anchor: 'start', cls: 'mono', color: C.green }) +
          F.text(40, Y.diff + 22, '- <p>Email me sometime</p>', { anchor: 'start', cls: 'mono', color: C.red }),
          { tip: 'c9_g9', note: { en: 'The diff: every change is visible and can be rejected.', zh: 'diff：每处改动都看得见，也都能拒绝。' } });
        s += F.g(F.rect(30, Y.perm - 26, 406, 66, { fill: C.amberF, stroke: C.amber, rx: 4 }) +
          F.text(42, Y.perm - 8, 'Allow this edit to index.html?', { anchor: 'start', cls: 'mono' }) +
          F.text(42, Y.perm + 12, '1 Yes   2 Yes, don’t ask again   3 No', { anchor: 'start', cls: 'tiny', color: C.ink }) +
          F.text(42, Y.perm + 30, 'shift+tab · switch permission mode', { anchor: 'start', cls: 'tiny', color: C.mute }),
          { tip: 'c9_g17', note: { en: 'The permission prompt and modes: you set the rules for the whole session.', zh: '权限提示和模式：你为整个会话定规则。' } });
        s += L(248, '● Bash(open index.html)', C.mute);
        s += F.g(L(Y.done, '✓ Done — the form works on every page.', C.ink) +
          `<rect x="26" y="${Y.done - 16}" width="350" height="24" rx="4" fill="none" stroke="${C.red}" stroke-dasharray="4 3"/>` +
          F.text(30, 330, '(no tests were run · nothing says so)', { anchor: 'start', cls: 'tiny', color: C.red }),
          { tip: 'c9_g2', note: { en: 'A confident “Done” with nothing checked.', zh: '什么都没检查，就自信地说“完成”。' } });
        // scorecard on the right, wired to the moments in the session
        const rows = [
          { y: Y.perm, ok: true, g: 'G17', en: 'Global controls', zh: '提供全局控制', why: 'permission modes', wz: '权限模式', tip: 'c9_g17', col: C.green },
          { y: Y.diff, ok: true, g: 'G9', en: 'Efficient correction', zh: '方便地纠正', why: 'diff · reject · undo', wz: '改动可见、可拒绝', tip: 'c9_g9', col: C.green },
          { y: Y.done, ok: false, g: 'G2', en: 'How well it can do', zh: '说清做得有多好', why: 'same confident “Done”', wz: '没测也说“完成”', tip: 'c9_g2', col: C.red },
          { y: Y.req, ok: false, g: 'G10', en: 'Scope when unsure', zh: '不确定时缩小范围', why: 'guesses, never asks', wz: '只猜不问', tip: 'c9_g10', col: C.red }
        ].sort((a, b) => a.y - b.y);
        s += F.text(608, 60, 'SCORECARD · AMERSHI', { cls: 'lt' }) + F.sub(608, 76, '用准则给工具打分', { anchor: 'middle' });
        rows.forEach((r, i) => {
          const ry = 88 + i * 62;
          s += F.path(`M454,${r.y - 4} C${490},${r.y - 4} ${470},${ry + 27} ${492},${ry + 27}`, { stroke: r.col, sw: 0.9, dash: '3 3' });
          s += F.rect(492, ry, 232, 56, { fill: r.ok ? C.greenF : C.redF, stroke: r.col, rx: 6, tip: r.tip });
          s += F.text(504, ry + 13, `${r.g} ${r.en}`, { anchor: 'start', cls: 'tiny', color: r.col });
          s += F.text(712, ry + 14, r.ok ? '✓' : '✗', { anchor: 'end', cls: 'big', color: r.col });
          s += F.text(504, ry + 28, r.why, { anchor: 'start', cls: 'tiny', color: C.ink }) + F.sub(504, ry + 49, r.wz);
        });
        s += F.rect(492, 346, 232, 22, { fill: C.ink, stroke: C.ink, rx: 4 });
        s += F.text(608, 360, 'FIX → report what was verified', { cls: 'tiny', color: '#fff' });
        s += F.sub(608, 384, '修改：报告里写明验证了什么、没验证什么、把握多大', { anchor: 'middle' });
        return F.svg(760, 396, s, { label: 'Claude Code session scored with the guidelines' });
      },
      cap_en: 'Score the tool at the moments it actually happened. The permission prompt and the diff apply guidelines well (green); the confident “Done” and the unasked guess break them (red). The fix goes into the final report.',
      cap_zh: '在工具真正发生的那些时刻打分。权限提示和 diff 很好地体现了准则（绿）；自信的“完成”和没问就猜违反了准则（红）。修改应落在最后的报告上。',
      kid_en: "Pretend an AI helper did your group project and you have to write its **report card**. Two things it does well: it **asks before touching your files**, like a friend asking “can I borrow your pen?”, and it **shows exactly what it changed**, like a teacher’s red pen. Two things it does badly: it says “**Done, all perfect!**” without checking — like saying your homework is finished without checking the answers — and it **guesses** instead of asking what you meant. Your answer: one good rule, one broken rule, and how you would fix it.",
      kid_zh: "假装一个 AI 助手帮你做了小组作业，你要给它写一张**成绩单**。它做得好的两件事：**动你的文件之前先问**，就像朋友先问“能借你的笔吗？”；还有**清楚标出改了哪里**，像老师用红笔批改。做得不好的两件事：它没检查就说“**做完了，全都没问题！**”——就像没对答案就说作业写完了；还有它**靠猜**，不问你到底想要什么。你的答案：一条它做到的准则、一条它违反的准则，再说你会怎么改。",
      steps: [{"en": "Left: a moment in Claude Code, an AI that edits a website. Right: a report card using Amershi’s rules. Each line connects a moment to a grade.", "zh": "左边：Claude Code（一个会改网站的 AI）里的一个片段。右边：用 Amershi 准则打的成绩单。每条连线把一个时刻连到一个分数。", "hi": []}, {"en": "It shows exactly what it changed — green lines added, red lines removed — and you can say no. That is **G9, easy to correct. ✓**", "zh": "它把改动清楚地标出来——绿色是加的，红色是删的——你可以拒绝。这就是 **G9：方便纠正 ✓**。", "hi": ["c9_g9"]}, {"en": "Before editing, it asks permission, and you can switch the rules for the whole session. That is **G17, global controls. ✓**", "zh": "改文件之前它会请求许可，你还能切换整个会话的规则。这就是 **G17：全局控制 ✓**。", "hi": ["c9_g17"]}, {"en": "Then it says “Done — works on every page” but ran no tests. Sounding sure without checking breaks **G2, say how well it can do. ✗**", "zh": "然后它说“完成——每个页面都能用”，但一个测试都没跑。没检查却说得很肯定，违反了 **G2：说清做得有多好 ✗**。", "hi": ["c9_g2"]}, {"en": "And it never asked which page or which fields — it guessed. That breaks **G10, scope when unsure. ✗**", "zh": "而且它从没问过是哪个页面、要哪些字段——全靠猜。这违反了 **G10：不确定时缩小范围 ✗**。", "hi": ["c9_g10"]}, {"en": "Your answer = tool + one rule it follows + one rule it breaks + your fix. The fix here: make it report what it actually checked, and ask before guessing.", "zh": "你的答案 = 工具 + 一条做到的准则 + 一条违反的准则 + 你的修改。这里的修改：让它报告到底检查了什么，并且先问再猜。", "hi": ["c9_g17", "c9_g2"]}],
      short_en: `**Claude Code** (an agent harness) applies **G17 – Provide global controls**: its permission modes let me decide once what it may do without asking, and every edit appears as a diff I can reject (G9, efficient correction). It breaks **G2 – Make clear how well the system can do what it can do**: it reports “Done” with the same confidence whether or not it ran any tests. I would add a verification summary to every report — what ran, what was assumed, what is untested — with a confidence level, and have it ask before guessing.`,
      short_zh: `**Claude Code**（一个智能体框架）很好地体现了**G17“提供全局控制”**：它的权限模式让我一次性决定它哪些事可以不经询问就做，每次编辑都显示为可以拒绝的 diff（G9，方便地纠正）。它违反了**G2“说清系统做得有多好”**：无论有没有运行测试，它都用同样自信的语气报告“完成”。我会在每次报告中加入验证摘要——运行了什么、假设了什么、哪些没测——并标明把握程度，遇到不确定时先问再做。`,
      basis_en: `Built on Amershi et al. Table 1 (G2, G9, G10, G17 wording checked) and Claude Code’s permission-mode documentation (ask before edits, accept edits automatically, plan only). Whether a tool breaks G2 depends on the session you actually saw — anchor your answer in a real moment.`,
      basis_zh: `依据 Amershi 等人表 1（已核对 G2、G9、G10、G17 的表述）以及 Claude Code 权限模式文档（编辑前询问、自动接受编辑、只做计划）。某个工具是否违反 G2，取决于你实际看到的那次使用——答案要落在一个真实的时刻上。`,
      links: [
        { t: 'Claude Code — Choose a permission mode', u: 'https://code.claude.com/docs/en/permission-modes' },
        { t: 'Amershi et al. 2019 — paper (PDF)', u: 'https://www.microsoft.com/en-us/research/uploads/prod/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf' }
      ],
      rel: ['6.5', '6.2', '9.1'],
      a_en: `**Tool: Claude Code (an agent harness).** *(A model answer — you can swap in any tool you used and keep the same three-part structure.)*

**Applies well — [[c9_g17|G17, Provide global controls]]** (and [[c9_g9|G9, efficient correction]]). Its [[c9_permission]] let me decide once, globally, what the agent may do without asking: ask before every file edit, auto-accept edits, or only plan. Every proposed change is shown as a diff I can approve or reject, and I can interrupt it mid-task. I stay in control of what it touches.

**Breaks — [[c9_g2|G2, Make clear how well the system can do what it can do]].** When it finishes, it reports “Done — everything works” in the same confident tone whether it ran the tests or only guessed. It does not say how sure it is or what it did not check, so the user cannot calibrate trust — which matters most exactly when the agent is wrong (it also brushes against [[c9_g10|G10, scope services when in doubt]]).

**What I would change:** add a verification summary to every report — what was run and passed, what was assumed, what is untested — with a clear confidence level, and have it ask a clarifying question instead of guessing when the request is ambiguous.

*Other tools work too:* a local model in Ollama breaks [[c9_g1|G1]] — an empty prompt with no hint of what the model can do (that information is hidden in the model card); [[c8_vm]] applies [[c9_g16|G16]] well by showing the real command each click runs.`,
      a_zh: `**工具：Claude Code（一个智能体框架）。***（这是示范答案——你可以换成自己用过的任何工具，保留同样的三段结构。）*

**做得好——[[c9_g17|G17：提供全局控制]]**（以及 [[c9_g9|G9：方便地纠正]]）。它的[[c9_permission]]让我一次性、全局地决定智能体哪些事可以不经询问就做：每次编辑文件前都询问、自动接受编辑，或只做计划。每个改动都以 diff（差异）的形式展示，我可以批准或拒绝，也能在任务中途打断它。它碰什么，始终由我掌控。

**违反——[[c9_g2|G2：说清系统做得有多好]]。**完成任务时，无论它是真的跑了测试还是只是猜测，都会用同样自信的语气报告“完成——一切正常”。它不说自己有多大把握、哪些没检查，用户因此无法校准信任——而这恰恰在智能体出错时最要紧（也触及 [[c9_g10|G10：不确定时缩小范围]]）。

**我会怎么改：**在每次报告中加入“验证摘要”——运行了什么并通过、做了哪些假设、哪些没测试——并标明把握程度；遇到含糊的请求时，先提出澄清问题，而不是直接猜。

*也可以选别的工具：*Ollama 里的本地模型违反 [[c9_g1|G1]]——只有一个空白输入框，完全不提示模型能做什么（这些信息藏在模型卡里）；[[c8_vm]] 很好地体现了 [[c9_g16|G16]]——每次点击都显示它实际运行的命令。`,
      hook_en: 'Tool → one guideline it applies (with the concrete feature) → one it breaks (with the moment) → one specific change.',
      hook_zh: '工具 → 一条做得好的准则（具体功能）→ 一条违反的准则（具体时刻）→ 一个具体的修改。',
      trap_en: 'Three parts are required. Cite guidelines by number AND name, and make your change concrete enough to build.',
      trap_zh: '三部分缺一不可。准则要写编号和名称，修改建议要具体到可以动手做。'
    }
  ]
});
