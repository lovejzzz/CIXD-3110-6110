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
  t_en: 'Creativity', t_zh: '创造力',
  intro_en: 'The last question is yours. There is no single right answer — but there is a strong structure: connect concrete moments in your own practice to the concepts of the course, and weigh both sides.',
  intro_zh: '最后一题属于你自己。没有唯一正确的答案——但有一个有力的结构：把你自己创作实践中的具体时刻和课程概念联系起来，并权衡正反两面。',
  qs: [
    {
      id: 'C5', t_en: 'What would you do with it', t_zh: '你会用它做什么',
      q_en: 'Where in your practice do these technologies and concepts resonate the most? Describe this in both positive and negative aspects.',
      q_zh: '在你的创作实践中，这些技术和概念在哪里最能引起共鸣？请从积极和消极两方面描述。',
      src: 'Whole course',
      fig() {
        const L = [
          { label: 'Share · publish', sub: '＋秒级上线　－作品被抓取', note: { en: '+ Deploying from a repository puts work online in minutes. − Anything public can be scraped into the next training corpus (Common Crawl, C4).', zh: '＋ 从仓库部署，几分钟就上线。－ 公开的东西都可能被抓进下一个训练语料（Common Crawl、C4）。' }, pattern: 'grid', density: 4, fill: '#fff' },
          { label: 'Make · prototype', sub: '＋智能体写代码　－去技能化', tip: 'cC_deskill', fill: F.C.magF, side: '#efd2e2', pattern: 'diag', density: 3, pc: F.C.mag },
          { label: 'Ideate', sub: '＋更多方向　－想法同质化', tip: 'cC_homog', bars: { color: F.C.blue, fill: F.C.blueF, n: 3, rows: 2 } },
          { label: 'Organize · plan', sub: '＋看板笔记库　－被结构牵着走', note: { en: '+ Kanban boards and a vault of plain files make my process visible to me and to an agent. − The tool’s structure can start to shape what I think a project is.', zh: '＋ 看板和纯文本笔记库让流程对我和智能体都可见。－ 工具的结构可能开始左右我对项目的理解。' }, pattern: 'hatch', density: 5, fill: '#fff' },
          { label: 'Research', sub: '＋本地保隐私　－引用不可靠', note: { en: '+ A local model keeps sensitive research on my laptop. − Answers sound sure but citations can be wrong; I still have to check sources.', zh: '＋ 本地模型让敏感的研究留在我的电脑上。－ 回答听起来很肯定，但引用可能是错的；我仍须核对来源。' }, pattern: 'dots', density: 7 }
        ];
        const o = { alternate: true, gap: 2.8 };
        let s = F.stack(L, o);
        return F.svg(760, F.stackH(L.length, o), s, { label: 'a design practice taken apart, with pros and cons per layer' });
      },
      cap_en: 'A sample practice taken apart into its stages. Each layer carries one gain (＋) and one cost (－) tied to a course concept. Build the same drawing for your own practice before you write.',
      cap_zh: '把一个示范性的创作实践按阶段拆开。每一层都有一项收获（＋）和一项代价（－），并对应某个课程概念。动笔之前，先为你自己的实践画出同样的图。',
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
