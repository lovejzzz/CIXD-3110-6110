/* CLASS 4 · COMMERCIAL LLMS AND PROMPTING */
defTerms({
  c4_repo: { en: 'Repository (repo)', zh: '仓库（repo）',
    d_en: 'A project folder plus its complete history. Git keeps every saved version (commit) in a hidden .git folder; GitHub hosts a shared copy online.',
    d_zh: '一个项目文件夹，加上它的完整历史。Git 把每个保存过的版本（提交）存在隐藏的 .git 文件夹里；GitHub 在线托管一份共享副本。' },
  c4_git: { en: 'Git', zh: 'Git 版本控制',
    d_en: 'Version-control software that records snapshots of a folder over time, so you can see what changed, who changed it, and go back.',
    d_zh: '版本控制软件：随时间记录文件夹的快照，让你看到改了什么、谁改的，并且可以回退。' },
  c4_github: { en: 'GitHub', zh: 'GitHub',
    d_en: 'A website that hosts Git repositories remotely — a shared “origin” that people and services (like Vercel) can read from.',
    d_zh: '远程托管 Git 仓库的网站——一个共享的“源头（origin）”，人和服务（例如 Vercel）都可以从这里读取。' },
  c4_commit: { en: 'Commit', zh: '提交（commit）',
    d_en: 'A saved snapshot of the repo at one moment, with a unique hash, an author, a time, a message, and a pointer to the commit before it.',
    d_zh: '仓库在某一时刻被保存下来的快照，带有唯一哈希值、作者、时间、说明信息，以及指向上一个提交的指针。' },
  c4_hash: { en: 'Commit hash', zh: '提交哈希值',
    d_en: 'A unique ID (e.g. a1b2c3d…) computed from the commit’s contents. Change anything and the hash changes — so history can’t be silently edited.',
    d_zh: '根据提交内容计算出的唯一编号（如 a1b2c3d…）。内容改一点，哈希就变——所以历史无法被悄悄篡改。' },
  c4_diff: { en: 'Diff', zh: '差异（diff）',
    d_en: 'The line-by-line difference between a commit and its parent: lines added (+) and removed (−).',
    d_zh: '某个提交与其父提交之间逐行的差别：新增的行（+）和删除的行（−）。' },
  c4_push: { en: 'Push', zh: '推送（push）',
    d_en: 'Send your local commits up to the remote repository on GitHub.',
    d_zh: '把本地的提交上传到 GitHub 上的远程仓库。' },
  c4_deploy: { en: 'Deployment', zh: '部署',
    d_en: 'Turning code in a repo into a live website: fetch the code, build it, put the result on servers, give it a public URL.',
    d_zh: '把仓库里的代码变成上线的网站：拉取代码、构建、把结果放到服务器上，并给它一个公开网址。' },
  c4_webhook: { en: 'Webhook / Git integration', zh: 'Webhook / Git 集成',
    d_en: 'An automatic message GitHub sends to another service (Vercel) the moment you push — “new commit on main.”',
    d_zh: '你一推送，GitHub 就自动给另一个服务（Vercel）发的消息——“main 分支有新提交了”。' },
  c4_build: { en: 'Build', zh: '构建（build）',
    d_en: 'Vercel installs dependencies and runs the build command, turning source code into the static files and functions a browser can be served.',
    d_zh: 'Vercel 安装依赖并运行构建命令，把源代码变成浏览器可以获取的静态文件和函数。' },
  c4_cdn: { en: 'CDN / edge network', zh: 'CDN / 边缘网络',
    d_en: 'Copies of the built site stored on servers around the world, so a visitor gets it from somewhere nearby.',
    d_zh: '构建好的网站副本存放在世界各地的服务器上，访问者可以从离自己近的地方获取。' },
  c4_preview: { en: 'Preview vs. production', zh: '预览部署与生产部署',
    d_en: 'Vercel gives every push (or branch) its own preview URL; pushing to the main branch updates the production URL.',
    d_zh: 'Vercel 给每次推送（或每个分支）一个预览网址；推送到 main 分支才会更新正式（生产）网址。' },
  c4_sysprompt: { en: 'System prompt', zh: '系统提示词',
    d_en: 'The hidden instructions placed before your conversation (the “system” field of the API): role, tone, rules, formatting, tool guidance. Written by whoever builds the product.',
    d_zh: '放在你的对话之前、你看不到的指令（API 中的 system 字段）：角色、语气、规则、格式、工具使用说明。由搭建产品的一方撰写。' },
  c4_product: { en: 'Product ≠ model', zh: '产品 ≠ 模型',
    d_en: 'ChatGPT, Claude, Gemini, Copilot are products: a model wrapped in a system prompt, tools, memory, safety filters and interface. Same question, different wrappers, different answers.',
    d_zh: 'ChatGPT、Claude、Gemini、Copilot 是产品：模型外面包着系统提示词、工具、记忆、安全过滤和界面。同一个问题，包装不同，答案就不同。' },
  c4_tools: { en: 'Tools (search, code, files)', zh: '工具（搜索、代码、文件）',
    d_en: 'Capabilities the product lets the model call — web search, code execution, image generation. Whether search is on changes the answer.',
    d_zh: '产品允许模型调用的能力——网页搜索、代码执行、图像生成。是否开启搜索会改变答案。' },
  c4_memory: { en: 'Memory / context', zh: '记忆 / 上下文',
    d_en: 'What the product adds about you or past chats into the context window before the model reads your message.',
    d_zh: '在模型读你的消息之前，产品往上下文窗口里加入的关于你或过往对话的信息。' },
  c4_custom: { en: 'Custom instructions / Projects', zh: '自定义指令 / 项目',
    d_en: 'The user’s own layer of standing instructions — your partial system prompt on top of the company’s.',
    d_zh: '用户自己的长期指令层——叠加在公司系统提示词之上的、你自己的“部分系统提示词”。' },
  c4_spec: { en: 'Specification (spec)', zh: '规格说明（spec）',
    d_en: 'A written declaration of intent: what to make, for whom, under which constraints, and how success will be checked. In spec-driven development it is the source of truth.',
    d_zh: '一份书面的意图声明：做什么、给谁、有哪些约束、如何检验成功。在“规格驱动开发”中，它就是唯一可信来源。' },
  c4_success: { en: 'Success criteria', zh: '成功标准',
    d_en: 'Anthropic’s prompt-engineering overview: before you write or improve a prompt, define clear, empirically testable criteria for what a good answer must do.',
    d_zh: 'Anthropic 提示词工程概览：在写或改进提示词之前，先定义清楚、可以实际检验的标准——好答案必须做到什么。' },
  c4_clear: { en: 'Be clear and direct', zh: '清晰直接',
    d_en: 'Give explicit instructions, context, audience, constraints and output format — write for a brilliant new colleague who knows nothing about your project.',
    d_zh: '给出明确的指令、背景、受众、约束和输出格式——就像写给一位聪明但完全不了解你项目的新同事。' },
  c4_vibe: { en: 'Vibe coding', zh: '氛围编程（vibe coding）',
    d_en: 'Karpathy’s term: loosely prompting an AI and shipping whatever comes back. The opposite of treating the prompt as a spec.',
    d_zh: 'Karpathy 的说法：随意地给 AI 提要求，回来什么就用什么。与“把提示词当规格说明”正好相反。' },
  c4_workdir: { en: 'Working files', zh: '工作文件',
    d_en: 'The files you see and edit right now. On their own they are just a folder — the history is what makes a repository.',
    d_zh: '你此刻看到并编辑的文件。单独看只是一个文件夹——有了历史才叫仓库。' },
  c4_message: { en: 'Commit message', zh: '提交信息',
    d_en: 'A short note written by a person saying what changed and why — for your future self and teammates.',
    d_zh: '由人写的一句简短说明：改了什么、为什么改——写给未来的自己和队友。' },
  c4_parent: { en: 'Parent commit', zh: '父提交',
    d_en: 'The pointer from a commit back to the snapshot before it. These links turn snapshots into a timeline.',
    d_zh: '一个提交指回上一个快照的指针。这些链接把快照串成一条时间线。' },
  c4_user_msg: { en: 'Your message', zh: '你的消息',
    d_en: 'The only layer you typed. In the Four Prompts activity it was identical in every product.',
    d_zh: '唯一由你输入的一层。在“四个提示词”活动里，它在每个产品中都完全相同。' },
  c4_model_w: { en: 'Model weights (per product)', zh: '模型权重（各产品不同）',
    d_en: 'Each product also runs a different model and version underneath the prompt layers.',
    d_zh: '在提示词各层之下，每个产品运行的模型和版本也各不相同。' },
  c4_check: { en: 'Checking output against criteria', zh: '对照标准检查输出',
    d_en: 'Reading the result line by line against the success criteria you wrote first — each one becomes a ✓ or ✗.',
    d_zh: '把结果逐条与你事先写好的成功标准对照——每一条都变成 ✓ 或 ✗。' },
  c4_sw3: { en: 'Software 3.0', zh: '软件 3.0',
    d_en: 'Karpathy: prompts are programs — “the hottest new programming language is English.” Writing a prompt is a kind of programming in prose.',
    d_zh: 'Karpathy：提示词就是程序——“最热门的新编程语言是英语”。写提示词是一种用文字编程。' }
});

defClass({
  order: 4, n: '4',
  lec_en: "Class 4 asks one question in two costumes: **who actually controls what you make with AI?** First the plumbing — a repository, a commit, a deploy — because once a page is live on a URL, it's a real thing in the world with a history. Then the commercial chatbots: four products that look like 'the same AI' but each wraps the model in a hidden system prompt the company wrote. The two halves meet in one idea: **a prompt is writing, and good writing is a specification you can check**. For a designer this matters because the difference between a demo and a deliverable is exactly that: a history you can roll back, and a spec you can test against.",
  lec_zh: "第 4 课其实问的是同一个问题的两个面：**你用 AI 做出来的东西，到底是谁在控制？**前半段讲“管道”——仓库、提交、部署——因为一个页面一旦挂到网址上，它就成了世界上真实存在、有历史记录的东西。后半段讲商业聊天产品：四个看起来是“同一个 AI”的产品，其实各自用公司写好的隐藏系统提示词把模型包了起来。两半在一个观点上汇合：**提示词是一种写作，好的写作就是一份可以检查的规格说明（spec）**。对设计师来说这很重要：作品和 demo 的区别正在于此——有能回退的历史，有能对照检查的规格。",
  lec_faq: [{ q_en: "Is GitHub the same thing as Git?", q_zh: "GitHub 和 Git 是一回事吗？", a_en: "No. Git is the tool on your computer that keeps the history; GitHub is a website that hosts a copy of your repository online so others (and Vercel) can reach it. Git works fine without GitHub.", a_zh: "不是。Git 是你电脑上管理历史记录的工具；GitHub 是一个网站，把你仓库的一份副本放到网上，方便别人（以及 Vercel）访问。没有 GitHub，Git 照样能用。" }, { q_en: "If I commit, is my work online?", q_zh: "我提交（commit）了，作品就上网了吗？", a_en: "Not yet — a commit is saved only on your laptop. You need to push it to GitHub, and then Vercel deploys it. Commit = save a snapshot; push = send it up.", a_zh: "还没有——提交只存在你的电脑上。要 push 到 GitHub，再由 Vercel 部署才会上线。commit 是存快照，push 是传上去。" }, { q_en: "What should I write in a commit message?", q_zh: "提交信息应该写什么？", a_en: "Write why, in a short sentence: 'Add contact form to homepage' or 'Fix menu overlapping on phones'. Avoid 'update' or 'stuff' — future you won't know what happened.", a_zh: "用一句短话写清“为什么”：比如“首页加联系表单”“修复手机上菜单重叠”。别写“更新”“改了点东西”——以后的你会看不懂。" }, { q_en: "Can I see a chatbot's system prompt?", q_zh: "我能看到聊天机器人的系统提示词吗？", a_en: "Usually not — companies keep them private, though some publish parts, and people sometimes leak them. What you can control is your own custom instructions or project instructions, which work like your personal system prompt.", a_zh: "通常看不到——公司会保密，有些公司公布一部分，偶尔也有人泄露出来。你能控制的是自己的自定义指令或项目指令，它们就像你的个人系统提示词。" }, { q_en: "Is 'prompt engineering' a real skill or just hype?", q_zh: "“提示工程”是真本事还是炒作？", a_en: "The tricks part is mostly hype; the writing part is real. Being able to state a goal, audience, constraints and success criteria clearly is the same skill as writing a good design brief.", a_zh: "“技巧”那部分大多是炒作；“写作”那部分是真的。能把目标、受众、限制和成功标准说清楚，和写一份好的设计任务书是同一种能力。" }, { q_en: "Why did the same prompt give a different answer when I asked twice?", q_zh: "同一个提示问两次，为什么答案不一样？", a_en: "Models sample their words with some randomness (temperature), so answers vary. That's another reason to write success criteria: you judge each answer against the spec, not against the last answer.", a_zh: "模型挑词的时候带有一定随机性（temperature），所以每次回答会不同。这也是要写成功标准的另一个原因：用规格去评判每个答案，而不是拿上一个答案作比较。" }],
  t_en: 'Commercial LLMs and Prompting', t_zh: '商业大模型与提示词',
  intro_en: 'We put a website online through GitHub and Vercel — learning what a repository, a commit and a deployment are — then sent the same prompt to four commercial products to see that the product is not the model, and that a prompt is a piece of writing: a specification.',
  intro_zh: '我们通过 GitHub 和 Vercel 把网站上线——由此理解仓库、提交和部署；然后把同一个提示词发给四个商业产品，发现“产品不等于模型”，而提示词是一种写作：一份规格说明。',
  quiz: [
    { q_en: 'What is a repository?', q_zh: '什么是代码仓库（repository）？',
      opts: [{ en: 'A project folder plus its full saved history of changes', zh: '项目文件夹，加上它所有改动的完整保存历史' },
        { en: 'A website that is already live on the internet', zh: '已经在网上上线的网站' },
        { en: 'A single backup copy of the newest version only', zh: '只保存最新版本的一个备份' },
        { en: 'The server where Vercel builds your site', zh: 'Vercel 构建网站用的服务器' }], a: 0,
      why_en: 'A [[c4_repo]] is the project **plus its history**: every commit is kept in the hidden `.git` folder. It is not just the latest backup, and it is not the live website — that comes later, after deployment.',
      why_zh: '[[c4_repo]]是项目**加上它的全部历史**：每一次提交都保存在隐藏的 `.git` 文件夹里。它不只是最新版本的备份，也不是上线的网站——上线是之后部署的事。' },
    { q_en: 'Which best describes a commit?', q_zh: '下面哪项最能描述一次提交（commit）？',
      opts: [{ en: 'Uploading your files to GitHub', zh: '把文件上传到 GitHub' },
        { en: 'A saved snapshot of the project with a message, author, time and parent', zh: '项目的一个保存快照，带说明、作者、时间和父提交' },
        { en: 'Undoing your last change', zh: '撤销你上一次的改动' },
        { en: 'Publishing the site to a public URL', zh: '把网站发布到公开网址' }], a: 1,
      why_en: 'A [[c4_commit]] is a **snapshot** you save on purpose, labelled with a message, an author, a time, a unique hash and a link to its parent. Uploading to GitHub is a separate step: **push**.',
      why_zh: '[[c4_commit]]是你有意保存的一个**快照**，带着说明、作者、时间、唯一的哈希值和指向父提交的链接。上传到 GitHub 是另一个步骤：**push**。' },
    { q_en: 'Why does every commit point back to a parent commit?', q_zh: '为什么每次提交都要指向一个父提交？',
      opts: [{ en: 'So GitHub can charge per commit', zh: '方便 GitHub 按提交次数收费' },
        { en: 'So the files take less space', zh: '为了让文件占用更少空间' },
        { en: 'So the history forms a chain you can walk back through and restore', zh: '这样历史就连成一条链，可以一路往回看、随时恢复' },
        { en: 'So the site deploys faster', zh: '为了让网站部署得更快' }], a: 2,
      why_en: 'The parent links make the history a **chain**: you can see what changed when, compare versions, and go back to any earlier snapshot. That is the whole point of version control.',
      why_zh: '父提交的链接让历史成为一条**链**：能看到什么时候改了什么、比较不同版本、回到任何一个更早的快照。这正是版本控制的意义。' },
    { q_en: 'You run `git push`. What happens next, in order, on a Vercel-connected repo?', q_zh: '你执行 `git push`。在连接了 Vercel 的仓库里，接下来依次发生什么？',
      opts: [{ en: 'Vercel edits your code, then GitHub publishes it', zh: 'Vercel 修改你的代码，然后 GitHub 发布它' },
        { en: 'GitHub notifies Vercel → Vercel clones, builds, deploys → a URL points at it', zh: 'GitHub 通知 Vercel → Vercel 拉取、构建、部署 → 网址指向新版本' },
        { en: 'The site updates instantly on your laptop only', zh: '只在你自己的电脑上立刻更新' },
        { en: 'Nothing, until you email Vercel', zh: '什么都不发生，直到你给 Vercel 发邮件' }], a: 1,
      why_en: 'GitHub stores the commit and a [[c4_webhook]] tells Vercel. Vercel clones that commit, runs the [[c4_build]], uploads the result to its [[c4_cdn]], and points the URL at it. Vercel never edits your code.',
      why_zh: 'GitHub 保存这次提交，[[c4_webhook]]通知 Vercel。Vercel 拉取这次提交、执行[[c4_build]]、把结果上传到它的 [[c4_cdn]]，再把网址指向它。Vercel 从不修改你的代码。' },
    { q_en: 'The Vercel build fails after your push. What do visitors see?', q_zh: 'push 之后 Vercel 构建失败了。访问者看到的是什么？',
      opts: [{ en: 'A blank page', zh: '一片空白' },
        { en: 'The broken new version', zh: '有问题的新版本' },
        { en: 'The last version that built successfully', zh: '上一个构建成功的版本' },
        { en: 'Your raw code files', zh: '你的原始代码文件' }], a: 2,
      why_en: 'A failed build is **not deployed**, so the previous good version stays live. That is why reading the build log matters: the site just quietly doesn’t update.',
      why_zh: '构建失败就**不会部署**，所以之前那个正常的版本继续在线。这就是为什么要看构建日志：网站只是悄悄地没有更新。' },
    { q_en: 'What is a system prompt?', q_zh: '什么是系统提示词（system prompt）？',
      opts: [{ en: 'The message you type into the chat box', zh: '你在聊天框里输入的消息' },
        { en: 'Hidden standing instructions the product’s maker places before your message', zh: '产品方放在你消息之前、你看不到的固定指令' },
        { en: 'The error message shown when the model fails', zh: '模型出错时显示的报错信息' },
        { en: 'The model’s training data', zh: '模型的训练数据' }], a: 1,
      why_en: 'The [[c4_sysprompt]] is written by the **company** (role, rules, tone, tools) and sent before your words every time. You usually never see it; it is not your message and not training data.',
      why_zh: '[[c4_sysprompt]]由**公司**来写（角色、规则、语气、工具），每次都放在你的话前面一起发送。你通常看不到它；它既不是你的消息，也不是训练数据。' },
    { q_en: 'The same prompt went to four AI products and got four different answers. The best explanation?', q_zh: '同一个提示词发给四个 AI 产品，得到四种不同的回答。最好的解释是？',
      opts: [{ en: 'The internet was slow for some of them', zh: '有几个产品当时网速慢' },
        { en: 'Each product wraps a model in its own system prompt, tools, memory and model choice', zh: '每个产品都给模型包了一层自己的系统提示词、工具、记忆和模型选择' },
        { en: 'AI answers are completely random', zh: 'AI 的回答完全是随机的' },
        { en: 'Only one product is a real AI', zh: '只有一个产品是真正的 AI' }], a: 1,
      why_en: 'The **product is not the model**. Each one adds hidden layers — system prompt, tools, memory, safety rules, a different model — around your same words. Answers vary a little by chance too, but not four different styles.',
      why_zh: '**产品不等于模型**。每个产品都在你同样的话外面加了好几层看不见的东西——系统提示词、工具、记忆、安全规则、不同的模型。回答也有一点随机性，但不会因此变成四种风格。' },
    { q_en: 'Why did we treat a prompt as writing (a specification) rather than a trick?', q_zh: '为什么我们把提示词当作一种写作（规格说明），而不是一种技巧？',
      opts: [{ en: 'Because magic words unlock hidden features', zh: '因为有魔法词能解锁隐藏功能' },
        { en: 'Because a clear spec states the goal, audience, constraints and success criteria you can check', zh: '因为清楚的规格写明目标、受众、限制和可检查的成功标准' },
        { en: 'Because longer prompts are always better', zh: '因为提示词越长越好' },
        { en: 'Because models only read the first sentence', zh: '因为模型只读第一句话' }], a: 1,
      why_en: 'A good prompt works like a [[c4_spec]]: what you want, for whom, within which limits, and how you will judge it. There are no magic words, and length alone doesn’t help.',
      why_zh: '好的提示词就像一份[[c4_spec]]：要什么、给谁看、有哪些限制、怎么判断好坏。没有什么魔法词，光写得长也没用。' },
    { q_en: 'What makes a wrong answer recognizable?', q_zh: '是什么让错误的答案一眼就能被认出来？',
      opts: [{ en: 'Success criteria written before you read the output', zh: '在看到输出之前就写好的成功标准' },
        { en: 'Asking the model if it is sure', zh: '问模型“你确定吗”' },
        { en: 'The answer being short', zh: '答案很短' },
        { en: 'Running the prompt only once', zh: '提示词只运行一次' }], a: 0,
      why_en: '[[c4_success]] — written **in advance** — turn "seems fine" into checks you can tick or cross. Asking the model if it is sure just gets more confident text, not a test.',
      why_zh: '**事先**写好的[[c4_success]]把“看起来还行”变成可以逐条打勾或打叉的检查。问模型“你确定吗”只会得到更自信的话，而不是一次检验。' },
    { q_en: 'Which pair is matched correctly?', q_zh: '下面哪一组配对是正确的？',
      opts: [{ en: 'git = the website host; Vercel = version control', zh: 'git = 网站托管；Vercel = 版本控制' },
        { en: 'GitHub = where your repo lives online; Vercel = builds and hosts the site', zh: 'GitHub = 仓库在网上的家；Vercel = 构建并托管网站' },
        { en: 'GitHub = the AI model; git = the prompt', zh: 'GitHub = AI 模型；git = 提示词' },
        { en: 'Vercel = writes commits; GitHub = runs the build', zh: 'Vercel = 写提交；GitHub = 执行构建' }], a: 1,
      why_en: '[[c4_git]] tracks history on your machine, [[c4_github]] keeps the repo online, and Vercel turns a commit into a live site. Swapping these roles is the most common mix-up.',
      why_zh: '[[c4_git]]在你电脑上记录历史，[[c4_github]]把仓库放在网上，Vercel 把一次提交变成上线的网站。把这几个角色搞混是最常见的错误。' }
  ],
  qs: [
    {
      id: '4.1',
      lec_open_en: "Ask: you've been working on a project for two weeks and you break it the night before it's due. What would you give to have yesterday's version back?",
      lec_open_zh: "先问：一个项目你做了两周，交作业前一晚把它弄坏了。你愿意付出什么，换回昨天那个版本？",
      lec_why_en: "Picture it: 2 a.m., the night before a studio review. You 'clean up' a file, save, and the whole site turns white. Without a repository, that's a horror movie. With one, it's a two-second rewind: `git checkout` and yesterday is back.\n\nA [[c4_repo]] exists because files alone forget. A folder only knows *now*; a repository is the folder **plus its whole history** — every saved snapshot, who made it, and why. That hidden `.git` folder is the memory.\n\nWhy does that matter more than 'save as v2_final_FINAL'? Because history you can **compare, branch and roll back** turns fear into experimentation. You can try a wild idea on a branch and throw it away.\n\nAnd why put it on GitHub? A local repo protects you from yourself; a remote copy protects you from your laptop dying, and lets other people — or an agent, or Vercel — read the same history. **The repo becomes the single place the truth lives**, and every tool downstream points at it.",
      lec_why_zh: "想象一下：凌晨两点，评图前一晚。你“整理”了一下文件，保存，整个网站变成一片空白。没有仓库，这是恐怖片；有仓库，只是两秒钟的倒带——`git checkout`，昨天就回来了。\n\n[[c4_repo]]之所以存在，是因为光有文件会“失忆”。文件夹只知道**现在**；仓库是文件夹**加上它的全部历史**——每一次保存的快照、谁做的、为什么做。那个隐藏的 `.git` 文件夹就是它的记忆。\n\n为什么这比“另存为 v2_final_最终版”强？因为能**对比、分支、回退**的历史，会把“怕弄坏”变成“敢尝试”。疯狂的想法放在分支上试，不行就扔。\n\n那为什么还要放到 GitHub？本地仓库防的是你自己手滑；远程副本防的是电脑坏掉，还能让别人——或者智能体、或者 Vercel——读同一份历史。**仓库成了真相唯一存放的地方**，下游所有工具都指向它。",
      lec_trap_en: "Students say 'a repository is a folder of code.' It's tempting because that's what you see — but the definition lives in the part you don't see: the history of commits.",
      lec_trap_zh: "学生常说“仓库就是放代码的文件夹”。这很诱人，因为你看到的确实是文件夹——但定义的关键在看不见的部分：提交的历史。",
      lec_ask_en: "Ask: 'If I copy my project folder to a USB stick, do I have a repository?' — Listen for: only if the hidden .git history comes with it; the files alone are just a snapshot.",
      lec_ask_zh: "问：“把项目文件夹拷到 U 盘上，算不算拷走了一个仓库？”——好的回答：只有把隐藏的 .git 历史一起拷走才算；光有文件只是一张快照。",
      lec_bridge_en: "If the repository is the memory, the next question is: what is one memory? That's a commit.",
      lec_bridge_zh: "如果仓库是“记忆”，下一个问题就是：一条记忆是什么？那就是一次提交（commit）。",
     
      kid_en: `Think of a video game with save points. The folder is the game you’re playing right now. Every time you hit “save,” Git keeps that save — all of them, forever, in a hidden folder called .git — so you can go back to any earlier save. GitHub is the cloud save, so your friends (and websites like Vercel) can load the same game. A **repository** = your game + every save you ever made.`,
      kid_zh: `想想有存档点的电子游戏。文件夹就是你正在玩的这一局。每次按“保存”，Git 都会把这个存档留下来——全部永久保存在一个叫 .git 的隐藏文件夹里——你随时可以回到任何一个旧存档。GitHub 是云存档，朋友们（还有 Vercel 这样的网站）可以读取同一个进度。**仓库**＝你的游戏 + 你存过的每一个档。`,
      steps: [
        { en: 'Top row: the files you are working on right now. By themselves, they are just a folder.', zh: '最上面一行：你正在编辑的文件。光有它们，只是一个普通文件夹。', hi: ['c4_workdir'] },
        { en: 'Middle row: every save point (commit), kept in the hidden .git folder. The newest one is HEAD.', zh: '中间一行：每一个存档点（提交），都保存在隐藏的 .git 文件夹里。最新的叫 HEAD。', hi: ['c4_commit'] },
        { en: 'git push copies those saves up to GitHub — the cloud save that teammates and Vercel can read.', zh: 'git push 把这些存档复制到 GitHub——队友和 Vercel 都能读取的云存档。', hi: ['c4_push', 'c4_github'] },
        { en: 'Put it together: repository = files + every save. The history is what makes it more than a folder.', zh: '合起来：仓库＝文件 + 每一个存档。正是这段历史让它不只是一个文件夹。', hi: [] }
      ],
      t_en: 'Repository', t_zh: '仓库',
      short_en: `A [[c4_repo]] is **a project folder tracked by version control — the files plus their complete history**. [[c4_git]] stores that history in a hidden \`.git\` folder as a chain of [[c4_commit|commits]] (snapshots with who, when and why), and a copy usually lives remotely on [[c4_github]] so others — and services like Vercel — can read it. The history is what makes it a repository rather than just a folder.`,
      short_zh: `[[c4_repo]]是**受版本控制追踪的项目文件夹——文件加上它们的完整历史**。[[c4_git]]把历史存在隐藏的 \`.git\` 文件夹里，形成一串[[c4_commit|提交]]（记录了谁、何时、为什么的快照）；通常还有一份副本放在远程的[[c4_github]]上，让别人以及 Vercel 等服务读取。正是这份历史让它成为“仓库”，而不只是一个文件夹。`,
      basis_en: `Follows the class GitHub + Vercel exercise and GitHub’s own description of a repository as a project’s files plus each file’s revision history. The Git book describes commits as snapshots stored in the .git directory.`,
      basis_zh: `依据课上的 GitHub + Vercel 练习，以及 GitHub 自己对仓库的描述：项目的文件，加上每个文件的修订历史。Git 官方书把提交描述为存放在 .git 目录里的快照。`,
      links: [{ t: 'GitHub Docs — About repositories', u: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories' }],
      rel: ['4.2', '4.3', '5.3'],
      q_en: 'What is a repository?', q_zh: '什么是仓库（repository）？',
      fig() {
        const C = F.C; let s = '';
        // file icon helper
        const file = (x, y, name, o = {}) => F.path(`M${x},${y} h22 l8,8 v28 h-30 Z M${x + 22},${y} v8 h8`, { stroke: o.stroke || C.ink, fill: o.fill || '#fff', sw: 1 }) + F.text(x + 15, y + 50, name, { cls: 'tiny', color: o.tc || C.ink });
        // row labels
        const rowL = (y, en, zh, col) => F.text(20, y, en, { anchor: 'start', cls: 'lt', color: col || C.ink }) + F.sub(20, y + 16, zh);
        // 1. working folder
        s += rowL(52, 'WORKING FILES', '工作文件：你正在编辑的');
        s += F.g(file(220, 26, 'index.html') + file(290, 26, 'style.css') + file(360, 26, 'photo.jpg') + file(430, 26, 'about.html', { stroke: C.mag, fill: C.magF, tc: C.mag }), { tip: 'c4_workdir', note: { en: 'The files you see and edit. On their own this is just a folder.', zh: '你能看到并编辑的文件。单独看，它只是一个普通文件夹。' } });
        s += F.text(520, 50, '← edited, not yet committed', { anchor: 'start', cls: 'tiny', color: C.mag }) + F.sub(520, 66, '已修改，还没提交');
        // 2. .git history timeline
        s += rowL(150, '.git · HISTORY', '.git：隐藏的完整历史');
        const xs = [220, 330, 440, 550];
        const snap = (x, y, i, hi) => {
          let g = F.rect(x, y, 80, 56, { fill: hi ? C.magF : '#fff', stroke: hi ? C.mag : C.ink, rx: 4 });
          for (let k = 0; k < Math.min(4, i + 2); k++) g += `<rect x="${x + 8 + k * 17}" y="${y + 10}" width="12" height="15" fill="#fff" stroke="${hi ? C.mag : C.ink}" stroke-width=".8"/>`;
          g += F.text(x + 8, y + 44, ['c1 · start', 'c2 · nav', 'c3 · photo', 'c4 · about'][i], { anchor: 'start', cls: 'tiny', color: hi ? C.mag : C.ink });
          return g;
        };
        let tl = '';
        xs.forEach((x, i) => { tl += snap(x, 124, i, i === 3); if (i) tl += F.arrow(x - 2, 152, xs[i - 1] + 82, 152); });
        s += F.g(tl, { tip: 'c4_commit' });
        s += F.text(590, 198, 'HEAD', { cls: 'tiny', color: C.mag }) + F.text(260, 198, 'first save', { cls: 'tiny', color: C.mute });
        s += F.line(474, 84, 520, 122, { stroke: C.mag, dash: "3 3", arrow: true });
        s += F.text(680, 152, 'commit', { cls: 'tiny', color: C.mag }) + F.sub(680, 168, '提交 = 存档', { anchor: 'middle' });
        // 3. remote mirror
        s += rowL(268, 'GITHUB · REMOTE', 'GitHub：远程的同一份历史');
        let rm = F.rect(206, 236, 452, 70, { fill: '#fff', stroke: C.blue, rx: 8, dash: '4 3' });
        xs.forEach((x, i) => { rm += F.rect(x + 6, 248, 68, 44, { fill: C.blueF, stroke: C.blue, rx: 3 }) + F.text(x + 40, 274, 'c' + (i + 1), { cls: 'tiny', color: C.blue }); if (i) rm += F.line(x + 4, 270, xs[i - 1] + 76, 270, { stroke: C.blue }); });
        s += F.g(rm, { tip: 'c4_github' });
        s += F.g(F.arrow(690, 186, 690, 246, { stroke: C.blue }) + F.text(700, 222, 'git push', { anchor: 'start', cls: 'tiny', color: C.blue }), { tip: 'c4_push' });
        s += F.text(380, 328, 'REPOSITORY = FILES + ALL OF THIS HISTORY', { cls: 'lt', color: C.mag }) + F.sub(380, 344, '仓库 = 文件 + 这一整条历史', { anchor: 'middle' });
        return F.svg(760, 356, s, { label: 'a repository: working files, commit history, and its GitHub copy' });
      },
      cap_en: 'A repository is not just the files on top — it is the files plus every saved snapshot (commit) in the hidden .git folder, and usually a copy of the whole history on GitHub.',
      cap_zh: '仓库不只是最上面的文件——它是文件，加上隐藏的 .git 文件夹里每一个保存过的快照（提交），通常还有放在 GitHub 上的整条历史副本。',
      a_en: `A [[c4_repo]] is a **project folder that is tracked by version control** — the files *plus their complete history*. [[c4_git]] stores that history in a hidden \`.git\` folder as a chain of [[c4_commit|commits]]: snapshots of every file at moments you chose to save, each with who, when and why.

In our class the repository lived in two places:
- **Local** — on your laptop, where you edit.
- **Remote** — on [[c4_github]], the shared copy that collaborators and services like Vercel read from. You [[c4_push]] commits up to it.

Because the whole history is kept, a repo lets you see what changed, go back to an earlier version, work in parallel on branches, and connect the code to deployment. It is the **single source of truth** for a project.`,
      a_zh: `[[c4_repo]]是一个**受版本控制追踪的项目文件夹**——文件*加上它们的完整历史*。[[c4_git]]把这些历史存放在隐藏的 \`.git\` 文件夹里，形成一串[[c4_commit|提交]]：在你选择保存的时刻，所有文件的快照，每一个都记录了谁、何时、为什么。

在课上，仓库存在于两个地方：
- **本地**——在你的电脑上，你在这里编辑。
- **远程**——在[[c4_github]]上，是合作者以及 Vercel 等服务读取的共享副本。你把提交[[c4_push]]上去。

因为保留了全部历史，仓库可以让你查看改动、回到旧版本、在分支上并行工作，并把代码接到部署流程上。它是一个项目的**唯一可信来源**。`,
      hook_en: 'Repo = folder + its whole history (.git), usually mirrored on GitHub.',
      hook_zh: '仓库 = 文件夹 + 它的全部历史（.git），通常在 GitHub 上有一份镜像。',
      trap_en: 'Don’t answer “a place to store code.” Say *history / version control* — that’s what makes it a repository rather than a folder.',
      trap_zh: '不要只答“存代码的地方”。要说出*历史 / 版本控制*——这才是仓库和普通文件夹的区别。'
    },
    {
      id: '4.2',
      lec_open_en: "Ask: if you could only keep one sentence about every change you ever made to a project, what would that sentence need to say?",
      lec_open_zh: "先问：如果你对项目的每次改动只能留一句话，这句话必须说清什么？",
      lec_why_en: "Fun fact: Git was written in about two weeks in 2005 by Linus Torvalds, because the Linux project lost access to its old tool. He needed thousands of strangers to change the same code without chaos — so every change had to carry its own fingerprint and its own story.\n\nA [[c4_commit]] is a **snapshot plus a note**: what the files looked like, who saved it, when, why (the message), and which commit came before (the parent). Each one gets a unique ID, a [[c4_hash]], computed from its contents.\n\nWhy a hash and not just a number? Because the ID is a fingerprint of the content — change one letter and the ID changes. That makes the history **tamper-evident**: you can trust that commit a1b2… is exactly what it was.\n\nWhy the parent link? Because it chains commits into a timeline, so Git can show the [[c4_diff]] between any two points. And why the message? Because code shows *what* changed; only a human can write *why*. That 'why' is what you'll need in three months.",
      lec_why_zh: "冷知识：Git 是 Linus Torvalds 在 2005 年大约两周内写出来的，因为 Linux 项目突然用不了原来的工具。他需要成千上万个陌生人改同一份代码却不乱套——所以每次改动都得带着自己的“指纹”和自己的“故事”。\n\n一次[[c4_commit]]就是**一张快照加一张便条**：文件当时的样子、谁保存的、什么时候、为什么（提交信息），以及它的上一次提交是谁（父提交）。每次提交都有一个由内容算出来的唯一编号——[[c4_hash]]。\n\n为什么用哈希而不用 1、2、3？因为这个编号是内容的“指纹”——改一个字母，编号就变。所以历史是**防篡改的**：你可以确信 a1b2… 就是当初那个样子。\n\n为什么要有父提交？它把提交串成一条时间线，Git 才能显示任意两点之间的[[c4_diff]]。为什么要写提交信息？因为代码只能说明改了**什么**，**为什么**只有人能写。三个月后你最需要的，正是这个“为什么”。",
      lec_trap_en: "Students describe a commit as 'saving' or 'uploading.' Saving overwrites; a commit adds a new, permanent, labelled snapshot — and it's local until you push.",
      lec_trap_zh: "学生常把提交说成“保存”或“上传”。保存会覆盖旧的；提交是新增一张永久、带标签的快照——而且在 push 之前它只在你本地。",
      lec_ask_en: "Ask: 'Why can't two different commits have the same ID?' — Listen for: the ID (hash) is computed from the content and its parent, so different content means a different ID.",
      lec_ask_zh: "问：“为什么两个不同的提交不可能有相同的编号？”——好的回答：编号（哈希）是根据内容和父提交算出来的，内容不同，编号就不同。",
      lec_bridge_en: "Commits live on your laptop. The next question is how one of them becomes a page anyone can open: deployment.",
      lec_bridge_zh: "提交还在你电脑上。下一个问题是：其中一次提交怎么变成任何人都能打开的网页？这就是部署。",
     
      kid_en: `A commit is like one page in a scrapbook. You glue in a photo of your project exactly as it is right now, and you write a sticky note: today’s date, your name, and *why* you changed it (“added the contact form”). Each page also says “the page before this one is #9c07,” so the pages stay in order. Later you can flip back to any page, or compare two pages to see what changed.`,
      kid_zh: `一个提交就像剪贴簿里的一页。你把项目此刻的样子拍张照贴进去，再贴一张便利贴：今天的日期、你的名字，还有*为什么*改（“加了联系表单”）。每一页还写着“上一页是 #9c07”，这样页面就不会乱。以后你可以翻回任意一页，或者比较两页，看看改了什么。`,
      steps: [
        { en: 'Top: commits form a chain. Each circle is one saved snapshot; the newest (HEAD) is on the right.', zh: '上面：提交连成一条链。每个圆圈是一个保存的快照；最新的（HEAD）在最右边。', hi: ['c4_commit'] },
        { en: 'Open one commit. First: its unique ID, the hash — like a fingerprint no other commit has.', zh: '打开一个提交。第一项：它独一无二的编号——哈希值，就像别人没有的指纹。', hi: ['c4_hash'] },
        { en: 'The message: a short note in human words saying WHY you made this change.', zh: '提交信息：一句用人话写的说明，讲清你为什么这样改。', hi: ['c4_message'] },
        { en: 'The parent: an arrow back to the previous snapshot. These arrows are what make history a chain.', zh: '父提交：指回上一个快照的箭头。正是这些箭头让历史连成一条链。', hi: ['c4_parent'] },
        { en: 'The diff: exactly what changed — green lines added, red lines removed.', zh: '差异：到底改了什么——绿色是新加的，红色是删掉的。', hi: ['c4_diff'] }
      ],
      t_en: 'Commit', t_zh: '提交',
      short_en: `A [[c4_commit]] is **a saved snapshot of the repository at one moment, made on purpose**, the basic unit of Git history. It records the changes (shown as a [[c4_diff]]), a unique [[c4_hash]], the author and time, a **message** saying what and why, and a pointer to its **parent** commit — which links snapshots into a timeline you can compare against or return to. Committing saves locally; you [[c4_push]] to send commits to GitHub.`,
      short_zh: `[[c4_commit]]是**仓库在某一时刻被有意保存下来的快照**，是 Git 历史的基本单位。它记录改动（以[[c4_diff]]显示）、唯一的[[c4_hash]]、作者和时间、说明改了什么和为什么的**提交信息**，以及指向**父提交**的指针——由此把快照连成一条可以对比、可以回退的时间线。提交是在本地保存；要[[c4_push]]才会发到 GitHub。`,
      basis_en: `Follows the class Git workflow and the official Git documentation (git commit records changes to the repository with a message; each commit points to its parent).`,
      basis_zh: `依据课上的 Git 流程和 Git 官方文档（git commit 把改动连同说明记录进仓库；每个提交都指向它的父提交）。`,
      links: [{ t: 'Git — git-commit documentation', u: 'https://git-scm.com/docs/git-commit' }],
      rel: ['4.1', '4.3', '5.2'],
      q_en: 'What is a commit?', q_zh: '什么是提交（commit）？',
      fig() {
        let s = '';
        // chain of commits along the top
        const cy = 60, xs = [90, 230, 370];
        xs.forEach((x, i) => {
          s += F.circle(x, cy, 22, { text: ['e41f', '9c07', 'a1b2'][i], tcls: 'tiny', fill: i === 2 ? F.C.magF : '#fff', stroke: i === 2 ? F.C.mag : F.C.ink, tip: 'c4_commit' });
          if (i) s += F.arrow(x - 24, cy, xs[i - 1] + 26, cy, {});
        });
        s += F.text(230, 100, 'each commit points back to its parent', { cls: 'tiny', color: F.C.mute }) + F.sub(230, 119, '每个提交都指向它的父提交', { anchor: 'middle' });
        s += F.text(370, 24, 'HEAD', { cls: 'tiny', color: F.C.mag });
        // explode the latest commit into a card
        s += F.path('M370,84 C370,130 470,120 470,150', { stroke: F.C.mag, dash: '3 3', arrow: true });
        const X = 300, Y = 152, Wc = 400;
        const row = (y, h, k, v, o = {}) => F.rect(X, y, Wc, h, { fill: o.fill || '#fff', stroke: o.stroke || F.C.ink, rx: 3, tip: o.tip, note: o.note }) +
          F.text(X + 10, y + 15, k, { anchor: 'start', cls: 'tiny', color: F.C.mute }) + F.text(X + 10, y + h - 11, v, { anchor: 'start', cls: 'mono', color: o.vc || F.C.ink });
        s += row(Y, 40, 'HASH · 哈希值', 'a1b2c3d4e5f6…', { tip: 'c4_hash', vc: F.C.mag });
        s += row(Y + 46, 40, 'AUTHOR + TIME · 作者与时间', 'Ying <ying@gwu.edu> · Oct 6 14:02', { note: { en: 'Who made this change and when.', zh: '谁、在什么时候做了这次改动。' } });
        s += row(Y + 92, 40, 'MESSAGE · 说明', '"Add contact form to homepage"', { tip: 'c4_message', note: { en: 'A short human explanation of WHY — written for your future self and teammates.', zh: '一句写给未来的自己和队友的说明：为什么改。' } });
        s += row(Y + 138, 40, 'PARENT · 父提交', '9c07…', { tip: 'c4_parent', note: { en: 'The link back to the previous snapshot — this is what makes history a chain.', zh: '指回上一个快照的链接——历史因此成为一条链。' } });
        // diff block
        let d = F.rect(X, Y + 184, Wc, 74, { fill: '#fff', rx: 3 }) + F.text(X + 10, Y + 199, 'SNAPSHOT / DIFF · 快照与差异', { anchor: 'start', cls: 'tiny', color: F.C.mute });
        d += `<rect x="${X + 8}" y="${Y + 207}" width="${Wc - 16}" height="18" fill="${F.C.greenF}"/>` + F.text(X + 14, Y + 220, '+ <form method="post" action="/contact">', { anchor: 'start', cls: 'mono', color: F.C.green });
        d += `<rect x="${X + 8}" y="${Y + 229}" width="${Wc - 16}" height="18" fill="${F.C.redF}"/>` + F.text(X + 14, Y + 242, '− <p>Email me sometime</p>', { anchor: 'start', cls: 'mono', color: F.C.red });
        s += F.g(d, { tip: 'c4_diff' });
        // left explanation labels
        s += F.label([X, Y + 20], 200, 'UNIQUE ID') + F.sub(192, Y + 37, '唯一编号', { anchor: 'end' });
        s += F.label([X, Y + 112], 200, 'WHY') + F.sub(192, Y + 129, '为什么改', { anchor: 'end' });
        s += F.label([X, Y + 221], 200, 'WHAT CHANGED') + F.sub(192, Y + 238, '改了什么', { anchor: 'end' });
        return F.svg(760, 430, s, { label: 'anatomy of a git commit' });
      },
      cap_en: 'Top: commits form a chain, newest (HEAD) on the right. Below: one commit pulled apart — an ID, an author and time, a message, a parent, and the snapshot of what changed.',
      cap_zh: '上：提交连成一条链，最新的（HEAD）在右边。下：把一个提交拆开——编号、作者与时间、说明、父提交，以及改动内容的快照。',
      a_en: `A [[c4_commit]] is a **saved snapshot of the repository at one moment**, recorded on purpose. It is the basic unit of history in [[c4_git]]. Each commit contains:
- the state of the files (Git shows it to you as a [[c4_diff]] — lines added and removed since the last commit);
- a unique ID, the [[c4_hash]];
- the author and time;
- a **commit message** saying what and why (“Add contact form”);
- a pointer to its **parent** commit, which is what links snapshots into a timeline.

You choose what goes in (stage) and then commit; you can always return to or compare against any commit. Commits are local until you [[c4_push]] them to GitHub. Small, well-described commits are how a team (or an agent) keeps work traceable and reversible.`,
      a_zh: `[[c4_commit]]是**仓库在某一时刻被有意保存下来的快照**，是 [[c4_git]] 历史的基本单位。每个提交包含：
- 文件的状态（Git 以[[c4_diff]]的形式显示给你——自上次提交以来新增和删除的行）；
- 唯一编号，即[[c4_hash]]；
- 作者与时间；
- 一条**提交说明**，写明改了什么、为什么（例如 “Add contact form”）；
- 指向**父提交**的指针，把一个个快照连成一条时间线。

你先选择要放进去的改动（暂存），再提交；之后随时可以回到或对比任意一个提交。提交在[[c4_push]]到 GitHub 之前只存在于本地。小而说明清楚的提交，是团队（或智能体）让工作可追溯、可撤回的方式。`,
      hook_en: 'A commit is a labeled save point: snapshot + message + author + time + parent.',
      hook_zh: '提交就是一个带标签的存档点：快照 + 说明 + 作者 + 时间 + 父提交。',
      trap_en: 'A commit is not the same as uploading. Committing saves locally; pushing sends it to GitHub.',
      trap_zh: '提交不等于上传。commit 是在本地保存；push 才是发送到 GitHub。'
    },
    {
      id: '4.3',
      lec_open_en: "Ask: you type one command, and thirty seconds later a stranger in Tokyo can open your page. How many machines do you think touched your code in between?",
      lec_open_zh: "先问：你敲了一条命令，三十秒后东京的一个陌生人就能打开你的网页。你觉得中间有几台机器碰过你的代码？",
      lec_why_en: "Think of it as mailing a cake recipe to a bakery that bakes it fresh, then ships slices to shops in every city — all within a minute. And if the oven catches fire, the shops keep selling yesterday's cake. That last part is the secret hero of deployment.\n\n[[c4_deploy]] is a **relay race of machines**, and each handoff exists for a reason. You [[c4_push]] the commit to GitHub — so there is one shared, trusted copy. GitHub fires a [[c4_webhook]] to Vercel — because Vercel shouldn't have to keep asking 'anything new?'; GitHub calls it.\n\nVercel then clones that exact commit and runs the [[c4_build]] on a clean machine. Why a clean machine and not your laptop? So the result doesn't depend on whatever happens to be installed on your computer — **if it builds there, it builds for everyone**.\n\nFinally the output is copied to a [[c4_cdn]] — servers around the world — and a URL is pointed at it. Why? Speed: the Tokyo visitor gets it from a nearby server. And the safety net: **if the build fails, nothing is replaced** — the old version stays live. That's why the whole chain is tied to a commit: every live page is a specific, recoverable moment in the history.",
      lec_why_zh: "可以把它想成：你把蛋糕配方寄给一家面包店，店里现烤，再把切片送到每座城市的门店——一分钟内搞定。万一烤箱着火了，门店就继续卖昨天的蛋糕。最后这一点，才是部署里默默无闻的英雄。\n\n[[c4_deploy]]是一场**机器之间的接力赛**，每一棒的交接都有原因。你把提交[[c4_push]]到 GitHub——这样才有一份大家共享、可信的副本。GitHub 向 Vercel 发一个[[c4_webhook]]——因为不该让 Vercel 一直去问“有新的吗？”，而是 GitHub 主动通知它。\n\n接着 Vercel 把那个确切的提交拉下来，在一台干净的机器上做[[c4_build]]。为什么不在你电脑上构建？这样结果才不取决于你电脑里碰巧装了什么——**在那里能构建成功，对所有人就都能成功**。\n\n最后把产物复制到[[c4_cdn]]——遍布全球的服务器——再把网址指向它。为什么？快：东京的访客从附近的服务器拿到网页。还有安全网：**构建失败就什么都不替换**，旧版本继续在线。所以整条链都绑定在一次提交上：每一个线上页面，都是历史里一个具体的、可以找回的时刻。",
      lec_trap_en: "Students say 'Vercel copies my files to the internet.' It's tempting because that's the effect — but they skip the trigger (webhook) and the build, which is exactly where deploys fail.",
      lec_trap_zh: "学生常说“Vercel 把我的文件复制到网上”。效果上确实如此——但他们漏掉了触发（webhook）和构建，而部署出问题恰恰就在这两步。",
      lec_ask_en: "Ask: 'Your build fails at 11pm. What do visitors see?' — Listen for: the last successful version; a failed build never replaces the live site.",
      lec_ask_zh: "问：“晚上 11 点构建失败了，访客看到的是什么？”——好的回答：上一次成功的版本；失败的构建不会替换线上网站。",
      lec_bridge_en: "Now your page is live and public. Next: the chatbots we used to help write it — and what each company hides from you.",
      lec_bridge_zh: "现在页面已经公开上线了。接下来看帮我们写它的那些聊天产品——以及每家公司对你藏了什么。",
     
      kid_en: `Imagine mailing your drawing to a magazine. You drop it in the mailbox (that’s **git push**). The post office (GitHub) rings the printing house (Vercel): “new drawing arrived!” The printer copies it, checks it prints right (the **build**), then sends copies to newsstands all over the world (the CDN) and gives you an address where anyone can see it (the URL). If the printer jams — the build fails — nothing new goes out, and the old issue stays on the shelves.`,
      kid_zh: `想象你把一幅画寄给杂志社。你把它投进邮筒（这就是 **git push**）。邮局（GitHub）给印刷厂（Vercel）打电话：“新画到了！”印刷厂复印它，检查印得对不对（这就是**构建**），再把印好的杂志送到世界各地的报刊亭（CDN），还给你一个任何人都能看到它的地址（网址）。如果印刷机卡纸——构建失败——新的就发不出去，书架上还是旧的那一期。`,
      steps: [
        { en: 'Press space (or click the laptop). That is git push: your new commit leaves your computer.', zh: '按空格（或点笔记本）。这就是 git push：你的新提交离开了你的电脑。', hi: ['g43-lap'] },
        { en: 'Watch the light travel: GitHub receives the commit and pings Vercel (the webhook).', zh: '看光点移动：GitHub 收到提交，然后通知 Vercel（这就是 webhook）。', hi: [] },
        { en: 'Vercel clones that exact commit and runs the build. Its screen shows the steps.', zh: 'Vercel 把这个提交原样拉下来，运行构建。它的屏幕上显示每一步。', hi: [] },
        { en: 'The result is copied to servers worldwide, and the browser on the right shows the live URL.', zh: '结果被复制到世界各地的服务器，右边的浏览器显示出上线的网址。', hi: [] },
        { en: 'Now press B to break the build and push again. Nothing new goes live — the old version stays up.', zh: '现在按 B 让构建失败，再推送一次。新的不会上线——旧版本继续在线。', hi: [] }
      ],
      t_en: 'Deployment', t_zh: '部署',
      short_en: `Because the repo is connected to Vercel, a push starts an automatic [[c4_deploy|deployment]]: **GitHub updates the branch → notifies Vercel ([[c4_webhook]]) → Vercel clones that commit → runs the [[c4_build]] (install + build command) → uploads the output to its servers/[[c4_cdn]] → assigns a URL** (a preview URL per push; the production domain for the main branch). If the build fails, nothing is published and the old version stays live.`,
      short_zh: `因为仓库已连接 Vercel，一次推送会自动触发[[c4_deploy|部署]]：**GitHub 更新分支 → 通知 Vercel（[[c4_webhook]]）→ Vercel 拉取该提交 → 运行[[c4_build]]（安装依赖 + 构建命令）→ 把结果上传到它的服务器/[[c4_cdn]] → 分配网址**（每次推送有预览网址；main 分支对应正式域名）。如果构建失败，什么都不会发布，旧版本继续在线。`,
      basis_en: `Follows the class GitHub → Vercel deploy and Vercel’s Git docs: connecting a repository makes every push create a deployment; pushes to the production branch (usually main) update the production domain, other branches get preview URLs. Vercel’s docs page could not be opened in this session; this matches the documented behaviour we used in class.`,
      basis_zh: `依据课上的 GitHub → Vercel 部署练习和 Vercel 的 Git 文档：连接仓库后，每次推送都会生成一次部署；推送到生产分支（通常是 main）会更新正式域名，其他分支得到预览网址。本次未能打开 Vercel 文档页面；以上与课上使用时的行为一致。`,
      links: [{ t: 'Vercel — Deploying Git repositories', u: 'https://vercel.com/docs/git' }],
      rel: ['4.2', '1.3', '4.1'],
      glow: {
        name_en: 'Push → GitHub → Vercel → live URL', name_zh: '推送 → GitHub → Vercel → 上线网址',
        hint_en: 'Click the laptop or press space to push · B or the switch breaks the build',
        hint_zh: '点笔记本或按空格推送 · 按 B 或拨开关让构建失败',
        aria: 'Isometric deploy pipeline: a laptop, a GitHub server, a Vercel build machine, edge servers and a browser. Press space to push a commit and watch each stage light up; press B to break the build.',
        mount(stage, api) {
          const K = api.iso.frame([[0, 0, 0], [500, 0, 0], [0, 185, 0], [500, 185, 0], [115, 60, 92], [406, 96, 75]], 0.04);
          const { TOP, FRONT, box, boxc, path } = K;
          const t = (x, y, txt, cls = 'label', fs = 6.5, extra = '') => `<text class="${cls}" x="${x}" y="${y}" font-size="${fs}" ${extra}>${api.iso.esc(txt)}</text>`;
          const wire = (id, pts) => { const d = path(pts); return `<path class="wire-under" d="${d}"/><path id="g43-${id}" class="wire" d="${d}"/><path id="g43-${id}p" class="pulse" pathLength="1000" d="${d}"/>`; };
          let s = box(0, 0, 0, 500, 185, 8, 14);
          s += `<g transform="${TOP(0, 0, 8)}"><rect class="detail" x="9" y="9" width="482" height="167" rx="9"/></g>`;
          // 1 laptop
          s += `<g id="g43-lap" class="press">${box(18, 112, 8, 70, 50, 5, 3)}${box(22, 114, 13, 62, 4, 44)}</g>`;
          s += `<g transform="${FRONT(22, 118, 57)}"><rect id="g43-lg" class="glass" x="4" y="4" width="54" height="34" rx="2"/>
            <text id="g43-l1" class="scr" x="8" y="15" font-size="6.6">$ git commit</text><text id="g43-l2" class="scr" x="8" y="24" font-size="6.6">$ _</text></g>`;
          s += `<g transform="${FRONT(18, 162, 13)}">${t(2, 14, '01 YOU · LAPTOP', 'label', 7.2)}${t(2, 23, '你：本地电脑', 'label-zh', 7.2)}</g>`;
          s += wire('w1', [[88, 137, 9], [132, 137, 9], [132, 120, 9]]);
          // 2 github
          s += box(115, 60, 8, 60, 60, 78, 0);
          s += `<g transform="${FRONT(115, 120, 86)}">${api.iso.slits(8, 52, 4, 8, 22)}
            ${[0, 1, 2, 3, 4, 5].map(i => `<rect id="g43-c${i}" class="led" x="${8 + i * 7.5}" y="30" width="5" height="5" rx="1"/>`).join('')}
            <text id="g43-gh" class="scr" x="8" y="48" font-size="7.2">main · c3</text>
            ${t(8, 66, '02 GITHUB · REPO', 'label', 6.7)}${t(8, 74, '远程仓库', 'label-zh', 6.7)}</g>`;
          s += wire('w2', [[175, 90, 9], [210, 90, 9]]);
          // 3 vercel builder
          s += box(210, 55, 8, 80, 70, 58, 0);
          s += `<g transform="${FRONT(210, 125, 66)}"><rect id="g43-vg" class="glass" x="6" y="6" width="68" height="34" rx="2"/>
            <text id="g43-v1" class="scr" x="10" y="16" font-size="6.4"></text><text id="g43-v2" class="scr" x="10" y="25" font-size="6.4"></text><text id="g43-v3" class="scr" x="10" y="34" font-size="6.4"></text>
            ${t(6, 49, '03 VERCEL · BUILD', 'label', 6.4)}${t(6, 56, '拉取并构建', 'label-zh', 6.4)}</g>`;
          // break switch
          s += `<g id="g43-sw" class="press">${box(228, 142, 8, 30, 24, 7, 3)}</g>`;
          s += `<g transform="${TOP(228, 142, 15)}">${t(5, 15, 'BREAK', 'label', 7.8)}</g>`;
          s += `<g transform="${FRONT(262, 170, 9)}">${t(0, 7, 'BREAK BUILD · 让构建失败', 'label', 6.6)}</g>`;
          s += wire('w3', [[290, 88, 9], [362, 88, 9]]);
          // 4 cdn edge servers
          const cdn = [[330, 48, 30], [330, 104, 24], [364, 72, 38]];
          cdn.forEach(([x, y, h], i) => {
            s += box(x, y, 8, 26, 26, h, 0);
            s += `<g transform="${FRONT(x, y + 26, 8 + h)}"><rect id="g43-e${i}" class="led" x="5" y="5" width="16" height="4" rx="1"/>${api.iso.slits(5, 21, 3, 12, Math.min(h - 4, 22))}</g>`;
          });
          s += `<g transform="${FRONT(330, 130, 32)}">${t(0, 30, '04 DEPLOY · CDN', 'label', 6.7)}${t(0, 38, '分发到全球服务器', 'label-zh', 6.7)}</g>`;
          s += wire('w4', [[390, 90, 9], [402, 96, 9]]);
          // 5 browser
          s += box(400, 78, 8, 82, 46, 5, 3) + box(406, 96, 13, 70, 5, 58);
          s += `<g transform="${FRONT(406, 101, 71)}"><rect id="g43-bg" class="glass" x="4" y="4" width="62" height="44" rx="2"/>
            <rect class="detail" x="8" y="8" width="54" height="6" rx="2"/><text class="label" x="10" y="12.6" font-size="5.0">your-site.vercel.app</text>
            <text id="g43-b1" class="scr" x="10" y="27" font-size="8.4">v3</text><text id="g43-b2" class="scr" x="10" y="38" font-size="6.0">live</text></g>`;
          s += `<g transform="${FRONT(400, 124, 13)}">${t(2, 14, '05 URL LIVE', 'label', 7.2)}${t(2, 23, '网址上线', 'label-zh', 7.2)}</g>`;
          stage.setAttribute('viewBox', K.viewBox); stage.innerHTML = s;
          const $ = id => stage.querySelector('#g43-' + id);
          const st = { n: 3, live: 3, broken: false, busy: false };
          function leds() { for (let i = 0; i < 6; i++) $('c' + i).classList.toggle('hot', i < Math.min(6, st.n - 2)); $('gh').textContent = `main · c${st.n}`; }
          function idle() { api.say(`live: v${st.live} · ${st.broken ? 'build will FAIL' : 'build ok'} · space to push`, `线上：v${st.live} · ${st.broken ? '构建会失败' : '构建正常'}`); }
          function setV(a, b, c) { $('v1').textContent = a; $('v2').textContent = b; $('v3').textContent = c; }
          function toggleBreak() { st.broken = !st.broken; $('sw').classList.toggle('latched', st.broken); api.flash($('sw'), 200); if (!st.busy) idle(); return true; }
          function push() {
            if (st.busy) return true; st.busy = true; st.n++;
            ['w1', 'w2', 'w3', 'w4'].forEach(w => $(w).classList.remove('hot'));
            $('vg').classList.remove('hot'); setV('', '', ''); ['e0', 'e1', 'e2'].forEach(e => $(e).classList.remove('hot'));
            api.flash($('lap'), 300); $('lg').classList.add('hot'); $('l1').textContent = `$ commit c${st.n}`; $('l2').textContent = '$ git push';
            api.replay($('w1p')); $('w1').classList.add('hot'); api.say('1 · push → GitHub', '1 · 推送到 GitHub');
            api.after(600, () => { leds(); api.replay($('w2p')); $('w2').classList.add('hot'); api.say('2 · webhook tells Vercel', '2 · webhook 通知 Vercel'); });
            api.after(1200, () => { $('vg').classList.add('hot'); setV(`clone c${st.n}`, '', ''); api.say('3 · Vercel clones the commit', '3 · Vercel 拉取该提交'); });
            api.after(1700, () => { setV(`clone c${st.n}`, 'npm run build…', ''); api.say('3 · build', '3 · 构建中'); });
            api.after(2400, () => {
              if (st.broken) {
                setV(`clone c${st.n}`, 'npm run build…', '✗ build failed');
                api.say(`build failed · v${st.live} stays live`, `构建失败 · 旧版本 v${st.live} 继续在线`);
                st.busy = false; return;
              }
              setV(`clone c${st.n}`, 'npm run build…', '✓ build ok'); api.replay($('w3p')); $('w3').classList.add('hot'); api.say('4 · upload to edge servers', '4 · 上传到边缘服务器');
            });
            api.after(2950, () => { if (st.broken && !st.busy) return; ['e0', 'e1', 'e2'].forEach((e, i) => api.after(i * 120, () => $(e).classList.add('hot'))); api.replay($('w4p')); $('w4').classList.add('hot'); });
            api.after(3500, () => {
              if (!st.busy) return;
              st.live = st.n; $('bg').classList.add('hot'); $('b1').textContent = `v${st.live}`; $('b2').textContent = '✓ live';
              api.power(true); st.busy = false; api.say(`5 · v${st.live} live at the URL`, `5 · v${st.live} 已在网址上线`);
            });
            return true;
          }
          $('lap').addEventListener('click', push);
          $('sw').addEventListener('click', toggleBreak);
          leds(); idle(); $('bg').classList.add('hot');
          return {
            key: e => { if (e.key === ' ' || e.key === 'Enter' || e.key === 'p' || e.key === 'P') return push(); if (e.key === 'b' || e.key === 'B') return toggleBreak(); return false; },
            demo: () => api.after(300, push)
          };
        }
      },
      q_en: 'What happens between a push to GitHub and a page appearing on Vercel?',
      q_zh: '从推送（push）到 GitHub，到页面出现在 Vercel 上，中间发生了什么？',
      fig() {
        let s = '';
        const steps = [
          { t: 'git push', z: '推送提交', tip: 'c4_push', c: F.C.ink },
          { t: 'GITHUB REPO', z: 'main 分支更新', tip: 'c4_github', c: F.C.ink },
          { t: 'WEBHOOK', z: '通知 Vercel', tip: 'c4_webhook', c: F.C.amber },
          { t: 'CLONE', z: '拉取该提交的代码', note: { en: 'Vercel fetches exactly that commit from the repo.', zh: 'Vercel 从仓库拉取那一个提交的代码。' }, c: F.C.ink },
          { t: 'BUILD', z: '安装依赖 + 构建', tip: 'c4_build', c: F.C.blue },
          { t: 'DEPLOY', z: '上传到全球 CDN', tip: 'c4_cdn', c: F.C.green },
          { t: 'URL LIVE', z: 'your-site.vercel.app', tip: 'c4_preview', c: F.C.mag }
        ];
        // two rows: 4 on top, 3 on bottom (snake)
        const pos = [[40, 50], [215, 50], [390, 50], [565, 50], [565, 200], [390, 200], [215, 200]];
        steps.forEach((st, i) => {
          const [x, y] = pos[i];
          const fill = st.c === F.C.ink ? '#fff' : ({ [F.C.amber]: F.C.amberF, [F.C.blue]: F.C.blueF, [F.C.green]: F.C.greenF, [F.C.mag]: F.C.magF })[st.c];
          s += F.rect(x, y, 150, 62, { fill, stroke: st.c, rx: 6, tip: st.tip, note: st.note });
          s += F.text(x + 10, y + 16, String(i + 1).padStart(2, '0'), { anchor: 'start', cls: 'tiny', color: F.C.mute });
          s += F.text(x + 75, y + 34, st.t, { cls: 'lt', color: st.c });
          s += F.sub(x + 75, y + 52, st.z, { anchor: 'middle' });
        });
        s += F.arrow(192, 81, 213, 81) + F.arrow(367, 81, 388, 81) + F.arrow(542, 81, 563, 81);
        s += F.arrow(640, 114, 640, 198);
        s += F.arrow(563, 231, 542, 231) + F.arrow(388, 231, 367, 231);
        // you
        s += F.text(115, 152, 'YOU · laptop', { cls: 'tiny', color: F.C.mute }) + F.sub(115, 167, '你在本地', { anchor: 'middle' });
        s += F.path('M115,140 L115,114', { stroke: F.C.mute, dash: '3 3' });
        s += F.text(470, 152, 'VERCEL · automatic, ~seconds', { cls: 'tiny', color: F.C.mute }) + F.sub(470, 167, 'Vercel 自动完成，约几秒到一分钟', { anchor: 'middle' });
        s += F.path('M360,130 H720', { stroke: '#cfcbc2', dash: '2 4' });
        s += F.text(130, 290, 'build fails → no deploy; the old version stays live', { anchor: 'start', cls: 'tiny', color: F.C.red }) + F.sub(130, 306, '构建失败 → 不部署，旧版本继续在线');
        return F.svg(760, 320, s, { label: 'push to deploy pipeline' });
      },
      cap_en: 'From one command to a public page: GitHub tells Vercel, Vercel fetches that commit, builds it, spreads it across its servers and points a URL at it.',
      cap_zh: '从一条命令到一个公开网页：GitHub 通知 Vercel，Vercel 拉取该提交、构建、分发到它的服务器，再把网址指向它。',
      a_en: `When you [[c4_push]] commits to [[c4_github]], a [[c4_deploy|deployment]] pipeline runs automatically, because the repo is connected to Vercel:
1. **GitHub receives the commits** and updates the branch (e.g. \`main\`).
2. **GitHub notifies Vercel** through its Git integration / [[c4_webhook]]: “there is a new commit.”
3. **Vercel clones that exact commit** of the repository.
4. **Build** — Vercel installs dependencies and runs the [[c4_build|build command]], producing the final HTML/CSS/JS (and any serverless functions). If the build fails, nothing is published and the old version stays online.
5. **Deploy** — the output is uploaded to Vercel’s servers / [[c4_cdn]] around the world.
6. **URL** — Vercel assigns a URL (a preview URL for the push; the production domain updates when it’s the main branch — see [[c4_preview]]). DNS points visitors to it and the page appears.

So between “push” and “page” there is: notification → fetch → build → host → route.`,
      a_zh: `当你把提交[[c4_push]]到[[c4_github]]时，由于仓库已与 Vercel 连接，一条[[c4_deploy|部署]]流水线会自动运行：
1. **GitHub 接收提交**，更新分支（例如 \`main\`）。
2. **GitHub 通知 Vercel**：通过 Git 集成 / [[c4_webhook]]告诉它“有新提交了”。
3. **Vercel 克隆（拉取）那个提交**的代码。
4. **构建**——Vercel 安装依赖并运行[[c4_build|构建命令]]，生成最终的 HTML/CSS/JS（以及无服务器函数）。如果构建失败，什么都不会发布，旧版本继续在线。
5. **部署**——把构建结果上传到 Vercel 分布在世界各地的服务器 / [[c4_cdn]]。
6. **网址**——Vercel 分配一个网址（每次推送有预览网址；推送到 main 分支时更新正式域名——见[[c4_preview]]）。DNS 把访问者指过去，页面就出现了。

所以从“推送”到“页面”之间是：通知 → 拉取 → 构建 → 托管 → 路由。`,
      hook_en: 'Push → notify → clone → build → deploy to CDN → URL.',
      hook_zh: '推送 → 通知 → 拉取 → 构建 → 部署到 CDN → 网址。',
      trap_en: 'Mention the BUILD step and that it is automatic (the repo is connected). Many answers jump straight from GitHub to “it’s online.”',
      trap_zh: '一定要提到“构建”这一步，以及它是自动触发的（仓库已连接）。很多答案直接从 GitHub 跳到“上线了”。'
    },
    {
      id: '4.4',
      lec_open_en: "Ask: if you send the exact same message to ChatGPT, Claude, Gemini and Copilot, why would you get four different answers?",
      lec_open_zh: "先问：同一句话分别发给 ChatGPT、Claude、Gemini 和 Copilot，为什么会得到四个不同的回答？",
      lec_why_en: "Here's the twist students love: the chatbot has been given a secret note before you ever said hello. It's like walking into a store where the staff were briefed this morning — 'be cheerful, never mention the competitor, suggest the premium plan' — and you only hear the smile.\n\nBecause **the product is not the model**. Before your message arrives, each company has already put text in front of it: a [[c4_sysprompt]] — instructions written by the company that set the role, tone, rules, safety limits and what tools to use. You never see it, but the model reads it first, every time.\n\nWhy do companies do this? Because a raw model is a generalist; the system prompt turns it into *their* product — the brand voice, the legal caution, the formatting habits. On top of that come [[c4_tools]] (search, code), [[c4_memory]] of past chats, and your own [[c4_custom]] instructions.\n\nSo the Four Prompts activity shows that **your message is only the top layer**. Different answers come from different hidden layers (and different models underneath). The design lesson: when you build with AI, you are also writing a system prompt — and you are responsible for it.",
      lec_why_zh: "学生最爱听的反转：你还没说“你好”，聊天机器人就已经收到一张秘密纸条了。就像走进一家店，店员早上开会被交代过——“要热情、别提竞争对手、推荐高级套餐”——而你只听得到那张笑脸。\n\n因为**产品不等于模型**。你的消息到达之前，每家公司已经在前面放好了文字：[[c4_sysprompt]]——由公司写的指令，规定角色、语气、规则、安全限制和能用哪些工具。你永远看不到它，但模型每次都先读它。\n\n公司为什么这么做？因为原始模型是个“通才”，系统提示词把它变成**它们家的**产品——品牌语气、法律上的谨慎、排版习惯。再往上叠加[[c4_tools]]（搜索、写代码）、对过往对话的[[c4_memory]]，还有你自己写的[[c4_custom]]。\n\n所以 Four Prompts 活动说明：**你的消息只是最上面一层**。回答不同，来自不同的隐藏层（以及底下不同的模型）。设计上的启示：当你用 AI 做产品时，你也在写系统提示词——你要为它负责。",
      lec_trap_en: "Students say 'the system prompt is what I type.' Tempting, because it's the only prompt they see — but the system prompt is written by the company, and it sits above yours.",
      lec_trap_zh: "学生常说“系统提示词就是我输入的内容”。很容易这么想，因为那是他们唯一看得见的提示词——但系统提示词是公司写的，排在你的提示词之前。",
      lec_ask_en: "Ask: 'Name two things that could make the four answers differ, besides the model itself.' — Listen for: the company's system prompt, tools/search, memory, custom instructions.",
      lec_ask_zh: "问：“除了模型本身，再说两样会让四个回答不同的东西。”——好的回答：公司的系统提示词、工具/搜索、记忆、自定义指令。",
      lec_bridge_en: "If companies write prompts to steer the model, so can you — and that's the last question: writing a prompt like a specification.",
      lec_bridge_zh: "既然公司能写提示词来操控模型，你也能——这就是最后一题：把提示词写成一份规格说明。",
     
      kid_en: `Imagine asking the same question to four teachers at four different schools. Each school gave its teacher a secret rulebook you’re not allowed to read: “keep it short,” “always ask a follow-up question,” “look things up first.” Your question is exactly the same, but the answers come out different — because of the rulebook. That secret rulebook is the **system prompt**, and the company that runs the AI writes it, not you.`,
      kid_zh: `想象你把同一个问题问四所不同学校的四位老师。每所学校都给老师发了一本你不能看的秘密规则手册：“回答要短”“一定要反问一句”“先查资料再回答”。你的问题一模一样，答案却各不相同——因为那本手册。那本秘密手册就是**系统提示词**，而且是运营这个 AI 的公司写的，不是你。`,
      steps: [
        { en: 'Top sheet: your message. In the Four Prompts activity it was exactly the same in all four products.', zh: '最上面一张：你的消息。在“四个提示词”活动里，它在四个产品里一模一样。', hi: ['c4_user_msg'] },
        { en: 'Under it, layers each product adds: your custom instructions, memory, and tools like search.', zh: '它下面，是每个产品各自加上的几层：你的自定义指令、记忆，以及搜索之类的工具。', hi: ['c4_custom', 'c4_memory', 'c4_tools'] },
        { en: 'The pink layer is the system prompt — hidden rules written by the company. You never see it.', zh: '粉色这层是系统提示词——公司写的隐藏规则。你永远看不到。', hi: ['c4_sysprompt'] },
        { en: 'At the bottom, each company also runs a different model.', zh: '最底下，每家公司运行的模型也不一样。', hi: ['c4_model_w'] },
        { en: 'Result: same words in, four different answers out. The product is not just the model.', zh: '结果：输入相同，输出四个不同答案。产品不等于模型。', hi: ['c4_product'] }
      ],
      t_en: 'System prompt', t_zh: '系统提示词',
      short_en: `A [[c4_sysprompt]] is **the hidden set of instructions placed before the conversation** that sets the model’s role, tone, rules, format and tool use (the API’s \`system\` field). It is **written by the company that builds the product** (OpenAI, Anthropic, Google, Microsoft), not by you — you can only add your own layer with [[c4_custom]]. In the Four Prompts activity the **same prompt gave clearly different answers** (length, tone, caution, searching, citing) because each product wraps the model in a different system prompt, tools, memory and model: [[c4_product]].`,
      short_zh: `[[c4_sysprompt]]是**放在对话之前、用户看不到的一组指令**，设定模型的角色、语气、规则、格式和工具使用（API 里的 \`system\` 字段）。它**由做产品的公司写**（OpenAI、Anthropic、Google、Microsoft），不是你——你只能通过[[c4_custom]]加上自己的一层。在“四个提示词”活动中，**同一个提示词得到了明显不同的回答**（长度、语气、谨慎程度、是否搜索、是否引用），因为每个产品都用不同的系统提示词、工具、记忆和模型把模型包了起来：[[c4_product]]。`,
      basis_en: `The course glossary (from Anthropic’s documentation) defines the system prompt as the system field of a Messages API request — where a role, formatting rules and other persistent instructions are set. The observation part comes from the class’s Four Prompts activity.`,
      basis_zh: `课程词汇表（引自 Anthropic 文档）把系统提示词定义为 Messages API 请求中的 system 字段——设定角色、格式规则和其他长期指令的地方。观察部分来自课上的“四个提示词”活动。`,
      links: [{ t: 'Anthropic — Prompt engineering overview (course resource)', u: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview' }],
      rel: ['4.5', '7.1', '6.2'],
      q_en: 'What is a system prompt, who wrote it, and what did you notice when the same prompt went to four products?',
      q_zh: '什么是系统提示词？它是谁写的？把同一个提示词发给四个产品时，你注意到了什么？',
      src: 'Four Prompts activity',
      fig() {
        const L = [
          { label: 'Your message', sub: '你的消息（四个产品都一样）', tip: 'c4_user_msg', note: { en: 'Identical in all four products.', zh: '在四个产品里完全相同。' }, fill: F.C.blueF, side: '#d5def6', pattern: 'hatch', pc: F.C.blue, density: 3 },
          { label: 'Custom instructions', sub: '你的自定义指令 / 项目', tip: 'c4_custom', pattern: 'dots', density: 5, fill: '#fff' },
          { label: 'Memory · context', sub: '记忆与上下文', tip: 'c4_memory', pattern: 'grid', density: 4, fill: '#fff' },
          { label: 'Tools · search · code', sub: '工具：搜索 代码 文件', tip: 'c4_tools', pattern: 'chips', density: 5 },
          { label: 'System prompt', sub: '系统提示词（公司写的）', tip: 'c4_sysprompt', fill: F.C.magF, side: '#efd2e2', pattern: 'diag', pc: F.C.mag, density: 4 },
          { label: 'Model weights', sub: '模型权重（各家不同）', tip: 'c4_model_w', note: { en: 'Each company also runs a different model (and version).', zh: '每家公司运行的模型（和版本）也不同。' }, pattern: 'cross', density: 6 }
        ];
        const o = { ox: 170, scale: 16, gap: 3.0, side: 'r', labelR: 300 };
        let s = F.stack(L, o);
        // right: four products
        const names = ['ChatGPT', 'Claude', 'Gemini', 'Copilot'];
        const x0 = 520, y0 = 40;
        s += F.text(x0 + 110, y0, 'SAME PROMPT → 4 PRODUCTS', { cls: 'tiny', color: F.C.mute }) + F.sub(x0 + 110, y0 + 15, '同一个提示词 → 四个产品', { anchor: 'middle' });
        names.forEach((n, i) => {
          const y = y0 + 34 + i * 62;
          s += F.rect(x0, y, 220, 50, { fill: '#fff', rx: 5, tip: 'c4_product' });
          s += `<rect x="${x0 + 6}" y="${y + 6}" width="8" height="38" rx="2" fill="${[F.C.green, F.C.amber, F.C.blue, F.C.mag][i]}"/>`;
          s += F.text(x0 + 24, y + 20, n.toUpperCase(), { anchor: 'start', cls: 'lt' });
          s += F.text(x0 + 24, y + 38, ['long, bulleted, offers images', 'asks a clarifying question', 'searches, cites links', 'short, refuses one part'][i], { anchor: 'start', cls: 'tiny', color: F.C.mute });
        });
        s += F.text(x0 + 110, y0 + 300, 'same words in → different answers', { cls: 'tiny', color: F.C.red }) + F.sub(x0 + 110, y0 + 316, '输入相同，答案不同', { anchor: 'middle' });
        return F.svg(760, Math.max(F.stackH(L.length, o), 370), s, { label: 'layers that wrap your prompt in a commercial product' });
      },
      cap_en: 'Your message is only the top sheet. Underneath, every product adds its own layers — and the magenta one, the system prompt, you never see.',
      cap_zh: '你的消息只是最上面一张。下面每个产品都加了自己的几层——尤其是洋红色那层系统提示词，你永远看不到。',
      a_en: `A [[c4_sysprompt]] is the set of **instructions placed before your conversation** that tells the model who to be and how to behave: its role, tone, rules, what to refuse, how to format, when to use tools. In the API it is the separate \`system\` field (Anthropic’s overview: the place to set a role and persistent instructions).

**Who wrote it:** the **company that built the product** — OpenAI, Anthropic, Google, Microsoft — not you, and it is usually hidden. You can add your own layer on top through [[c4_custom]].

**What we noticed in the Four Prompts activity:** the same words produced **noticeably different answers** — in length, tone, format, how cautious they were, whether they asked a question, searched the web or cited sources. Nothing in our prompt changed; what changed was everything wrapped around it: a different system prompt, different [[c4_tools]], [[c4_memory]], safety rules and a different underlying model. The lesson: [[c4_product]]. A commercial assistant is a designed product with someone else’s decisions already written into it.`,
      a_zh: `[[c4_sysprompt]]是**放在你的对话之前的一组指令**，告诉模型扮演谁、怎么表现：角色、语气、规则、该拒绝什么、怎么排版、何时使用工具。在 API 里它是单独的 \`system\` 字段（Anthropic 的概览：这是设定角色和长期指令的地方）。

**谁写的：**是**做这个产品的公司**——OpenAI、Anthropic、Google、Microsoft——不是你，而且通常是隐藏的。你可以通过[[c4_custom]]在上面加上自己的一层。

**“四个提示词”活动中我们注意到：**同样的文字得到了**明显不同的回答**——长度、语气、格式、谨慎程度、是否反问、是否上网搜索或引用来源都不同。我们的提示词一个字没变，变的是包在它外面的一切：不同的系统提示词、不同的[[c4_tools]]、[[c4_memory]]、安全规则，以及不同的底层模型。结论是：[[c4_product]]。商业助手是一件被设计出来的产品，里面已经写进了别人的决定。`,
      hook_en: 'The product is the model plus someone else’s hidden instructions. Same prompt, different wrapper, different answer.',
      hook_zh: '产品 = 模型 + 别人写好的隐藏指令。提示词一样，包装不同，答案就不同。',
      trap_en: 'Three parts — answer all three: what it is, WHO wrote it (the company), and a concrete observation from the four products.',
      trap_zh: '三问都要答：是什么、谁写的（公司）、以及四个产品对比时的具体观察。'
    },
    {
      id: '4.5',
      lec_open_en: "Ask: how would you know if a cake you ordered is wrong — if all you told the baker was 'make me a nice cake'?",
      lec_open_zh: "先问：如果你跟蛋糕店只说了“给我做个好看的蛋糕”，做出来以后你怎么判断它做错了？",
      lec_why_en: "Everyone has met the genie problem: you wish for 'a lot of money' and get buried in coins. Genies, and models, give you exactly what you described — which is why the skill is not a magic word but a better description.\n\nWe treat a prompt as **writing, not a trick**, because the model can only aim at what you describe. There's no magic phrase; there's clarity: the goal, the audience, the constraints, the format — and above all [[c4_success]] written *before* you see any output.\n\nWhy before? Because once you see an answer, it quietly becomes your standard — you start judging by 'does this feel OK?' Writing the criteria first makes a wrong answer **recognizable**: you can point to the line it breaks ('600 words, I asked for 300', 'it invented a source').\n\nThat's what makes a prompt a [[c4_spec]]: it carries its own test. Anthropic's prompting guide starts exactly there — define success, then write and revise against it. And the fix for a bad answer is **better writing, not magic words**: change the spec, not the incantation.",
      lec_why_zh: "大家都听过“许愿精灵”的坑：你许愿“很多钱”，结果被硬币埋了。精灵和模型一样，给你的正是你描述的东西——所以真正的本事不是咒语，而是描述得更好。\n\n我们把提示词当成**写作，而不是技巧**，因为模型只能瞄准你描述清楚的东西。没有咒语，只有清楚：目标、读者、限制、格式——最重要的是在看到任何输出**之前**写下[[c4_success]]。\n\n为什么要在之前？因为一旦看到答案，它会悄悄变成你的标准——你开始用“感觉还行吗？”去评判。先写标准，错的答案才**认得出来**：你能指出它违反了哪一条（“我要 300 字，它写了 600”“它编了一个出处”）。\n\n这就是提示词成为[[c4_spec]]的原因：它自带检验。Anthropic 的提示工程指南正是从这里开始的——先定义成功，再按标准写和改。坏答案的解法是**写得更好，而不是换咒语**：改规格，不是改咒语。",
      lec_trap_en: "Students list 'tips and tricks' (say please, add 'you are an expert'). Tempting because those circulate online — but the course point is that clarity and checkable criteria do the work.",
      lec_trap_zh: "学生会列出各种“技巧”（说请、加一句“你是专家”）。网上到处是这些，所以很诱人——但课程的重点是：起作用的是清楚的表达和可检查的标准。",
      lec_ask_en: "Ask: 'Turn \"write a good poster blurb\" into a spec with two success criteria.' — Listen for: concrete, checkable conditions (length, audience, must mention the date, no invented facts).",
      lec_ask_zh: "问：“把‘写一段好的海报文案’改成带两条成功标准的规格。”——好的回答：具体、可检查的条件（字数、受众、必须写明日期、不能编造事实）。",
      lec_bridge_en: "A spec tells a model what 'done' means. Class 5 asks: how do people — and agents — keep track of a whole project of 'done'?",
      lec_bridge_zh: "规格告诉模型什么叫“完成”。第 5 课接着问：人——以及智能体——怎么管理一整个项目的“完成”？",
     
      kid_en: `Think of ordering a birthday cake. “Make me a cake” could come back as anything — and you can’t really say it’s wrong. But a clear order — chocolate, serves 8, says “Happy 12th Mia,” ready by 5 pm — lets you check: wrong flavor? You can point to the exact line it broke. A prompt is that order form. The **success criteria** are the checklist you write *before* the cake is made, so a wrong answer is easy to spot.`,
      kid_zh: `想想订生日蛋糕。只说“给我做个蛋糕”，做出来什么样都有可能——你也很难说它错了。但一张清楚的订单——巧克力味、够 8 个人吃、写着“Mia 12 岁生日快乐”、下午 5 点前做好——就能拿来检查：口味不对？你能指出它违反了哪一条。提示词就是这张订单。**成功标准**就是你在蛋糕做好*之前*写下的检查清单，所以错的答案一眼就能看出来。`,
      steps: [
        { en: 'Left: the prompt written like an order form — goal, audience, limits, format.', zh: '左边：像订单一样写的提示词——目标、受众、限制、格式。', hi: ['c4_clear'] },
        { en: 'The green box is the most important part: success criteria, written BEFORE you see any answer.', zh: '绿色框是最重要的一项：成功标准，在看到任何答案之前就写好。', hi: ['c4_success'] },
        { en: 'The model reads the order and makes an output. In Software 3.0, the prompt is the program.', zh: '模型读这张订单，生成输出。在“软件 3.0”里，提示词就是程序。', hi: ['c4_sw3'] },
        { en: 'Now check the output against each criterion: ✓ or ✗. The ✗ lines show exactly what is wrong.', zh: '现在把输出逐条对照标准：✓ 还是 ✗。打 ✗ 的那几行，正好说明哪里错了。', hi: ['c4_check'] },
        { en: 'Then fix the writing of the prompt — not hunt for “magic words” — and try again.', zh: '然后改的是提示词的写法——而不是去找“咒语”——再试一次。', hi: [] }
      ],
      t_en: 'Prompt as specification', t_zh: '提示词即规格说明',
      short_en: `We treated a prompt as writing because **a prompt is a [[c4_spec|specification]] of intent, not a magic trick** — in Karpathy’s [[c4_sw3]] the prompt *is* the program, so results depend on clear goals, context, audience, constraints and format, and tricks don’t transfer between models. A wrong answer becomes recognizable when **you define [[c4_success]] before generating** (Anthropic’s first step): then each output can be checked against them and you can say exactly where it failed; without them a fluent wrong answer looks as convincing as a right one.`,
      short_zh: `我们把提示词当作写作，因为**提示词是一份意图的[[c4_spec|规格说明]]，而不是魔术技巧**——在卡帕西的[[c4_sw3]]里，提示词*就是*程序，所以结果取决于清楚的目标、背景、受众、约束和格式，而技巧换个模型就失效。错误答案之所以能被识别，是因为**在生成之前先定义了[[c4_success]]**（Anthropic 的第一步）：这样每个输出都能逐条对照，准确指出错在哪里；没有标准，一个流畅的错误答案看起来和正确答案一样可信。`,
      basis_en: `Course glossary (Anthropic Prompt Engineering Overview): prompt engineering means improving a first-draft prompt against defined, empirically testable success criteria. Karpathy’s Software 3.0 (“prompts as programs”) and the spec-driven-development reading frame the prompt as a specification.`,
      basis_zh: `课程词汇表（Anthropic 提示词工程概览）：提示词工程是对照事先定义、可实际检验的成功标准，改进初稿提示词。卡帕西的软件 3.0（“提示词即程序”）和规格驱动开发的读物把提示词定位为规格说明。`,
      links: [{ t: 'Anthropic — Prompt engineering overview', u: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview' }, { t: 'Anthropic — Define success criteria', u: 'https://platform.claude.com/docs/en/test-and-evaluate/define-success' }],
      rel: ['5.5', '4.4', '5.2'],
      q_en: 'Why did we treat a prompt as a kind of writing rather than a trick? What makes a wrong answer recognizable?',
      q_zh: '为什么我们把提示词当作一种写作，而不是一种技巧？是什么让错误答案能被识别出来？',
      fig() {
        let s = '';
        // spec document (exploded sections)
        const X = 40, Y = 40, W = 230;
        s += F.text(X + W / 2, Y - 14, 'THE PROMPT = A SPEC', { cls: 'tiny', color: F.C.mute });
        const secs = [
          ['GOAL', '目标：要做什么'], ['AUDIENCE · CONTEXT', '受众与背景'], ['CONSTRAINTS', '约束：长度 语气 范围'],
          ['FORMAT', '输出格式'], ['SUCCESS CRITERIA', '成功标准：怎样算对']
        ];
        secs.forEach(([e, z], i) => {
          const last = i === secs.length - 1;
          s += F.rect(X, Y + i * 50, W, 42, { fill: last ? F.C.greenF : '#fff', stroke: last ? F.C.green : F.C.ink, rx: 4, tip: last ? 'c4_success' : 'c4_clear' });
          s += F.text(X + 12, Y + i * 50 + 18, e, { anchor: 'start', cls: 'lt', color: last ? F.C.green : F.C.ink }) + F.sub(X + 12, Y + i * 50 + 34, z);
        });
        // model
        s += F.arrow(X + W + 6, Y + 120, 345, Y + 120);
        F.setIso(13, 395, Y + 92);
        s += F.g(F.plate({ x: 0, y: 0, z: 1.2, w: 3, d: 3, t: 0.2, pattern: 'chips', density: 4 }) + F.plate({ x: 0, y: 0, z: 0, w: 3, d: 3, t: 0.2, pattern: 'dots', density: 5 }), { tip: 'c4_sw3', note: { en: 'The model generates an output from your spec.', zh: '模型根据你的规格生成输出。' } });
        s += F.text(395, Y + 175, 'MODEL', { cls: 'lt' });
        s += F.arrow(445, Y + 120, 485, Y + 120);
        // output + checklist
        const OX = 490;
        s += F.rect(OX, Y + 40, 230, 160, { fill: '#fff', rx: 4, tip: 'c4_check', note: { en: 'Compare the output line by line with your criteria.', zh: '把输出逐条与你的标准对照。' } });
        s += F.text(OX + 12, Y + 58, 'OUTPUT vs CRITERIA', { anchor: 'start', cls: 'tiny', color: F.C.mute });
        [['✓', 'answers the goal', F.C.green], ['✓', 'right audience', F.C.green], ['✗', 'too long: 600 > 300 words', F.C.red], ['✓', 'format: 3 bullets', F.C.green], ['✗', 'invented a source', F.C.red]].forEach(([m, t, c], i) => {
          s += F.text(OX + 16, Y + 84 + i * 23, m, { anchor: 'start', cls: 'big', color: c }) + F.text(OX + 36, Y + 84 + i * 23, t, { anchor: 'start', cls: 'mono', color: c === F.C.red ? F.C.red : F.C.ink });
        });
        // revise loop
        s += F.path(`M${OX + 115},${Y + 204} C${OX + 115},${Y + 300} ${X + W / 2},${Y + 320} ${X + W / 2},${Y + 256}`, { stroke: F.C.mag, dash: '4 3', arrow: true });
        s += F.text(380, Y + 302, 'REVISE THE WRITING, NOT THE MAGIC WORDS', { cls: 'tiny', color: F.C.mag }) + F.sub(380, Y + 318, '修改的是写作本身，而不是“咒语”', { anchor: 'middle' });
        return F.svg(760, 380, s, { label: 'prompt as specification checked against success criteria' });
      },
      cap_en: 'A prompt written as a spec carries its own test. Each criterion becomes a ✓ or ✗ — that is what makes a wrong answer visible.',
      cap_zh: '按规格说明写的提示词自带检验标准。每一条标准都会变成 ✓ 或 ✗——这就是错误答案能被看出来的原因。',
      a_en: `We treated a prompt as **writing** because a prompt is a [[c4_spec|specification]] of intent, not a magic phrase. Karpathy calls this [[c4_sw3]] — the prompt *is* the program, written in English — so the quality of the result depends on the quality of the writing: [[c4_clear|clear, direct]] instructions, context, audience, constraints, examples and output format, the way you would brief a smart new colleague. “Tricks” (secret words, role-play hacks) are fragile and don’t transfer between models or products; a well-written brief does. It is also the opposite of [[c4_vibe]], where you accept whatever comes back.

**What makes a wrong answer recognizable:** having written down, *before* generating, what “right” means. Anthropic’s prompt-engineering overview starts with [[c4_success]] — clear, testable criteria — and spec-driven development uses acceptance criteria the same way. With criteria you can check each output (did it meet the length? the audience? the format? are the facts real?) and say exactly *where* it failed, then revise the spec. Without a spec, there is nothing to compare against — a fluent wrong answer looks just as convincing as a right one.`,
      a_zh: `我们把提示词当作**写作**，因为提示词是一份意图的[[c4_spec|规格说明]]，而不是一句咒语。Karpathy 称之为[[c4_sw3]]——提示词*就是*程序，只不过是用英语写的——所以结果的质量取决于写作的质量：[[c4_clear|清晰直接]]的指令、背景、受众、约束、示例和输出格式，就像给一位聪明的新同事写工作说明。“技巧”（秘密词汇、角色扮演花招）很脆弱，换个模型或产品就失效；而写得好的说明可以通用。这也和[[c4_vibe]]正好相反——后者是回来什么就接受什么。

**是什么让错误答案能被识别：**在生成*之前*就写下“对”是什么意思。Anthropic 提示词工程概览的第一步就是[[c4_success]]——清晰、可检验的标准；规格驱动开发用“验收标准”做同样的事。有了标准，你就能逐项检查输出（长度对吗？受众对吗？格式对吗？事实是真的吗？），准确指出*哪里*错了，再去修改规格。没有规格，就没有可对照的东西——一个流畅的错误答案看起来和正确答案一样可信。`,
      hook_en: 'A prompt is a spec. The criteria you write first are what let you see a wrong answer.',
      hook_zh: '提示词就是规格说明。事先写下的标准，才让你看得出答案错在哪里。',
      trap_en: 'Answer the second half explicitly: “success criteria defined in advance.” Fluency is not correctness.',
      trap_zh: '第二问要明确写出：“事先定义好的成功标准”。流畅不等于正确。'
    }
  ]
});
