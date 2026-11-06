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
  c4_sw3: { en: 'Software 3.0', zh: '软件 3.0',
    d_en: 'Karpathy: prompts are programs — “the hottest new programming language is English.” Writing a prompt is a kind of programming in prose.',
    d_zh: 'Karpathy：提示词就是程序——“最热门的新编程语言是英语”。写提示词是一种用文字编程。' }
});

defClass({
  order: 4, n: '4',
  t_en: 'Commercial LLMs and Prompting', t_zh: '商业大模型与提示词',
  intro_en: 'We put a website online through GitHub and Vercel — learning what a repository, a commit and a deployment are — then sent the same prompt to four commercial products to see that the product is not the model, and that a prompt is a piece of writing: a specification.',
  intro_zh: '我们通过 GitHub 和 Vercel 把网站上线——由此理解仓库、提交和部署；然后把同一个提示词发给四个商业产品，发现“产品不等于模型”，而提示词是一种写作：一份规格说明。',
  qs: [
    {
      id: '4.1', t_en: 'Repository', t_zh: '仓库',
      q_en: 'What is a repository?', q_zh: '什么是仓库（repository）？',
      fig() {
        const L = [
          { label: 'Remote copy · GitHub', sub: '远程副本：GitHub（origin）', tip: 'c4_github', pattern: 'grid', density: 4, fill: '#fff' },
          { label: 'Commit 3 · HEAD', sub: '提交 3：当前版本', tip: 'c4_commit', fill: F.C.magF, side: '#efd2e2', pattern: 'diag', pc: F.C.mag, density: 4 },
          { label: 'Commit 2', sub: '提交 2：较早的快照', tip: 'c4_commit', fill: F.C.blueF, side: '#d5def6', pattern: 'hatch', pc: F.C.blue, density: 4 },
          { label: 'Commit 1', sub: '提交 1：第一次保存', tip: 'c4_commit', fill: F.C.blueF, side: '#d5def6', pattern: 'hatch', pc: F.C.blue, density: 2 },
          { label: '.git · the history', sub: '.git：隐藏的历史数据库', note: { en: 'The hidden folder where Git stores every snapshot. Delete it and the folder is just a folder again.', zh: 'Git 存放所有快照的隐藏文件夹。删掉它，这个文件夹就只是普通文件夹。' }, pattern: 'chips', density: 6 },
          { label: 'Project folder · files', sub: '项目文件夹：你的文件', note: { en: 'index.html, style.css, images… the working files you edit.', zh: 'index.html、style.css、图片……你正在编辑的工作文件。' }, pattern: 'dots', density: 8 }
        ];
        const o = { alternate: true, gap: 2.7 };
        return F.svg(760, F.stackH(L.length, o), F.stack(L, o), { label: 'exploded view of a git repository' });
      },
      cap_en: 'A repository is not just the files on top of the stack — it is the files plus every saved snapshot underneath, and (usually) a copy of all of it on GitHub.',
      cap_zh: '仓库不只是最上面那层文件——它是文件，加上下面每一个保存过的快照，（通常）还有放在 GitHub 上的整套副本。',
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
      id: '4.2', t_en: 'Commit', t_zh: '提交',
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
        s += row(Y + 92, 40, 'MESSAGE · 说明', '"Add contact form to homepage"', { note: { en: 'A short human explanation of WHY — written for your future self and teammates.', zh: '一句写给未来的自己和队友的说明：为什么改。' } });
        s += row(Y + 138, 40, 'PARENT · 父提交', '9c07…', { note: { en: 'The link back to the previous snapshot — this is what makes history a chain.', zh: '指回上一个快照的链接——历史因此成为一条链。' } });
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
      id: '4.3', t_en: 'Deployment', t_zh: '部署',
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
        s += F.path('M360,130 H720', { stroke: F.C.hair || '#ccc', dash: '2 4' });
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
      id: '4.4', t_en: 'System prompt', t_zh: '系统提示词',
      q_en: 'What is a system prompt, who wrote it, and what did you notice when the same prompt went to four products?',
      q_zh: '什么是系统提示词？它是谁写的？把同一个提示词发给四个产品时，你注意到了什么？',
      src: 'Four Prompts activity',
      fig() {
        const L = [
          { label: 'Your message', sub: '你的消息（四个产品都一样）', note: { en: 'Identical in all four products.', zh: '在四个产品里完全相同。' }, fill: F.C.blueF, side: '#d5def6', pattern: 'hatch', pc: F.C.blue, density: 3 },
          { label: 'Custom instructions', sub: '你的自定义指令 / 项目', tip: 'c4_custom', pattern: 'dots', density: 5, fill: '#fff' },
          { label: 'Memory · context', sub: '记忆与上下文', tip: 'c4_memory', pattern: 'grid', density: 4, fill: '#fff' },
          { label: 'Tools · search · code', sub: '工具：搜索 代码 文件', tip: 'c4_tools', pattern: 'chips', density: 5 },
          { label: 'System prompt', sub: '系统提示词（公司写的）', tip: 'c4_sysprompt', fill: F.C.magF, side: '#efd2e2', pattern: 'diag', pc: F.C.mag, density: 4 },
          { label: 'Model weights', sub: '模型权重（各家不同）', note: { en: 'Each company also runs a different model (and version).', zh: '每家公司运行的模型（和版本）也不同。' }, pattern: 'cross', density: 6 }
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
      id: '4.5', t_en: 'Prompt as specification', t_zh: '提示词即规格说明',
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
        s += F.g(F.plate({ x: 0, y: 0, z: 1.2, w: 3, d: 3, t: 0.2, pattern: 'chips', density: 4 }) + F.plate({ x: 0, y: 0, z: 0, w: 3, d: 3, t: 0.2, pattern: 'dots', density: 5 }), { note: { en: 'The model generates an output from your spec.', zh: '模型根据你的规格生成输出。' } });
        s += F.text(395, Y + 175, 'MODEL', { cls: 'lt' });
        s += F.arrow(445, Y + 120, 485, Y + 120);
        // output + checklist
        const OX = 490;
        s += F.rect(OX, Y + 40, 230, 160, { fill: '#fff', rx: 4, note: { en: 'Compare the output line by line with your criteria.', zh: '把输出逐条与你的标准对照。' } });
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
