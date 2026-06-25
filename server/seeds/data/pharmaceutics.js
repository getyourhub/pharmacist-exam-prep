const pharmaceuticsQuestions = [
  // ========== 第一章 药剂学总论 ==========
  {
    content: '下列关于药剂学的叙述，错误的是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 1,
    options: [
      { label: 'A', content: '是研究药物制剂的基本理论、处方设计、制备工艺和合理应用的综合性技术科学', isCorrect: false },
      { label: 'B', content: '药物剂型按给药途径可分为经胃肠道和非经胃肠道给药剂型', isCorrect: false },
      { label: 'C', content: '药典是药剂工作者的重要参考依据', isCorrect: false },
      { label: 'D', content: 'GMP仅适用于药品生产，与药剂学无关', isCorrect: true }
    ],
    answer: 'D',
    explanation: 'GMP（药品生产质量管理规范）与药剂学密切相关，是药品生产和质量管理的基本准则。药剂学研究贯穿药品研发、生产和应用的全过程。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2016, tags: ['药剂学', '总论', 'GMP']
  },
  {
    content: '下列属于非经胃肠道给药的剂型是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 1,
    options: [
      { label: 'A', content: '片剂', isCorrect: false },
      { label: 'B', content: '胶囊剂', isCorrect: false },
      { label: 'C', content: '注射剂', isCorrect: true },
      { label: 'D', content: '合剂', isCorrect: false }
    ],
    answer: 'C',
    explanation: '注射剂是非经胃肠道给药剂型，直接注入体内，不经过胃肠道吸收。片剂、胶囊剂、合剂均属于经胃肠道给药剂型。',
    difficulty: 1, importance: 'medium', source: '真题', year: 2017, tags: ['药剂学', '总论', '剂型分类']
  },
  {
    content: '药典规定的药品标准是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 1,
    options: [
      { label: 'A', content: '国家对药品质量规格和检验方法所作的技术规定', isCorrect: true },
      { label: 'B', content: '药品生产企业的内部标准', isCorrect: false },
      { label: 'C', content: '药品经营企业的验收标准', isCorrect: false },
      { label: 'D', content: '医疗机构的用药标准', isCorrect: false }
    ],
    answer: 'A',
    explanation: '药典是国家对药品质量规格和检验方法所作的技术规定，是药品生产、供应、使用和管理部门共同遵循的法定依据。',
    difficulty: 1, importance: 'medium', source: '练习题', tags: ['药剂学', '总论', '药典']
  },
  // ========== 第二章 液体制剂 ==========
  {
    content: '下列关于液体制剂的说法，错误的是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 2,
    options: [
      { label: 'A', content: '液体制剂是指药物分散在适宜分散介质中制成的液体形态的制剂', isCorrect: false },
      { label: 'B', content: '溶液型液体制剂是均相分散体系', isCorrect: false },
      { label: 'C', content: '混悬剂属于热力学稳定体系', isCorrect: true },
      { label: 'D', content: '乳剂属于非均相分散体系', isCorrect: false }
    ],
    answer: 'C',
    explanation: '混悬剂属于热力学不稳定体系，动力学不稳定体系。混悬剂中的微粒有聚集和沉降的趋势。',
    difficulty: 3, importance: 'high', source: '真题', year: 2018, tags: ['药剂学', '液体制剂', '混悬剂']
  },
  {
    content: '表面活性剂的HLB值越大，表示',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 2,
    options: [
      { label: 'A', content: '亲水性越强', isCorrect: true },
      { label: 'B', content: '亲油性越强', isCorrect: false },
      { label: 'C', content: '毒性越大', isCorrect: false },
      { label: 'D', content: '表面活性越强', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'HLB（亲水亲油平衡值）越大，亲水性越强。HLB值范围0-20，0为完全亲油，20为完全亲水。HLB 3-6适合做W/O型乳化剂，8-18适合做O/W型乳化剂。',
    difficulty: 2, importance: 'high', source: '真题', year: 2019, tags: ['药剂学', '液体制剂', 'HLB值']
  },
  {
    content: '增加液体制剂稳定性的方法不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 2,
    options: [
      { label: 'A', content: '加入助悬剂', isCorrect: false },
      { label: 'B', content: '加入乳化剂', isCorrect: false },
      { label: 'C', content: '加入防腐剂', isCorrect: false },
      { label: 'D', content: '增加药物浓度', isCorrect: true }
    ],
    answer: 'D',
    explanation: '增加药物浓度不一定能增加液体制剂的稳定性，反而可能加速药物的降解。增加稳定性的方法包括加入助悬剂、乳化剂、防腐剂、抗氧剂等。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药剂学', '液体制剂', '稳定性']
  },
  // ========== 第三章 灭菌制剂与无菌制剂 ==========
  {
    content: '注射剂的pH值一般应控制在',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 3,
    options: [
      { label: 'A', content: '4-9', isCorrect: true },
      { label: 'B', content: '2-5', isCorrect: false },
      { label: 'C', content: '7-10', isCorrect: false },
      { label: 'D', content: '1-3', isCorrect: false }
    ],
    answer: 'A',
    explanation: '注射剂的pH值一般应控制在4-9范围内，以保证药物的稳定性和减少对组织的刺激。同一品种pH值差异不超过±1.0。',
    difficulty: 2, importance: 'high', source: '真题', year: 2017, tags: ['药剂学', '注射剂', 'pH值']
  },
  {
    content: '热原的主要成分是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 3,
    options: [
      { label: 'A', content: '脂多糖', isCorrect: true },
      { label: 'B', content: '蛋白质', isCorrect: false },
      { label: 'C', content: '磷脂', isCorrect: false },
      { label: 'D', content: '胆固醇', isCorrect: false }
    ],
    answer: 'A',
    explanation: '热原是微生物产生的内毒素，主要成分是脂多糖（LPS），由磷脂、脂多糖和蛋白质组成。热原能引起恒温动物体温异常升高。',
    difficulty: 3, importance: 'high', source: '真题', year: 2018, tags: ['药剂学', '注射剂', '热原']
  },
  {
    content: '下列灭菌方法中，属于湿热灭菌法的是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 3,
    options: [
      { label: 'A', content: '热压灭菌法', isCorrect: true },
      { label: 'B', content: '干热灭菌法', isCorrect: false },
      { label: 'C', content: '紫外线灭菌法', isCorrect: false },
      { label: 'D', content: '过滤灭菌法', isCorrect: false }
    ],
    answer: 'A',
    explanation: '热压灭菌法（高压蒸汽灭菌法）是最常用的湿热灭菌法，利用高压饱和蒸汽杀灭细菌。条件通常为115.5℃ 30分钟或121.5℃ 15-20分钟。',
    difficulty: 2, importance: 'high', source: '真题', year: 2019, tags: ['药剂学', '灭菌', '湿热灭菌']
  },
  {
    content: '输液剂中不得加入的附加剂是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 3,
    options: [
      { label: 'A', content: '抑菌剂', isCorrect: true },
      { label: 'B', content: '等渗调节剂', isCorrect: false },
      { label: 'C', content: 'pH调节剂', isCorrect: false },
      { label: 'D', content: '抗氧剂', isCorrect: false }
    ],
    answer: 'A',
    explanation: '输液剂一次用量较大（通常100ml以上），不得加入抑菌剂，以保证用药安全。等渗调节剂、pH调节剂、抗氧剂等可根据需要加入。',
    difficulty: 3, importance: 'high', source: '真题', year: 2020, tags: ['药剂学', '输液', '附加剂']
  },
  // ========== 第四章 固体制剂 ==========
  {
    content: '片剂崩解的机制不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 4,
    options: [
      { label: 'A', content: '润湿作用', isCorrect: false },
      { label: 'B', content: '毛细管作用', isCorrect: false },
      { label: 'C', content: '膨胀作用', isCorrect: false },
      { label: 'D', content: '脂溶作用', isCorrect: true }
    ],
    answer: 'D',
    explanation: '片剂崩解的机制主要包括：润湿作用、毛细管作用、膨胀作用、产气作用等。脂溶作用不是片剂崩解的机制。',
    difficulty: 2, importance: 'high', source: '真题', year: 2018, tags: ['药剂学', '片剂', '崩解']
  },
  {
    content: '下列关于胶囊剂的叙述，错误的是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 4,
    options: [
      { label: 'A', content: '胶囊剂可掩盖药物的不良气味', isCorrect: false },
      { label: 'B', content: '胶囊剂可提高药物的稳定性', isCorrect: false },
      { label: 'C', content: '易溶性药物适合制成胶囊剂', isCorrect: true },
      { label: 'D', content: '胶囊剂可定时定位释放药物', isCorrect: false }
    ],
    answer: 'C',
    explanation: '易溶性药物（如氯化钾、溴化物）不宜制成胶囊剂，因为药物在胃中溶解后局部浓度过高，刺激性大。胶囊剂适合于刺激性小、溶解度适中的药物。',
    difficulty: 3, importance: 'high', source: '真题', year: 2019, tags: ['药剂学', '胶囊剂', '适用性']
  },
  {
    content: '缓释制剂的特点不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 4,
    options: [
      { label: 'A', content: '减少给药次数', isCorrect: false },
      { label: 'B', content: '保持平稳的血药浓度', isCorrect: false },
      { label: 'C', content: '可掰开服用', isCorrect: true },
      { label: 'D', content: '提高患者依从性', isCorrect: false }
    ],
    answer: 'C',
    explanation: '缓释制剂一般不能掰开服用，因为破坏其缓释结构会导致药物突释，可能引起毒性反应。只有少数特殊设计的缓释片可以沿刻痕掰开。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2021, tags: ['药剂学', '缓释制剂', '注意事项']
  },
  // ========== 第五章 半固体制剂 ==========
  {
    content: '软膏剂基质的类型不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 5,
    options: [
      { label: 'A', content: '油脂性基质', isCorrect: false },
      { label: 'B', content: '乳剂型基质', isCorrect: false },
      { label: 'C', content: '水溶性基质', isCorrect: false },
      { label: 'D', content: '气体基质', isCorrect: true }
    ],
    answer: 'D',
    explanation: '软膏剂基质分为三类：油脂性基质（如凡士林）、乳剂型基质（如O/W型、W/O型）、水溶性基质（如PEG）。不存在气体基质。',
    difficulty: 1, importance: 'medium', source: '真题', year: 2019, tags: ['药剂学', '软膏剂', '基质']
  },
  {
    content: '栓剂的全身作用机制主要是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 5,
    options: [
      { label: 'A', content: '通过直肠黏膜吸收进入体循环', isCorrect: true },
      { label: 'B', content: '通过皮肤吸收', isCorrect: false },
      { label: 'C', content: '通过胃肠道吸收', isCorrect: false },
      { label: 'D', content: '通过肺部吸收', isCorrect: false }
    ],
    answer: 'A',
    explanation: '栓剂插入直肠后，药物通过直肠黏膜吸收进入体循环，产生全身作用。直肠吸收可避免首过效应，生物利用度较高。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2020, tags: ['药剂学', '栓剂', '吸收机制']
  },
  // ========== 第六章 气雾剂与喷雾剂 ==========
  {
    content: '气雾剂的组成不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 6,
    options: [
      { label: 'A', content: '药物', isCorrect: false },
      { label: 'B', content: '抛射剂', isCorrect: false },
      { label: 'C', content: '耐压容器', isCorrect: false },
      { label: 'D', content: '缓释材料', isCorrect: true }
    ],
    answer: 'D',
    explanation: '气雾剂由药物、抛射剂、耐压容器和阀门系统四部分组成。缓释材料不是气雾剂的基本组成。',
    difficulty: 2, importance: 'low', source: '真题', year: 2020, tags: ['药剂学', '气雾剂', '组成']
  },
  // ========== 第七章 药物制剂稳定性 ==========
  {
    content: '药物降解的主要途径不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 7,
    options: [
      { label: 'A', content: '水解', isCorrect: false },
      { label: 'B', content: '氧化', isCorrect: false },
      { label: 'C', content: '异构化', isCorrect: false },
      { label: 'D', content: '升华', isCorrect: true }
    ],
    answer: 'D',
    explanation: '药物降解的主要途径包括水解、氧化、异构化、聚合、脱羧等。升华是物理变化，不是药物化学降解的途径。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2021, tags: ['药剂学', '稳定性', '降解途径']
  },
  {
    content: '影响药物制剂稳定性的外界因素不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 7,
    options: [
      { label: 'A', content: '温度', isCorrect: false },
      { label: 'B', content: '光线', isCorrect: false },
      { label: 'C', content: '湿度', isCorrect: false },
      { label: 'D', content: '药物的化学结构', isCorrect: true }
    ],
    answer: 'D',
    explanation: '药物的化学结构属于处方因素（内在因素），不属于外界因素。影响稳定性的外界因素包括温度、光线、湿度、空气（氧）、金属离子等。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2022, tags: ['药剂学', '稳定性', '影响因素']
  },
  // 练习题补充
  {
    content: '下列关于药物溶解度的叙述，正确的是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 2,
    options: [
      { label: 'A', content: '溶解度与温度有关，温度升高溶解度一定增大', isCorrect: false },
      { label: 'B', content: '药物的溶解度与溶剂的性质有关', isCorrect: true },
      { label: 'C', content: '所有药物的溶解度都随pH值变化', isCorrect: false },
      { label: 'D', content: '药物的溶解度与粒子大小无关', isCorrect: false }
    ],
    answer: 'B',
    explanation: '药物的溶解度与溶剂的性质密切相关，"相似相溶"原则。温度对溶解度的影响因药物而异，不是所有药物都随温度升高而溶解度增大。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药剂学', '液体制剂', '溶解度']
  },
  {
    content: '下列关于散剂的叙述，错误的是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 4,
    options: [
      { label: 'A', content: '散剂是药物与适宜辅料混合制成的干燥粉末状制剂', isCorrect: false },
      { label: 'B', content: '散剂的比表面积大，易分散', isCorrect: false },
      { label: 'C', content: '散剂适用于易吸湿或易氧化变质的药物', isCorrect: true },
      { label: 'D', content: '散剂可分为内服散剂和外用散剂', isCorrect: false }
    ],
    answer: 'C',
    explanation: '散剂比表面积大，易吸湿、易氧化变质的药物不宜制成散剂。散剂适合于化学性质稳定、不易吸湿的药物。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药剂学', '固体制剂', '散剂']
  },
  {
    content: '经皮给药系统（TDDS）的优点不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 5,
    options: [
      { label: 'A', content: '避免首过效应', isCorrect: false },
      { label: 'B', content: '维持恒定的血药浓度', isCorrect: false },
      { label: 'C', content: '给药方便，可随时中断给药', isCorrect: false },
      { label: 'D', content: '适用于所有药物', isCorrect: true }
    ],
    answer: 'D',
    explanation: '经皮给药系统不适用于所有药物，只有剂量小、药理作用强、分子量适中且对皮肤无刺激性的药物才适合制成TDDS。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药剂学', '半固体制剂', 'TDDS']
  },

  // ========== 大量补充题目 - 药剂学总论 ==========
  {
    content: '下列不属于药剂学研究内容的是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 1,
    options: [
      { label: 'A', content: '处方设计', isCorrect: false },
      { label: 'B', content: '制备工艺', isCorrect: false },
      { label: 'C', content: '药物的化学合成', isCorrect: true },
      { label: 'D', content: '合理应用', isCorrect: false }
    ],
    answer: 'C',
    explanation: '药剂学研究药物制剂的基本理论、处方设计、制备工艺和合理应用。药物的化学合成属于药物化学的研究范畴。',
    difficulty: 1, importance: 'medium', source: '练习题', tags: ['药剂学', '总论']
  },
  {
    content: '药物剂型按给药途径分类，栓剂属于',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 1,
    options: [
      { label: 'A', content: '经胃肠道给药剂型', isCorrect: false },
      { label: 'B', content: '非经胃肠道给药剂型', isCorrect: true },
      { label: 'C', content: '皮肤给药剂型', isCorrect: false },
      { label: 'D', content: '黏膜给药剂型', isCorrect: false }
    ],
    answer: 'B',
    explanation: '栓剂经直肠给药，不经过上消化道，属于非经胃肠道给药剂型。直肠吸收的药物50%-70%不经过首过效应。',
    difficulty: 1, importance: 'medium', source: '真题', year: 2023, tags: ['药剂学', '总论', '剂型分类']
  },

  // ========== 大量补充题目 - 液体制剂 ==========
  {
    content: 'HLB值为3-6的表面活性剂适合用作',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 2,
    options: [
      { label: 'A', content: 'W/O型乳化剂', isCorrect: true },
      { label: 'B', content: 'O/W型乳化剂', isCorrect: false },
      { label: 'C', content: '增溶剂', isCorrect: false },
      { label: 'D', content: '润湿剂', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'HLB值3-6适合做W/O型（油包水型）乳化剂，HLB值8-18适合做O/W型（水包油型）乳化剂。HLB值15-18可做增溶剂。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药剂学', '液体制剂', 'HLB值']
  },
  {
    content: '下列属于非离子型表面活性剂的是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 2,
    options: [
      { label: 'A', content: '吐温80', isCorrect: true },
      { label: 'B', content: '十二烷基硫酸钠', isCorrect: false },
      { label: 'C', content: '苯扎溴铵', isCorrect: false },
      { label: 'D', content: '卵磷脂', isCorrect: false }
    ],
    answer: 'A',
    explanation: '吐温80（聚山梨酯80）是非离子型表面活性剂。十二烷基硫酸钠是阴离子型，苯扎溴铵是阳离子型，卵磷脂是两性离子型。',
    difficulty: 2, importance: 'high', source: '真题', year: 2022, tags: ['药剂学', '液体制剂', '表面活性剂']
  },
  {
    content: 'CMC是指',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 2,
    options: [
      { label: 'A', content: '临界胶束浓度', isCorrect: true },
      { label: 'B', content: '临界溶解温度', isCorrect: false },
      { label: 'C', content: '亲水亲油平衡值', isCorrect: false },
      { label: 'D', content: '临界相对湿度', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'CMC（Critical Micelle Concentration）是临界胶束浓度，即表面活性剂分子在溶液中开始形成胶束的最低浓度。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药剂学', '液体制剂', 'CMC']
  },

  // ========== 大量补充题目 - 灭菌制剂 ==========
  {
    content: '注射用水与纯化水的主要区别是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 3,
    options: [
      { label: 'A', content: '注射用水要求无热原', isCorrect: true },
      { label: 'B', content: '注射用水pH不同', isCorrect: false },
      { label: 'C', content: '注射用水渗透压不同', isCorrect: false },
      { label: 'D', content: '两者无区别', isCorrect: false }
    ],
    answer: 'A',
    explanation: '注射用水与纯化水的主要区别是注射用水要求无热原。注射用水由纯化水经蒸馏法制得，用于注射剂的配制。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药剂学', '灭菌制剂', '注射用水']
  },
  {
    content: '除去热原的方法不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 3,
    options: [
      { label: 'A', content: '高温法（180℃ 3-4小时）', isCorrect: false },
      { label: 'B', content: '吸附法（活性炭）', isCorrect: false },
      { label: 'C', content: '紫外线照射法', isCorrect: true },
      { label: 'D', content: '反渗透法', isCorrect: false }
    ],
    answer: 'C',
    explanation: '紫外线照射法是灭菌方法，但不能除去热原。除去热原的方法包括高温法、酸碱法、吸附法、离子交换法、凝胶滤过法、反渗透法。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['药剂学', '灭菌制剂', '热原']
  },
  {
    content: '流通蒸汽灭菌法的条件是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 3,
    options: [
      { label: 'A', content: '100℃ 15-30分钟', isCorrect: true },
      { label: 'B', content: '121℃ 15-20分钟', isCorrect: false },
      { label: 'C', content: '160-170℃ 2小时以上', isCorrect: false },
      { label: 'D', content: '115℃ 30分钟', isCorrect: false }
    ],
    answer: 'A',
    explanation: '流通蒸汽灭菌法是在常压下用100℃流通蒸汽灭菌15-30分钟。热压灭菌法是121℃ 15-20分钟。干热灭菌是160-170℃ 2小时以上。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药剂学', '灭菌制剂', '灭菌方法']
  },

  // ========== 大量补充题目 - 固体制剂 ==========
  {
    content: '片剂中常用的黏合剂是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 4,
    options: [
      { label: 'A', content: '淀粉浆', isCorrect: true },
      { label: 'B', content: '硬脂酸镁', isCorrect: false },
      { label: 'C', content: '干淀粉', isCorrect: false },
      { label: 'D', content: '微粉硅胶', isCorrect: false }
    ],
    answer: 'A',
    explanation: '淀粉浆是最常用的黏合剂。硬脂酸镁是润滑剂，干淀粉是崩解剂，微粉硅胶是助流剂。',
    difficulty: 1, importance: 'high', source: '真题', year: 2022, tags: ['药剂学', '固体制剂', '片剂辅料']
  },
  {
    content: '湿法制粒压片的工艺流程是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 4,
    options: [
      { label: 'A', content: '混合→制软材→制粒→干燥→整粒→压片', isCorrect: true },
      { label: 'B', content: '混合→制粒→干燥→压片', isCorrect: false },
      { label: 'C', content: '混合→直接压片', isCorrect: false },
      { label: 'D', content: '混合→制软材→压片', isCorrect: false }
    ],
    answer: 'A',
    explanation: '湿法制粒压片是最常用的片剂制备方法。流程：原辅料混合→加入黏合剂制软材→制粒（过筛）→干燥→整粒→加入润滑剂→压片。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药剂学', '固体制剂', '制粒']
  },
  {
    content: '缓释制剂的释放动力学通常是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 4,
    options: [
      { label: 'A', content: '一级动力学', isCorrect: true },
      { label: 'B', content: '零级动力学', isCorrect: false },
      { label: 'C', content: '二级动力学', isCorrect: false },
      { label: 'D', content: '不规则释放', isCorrect: false }
    ],
    answer: 'A',
    explanation: '缓释制剂是非恒速释放（一级动力学），控释制剂是恒速释放（零级动力学）。缓释制剂减少给药次数，但不能维持恒定的血药浓度。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['药剂学', '固体制剂', '缓释']
  },
  {
    content: '下列不宜制成胶囊剂的药物是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 4,
    options: [
      { label: 'A', content: '水溶液或稀醇溶液', isCorrect: true },
      { label: 'B', content: '油性液体', isCorrect: false },
      { label: 'C', content: '固体粉末', isCorrect: false },
      { label: 'D', content: '颗粒状药物', isCorrect: false }
    ],
    answer: 'A',
    explanation: '水溶液或稀醇溶液会使胶囊壳溶解，不宜制成胶囊。易风化药物（使胶囊壳变脆）和易潮解药物（使胶囊壳软化）也不宜制成胶囊。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药剂学', '固体制剂', '胶囊剂']
  },

  // ========== 大量补充题目 - 半固体制剂 ==========
  {
    content: '软膏剂的制备方法不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 5,
    options: [
      { label: 'A', content: '研和法', isCorrect: false },
      { label: 'B', content: '熔和法', isCorrect: false },
      { label: 'C', content: '乳化法', isCorrect: false },
      { label: 'D', content: '压片法', isCorrect: true }
    ],
    answer: 'D',
    explanation: '软膏剂的制备方法有研和法（小量制备）、熔和法（热熔基质）、乳化法（乳剂型基质）。压片法是片剂的制备方法。',
    difficulty: 1, importance: 'medium', source: '练习题', tags: ['药剂学', '半固体制剂', '软膏剂']
  },
  {
    content: '栓剂全身作用的特点是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 5,
    options: [
      { label: 'A', content: '可减少首过效应', isCorrect: true },
      { label: 'B', content: '起效最快', isCorrect: false },
      { label: 'C', content: '剂量最大', isCorrect: false },
      { label: 'D', content: '只产生局部作用', isCorrect: false }
    ],
    answer: 'A',
    explanation: '栓剂经直肠给药，药物通过直肠下静脉和肛门静脉→髂内静脉→下腔静脉→体循环，约50%-70%不经过肝脏首过效应。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2023, tags: ['药剂学', '半固体制剂', '栓剂']
  },

  // ========== 大量补充题目 - 气雾剂与稳定性 ==========
  {
    content: '气雾剂的抛射剂是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 6,
    options: [
      { label: 'A', content: '氢氟烷烃（HFA）', isCorrect: true },
      { label: 'B', content: '氮气', isCorrect: false },
      { label: 'C', content: '氧气', isCorrect: false },
      { label: 'D', content: '水蒸气', isCorrect: false }
    ],
    answer: 'A',
    explanation: '氢氟烷烃（HFA）是目前最常用的气雾剂抛射剂，替代了对臭氧层有破坏作用的氟氯烷烃（CFC）。常用的有HFA-134a和HFA-227。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2023, tags: ['药剂学', '气雾剂', '抛射剂']
  },
  {
    content: '加速试验的条件是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 7,
    options: [
      { label: 'A', content: '40℃±2℃/RH 75%±5%/6个月', isCorrect: true },
      { label: 'B', content: '25℃±2℃/RH 60%±5%/24个月', isCorrect: false },
      { label: 'C', content: '60℃/RH 90%/3个月', isCorrect: false },
      { label: 'D', content: '37℃±1℃/RH 65%±5%/3个月', isCorrect: false }
    ],
    answer: 'A',
    explanation: '加速试验条件为40℃±2℃/RH 75%±5%，持续6个月，用于预测药物有效期。长期试验条件为25℃±2℃/RH 60%±5%，持续24个月，用于确定有效期。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药剂学', '稳定性', '加速试验']
  },
  {
    content: '药物化学降解的主要途径不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 7,
    options: [
      { label: 'A', content: '水解', isCorrect: false },
      { label: 'B', content: '氧化', isCorrect: false },
      { label: 'C', content: '挥发', isCorrect: true },
      { label: 'D', content: '异构化', isCorrect: false }
    ],
    answer: 'C',
    explanation: '药物化学降解的主要途径包括水解、氧化、异构化、聚合、脱羧等。挥发是物理变化（液态→气态），不属于化学降解。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药剂学', '稳定性', '降解途径']
  },

  // ========== 补充题目 - 制剂新技术和生物药剂学 ==========
  {
    content: '固体分散体的主要作用不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 4,
    options: [
      { label: 'A', content: '增加难溶性药物的溶出速度', isCorrect: false },
      { label: 'B', content: '提高药物的生物利用度', isCorrect: false },
      { label: 'C', content: '延缓药物释放', isCorrect: false },
      { label: 'D', content: '增加药物的化学稳定性', isCorrect: true }
    ],
    answer: 'D',
    explanation: '固体分散体的作用包括增加溶出、提高生物利用度、延缓或速释等。但不一定能增加化学稳定性，药物分散度高反而可能加速降解。',
    difficulty: 3, importance: 'medium', source: '练习题', tags: ['药剂学', '新技术', '固体分散体']
  },
  {
    content: '环糊精包合物的主要作用是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 4,
    options: [
      { label: 'A', content: '增加药物的溶解度和稳定性', isCorrect: true },
      { label: 'B', content: '使药物变性', isCorrect: false },
      { label: 'C', content: '降低药物活性', isCorrect: false },
      { label: 'D', content: '增加药物毒性', isCorrect: false }
    ],
    answer: 'A',
    explanation: '环糊精包合物将药物分子包合在其疏水性空腔内→增加溶解度、提高稳定性、减少刺激性、掩盖不良臭味。常用的有β-环糊精。',
    difficulty: 3, importance: 'medium', source: '练习题', tags: ['药剂学', '新技术', '包合物']
  },
  {
    content: '生物利用度的含义是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 1,
    options: [
      { label: 'A', content: '药物吸收进入体循环的相对量和速度', isCorrect: true },
      { label: 'B', content: '药物在体内的代谢速度', isCorrect: false },
      { label: 'C', content: '药物的排泄速度', isCorrect: false },
      { label: 'D', content: '药物与受体的结合能力', isCorrect: false }
    ],
    answer: 'A',
    explanation: '生物利用度（F）是指药物经血管外给药后被吸收进入体循环的相对量和速度。静脉注射的F为100%。绝对生物利用度和相对生物利用度是两种计算方式。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药剂学', '生物药剂学', '生物利用度']
  },
  {
    content: '微囊的制备方法不包括',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 4,
    options: [
      { label: 'A', content: '单凝聚法', isCorrect: false },
      { label: 'B', content: '复凝聚法', isCorrect: false },
      { label: 'C', content: '喷雾干燥法', isCorrect: false },
      { label: 'D', content: '压片法', isCorrect: true }
    ],
    answer: 'D',
    explanation: '微囊的制备方法包括物理化学法（单凝聚法、复凝聚法）、物理机械法（喷雾干燥法、喷雾凝结法）和化学法（界面缩聚法）。压片法是片剂制备方法。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药剂学', '新技术', '微囊']
  },
  {
    content: '渗透泵片的释药机制是',
    type: 'single', subjectCode: 'pharmaceutics', chapterOrder: 4,
    options: [
      { label: 'A', content: '渗透压驱动，零级释放', isCorrect: true },
      { label: 'B', content: '扩散控制，一级释放', isCorrect: false },
      { label: 'C', content: '溶蚀控制', isCorrect: false },
      { label: 'D', content: 'pH敏感释放', isCorrect: false }
    ],
    answer: 'A',
    explanation: '渗透泵片利用渗透压驱动药物恒速释放（零级动力学）。片芯含药物和渗透压活性物质，外包半透膜，水渗透进入后产生渗透压将药物从释药孔推出。',
    difficulty: 4, importance: 'high', source: '真题', year: 2022, tags: ['药剂学', '新技术', '渗透泵']
  }
];

module.exports = pharmaceuticsQuestions;
