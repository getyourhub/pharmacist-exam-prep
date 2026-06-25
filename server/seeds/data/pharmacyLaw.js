const pharmacyLawQuestions = [
  // ========== 第一章 药品管理与药品管理法 ==========
  {
    content: '根据《药品管理法》，下列属于假药的是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 1,
    options: [
      { label: 'A', content: '药品成分的含量不符合国家药品标准', isCorrect: false },
      { label: 'B', content: '被污染的药品', isCorrect: false },
      { label: 'C', content: '变质的药品', isCorrect: true },
      { label: 'D', content: '超过有效期的药品', isCorrect: false }
    ],
    answer: 'C',
    explanation: '根据《药品管理法》第九十八条，变质的药品属于假药。药品成分含量不符合标准、被污染的药品、超过有效期的药品属于劣药。',
    difficulty: 3, importance: 'high', source: '真题', year: 2016, tags: ['药事管理', '药品管理法', '假药劣药']
  },
  {
    content: '《药品管理法》规定，药品批准文号的有效期为',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 1,
    options: [
      { label: 'A', content: '3年', isCorrect: false },
      { label: 'B', content: '5年', isCorrect: true },
      { label: 'C', content: '10年', isCorrect: false },
      { label: 'D', content: '无期限', isCorrect: false }
    ],
    answer: 'B',
    explanation: '《药品管理法》规定，药品批准文号的有效期为5年。有效期届满需要继续生产或者进口的，应当在有效期届满前6个月申请再注册。',
    difficulty: 2, importance: 'high', source: '真题', year: 2017, tags: ['药事管理', '药品管理法', '批准文号']
  },
  {
    content: '下列关于药品分类管理的叙述，正确的是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 1,
    options: [
      { label: 'A', content: '处方药必须凭处方才能购买', isCorrect: true },
      { label: 'B', content: '非处方药都是安全的，不会产生不良反应', isCorrect: false },
      { label: 'C', content: '甲类非处方药的安全性高于乙类', isCorrect: false },
      { label: 'D', content: 'OTC药物不需要经过审批即可上市', isCorrect: false }
    ],
    answer: 'A',
    explanation: '处方药必须凭执业医师处方才能购买和使用。非处方药分为甲类和乙类，乙类安全性更高。所有药品上市都需要经过审批。',
    difficulty: 2, importance: 'high', source: '真题', year: 2018, tags: ['药事管理', '药品分类', '处方药']
  },
  {
    content: '药品不良反应报告的主体不包括',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 1,
    options: [
      { label: 'A', content: '药品生产企业', isCorrect: false },
      { label: 'B', content: '药品经营企业', isCorrect: false },
      { label: 'C', content: '患者个人', isCorrect: true },
      { label: 'D', content: '医疗机构', isCorrect: false }
    ],
    answer: 'C',
    explanation: '药品不良反应的法定报告主体是药品生产企业、经营企业和医疗机构。患者个人可以自愿报告，但不是法定报告主体。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2019, tags: ['药事管理', '不良反应', '报告主体']
  },
  // ========== 第二章 药品注册管理 ==========
  {
    content: '新药临床试验分为',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 2,
    options: [
      { label: 'A', content: 'I期、II期、III期、IV期', isCorrect: true },
      { label: 'B', content: 'I期、II期、III期', isCorrect: false },
      { label: 'C', content: '前期、中期、后期', isCorrect: false },
      { label: 'D', content: '动物试验、人体试验', isCorrect: false }
    ],
    answer: 'A',
    explanation: '新药临床试验分为四期：I期（初步临床药理学和人体安全性评价）、II期（治疗作用初步评价）、III期（治疗作用确证）、IV期（上市后应用研究）。',
    difficulty: 2, importance: 'high', source: '真题', year: 2017, tags: ['药事管理', '注册管理', '临床试验']
  },
  {
    content: '药品注册申请中，属于新药申请的是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 2,
    options: [
      { label: 'A', content: '已在国外上市但未在国内上市的药品', isCorrect: true },
      { label: 'B', content: '已在国内上市的仿制药品', isCorrect: false },
      { label: 'C', content: '已上市药品改变剂型', isCorrect: false },
      { label: 'D', content: '已上市药品改变给药途径', isCorrect: false }
    ],
    answer: 'A',
    explanation: '已在国外上市但未在国内上市的药品属于新药申请（进口注册申请）。仿制已上市药品属于仿制药申请。',
    difficulty: 3, importance: 'medium', source: '真题', year: 2020, tags: ['药事管理', '注册管理', '申请分类']
  },
  // ========== 第三章 药品生产管理 ==========
  {
    content: 'GMP的核心是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 3,
    options: [
      { label: 'A', content: '防止药品生产过程中的污染、交叉污染、混淆和差错', isCorrect: true },
      { label: 'B', content: '保证药品的疗效', isCorrect: false },
      { label: 'C', content: '降低药品生产成本', isCorrect: false },
      { label: 'D', content: '提高药品产量', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'GMP（药品生产质量管理规范）的核心是防止药品生产过程中的污染、交叉污染、混淆和差错，确保持续稳定地生产出符合预定用途和注册要求的药品。',
    difficulty: 2, importance: 'high', source: '真题', year: 2018, tags: ['药事管理', 'GMP', '核心原则']
  },
  {
    content: '药品生产企业的关键人员不包括',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 3,
    options: [
      { label: 'A', content: '企业负责人', isCorrect: false },
      { label: 'B', content: '生产管理负责人', isCorrect: false },
      { label: 'C', content: '质量管理负责人', isCorrect: false },
      { label: 'D', content: '销售经理', isCorrect: true }
    ],
    answer: 'D',
    explanation: 'GMP规定药品生产企业的关键人员包括企业负责人、生产管理负责人、质量管理负责人和质量受权人。销售经理不属于关键人员。',
    difficulty: 2, importance: 'medium', source: '真题', year: 2019, tags: ['药事管理', 'GMP', '关键人员']
  },
  // ========== 第四章 药品经营管理 ==========
  {
    content: '药品经营企业必须遵守的质量管理规范是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 4,
    options: [
      { label: 'A', content: 'GMP', isCorrect: false },
      { label: 'B', content: 'GSP', isCorrect: true },
      { label: 'C', content: 'GLP', isCorrect: false },
      { label: 'D', content: 'GCP', isCorrect: false }
    ],
    answer: 'B',
    explanation: 'GSP（Good Supply Practice）是药品经营质量管理规范，适用于药品经营企业。GMP适用于药品生产企业，GLP适用于药物非临床研究，GCP适用于药物临床试验。',
    difficulty: 2, importance: 'high', source: '真题', year: 2016, tags: ['药事管理', 'GSP', '质量管理']
  },
  {
    content: '处方的有效期限一般为',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 4,
    options: [
      { label: 'A', content: '当日有效', isCorrect: true },
      { label: 'B', content: '3日内有效', isCorrect: false },
      { label: 'C', content: '7日内有效', isCorrect: false },
      { label: 'D', content: '30日内有效', isCorrect: false }
    ],
    answer: 'A',
    explanation: '根据《处方管理办法》，处方为开具当日有效。特殊情况下需延长有效期的，由开具处方的医师注明有效期限，但有效期最长不得超过3天。',
    difficulty: 2, importance: 'high', source: '真题', year: 2017, tags: ['药事管理', '处方管理', '有效期']
  },
  {
    content: '特殊管理的药品包括',
    type: 'multiple', subjectCode: 'pharmacyLaw', chapterOrder: 4,
    options: [
      { label: 'A', content: '麻醉药品', isCorrect: true },
      { label: 'B', content: '精神药品', isCorrect: true },
      { label: 'C', content: '医疗用毒性药品', isCorrect: true },
      { label: 'D', content: '放射性药品', isCorrect: true }
    ],
    answer: 'ABCD',
    explanation: '特殊管理的药品包括麻醉药品、精神药品、医疗用毒性药品和放射性药品四类，实行特殊管理措施。',
    difficulty: 2, importance: 'high', source: '真题', year: 2019, tags: ['药事管理', '特殊药品', '分类']
  },
  // ========== 第五章 医疗机构药事管理 ==========
  {
    content: '医疗机构药事管理的核心是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 5,
    options: [
      { label: 'A', content: '保证药品供应', isCorrect: false },
      { label: 'B', content: '促进合理用药', isCorrect: true },
      { label: 'C', content: '降低药品费用', isCorrect: false },
      { label: 'D', content: '提高药品销售额', isCorrect: false }
    ],
    answer: 'B',
    explanation: '医疗机构药事管理的核心是促进合理用药，确保患者安全、有效、经济地使用药物。药学部门是医疗机构药事管理的职能部门。',
    difficulty: 2, importance: 'high', source: '真题', year: 2020, tags: ['药事管理', '医疗机构', '合理用药']
  },
  {
    content: '处方中"Sig."表示',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 5,
    options: [
      { label: 'A', content: '用法用量', isCorrect: true },
      { label: 'B', content: '药品名称', isCorrect: false },
      { label: 'C', content: '处方日期', isCorrect: false },
      { label: 'D', content: '医师签名', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'Sig.（Signa）是拉丁文"标记"的意思，在处方中表示用法用量，是告诉患者如何使用药品的指示。',
    difficulty: 1, importance: 'high', source: '真题', year: 2018, tags: ['药事管理', '处方', '术语']
  },
  // ========== 第六章 中药管理 ==========
  {
    content: '中药保护品种的保护期限最长为',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 6,
    options: [
      { label: 'A', content: '10年', isCorrect: false },
      { label: 'B', content: '20年', isCorrect: true },
      { label: 'C', content: '30年', isCorrect: false },
      { label: 'D', content: '50年', isCorrect: false }
    ],
    answer: 'B',
    explanation: '中药保护品种的保护期限：一级保护品种分别为30年、20年、10年，二级保护品种为7年。最长保护期限为20年（一级保护品种）。',
    difficulty: 3, importance: 'medium', source: '真题', year: 2020, tags: ['药事管理', '中药管理', '保护期限']
  },
  // ========== 第七章 特殊管理药品 ==========
  {
    content: '麻醉药品处方的保存期限为',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 7,
    options: [
      { label: 'A', content: '1年', isCorrect: false },
      { label: 'B', content: '2年', isCorrect: false },
      { label: 'C', content: '3年', isCorrect: true },
      { label: 'D', content: '5年', isCorrect: false }
    ],
    answer: 'C',
    explanation: '麻醉药品处方保存3年备查。普通处方、急诊处方、儿科处方保存1年，医疗用毒性药品、精神药品处方保存2年。',
    difficulty: 3, importance: 'high', source: '真题', year: 2018, tags: ['药事管理', '特殊药品', '处方保存']
  },
  {
    content: '下列属于第一类精神药品的是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 7,
    options: [
      { label: 'A', content: '哌醋甲酯', isCorrect: true },
      { label: 'B', content: '地西泮', isCorrect: false },
      { label: 'C', content: '苯巴比妥', isCorrect: false },
      { label: 'D', content: '氯硝西泮', isCorrect: false }
    ],
    answer: 'A',
    explanation: '哌醋甲酯（利他林）属于第一类精神药品。地西泮、氯硝西泮属于第二类精神药品。苯巴比妥也属于第二类精神药品。',
    difficulty: 3, importance: 'high', source: '真题', year: 2021, tags: ['药事管理', '精神药品', '分类']
  },
  // 练习题补充
  {
    content: '药品召回的主体是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 1,
    options: [
      { label: 'A', content: '药品生产企业', isCorrect: true },
      { label: 'B', content: '药品经营企业', isCorrect: false },
      { label: 'C', content: '医疗机构', isCorrect: false },
      { label: 'D', content: '药品监督管理部门', isCorrect: false }
    ],
    answer: 'A',
    explanation: '药品召回的主体是药品生产企业。生产企业应当对已上市销售的存在安全隐患的药品实施召回。经营企业和使用单位应当协助生产企业召回药品。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药事管理', '药品管理法', '召回']
  },
  {
    content: '执业药师的职责不包括',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 4,
    options: [
      { label: 'A', content: '处方审核', isCorrect: false },
      { label: 'B', content: '处方调配', isCorrect: false },
      { label: 'C', content: '用药指导', isCorrect: false },
      { label: 'D', content: '疾病诊断', isCorrect: true }
    ],
    answer: 'D',
    explanation: '执业药师的职责包括处方审核、处方调配、用药指导、药品质量管理等，但不包括疾病诊断。疾病诊断是执业医师的职责。',
    difficulty: 1, importance: 'high', source: '练习题', tags: ['药事管理', '执业药师', '职责']
  },
  {
    content: '医疗机构配制的制剂可以在市场上销售',
    type: 'judge', subjectCode: 'pharmacyLaw', chapterOrder: 5,
    options: [
      { label: 'A', content: '正确', isCorrect: false },
      { label: 'B', content: '错误', isCorrect: true }
    ],
    answer: 'B',
    explanation: '医疗机构配制的制剂不得在市场上销售或者变相销售，不得发布医疗机构制剂广告。只能在本医疗机构内使用。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药事管理', '医疗机构', '制剂管理']
  },
  {
    content: '《药品管理法》自哪一年开始施行',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 1,
    options: [
      { label: 'A', content: '1984年', isCorrect: false },
      { label: 'B', content: '2001年', isCorrect: false },
      { label: 'C', content: '2019年修订版自2019年12月1日起施行', isCorrect: true },
      { label: 'D', content: '2020年', isCorrect: false }
    ],
    answer: 'C',
    explanation: '《药品管理法》于1984年首次颁布，2001年第一次修订，2019年8月26日第二次修订，修订版自2019年12月1日起施行。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药事管理', '药品管理法', '施行时间']
  },

  // ========== 第一章 药品管理与药品管理法 (补充) ==========
  {
    content: '根据《药品管理法》，下列属于劣药的是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 1,
    options: [
      { label: 'A', content: '以非药品冒充药品', isCorrect: false },
      { label: 'B', content: '变质的药品', isCorrect: false },
      { label: 'C', content: '药品成份含量不符合国家药品标准', isCorrect: true },
      { label: 'D', content: '所标明的适应症超出规定范围', isCorrect: false }
    ],
    answer: 'C',
    explanation: '药品成份的含量不符合国家药品标准属于劣药。以非药品冒充药品、变质的药品、所标明的适应症超出规定范围均属于假药。',
    difficulty: 2, importance: 'high', source: '真题', year: 2020, tags: ['药事管理', '药品管理法', '假药劣药']
  },
  {
    content: '药品上市许可持有人（MAH）对以下哪些环节承担法律责任',
    type: 'multiple', subjectCode: 'pharmacyLaw', chapterOrder: 1,
    options: [
      { label: 'A', content: '非临床研究', isCorrect: true },
      { label: 'B', content: '临床试验', isCorrect: true },
      { label: 'C', content: '生产经营', isCorrect: true },
      { label: 'D', content: '不良反应监测', isCorrect: true }
    ],
    answer: 'ABCD',
    explanation: 'MAH对药品的非临床研究、临床试验、生产经营、上市后研究、不良反应监测及报告与处理等承担全部法律责任。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', 'MAH', '药品管理法']
  },
  {
    content: '药品一级召回应在多长时间内通知到有关药品经营企业、使用单位停止销售和使用',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 1,
    options: [
      { label: 'A', content: '12小时内', isCorrect: false },
      { label: 'B', content: '24小时内', isCorrect: true },
      { label: 'C', content: '48小时内', isCorrect: false },
      { label: 'D', content: '72小时内', isCorrect: false }
    ],
    answer: 'B',
    explanation: '一级召回（使用该药品可能引起严重健康危害的）应在24小时内通知到有关药品经营企业、使用单位停止销售和使用。二级召回为48小时，三级召回为72小时。',
    difficulty: 3, importance: 'high', source: '练习题', tags: ['药事管理', '药品召回', '药品管理法']
  },

  // ========== 第二章 药品注册管理 (补充) ==========
  {
    content: 'I期临床试验的受试者一般为',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 2,
    options: [
      { label: 'A', content: '患者', isCorrect: false },
      { label: 'B', content: '健康志愿者', isCorrect: true },
      { label: 'C', content: '老年人', isCorrect: false },
      { label: 'D', content: '儿童', isCorrect: false }
    ],
    answer: 'B',
    explanation: 'I期临床试验是初步的临床药理学及人体安全性评价试验，受试者一般为20-30例健康志愿者。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', '临床试验', '注册管理']
  },
  {
    content: 'III期临床试验的受试者一般不少于',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 2,
    options: [
      { label: 'A', content: '100例', isCorrect: false },
      { label: 'B', content: '200例', isCorrect: false },
      { label: 'C', content: '300例', isCorrect: true },
      { label: 'D', content: '500例', isCorrect: false }
    ],
    answer: 'C',
    explanation: 'III期临床试验是治疗作用确证阶段，受试者一般不少于300例。I期20-30例，II期≥100例，IV期≥2000例。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', '临床试验', '注册管理']
  },
  {
    content: '药物临床试验伦理委员会的人数应不少于',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 2,
    options: [
      { label: 'A', content: '3人', isCorrect: false },
      { label: 'B', content: '5人', isCorrect: false },
      { label: 'C', content: '7人', isCorrect: true },
      { label: 'D', content: '9人', isCorrect: false }
    ],
    answer: 'C',
    explanation: '伦理委员会由医药学专业人员、非医药学专业人员、法律专家及独立于研究/试验单位之外的人员组成，人数不少于7人。',
    difficulty: 3, importance: 'medium', source: '练习题', tags: ['药事管理', '伦理审查', '临床试验']
  },
  {
    content: '化学药品注册分类不包括',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 2,
    options: [
      { label: 'A', content: '创新药', isCorrect: false },
      { label: 'B', content: '改良型新药', isCorrect: false },
      { label: 'C', content: '仿制药', isCorrect: false },
      { label: 'D', content: '进口药品', isCorrect: true }
    ],
    answer: 'D',
    explanation: '化学药品注册分为三类：创新药、改良型新药和仿制药。进口药品属于单独的注册申请类别，不是化学药品的注册分类。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药事管理', '药品注册', '分类']
  },

  // ========== 第三章 药品生产管理 (补充) ==========
  {
    content: 'GMP中洁净区A级相当于ISO标准的',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 3,
    options: [
      { label: 'A', content: 'ISO 3', isCorrect: false },
      { label: 'B', content: 'ISO 5', isCorrect: true },
      { label: 'C', content: 'ISO 7', isCorrect: false },
      { label: 'D', content: 'ISO 8', isCorrect: false }
    ],
    answer: 'B',
    explanation: 'GMP洁净区A级相当于ISO 5，B级相当于ISO 5（A级的背景环境），C级相当于ISO 7，D级相当于ISO 8。',
    difficulty: 3, importance: 'medium', source: '练习题', tags: ['药事管理', 'GMP', '洁净区']
  },
  {
    content: '《药品生产许可证》的有效期为',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 3,
    options: [
      { label: 'A', content: '3年', isCorrect: false },
      { label: 'B', content: '5年', isCorrect: true },
      { label: 'C', content: '10年', isCorrect: false },
      { label: 'D', content: '无期限', isCorrect: false }
    ],
    answer: 'B',
    explanation: '《药品生产许可证》有效期为5年。有效期届满需要继续生产药品的，应当在有效期届满前6个月申请换发。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', '药品生产', '许可证']
  },
  {
    content: 'GMP的关键人员不包括',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 3,
    options: [
      { label: 'A', content: '企业负责人', isCorrect: false },
      { label: 'B', content: '质量受权人', isCorrect: false },
      { label: 'C', content: '生产管理负责人', isCorrect: false },
      { label: 'D', content: '销售总监', isCorrect: true }
    ],
    answer: 'D',
    explanation: 'GMP的关键人员包括企业负责人、生产管理负责人、质量管理负责人和质量受权人。销售总监不属于关键人员。',
    difficulty: 1, importance: 'high', source: '练习题', tags: ['药事管理', 'GMP', '关键人员']
  },

  // ========== 第四章 药品经营管理 (补充) ==========
  {
    content: '急诊处方的颜色是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 4,
    options: [
      { label: 'A', content: '白色', isCorrect: false },
      { label: 'B', content: '淡黄色', isCorrect: true },
      { label: 'C', content: '淡绿色', isCorrect: false },
      { label: 'D', content: '淡红色', isCorrect: false }
    ],
    answer: 'B',
    explanation: '处方颜色：普通处方（白色）、急诊处方（淡黄色）、儿科处方（淡绿色）、麻醉药品和第一类精神药品处方（淡红色）。',
    difficulty: 2, importance: 'high', source: '真题', year: 2018, tags: ['药事管理', '处方管理', '处方颜色']
  },
  {
    content: '乙类非处方药的标识颜色是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 4,
    options: [
      { label: 'A', content: '红色', isCorrect: false },
      { label: 'B', content: '绿色', isCorrect: true },
      { label: 'C', content: '蓝色', isCorrect: false },
      { label: 'D', content: '黄色', isCorrect: false }
    ],
    answer: 'B',
    explanation: '甲类OTC标识为红色，只能在药店销售。乙类OTC标识为绿色，除药店外还可在经批准的普通商业企业零售。',
    difficulty: 1, importance: 'high', source: '练习题', tags: ['药事管理', 'OTC', '药品分类']
  },
  {
    content: 'GSP中药品仓库的色标管理，合格品区的颜色是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 4,
    options: [
      { label: 'A', content: '绿色', isCorrect: true },
      { label: 'B', content: '黄色', isCorrect: false },
      { label: 'C', content: '红色', isCorrect: false },
      { label: 'D', content: '蓝色', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'GSP色标管理：合格品区绿色、待验品区黄色、不合格品区红色。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', 'GSP', '色标管理']
  },
  {
    content: '执业药师注册的有效期为',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 4,
    options: [
      { label: 'A', content: '1年', isCorrect: false },
      { label: 'B', content: '2年', isCorrect: false },
      { label: 'C', content: '3年', isCorrect: true },
      { label: 'D', content: '5年', isCorrect: false }
    ],
    answer: 'C',
    explanation: '执业药师注册有效期为3年，有效期届满前30日申请延续注册。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', '执业药师', '注册']
  },
  {
    content: '下列药品中不得在网络上销售的是',
    type: 'multiple', subjectCode: 'pharmacyLaw', chapterOrder: 4,
    options: [
      { label: 'A', content: '疫苗', isCorrect: true },
      { label: 'B', content: '血液制品', isCorrect: true },
      { label: 'C', content: '麻醉药品', isCorrect: true },
      { label: 'D', content: '普通感冒药', isCorrect: false }
    ],
    answer: 'ABC',
    explanation: '疫苗、血液制品、麻醉药品、精神药品、医疗用毒性药品、放射性药品、药品类易制毒化学品等特殊管理药品不得在网络上销售。普通感冒药可在合法网络平台销售。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', '网络销售', '药品管理']
  },
  {
    content: '处方药广告可以在以下哪种媒介发布',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 4,
    options: [
      { label: 'A', content: '电视', isCorrect: false },
      { label: 'B', content: '报纸', isCorrect: false },
      { label: 'C', content: '医学药学专业刊物', isCorrect: true },
      { label: 'D', content: '互联网大众平台', isCorrect: false }
    ],
    answer: 'C',
    explanation: '处方药只能在国务院卫生行政部门和国务院药品监督管理部门共同指定的医学、药学专业刊物上发布广告，不得在大众传播媒介发布。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', '药品广告', '处方药']
  },
  {
    content: '执业药师每年继续教育学时应不少于',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 4,
    options: [
      { label: 'A', content: '30学时', isCorrect: false },
      { label: 'B', content: '60学时', isCorrect: false },
      { label: 'C', content: '90学时', isCorrect: true },
      { label: 'D', content: '120学时', isCorrect: false }
    ],
    answer: 'C',
    explanation: '执业药师每年应参加不少于90学时的继续教育，其中专业科目不少于60学时。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药事管理', '执业药师', '继续教育']
  },

  // ========== 第五章 医疗机构药事管理 (补充) ==========
  {
    content: '"四查十对"中，查药品应核对的内容不包括',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 5,
    options: [
      { label: 'A', content: '药名', isCorrect: false },
      { label: 'B', content: '剂型', isCorrect: false },
      { label: 'C', content: '临床诊断', isCorrect: true },
      { label: 'D', content: '规格', isCorrect: false }
    ],
    answer: 'C',
    explanation: '查药品应核对药名、剂型、规格、数量。临床诊断属于"查用药合理性"的核对内容。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', '四查十对', '医疗机构']
  },
  {
    content: '甲类医保药品的费用支付方式是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 5,
    options: [
      { label: 'A', content: '由参保人员全额自付', isCorrect: false },
      { label: 'B', content: '由医保基金按规定全额支付', isCorrect: true },
      { label: 'C', content: '由参保人员自付50%后医保报销', isCorrect: false },
      { label: 'D', content: '由政府财政全额支付', isCorrect: false }
    ],
    answer: 'B',
    explanation: '甲类药品是临床治疗必需、使用广泛、疗效好、同类药品中价格低的药品，费用由医保基金按规定全额支付。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', '医保药品', '费用支付']
  },
  {
    content: '药品不良反应报告中，死亡病例应',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 5,
    options: [
      { label: 'A', content: '在15个工作日内报告', isCorrect: false },
      { label: 'B', content: '在30日内报告', isCorrect: false },
      { label: 'C', content: '立即报告', isCorrect: true },
      { label: 'D', content: '在7日内报告', isCorrect: false }
    ],
    answer: 'C',
    explanation: '药品不良反应报告时限：新的或严重的ADR在15个工作日内报告，死亡病例立即报告，其他ADR在30日内报告。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', 'ADR', '报告时限']
  },
  {
    content: '医疗机构配制的制剂',
    type: 'multiple', subjectCode: 'pharmacyLaw', chapterOrder: 5,
    options: [
      { label: 'A', content: '只能在本医疗机构内使用', isCorrect: true },
      { label: 'B', content: '不得在市场上销售', isCorrect: true },
      { label: 'C', content: '不得发布广告', isCorrect: true },
      { label: 'D', content: '可以委托其他医疗机构代销', isCorrect: false }
    ],
    answer: 'ABC',
    explanation: '医疗机构配制的制剂只能在本医疗机构内使用，不得在市场上销售或者变相销售，不得发布医疗机构制剂广告。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药事管理', '医疗机构', '制剂管理']
  },
  {
    content: '医保药品目录原则上每年调整',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 5,
    options: [
      { label: 'A', content: '一次', isCorrect: true },
      { label: 'B', content: '两次', isCorrect: false },
      { label: 'C', content: '每两年一次', isCorrect: false },
      { label: 'D', content: '不定期', isCorrect: false }
    ],
    answer: 'A',
    explanation: '国家基本医疗保险药品目录由国务院医疗保障行政部门组织制定，原则上每年调整一次。',
    difficulty: 1, importance: 'medium', source: '练习题', tags: ['药事管理', '医保药品', '药品目录']
  },

  // ========== 第六章 中药管理 (补充) ==========
  {
    content: '中药一级保护品种的最长保护期限为',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 6,
    options: [
      { label: 'A', content: '10年', isCorrect: false },
      { label: 'B', content: '20年', isCorrect: false },
      { label: 'C', content: '30年', isCorrect: true },
      { label: 'D', content: '50年', isCorrect: false }
    ],
    answer: 'C',
    explanation: '中药保护品种一级保护期限分别为30年、20年、10年，最长保护期限为30年。二级保护品种为7年。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', '中药管理', '保护品种']
  },
  {
    content: '中药配方颗粒实行的管理方式是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 6,
    options: [
      { label: 'A', content: '批准文号管理', isCorrect: false },
      { label: 'B', content: '备案管理', isCorrect: true },
      { label: 'C', content: '许可管理', isCorrect: false },
      { label: 'D', content: '登记管理', isCorrect: false }
    ],
    answer: 'B',
    explanation: '中药配方颗粒实施备案管理，不实施批准文号管理，可在医疗机构内使用。',
    difficulty: 3, importance: 'medium', source: '练习题', tags: ['药事管理', '中药管理', '配方颗粒']
  },
  {
    content: '药品发明专利的保护期限为',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 6,
    options: [
      { label: 'A', content: '10年', isCorrect: false },
      { label: 'B', content: '15年', isCorrect: false },
      { label: 'C', content: '20年', isCorrect: true },
      { label: 'D', content: '30年', isCorrect: false }
    ],
    answer: 'C',
    explanation: '药品发明专利保护期为20年，包括化合物专利、制剂专利、用途专利、制备工艺专利等。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', '知识产权', '专利保护']
  },

  // ========== 第七章 特殊管理药品 (补充) ==========
  {
    content: '麻醉药品的"五专"管理不包括',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 7,
    options: [
      { label: 'A', content: '专人负责', isCorrect: false },
      { label: 'B', content: '专柜加锁', isCorrect: false },
      { label: 'C', content: '专用处方', isCorrect: false },
      { label: 'D', content: '专区销售', isCorrect: true }
    ],
    answer: 'D',
    explanation: '麻醉药品"五专"管理：专人负责、专柜加锁、专用账册、专用处方、专册登记。不包括"专区销售"。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', '特殊药品', '五专管理']
  },
  {
    content: '癌痛患者开具麻醉药品控缓释制剂，最大用量为',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 7,
    options: [
      { label: 'A', content: '3日用量', isCorrect: false },
      { label: 'B', content: '7日用量', isCorrect: false },
      { label: 'C', content: '15日用量', isCorrect: true },
      { label: 'D', content: '30日用量', isCorrect: false }
    ],
    answer: 'C',
    explanation: '门诊癌痛患者和中重度慢性疼痛患者，麻醉药品控缓释制剂可开具15日用量，其他剂型可开具7日用量。',
    difficulty: 3, importance: 'high', source: '练习题', tags: ['药事管理', '特殊药品', '限量管理']
  },
  {
    content: '第二类精神药品处方的保存期限为',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 7,
    options: [
      { label: 'A', content: '1年', isCorrect: false },
      { label: 'B', content: '2年', isCorrect: true },
      { label: 'C', content: '3年', isCorrect: false },
      { label: 'D', content: '5年', isCorrect: false }
    ],
    answer: 'B',
    explanation: '麻醉药品和第一类精神药品处方保存3年，第二类精神药品处方保存2年，普通处方保存1年。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', '精神药品', '处方保存']
  },
  {
    content: '免疫规划疫苗的费用由',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 7,
    options: [
      { label: 'A', content: '居民自费', isCorrect: false },
      { label: 'B', content: '医保基金支付', isCorrect: false },
      { label: 'C', content: '政府免费提供', isCorrect: true },
      { label: 'D', content: '商业保险支付', isCorrect: false }
    ],
    answer: 'C',
    explanation: '免疫规划疫苗是指居民应当按照政府规定接种的疫苗，由政府免费提供。非免疫规划疫苗由居民自愿自费接种。',
    difficulty: 1, importance: 'high', source: '练习题', tags: ['药事管理', '疫苗', '免疫规划']
  },
  {
    content: 'GSP中冷库的温度要求是',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 7,
    options: [
      { label: 'A', content: '0-4℃', isCorrect: false },
      { label: 'B', content: '2-8℃', isCorrect: true },
      { label: 'C', content: '2-10℃', isCorrect: false },
      { label: 'D', content: '8-15℃', isCorrect: false }
    ],
    answer: 'B',
    explanation: 'GSP规定冷库温度为2-8℃，用于储存需要冷藏的药品如疫苗、胰岛素、生物制品等。常温库10-30℃，阴凉库≤20℃。',
    difficulty: 2, importance: 'high', source: '练习题', tags: ['药事管理', 'GSP', '储存条件']
  },
  {
    content: '药品储存实行近效期预警管理，近效期是指距有效期不足',
    type: 'single', subjectCode: 'pharmacyLaw', chapterOrder: 7,
    options: [
      { label: 'A', content: '3个月', isCorrect: false },
      { label: 'B', content: '6个月', isCorrect: true },
      { label: 'C', content: '9个月', isCorrect: false },
      { label: 'D', content: '12个月', isCorrect: false }
    ],
    answer: 'B',
    explanation: '近效期药品是指距有效期不足6个月的药品，应按月填报效期报表，实行近效期预警管理。',
    difficulty: 2, importance: 'medium', source: '练习题', tags: ['药事管理', '药品储存', '近效期']
  }

];

module.exports = pharmacyLawQuestions;
