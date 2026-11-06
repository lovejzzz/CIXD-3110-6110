/* C · CREATIVITY */
defTerms({
  cC_practice: { en: 'Your practice', zh: '你的创作实践',
    d_en: 'The ongoing way you make work — your process, tools, materials, collaborators and values — not one single project.',
    d_zh: '你持续做作品的方式——流程、工具、材料、合作者和价值观——而不是某一个单独的项目。' },
  cC_deskill: { en: 'De-skilling / cognitive offloading', zh: '去技能化 / 认知卸载',
    d_en: 'When a tool does a step for you so often that you stop building the skill or judgment that step required.',
    d_zh: '当工具替你做某个步骤做得太多，你就不再培养那个步骤本来需要的技能或判断力。' },
  cC_homog: { en: 'Homogenization', zh: '同质化',
    d_en: 'Many people prompting the same models get similar, averaged ideas; individual results improve but the diversity of a group’s ideas shrinks.',
    d_zh: '很多人用同样的模型，得到相似的、“平均化”的点子；个人结果也许更好，但群体想法的多样性下降。' }
});

defClass({
  order: 10, n: 'C',
  lec_en: "This last question is the only one with no source to cite. And honestly, that's the point. After weeks of definitions, the instructor wants to see whether she can **use the course as a lens on her own work**.\n\nSo coach her to answer like a designer. Not a fan, not a critic. Pick real moments from her practice, name the course concepts that explain them, and be honest about both sides. The best answers are specific, personal and balanced.",
  lec_zh: "最后这道题，是唯一一道没有出处可引的题。其实这正是它的用意。学了几周的定义和概念，老师想看的是：她能不能**把这门课当成一副眼镜，拿来看她自己的作品**。\n\n所以要引导她像设计师那样答，别像粉丝，也别像批评家。从她的创作里挑出真实的时刻，用课程概念去解释，好的坏的都老老实实写出来。最好的答案就三个词：具体、个人、平衡。",
  lec_faq: [
    { q_en: "Is there a right answer to C5?", q_zh: "C5 有标准答案吗？", a_en: "There's no single right answer. But there is a strong structure: real moments from your practice, a course concept for each positive and each negative, and a rule you'd follow. Specific beats impressive.", a_zh: "没有唯一的标准答案，但有一个很好用的结构：你自己创作里的真实时刻，每个好处、每个代价各配一个课程概念，最后再给一条你会遵守的规则。写得具体，比写得“高大上”管用。" },
    { q_en: "What if I barely use AI in my work?", q_zh: "要是我的作品里基本不用 AI 呢？", a_en: "That's a totally valid answer. Just explain why, using the course. Maybe you value the skill you'd lose (de-skilling). Or you don't want your drafts feeding a platform (surveillance capitalism). Then name one place you might try it.", a_zh: "这也完全成立。用课程概念说清楚为什么就行：也许你在乎那门会被丢掉的手艺（去技能化），也许你不想让自己的草稿喂给平台（监视资本主义）。然后再说一个你可能愿意试试的地方。" },
    { q_en: "How long should it be?", q_zh: "要写多长？", a_en: "Long enough to cover a positive and a negative with real examples. Usually that's two solid paragraphs. The quality of your examples matters more than the length.", a_zh: "能把一个好处、一个代价讲清楚，再配上真实例子就够了。一般就是两段扎实的。例子好不好，比写多长重要。" },
    { q_en: "Do I have to do the zine?", q_zh: "一定要做 zine 吗？", a_en: "No, you can submit through the web form. The zine's optional: printed pages with your answers pasted in or handwritten, plus drawings or collage, clipped together with the binder clips provided.", a_zh: "不一定，用网页表单交也行。zine 是选做的：把答案贴上去或者手写在打印好的纸上，再加点手绘或拼贴，最后用老师发的长尾夹夹起来。" },
    { q_en: "Can I use the drawings from this website in my zine?", q_zh: "网站上的图我能放进 zine 里吗？", a_en: "Use them as inspiration, then redraw them in your own hand. That's the whole point of a zine. And redrawing is also the best way to remember the idea.", a_zh: "拿来当灵感，然后自己动手重画一遍。zine 的意义就在这儿。而且亲手画一遍，也是记住这个概念最好的办法。" },
    { q_en: "When is it due?", q_zh: "什么时候交？", a_en: "Friday, November 20, 2026, at 5:00 pm. It's long, so spread it over several days. A class or two at a time.", a_zh: "2026 年 11 月 20 日，周五，下午 5:00。题量挺大的，别想一口气做完，分几天，每次做一两课。" }
  ],
  t_en: 'Creativity', t_zh: '创造力',
  intro_en: 'The last question is yours. There is no single right answer — but there is a strong structure: connect concrete moments in your own practice to the concepts of the course, and weigh both sides.',
  intro_zh: '最后一题属于你自己。没有唯一正确的答案——但有一个有力的结构：把你自己创作实践中的具体时刻和课程概念联系起来，并权衡正反两面。',
  qs: [
    {
      lec_open_en: "Ask her: \"Tell me about the last thing you made. Walk me through it, from the first idea to the moment you shared it.\" (Don't bring up AI yet. Let her story come first.)",
      lec_open_zh: "先问她：“跟我说说你最近做的一件作品吧。从最开始的想法，一直讲到你把它发出去的那一刻。”（先别提 AI，让她先把自己的故事讲出来。）",
      lec_why_en: "**Why does the instructor end here?** Because the course opened with ethics (surveillance capitalism, technofeudalism) and only then taught tools. This question asks her to **hold both at once**: the power of the tools and their cost, in her own practice. It's also the one question where her voice gets graded, not her memory.\n\n**How to coach it (don't write it for her):**\n1. From her story, find 1–2 stages where these tools actually touch her work: research, ideation, making, sharing.\n2. For each one, ask \"what got better?\" and push her to name the course concept: prompt as specification, agents, local models, file over app, rubric-first evaluation.\n3. Then ask \"what did it cost?\" and tie it to a concept: de-skilling, homogenization, surveillance capitalism, hidden labor (Crawford & Joler), authorship (8.5).\n4. End with a rule she'd actually follow.\n\n**Why both sides?** Because the grader is checking whether she can think critically. An answer that only praises, or only complains, misses half the question.",
      lec_why_zh: "**老师为什么拿这道题收尾？**因为这门课是从伦理讲起的（监视资本主义、技术封建主义），后面才开始教工具。这道题就是要她**两头都抓住**：工具的力量，还有它的代价，而且得放在她自己的创作里讲。还有，这是唯一一道考她自己的声音、不考记性的题。\n\n**怎么引导（别替她写）：**\n1. 从她讲的故事里，找出 1–2 个这些工具真正碰到她作品的阶段：调研、构思、制作、分享。\n2. 每个阶段问她“哪里变好了？”，推着她说出对应的课程概念：提示词即规格、智能体、本地模型、file over app、先写评分标准。\n3. 再问“代价是什么？”，接到一个概念上：去技能化、同质化、监视资本主义、隐藏的劳动（Crawford & Joler）、作者身份（8.5）。\n4. 最后落到一条她真会去遵守的规则上。\n\n**为什么正反两面都要写？**因为阅卷要看的是她会不会批判性地思考。光夸，或者光骂，都只答了一半。",
      lec_trap_en: "The trap: writing a general essay about \"AI in society.\" It's tempting because it feels safer. But the question says \"your practice.\" Without concrete moments from her own work, it reads as generic.",
      lec_trap_zh: "最大的坑：写成一篇泛泛的“AI 与社会”作文。这么写很诱人，因为感觉保险。可题目明明说的是“你的实践”。没有她自己作品里的具体时刻，读起来就是空的。",
      lec_ask_en: "\"Give me one sentence that starts like this: 'In my ___ stage, ___ helps me ___, but it costs ___ because ___.'\" Listen for: a real stage, and a named concept on each side.",
      lec_ask_zh: "“来，用一句话说：‘在我的___阶段，___帮我___，但代价是___，因为___。’”听她说出：一个真实的阶段，好处和代价两边各有一个课程概念。",
      lec_bridge_en: "And that's the whole course. Close by showing her the zine sample: her answers, her drawings, clipped together.",
      lec_bridge_zh: "整门课到这儿就讲完了。最后给她看看 zine 的样本吧：她自己的答案、她自己的画，夹成一本。",
      id: 'C5', t_en: 'What would you do with it', t_zh: '你会用它做什么',
      q_en: 'Where in your practice do these technologies and concepts resonate the most? Describe this in both positive and negative aspects.',
      q_zh: '在你的创作实践中，这些技术和概念在哪里最能引起共鸣？请从积极和消极两方面描述。',
      src: 'Whole course',
      fig() {
        const C = F.C;
        const ST = [
          { en: 'RESEARCH', zh: '研究', p: ['local = private', '本地运行保隐私'], m: ['shaky citations', '引用不可靠'],
            pn: { en: 'A local model keeps sensitive research on my laptop.', zh: '本地模型让敏感研究留在自己电脑上。' },
            mn: { en: 'Answers sound sure but citations can be wrong — check the sources.', zh: '回答听起来很肯定，引用却可能是错的——要核对来源。' } },
          { en: 'ORGANIZE', zh: '整理', p: ['boards + files', '看板 + 纯文本库'], m: ['tool steers you', '被工具结构牵着走'],
            pn: { en: 'A Kanban board and a vault of plain files make the process visible to me and to an agent.', zh: '看板和纯文本笔记库让流程对我和智能体都可见。' },
            mn: { en: 'The tool’s structure can start to shape what I think a project is.', zh: '工具的结构可能开始左右我对项目的理解。' } },
          { en: 'IDEATE', zh: '构思', p: ['more directions', '更多方向'], m: ['ideas homogenize', '想法同质化'], mtip: 'cC_homog',
            pn: { en: 'A model can push out many directions quickly.', zh: '模型能很快给出很多方向。' } },
          { en: 'MAKE', zh: '制作', p: ['fast prototypes', '智能体快速做出'], m: ['de-skilling', '去技能化'], mtip: 'cC_deskill', ptip: 'cC_make_plus', hot: true,
            pn: { en: 'An agent harness takes a sketch to a working, deployed page in an afternoon.', zh: '借助智能体框架，一个下午就从草图做到可运行、已上线的页面。' } },
          { en: 'SHARE', zh: '发布', p: ['live in minutes', '几分钟就上线'], m: ['gets scraped', '被抓进训练语料'],
            pn: { en: 'Push to GitHub, Vercel deploys it.', zh: '推送到 GitHub，Vercel 自动部署。' },
            mn: { en: 'Anything public can end up in the next Common Crawl / C4.', zh: '公开的东西都可能进入下一个 Common Crawl / C4。' } }
        ];
        let s = F.text(380, 22, 'YOUR PRACTICE, MAPPED', { cls: 'lt' }) + F.sub(380, 38, '把你的创作实践画成一条线', { anchor: 'middle' });
        const y0 = 176, x0 = 84, dx = 148, cw = 132;
        s += F.arrow(30, y0, 736, y0, { sw: 1.2 });
        ST.forEach((t, i) => {
          const x = x0 + i * dx, col = t.hot ? C.mag : C.ink;
          // + card above
          s += F.line(x, y0 - 14, x, 120, { stroke: C.green, sw: .8, dash: '2 3' });
          s += F.rect(x - cw / 2, 70, cw, 50, { fill: C.greenF, stroke: C.green, rx: 6, note: t.pn, tip: t.ptip || 'cC_plus' });
          s += F.text(x - cw / 2 + 9, 88, '+ ' + t.p[0], { anchor: 'start', cls: 'tiny', color: C.green }) + F.sub(x - cw / 2 + 9, 108, t.p[1]);
          // − card below
          s += F.line(x, y0 + 14, x, 232, { stroke: C.red, sw: .8, dash: '2 3' });
          s += F.rect(x - cw / 2, 232, cw, 50, { fill: C.redF, stroke: C.red, rx: 6, note: t.mn, tip: t.mtip || 'cC_minus' });
          s += F.text(x - cw / 2 + 9, 250, '− ' + t.m[0], { anchor: 'start', cls: 'tiny', color: C.red }) + F.sub(x - cw / 2 + 9, 270, t.m[1]);
          // stage node
          s += F.g(`<circle cx="${x}" cy="${y0}" r="${t.hot ? 13 : 9}" fill="${t.hot ? C.magF : '#fff'}" stroke="${col}" stroke-width="${t.hot ? 2 : 1.2}"/>` +
            F.text(x + 16, y0 + 2 - 12, t.en, { anchor: 'start', cls: 'tiny', color: col }) + F.sub(x + 16, y0 + 2 + 12, t.zh),
            { tip: 'cC_st_' + i, note: { en: `Stage ${i + 1}: ${t.en.toLowerCase()}`, zh: `第 ${i + 1} 阶段：${t.zh}` } });
        });
        const hx = x0 + 3 * dx;
        s += F.g(F.rect(hx - 70, 300, 140, 24, { fill: C.mag, stroke: C.mag, rx: 12 }) +
          F.text(hx, 314, 'RESONATES MOST', { cls: 'tiny', color: '#fff' }) + F.sub(hx, 342, '共鸣最强 · 写一个具体时刻', { anchor: 'middle', color: C.mag }),
          { tip: 'cC_hot', note: { en: 'The one stage you will write about, with a real moment.', zh: '你要写的那一个阶段，配一个真实时刻。' } });
        s += F.text(30, 314, 'draw yours: 5 stages · 1 gain + 1 cost each', { anchor: 'start', cls: 'tiny', color: C.mute }) + F.sub(30, 330, '画你自己的：每个阶段一收获一代价');
        return F.svg(760, 352, s, { label: 'a sample practice mapped as stages, each with one gain and one cost' });
      },
      cap_en: 'A sample practice laid out as the stages it moves through. Every stage carries one gain (+) and one cost (−) tied to a course concept; one stage is circled as where it resonates most. Draw the same line for your own practice before you write.',
      cap_zh: '把一个示范性的创作实践画成它经过的几个阶段。每个阶段都有一项收获（＋）和一项代价（－），并对应某个课程概念；圈出共鸣最强的那一个。动笔之前，先为你自己的实践画出同样的一条线。',
      kid_en: "Think of making a comic book. You **research** (look at references), **organize** (sticky notes on a wall), **come up with ideas**, **draw and ink**, then **post it online**. AI tools are like a super-fast helper who can jump in at any of those steps. But every kind of help has a price: if the helper draws for you, you stop getting better at drawing; if everyone uses the same helper, all the comics start to look alike; once you post online, your drawings might get scooped up to train the next AI. The exam wants you to pick the step where this matters most **to you**, and say one good thing and one bad thing.",
      kid_zh: "想象你在画一本漫画。你要**找资料**（看参考图），**整理**（墙上贴便利贴），**想点子**，**起稿上墨**，最后**发到网上**。AI 工具就像一个超快的帮手，哪一步都能插手。但每种帮忙都有代价：帮手替你画，你自己就不再进步；大家都用同一个帮手，所有漫画会越来越像；一发到网上，你的画可能被收走去训练下一个 AI。考试要你选出对**你自己**最重要的那一步，说一个好处、一个坏处。",
      steps: [{"en": "The arrow is a whole making process, start to finish: research → organize → ideate → make → share.", "zh": "这根箭头是一整套创作流程，从头到尾：找资料 → 整理 → 构思 → 制作 → 发布。", "hi": ["cC_st_0", "cC_st_1", "cC_st_2", "cC_st_3", "cC_st_4"]}, {"en": "Green cards above = what AI tools **give** you at each stage. Hover one for a real example.", "zh": "上面的绿卡 = AI 工具在每个阶段**给你**的好处。把鼠标放上去能看到具体例子。", "hi": ["cC_plus", "cC_make_plus"]}, {"en": "Red cards below = what they **cost** you. Two of them are course words: de-skilling and homogenization.", "zh": "下面的红卡 = 它们让你**付出**的代价。其中两张是课程术语：去技能化和同质化。", "hi": ["cC_minus", "cC_homog", "cC_deskill"]}, {"en": "Pick ONE stage where it matters most to you — here, MAKE: fast prototypes (+) but de-skilling (−). That is your “resonates most” moment.", "zh": "选出对你最重要的那**一个**阶段——这里是“制作”：做得快（＋），但会去技能化（－）。这就是你“共鸣最强”的时刻。", "hi": ["cC_st_3", "cC_make_plus", "cC_deskill", "cC_hot"]}, {"en": "Now fill in the template below with YOUR real moment, two course words on each side, and one rule you will follow.", "zh": "现在用下面的填空模板写你**自己**的真实时刻，正反两面各写两个课程术语，再写一条你会遵守的原则。", "hi": []}],
      short_en: `*Fill-in template — replace every ___ with your own experience.*
1. My practice is ___ (what you make, with what, for whom).
2. These technologies resonate most in my **___ stage**, e.g. this term when I ___ (a real moment, a real tool).
3. **Positive:** ___ — tie it to 2 course concepts (e.g. local vs. hosted models, the autonomy slider, file over app, rubric-first evaluation).
4. **Negative:** ___ — tie it to 2 concepts (e.g. de-skilling, homogenization, surveillance capitalism, hidden labor in Crawford & Joler).
5. **So I will** ___ (one concrete rule for how you’ll use them).`,
      short_zh: `*填空模板——把每个 ___ 换成你自己的经历。*
1. 我的创作实践是 ___（做什么、用什么、给谁）。
2. 这些技术在我的 **___ 阶段**最能引起共鸣，比如本学期我 ___ 的时候（一个真实时刻、一个真实工具）。
3. **积极面：**___ ——对应 2 个课程概念（如本地与托管模型、自主性滑块、file over app、先写评分标准）。
4. **消极面：**___ ——对应 2 个概念（如去技能化、同质化、监视资本主义、Crawford 与 Joler 揭示的隐藏劳动）。
5. **所以我会** ___（一条具体的使用原则）。`,
      basis_en: `There is no single source — the exam asks for your own practice in your own words. The negatives draw on readings in the course database: a CHI 2025 paper on de-skilling and cognitive offloading in AI-assisted design, and ACM research on how AI-generated ideas affect creativity and diversity.`,
      basis_zh: `这道题没有唯一出处——考试要的是你自己的实践、用你自己的话。消极面参考了课程资料库里的读物：CHI 2025 关于 AI 辅助设计中去技能化与认知卸载的论文，以及 ACM 关于 AI 想法如何影响创造力与多样性的研究。`,
      links: [
        { t: 'CHI 2025 — De-skilling and cognitive offloading in AI-assisted design', u: 'https://dl.acm.org/doi/10.1145/3706599.3719931' },
        { t: 'ACM — How AI ideas affect creativity, diversity, and evolution', u: 'https://dl.acm.org/doi/full/10.1145/3715928.3737481' }
      ],
      rel: ['1.1', '3.4', '5.5'],
      a_en: `*Model answer — adapt it to your own practice; the exam wants YOUR experience in your own words.*

**Structure (4 short paragraphs):** 1) name your [[cC_practice]] in one sentence; 2) the place it resonates most, with a concrete moment from this term; 3) the positive side, tied to 2–3 course concepts; 4) the negative side, tied to 2–3 concepts — and what you will do about it.

**Example (an interaction-design student):**
My practice is designing and prototyping small interactive tools. The technologies resonated most in the **making** stage: with an agent harness I went from a sketch to a working page deployed from a GitHub repository in one afternoon, and in Variable Machine I trained a small adapter on my own writing.

**Positive:** I can now test ideas as real, working things instead of static mockups. Because I understand [[url|URLs]], requests and the shell, I can read what the agent actually does, and the permission model lets me decide how much autonomy to give it (the autonomy slider). Running a model locally means my research and client material stay on my machine, and training an adapter on my own data lets the tool speak in my voice instead of a generic one.

**Negative:** speed can replace judgment — if the agent writes everything, I lose the skill and the slow thinking where design decisions happen ([[cC_deskill]]). When everyone prompts the same commercial models, ideas drift toward the average ([[cC_homog]]). And the convenience is not neutral: the hosted tools I use sit inside [[surv_cap]] and [[technofeudalism]] — my prompts and published work become data, and the models rest on the hidden labor and material extraction Crawford & Joler map.

**So:** I will write the rubric before I generate, keep the critical decisions by hand, prefer local or open-weight models when the material is personal, and credit the data and people behind what I make.`,
      a_zh: `*示范答案——请改成你自己的实践；考试要的是你自己的经历、用你自己的话。*

**结构（4 个短段落）：**1）用一句话说明你的[[cC_practice]]；2）共鸣最强的地方，配一个本学期的具体时刻；3）积极面，对应 2–3 个课程概念；4）消极面，对应 2–3 个概念——以及你打算怎么做。

**示例（一位交互设计专业的学生）：**
我的实践是设计并制作小型交互工具的原型。这些技术在**制作**阶段最能引起共鸣：借助智能体框架，我一个下午就从草图做到了一个从 GitHub 仓库部署上线、可以运行的网页；在 Variable Machine 里，我用自己的文字训练了一个小适配器。

**积极面：**我现在可以把想法做成真正能用的东西来测试，而不是静态的效果图。因为我理解 [[url|URL]]、请求和 shell，我能看懂智能体实际在做什么；权限模型让我决定给它多大的自主权（“自主性滑块”）。在本地运行模型意味着我的研究资料和客户材料都留在自己的电脑上；用自己的数据训练适配器，让工具用我的口吻而不是通用口吻说话。

**消极面：**速度可能取代判断——如果所有东西都让智能体来写，我会失去那项技能，也失去设计决定真正发生的那段“慢思考”（[[cC_deskill]]）。当所有人都用同样的商业模型，想法会向平均值漂移（[[cC_homog]]）。而且便利并不中立：我用的托管工具身处[[surv_cap]]和[[technofeudalism]]之中——我的提示和发布的作品都会变成数据，而这些模型建立在 Crawford 与 Joler 所描绘的隐藏劳动和物质攫取之上。

**所以：**我会在生成之前先写好评分标准，关键决定亲手做，涉及个人材料时优先使用本地或开放权重模型，并为我作品背后的数据和人署名致谢。`,
      hook_en: 'Concrete moment → positives (with concept names) → negatives (with concept names) → what you’ll do.',
      hook_zh: '具体时刻 → 积极面（写出概念名）→ 消极面（写出概念名）→ 你会怎么做。',
      trap_en: 'Both sides are required. Vague praise or vague worry loses points — name real tools you used and real course concepts.',
      trap_zh: '正反两面都必须写。空泛的赞美或空泛的担忧都会丢分——要点名你真正用过的工具和真实的课程概念。'
    }
  ]
});
