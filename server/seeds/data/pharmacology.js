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
  }
];

module.exports = pharmacologyQuestions;
