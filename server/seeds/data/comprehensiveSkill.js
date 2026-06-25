const comprehensiveSkillQuestions = [
  // ========== 第一章 药学服务概论 ==========
  {
    content: '药学服务的核心是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 1,
    options: [
      { label: 'A', content: '以患者为中心', isCorrect: true },
      { label: 'B', content: '以药品为中心', isCorrect: false },
      { label: 'C', content: '以医院为中心', isCorrect: false },
      { label: 'D', content: '以经济效益为中心', isCorrect: false }
    ],
    answer: 'A',
    explanation: '药学服务的核心是以患者为中心，药师运用药学专业知识和技能，向患者提供直接的、负责的、与药物使用有关的服务。',
    difficulty: 1, importance: 'high', source: '真题', year: 2016, tags: ['综合技能', '药学服务', '核心理念']
  },
  {
    content: '药学服务的对象是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 1,
    options: [
      { label: 'A', content: '仅限患者', isCorrect: false },
      { label: 'B', content: '患者及其家属、医护人员、健康人群', isCorrect: true },
      { label: 'C', content: '仅限医护人员', isCorrect: false },
      { label: 'D', content: '仅限健康人群', isCorrect: false }
    ],
    answer: 'B',
    explanation: '药学服务的对象不仅包括患者，还包括患者家属、医护人员和健康人群。药师需要为所有有药物使用需求的人群提供服务。',
    difficulty: 1, importance: 'medium', source: '真题', year: 2017, tags: ['综合技能', '药学服务', '服务对象']
  },
  // ========== 第二章 处方调剂 ==========
  {
    content: '处方中"Sig."表示',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 2,
    options: [
      { label: 'A', content: '用法用量', isCorrect: true },
      { label: 'B', content: '药品名称', isCorrect: false },
      { label: 'C', content: '处方日期', isCorrect: false },
      { label: 'D', content: '医师签名', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'Sig.（Signa）是拉丁文"标记"的意思，在处方中表示用法用量，是告诉患者如何使用药品的指示。',
    difficulty: 1, importance: 'high', source: '真题', year: 2018, tags: ['综合技能', '处方调剂', '处方术语']
  },
  {
    content: '处方审核的内容不包括',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 2,
    options: [
      { label: 'A', content: '处方前记是否完整', isCorrect: false },
      { label: 'B', content: '药品名称、剂量、用法是否正确', isCorrect: false },
      { label: 'C', content: '是否有配伍禁忌', isCorrect: false },
      { label: 'D', content: '患者的家庭住址', isCorrect: true }
    ],
    answer: 'D',
    explanation: '处方审核包括：处方前记是否完整、药品名称/剂量/用法是否正确、是否有配伍禁忌、是否有重复用药等。患者家庭住址不是处方审核的内容。',
    difficulty: 1, importance: 'medium', source: '真题', year: 2019, tags: ['综合技能', '处方调剂', '处方审核']
  },
  {
    content: '下列关于处方调配的叙述，错误的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 2,
    options: [
      { label: 'A', content: '调配处方时应仔细核对处方内容', isCorrect: false },
      { label: 'B', content: '对有疑问的处方应拒绝调配', isCorrect: false },
      { label: 'C', content: '调配完成后不需要再次核对', isCorrect: true },
      { label: 'D', content: '特殊管理药品需双人核对', isCorrect: false }
    ],
    answer: 'C',
    explanation: '调配完成后必须再次核对，确保药品名称、数量、用法等与处方一致。"四查十对"是处方调配的基本要求。',
    difficulty: 2, importance: 'high', source: '真题', year: 2020, tags: ['综合技能', '处方调剂', '调配规范']
  },
  {
    content: '"四查十对"中，查处方对',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 2,
    options: [
      { label: 'A', content: '科别、姓名、年龄', isCorrect: true },
      { label: 'B', content: '药品、剂量、数量', isCorrect: false },
      { label: 'C', content: '配伍禁忌、用药合理性', isCorrect: false },
      { label: 'D', content: '药品性状、用法用量', isCorrect: false }
    ],
    answer: 'A',
    explanation: '"四查十对"：查处方对科别、姓名、年龄；查药品对药名、剂型、规格、数量；查配伍禁忌对药品性状、用法用量；查用药合理性对临床诊断。',
    difficulty: 2, importance: 'high', source: '真题', year: 2021, tags: ['综合技能', '处方调剂', '四查十对']
  },
  // ========== 第三章 临床用药管理 ==========
  {
    content: '下列关于药物相互作用的叙述，正确的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 3,
    options: [
      { label: 'A', content: '药物相互作用都是有害的', isCorrect: false },
      { label: 'B', content: '药物相互作用可以是有益的，也可以是有害的', isCorrect: true },
      { label: 'C', content: '只有西药之间才会发生相互作用', isCorrect: false },
      { label: 'D', content: '药物相互作用只影响药效，不影响安全性', isCorrect: false }
    ],
    answer: 'B',
    explanation: '药物相互作用可以是有益的（如增效、减毒），也可以是有害的（如增毒、减效）。中西药之间也可能发生相互作用。',
    difficulty: 2, importance: 'high', source: '真题', year: 2017, tags: ['综合技能', '临床用药', '药物相互作用']
  },
  {
    content: '肝功能不全患者用药时，下列哪项叙述是正确的',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 3,
    options: [
      { label: 'A', content: '所有药物都需要减量', isCorrect: false },
      { label: 'B', content: '主要经肝脏代谢的药物需要调整剂量', isCorrect: true },
      { label: 'C', content: '不需要调整任何药物的剂量', isCorrect: false },
      { label: 'D', content: '只能使用不经肝脏代谢的药物', isCorrect: false }
    ],
    answer: 'B',
    explanation: '肝功能不全时，主要经肝脏代谢的药物代谢减慢，血药浓度升高，需要调整剂量或更换药物。不是所有药物都需要减量。',
    difficulty: 3, importance: 'high', source: '真题', year: 2018, tags: ['综合技能', '临床用药', '肝功能不全']
  },
  {
    content: '老年人用药的特点不包括',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 3,
    options: [
      { label: 'A', content: '药物代谢能力下降', isCorrect: false },
      { label: 'B', content: '药物排泄能力下降', isCorrect: false },
      { label: 'C', content: '对药物的敏感性降低', isCorrect: true },
      { label: 'D', content: '药物不良反应发生率增加', isCorrect: false }
    ],
    answer: 'C',
    explanation: '老年人对药物的敏感性通常是增加的，而不是降低。由于肝肾功能减退、血浆蛋白减少、受体敏感性改变等，老年人更容易发生药物不良反应。',
    difficulty: 2, importance: 'high', source: '真题', year: 2019, tags: ['综合技能', '临床用药', '老年人用药']
  },
  {
    content: '妊娠期用药的安全性分类中，最安全的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 3,
    options: [
      { label: 'A', content: 'A类', isCorrect: true },
      { label: 'B', content: 'B类', isCorrect: false },
      { label: 'C', content: 'C类', isCorrect: false },
      { label: 'D', content: 'X类', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'FDA妊娠期用药安全性分为A、B、C、D、X五类。A类最安全，在孕妇中进行过研究，未发现对胎儿有危害。X类禁用于妊娠期。',
    difficulty: 2, importance: 'high', source: '真题', year: 2020, tags: ['综合技能', '临床用药', '妊娠用药']
  },
  // ========== 第四章 用药指导 ==========
  {
    content: '服用下列药物时需要多饮水的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 4,
    options: [
      { label: 'A', content: '止咳糖浆', isCorrect: false },
      { label: 'B', content: '磺胺类药物', isCorrect: true },
      { label: 'C', content: '硝酸甘油片', isCorrect: false },
      { label: 'D', content: '健胃药', isCorrect: false }
    ],
    answer: 'B',
    explanation: '磺胺类药物在尿中溶解度低，容易在尿路中形成结晶，需要多饮水增加尿量，防止结晶尿和肾损伤。止咳糖浆服用后不宜立即饮水。',
    difficulty: 2, importance: 'high', source: '真题', year: 2017, tags: ['综合技能', '用药指导', '多饮水']
  },
  {
    content: '下列关于服药时间的叙述，错误的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 4,
    options: [
      { label: 'A', content: '驱虫药宜空腹服用', isCorrect: false },
      { label: 'B', content: '助消化药宜饭前服用', isCorrect: true },
      { label: 'C', content: '安眠药宜睡前服用', isCorrect: false },
      { label: 'D', content: '对胃有刺激的药物宜饭后服用', isCorrect: false }
    ],
    answer: 'B',
    explanation: '助消化药宜饭时或饭前服用，以便药物与食物充分混合，发挥助消化作用。但大多数助消化药宜饭前服用。实际上，健胃药宜饭前服用，助消化药如多酶片宜饭时服用。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2018, tags: ['综合技能', '用药指导', '服药时间']
  },
  {
    content: '舌下含服硝酸甘油的正确方法是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 4,
    options: [
      { label: 'A', content: '将药片放在舌下，闭嘴含化，不可吞咽', isCorrect: true },
      { label: 'B', content: '将药片嚼碎后吞下', isCorrect: false },
      { label: 'C', content: '将药片放在口中用水送服', isCorrect: false },
      { label: 'D', content: '将药片放在面颊和牙龈之间', isCorrect: false }
    ],
    answer: 'A',
    explanation: '硝酸甘油舌下含服时应将药片放在舌下，闭嘴含化，不可吞咽。舌下黏膜血管丰富，药物可直接吸收入血，避免首过效应，起效快。',
    difficulty: 1, importance: 'high', source: '真题', year: 2019, tags: ['综合技能', '用药指导', '硝酸甘油']
  },
  // ========== 第五章 药物不良反应监测 ==========
  {
    content: '下列药物中，最容易引起药源性肝损害的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 5,
    options: [
      { label: 'A', content: '阿司匹林', isCorrect: false },
      { label: 'B', content: '对乙酰氨基酚', isCorrect: true },
      { label: 'C', content: '布洛芬', isCorrect: false },
      { label: 'D', content: '双氯芬酸', isCorrect: false }
    ],
    answer: 'B',
    explanation: '对乙酰氨基酚（扑热息痛）是最容易引起药源性肝损害的药物之一。过量使用可导致严重的肝细胞坏死，甚至肝衰竭。',
    difficulty: 3, importance: 'high', source: '真题', year: 2016, tags: ['综合技能', '不良反应', '肝损害']
  },
  {
    content: '药物不良反应监测的方法不包括',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 5,
    options: [
      { label: 'A', content: '自发呈报系统', isCorrect: false },
      { label: 'B', content: '医院集中监测', isCorrect: false },
      { label: 'C', content: '病例对照研究', isCorrect: false },
      { label: 'D', content: '药物广告宣传', isCorrect: true }
    ],
    answer: 'D',
    explanation: '药物不良反应监测的方法包括自发呈报系统、医院集中监测、病例对照研究、队列研究等。药物广告宣传不是不良反应监测方法。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2020, tags: ['综合技能', '不良反应', '监测方法']
  },
  {
    content: '药物警戒的目的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 5,
    options: [
      { label: 'A', content: '发现、评估、理解和预防药物不良反应及其他药物相关问题', isCorrect: true },
      { label: 'B', content: '只监测已上市药物的不良反应', isCorrect: false },
      { label: 'C', content: '限制药物的使用', isCorrect: false },
      { label: 'D', content: '取消不良反应药物的上市资格', isCorrect: false }
    ],
    answer: 'A',
    explanation: '药物警戒是与发现、评估、理解和预防药物不良反应或其他任何药物相关问题有关的科学与活动。范围比不良反应监测更广。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2021, tags: ['综合技能', '不良反应', '药物警戒']
  },
  // ========== 第六章 药物信息服务 ==========
  {
    content: '药物信息的来源不包括',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 6,
    options: [
      { label: 'A', content: '药品说明书', isCorrect: false },
      { label: 'B', content: '药学专业期刊', isCorrect: false },
      { label: 'C', content: '互联网信息', isCorrect: false },
      { label: 'D', content: '患者口述', isCorrect: true }
    ],
    answer: 'D',
    explanation: '药物信息的来源包括药品说明书、药学专业期刊、药学数据库、互联网专业信息等。患者口述不是可靠的药物信息来源。',
    difficulty: 1, importance: 'medium', source: '真题', year: 2019, tags: ['综合技能', '药物信息', '信息来源']
  },
  {
    content: '药物信息服务的首要质量要求是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 6,
    options: [
      { label: 'A', content: '准确性', isCorrect: true },
      { label: 'B', content: '及时性', isCorrect: false },
      { label: 'C', content: '全面性', isCorrect: false },
      { label: 'D', content: '便捷性', isCorrect: false }
    ],
    answer: 'A',
    explanation: '药物信息服务的首要质量要求是准确性，因为错误的药物信息可能导致严重的用药错误和患者伤害。',
    difficulty: 1, importance: 'medium', source: '练习题', tags: ['综合技能', '药物信息', '质量要求']
  },
  // ========== 第七章 常见病症的自我药疗 ==========
  {
    content: '下列关于感冒的自我药疗，错误的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 7,
    options: [
      { label: 'A', content: '普通感冒一般不需要使用抗生素', isCorrect: false },
      { label: 'B', content: '发热可选用对乙酰氨基酚或布洛芬', isCorrect: false },
      { label: 'C', content: '感冒症状超过7天应就医', isCorrect: false },
      { label: 'D', content: '感冒后应立即使用抗病毒药物', isCorrect: true }
    ],
    answer: 'D',
    explanation: '普通感冒多由病毒引起，一般不需要使用抗病毒药物，以对症治疗为主。滥用抗病毒药物可能产生耐药性和不良反应。',
    difficulty: 2, importance: 'high', source: '真题', year: 2018, tags: ['综合技能', '自我药疗', '感冒']
  },
  {
    content: '消化性溃疡的首选药物是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 7,
    options: [
      { label: 'A', content: '质子泵抑制剂（PPI）', isCorrect: true },
      { label: 'B', content: 'H2受体阻断剂', isCorrect: false },
      { label: 'C', content: '抗酸药', isCorrect: false },
      { label: 'D', content: '胃黏膜保护剂', isCorrect: false }
    ],
    answer: 'A',
    explanation: '质子泵抑制剂（如奥美拉唑）是治疗消化性溃疡的首选药物，抑酸作用强而持久，可促进溃疡愈合。',
    difficulty: 2, importance: 'high', source: '真题', year: 2019, tags: ['综合技能', '自我药疗', '消化性溃疡']
  },
  {
    content: '下列关于腹泻的自我药疗，正确的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 7,
    options: [
      { label: 'A', content: '所有腹泻都需要使用抗生素', isCorrect: false },
      { label: 'B', content: '腹泻时应首先补充水分和电解质', isCorrect: true },
      { label: 'C', content: '止泻药应尽早使用', isCorrect: false },
      { label: 'D', content: '腹泻期间应禁食', isCorrect: false }
    ],
    answer: 'B',
    explanation: '腹泻时最重要的是补充水分和电解质，防止脱水。不是所有腹泻都需要用抗生素，感染性腹泻应根据病原体选择药物。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2020, tags: ['综合技能', '自我药疗', '腹泻']
  },
  {
    content: '下列哪种情况应建议患者立即就医',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 7,
    options: [
      { label: 'A', content: '普通感冒', isCorrect: false },
      { label: 'B', content: '轻微头痛', isCorrect: false },
      { label: 'C', content: '胸痛伴呼吸困难', isCorrect: true },
      { label: 'D', content: '轻度腹泻', isCorrect: false }
    ],
    answer: 'C',
    explanation: '胸痛伴呼吸困难可能是心肌梗死、肺栓塞等严重疾病的症状，需要立即就医。普通感冒、轻微头痛、轻度腹泻可先进行自我药疗。',
    difficulty: 1, importance: 'high', source: '真题', year: 2021, tags: ['综合技能', '自我药疗', '就医指征']
  },
  // 练习题补充
  {
    content: '药历的基本内容不包括',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 1,
    options: [
      { label: 'A', content: '患者基本信息', isCorrect: false },
      { label: 'B', content: '药物治疗方案', isCorrect: false },
      { label: 'C', content: '患者的家庭收入', isCorrect: true },
      { label: 'D', content: '用药监护计划', isCorrect: false }
    ],
    answer: 'C',
    explanation: '药历的基本内容包括患者基本信息、药物治疗方案、用药监护计划、治疗效果评估等。患者家庭收入不是药历的基本内容。',
    difficulty: 1, importance: 'medium', source: '练习题', tags: ['综合技能', '药学服务', '药历']
  },
  {
    content: '下列关于药师与患者沟通的技巧，错误的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 4,
    options: [
      { label: 'A', content: '使用通俗易懂的语言', isCorrect: false },
      { label: 'B', content: '认真倾听患者的问题', isCorrect: false },
      { label: 'C', content: '使用大量专业术语', isCorrect: true },
      { label: 'D', content: '确认患者理解用药指导', isCorrect: false }
    ],
    answer: 'C',
    explanation: '药师与患者沟通时应使用通俗易懂的语言，避免使用大量专业术语，以免患者不理解。应认真倾听、确认患者理解。',
    difficulty: 1, importance: 'medium', source: '练习题', tags: ['综合技能', '用药指导', '沟通技巧']
  },
  {
    content: '糖尿病患者用药指导中，错误的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 3,
    options: [
      { label: 'A', content: '按时按量服药', isCorrect: false },
      { label: 'B', content: '定期监测血糖', isCorrect: false },
      { label: 'C', content: '血糖正常后可自行停药', isCorrect: true },
      { label: 'D', content: '注意低血糖的预防和处理', isCorrect: false }
    ],
    answer: 'C',
    explanation: '糖尿病是慢性疾病，需要长期用药控制。血糖正常是药物作用的结果，自行停药会导致血糖反弹。应在医生指导下调整用药。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['综合技能', '临床用药', '糖尿病']
  },

  // ========== 大量补充题目 - 处方调剂 ==========
  {
    content: '处方缩写"bid"表示',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 2,
    options: [
      { label: 'A', content: '每日两次', isCorrect: true },
      { label: 'B', content: '每日一次', isCorrect: false },
      { label: 'C', content: '每日三次', isCorrect: false },
      { label: 'D', content: '每晚一次', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'bid是bis in die的缩写，表示每日两次。qd（每日一次）、tid（每日三次）、qid（每日四次）、qn（每晚一次）。',
    difficulty: 1, importance: 'high', source: '真题', year: 2023, tags: ['综合技能', '处方调剂', '处方缩写']
  },
  {
    content: '处方缩写"prn"表示',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 2,
    options: [
      { label: 'A', content: '必要时', isCorrect: true },
      { label: 'B', content: '立即', isCorrect: false },
      { label: 'C', content: '饭前', isCorrect: false },
      { label: 'D', content: '临睡时', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'prn是pro re nata的缩写，表示必要时（需要时使用）。stat表示立即，ac表示饭前，hs表示临睡时。',
    difficulty: 1, importance: 'high', source: '真题', year: 2022, tags: ['综合技能', '处方调剂', '处方缩写']
  },
  {
    content: '下列关于处方调配的叙述，正确的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 2,
    options: [
      { label: 'A', content: '药师有权更改处方', isCorrect: false },
      { label: 'B', content: '对不合理处方应拒绝调配', isCorrect: true },
      { label: 'C', content: '处方调配不需要核对', isCorrect: false },
      { label: 'D', content: '超剂量处方可以调配', isCorrect: false }
    ],
    answer: 'B',
    explanation: '药师对不合理处方应拒绝调配并告知医师。药师无权更改处方，调配后必须核对。超剂量处方需医师重新签字确认。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['综合技能', '处方调剂', '调配规范']
  },

  // ========== 大量补充题目 - 临床用药管理 ==========
  {
    content: '妊娠期用药X类药物的特点是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 3,
    options: [
      { label: 'A', content: '对胎儿有明确危害，妊娠期禁用', isCorrect: true },
      { label: 'B', content: '对胎儿安全', isCorrect: false },
      { label: 'C', content: '动物实验有危害但人体资料不足', isCorrect: false },
      { label: 'D', content: '需要权衡利弊后使用', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'X类药物对胎儿有明确危害，妊娠期禁用。如华法林（致畸）、甲氨蝶呤（致畸）、异维A酸（致畸）。A类最安全，B类相对安全，C类权衡利弊。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['综合技能', '临床用药', '妊娠用药']
  },
  {
    content: '肾功能不全患者使用氨基糖苷类抗生素时应',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 3,
    options: [
      { label: 'A', content: '根据肌酐清除率调整剂量或延长给药间隔', isCorrect: true },
      { label: 'B', content: '使用正常剂量', isCorrect: false },
      { label: 'C', content: '增加剂量', isCorrect: false },
      { label: 'D', content: '无需调整', isCorrect: false }
    ],
    answer: 'A',
    explanation: '氨基糖苷类主要经肾脏排泄，肾功能不全时清除减慢，需根据肌酐清除率（Ccr）调整剂量或延长给药间隔，避免蓄积中毒（耳毒性、肾毒性）。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['综合技能', '临床用药', '肾功能不全']
  },
  {
    content: '下列关于CYP3A4诱导剂的叙述，正确的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 3,
    options: [
      { label: 'A', content: '利福平是CYP3A4诱导剂，可加速其他药物代谢', isCorrect: true },
      { label: 'B', content: '酮康唑是CYP3A4诱导剂', isCorrect: false },
      { label: 'C', content: 'CYP3A4诱导剂使其他药物血药浓度升高', isCorrect: false },
      { label: 'D', content: 'CYP3A4诱导剂不影响其他药物的代谢', isCorrect: false }
    ],
    answer: 'A',
    explanation: '利福平是强效CYP3A4诱导剂，加速经CYP3A4代谢的药物（如环孢素、华法林、口服避孕药）的代谢→血药浓度降低→疗效减弱。酮康唑是CYP3A4抑制剂。',
    difficulty: 3, importance: 'high', source: '真题', year: 2023, tags: ['综合技能', '临床用药', 'CYP450']
  },

  // ========== 大量补充题目 - 用药指导 ==========
  {
    content: '服用华法林期间应避免大量食用',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 4,
    options: [
      { label: 'A', content: '富含维生素K的绿叶蔬菜', isCorrect: true },
      { label: 'B', content: '富含蛋白质的肉类', isCorrect: false },
      { label: 'C', content: '富含碳水化合物的主食', isCorrect: false },
      { label: 'D', content: '富含脂肪的油炸食品', isCorrect: false }
    ],
    answer: 'A',
    explanation: '华法林抑制维生素K依赖性凝血因子合成。大量食用富含维生素K的绿叶蔬菜（如菠菜、西兰花）会拮抗华法林的抗凝作用，应保持饮食中维生素K摄入的稳定性。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['综合技能', '用药指导', '华法林']
  },
  {
    content: '下列药物中，服用后需要大量饮水的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 4,
    options: [
      { label: 'A', content: '阿仑膦酸钠', isCorrect: true },
      { label: 'B', content: '硝酸甘油', isCorrect: false },
      { label: 'C', content: '健胃药', isCorrect: false },
      { label: 'D', content: '止咳糖浆', isCorrect: false }
    ],
    answer: 'A',
    explanation: '阿仑膦酸钠（治疗骨质疏松）需用200ml以上白开水送服，服药后保持直立30分钟以上，以减少对食管的刺激和溃疡风险。',
    difficulty: 2, importance: 'high', source: '真题', year: 2022, tags: ['综合技能', '用药指导', '服药方法']
  },

  // ========== 大量补充题目 - 不良反应监测 ==========
  {
    content: 'A型药物不良反应的特点是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 5,
    options: [
      { label: 'A', content: '与剂量相关，可预测，发生率高', isCorrect: true },
      { label: 'B', content: '与剂量无关，不可预测', isCorrect: false },
      { label: 'C', content: '只在首次用药时发生', isCorrect: false },
      { label: 'D', content: '只在长期用药后发生', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'A型不良反应（量变型异常）与剂量相关，可预测，发生率高但死亡率低。包括副作用、毒性反应、后遗效应等。B型与剂量无关，不可预测。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['综合技能', '不良反应', 'A型']
  },
  {
    content: '下列药物中，最容易引起药源性肾损害的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 5,
    options: [
      { label: 'A', content: '氨基糖苷类抗生素', isCorrect: true },
      { label: 'B', content: '青霉素', isCorrect: false },
      { label: 'C', content: '红霉素', isCorrect: false },
      { label: 'D', content: '阿奇霉素', isCorrect: false }
    ],
    answer: 'A',
    explanation: '氨基糖苷类抗生素（庆大霉素、链霉素等）是最容易引起药源性肾损害的药物之一，主要损害近曲小管。NSAIDs、造影剂也易引起肾损害。',
    difficulty: 2, importance: 'high', source: '真题', year: 2022, tags: ['综合技能', '不良反应', '肾损害']
  },

  // ========== 大量补充题目 - 自我药疗 ==========
  {
    content: '发热时，首选的解热镇痛药是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 7,
    options: [
      { label: 'A', content: '对乙酰氨基酚或布洛芬', isCorrect: true },
      { label: 'B', content: '阿司匹林', isCorrect: false },
      { label: 'C', content: '地塞米松', isCorrect: false },
      { label: 'D', content: '氯丙嗪', isCorrect: false }
    ],
    answer: 'A',
    explanation: '发热首选对乙酰氨基酚或布洛芬，安全有效。儿童禁用阿司匹林（瑞夷综合征）。糖皮质激素和氯丙嗪不作为常规退热药。',
    difficulty: 1, importance: 'high', source: '真题', year: 2023, tags: ['综合技能', '自我药疗', '发热']
  },
  {
    content: '关于感冒用药，下列叙述错误的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 7,
    options: [
      { label: 'A', content: '普通感冒以对症治疗为主', isCorrect: false },
      { label: 'B', content: '复方感冒药应注意成分重叠', isCorrect: false },
      { label: 'C', content: '感冒都需要使用抗生素', isCorrect: true },
      { label: 'D', content: '高血压患者慎用含伪麻黄碱的感冒药', isCorrect: false }
    ],
    answer: 'C',
    explanation: '普通感冒多由病毒引起，不需要使用抗生素。只有合并细菌感染时才考虑使用。滥用抗生素会导致耐药性。',
    difficulty: 1, importance: 'high', source: '真题', year: 2022, tags: ['综合技能', '自我药疗', '感冒']
  },
  {
    content: '急性腹泻最重要的治疗措施是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 7,
    options: [
      { label: 'A', content: '补充水分和电解质', isCorrect: true },
      { label: 'B', content: '使用止泻药', isCorrect: false },
      { label: 'C', content: '使用抗生素', isCorrect: false },
      { label: 'D', content: '禁食', isCorrect: false }
    ],
    answer: 'A',
    explanation: '急性腹泻最重要的治疗是补充水分和电解质（口服补液盐ORS），防止脱水。不是所有腹泻都需用抗生素，感染性腹泻应根据病原体选择。',
    difficulty: 1, importance: 'high', source: '真题', year: 2023, tags: ['综合技能', '自我药疗', '腹泻']
  },
  {
    content: '下列关于便秘用药的叙述，正确的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 7,
    options: [
      { label: 'A', content: '刺激性泻药不宜长期使用', isCorrect: true },
      { label: 'B', content: '所有泻药都可以长期使用', isCorrect: false },
      { label: 'C', content: '便秘不需要调整生活方式', isCorrect: false },
      { label: 'D', content: '开塞露属于容积性泻药', isCorrect: false }
    ],
    answer: 'A',
    explanation: '刺激性泻药（番泻叶、比沙可啶）长期使用可导致结肠黑变病和药物依赖。应优先采用生活方式调整（多饮水、多运动、多膳食纤维）。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['综合技能', '自我药疗', '便秘']
  },
  {
    content: '下列哪种情况不应建议患者自我药疗',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 7,
    options: [
      { label: 'A', content: '发热持续3天以上', isCorrect: true },
      { label: 'B', content: '轻度头痛', isCorrect: false },
      { label: 'C', content: '普通感冒', isCorrect: false },
      { label: 'D', content: '轻度消化不良', isCorrect: false }
    ],
    answer: 'A',
    explanation: '发热持续3天以上可能提示严重感染或其他疾病，应建议就医。轻度头痛、普通感冒、轻度消化不良可先进行自我药疗。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['综合技能', '自我药疗', '就医指征']
  },

  // ========== 补充题目 - 药物信息服务 ==========
  {
    content: '药物信息的三级来源包括',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 6,
    options: [
      { label: 'A', content: '教科书、药典、药品说明书', isCorrect: true },
      { label: 'B', content: '原始研究论文', isCorrect: false },
      { label: 'C', content: '文摘、索引', isCorrect: false },
      { label: 'D', content: '互联网新闻', isCorrect: false }
    ],
    answer: 'A',
    explanation: '三级文献包括教科书、药典、药品说明书、手册等。一级文献是原始研究论文和临床试验报告。二级文献是文摘和索引。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['综合技能', '药物信息', '信息来源']
  },

  // ========== 补充题目 - 治疗药物监测 ==========
  {
    content: '下列药物中，需要进行治疗药物监测（TDM）的是',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 3,
    options: [
      { label: 'A', content: '地高辛', isCorrect: true },
      { label: 'B', content: '阿莫西林', isCorrect: false },
      { label: 'C', content: '对乙酰氨基酚', isCorrect: false },
      { label: 'D', content: '布洛芬', isCorrect: false }
    ],
    answer: 'A',
    explanation: '地高辛治疗窗窄、毒性反应严重，需要TDM。其他需要TDM的药物包括：氨基糖苷类、万古霉素、环孢素、苯妥英钠、锂盐、茶碱等。',
    difficulty: 3, importance: 'high', source: '真题', year: 2023, tags: ['综合技能', 'TDM', '治疗药物监测']
  },
  {
    content: '治疗药物监测的适应证不包括',
    type: 'single', subjectCode: 'comprehensiveSkill', chapterOrder: 3,
    options: [
      { label: 'A', content: '治疗窗窄的药物', isCorrect: false },
      { label: 'B', content: '安全范围大的非处方药', isCorrect: true },
      { label: 'C', content: '肝肾功能不全患者', isCorrect: false },
      { label: 'D', content: '长期使用可能产生毒性的药物', isCorrect: false }
    ],
    answer: 'B',
    explanation: 'TDM适应证：治疗窗窄的药物、药动学个体差异大的药物、肝肾功能不全患者、长期使用可能产生毒性的药物等。安全范围大的非处方药不需要TDM。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['综合技能', 'TDM', '适应证']
  }
];

module.exports = comprehensiveSkillQuestions;
