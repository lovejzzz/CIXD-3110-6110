/* Hero: the whole course as one exploded stack. Click a layer to jump. */
window.HERO = () => {
  const C = F.C;
  const L = [
    { label: 'C · Your practice', sub: '你的创作实践', jump: '#cC', pattern: 'dots', density: 6, fill: '#fff',
      note: { en: 'Where it all lands: what you would do with it.', zh: '一切的落点：你会用它做什么。' } },
    { label: '9 · Human–AI guidelines', sub: '人机交互准则', jump: '#c9', pattern: 'grid', density: 6, fill: '#fff',
      note: { en: 'The 18 guidelines for designing the surface people touch.', zh: '设计人们接触的那一层界面的 18 条准则。' } },
    { label: '5–6 · Agents + harness', sub: '智能体与“马具”', jump: '#c6', fill: C.magF, side: '#efd2e2', pattern: 'diag', pc: C.mag, density: 4,
      note: { en: 'Boards, plans, tools, MCP, skills, permissions — the structure around a model.', zh: '看板、计划、工具、MCP、技能、权限——包在模型外面的结构。' } },
    { label: '4 · Prompts + products', sub: '提示词与商业产品', jump: '#c4', bars: { color: C.blue, fill: C.blueF, n: 4, rows: 2 },
      note: { en: 'System prompts, specs, repos and deploys.', zh: '系统提示词、规格说明、代码仓库与部署。' } },
    { label: '8 · Weights + adapters', sub: '权重与适配器', jump: '#c8', bars: { color: C.green, fill: C.greenF, n: 3, rows: 3 },
      note: { en: 'Modelfiles, LoRA, loss, preference pairs, blends.', zh: 'Modelfile、LoRA、损失、偏好对、融合。' } },
    { label: '3 · 7 · Models + data', sub: '模型与训练数据', jump: '#c7', pattern: 'chips', density: 6,
      note: { en: 'Neural networks, tokens, embeddings; local models and the corpora they came from.', zh: '神经网络、token、嵌入；本地模型及其来源语料。' } },
    { label: '2 · Info structures', sub: '信息结构：层级与网络', jump: '#c2', pattern: 'hatch', density: 5, fill: '#fff',
      note: { en: 'Hierarchies, networks, taxonomies, facets — how knowledge gets organized.', zh: '层级、网络、分类、分面——知识如何被组织。' } },
    { label: '1 · Web + extraction', sub: '网络与数据攫取', jump: '#c1', bars: { color: C.red, fill: C.redF, n: 3, rows: 2 },
      note: { en: 'URLs, requests, shells — and the economics of surveillance.', zh: 'URL、请求、shell——以及监视的经济学。' } }
  ];
  const o = { W: 700, ox: 350, labelL: 205, labelR: 495, gap: 2.55, scale: 19, alternate: true, top: 14 };
  return F.svg(700, F.stackH(L.length, o) - 10, F.stack(L, o), { label: 'the course as an exploded stack', cls: 'hero-svg' });
};
