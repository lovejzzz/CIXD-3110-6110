/* CLASS 6 · AGENTS */
defTerms({
  c6_agent: { en: 'Agent', zh: '智能体（Agent）',
    d_en: 'Anthropic: a system in which an LLM dynamically directs its own process and tool use, keeping control over how it accomplishes a task — typically an LLM using tools based on feedback from its environment, in a loop.',
    d_zh: 'Anthropic 的定义：由大语言模型动态决定自己的流程和工具使用、自己掌控“怎么完成任务”的系统——通常就是一个根据环境反馈、循环使用工具的 LLM。' },
  c6_chatbot: { en: 'Chatbot', zh: '聊天机器人',
    d_en: 'One prompt in, one answer out. It can reason in text but cannot act; the human decides every next step.',
    d_zh: '一个提示进，一个回答出。它能用文字推理，但不能行动；每一步接下来做什么都由人来决定。' },
  c6_workflow: { en: 'Workflow (vs. agent)', zh: '工作流（相对于智能体）',
    d_en: 'Anthropic: LLMs and tools orchestrated through predefined code paths. The steps are fixed by the programmer, not chosen by the model.',
    d_zh: 'Anthropic：通过预先写好的代码路径来编排 LLM 和工具。步骤由程序员定死，而不是由模型自己选择。' },
  c6_loop: { en: 'Agent loop', zh: '智能体循环',
    d_en: 'Think → call a tool → observe the result (ground truth from the environment) → decide the next step → repeat until done or until a checkpoint.',
    d_zh: '思考 → 调用工具 → 观察结果（来自环境的真实反馈）→ 决定下一步 → 重复，直到完成或遇到检查点。' },
  c6_tools: { en: 'Tools', zh: '工具',
    d_en: 'Capabilities that let a model act on the world — read and write files, run shell commands, search, call an API. Agno: without tools an LLM can reason but cannot act.',
    d_zh: '让模型能对外部世界“动手”的能力——读写文件、运行命令、搜索、调用 API。Agno：没有工具，LLM 只能推理，不能行动。' },
  c6_harness: { en: 'Harness', zh: '驾驭框架 / Harness',
    d_en: 'The external execution system around a model: it decides what the model sees, which tools it may call, where state is stored, when validation runs, how failures are recovered, and when execution stops (Pan et al.).',
    d_zh: '包裹在模型外面的执行系统：决定模型看到什么、能调用哪些工具、状态存在哪里、何时校验、失败后如何恢复、何时停止（Pan 等人）。' },
  c6_hermes: { en: 'Hermes Agent', zh: 'Hermes Agent',
    d_en: 'Nous Research’s open-source agent harness we installed in class: a terminal agent with memory, skills, MCP, a Kanban/goals board and approvals for risky commands; it can drive hosted or local (Ollama) models.',
    d_zh: 'Nous Research 的开源智能体框架，我们在课上安装过：一个带记忆、技能、MCP、看板/目标和危险命令审批的终端智能体，可以驱动云端模型，也可以驱动本地（Ollama）模型。' },
  c6_claude_code: { en: 'Claude Code', zh: 'Claude Code',
    d_en: 'Anthropic’s coding-agent harness: it wraps a Claude model with file, shell and web tools, a permission system, project memory (CLAUDE.md), skills and MCP connections.',
    d_zh: 'Anthropic 的编程智能体框架：把 Claude 模型包上文件、命令行、网页等工具，再加上权限系统、项目记忆（CLAUDE.md）、技能和 MCP 连接。' },
  c6_context: { en: 'Context window', zh: '上下文窗口',
    d_en: 'Everything the model can “see” on this call — system prompt, conversation, files, tool results. Karpathy: the LLM’s short-term memory. The harness decides what goes in.',
    d_zh: '模型这一次调用能“看见”的全部内容——系统提示、对话、文件、工具结果。卡帕西：LLM 的短期记忆。放什么进去由 harness 决定。' },
  c6_tool_call: { en: 'Tool call (tool use)', zh: '工具调用',
    d_en: 'The model does not run anything itself. It emits a structured request — a tool_use block with a tool name and JSON input; the harness executes it and returns a tool_result for the model to read.',
    d_zh: '模型自己并不执行任何东西。它输出一个结构化请求——带工具名和 JSON 参数的 tool_use 块；由 harness 去执行，再把 tool_result 交回给模型读取。' },
  c6_mcp: { en: 'Model Context Protocol (MCP)', zh: '模型上下文协议（MCP）',
    d_en: 'An open standard (introduced by Anthropic in 2024, now stewarded by the Agentic AI Foundation) for connecting AI applications to tools and data — often called “USB-C for AI.”',
    d_zh: '一个开放标准（Anthropic 于 2024 年提出，现由 Agentic AI Foundation 托管），用来把 AI 应用连接到工具和数据——常被称为“AI 的 USB-C 接口”。' },
  c6_mcp_server: { en: 'MCP server', zh: 'MCP 服务器',
    d_en: 'A separate running program that exposes tools, resources and prompts over MCP — e.g. a GitHub, Obsidian or calendar server.',
    d_zh: '一个独立运行的程序，通过 MCP 对外提供工具、资源和提示模板——例如 GitHub、Obsidian、日历服务器。' },
  c6_mcp_client: { en: 'MCP client / host', zh: 'MCP 客户端 / 宿主',
    d_en: 'The AI application that connects to MCP servers — Claude, ChatGPT, Claude Code, Hermes. Write the client once; it can use any server.',
    d_zh: '连接 MCP 服务器的 AI 应用——Claude、ChatGPT、Claude Code、Hermes。客户端只写一次，就能用任何服务器。' },
  c6_nxm: { en: 'N × M problem', zh: 'N × M 问题',
    d_en: 'Without a standard, every AI app needs a custom integration for every tool: N apps × M tools. A shared protocol turns it into N + M.',
    d_zh: '没有标准时，每个 AI 应用都要为每个工具单独写对接：N 个应用 × M 个工具。共同协议把它变成 N + M。' },
  c6_skill: { en: 'Agent Skill', zh: '智能体技能（Skill）',
    d_en: 'A folder of know-how: a SKILL.md file (name, description, instructions) plus optional scripts, templates and references that the agent loads only when the task calls for it.',
    d_zh: '一个装着“做事方法”的文件夹：一个 SKILL.md（名称、描述、步骤说明），外加可选的脚本、模板和参考资料，只有任务需要时智能体才加载。' },
  c6_progressive: { en: 'Progressive disclosure', zh: '渐进式加载',
    d_en: 'Only each skill’s name and description sit in context at the start; the full SKILL.md is read when relevant, and extra files only when needed — so hundreds of skills cost almost no context.',
    d_zh: '开始时上下文里只放每个技能的名称和描述；相关时才读完整的 SKILL.md，需要时才打开附加文件——所以装几百个技能也几乎不占上下文。' },
  c6_permission: { en: 'Permission model', zh: '权限模型',
    d_en: 'The rules for what an agent may do on its own, what must stop for human approval, and what gets recorded — e.g. allow / ask / deny rules and permission modes in Claude Code.',
    d_zh: '规定智能体哪些事可以自己做、哪些必须停下来等人批准、哪些要记录下来的规则——例如 Claude Code 中的 allow / ask / deny 规则和权限模式。' },
  c6_perm_modes: { en: 'Permission modes', zh: '权限模式',
    d_en: 'Claude Code presets: default (ask the first time a tool is used), acceptEdits (auto-approve file edits), plan (read-only, no changes), bypassPermissions (ask nothing — only in a sandbox).',
    d_zh: 'Claude Code 的预设：default（每种工具第一次使用时询问）、acceptEdits（自动批准文件修改）、plan（只读，不做任何改动）、bypassPermissions（什么都不问——只适合沙盒）。' },
  c6_audit: { en: 'Log / audit trail', zh: '日志 / 审计记录',
    d_en: 'The record of what the agent actually did — transcript, tool calls and arguments, diffs, cost. It makes delegation reviewable and reversible.',
    d_zh: '智能体实际做了什么的记录——对话记录、工具调用及参数、文件改动、花费。它让“委托”可以被检查、可以被撤销。' },
  c6_partial_autonomy: { en: 'Partial autonomy', zh: '部分自主',
    d_en: 'Karpathy: build products where the human sets how much the AI may do (an autonomy slider) and keep the generation → verification loop fast, with the AI “on a leash.”',
    d_zh: '卡帕西：做产品时让人来决定 AI 能做多少（自主度滑杆），并让“生成 → 验证”的循环尽量快，把 AI“拴在绳上”。' },
  c6_injection: { en: 'Prompt injection / tool poisoning', zh: '提示注入 / 工具投毒',
    d_en: 'Hidden instructions inside a web page, file or MCP tool description that try to make the agent do something the user never asked for.',
    d_zh: '藏在网页、文件或 MCP 工具描述里的隐形指令，试图让智能体去做用户从未要求的事。' }
});

defClass({
  order: 6, n: '6',
  t_en: 'Agents', t_zh: '智能体',
  intro_en: 'From answering to acting. An agent is a model put in a loop with tools; the harness is everything around the model that makes that loop safe and useful — what it sees, what it can touch, and when it must stop and ask.',
  intro_zh: '从“回答”到“行动”。智能体就是被放进带工具的循环里的模型；harness 是模型周围让这个循环既有用又安全的一切——它看到什么、能碰什么、什么时候必须停下来问人。',
  qs: [
    {
      id: '6.1', t_en: 'Agent', t_zh: '智能体',
      q_en: 'What makes a system an agent rather than a chatbot?',
      q_zh: '是什么让一个系统成为“智能体”，而不只是“聊天机器人”？',
      src: 'Anthropic, “Building Effective Agents”',
      fig() {
        const C = F.C; let s = '';
        // left: chatbot
        s += F.text(150, 26, 'CHATBOT', { cls: 'big' }) + F.sub(150, 43, '聊天机器人 · 一问一答', { anchor: 'middle' });
        s += F.g(F.rect(80, 70, 140, 40, { text: 'PROMPT' }) + F.arrow(150, 110, 150, 146) +
          F.rect(80, 148, 140, 50, { text: 'MODEL', fill: '#f3f2ee' }) + F.arrow(150, 198, 150, 236) +
          F.rect(80, 238, 140, 40, { text: 'ANSWER' }), { tip: 'c6_chatbot' });
        s += F.g(F.path('M80,258 Q30,258 30,175 Q30,90 78,90', { dash: '4 3', arrow: true, stroke: C.blue }) +
          F.text(26, 175, 'YOU', { cls: 'tiny', color: C.blue, anchor: 'end' }), { note: { en: 'The human is the loop: you read the answer and decide what to ask next.', zh: '人就是那个循环：你读完回答，再决定下一步问什么。' } });
        s += F.sub(150, 308, '人是循环 · 模型不会行动', { anchor: 'middle' });
        s += F.line(300, 20, 300, 320, { dash: '3 4', stroke: C.mute, sw: 0.8 });
        // right: agent loop
        s += F.text(540, 26, 'AGENT', { cls: 'big', color: C.mag }) + F.sub(540, 43, '智能体 · 循环行动', { anchor: 'middle' });
        s += F.g(F.rect(480, 58, 120, 34, { text: 'GOAL' }) + F.sub(472, 79, '目标', { anchor: 'end' }), { note: { en: 'You give a task, not a question.', zh: '你交给它的是一个任务，而不是一个问题。' } });
        s += F.arrow(540, 92, 540, 128);
        s += F.circle(540, 175, 45, { text: 'LLM\nPLAN', fill: C.magF, stroke: C.mag, tip: 'c6_agent' });
        s += F.arrow(586, 175, 618, 175);
        s += F.g(F.rect(620, 155, 125, 40, { text: 'TOOL CALL', fill: C.blueF, stroke: C.blue }) + F.sub(682, 212, '调用工具', { anchor: 'middle' }), { tip: 'c6_tool_call' });
        s += F.path('M682,224 Q682,292 602,292', { arrow: true });
        s += F.g(F.rect(480, 272, 120, 40, { text: 'ENVIRONMENT' }) + F.sub(540, 328, '环境：文件 网页 终端', { anchor: 'middle' }), { tip: 'c6_tools' });
        s += F.path('M478,292 Q400,292 400,198', { arrow: true });
        s += F.g(F.rect(340, 155, 120, 40, { text: 'OBSERVE', fill: C.greenF, stroke: C.green }) + F.sub(400, 146, '观察结果', { anchor: 'middle' }), { tip: 'c6_loop' });
        s += F.arrow(460, 175, 493, 175);
        s += F.path('M572,143 Q600,96 640,82', { arrow: true, stroke: C.mag, dash: '4 3' });
        s += F.g(F.rect(642, 62, 103, 34, { text: 'RESULT', stroke: C.mag }) + F.sub(694, 112, '完成即停', { anchor: 'middle' }), { note: { en: 'The model itself decides when the task is done (or a checkpoint asks a human).', zh: '由模型自己判断任务何时完成（或在检查点交给人确认）。' } });
        return F.svg(760, 340, s, { label: 'chatbot vs agent loop' });
      },
      cap_en: 'A chatbot is one straight line, and you are the loop. An agent closes the loop itself: plan → call a tool → observe what really happened → plan again, until it decides the goal is met.',
      cap_zh: '聊天机器人是一条直线，你自己就是那个循环。智能体自己把循环闭合：计划 → 调用工具 → 观察真实发生了什么 → 再计划，直到它判断目标已经达成。',
      a_en: `A [[c6_chatbot]] answers: one prompt in, one response out. It can reason in text, but it cannot *do* anything, and a human decides every next step.

An [[c6_agent]] **acts**. Anthropic defines agents as systems where the LLM **dynamically directs its own process and tool usage**, keeping control over how it accomplishes the task — in practice, “an LLM using tools based on environmental feedback in a loop.” Three things make the difference:
- **[[c6_tools]]** — it can act on the world (read/write files, run commands, search, call APIs). Agno: without tools it can reason but cannot act.
- **A [[c6_loop]]** — after each action it reads the real result from the environment (an error, a test, a web page) and decides the next step itself.
- **Autonomy over the path** — you give a goal, not a script; the model plans, chooses tools, and decides when it is done. (If the steps are fixed in code, Anthropic calls it a [[c6_workflow]], not an agent.)

So: chatbot = conversation; agent = delegation.`,
      a_zh: `[[c6_chatbot]]负责回答：一个提示进，一个回应出。它能用文字推理，但什么都*做*不了，每一步接下来做什么都由人决定。

[[c6_agent]]会**行动**。Anthropic 把智能体定义为：由 LLM **动态地决定自己的流程和工具使用**、掌控“怎么完成任务”的系统——实际上就是“一个根据环境反馈、在循环中使用工具的 LLM”。区别在三点：
- **[[c6_tools]]**——它能对外部世界动手（读写文件、运行命令、搜索、调用 API）。Agno 说：没有工具，它能推理，但不能行动。
- **[[c6_loop]]**——每次行动后，它从环境中读取真实结果（报错、测试结果、网页内容），并自己决定下一步。
- **对路径的自主权**——你给的是目标而不是脚本；模型自己计划、挑选工具、判断何时完成。（如果步骤是写死在代码里的，Anthropic 把它叫作[[c6_workflow]]，而不是智能体。）

一句话：聊天机器人是对话；智能体是委托。`,
      hook_en: 'Chatbot: you are the loop. Agent: the model runs the loop — tools + feedback + its own decisions.',
      hook_zh: '聊天机器人：你是循环；智能体：模型自己跑循环——工具 + 反馈 + 自主决定。',
      trap_en: '“It’s smarter” or “it uses a bigger model” is wrong. The difference is tools + a loop with environmental feedback + the model choosing its own steps.',
      trap_zh: '写“它更聪明”或“用了更大的模型”是错的。区别在于：工具 + 带环境反馈的循环 + 模型自己选择步骤。'
    },
    {
      id: '6.2', t_en: 'Harness', t_zh: 'Harness（驾驭框架）',
      q_en: 'What is a harness (Hermes, Claude Code), and how does it use a model?',
      q_zh: '什么是 harness（如 Hermes、Claude Code）？它是如何使用模型的？',
      src: 'Pan et al., Natural-Language Agent Harnesses; Hermes docs',
      fig() {
        const C = F.C;
        const L = [
          { label: 'Context · what it sees', sub: '上下文：系统提示 文件 历史', tip: 'c6_context', pattern: 'hatch', density: 5, fill: '#fff' },
          { label: 'Tools · what it may call', sub: '工具：读写文件 终端 搜索 MCP', tip: 'c6_tools', bars: { color: C.blue, fill: C.blueF, n: 3, rows: 2 } },
          { label: 'Permissions', sub: '权限：哪些要先问人', tip: 'c6_permission', bars: { color: C.amber, fill: C.amberF, n: 2, rows: 2 } },
          { label: 'Model · the core', sub: '模型：只负责“想”和“提议”', note: { en: 'The only part that is the model. Swap Claude for a local Ollama model and the harness stays the same.', zh: '唯一属于“模型”的部分。把 Claude 换成本地 Ollama 模型，harness 依然不变。' }, fill: C.magF, side: '#efd2e2', pattern: 'diag', pc: C.mag, density: 4 },
          { label: 'State · memory & files', sub: '状态：记忆 待办 存在哪', note: { en: 'Where state lives between turns: memory files, CLAUDE.md, a Kanban board, the files on disk.', zh: '轮与轮之间状态存在哪里：记忆文件、CLAUDE.md、看板、磁盘上的文件。' }, pattern: 'grid', density: 5 },
          { label: 'Validation · recovery', sub: '校验与恢复：测试 重试', note: { en: 'When checks run (tests, linters) and what happens on failure (retry, roll back, ask).', zh: '何时运行检查（测试、语法检查），失败后怎么办（重试、回滚、询问）。' }, bars: { color: C.green, fill: C.greenF, n: 3, rows: 1 } },
          { label: 'Stop rules', sub: '停止条件：何时结束', note: { en: 'When execution ends: goal met, budget or turn limit hit, or a human says stop.', zh: '何时结束执行：目标达成、预算或轮数用完，或人喊停。' }, pattern: 'dots', density: 7 }
        ];
        const o = { alternate: true, gap: 2.7 };
        return F.svg(760, F.stackH(L.length, o), F.stack(L, o), { label: 'exploded view of an agent harness' });
      },
      cap_en: 'Pull a harness apart and the model is just one layer in the middle. Everything above and below it — context, tools, permissions, state, checks, stop rules — is the harness.',
      cap_zh: '把 harness 拆开，模型只是中间的一层。它上下的一切——上下文、工具、权限、状态、校验、停止条件——都属于 harness。',
      a_en: `A [[c6_harness]] is **the software around a model that turns it into an agent**. Pan et al. define it as the external execution system that decides:
- **what the model sees** (the [[c6_context]]: system prompt, files, history, tool results),
- **which tools it may call**, and under what [[c6_permission]],
- **where state is stored** (memory files, a task board, the disk),
- **when validation runs and how failures are recovered**,
- **when execution stops.**

[[c6_hermes]] and [[c6_claude_code]] are both harnesses. Neither *is* a model: Claude Code wraps a Claude model; Hermes can wrap a hosted model or a local one through Ollama.

**How it uses the model:** in a loop. The harness assembles the context and sends it to the model → the model replies with text or a [[c6_tool_call]] → the harness checks permissions, executes the tool, and feeds the result back → repeat until a stop rule fires. The model only *proposes*; the harness *executes, remembers and enforces*. That’s why the same model behaves very differently in different harnesses.`,
      a_zh: `[[c6_harness]]是**包在模型外面、把模型变成智能体的那层软件**。Pan 等人把它定义为外部执行系统，由它决定：
- **模型看到什么**（[[c6_context]]：系统提示、文件、历史、工具结果），
- **它能调用哪些工具**，以及在什么[[c6_permission]]下调用，
- **状态存在哪里**（记忆文件、任务看板、磁盘），
- **何时运行校验、失败后如何恢复**，
- **何时停止执行。**

[[c6_hermes]]和[[c6_claude_code]]都是 harness，它们本身都*不是*模型：Claude Code 包裹的是 Claude 模型；Hermes 既可以包裹云端模型，也可以通过 Ollama 包裹本地模型。

**它怎样使用模型：**循环调用。harness 组装好上下文发给模型 → 模型回复文字或一个[[c6_tool_call]] → harness 检查权限、执行工具、把结果再喂回去 → 重复，直到触发停止条件。模型只负责*提议*；harness 负责*执行、记忆和把关*。所以同一个模型放在不同的 harness 里，表现会非常不同。`,
      hook_en: 'Model = engine. Harness = the car around it: steering (context), wheels (tools), brakes (permissions), dashboard (logs), and the rule for when to park (stop).',
      hook_zh: '模型是发动机，harness 是整辆车：方向盘（上下文）、车轮（工具）、刹车（权限）、仪表盘（日志），以及什么时候停车（停止条件）。',
      trap_en: 'Don’t say “Hermes is a model.” Hermes and Claude Code are harnesses that call a model. Explain the loop: context → model → tool call → execute → result back.',
      trap_zh: '别写“Hermes 是一个模型”。Hermes 和 Claude Code 是调用模型的 harness。要讲清循环：上下文 → 模型 → 工具调用 → 执行 → 结果回传。'
    },
    {
      id: '6.3', t_en: 'Tool use / MCP', t_zh: '工具调用 / MCP',
      q_en: 'What is a tool call, and what problem does the Model Context Protocol solve?',
      q_zh: '什么是“工具调用”？模型上下文协议（MCP）解决了什么问题？',
      src: 'Anthropic, “Introducing the Model Context Protocol”; MCP spec',
      fig() {
        const C = F.C; let s = '';
        const apps = ['CLAUDE', 'HERMES', 'CHATGPT'], tools = ['GITHUB', 'OBSIDIAN', 'CALENDAR', 'FILES'];
        s += F.text(175, 24, 'WITHOUT MCP · N × M', { cls: 'big' }) + F.sub(175, 41, '每个应用 × 每个工具 都要单独对接', { anchor: 'middle' });
        let lines = '';
        apps.forEach((a, i) => tools.forEach((t, j) => { lines += F.line(120, 92 + i * 70, 210, 78 + j * 52, { stroke: C.red, sw: 0.8 }); }));
        s += F.g(lines + F.text(165, 300, '3 × 4 = 12 integrations', { cls: 'tiny', color: C.red }), { tip: 'c6_nxm' });
        apps.forEach((a, i) => s += F.rect(30, 74 + i * 70, 90, 36, { text: a }));
        tools.forEach((t, j) => s += F.rect(210, 62 + j * 52, 100, 32, { text: t, fill: '#f3f2ee' }));
        s += F.line(360, 20, 360, 290, { dash: '3 4', stroke: C.mute, sw: 0.8 });
        s += F.text(565, 24, 'WITH MCP · N + M', { cls: 'big', color: C.mag }) + F.sub(565, 41, '一个共同协议：各写一次', { anchor: 'middle' });
        let l2 = '';
        apps.forEach((a, i) => l2 += F.line(470, 92 + i * 70, 543, 170, { stroke: C.blue, sw: 1 }));
        tools.forEach((t, j) => l2 += F.line(607, 170, 650, 78 + j * 52, { stroke: C.blue, sw: 1 }));
        s += l2;
        s += F.g(apps.map((a, i) => F.rect(380, 74 + i * 70, 90, 36, { text: a })).join('') + F.sub(425, 64, '客户端', { anchor: 'middle' }), { tip: 'c6_mcp_client' });
        s += F.circle(575, 170, 34, { text: 'MCP', fill: C.magF, stroke: C.mag, tip: 'c6_mcp' });
        s += F.g(tools.map((t, j) => F.rect(650, 62 + j * 52, 100, 32, { text: t, fill: C.blueF, stroke: C.blue })).join('') + F.sub(700, 52, 'MCP 服务器', { anchor: 'middle' }), { tip: 'c6_mcp_server' });
        s += F.text(565, 300, '3 + 4 = 7 integrations', { cls: 'tiny', color: C.blue });
        // tool call strip
        const m = F.mono(30, 345, [
          { s: 'tool_use{name,input}', color: C.mag, tip: 'c6_tool_call' }, { s: '  →  ', color: C.mute },
          { s: 'harness runs it', color: C.ink, tip: 'c6_harness' }, { s: '  →  ', color: C.mute },
          { s: 'tool_result', color: C.green, tip: 'c6_tool_call' }, { s: '  →  ', color: C.mute }, { s: 'model continues', color: C.ink }
        ], { cw: 7.8, size: 13 });
        s += F.line(20, 318, 750, 318, { stroke: C.hair || '#ddd', sw: 0.6, dash: '2 3' }) + m.svg + F.sub(30, 370, '一次工具调用：模型只“开单子”，真正执行的是 harness', { anchor: 'start' });
        return F.svg(760, 385, s, { label: 'MCP N times M vs N plus M' });
      },
      cap_en: 'Top: before a standard, every assistant needed its own connector for every service. With MCP, each assistant speaks the protocol once and each service is wrapped once. Bottom: the anatomy of a single tool call.',
      cap_zh: '上：没有标准之前，每个助手都要为每个服务写自己的连接器。有了 MCP，每个助手只需支持一次协议，每个服务只需封装一次。下：一次工具调用的结构。',
      a_en: `**Tool call:** the model cannot run code or open a website by itself. When it decides it needs one of its [[c6_tools]], it outputs a structured request — a *tool_use* block with the tool’s **name** and **JSON arguments** (e.g. \`read_file{path:"notes.md"}\`). The [[c6_harness]] executes it and returns a *tool_result*, which the model reads before deciding the next step. That is a [[c6_tool_call]]: the model writes the order; the software fills it.

**What MCP solves:** before [[c6_mcp]], every AI application had to build a custom integration for every tool or data source — the [[c6_nxm]] (3 assistants × 4 services = 12 connectors), fragile and duplicated. MCP is an **open standard** — “USB-C for AI” — for how an AI app (an [[c6_mcp_client]]) discovers and calls the tools, resources and prompts offered by an [[c6_mcp_server]]. Each assistant implements the protocol once, each service is wrapped once, and anything can plug into anything: N × M becomes **N + M**.

(Caution from our readings: a connected server is also a new door — tool descriptions can carry [[c6_injection]].)`,
      a_zh: `**工具调用：**模型自己不能运行代码、也不能打开网站。当它判断需要用某个[[c6_tools]]时，会输出一个结构化请求——一个 *tool_use* 块，包含工具的**名称**和 **JSON 参数**（例如 \`read_file{path:"notes.md"}\`）。由[[c6_harness]]去执行，再返回一个 *tool_result*，模型读完结果后决定下一步。这就是[[c6_tool_call]]：模型开单子，软件去照单执行。

**MCP 解决了什么：**在[[c6_mcp]]出现之前，每个 AI 应用都要为每个工具或数据源单独写对接——这就是[[c6_nxm]]（3 个助手 × 4 个服务 = 12 个连接器），既脆弱又重复。MCP 是一个**开放标准**——“AI 的 USB-C”——规定 AI 应用（[[c6_mcp_client]]）如何发现并调用[[c6_mcp_server]]提供的工具、资源和提示模板。每个助手只实现一次协议，每个服务只封装一次，任何东西都能插到任何东西上：N × M 变成了 **N + M**。

（课程读物的提醒：接入一个服务器也等于多开了一扇门——工具描述里可能藏着[[c6_injection]]。）`,
      hook_en: 'Tool call = the model writes a request, the harness runs it. MCP = one plug shape for every tool: N × M → N + M.',
      hook_zh: '工具调用 = 模型写请求，harness 去执行。MCP = 所有工具统一一种插头：N × M → N + M。',
      trap_en: 'Don’t say the model “runs” the tool or that MCP is a model/app. MCP is a protocol (a standard), between clients and servers.',
      trap_zh: '别写模型“运行”了工具，也别把 MCP 说成模型或应用。MCP 是一种协议（标准），连接客户端和服务器。'
    },
    {
      id: '6.4', t_en: 'Skill', t_zh: '技能（Skill）',
      q_en: 'What is a \'skill\', and how is it different from an \'MCP\' server?',
      q_zh: '什么是“技能（skill）”？它和“MCP 服务器”有什么不同？',
      src: 'Anthropic, “Skills explained”; agentskills.io',
      fig() {
        const C = F.C;
        const L = [
          { label: 'Name + description', sub: '名称+描述：始终在上下文里', tip: 'c6_progressive', pattern: 'hatch', density: 4, fill: '#fff' },
          { label: 'SKILL.md body', sub: '正文步骤：相关时才读', note: { en: 'The instructions: how to do the task, in the order to do it, with examples. Read only when the skill is relevant.', zh: '具体做法：步骤、顺序、示例。只有当技能相关时才读取。' }, fill: C.magF, side: '#efd2e2', pattern: 'diag', pc: C.mag, density: 4 },
          { label: 'Scripts + references', sub: '脚本与资料：需要时才打开', note: { en: 'Optional files — a Python script, a template, a style guide — opened or run only when needed.', zh: '可选文件——Python 脚本、模板、风格指南——需要时才打开或运行。' }, pattern: 'chips', density: 5 }
        ];
        const o = { gap: 3, ox: 150, scale: 17, side: 'r', labelR: 265, top: 62 };
        let s = F.text(150, 24, 'SKILL = A FOLDER', { cls: 'big', color: C.mag }) + F.sub(150, 42, '技能 = 一个文件夹 · 教它“怎么做”', { anchor: 'middle' });
        s += F.g(F.stack(L, o), { tip: 'c6_skill' });
        s += F.line(500, 20, 500, 320, { dash: '3 4', stroke: C.mute, sw: 0.8 });
        s += F.text(630, 24, 'MCP = A RUNNING SERVER', { cls: 'big', color: C.blue }) + F.sub(630, 42, 'MCP = 运行中的服务器 · 让它“能连上”', { anchor: 'middle' });
        s += F.rect(540, 62, 180, 40, { text: 'AGENT · CLIENT', tip: 'c6_mcp_client' });
        s += F.arrow(630, 102, 630, 146, { both: true }) + F.text(640, 128, 'protocol', { anchor: 'start', cls: 'tiny', color: C.mute });
        s += F.rect(540, 148, 180, 54, { text: 'MCP SERVER\n(separate process)', fill: C.blueF, stroke: C.blue, tip: 'c6_mcp_server' });
        s += F.arrow(630, 202, 630, 238, { both: true });
        s += F.rect(540, 240, 180, 40, { text: 'GITHUB · DB · API', fill: '#f3f2ee', note: { en: 'The outside system it reaches: data and actions the agent could not touch otherwise.', zh: '它连到的外部系统：没有它，智能体根本碰不到这些数据和操作。' } });
        s += F.text(150, 318, 'KNOW-HOW', { cls: 'lt', color: C.mag }) + F.sub(150, 334, '会做：程序性知识', { anchor: 'middle' });
        s += F.text(630, 318, 'ACCESS', { cls: 'lt', color: C.blue }) + F.sub(630, 334, '能连：工具与数据', { anchor: 'middle' });
        return F.svg(760, 345, s, { label: 'skill folder vs MCP server' });
      },
      cap_en: 'A skill is a folder of instructions the agent reads in layers, only as deep as it needs. An MCP server is a separate program the agent talks to over a protocol to reach an outside system.',
      cap_zh: '技能是一个装着说明的文件夹，智能体按需一层层往下读。MCP 服务器是一个独立程序，智能体通过协议和它对话，从而接触外部系统。',
      a_en: `A [[c6_skill]] is a **folder of know-how**: a \`SKILL.md\` file — a short name and description, then step-by-step instructions — plus optional scripts, templates and reference files. It uses [[c6_progressive]]: only the name and description sit in context at the start; the full instructions are read when the task matches, and extra files only when needed. A skill teaches the agent **how** to do something (our house style for a report, how to build a .docx, how to work in an Obsidian vault) using tools it already has.

An [[c6_mcp_server]] is a **separately running program** that gives the agent **access** — new tools and data (GitHub, a calendar, a database) — through the [[c6_mcp]] protocol.

The difference:
- **What it adds:** skill = procedural knowledge (*how*); MCP = capabilities and connections (*what it can reach*).
- **What it is:** skill = text files the model reads; MCP = live software the harness calls.
- **Cost:** skills are cheap in context until used; every MCP tool description is loaded up front.

Anthropic’s summary: MCP connects the agent to data; skills teach it what to do with that data. They work together — e.g. kepano’s *obsidian-skills* vs. an *mcp-obsidian* server.`,
      a_zh: `[[c6_skill]]是一个**装着“做事方法”的文件夹**：一个 \`SKILL.md\` 文件——简短的名称和描述，然后是分步说明——再加上可选的脚本、模板和参考资料。它采用[[c6_progressive]]：开始时上下文里只有名称和描述；任务对上了才读完整说明，需要时才打开附加文件。技能教智能体**怎么做**（我们写报告的固定格式、怎么生成 .docx、怎么在 Obsidian 库里工作），用的是它本来就有的工具。

[[c6_mcp_server]]是一个**独立运行的程序**，通过[[c6_mcp]]协议给智能体提供**访问能力**——新的工具和数据（GitHub、日历、数据库）。

区别：
- **它增加了什么：**技能 = 程序性知识（*怎么做*）；MCP = 能力与连接（*能碰到什么*）。
- **它是什么：**技能 = 模型读取的文本文件；MCP = harness 调用的运行中的软件。
- **成本：**技能在被用到之前几乎不占上下文；每个 MCP 工具的描述一开始就要加载。

Anthropic 的总结：MCP 把智能体连到数据上；技能教它拿这些数据做什么。两者可以配合——比如 kepano 的 *obsidian-skills* 和 *mcp-obsidian* 服务器。`,
      hook_en: 'Skill = a recipe card (know-how). MCP server = a new appliance plugged into the kitchen (access).',
      hook_zh: '技能 = 一张菜谱（会做）；MCP 服务器 = 厨房里新插上的一台电器（能用）。',
      trap_en: 'Say both halves: what a skill IS (folder + SKILL.md, loaded progressively) and the contrast (instructions vs. a running server that provides tools/data).',
      trap_zh: '两半都要答：技能*是什么*（文件夹 + SKILL.md，渐进加载），以及对比（说明文字 vs. 提供工具和数据的运行中服务器）。'
    },
    {
      id: '6.5', t_en: 'Permission model / delegation', t_zh: '权限模型 / 委托',
      q_en: 'What runs without asking, what stops for approval, what is logged afterward: why is this the central design decision in an agentic product?',
      q_zh: '哪些操作无需询问就执行、哪些要停下来等批准、哪些事后记录：为什么这是智能体产品中最核心的设计决策？',
      src: 'Claude Code permission modes; Hermes security; Karpathy',
      fig() {
        const C = F.C; let s = '';
        const cols = [
          { x: 20, t: 'RUNS WITHOUT ASKING', zh: '自动执行 · allow', c: C.green, f: C.greenF, items: ['read files · 读文件', 'search · 搜索', 'list a folder · 列目录', 'run tests · 跑测试'], note: { en: 'Safe, reversible, read-only actions: friction here only slows you down.', zh: '安全、可撤销、只读的操作：在这里设关卡只会拖慢你。' } },
          { x: 270, t: 'STOPS FOR APPROVAL', zh: '停下等批准 · ask', c: C.amber, f: C.amberF, items: ['edit/delete · 改删文件', 'shell commands · 终端命令', 'send a message · 发消息', 'push · spend · 推送 花钱'], note: { en: 'Irreversible, external or costly actions: a human checkpoint before they happen.', zh: '不可撤销、对外、花钱的操作：发生之前必须有人把关。' } },
          { x: 520, t: 'LOGGED AFTERWARD', zh: '事后记录 · audit', c: C.blue, f: C.blueF, items: ['transcript · 对话记录', 'tool calls + args · 调用参数', 'diffs · 文件改动', 'cost · tokens · 花费'], note: { en: 'Everything is recorded so you can review, explain and undo.', zh: '一切都被记录下来，便于检查、解释和撤销。' } }
        ];
        cols.forEach(cl => {
          let g = F.rect(cl.x, 30, 220, 46, { fill: cl.f, stroke: cl.c, rx: 6 }) + F.text(cl.x + 110, 50, cl.t, { cls: 'lt', color: cl.c }) + F.sub(cl.x + 110, 67, cl.zh, { anchor: 'middle' });
          cl.items.forEach((it, i) => { g += F.rect(cl.x, 88 + i * 38, 220, 30, { rx: 3 }) + F.text(cl.x + 12, 103 + i * 38, it, { anchor: 'start', cls: 'mono', color: C.ink }); });
          s += F.g(g, { note: cl.note, tip: cl.x === 520 ? 'c6_audit' : 'c6_permission' });
        });
        // autonomy slider
        s += F.g(F.line(60, 290, 700, 290, { sw: 2 }) +
          `<rect x="330" y="280" width="100" height="20" rx="10" fill="${C.mag}"/>` + F.text(380, 287, 'PARTIAL', { cls: 'tiny', color: '#fff' }) +
          F.text(60, 316, 'SUGGEST ONLY', { cls: 'tiny', anchor: 'start', color: C.mute }) + F.text(700, 316, 'FULL AUTONOMY', { cls: 'tiny', anchor: 'end', color: C.mute }) +
          F.sub(60, 332, '只建议', { anchor: 'start' }) + F.sub(700, 332, '完全自主', { anchor: 'end' }) + F.sub(380, 318, '部分自主 · 自主度滑杆', { anchor: 'middle' }),
          { tip: 'c6_partial_autonomy' });
        return F.svg(760, 345, s, { label: 'three tiers of agent permission' });
      },
      cap_en: 'The three tiers sort every action by risk. Where you draw the lines sets the product’s position on Karpathy’s autonomy slider.',
      cap_zh: '三个层级按风险给每个操作分类。线画在哪里，就决定了产品在卡帕西“自主度滑杆”上的位置。',
      a_en: `Every agent action falls into one of three tiers of the [[c6_permission]]:
- **Runs without asking** — safe, reversible, read-only actions (read a file, search, run tests).
- **Stops for approval** — irreversible, external or costly actions (delete or overwrite files, run shell commands, send email, push code, spend money). Claude Code exposes this as allow / ask / deny rules and [[c6_perm_modes]]; Hermes asks before dangerous terminal commands and can run in a sandbox.
- **Logged afterward** — the [[c6_audit]]: transcript, every tool call and its arguments, file diffs, cost.

**Why it is the central design decision:** an agent acts *on your behalf, with your accounts and files*. The permission line decides:
- **Usefulness vs. safety.** Ask too often and you get approval fatigue — people click “yes” blindly or stop delegating. Ask too rarely and one mistake or [[c6_injection]] deletes data or emails the wrong person.
- **Responsibility.** Approval points and logs determine who is accountable, and whether a mistake can be noticed and undone.
- **Trust over time.** It is Karpathy’s [[c6_partial_autonomy]] — an autonomy slider: start the AI on a short leash, keep generation → verification fast, and widen autonomy as trust is earned.

The model is roughly the same in every product; the permission model is what makes one product *usable* and *safe* and another not. It is the delegation contract between human and machine.`,
      a_zh: `智能体的每一个操作都落在[[c6_permission]]的三个层级之一：
- **无需询问就执行**——安全、可撤销、只读的操作（读文件、搜索、跑测试）。
- **停下来等批准**——不可撤销、对外、花钱的操作（删除或覆盖文件、运行终端命令、发邮件、推送代码、付款）。Claude Code 用 allow / ask / deny 规则和[[c6_perm_modes]]来实现；Hermes 在执行危险终端命令前会询问，并且可以在沙盒中运行。
- **事后记录**——[[c6_audit]]：对话记录、每次工具调用及参数、文件改动、花费。

**为什么这是最核心的设计决策：**智能体是*代表你、用你的账户和文件*在行动。权限这条线决定了：
- **有用 vs. 安全。**问得太多会造成“审批疲劳”——人们盲目点“同意”或干脆不再委托；问得太少，一次失误或一次[[c6_injection]]就可能删掉数据、把邮件发错人。
- **责任归属。**审批点和日志决定了谁该负责，以及错误能否被发现、被撤销。
- **随时间建立信任。**这就是卡帕西说的[[c6_partial_autonomy]]——一根自主度滑杆：一开始把 AI 拴得短一些，让“生成 → 验证”保持快速，等信任建立后再逐步放权。

各个产品用的模型大同小异；真正让一个产品*好用*又*安全*、另一个不行的，是权限模型。它就是人与机器之间的“委托合同”。`,
      hook_en: 'Reversible → just do it. Irreversible → ask. Everything → log. Where you draw those lines IS the product.',
      hook_zh: '可撤销 → 直接做；不可撤销 → 先问；所有操作 → 记录。线画在哪里，产品就是什么样。',
      trap_en: 'Give concrete examples for each tier AND argue “why central”: the agent acts with your authority, so the line sets safety, usefulness, accountability and trust.',
      trap_zh: '每个层级都要举具体例子，并且论证“为什么核心”：智能体以你的身份行动，所以这条线决定了安全、有用、责任和信任。'
    }
  ]
});
