const STORAGE_KEY = "maogai-quiz-progress-v1";

const questions = [
  { id: 1, type: "单选题", score: 1.5, stem: "1982年邓小平在党的十二大开幕词中明确指出：走自己的道路，（ ）。", options: { A: "马克思主义中国化时代化", B: "建设社会主义市场经济", C: "全面建设小康社会", D: "建设有中国特色的社会主义现代化" }, answer: "D" },
  { id: 2, type: "单选题", score: 1.5, stem: "新民主主义文化，就是无产阶级领导的（ ）文化。", options: { A: "民族的科学的大众的", B: "革命", C: "社会主义", D: "先进" }, answer: "A" },
  { id: 3, type: "单选题", score: 1.5, stem: "（ ）是发展先进文化、建设物质文明和精神文明的基础工程。", options: { A: "科技", B: "教育", C: "政治文明建设", D: "文艺事业" }, answer: "B" },
  { id: 4, type: "单选题", score: 1.5, stem: "（ ）推动了中国特色社会主义理论体系的跨世纪发展。", options: { A: "邓小平理论", B: "毛泽东思想", C: "“三个代表”重要思想", D: "科学发展观" }, answer: "C" },
  { id: 5, type: "单选题", score: 1.5, stem: "毛泽东关于“农村包围城市，武装夺取政权”理论的提出，标志着毛泽东思想的（ ）。", options: { A: "开始萌芽", B: "初步形成", C: "达到成熟", D: "继续发展" }, answer: "B" },
  { id: 6, type: "单选题", score: 1.5, stem: "社会主义民主政治的本质和核心是（ ）。", options: { A: "坚持党的领导", B: "人民当家作主", C: "依法治国", D: "统一战线" }, answer: "B" },
  { id: 7, type: "单选题", score: 1.5, stem: "在中国共产党的历史上，（ ）第一个明确提出了“马克思主义中国化”的科学命题和重大任务，深刻论证了马克思主义中国化的必要性和极端重要性。", options: { A: "刘少奇", B: "李大钊", C: "陈独秀", D: "毛泽东" }, answer: "D" },
  { id: 8, type: "单选题", score: 1.5, stem: "在半殖民地半封建的近代中国，社会矛盾呈现出错综复杂的状况。在诸多社会矛盾中，（ ）的矛盾是各种矛盾中最主要的矛盾。", options: { A: "地主阶级和无产阶级", B: "资产阶级和地主阶级", C: "封建主义和人民大众", D: "帝国主义和中华民族" }, answer: "D" },
  { id: 9, type: "单选题", score: 1.5, stem: "（ ）基于对中国国情的准确把握，揭示了当代中国的历史方位，是建设中国特色社会主义的总依据。", options: { A: "社会主义初级阶段论", B: "以经济建设为中心论", C: "党在社会主义初级阶段的基本路线", D: "四项基本原则" }, answer: "A" },
  { id: 10, type: "单选题", score: 1.5, stem: "周恩来将我们党提出的一系列和平解决台湾问题的思想、政策和主张归纳为（ ）。", options: { A: "“爱国一家”", B: "“一国两制”", C: "“一纲四目”", D: "“联蒋抵美”" }, answer: "C" },
  { id: 11, type: "单选题", score: 1.5, stem: "下列选项中，不属于毛泽东提出的思想是（ ）。", options: { A: "正确处理人民内部的矛盾", B: "实行“两参一改三结合”的民主管理制度", C: "调动一切积极因素为社会主义建设服务", D: "“三个主体，三个补充”的设想" }, answer: "D" },
  { id: 12, type: "单选题", score: 1.5, stem: "社会主义的根本任务是（ ）。", options: { A: "以经济建设为中心", B: "全面建成小康社会", C: "走向共同富裕", D: "发展生产力" }, answer: "D" },
  { id: 13, type: "单选题", score: 1.5, stem: "（ ）给中国送来了马克思列宁主义，给苦苦探寻救亡图存出路的中国人民指明了前进方向、提供了全新选择。", options: { A: "新文化运动", B: "鸦片战争", C: "五四运动", D: "十月革命" }, answer: "D" },
  { id: 14, type: "单选题", score: 1.5, stem: "1981年，（ ）提出了“计划经济为主、市场调节为辅”的方针，允许市场调节存在和发挥作用，这为形成社会主义市场经济理论开辟了道路。", options: { A: "党的十一届六中全会", B: "党的十三大", C: "党的十二届三中全会", D: "党的十二大" }, answer: "A" },
  { id: 15, type: "单选题", score: 1.5, stem: "党的十九大提出“为把我国建设成为富强民主文明和谐（ ）的社会主义现代化强国而奋斗”，进一步拓展了党的基本路线。", options: { A: "公正", B: "平等", C: "美丽", D: "自由" }, answer: "C" },
  { id: 16, type: "单选题", score: 1.5, stem: "党的八大提出的经济建设的正确方针是（ ）。", options: { A: "既反保守又反冒进、在综合平衡中稳步前进", B: "团结互助，统筹兼顾", C: "统筹兼顾，全面安排", D: "具体问题具体分析" }, answer: "A" },
  { id: 17, type: "单选题", score: 1.5, stem: "（ ）正式把建立社会主义市场经济体制确立为我国经济体制改革的目标。", options: { A: "党的十五大", B: "党的十七大", C: "党的十四大", D: "党的十六大" }, answer: "C" },
  { id: 18, type: "单选题", score: 1.5, stem: "从中华人民共和国成立到社会主义改造基本完成，是我国从新民主主义到社会主义的过渡时期。这一时期，个体经济向社会主义集体经济过渡的形式是（ ）。", options: { A: "合作社经济", B: "个体经济", C: "国家资本主义经济", D: "国营经济" }, answer: "A" },
  { id: 19, type: "单选题", score: 1.5, stem: "（ ）是建设新型人民军队的根本原则。", options: { A: "坚持党对军队的绝对领导", B: "全心全意为人民服务", C: "作风优良", D: "能打胜仗" }, answer: "A" },
  { id: 20, type: "单选题", score: 1.5, stem: "1945年，党的七大把（ ）确定为党的指导思想，并写入党章。", options: { A: "毛泽东思想", B: "科学发展观", C: "“三个代表”重要思想", D: "中国特色社会主义理论体系" }, answer: "A" },
  { id: 21, type: "单选题", score: 1.5, stem: "系统论述社会主义初级阶段理论的是（ ）。", options: { A: "党十四大", B: "党十三大", C: "党十二大", D: "党十五大" }, answer: "B" },
  { id: 22, type: "单选题", score: 1.5, stem: "人民内部矛盾是（ ）。", options: { A: "分清是非问题", B: "分清你我问题", C: "分清敌友问题", D: "分清敌我问题" }, answer: "A" },
  { id: 23, type: "单选题", score: 1.5, stem: "在同资产阶级的联盟中必须实行的方针是（ ）。", options: { A: "团结—批评—团结", B: "一切经过统一战线", C: "既联合又斗争", D: "一切服从统一战线" }, answer: "C" },
  { id: 24, type: "单选题", score: 1.5, stem: "毛泽东明确提出以苏为鉴，独立自主地探索适合中国情况的社会主义建设道路的著作是（ ）。", options: { A: "《中国革命和中国共产党》", B: "《论十大关系》", C: "《新民主主义论》", D: "《关于正确处理人民内部矛盾的问题》" }, answer: "B" },
  { id: 25, type: "单选题", score: 1.5, stem: "执政党的（ ）关系党的生死存亡。", options: { A: "干部", B: "党风", C: "理论", D: "能力" }, answer: "B" },
  { id: 26, type: "单选题", score: 1.5, stem: "（ ）包含着新民主主义革命和社会主义革命的双重性质。", options: { A: "没收官僚资本归新民主主义国家所有", B: "没收封建阶级的土地归农民所有", C: "赎买民族工商业归人民民主专政国家所有", D: "接收帝国主义在华企业归新民主主义国家所有" }, answer: "A" },
  { id: 27, type: "单选题", score: 1.5, stem: "毛泽东在1957年2月所作的《关于正确处理人民内部矛盾的问题》的报告中，系统论述了社会主义社会矛盾的理论。毛泽东强调，社会主义国家政治生活的主题是（ ）。", options: { A: "正确区分和处理两类不同性质矛盾的问题", B: "正确认识和处理阶级斗争的问题", C: "正确处理敌我矛盾的问题", D: "正确处理人民内部矛盾的问题" }, answer: "D" },
  { id: 28, type: "单选题", score: 1.5, stem: "在实行个别企业的公私合营时，企业的利润分配方式为（ ）。", options: { A: "和平赎买", B: "定股定息", C: "“四马分肥”", D: "公私合营" }, answer: "C" },
  { id: 29, type: "单选题", score: 1.5, stem: "毛泽东系统阐述中国革命三大法宝的文章是（ ）。", options: { A: "《战争和战略问题》", B: "《<共产党人>发刊词》", C: "《星星之火，可以燎原》", D: "《井冈山的斗争》" }, answer: "B" },
  { id: 30, type: "单选题", score: 1.5, stem: "新民主主义革命时期统一战线包含两个联盟。其中基本的、主要的联盟是（ ）。", options: { A: "工人阶级同民族资产阶级的联盟", B: "工人阶级同非劳动者的联盟", C: "工人阶级同农民阶级、广大知识分子及其他劳动者的联盟", D: "工人阶级同城市小资产阶级的联盟" }, answer: "C" },
  { id: 31, type: "单选题", score: 1.5, stem: "（ ）是马克思主义中国化时代化的第一个重大理论成果，是马克思主义中国化时代化的第一次历史性飞跃，是由一系列相互联系的重要理论观点所构成的完整的科学思想体系。", options: { A: "邓小平理论", B: "毛泽东思想", C: "习近平新时代中国特色社会主义思想", D: "中国特色社会主义理论体系" }, answer: "B" },
  { id: 32, type: "单选题", score: 1.5, stem: "（ ），毛泽东在中央政治局会议上正式提出过渡时期的总路线和总任务。", options: { A: "1953年6月", B: "1954年8月", C: "1954年6月", D: "1953年8月" }, answer: "A" },
  { id: 33, type: "单选题", score: 1.5, stem: "在新民主主义社会时期，随着土地改革的基本完成，（ ）的矛盾逐步成为国内的主要矛盾。", options: { A: "工人阶级和资产阶级", B: "帝国主义和中华民族", C: "封建主义和人民大众", D: "人民日益增长的美好生活需要和不平衡不充分的发展之间" }, answer: "A" },
  { id: 34, type: "单选题", score: 1.5, stem: "不属于《论十大关系》讨论范畴的是（ ）。", options: { A: "国家、生产单位和生产者个人的关系", B: "重工业和轻工业、农业的关系", C: "社会主义市场经济和计划经济的关系", D: "革命和反革命的关系" }, answer: "C" },
  { id: 35, type: "单选题", score: 1.5, stem: "秋收起义失败后，毛泽东创建的（ ）革命根据地，把武装斗争的主攻方向首先指向农村。", options: { A: "井冈山", B: "中央", C: "百色", D: "湘鄂西" }, answer: "A" },
  { id: 36, type: "单选题", score: 1.5, stem: "毛泽东在《关于正确处理人民内部矛盾的问题》中指出，用（ ）解决人民内部矛盾是一个总方针。", options: { A: "暴力对抗", B: "专政方法", C: "惩前毖后", D: "民主方法" }, answer: "D" },
  { id: 37, type: "单选题", score: 1.5, stem: "区别新民主主义革命与旧民主主义革命的根本标志是（ ）。", options: { A: "革命前途不同", B: "革命对象不同", C: "革命领导权不同", D: "革命指导思想不同" }, answer: "C" },
  { id: 38, type: "单选题", score: 1.5, stem: "过渡时期总路线的主体是（ ）。", options: { A: "实现对农业的社会主义改造", B: "实现对手工业的社会主义改造", C: "实现对资本主义工商业的社会主义改造", D: "实现国家的社会主义工业化" }, answer: "D" },
  { id: 39, type: "单选题", score: 1.5, stem: "1978年12月召开的党的（ ），重新确立了解放思想、实事求是的思想路线，停止使用“以阶级斗争为纲”的错误提法，确定把全党工作的着重点转移到社会主义现代化建设上来，作出实行改革开放的重大决策，实现了党的历史上具有深远意义的伟大转折。", options: { A: "十一届三中全会", B: "十一届四中全会", C: "十二大", D: "十一届二中全会" }, answer: "A" },
  { id: 40, type: "单选题", score: 1.5, stem: "20世纪70年代前期，毛泽东形成了关于“三个世界划分”的战略思想。其中亚洲、非洲、拉丁美洲的广大发展中国家属于（ ）。", options: { A: "第三世界", B: "第一世界", C: "第二世界", D: "第四世界" }, answer: "A" },
  { id: 41, type: "单选题", score: 1.5, stem: "科学发展观的基本要求是（ ）。", options: { A: "发展", B: "以人为本", C: "统筹兼顾", D: "全面协调可持续" }, answer: "D" },
  { id: 42, type: "单选题", score: 1.5, stem: "（ ）是邓小平理论的精髓。", options: { A: "解放思想，实事求是", B: "脚踏实地，实事求是", C: "与时俱进，求真务实", D: "独立自主，改革开放" }, answer: "A" },
  { id: 43, type: "单选题", score: 1.5, stem: "2017年，党的（ ）把习近平新时代中国特色社会主义思想确立为党必须长期坚持的指导思想并庄严地写入党章，实现了党的指导思想的与时俱进。", options: { A: "十六大", B: "十五大", C: "十九大", D: "十七大" }, answer: "C" },
  { id: 44, type: "单选题", score: 1.5, stem: "（ ）是加快转变经济发展方式的关键。", options: { A: "全面深化经济体制改革", B: "科学发展", C: "人的全面发展", D: "以人为本" }, answer: "A" },
  { id: 45, type: "单选题", score: 1.5, stem: "不属于毛泽东思想活的灵魂的是（ ）。", options: { A: "统一战线", B: "实事求是", C: "群众路线", D: "独立自主" }, answer: "A" },
  { id: 46, type: "单选题", score: 1.5, stem: "邓小平在领导改革开放和现代化建设这一新的革命过程中，不断提出和反复思考的首要的基本理论问题是（ ）。搞清楚这个首要的基本的理论问题，关键是在坚持社会主义基本制度的基础上进一步认清社会主义本质。", options: { A: "如何两手抓、两手都要硬", B: "什么是社会主义、怎样建设社会主义", C: "如何坚持中国特色社会主义道路", D: "如何进行改革开放" }, answer: "B" },
  { id: 47, type: "单选题", score: 1.5, stem: "贯彻“三个代表”重要思想，关键在坚持与时俱进，核心在坚持党的先进性，本质在坚持（ ）。", options: { A: "提升科学技术", B: "发展先进生产力", C: "执政为民", D: "发展文化" }, answer: "C" },
  { id: 48, type: "单选题", score: 1.5, stem: "中国特色社会主义理论体系形成发展的共同的时代主题是（ ）。", options: { A: "和平与发展", B: "战争与革命", C: "改革开放", D: "改革开放和社会主义现代化建设" }, answer: "A" },
  { id: 49, type: "单选题", score: 1.5, stem: "“三个代表”重要思想在邓小平理论的基础上，（ ）。", options: { A: "创造性地回答了新形势下实现什么样的发展、怎样发展", B: "创造性地回答了建设什么样的党、怎样建设党的问题", C: "创造性地回答了什么是社会主义、怎样建设社会主义的问题", D: "进一步回答了建设什么样的党、怎样建设党的问题" }, answer: "B" },
  { id: 50, type: "单选题", score: 1.5, stem: "邓小平正式提出“建设有中国特色的社会主义”科学命题是在（ ）。", options: { A: "党的十二大上", B: "党的十三大上", C: "党的十一届三中全会上", D: "党的十一届六中全会上" }, answer: "A" },
];

const elements = {
  questionGrid: document.querySelector("#questionGrid"),
  modeLabel: document.querySelector("#modeLabel"),
  questionMeta: document.querySelector("#questionMeta"),
  questionTitle: document.querySelector("#questionTitle"),
  choices: document.querySelector("#choices"),
  feedback: document.querySelector("#feedback"),
  positionLabel: document.querySelector("#positionLabel"),
  totalLabel: document.querySelector("#totalLabel"),
  progressFill: document.querySelector("#progressFill"),
  scoreValue: document.querySelector("#scoreValue"),
  answeredValue: document.querySelector("#answeredValue"),
  correctValue: document.querySelector("#correctValue"),
  wrongValue: document.querySelector("#wrongValue"),
  accuracyValue: document.querySelector("#accuracyValue"),
  wrongCountLabel: document.querySelector("#wrongCountLabel"),
  wrongList: document.querySelector("#wrongList"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  checkBtn: document.querySelector("#checkBtn"),
  allModeBtn: document.querySelector("#allModeBtn"),
  wrongModeBtn: document.querySelector("#wrongModeBtn"),
  randomModeBtn: document.querySelector("#randomModeBtn"),
  resetBtn: document.querySelector("#resetBtn"),
};

const initialOrder = questions.map((question) => question.id);
let state = {
  mode: "all",
  currentIndex: 0,
  order: [...initialOrder],
  selected: {},
  submitted: {},
  attempts: {},
  hadWrong: {},
};

function readSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") return;
    state = {
      ...state,
      selected: saved.selected || {},
      submitted: saved.submitted || {},
      attempts: saved.attempts || {},
      hadWrong: saved.hadWrong || {},
    };
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      selected: state.selected,
      submitted: state.submitted,
      attempts: state.attempts,
      hadWrong: state.hadWrong,
    }),
  );
}

function getQuestion(id) {
  return questions.find((question) => question.id === id);
}

function currentQuestion() {
  return getQuestion(state.order[state.currentIndex]);
}

function isSubmitted(questionId) {
  return Boolean(state.submitted[questionId]);
}

function isCorrect(question) {
  return state.selected[question.id] === question.answer && isSubmitted(question.id);
}

function wrongQuestions() {
  return questions.filter((question) => state.hadWrong[question.id]);
}

function shuffleIds(ids) {
  const next = [...ids];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [next[index], next[target]] = [next[target], next[index]];
  }
  return next;
}

function setMode(mode) {
  state.mode = mode;
  if (mode === "wrong") {
    const wrong = wrongQuestions().map((question) => question.id);
    state.order = wrong.length ? wrong : [...initialOrder];
  } else if (mode === "random") {
    state.order = shuffleIds(initialOrder);
  } else {
    state.order = [...initialOrder];
  }
  state.currentIndex = 0;
  render();
}

function selectAnswer(letter) {
  const question = currentQuestion();
  if (isSubmitted(question.id)) return;
  state.selected[question.id] = letter;
  state.attempts[question.id] = (state.attempts[question.id] || 0) + 1;
  if (letter === question.answer) {
    state.submitted[question.id] = true;
  } else {
    state.hadWrong[question.id] = true;
  }
  saveState();
  render();
}

function continueAfterCorrect() {
  const question = currentQuestion();
  if (!isSubmitted(question.id)) {
    elements.feedback.hidden = false;
    elements.feedback.className = "feedback notice";
    elements.feedback.innerHTML = "<strong>先答对这一题</strong><span>选到正确答案后才能进入下一题。</span>";
    return;
  }
  moveQuestion(1);
}

function moveQuestion(direction) {
  const nextIndex = state.currentIndex + direction;
  if (nextIndex < 0 || nextIndex >= state.order.length) return;
  state.currentIndex = nextIndex;
  render();
}

function goToQuestion(questionId) {
  const index = state.order.indexOf(questionId);
  if (index === -1) {
    state.mode = "all";
    state.order = [...initialOrder];
    state.currentIndex = initialOrder.indexOf(questionId);
  } else {
    state.currentIndex = index;
  }
  render();
}

function stats() {
  const submitted = questions.filter((question) => isSubmitted(question.id));
  const firstTryCorrect = submitted.filter((question) => (state.attempts[question.id] || 0) === 1);
  const wrong = wrongQuestions().length;
  const score = submitted.reduce((sum, question) => sum + question.score, 0);
  return {
    answered: submitted.length,
    correct: firstTryCorrect.length,
    wrong,
    score,
    accuracy: submitted.length ? Math.round((firstTryCorrect.length / submitted.length) * 100) : 0,
  };
}

function renderModeButtons() {
  const buttons = {
    all: elements.allModeBtn,
    wrong: elements.wrongModeBtn,
    random: elements.randomModeBtn,
  };
  Object.entries(buttons).forEach(([mode, button]) => {
    button.classList.toggle("is-active", state.mode === mode);
  });
  const labels = {
    all: "全部题目",
    wrong: wrongQuestions().length ? "错题回顾" : "暂无错题",
    random: "随机练习",
  };
  elements.modeLabel.textContent = labels[state.mode];
}

function renderQuestionGrid() {
  elements.questionGrid.innerHTML = "";
  questions.forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = question.id;
    button.className = "question-dot";
    button.title = `第 ${question.id} 题`;
    if (state.order[state.currentIndex] === question.id) button.classList.add("current");
    if (isSubmitted(question.id)) button.classList.add(isCorrect(question) ? "correct" : "wrong");
    if (!state.order.includes(question.id) && state.mode === "wrong") button.classList.add("muted");
    button.addEventListener("click", () => goToQuestion(question.id));
    elements.questionGrid.appendChild(button);
  });
}

function renderChoices(question) {
  const selected = state.selected[question.id];
  const submitted = isSubmitted(question.id);
  elements.choices.innerHTML = "";

  Object.entries(question.options).forEach(([letter, text]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-row";
    if (selected === letter) button.classList.add("selected");
    if (submitted && letter === question.answer) button.classList.add("correct");
    if (!submitted && selected === letter && selected !== question.answer) button.classList.add("wrong");
    if (submitted) button.disabled = true;
    button.innerHTML = `<span class="choice-letter">${letter}</span><span class="choice-text">${text}</span>`;
    button.addEventListener("click", () => selectAnswer(letter));
    elements.choices.appendChild(button);
  });
}

function renderFeedback(question) {
  const selected = state.selected[question.id];
  const submitted = isSubmitted(question.id);
  if (!selected) {
    elements.feedback.hidden = true;
    elements.feedback.textContent = "";
    return;
  }
  const correct = submitted && selected === question.answer;
  elements.feedback.hidden = false;
  elements.feedback.className = `feedback ${correct ? "success" : "error"}`;
  elements.feedback.innerHTML = correct
    ? `<strong>答对了，可以继续</strong><span>${question.answer}：${question.options[question.answer]}</span>`
    : `<strong>还不对，继续试</strong><span>这题答对后才能进入下一题。</span>`;
}

function renderStats() {
  const currentStats = stats();
  elements.scoreValue.textContent = currentStats.score.toFixed(1).replace(".0", "");
  elements.answeredValue.textContent = currentStats.answered;
  elements.correctValue.textContent = currentStats.correct;
  elements.wrongValue.textContent = currentStats.wrong;
  elements.accuracyValue.textContent = `${currentStats.accuracy}%`;

  const wrong = wrongQuestions();
  elements.wrongCountLabel.textContent = `${wrong.length} 题`;
  elements.wrongList.innerHTML = "";

  if (!wrong.length) {
    elements.wrongList.innerHTML = '<div class="empty-state">还没有错题</div>';
    return;
  }

  wrong.slice(0, 8).forEach((question) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "wrong-item";
    item.innerHTML = `<strong>${question.id}</strong><span>${question.stem}</span>`;
    item.addEventListener("click", () => goToQuestion(question.id));
    elements.wrongList.appendChild(item);
  });
}

function renderPractice() {
  const question = currentQuestion();
  const position = state.currentIndex + 1;
  elements.questionMeta.textContent = `${question.type} · ${question.score} 分`;
  elements.questionTitle.textContent = question.stem;
  elements.positionLabel.textContent = position;
  elements.totalLabel.textContent = state.order.length;
  elements.progressFill.style.width = `${(position / state.order.length) * 100}%`;
  elements.prevBtn.disabled = state.currentIndex === 0;
  elements.nextBtn.disabled = state.currentIndex === state.order.length - 1 || !isSubmitted(question.id);
  elements.checkBtn.disabled = !isSubmitted(question.id) || state.currentIndex === state.order.length - 1;
  elements.checkBtn.querySelector("span").textContent = isSubmitted(question.id) ? "继续下一题" : "选对后继续";
  renderChoices(question);
  renderFeedback(question);
}

function render() {
  if (!state.order.length) {
    state.mode = "all";
    state.order = [...initialOrder];
    state.currentIndex = 0;
  }
  if (state.currentIndex >= state.order.length) state.currentIndex = state.order.length - 1;
  renderModeButtons();
  renderQuestionGrid();
  renderPractice();
  renderStats();
  if (window.lucide) window.lucide.createIcons();
}

elements.prevBtn.addEventListener("click", () => moveQuestion(-1));
elements.nextBtn.addEventListener("click", () => moveQuestion(1));
elements.checkBtn.addEventListener("click", continueAfterCorrect);
elements.allModeBtn.addEventListener("click", () => setMode("all"));
elements.wrongModeBtn.addEventListener("click", () => setMode("wrong"));
elements.randomModeBtn.addEventListener("click", () => setMode("random"));
elements.resetBtn.addEventListener("click", () => {
  if (!window.confirm("清空当前答题记录？")) return;
  state.selected = {};
  state.submitted = {};
  state.attempts = {};
  state.hadWrong = {};
  localStorage.removeItem(STORAGE_KEY);
  render();
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  if (["A", "B", "C", "D"].includes(key)) selectAnswer(key);
  if (event.key === "ArrowLeft") moveQuestion(-1);
  if (event.key === "ArrowRight" && isSubmitted(currentQuestion().id)) moveQuestion(1);
  if (event.key === "Enter") continueAfterCorrect();
});

readSavedState();
render();
