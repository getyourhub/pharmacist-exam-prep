const pharmacologyQuestions = [
  // ========== 第一章 药理学总论 ==========
  {
    content: '药物的治疗指数是指',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: 'ED50/LD50', isCorrect: false },
      { label: 'B', content: 'LD50/ED50', isCorrect: true },
      { label: 'C', content: 'ED95/LD5', isCorrect: false },
      { label: 'D', content: 'LD5/ED95', isCorrect: false }
    ],
    answer: 'B',
    explanation: '治疗指数（TI）= LD50/ED50，是衡量药物安全性的重要指标。治疗指数越大，药物的安全性越高。',
    difficulty: 3, importance: 'high', source: '真题', year: 2016, tags: ['药理学', '总论', '治疗指数']
  },
  {
    content: '药物的效价强度是指',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '引起等效反应的药物剂量', isCorrect: true },
      { label: 'B', content: '药物的最大效应', isCorrect: false },
      { label: 'C', content: '药物的安全范围', isCorrect: false },
      { label: 'D', content: '药物的治疗指数', isCorrect: false }
    ],
    answer: 'A',
    explanation: '效价强度是指引起等效反应的药物剂量，剂量越小效价强度越大。与效能（最大效应）是不同概念。',
    difficulty: 3, importance: 'high', source: '真题', year: 2017, tags: ['药理学', '总论', '效价强度']
  },
  {
    content: '药物的首过效应发生在',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '口服给药后', isCorrect: true },
      { label: 'B', content: '舌下给药后', isCorrect: false },
      { label: 'C', content: '直肠给药后', isCorrect: false },
      { label: 'D', content: '静脉给药后', isCorrect: false }
    ],
    answer: 'A',
    explanation: '首过效应是指口服药物在胃肠道吸收后，经门静脉进入肝脏，在肝药酶的作用下部分药物被代谢灭活，使进入体循环的药量减少的现象。',
    difficulty: 2, importance: 'high', source: '真题', year: 2018, tags: ['药理学', '总论', '首过效应']
  },
  {
    content: '下列关于药物半衰期的叙述，错误的是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '是指血浆药物浓度下降一半所需的时间', isCorrect: false },
      { label: 'B', content: '反映药物在体内的消除速度', isCorrect: false },
      { label: 'C', content: '一级动力学消除的药物半衰期是恒定的', isCorrect: false },
      { label: 'D', content: '零级动力学消除的药物半衰期是恒定的', isCorrect: true }
    ],
    answer: 'D',
    explanation: '零级动力学消除的药物半衰期不是恒定的，随血药浓度变化而变化。一级动力学消除的药物半衰期才是恒定的。',
    difficulty: 3, importance: 'medium', source: '真题', year: 2019, tags: ['药理学', '总论', '半衰期']
  },
  {
    content: '受体激动剂的特点是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '与受体有亲和力，有内在活性', isCorrect: true },
      { label: 'B', content: '与受体有亲和力，无内在活性', isCorrect: false },
      { label: 'C', content: '与受体无亲和力，有内在活性', isCorrect: false },
      { label: 'D', content: '与受体无亲和力，无内在活性', isCorrect: false }
    ],
    answer: 'A',
    explanation: '受体激动剂与受体有亲和力，同时具有内在活性（效应力），能激活受体产生效应。',
    difficulty: 2, importance: 'high', source: '真题', year: 2020, tags: ['药理学', '总论', '受体']
  },
  // ========== 第二章 传出神经系统药理学 ==========
  {
    content: '阿托品对下列哪种平滑肌松弛作用最强',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '胃肠道平滑肌', isCorrect: true },
      { label: 'B', content: '胆道平滑肌', isCorrect: false },
      { label: 'C', content: '输尿管平滑肌', isCorrect: false },
      { label: 'D', content: '子宫平滑肌', isCorrect: false }
    ],
    answer: 'A',
    explanation: '阿托品对胃肠道平滑肌的解痉作用最强，对胆道、输尿管和子宫平滑肌的作用较弱。',
    difficulty: 3, importance: 'high', source: '真题', year: 2016, tags: ['药理学', '传出神经', '阿托品']
  },
  {
    content: '毛果芸香碱对眼睛的作用是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '缩瞳、降低眼压、调节痉挛', isCorrect: true },
      { label: 'B', content: '扩瞳、升高眼压、调节麻痹', isCorrect: false },
      { label: 'C', content: '缩瞳、升高眼压、调节麻痹', isCorrect: false },
      { label: 'D', content: '扩瞳、降低眼压、调节痉挛', isCorrect: false }
    ],
    answer: 'A',
    explanation: '毛果芸香碱激动M受体，使瞳孔缩小，虹膜向中心拉紧，前房角间隙扩大，房水易于流出，眼压降低。同时使睫状肌收缩，晶状体变凸，视近物清楚（调节痉挛）。',
    difficulty: 3, importance: 'high', source: '真题', year: 2017, tags: ['药理学', '传出神经', '毛果芸香碱']
  },
  {
    content: '新斯的明最强的作用是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '兴奋骨骼肌', isCorrect: true },
      { label: 'B', content: '兴奋胃肠道平滑肌', isCorrect: false },
      { label: 'C', content: '兴奋膀胱平滑肌', isCorrect: false },
      { label: 'D', content: '减慢心率', isCorrect: false }
    ],
    answer: 'A',
    explanation: '新斯的明抑制胆碱酯酶，使乙酰胆碱堆积。对骨骼肌的兴奋作用最强，因为它还能直接激动骨骼肌运动终板上的N2受体。',
    difficulty: 3, importance: 'high', source: '真题', year: 2018, tags: ['药理学', '传出神经', '新斯的明']
  },
  {
    content: '有机磷中毒的机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '抑制胆碱酯酶', isCorrect: true },
      { label: 'B', content: '激活胆碱酯酶', isCorrect: false },
      { label: 'C', content: '抑制单胺氧化酶', isCorrect: false },
      { label: 'D', content: '激活单胺氧化酶', isCorrect: false }
    ],
    answer: 'A',
    explanation: '有机磷酸酯类与胆碱酯酶结合，形成难以水解的磷酰化胆碱酯酶，使酶失去活性，导致乙酰胆碱在体内大量堆积，引起中毒症状。',
    difficulty: 2, importance: 'high', source: '真题', year: 2019, tags: ['药理学', '传出神经', '有机磷']
  },
  {
    content: '肾上腺素对血管的作用，下列哪项是正确的',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '皮肤、黏膜血管收缩，骨骼肌血管扩张', isCorrect: true },
      { label: 'B', content: '所有血管均收缩', isCorrect: false },
      { label: 'C', content: '所有血管均扩张', isCorrect: false },
      { label: 'D', content: '皮肤、黏膜血管扩张，骨骼肌血管收缩', isCorrect: false }
    ],
    answer: 'A',
    explanation: '肾上腺素激动α受体使皮肤、黏膜、内脏血管收缩；激动β2受体使骨骼肌、肝脏血管扩张。小剂量时β效应占优势，大剂量时α效应占优势。',
    difficulty: 3, importance: 'high', source: '真题', year: 2020, tags: ['药理学', '传出神经', '肾上腺素']
  },
  {
    content: '下列药物中，属于选择性β1受体阻断药的是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '普萘洛尔', isCorrect: false },
      { label: 'B', content: '阿替洛尔', isCorrect: true },
      { label: 'C', content: '拉贝洛尔', isCorrect: false },
      { label: 'D', content: '噻吗洛尔', isCorrect: false }
    ],
    answer: 'B',
    explanation: '阿替洛尔是选择性β1受体阻断药，对β1受体有较高的选择性。普萘洛尔是非选择性β受体阻断药，拉贝洛尔是α、β受体阻断药。',
    difficulty: 3, importance: 'high', source: '真题', year: 2021, tags: ['药理学', '传出神经', 'β受体阻断药']
  },
  // ========== 第三章 中枢神经系统药理学 ==========
  {
    content: '地西泮的作用机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '增强GABA与GABAA受体结合，使Cl-通道开放频率增加', isCorrect: true },
      { label: 'B', content: '直接激活GABAA受体', isCorrect: false },
      { label: 'C', content: '抑制GABA的代谢', isCorrect: false },
      { label: 'D', content: '促进GABA的释放', isCorrect: false }
    ],
    answer: 'A',
    explanation: '地西泮与苯二氮卓受体结合，增强GABA与GABAA受体的结合力，使Cl-通道开放频率增加，Cl-内流增多，神经元超极化，产生抑制效应。',
    difficulty: 4, importance: 'high', source: '真题', year: 2017, tags: ['药理学', '中枢神经', '地西泮']
  },
  {
    content: '氯丙嗪引起的锥体外系反应不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '帕金森综合征', isCorrect: false },
      { label: 'B', content: '急性肌张力障碍', isCorrect: false },
      { label: 'C', content: '静坐不能', isCorrect: false },
      { label: 'D', content: '体位性低血压', isCorrect: true }
    ],
    answer: 'D',
    explanation: '体位性低血压是氯丙嗪阻断α受体引起的降压作用，不属于锥体外系反应。锥体外系反应包括帕金森综合征、急性肌张力障碍、静坐不能和迟发性运动障碍。',
    difficulty: 3, importance: 'high', source: '真题', year: 2018, tags: ['药理学', '中枢神经', '氯丙嗪']
  },
  {
    content: '吗啡的镇痛机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '激动中枢阿片受体', isCorrect: true },
      { label: 'B', content: '抑制前列腺素合成', isCorrect: false },
      { label: 'C', content: '阻断中枢多巴胺受体', isCorrect: false },
      { label: 'D', content: '抑制中枢胆碱酯酶', isCorrect: false }
    ],
    answer: 'A',
    explanation: '吗啡激动中枢阿片受体（主要是μ受体），模拟内源性阿片肽的作用，产生强大的镇痛效应。',
    difficulty: 3, importance: 'high', source: '真题', year: 2019, tags: ['药理学', '中枢神经', '吗啡']
  },
  {
    content: '阿司匹林的解热镇痛机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '抑制环氧合酶，减少前列腺素合成', isCorrect: true },
      { label: 'B', content: '抑制中枢阿片受体', isCorrect: false },
      { label: 'C', content: '阻断中枢多巴胺受体', isCorrect: false },
      { label: 'D', content: '抑制中枢GABA受体', isCorrect: false }
    ],
    answer: 'A',
    explanation: '阿司匹林不可逆地抑制环氧合酶（COX），减少前列腺素（PG）的合成。PG是重要的致痛、致热、致炎物质。',
    difficulty: 2, importance: 'high', source: '真题', year: 2020, tags: ['药理学', '中枢神经', '阿司匹林']
  },
  {
    content: '下列药物中，属于5-HT再摄取抑制剂（SSRI）的是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '氟西汀', isCorrect: true },
      { label: 'B', content: '阿米替林', isCorrect: false },
      { label: 'C', content: '氯丙嗪', isCorrect: false },
      { label: 'D', content: '碳酸锂', isCorrect: false }
    ],
    answer: 'A',
    explanation: '氟西汀（百忧解）是选择性5-HT再摄取抑制剂（SSRI），是临床常用的抗抑郁药。阿米替林是三环类抗抑郁药。',
    difficulty: 2, importance: 'high', source: '真题', year: 2021, tags: ['药理学', '中枢神经', 'SSRI']
  },
  // ========== 第四章 心血管系统药理学 ==========
  {
    content: '硝酸甘油抗心绞痛的主要机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '释放NO，扩张血管，降低心肌耗氧量', isCorrect: true },
      { label: 'B', content: '阻断β受体，减慢心率', isCorrect: false },
      { label: 'C', content: '阻断钙通道，抑制心肌收缩', isCorrect: false },
      { label: 'D', content: '抑制ACE，减少AngII生成', isCorrect: false }
    ],
    answer: 'A',
    explanation: '硝酸甘油在体内代谢产生NO，激活鸟苷酸环化酶，使cGMP增加，血管平滑肌松弛。主要扩张静脉，减少回心血量，降低前负荷和心肌耗氧量。',
    difficulty: 3, importance: 'high', source: '真题', year: 2016, tags: ['药理学', '心血管', '硝酸甘油']
  },
  {
    content: '卡托普利的降压机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '抑制血管紧张素转化酶（ACE）', isCorrect: true },
      { label: 'B', content: '阻断血管紧张素II受体', isCorrect: false },
      { label: 'C', content: '阻断β受体', isCorrect: false },
      { label: 'D', content: '阻断钙通道', isCorrect: false }
    ],
    answer: 'A',
    explanation: '卡托普利是血管紧张素转化酶抑制剂（ACEI），抑制ACE使AngI不能转化为AngII，同时减少缓激肽的降解，产生降压作用。',
    difficulty: 3, importance: 'high', source: '真题', year: 2017, tags: ['药理学', '心血管', 'ACEI']
  },
  {
    content: '下列关于利尿药的分类，氢氯噻嗪属于',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '高效利尿药', isCorrect: false },
      { label: 'B', content: '中效利尿药（噻嗪类）', isCorrect: true },
      { label: 'C', content: '低效利尿药', isCorrect: false },
      { label: 'D', content: '渗透性利尿药', isCorrect: false }
    ],
    answer: 'B',
    explanation: '氢氯噻嗪属于中效利尿药（噻嗪类），作用于远曲小管近端，抑制Na+-Cl-共转运体。高效利尿药如呋塞米作用于髓袢升支粗段。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2018, tags: ['药理学', '心血管', '利尿药']
  },
  {
    content: '地高辛加强心肌收缩力的机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '抑制Na+-K+-ATP酶，使细胞内Ca2+增加', isCorrect: true },
      { label: 'B', content: '激活β受体', isCorrect: false },
      { label: 'C', content: '抑制磷酸二酯酶', isCorrect: false },
      { label: 'D', content: '直接开放钙通道', isCorrect: false }
    ],
    answer: 'A',
    explanation: '地高辛抑制心肌细胞膜上的Na+-K+-ATP酶，使细胞内Na+升高，通过Na+-Ca2+交换使细胞内Ca2+增加，从而增强心肌收缩力。',
    difficulty: 4, importance: 'high', source: '真题', year: 2019, tags: ['药理学', '心血管', '强心苷']
  },
  {
    content: '他汀类药物的降脂机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '抑制HMG-CoA还原酶，减少胆固醇合成', isCorrect: true },
      { label: 'B', content: '抑制脂肪酶，减少脂肪吸收', isCorrect: false },
      { label: 'C', content: '结合胆汁酸，促进胆固醇排泄', isCorrect: false },
      { label: 'D', content: '激活脂蛋白脂酶，加速甘油三酯分解', isCorrect: false }
    ],
    answer: 'A',
    explanation: '他汀类药物竞争性抑制HMG-CoA还原酶（胆固醇合成的限速酶），减少肝内胆固醇合成，使LDL受体表达增加，血浆LDL-C降低。',
    difficulty: 3, importance: 'high', source: '真题', year: 2020, tags: ['药理学', '心血管', '他汀类']
  },
  {
    content: '华法林的抗凝机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '抑制维生素K环氧化物还原酶，干扰维生素K依赖性凝血因子的合成', isCorrect: true },
      { label: 'B', content: '直接抑制凝血酶', isCorrect: false },
      { label: 'C', content: '激活抗凝血酶III', isCorrect: false },
      { label: 'D', content: '抑制血小板聚集', isCorrect: false }
    ],
    answer: 'A',
    explanation: '华法林抑制维生素K环氧化物还原酶，使维生素K不能还原为氢醌型，影响维生素K依赖性凝血因子（II、VII、IX、X）的γ-羧化，使其无活性。',
    difficulty: 4, importance: 'high', source: '真题', year: 2021, tags: ['药理学', '心血管', '华法林']
  },
  // ========== 第五章 内脏系统药理学 ==========
  {
    content: '下列关于奥美拉唑的叙述，正确的是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 5,
    options: [
      { label: 'A', content: '是质子泵抑制剂，抑制胃酸分泌', isCorrect: true },
      { label: 'B', content: '是H2受体阻断剂', isCorrect: false },
      { label: 'C', content: '是胃黏膜保护剂', isCorrect: false },
      { label: 'D', content: '是抗幽门螺杆菌药物', isCorrect: false }
    ],
    answer: 'A',
    explanation: '奥美拉唑是质子泵抑制剂（PPI），不可逆地抑制胃壁细胞H+/K+-ATP酶（质子泵），是最强的胃酸分泌抑制剂。',
    difficulty: 2, importance: 'high', source: '真题', year: 2017, tags: ['药理学', '内脏', 'PPI']
  },
  {
    content: '氨茶碱平喘的主要机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 5,
    options: [
      { label: 'A', content: '抑制磷酸二酯酶，使cAMP增加', isCorrect: true },
      { label: 'B', content: '激动β2受体', isCorrect: false },
      { label: 'C', content: '阻断M受体', isCorrect: false },
      { label: 'D', content: '抑制过敏介质释放', isCorrect: false }
    ],
    answer: 'A',
    explanation: '氨茶碱抑制磷酸二酯酶（PDE），使cAMP降解减少，细胞内cAMP增加，支气管平滑肌松弛。此外还有强心、利尿和兴奋中枢的作用。',
    difficulty: 3, importance: 'medium', source: '真题', year: 2018, tags: ['药理学', '内脏', '氨茶碱']
  },
  // ========== 第六章 内分泌系统药理学 ==========
  {
    content: '糖皮质激素的抗炎机制不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 6,
    options: [
      { label: 'A', content: '抑制磷脂酶A2', isCorrect: false },
      { label: 'B', content: '稳定溶酶体膜', isCorrect: false },
      { label: 'C', content: '抑制免疫细胞功能', isCorrect: false },
      { label: 'D', content: '直接杀灭病原微生物', isCorrect: true }
    ],
    answer: 'D',
    explanation: '糖皮质激素有强大的抗炎作用，但不能直接杀灭病原微生物。其抗炎机制包括抑制磷脂酶A2、稳定溶酶体膜、收缩血管、抑制免疫细胞功能等。',
    difficulty: 3, importance: 'high', source: '真题', year: 2019, tags: ['药理学', '内分泌', '糖皮质激素']
  },
  {
    content: '胰岛素的降糖机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 6,
    options: [
      { label: 'A', content: '促进葡萄糖的摄取和利用，抑制糖原分解和糖异生', isCorrect: true },
      { label: 'B', content: '抑制胰岛素的分泌', isCorrect: false },
      { label: 'C', content: '促进胰高血糖素的分泌', isCorrect: false },
      { label: 'D', content: '减少肠道对葡萄糖的吸收', isCorrect: false }
    ],
    answer: 'A',
    explanation: '胰岛素促进组织对葡萄糖的摄取和利用，促进糖原合成，抑制糖原分解和糖异生，从而降低血糖。',
    difficulty: 2, importance: 'high', source: '真题', year: 2020, tags: ['药理学', '内分泌', '胰岛素']
  },
  {
    content: '二甲双胍的降糖机制主要是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 6,
    options: [
      { label: 'A', content: '减少肝糖输出，增加外周组织对葡萄糖的利用', isCorrect: true },
      { label: 'B', content: '促进胰岛素分泌', isCorrect: false },
      { label: 'C', content: '抑制α-葡萄糖苷酶', isCorrect: false },
      { label: 'D', content: '激活PPAR-γ受体', isCorrect: false }
    ],
    answer: 'A',
    explanation: '二甲双胍主要通过减少肝脏葡萄糖输出（抑制糖异生）和增加外周组织（特别是肌肉）对葡萄糖的利用来降低血糖。不促进胰岛素分泌，故不引起低血糖。',
    difficulty: 3, importance: 'high', source: '真题', year: 2021, tags: ['药理学', '内分泌', '二甲双胍']
  },
  // ========== 第七章 化学治疗药物 ==========
  {
    content: '青霉素G的抗菌机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '抑制细菌细胞壁的合成', isCorrect: true },
      { label: 'B', content: '抑制细菌蛋白质的合成', isCorrect: false },
      { label: 'C', content: '抑制细菌核酸的合成', isCorrect: false },
      { label: 'D', content: '损伤细菌细胞膜', isCorrect: false }
    ],
    answer: 'A',
    explanation: '青霉素与青霉素结合蛋白（PBPs）结合，抑制转肽酶，阻止肽聚糖的交叉联结，使细菌细胞壁缺损，水分渗入，细菌膨胀裂解。',
    difficulty: 2, importance: 'high', source: '真题', year: 2016, tags: ['药理学', '化疗', '青霉素']
  },
  {
    content: '氨基糖苷类抗生素的主要不良反应是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '耳毒性和肾毒性', isCorrect: true },
      { label: 'B', content: '肝毒性和心脏毒性', isCorrect: false },
      { label: 'C', content: '骨髓抑制和胃肠道反应', isCorrect: false },
      { label: 'D', content: '过敏反应和二重感染', isCorrect: false }
    ],
    answer: 'A',
    explanation: '氨基糖苷类抗生素（如庆大霉素、链霉素）的主要不良反应是耳毒性（损害第八对脑神经）和肾毒性（损害近曲小管）。',
    difficulty: 2, importance: 'high', source: '真题', year: 2017, tags: ['药理学', '化疗', '氨基糖苷类']
  },
  {
    content: '喹诺酮类药物的抗菌机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '抑制细菌DNA旋转酶和拓扑异构酶IV', isCorrect: true },
      { label: 'B', content: '抑制细菌RNA聚合酶', isCorrect: false },
      { label: 'C', content: '抑制细菌二氢叶酸还原酶', isCorrect: false },
      { label: 'D', content: '抑制细菌细胞壁合成', isCorrect: false }
    ],
    answer: 'A',
    explanation: '喹诺酮类药物抑制细菌DNA旋转酶（革兰阴性菌）和拓扑异构酶IV（革兰阳性菌），阻碍DNA复制，产生杀菌作用。',
    difficulty: 4, importance: 'high', source: '真题', year: 2019, tags: ['药理学', '化疗', '喹诺酮']
  },
  {
    content: '异烟肼抗结核的特点不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '对结核分枝杆菌有高度选择性', isCorrect: false },
      { label: 'B', content: '穿透力强，能渗入细胞内', isCorrect: false },
      { label: 'C', content: '单独使用易产生耐药性', isCorrect: false },
      { label: 'D', content: '对其他细菌也有强大的抗菌作用', isCorrect: true }
    ],
    answer: 'D',
    explanation: '异烟肼对结核分枝杆菌有高度选择性，对其他细菌几乎无作用。穿透力强，能渗入细胞内和干酪样病灶中。单独使用易产生耐药性。',
    difficulty: 3, importance: 'high', source: '真题', year: 2020, tags: ['药理学', '化疗', '异烟肼']
  },
  {
    content: '下列关于抗菌药物联合应用的指征，错误的是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '病因未明的严重感染', isCorrect: false },
      { label: 'B', content: '单一抗菌药物不能控制的混合感染', isCorrect: false },
      { label: 'C', content: '一般性感染', isCorrect: true },
      { label: 'D', content: '长期用药可能产生耐药者', isCorrect: false }
    ],
    answer: 'C',
    explanation: '一般性感染不需要联合用药，单一抗菌药物即可控制。联合用药的指征包括：病因未明的严重感染、混合感染、需长期用药的慢性感染等。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2022, tags: ['药理学', '化疗', '联合用药']
  },
  // 练习题 - 补充各章知识点
  {
    content: '药物的生物利用度是指',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '药物被吸收进入体循环的相对量和速度', isCorrect: true },
      { label: 'B', content: '药物在体内的代谢速度', isCorrect: false },
      { label: 'C', content: '药物的排泄速度', isCorrect: false },
      { label: 'D', content: '药物与血浆蛋白结合的比例', isCorrect: false }
    ],
    answer: 'A',
    explanation: '生物利用度（F）是指药物经血管外给药后，被吸收进入体循环的相对量和速度。静脉注射的生物利用度为100%。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药理学', '总论', '生物利用度']
  },
  {
    content: '竞争性拮抗剂的特点是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '与激动剂竞争同一受体，使激动剂量效曲线右移', isCorrect: true },
      { label: 'B', content: '使激动剂的最大效应降低', isCorrect: false },
      { label: 'C', content: '与受体结合后不可逆', isCorrect: false },
      { label: 'D', content: '不影响激动剂的效价强度', isCorrect: false }
    ],
    answer: 'A',
    explanation: '竞争性拮抗剂与激动剂竞争同一受体的结合位点，可被大剂量激动剂克服，使激动剂量效曲线平行右移，但最大效应不变。',
    difficulty: 3, importance: 'medium', source: '练习题', tags: ['药理学', '总论', '拮抗剂']
  },
  {
    content: '去甲肾上腺素的主要不良反应是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '局部组织缺血坏死', isCorrect: true },
      { label: 'B', content: '心律失常', isCorrect: false },
      { label: 'C', content: '中枢兴奋', isCorrect: false },
      { label: 'D', content: '过敏反应', isCorrect: false }
    ],
    answer: 'A',
    explanation: '去甲肾上腺素静脉滴注浓度过高或时间过长，可使局部血管强烈收缩，引起局部组织缺血坏死。如发生外漏，应立即用酚妥拉明局部浸润注射。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药理学', '传出神经', '去甲肾上腺素']
  },
  {
    content: '苯妥英钠的抗癫痫机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '阻滞Na+通道，抑制神经元高频放电', isCorrect: true },
      { label: 'B', content: '增强GABA的作用', isCorrect: false },
      { label: 'C', content: '阻滞Ca2+通道', isCorrect: false },
      { label: 'D', content: '激动阿片受体', isCorrect: false }
    ],
    answer: 'A',
    explanation: '苯妥英钠阻滞电压依赖性Na+通道，抑制神经元的高频反复放电（癫痫灶的异常放电），而对正常的低频放电无影响。',
    difficulty: 3, importance: 'medium', source: '练习题', tags: ['药理学', '中枢神经', '苯妥英钠']
  },
  {
    content: '钙通道阻滞药的代表药物不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '硝苯地平', isCorrect: false },
      { label: 'B', content: '维拉帕米', isCorrect: false },
      { label: 'C', content: '地尔硫卓', isCorrect: false },
      { label: 'D', content: '卡托普利', isCorrect: true }
    ],
    answer: 'D',
    explanation: '卡托普利是ACE抑制剂，不是钙通道阻滞药。硝苯地平（二氢吡啶类）、维拉帕米（苯烷胺类）、地尔硫卓（苯噻氮卓类）是三类代表性的钙通道阻滞药。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药理学', '心血管', '钙通道阻滞药']
  },
  {
    content: 'H1受体阻断药的主要临床应用不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 5,
    options: [
      { label: 'A', content: '过敏性疾病', isCorrect: false },
      { label: 'B', content: '晕动病', isCorrect: false },
      { label: 'C', content: '失眠', isCorrect: false },
      { label: 'D', content: '高血压', isCorrect: true }
    ],
    answer: 'D',
    explanation: 'H1受体阻断药（如苯海拉明、氯苯那敏）主要用于过敏性疾病、晕动病、失眠等，不用于高血压的治疗。',
    difficulty: 2, importance: 'low', source: '练习题', tags: ['药理学', '内脏', 'H1受体阻断药']
  },
  {
    content: '甲状腺激素的合成需要',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 6,
    options: [
      { label: 'A', content: '碘和甲状腺球蛋白', isCorrect: true },
      { label: 'B', content: '钙和白蛋白', isCorrect: false },
      { label: 'C', content: '铁和血红蛋白', isCorrect: false },
      { label: 'D', content: '锌和胰岛素', isCorrect: false }
    ],
    answer: 'A',
    explanation: '甲状腺激素（T3、T4）的合成需要碘作为原料，甲状腺球蛋白作为合成场所。碘的摄取需要Na+/I-同向转运体。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药理学', '内分泌', '甲状腺激素']
  },
  {
    content: '大环内酯类抗生素的代表药物是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '红霉素', isCorrect: true },
      { label: 'B', content: '青霉素', isCorrect: false },
      { label: 'C', content: '庆大霉素', isCorrect: false },
      { label: 'D', content: '四环素', isCorrect: false }
    ],
    answer: 'A',
    explanation: '红霉素是大环内酯类抗生素的代表药物，通过抑制细菌蛋白质合成（与50S亚基结合）发挥抑菌作用。同类药物还有阿奇霉素、克拉霉素等。',
    difficulty: 1, importance: 'medium', source: '练习题', tags: ['药理学', '化疗', '大环内酯类']
  },
  // ========== 补充题目 - 药理学总论 ==========
  {
    content: '药物的效能是指',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '药物的最大效应', isCorrect: true },
      { label: 'B', content: '引起等效反应的剂量', isCorrect: false },
      { label: 'C', content: '药物的安全范围', isCorrect: false },
      { label: 'D', content: '药物的治疗指数', isCorrect: false }
    ],
    answer: 'A',
    explanation: '效能（最大效应）是指药物所能产生的最大效应，反映药物的内在活性。效价强度是指引起等效反应的剂量，两者是不同概念。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '总论', '效能']
  },
  {
    content: '药物的血浆蛋白结合率越高，则',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '药物作用持续时间越长', isCorrect: true },
      { label: 'B', content: '药物起效越快', isCorrect: false },
      { label: 'C', content: '药物代谢越快', isCorrect: false },
      { label: 'D', content: '药物排泄越快', isCorrect: false }
    ],
    answer: 'A',
    explanation: '血浆蛋白结合型药物暂时失去药理活性，起到储存库作用。结合率越高，游离药物浓度越低，消除越慢，作用持续时间越长。',
    difficulty: 3, importance: 'medium', source: '真题', year: 2021, tags: ['药理学', '总论', '蛋白结合']
  },
  {
    content: '肝药酶诱导剂的特点是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '加速自身和其他药物的代谢', isCorrect: true },
      { label: 'B', content: '减慢自身和其他药物的代谢', isCorrect: false },
      { label: 'C', content: '只加速自身代谢', isCorrect: false },
      { label: 'D', content: '只加速其他药物代谢', isCorrect: false }
    ],
    answer: 'A',
    explanation: '肝药酶诱导剂（如利福平、苯巴比妥）能加速CYP450酶系的活性，不仅加速其他药物的代谢，也会加速自身的代谢（自身诱导）。',
    difficulty: 3, importance: 'high', source: '真题', year: 2020, tags: ['药理学', '总论', '肝药酶']
  },
  // ========== 补充题目 - 传出神经系统 ==========
  {
    content: '阿托品的禁忌证不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '青光眼', isCorrect: false },
      { label: 'B', content: '前列腺增生', isCorrect: false },
      { label: 'C', content: '胃肠道痉挛', isCorrect: true },
      { label: 'D', content: '幽门梗阻', isCorrect: false }
    ],
    answer: 'C',
    explanation: '阿托品的禁忌证包括青光眼（升高眼压）、前列腺增生（加重排尿困难）、幽门梗阻（加重胃排空障碍）。胃肠道痉挛是阿托品的适应证。',
    difficulty: 2, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '传出神经', '阿托品']
  },
  {
    content: '异丙肾上腺素的药理作用不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '加快心率', isCorrect: false },
      { label: 'B', content: '扩张支气管', isCorrect: false },
      { label: 'C', content: '收缩血管', isCorrect: true },
      { label: 'D', content: '增强心肌收缩力', isCorrect: false }
    ],
    answer: 'C',
    explanation: '异丙肾上腺素是β受体激动剂，激动β1加快心率、增强收缩力，激动β2扩张支气管和骨骼肌血管（血管扩张而非收缩）。',
    difficulty: 3, importance: 'high', source: '真题', year: 2021, tags: ['药理学', '传出神经', '异丙肾上腺素']
  },
  // ========== 补充题目 - 中枢神经系统 ==========
  {
    content: '左旋多巴治疗帕金森病的机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '在脑内转化为多巴胺，补充纹状体中多巴胺的不足', isCorrect: true },
      { label: 'B', content: '直接激动多巴胺受体', isCorrect: false },
      { label: 'C', content: '抑制多巴胺的代谢', isCorrect: false },
      { label: 'D', content: '促进多巴胺的释放', isCorrect: false }
    ],
    answer: 'A',
    explanation: '左旋多巴是多巴胺的前体，能通过血脑屏障，在脑内经多巴脱羧酶转化为多巴胺，补充纹状体中多巴胺的不足，改善帕金森病症状。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '中枢神经', '左旋多巴']
  },
  {
    content: '丙戊酸钠的抗癫痫机制不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '增强GABA的作用', isCorrect: false },
      { label: 'B', content: '阻滞Na+通道', isCorrect: false },
      { label: 'C', content: '阻滞T型Ca2+通道', isCorrect: false },
      { label: 'D', content: '激动阿片受体', isCorrect: true }
    ],
    answer: 'D',
    explanation: '丙戊酸钠的抗癫痫机制包括增强GABA作用、阻滞Na+通道、阻滞T型Ca2+通道。不涉及阿片受体。',
    difficulty: 3, importance: 'medium', source: '练习题', tags: ['药理学', '中枢神经', '丙戊酸钠']
  },
  // ========== 补充题目 - 心血管系统 ==========
  {
    content: '下列关于硝苯地平的叙述，正确的是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '是二氢吡啶类钙通道阻滞药，主要扩张动脉', isCorrect: true },
      { label: 'B', content: '主要用于抗心律失常', isCorrect: false },
      { label: 'C', content: '主要扩张静脉', isCorrect: false },
      { label: 'D', content: '减慢心率作用最强', isCorrect: false }
    ],
    answer: 'A',
    explanation: '硝苯地平是二氢吡啶类CCB，主要扩张动脉血管，降压效果强。对心脏传导影响小，不用于抗心律失常。维拉帕米和地尔硫卓对心脏作用较强。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '心血管', '硝苯地平']
  },
  {
    content: '下列药物中，具有降压和减少尿蛋白双重作用的是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '氯沙坦', isCorrect: true },
      { label: 'B', content: '硝苯地平', isCorrect: false },
      { label: 'C', content: '氢氯噻嗪', isCorrect: false },
      { label: 'D', content: '普萘洛尔', isCorrect: false }
    ],
    answer: 'A',
    explanation: '氯沙坦是ARB，阻断AngII的AT1受体，扩张出球小动脉，降低肾小球内压，减少尿蛋白。同时具有降压和肾脏保护作用。ACEI（卡托普利）也有此作用。',
    difficulty: 3, importance: 'high', source: '真题', year: 2021, tags: ['药理学', '心血管', 'ARB']
  },
  // ========== 补充题目 - 内脏系统 ==========
  {
    content: '沙丁胺醇的平喘机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 5,
    options: [
      { label: 'A', content: '选择性激动β2受体，松弛支气管平滑肌', isCorrect: true },
      { label: 'B', content: '抑制磷酸二酯酶', isCorrect: false },
      { label: 'C', content: '阻断M受体', isCorrect: false },
      { label: 'D', content: '抑制过敏介质释放', isCorrect: false }
    ],
    answer: 'A',
    explanation: '沙丁胺醇是选择性β2受体激动剂，主要激动支气管平滑肌上的β2受体，使cAMP增加，平滑肌松弛。对β1受体影响小，心血管不良反应少。',
    difficulty: 2, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '内脏', '沙丁胺醇']
  },
  // ========== 补充题目 - 内分泌系统 ==========
  {
    content: '格列本脲的降糖机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 6,
    options: [
      { label: 'A', content: '促进胰岛β细胞释放胰岛素', isCorrect: true },
      { label: 'B', content: '减少肝糖输出', isCorrect: false },
      { label: 'C', content: '延缓碳水化合物吸收', isCorrect: false },
      { label: 'D', content: '增加胰岛素敏感性', isCorrect: false }
    ],
    answer: 'A',
    explanation: '格列本脲是磺脲类降糖药，通过阻断β细胞膜上的ATP敏感性K+通道→去极化→Ca2+内流→胰岛素释放。可引起低血糖。',
    difficulty: 3, importance: 'high', source: '真题', year: 2021, tags: ['药理学', '内分泌', '磺脲类']
  },
  {
    content: '硫脲类抗甲状腺药最严重的不良反应是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 6,
    options: [
      { label: 'A', content: '粒细胞缺乏症', isCorrect: true },
      { label: 'B', content: '药疹', isCorrect: false },
      { label: 'C', content: '肝损害', isCorrect: false },
      { label: 'D', content: '关节痛', isCorrect: false }
    ],
    answer: 'A',
    explanation: '硫脲类抗甲状腺药最严重的不良反应是粒细胞缺乏症，发生率低但可致命。用药期间应定期检查血象，如出现发热、咽痛应立即停药检查。',
    difficulty: 3, importance: 'high', source: '真题', year: 2020, tags: ['药理学', '内分泌', '硫脲类']
  },
  // ========== 补充题目 - 化学治疗药物 ==========
  {
    content: '四环素类抗生素的抗菌机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '与细菌核糖体30S亚基结合，阻止氨基酰-tRNA进入A位', isCorrect: true },
      { label: 'B', content: '与50S亚基结合', isCorrect: false },
      { label: 'C', content: '抑制DNA旋转酶', isCorrect: false },
      { label: 'D', content: '抑制细胞壁合成', isCorrect: false }
    ],
    answer: 'A',
    explanation: '四环素类与细菌核糖体30S亚基结合，阻止氨基酰-tRNA进入A位→抑制蛋白质合成→抑菌。氯霉素和大环内酯类与50S亚基结合。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '化疗', '四环素类']
  },
  {
    content: '万古霉素的抗菌机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '与肽聚糖前体末端D-丙氨酰-D-丙氨酸结合，阻止细胞壁合成', isCorrect: true },
      { label: 'B', content: '抑制DNA旋转酶', isCorrect: false },
      { label: 'C', content: '抑制蛋白质合成', isCorrect: false },
      { label: 'D', content: '损伤细胞膜', isCorrect: false }
    ],
    answer: 'A',
    explanation: '万古霉素与肽聚糖前体末端的D-丙氨酰-D-丙氨酸（D-Ala-D-Ala）结合，阻止肽聚糖的合成和交联。主要用于耐甲氧西林金黄色葡萄球菌（MRSA）感染。',
    difficulty: 4, importance: 'high', source: '真题', year: 2021, tags: ['药理学', '化疗', '万古霉素']
  },
  {
    content: '磺胺类药物的抗菌机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '抑制二氢叶酸合成酶，阻碍叶酸合成', isCorrect: true },
      { label: 'B', content: '抑制二氢叶酸还原酶', isCorrect: false },
      { label: 'C', content: '抑制DNA旋转酶', isCorrect: false },
      { label: 'D', content: '抑制细胞壁合成', isCorrect: false }
    ],
    answer: 'A',
    explanation: '磺胺类药物与PABA竞争二氢叶酸合成酶→阻碍二氢叶酸合成→影响核酸合成→抑菌。甲氧苄啶（TMP）抑制二氢叶酸还原酶，两者合用（复方新诺明）可双重阻断叶酸代谢。',
    difficulty: 3, importance: 'high', source: '真题', year: 2020, tags: ['药理学', '化疗', '磺胺类']
  },
  {
    content: '氯霉素最严重的不良反应是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '再生障碍性贫血', isCorrect: true },
      { label: 'B', content: '灰婴综合征', isCorrect: false },
      { label: 'C', content: '二重感染', isCorrect: false },
      { label: 'D', content: '胃肠道反应', isCorrect: false }
    ],
    answer: 'A',
    explanation: '氯霉素最严重的不良反应是再生障碍性贫血（与剂量无关，不可逆）。灰婴综合征是新生儿和早产儿因肝脏代谢能力不足导致的毒性反应。',
    difficulty: 3, importance: 'high', source: '真题', year: 2019, tags: ['药理学', '化疗', '氯霉素']
  },
  {
    content: '两性霉素B的抗真菌机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '与真菌细胞膜上的麦角固醇结合，形成孔道', isCorrect: true },
      { label: 'B', content: '抑制麦角固醇合成', isCorrect: false },
      { label: 'C', content: '抑制几丁质合成', isCorrect: false },
      { label: 'D', content: '抑制DNA合成', isCorrect: false }
    ],
    answer: 'A',
    explanation: '两性霉素B与真菌细胞膜上的麦角固醇结合，形成跨膜孔道→细胞内容物外漏→真菌死亡。是广谱抗真菌药，但肾毒性大。',
    difficulty: 4, importance: 'medium', source: '真题', year: 2022, tags: ['药理学', '化疗', '两性霉素B']
  },

  // ========== 大量补充题目 - 药理学总论 ==========
  {
    content: '药物的安全范围是指',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '最小有效量与最小中毒量之间的范围', isCorrect: true },
      { label: 'B', content: '治疗量与极量之间的范围', isCorrect: false },
      { label: 'C', content: 'ED50与LD50之间的范围', isCorrect: false },
      { label: 'D', content: '最小有效量与极量之间的范围', isCorrect: false }
    ],
    answer: 'A',
    explanation: '安全范围是指最小有效量与最小中毒量之间的距离。范围越大越安全。治疗指数（TI=LD50/ED50）也可反映安全性，但安全范围更准确。',
    difficulty: 3, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '总论', '安全范围']
  },
  {
    content: '药物的不良反应不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '副作用', isCorrect: false },
      { label: 'B', content: '毒性反应', isCorrect: false },
      { label: 'C', content: '治疗作用', isCorrect: true },
      { label: 'D', content: '变态反应', isCorrect: false }
    ],
    answer: 'C',
    explanation: '不良反应包括副作用、毒性反应、后遗效应、停药反应、变态反应和特异质反应。治疗作用是药物的预期效果，不属于不良反应。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '总论', '不良反应']
  },
  {
    content: '零级动力学消除的特点是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '单位时间内消除的药量恒定', isCorrect: true },
      { label: 'B', content: '单位时间内消除的比例恒定', isCorrect: false },
      { label: 'C', content: '半衰期恒定', isCorrect: false },
      { label: 'D', content: '血药浓度与时间呈线性关系', isCorrect: false }
    ],
    answer: 'A',
    explanation: '零级动力学消除的特点是单位时间内消除的药量恒定（等量消除），半衰期随血药浓度变化而不恒定。常见于乙醇、苯妥英钠等药物在高浓度时。',
    difficulty: 3, importance: 'high', source: '模拟题', tags: ['药理学', '总论', '零级动力学']
  },
  {
    content: '药物的亲和力是指',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '药物与受体结合的能力', isCorrect: true },
      { label: 'B', content: '药物产生最大效应的能力', isCorrect: false },
      { label: 'C', content: '药物的脂溶性', isCorrect: false },
      { label: 'D', content: '药物的水溶性', isCorrect: false }
    ],
    answer: 'A',
    explanation: '亲和力是指药物与受体结合的能力。内在活性是指药物与受体结合后产生效应的能力。激动剂既有亲和力又有内在活性，拮抗剂只有亲和力而无内在活性。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药理学', '总论', '亲和力']
  },
  {
    content: '药物的生物转化主要在哪个器官进行',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '肝脏', isCorrect: true },
      { label: 'B', content: '肾脏', isCorrect: false },
      { label: 'C', content: '肺', isCorrect: false },
      { label: 'D', content: '肠道', isCorrect: false }
    ],
    answer: 'A',
    explanation: '药物的生物转化（代谢）主要在肝脏进行，肝脏含有丰富的药物代谢酶系，特别是CYP450酶系。肾脏是药物排泄的主要器官。',
    difficulty: 1, importance: 'high', source: '练习题', tags: ['药理学', '总论', '生物转化']
  },
  {
    content: '关于药物耐受性的叙述，正确的是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 1,
    options: [
      { label: 'A', content: '连续用药后机体对药物的反应性降低', isCorrect: true },
      { label: 'B', content: '首次用药即出现反应降低', isCorrect: false },
      { label: 'C', content: '停药后反应性立即恢复', isCorrect: false },
      { label: 'D', content: '只有化学药物才会产生耐受性', isCorrect: false }
    ],
    answer: 'A',
    explanation: '耐受性是指连续用药后机体对药物的反应性降低，需要增加剂量才能达到原来的效应。快速耐受性（脱敏）可在短时间内产生。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药理学', '总论', '耐受性']
  },

  // ========== 大量补充题目 - 传出神经系统 ==========
  {
    content: '阿托品对眼睛的作用不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '散瞳', isCorrect: false },
      { label: 'B', content: '升高眼压', isCorrect: false },
      { label: 'C', content: '调节麻痹', isCorrect: false },
      { label: 'D', content: '降低眼压', isCorrect: true }
    ],
    answer: 'D',
    explanation: '阿托品对眼睛的作用是散瞳、升高眼压、调节麻痹。毛果芸香碱才是缩瞳、降低眼压、调节痉挛。阿托品升高眼压，故青光眼患者禁用。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '传出神经', '阿托品']
  },
  {
    content: '下列药物中，属于胆碱酯酶复活药的是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '碘解磷定', isCorrect: true },
      { label: 'B', content: '阿托品', isCorrect: false },
      { label: 'C', content: '新斯的明', isCorrect: false },
      { label: 'D', content: '毛果芸香碱', isCorrect: false }
    ],
    answer: 'A',
    explanation: '碘解磷定（PAM）是胆碱酯酶复活药，能使被有机磷抑制的胆碱酯酶恢复活性。阿托品是对抗M样症状的对症治疗药。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '传出神经', '胆碱酯酶复活药']
  },
  {
    content: '多巴胺的药理作用不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '兴奋心脏', isCorrect: false },
      { label: 'B', content: '扩张肾血管', isCorrect: false },
      { label: 'C', content: '收缩皮肤黏膜血管', isCorrect: false },
      { label: 'D', content: '扩张支气管', isCorrect: true }
    ],
    answer: 'D',
    explanation: '多巴胺激动DA、β1和α受体。小剂量激动DA受体→扩张肾血管；中剂量激动β1→兴奋心脏；大剂量激动α→收缩血管。多巴胺不扩张支气管。',
    difficulty: 3, importance: 'high', source: '模拟题', tags: ['药理学', '传出神经', '多巴胺']
  },
  {
    content: '酚妥拉明的药理作用是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '阻断α受体，扩张血管', isCorrect: true },
      { label: 'B', content: '阻断β受体，减慢心率', isCorrect: false },
      { label: 'C', content: '激动α受体，收缩血管', isCorrect: false },
      { label: 'D', content: '激动β受体，兴奋心脏', isCorrect: false }
    ],
    answer: 'A',
    explanation: '酚妥拉明是短效α受体阻断药，阻断α受体使血管扩张，外周阻力下降，血压降低。临床用于外周血管痉挛性疾病和嗜铬细胞瘤的诊断。',
    difficulty: 3, importance: 'medium', source: '练习题', tags: ['药理学', '传出神经', '酚妥拉明']
  },
  {
    content: '有机磷中毒的M样症状不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '瞳孔缩小', isCorrect: false },
      { label: 'B', content: '流涎出汗', isCorrect: false },
      { label: 'C', content: '肌肉震颤', isCorrect: true },
      { label: 'D', content: '支气管痉挛', isCorrect: false }
    ],
    answer: 'C',
    explanation: 'M样症状包括瞳孔缩小、流涎、出汗、支气管痉挛、心率减慢、腹痛腹泻等。肌肉震颤属于N样症状（N2受体兴奋所致）。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '传出神经', '有机磷']
  },
  {
    content: '普萘洛尔的禁忌证不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 2,
    options: [
      { label: 'A', content: '支气管哮喘', isCorrect: false },
      { label: 'B', content: '心动过缓', isCorrect: false },
      { label: 'C', content: '高血压', isCorrect: true },
      { label: 'D', content: '严重心力衰竭', isCorrect: false }
    ],
    answer: 'C',
    explanation: '普萘洛尔禁用于支气管哮喘（阻断β2致支气管痉挛）、心动过缓（进一步减慢心率）、严重心力衰竭（抑制心肌收缩力）。高血压是普萘洛尔的适应证。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '传出神经', '普萘洛尔']
  },

  // ========== 大量补充题目 - 中枢神经系统 ==========
  {
    content: '巴比妥类药物的作用机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '延长Cl-通道开放时间，增强GABA作用', isCorrect: true },
      { label: 'B', content: '增加Cl-通道开放频率', isCorrect: false },
      { label: 'C', content: '直接开放Cl-通道', isCorrect: false },
      { label: 'D', content: '抑制GABA的降解', isCorrect: false }
    ],
    answer: 'A',
    explanation: '巴比妥类延长Cl-通道开放时间，增强GABA的抑制作用。与苯二氮卓类（增加开放频率）不同。巴比妥类安全范围小，大剂量可直接开放Cl-通道。',
    difficulty: 4, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '中枢神经', '巴比妥类']
  },
  {
    content: '卡马西平的临床应用不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '癫痫大发作', isCorrect: false },
      { label: 'B', content: '三叉神经痛', isCorrect: false },
      { label: 'C', content: '躁狂症', isCorrect: false },
      { label: 'D', content: '癫痫小发作', isCorrect: true }
    ],
    answer: 'D',
    explanation: '卡马西平是大发作首选药之一，也用于三叉神经痛和躁狂症。对小发作（失神发作）无效甚至可能加重。小发作首选乙琥胺。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '中枢神经', '卡马西平']
  },
  {
    content: '氯丙嗪引起体位性低血压的原因是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '阻断α受体', isCorrect: true },
      { label: 'B', content: '阻断β受体', isCorrect: false },
      { label: 'C', content: '阻断M受体', isCorrect: false },
      { label: 'D', content: '阻断D2受体', isCorrect: false }
    ],
    answer: 'A',
    explanation: '氯丙嗪阻断α受体→血管扩张→血压下降。当患者由卧位突然起立时，因血压调节功能障碍而发生体位性低血压。',
    difficulty: 3, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '中枢神经', '氯丙嗪']
  },
  {
    content: '吗啡的禁忌证不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '支气管哮喘', isCorrect: false },
      { label: 'B', content: '颅内压增高', isCorrect: false },
      { label: 'C', content: '急性锐痛', isCorrect: true },
      { label: 'D', content: '分娩止痛', isCorrect: false }
    ],
    answer: 'C',
    explanation: '吗啡禁用于支气管哮喘（抑制呼吸、收缩支气管）、颅内压增高（抑制呼吸致CO2蓄积→脑血管扩张→颅内压更高）、分娩止痛（抑制新生儿呼吸）。急性锐痛是吗啡的适应证。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药理学', '中枢神经', '吗啡']
  },
  {
    content: '阿司匹林预防血栓形成的机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '不可逆抑制血小板COX，减少TXA2合成', isCorrect: true },
      { label: 'B', content: '抑制凝血酶', isCorrect: false },
      { label: 'C', content: '激活纤溶系统', isCorrect: false },
      { label: 'D', content: '抑制维生素K', isCorrect: false }
    ],
    answer: 'A',
    explanation: '小剂量阿司匹林不可逆抑制血小板中的COX-1→TXA2减少→血小板聚集功能降低。血小板无核不能重新合成COX，故作用持续整个血小板寿命期（7-10天）。',
    difficulty: 4, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '中枢神经', '阿司匹林']
  },
  {
    content: '氟西汀的主要不良反应是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 3,
    options: [
      { label: 'A', content: '胃肠道反应和性功能障碍', isCorrect: true },
      { label: 'B', content: '心脏毒性', isCorrect: false },
      { label: 'C', content: '锥体外系反应', isCorrect: false },
      { label: 'D', content: '粒细胞缺乏', isCorrect: false }
    ],
    answer: 'A',
    explanation: '氟西汀是SSRI，不良反应较三环类少，主要为胃肠道反应（恶心、腹泻）、性功能障碍、失眠、头痛等。三环类才有心脏毒性。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药理学', '中枢神经', 'SSRI']
  },

  // ========== 大量补充题目 - 心血管系统 ==========
  {
    content: '氯沙坦的降压机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '阻断血管紧张素II的AT1受体', isCorrect: true },
      { label: 'B', content: '抑制血管紧张素转化酶', isCorrect: false },
      { label: 'C', content: '阻断β受体', isCorrect: false },
      { label: 'D', content: '阻断钙通道', isCorrect: false }
    ],
    answer: 'A',
    explanation: '氯沙坦是ARB，选择性阻断AngII的AT1受体→阻断AngII的缩血管和促醛固酮分泌作用→降压。与ACEI相比，不引起干咳（不影响缓激肽代谢）。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '心血管', 'ARB']
  },
  {
    content: '变异型心绞痛首选药物是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '硝苯地平', isCorrect: true },
      { label: 'B', content: '普萘洛尔', isCorrect: false },
      { label: 'C', content: '硝酸甘油', isCorrect: false },
      { label: 'D', content: '地尔硫卓', isCorrect: false }
    ],
    answer: 'A',
    explanation: '变异型心绞痛由冠脉痉挛引起，首选CCB（钙通道阻滞药）如硝苯地平。CCB能解除冠脉痉挛，扩张冠脉。β受体阻断药可能加重冠脉痉挛。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '心血管', '变异型心绞痛']
  },
  {
    content: '强心苷中毒最早出现的表现是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '胃肠道反应（恶心、呕吐）', isCorrect: true },
      { label: 'B', content: '心脏毒性', isCorrect: false },
      { label: 'C', content: '视觉异常', isCorrect: false },
      { label: 'D', content: '中枢症状', isCorrect: false }
    ],
    answer: 'A',
    explanation: '强心苷中毒最早出现的表现是胃肠道反应（厌食、恶心、呕吐）。最严重的是心脏毒性（各种心律失常）。视觉异常（黄视、绿视）是特征性表现。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '心血管', '强心苷']
  },
  {
    content: '利多卡因主要用于治疗',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '室性心律失常', isCorrect: true },
      { label: 'B', content: '房性心律失常', isCorrect: false },
      { label: 'C', content: '窦性心律失常', isCorrect: false },
      { label: 'D', content: '室上性心动过速', isCorrect: false }
    ],
    answer: 'A',
    explanation: '利多卡因是IB类抗心律失常药，主要用于室性心律失常（如心肌梗死后室性心律失常）。对室上性心律失常效果差。',
    difficulty: 2, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '心血管', '利多卡因']
  },
  {
    content: '贝特类调血脂药主要降低',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '甘油三酯（TG）', isCorrect: true },
      { label: 'B', content: '总胆固醇（TC）', isCorrect: false },
      { label: 'C', content: '低密度脂蛋白（LDL-C）', isCorrect: false },
      { label: 'D', content: '高密度脂蛋白（HDL-C）', isCorrect: false }
    ],
    answer: 'A',
    explanation: '贝特类（非诺贝特、苯扎贝特）激活PPAR-α→促进脂肪酸氧化→降低TG为主。他汀类（辛伐他汀）抑制HMG-CoA还原酶→降低LDL-C为主。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '心血管', '贝特类']
  },
  {
    content: '肝素过量引起的出血，解救药物是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '鱼精蛋白', isCorrect: true },
      { label: 'B', content: '维生素K', isCorrect: false },
      { label: 'C', content: '氨甲苯酸', isCorrect: false },
      { label: 'D', content: '凝血酶', isCorrect: false }
    ],
    answer: 'A',
    explanation: '鱼精蛋白是肝素的特效解毒剂，带正电荷的鱼精蛋白与带负电荷的肝素结合形成稳定复合物→失去抗凝活性。华法林过量用维生素K解救。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '心血管', '肝素']
  },
  {
    content: '硝酸甘油的禁忌证不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 4,
    options: [
      { label: 'A', content: '颅内压增高', isCorrect: false },
      { label: 'B', content: '青光眼', isCorrect: false },
      { label: 'C', content: '稳定性心绞痛', isCorrect: true },
      { label: 'D', content: '严重低血压', isCorrect: false }
    ],
    answer: 'C',
    explanation: '硝酸甘油禁用于颅内压增高（扩张脑血管加重）、青光眼（升高眼压）、严重低血压（进一步降压）。稳定性心绞痛是硝酸甘油的适应证。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药理学', '心血管', '硝酸甘油']
  },

  // ========== 大量补充题目 - 内脏系统 ==========
  {
    content: '呋塞米的利尿机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 5,
    options: [
      { label: 'A', content: '抑制髓袢升支粗段Na-K-2Cl共转运体', isCorrect: true },
      { label: 'B', content: '抑制远曲小管Na-Cl共转运体', isCorrect: false },
      { label: 'C', content: '拮抗醛固酮', isCorrect: false },
      { label: 'D', content: '抑制碳酸酐酶', isCorrect: false }
    ],
    answer: 'A',
    explanation: '呋塞米是高效利尿药，抑制髓袢升支粗段的Na-K-2Cl共转运体→减少NaCl重吸收→产生强大利尿作用。同时促进前列腺素合成→扩张肾血管。',
    difficulty: 3, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '内脏', '呋塞米']
  },
  {
    content: '螺内酯的利尿机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 5,
    options: [
      { label: 'A', content: '拮抗醛固酮受体，减少Na+-K+交换', isCorrect: true },
      { label: 'B', content: '抑制Na-K-2Cl共转运体', isCorrect: false },
      { label: 'C', content: '抑制Na-Cl共转运体', isCorrect: false },
      { label: 'D', content: '抑制碳酸酐酶', isCorrect: false }
    ],
    answer: 'A',
    explanation: '螺内酯是低效利尿药，化学结构与醛固酮相似，竞争性拮抗醛固酮受体→减少Na+-K+交换→排钠保钾。是保钾利尿药。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '内脏', '螺内酯']
  },
  {
    content: '糖皮质激素吸入治疗哮喘的优点不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 5,
    options: [
      { label: 'A', content: '局部抗炎作用强', isCorrect: false },
      { label: 'B', content: '全身不良反应少', isCorrect: false },
      { label: 'C', content: '起效快，适合急性发作', isCorrect: true },
      { label: 'D', content: '可预防哮喘发作', isCorrect: false }
    ],
    answer: 'C',
    explanation: '吸入糖皮质激素（布地奈德）起效慢，需连续用药数天才能发挥最大效果，不适合急性发作。急性发作首选β2受体激动剂（沙丁胺醇）。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '内脏', '糖皮质激素吸入']
  },
  {
    content: '西咪替丁抑制胃酸分泌的机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 5,
    options: [
      { label: 'A', content: '阻断壁细胞H2受体', isCorrect: true },
      { label: 'B', content: '抑制质子泵', isCorrect: false },
      { label: 'C', content: '中和胃酸', isCorrect: false },
      { label: 'D', content: '阻断M受体', isCorrect: false }
    ],
    answer: 'A',
    explanation: '西咪替丁是H2受体阻断药，阻断壁细胞上的H2受体→减少胃酸分泌。奥美拉唑抑制H+/K+-ATP酶（质子泵）。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药理学', '内脏', 'H2受体阻断药']
  },

  // ========== 大量补充题目 - 内分泌系统 ==========
  {
    content: '糖皮质激素的不良反应不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 6,
    options: [
      { label: 'A', content: '骨质疏松', isCorrect: false },
      { label: 'B', content: '消化性溃疡', isCorrect: false },
      { label: 'C', content: '低血糖', isCorrect: true },
      { label: 'D', content: '向心性肥胖', isCorrect: false }
    ],
    answer: 'C',
    explanation: '糖皮质激素促进糖异生→升高血糖→可诱发或加重糖尿病（不是低血糖）。其他不良反应包括骨质疏松、消化性溃疡、向心性肥胖、高血压等。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '内分泌', '糖皮质激素']
  },
  {
    content: '阿卡波糖的降糖机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 6,
    options: [
      { label: 'A', content: '抑制α-葡萄糖苷酶，延缓碳水化合物吸收', isCorrect: true },
      { label: 'B', content: '促进胰岛素分泌', isCorrect: false },
      { label: 'C', content: '减少肝糖输出', isCorrect: false },
      { label: 'D', content: '增加胰岛素敏感性', isCorrect: false }
    ],
    answer: 'A',
    explanation: '阿卡波糖抑制小肠上皮刷状缘的α-葡萄糖苷酶→延缓碳水化合物分解和吸收→降低餐后血糖。应在吃第一口饭时嚼碎服用。',
    difficulty: 2, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '内分泌', '阿卡波糖']
  },
  {
    content: '丙硫氧嘧啶抗甲状腺的作用环节是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 6,
    options: [
      { label: 'A', content: '抑制过氧化物酶，阻止碘的活化和酪氨酸碘化', isCorrect: true },
      { label: 'B', content: '抑制甲状腺激素的释放', isCorrect: false },
      { label: 'C', content: '破坏甲状腺组织', isCorrect: false },
      { label: 'D', content: '阻断TSH受体', isCorrect: false }
    ],
    answer: 'A',
    explanation: '硫脲类（丙硫氧嘧啶）抑制过氧化物酶→阻止碘的活化和酪氨酸碘化→抑制甲状腺激素合成。不影响已合成的激素释放，故起效慢。',
    difficulty: 3, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '内分泌', '硫脲类']
  },
  {
    content: '胰岛素最常见的不良反应是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 6,
    options: [
      { label: 'A', content: '低血糖', isCorrect: true },
      { label: 'B', content: '过敏反应', isCorrect: false },
      { label: 'C', content: '脂肪萎缩', isCorrect: false },
      { label: 'D', content: '胰岛素抵抗', isCorrect: false }
    ],
    answer: 'A',
    explanation: '低血糖是胰岛素最常见也是最危险的不良反应，多因剂量过大或未按时进食引起。应教育患者识别低血糖症状并及时处理。',
    difficulty: 1, importance: 'high', source: '练习题', tags: ['药理学', '内分泌', '胰岛素']
  },

  // ========== 大量补充题目 - 化学治疗药物 ==========
  {
    content: '青霉素G最严重的不良反应是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '过敏性休克', isCorrect: true },
      { label: 'B', content: '赫氏反应', isCorrect: false },
      { label: 'C', content: '二重感染', isCorrect: false },
      { label: 'D', content: '肾毒性', isCorrect: false }
    ],
    answer: 'A',
    explanation: '青霉素G最严重的不良反应是过敏性休克，发生率虽低但可致命。使用前必须做皮试。抢救首选肾上腺素。',
    difficulty: 2, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '化疗', '青霉素']
  },
  {
    content: '头孢菌素类抗生素的特点，错误的是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '一代头孢抗革兰阳性菌作用最强', isCorrect: false },
      { label: 'B', content: '代数越高抗革兰阴性菌作用越强', isCorrect: false },
      { label: 'C', content: '代数越高肾毒性越低', isCorrect: false },
      { label: 'D', content: '所有头孢菌素都对铜绿假单胞菌有效', isCorrect: true }
    ],
    answer: 'D',
    explanation: '并非所有头孢都对铜绿假单胞菌有效。只有三代头孢中的头孢他啶和四代头孢（头孢吡肟）对铜绿假单胞菌有较强作用。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '化疗', '头孢菌素']
  },
  {
    content: '抗结核药物中，可引起视神经炎的是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '乙胺丁醇', isCorrect: true },
      { label: 'B', content: '异烟肼', isCorrect: false },
      { label: 'C', content: '利福平', isCorrect: false },
      { label: 'D', content: '吡嗪酰胺', isCorrect: false }
    ],
    answer: 'A',
    explanation: '乙胺丁醇的主要不良反应是视神经炎（球后视神经炎），表现为视力下降、视野缩小、色觉障碍。用药期间应定期检查视力。',
    difficulty: 3, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '化疗', '乙胺丁醇']
  },
  {
    content: '阿昔洛韦抗病毒的机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '抑制病毒DNA聚合酶', isCorrect: true },
      { label: 'B', content: '抑制病毒RNA聚合酶', isCorrect: false },
      { label: 'C', content: '抑制神经氨酸酶', isCorrect: false },
      { label: 'D', content: '抑制逆转录酶', isCorrect: false }
    ],
    answer: 'A',
    explanation: '阿昔洛韦在感染细胞内被病毒胸苷激酶磷酸化→选择性抑制病毒DNA聚合酶→阻止病毒DNA合成。对HSV和VZV效果好。',
    difficulty: 3, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '化疗', '阿昔洛韦']
  },
  {
    content: '多柔比星（阿霉素）的主要不良反应是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '心脏毒性', isCorrect: true },
      { label: 'B', content: '肾毒性', isCorrect: false },
      { label: 'C', content: '耳毒性', isCorrect: false },
      { label: 'D', content: '肝毒性', isCorrect: false }
    ],
    answer: 'A',
    explanation: '多柔比星（蒽环类抗肿瘤抗生素）最严重的不良反应是心脏毒性，可表现为急性心律失常和慢性心肌病。有终身累积剂量限制。',
    difficulty: 3, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '化疗', '抗肿瘤']
  },
  {
    content: '奥司他韦的抗病毒机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '抑制神经氨酸酶，阻止病毒释放', isCorrect: true },
      { label: 'B', content: '抑制病毒DNA聚合酶', isCorrect: false },
      { label: 'C', content: '抑制病毒逆转录酶', isCorrect: false },
      { label: 'D', content: '阻止病毒吸附', isCorrect: false }
    ],
    answer: 'A',
    explanation: '奥司他韦（达菲）是神经氨酸酶抑制剂，抑制流感病毒神经氨酸酶→阻止子代病毒从宿主细胞释放→减少病毒扩散。用于甲型和乙型流感。',
    difficulty: 3, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '化疗', '奥司他韦']
  },
  {
    content: '甲氨蝶呤的抗肿瘤机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '抑制二氢叶酸还原酶，阻止叶酸代谢', isCorrect: true },
      { label: 'B', content: '抑制DNA聚合酶', isCorrect: false },
      { label: 'C', content: '抑制微管蛋白聚合', isCorrect: false },
      { label: 'D', content: '嵌入DNA', isCorrect: false }
    ],
    answer: 'A',
    explanation: '甲氨蝶呤抑制二氢叶酸还原酶→四氢叶酸生成减少→影响嘌呤和嘧啶合成→抑制DNA合成。是抗代谢药。用亚叶酸钙（甲酰四氢叶酸钙）解救。',
    difficulty: 4, importance: 'high', source: '真题', year: 2022, tags: ['药理学', '化疗', '甲氨蝶呤']
  },
  {
    content: '氟康唑的抗真菌机制是',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '抑制真菌CYP450依赖的14α-去甲基酶', isCorrect: true },
      { label: 'B', content: '与麦角固醇结合形成孔道', isCorrect: false },
      { label: 'C', content: '抑制角鲨烯环氧化酶', isCorrect: false },
      { label: 'D', content: '抑制几丁质合成', isCorrect: false }
    ],
    answer: 'A',
    explanation: '氟康唑抑制真菌CYP450依赖的14α-去甲基酶→阻止麦角固醇合成→细胞膜通透性增加→真菌死亡。对念珠菌和隐球菌效果好。',
    difficulty: 4, importance: 'medium', source: '练习题', tags: ['药理学', '化疗', '氟康唑']
  },
  {
    content: '链霉素抗结核的特点不包括',
    type: 'single', subjectCode: 'pharmacology', chapterOrder: 7,
    options: [
      { label: 'A', content: '对细胞内结核菌有强大的杀灭作用', isCorrect: true },
      { label: 'B', content: '对细胞外结核菌有杀灭作用', isCorrect: false },
      { label: 'C', content: '主要不良反应是耳毒性', isCorrect: false },
      { label: 'D', content: '属于一线抗结核药', isCorrect: false }
    ],
    answer: 'A',
    explanation: '链霉素不易透过细胞膜，对细胞内结核菌作用弱。对细胞外的结核菌有杀灭作用。异烟肼和利福平对细胞内外的结核菌均有杀灭作用。',
    difficulty: 3, importance: 'high', source: '真题', year: 2023, tags: ['药理学', '化疗', '链霉素']
  }
];

module.exports = pharmacologyQuestions;
