const knowledgePointsData = {
  pharmacology: [
    {
      chapterOrder: 1,
      title: '药物的基本作用',
      content: '药物的基本作用包括兴奋作用和抑制作用。药物通过与受体、离子通道、酶等靶点相互作用，改变细胞的生理功能。',
      keyPoints: ['兴奋作用', '抑制作用', '选择性', '两重性'],
      mnemonics: ['药分兴奋与抑制，选择两重要记清'],
      importance: 'high', frequency: 'high', tags: ['药理学', '总论']
    },
    {
      chapterOrder: 1,
      title: '药物的量效关系',
      content: '药物的量效关系是指药物剂量与效应之间的关系。最小有效量、极量、治疗量、半数有效量（ED50）、半数致死量（LD50）等概念。',
      keyPoints: ['最小有效量', '极量', 'ED50', 'LD50', '治疗指数'],
      mnemonics: ['量效关系五参数，最小极量治疗量，ED50和LD50，治疗指数要记牢'],
      importance: 'high', frequency: 'high', tags: ['药理学', '总论']
    },
    {
      chapterOrder: 2,
      title: '胆碱能神经系统药物',
      content: '包括M受体激动剂（毛果芸香碱）、胆碱酯酶抑制剂（新斯的明）、M受体阻断剂（阿托品）等。',
      keyPoints: ['毛果芸香碱缩瞳降眼压', '新斯的明兴奋骨骼肌', '阿托品散瞳升眼压'],
      mnemonics: ['毛缩新兴阿散升'],
      importance: 'high', frequency: 'high', tags: ['药理学', '传出神经']
    },
    {
      chapterOrder: 2,
      title: '肾上腺素能神经系统药物',
      content: '包括α受体激动剂（去甲肾上腺素）、β受体激动剂（异丙肾上腺素）、α和β受体激动剂（肾上腺素）、β受体阻断剂（普萘洛尔）等。',
      keyPoints: ['去甲肾上腺素收缩血管', '肾上腺素强心升压', '普萘洛尔降压减慢心率'],
      mnemonics: ['去缩肾强普降心'],
      importance: 'high', frequency: 'high', tags: ['药理学', '传出神经']
    },
    {
      chapterOrder: 3,
      title: '镇静催眠药',
      content: '苯二氮卓类（地西泮）通过增强GABA作用，增加Cl-通道开放频率。巴比妥类通过延长Cl-通道开放时间。',
      keyPoints: ['地西泮增强GABA', '安全范围大', '巴比妥类安全范围小'],
      mnemonics: ['地西泮频开，巴比妥时长'],
      importance: 'high', frequency: 'medium', tags: ['药理学', '中枢神经']
    },
    {
      chapterOrder: 4,
      title: '抗高血压药物分类',
      content: '抗高血压药物分为：利尿药、β受体阻断药、钙通道阻滞药、ACEI、ARB、α受体阻断药等。',
      keyPoints: ['利尿药降压', 'ACEI降压保护靶器官', 'CCB降压效果强'],
      mnemonics: ['利贝钙ACE，ARB也能降'],
      importance: 'high', frequency: 'high', tags: ['药理学', '心血管']
    },
    {
      chapterOrder: 7,
      title: '抗菌药物的作用机制',
      content: '抗菌药物的作用机制包括：抑制细胞壁合成（β-内酰胺类）、抑制蛋白质合成（氨基糖苷类、大环内酯类）、抑制核酸合成（喹诺酮类）、影响细胞膜通透性（多肽类）。',
      keyPoints: ['β-内酰胺类抑制细胞壁', '氨基糖苷类抑制蛋白合成', '喹诺酮类抑制DNA旋转酶'],
      mnemonics: ['壁蛋核酸膜，四机制要记牢'],
      importance: 'high', frequency: 'high', tags: ['药理学', '化疗']
    }
  ],
  pharmaceutics: [
    {
      chapterOrder: 1,
      title: '药剂学基本概念',
      content: '药剂学是研究药物制剂的基本理论、处方设计、制备工艺和合理应用的综合性技术科学。剂型、制剂、辅料等基本概念。',
      keyPoints: ['剂型分类', '辅料作用', '药典标准', 'GMP要求'],
      importance: 'medium', frequency: 'medium', tags: ['药剂学', '总论']
    },
    {
      chapterOrder: 2,
      title: '表面活性剂',
      content: '表面活性剂分为离子型（阴离子、阳离子、两性离子）和非离子型。HLB值决定亲水亲油性。应用包括增溶、乳化、润湿等。',
      keyPoints: ['HLB值', '增溶作用', '乳化作用', 'CMC'],
      mnemonics: ['HLB越大越亲水，3-6做W/O，8-18做O/W'],
      importance: 'high', frequency: 'high', tags: ['药剂学', '液体制剂']
    },
    {
      chapterOrder: 3,
      title: '注射剂的质量要求',
      content: '注射剂的质量要求包括：无菌、无热原、澄明度、pH值、渗透压、安全性、稳定性等。',
      keyPoints: ['无菌', '无热原', 'pH 4-9', '等渗'],
      importance: 'high', frequency: 'high', tags: ['药剂学', '注射剂']
    },
    {
      chapterOrder: 4,
      title: '片剂的辅料',
      content: '片剂辅料包括：稀释剂（填充剂）、黏合剂、崩解剂、润滑剂、助流剂等。不同辅料在片剂中发挥不同作用。',
      keyPoints: ['稀释剂增体积', '黏合剂粘合粉末', '崩解剂促崩解', '润滑剂减摩擦'],
      mnemonics: ['稀黏崩润四辅料'],
      importance: 'high', frequency: 'high', tags: ['药剂学', '片剂']
    },
    {
      chapterOrder: 7,
      title: '药物稳定性试验',
      content: '药物稳定性试验包括影响因素试验、加速试验和长期试验。影响因素考察高温、高湿、光照对药物稳定性的影响。',
      keyPoints: ['影响因素试验', '加速试验（40℃/6个月）', '长期试验（25℃/24个月）'],
      importance: 'medium', frequency: 'medium', tags: ['药剂学', '稳定性']
    }
  ],
  pharmacyLaw: [
    {
      chapterOrder: 1,
      title: '假药和劣药的认定',
      content: '假药：药品所含成份与国家标准不符、以非药品冒充药品、变质的药品等。劣药：药品成份含量不符合标准、被污染的药品、超过有效期的药品等。',
      keyPoints: ['假药是成份问题', '劣药是含量问题', '变质是假药', '过期是劣药'],
      mnemonics: ['假变劣过，含量低劣'],
      importance: 'high', frequency: 'high', tags: ['药事管理', '药品管理法']
    },
    {
      chapterOrder: 4,
      title: '处方管理办法',
      content: '处方管理办法规定了处方的开具、审核、调配、核发等环节的管理要求。包括处方有效期、处方权限、处方保存期限等。',
      keyPoints: ['当日有效', '麻醉药品处方保存3年', '普通处方保存1年'],
      mnemonics: ['当日有效麻醉三，普通急诊一'],
      importance: 'high', frequency: 'high', tags: ['药事管理', '处方管理']
    },
    {
      chapterOrder: 7,
      title: '特殊管理药品',
      content: '特殊管理药品包括麻醉药品、精神药品、医疗用毒性药品、放射性药品。实行特殊的采购、储存、使用管理制度。',
      keyPoints: ['麻醉药品五专管理', '精神药品分两类', '毒性药品限量使用'],
      mnemonics: ['麻精毒放四特殊'],
      importance: 'high', frequency: 'high', tags: ['药事管理', '特殊药品']
    }
  ],
  comprehensiveSkill: [
    {
      chapterOrder: 2,
      title: '处方审核要点',
      content: '处方审核包括：合法性审核、规范性审核、适宜性审核。"四查十对"是处方调配的基本要求。',
      keyPoints: ['四查十对', '处方前记', '配伍禁忌', '用法用量'],
      mnemonics: ['查处方对科名龄，查药品对名规数，查配伍对性用量，查合理对诊断'],
      importance: 'high', frequency: 'high', tags: ['综合技能', '处方调剂']
    },
    {
      chapterOrder: 3,
      title: '特殊人群用药',
      content: '特殊人群包括老年人、儿童、妊娠期和哺乳期妇女、肝肾功能不全患者。需要根据生理特点调整用药方案。',
      keyPoints: ['老年人减量', '儿童按体重计算', '妊娠期避免X类药', '肾功能不全调整剂量'],
      importance: 'high', frequency: 'high', tags: ['综合技能', '临床用药']
    },
    {
      chapterOrder: 5,
      title: '药物不良反应分类',
      content: '药物不良反应分为A型（量变型异常，与剂量相关，可预测）和B型（质变型异常，与剂量无关，不可预测）。',
      keyPoints: ['A型与剂量相关', 'B型与剂量无关', 'A型可预测', 'B型不可预测'],
      mnemonics: ['A量B质，A预B不'],
      importance: 'high', frequency: 'high', tags: ['综合技能', '不良反应']
    },
    {
      chapterOrder: 7,
      title: '常见症状的自我药疗',
      content: '发热、头痛、感冒、咳嗽、腹泻、便秘等常见症状的自我药疗原则和注意事项。',
      keyPoints: ['发热首选对乙酰氨基酚', '感冒不用抗生素', '腹泻补液为主'],
      importance: 'medium', frequency: 'medium', tags: ['综合技能', '自我药疗']
    }
  ]
};

module.exports = knowledgePointsData;
