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
  }
];

module.exports = pharmacyLawQuestions;
