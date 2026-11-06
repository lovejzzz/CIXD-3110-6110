/* CLASS 9 · GUIDELINES FOR HUMAN-AI INTERACTION */
(function () {
  const G = [
    ['G1', 'Make clear what the system can do', '说清系统能做什么', 'Help the user understand what the AI system is capable of doing.', '帮助用户理解这个 AI 系统能做哪些事。'],
    ['G2', 'Make clear how well the system can do what it can do', '说清系统做得有多好', 'Help the user understand how often the AI system may make mistakes.', '帮助用户理解这个 AI 系统大概多常出错。'],
    ['G3', 'Time services based on context', '根据情境把握时机', 'Time when to act or interrupt based on the user’s current task and environment.', '根据用户当前的任务和环境决定何时行动或打断。'],
    ['G4', 'Show contextually relevant information', '显示与情境相关的信息', 'Display information relevant to the user’s current task and environment.', '显示与用户当前任务和环境相关的信息。'],
    ['G5', 'Match relevant social norms', '符合社会规范', 'Deliver the experience in a way users would expect, given their social and cultural context.', '以符合用户社会与文化背景预期的方式提供体验。'],
    ['G6', 'Mitigate social biases', '减轻社会偏见', 'Ensure the system’s language and behaviors do not reinforce undesirable and unfair stereotypes and biases.', '确保系统的语言和行为不强化不良、不公平的刻板印象和偏见。'],
    ['G7', 'Support efficient invocation', '方便地调用', 'Make it easy to invoke or request the AI system’s services when needed.', '让用户在需要时可以轻松调用或请求 AI 服务。'],
    ['G8', 'Support efficient dismissal', '方便地关掉/忽略', 'Make it easy to dismiss or ignore undesired AI system services.', '让用户可以轻松关闭或忽略不想要的 AI 服务。'],
    ['G9', 'Support efficient correction', '方便地纠正', 'Make it easy to edit, refine, or recover when the AI system is wrong.', '当 AI 出错时，让用户容易编辑、修正或恢复。'],
    ['G10', 'Scope services when in doubt', '不确定时缩小范围', 'Engage in disambiguation or gracefully degrade the AI system’s services when uncertain about a user’s goals.', '不确定用户目标时，先澄清，或优雅地降级服务。'],
    ['G11', 'Make clear why the system did what it did', '说清系统为什么这样做', 'Enable the user to access an explanation of why the AI system behaved as it did.', '让用户能看到系统为何如此表现的解释。'],
    ['G12', 'Remember recent interactions', '记住最近的交互', 'Maintain short-term memory and allow the user to make efficient references to that memory.', '保持短期记忆，并让用户能方便地引用它。'],
    ['G13', 'Learn from user behavior', '从用户行为中学习', 'Personalize the user’s experience by learning from their actions over time.', '随时间从用户的行为中学习，实现个性化。'],
    ['G14', 'Update and adapt cautiously', '谨慎地更新和适应', 'Limit disruptive changes when updating and adapting the AI system’s behaviors.', '更新和调整系统行为时，限制破坏性的变化。'],
    ['G15', 'Encourage granular feedback', '鼓励细粒度反馈', 'Enable the user to provide feedback indicating their preferences during regular interaction.', '让用户在日常使用中就能表达自己的偏好。'],
    ['G16', 'Convey the consequences of user actions', '说明用户操作的后果', 'Immediately update or convey how user actions will impact future behaviors of the AI system.', '立即更新或说明用户的操作将如何影响系统未来的行为。'],
    ['G17', 'Provide global controls', '提供全局控制', 'Allow the user to globally customize what the AI system monitors and how it behaves.', '允许用户全局设置系统监测什么、如何表现。'],
    ['G18', 'Notify users about changes', '变化时通知用户', 'Inform the user when the AI system adds or updates its capabilities.', '当系统新增或更新能力时告知用户。']
  ];
  window.__AMERSHI = G;
  const t = {};
  G.forEach(([id, en, zh, den, dzh]) => { t['c9_' + id.toLowerCase()] = { en: `${id} · ${en}`, zh: `${id} · ${zh}`, d_en: den, d_zh: dzh }; });
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
  t_en: 'Guidelines for Human-AI Interaction', t_zh: '人机交互设计准则',
  intro_en: 'Amershi et al. turned two decades of advice into 18 testable guidelines, grouped by when they matter: initially, during interaction, when the system is wrong, and over time. Here we use them as a lens on products — including the tools we used this term.',
  intro_zh: 'Amershi 等人把二十年来的建议整理成 18 条可检验的准则，并按“什么时候起作用”分组：初始、交互中、出错时、随时间推移。我们把它们当作透镜来审视产品——包括本学期用过的工具。',
  qs: [
    {
      id: '9.1', t_en: 'When the guidelines apply', t_zh: '准则适用的时机',
      q_en: 'The 18 guidelines are grouped by when they apply: Initially, During interaction, When wrong, and Over time. Choose one guideline from each group and say in your own words what it asks of the designer.',
      q_zh: '18 条准则按适用时机分组：初始阶段、交互过程中、出错时、随时间推移。从每组各选一条准则，用你自己的话说明它对设计者提出了什么要求。',
      src: 'Amershi et al., CHI 2019, Table 1',
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
      cap_en: 'All 18 guidelines laid out on the timeline of use. Hover any cell for its full wording; the colored cells are the four picked in the answer.',
      cap_zh: '把 18 条准则按使用时间线排开。悬停任一格可看完整表述；彩色格是答案中选的四条。',
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
      cap_en: 'Same guideline, two products. The tracker shows its scope up front; the speaker hides its scope inside a voice, so users discover limits only by failing.',
      cap_zh: '同一条准则，两个产品。追踪器一开始就展示它的范围；音箱把范围藏在声音里，用户只能通过失败来发现它的局限。',
      a_en: `**Example: [[c9_g1|G1 — Make clear what the system can do]], activity trackers.** In Table 1 the activity-tracker example shows the product displaying all the metrics it tracks and explaining how it measures them. That applies G1 because the user learns the system’s **scope** before relying on it: it counts steps and estimates sleep from movement — so a user will not expect it to know, say, their stress level, and will read the sleep number as an estimate. Good expectations at the start prevent disappointment and over-trust later.

**A product that breaks G1: a smart speaker / voice assistant (e.g. Alexa or Siri).** There is no screen or menu of abilities. You find out what it can do only by asking and getting “Sorry, I can’t help with that,” or by it doing something different from what you meant. Its capabilities change silently with updates, and similar-sounding requests succeed or fail unpredictably. Because the scope is invisible, people either under-use it (only timers and weather) or over-trust it.

What it should do: a short spoken or in-app list of what it can do, examples tied to the current context, and a clear answer when a request is out of scope.`,
      a_zh: `**示例：[[c9_g1|G1——说清系统能做什么]]，活动追踪器。**表 1 中的活动追踪器示例是：产品展示它追踪的全部指标，并解释如何测量。这体现了 G1，因为用户在依赖它之前就了解了系统的**范围**：它能数步数、根据身体活动估计睡眠——所以用户不会指望它知道自己的压力水平，也会把睡眠数据当成估计值来看。一开始建立正确的预期，就能避免日后的失望和过度信任。

**违反 G1 的产品：智能音箱 / 语音助手（如 Alexa 或 Siri）。**它没有屏幕，也没有能力清单。你只能靠提问、听到“抱歉，我帮不了这个”，或者它做了与你本意不同的事，才知道它能做什么。它的能力会随更新悄悄改变，听起来相似的请求时而成功、时而失败，毫无规律。因为范围是看不见的，人们要么用得很少（只设定时器、问天气），要么过度信任它。

它应该做的：用一段简短的语音或 App 内的清单说明能做什么，给出与当前情境相关的示例，并在请求超出范围时清楚地说明。`,
      hook_en: 'Pick one Table 1 example → say WHY it applies the guideline (what the user now understands) → a product you use that fails at the same thing.',
      hook_zh: '选表 1 的一个例子 → 说明它为什么体现准则（用户因此明白了什么）→ 再举一个你用过、在同一点上失败的产品。',
      trap_en: 'The broken example must break the SAME guideline you picked. Be concrete: name the product and the moment it fails.',
      trap_zh: '反例必须违反你所选的“同一条”准则。要具体：说出产品名和它失败的那个时刻。'
    },
    {
      id: '9.3', t_en: 'The guidelines and our tools', t_zh: '准则与我们的工具',
      q_en: 'Pick one tool we used this term (a commercial assistant, an agent harness, a local model, Variable Machine). Which guideline does it apply well, which does it break, and what would you change?',
      q_zh: '选一个本学期用过的工具（商业 AI 助手、智能体框架、本地模型、Variable Machine）。它很好地体现了哪条准则？违反了哪条？你会怎么改？',
      src: 'Amershi et al.',
      fig() {
        const L = [
          { label: 'Terminal UI', sub: '终端界面：显示每一步', note: { en: 'Shows each tool call and file diff as it happens.', zh: '实时显示每次工具调用和文件改动。' }, pattern: 'hatch', density: 4, fill: '#fff' },
          { label: 'Permissions · G17 ✓', sub: '权限模式 = 全局控制', tip: 'c9_g17', fill: F.C.greenF, side: '#cfe8d5', pattern: 'grid', density: 4, pc: F.C.green, lc: F.C.green },
          { label: 'Diffs · undo · G9 ✓', sub: '改动可见、可拒绝 = 易纠正', tip: 'c9_g9', fill: F.C.greenF, side: '#cfe8d5', pattern: 'diag', density: 3, pc: F.C.green, lc: F.C.green },
          { label: '“Done!” report · G2 ✗', sub: '自信地报告完成 = 能力不清', tip: 'c9_g2', fill: F.C.redF, side: '#f3d0d2', pattern: 'dots', density: 6, pc: F.C.red, lc: F.C.red },
          { label: 'Model', sub: '模型：会出错', note: { en: 'The model underneath can be wrong — the harness decides whether you can see that.', zh: '底层模型会出错——框架决定了你能否看到这一点。' }, pattern: 'chips', density: 6 }
        ];
        const o = { alternate: true, gap: 2.8 };
        return F.svg(760, F.stackH(L.length, o), F.stack(L, o), { label: 'Claude Code evaluated with the guidelines' });
      },
      cap_en: 'Claude Code taken apart and scored. Green layers apply a guideline well; the red layer is where it breaks one. The fix belongs in the report layer: show how confident the agent is and what it actually verified.',
      cap_zh: '把 Claude Code 拆开打分。绿色层很好地体现了准则；红色层是违反准则的地方。修改应落在“报告”这一层：显示智能体有多有把握、实际验证了什么。',
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
