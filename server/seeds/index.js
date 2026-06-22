const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Subject = require('../models/Subject');
const Chapter = require('../models/Chapter');
const KnowledgePoint = require('../models/KnowledgePoint');
const Question = require('../models/Question');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB 已连接');
  } catch (error) {
    console.error('数据库连接错误:', error.message);
    process.exit(1);
  }
};

const subjects = [
  {
    name: '药学专业知识（一）',
    code: 'pharmacology',
    description: '包含药理学和药物化学，是执业药师考试的核心科目',
    examInfo: {
      totalQuestions: 120,
      totalTime: 150,
      passingScore: 72,
      totalScore: 120
    },
    color: '#1890ff'
  },
  {
    name: '药学专业知识（二）',
    code: 'pharmaceutics',
    description: '包含药剂学和药物分析，重点考察药物制剂和质量控制',
    examInfo: {
      totalQuestions: 120,
      totalTime: 150,
      passingScore: 72,
      totalScore: 120
    },
    color: '#52c41a'
  },
  {
    name: '药事管理与法规',
    code: 'pharmacyLaw',
    description: '考察药品管理相关法律法规和规章制度',
    examInfo: {
      totalQuestions: 120,
      totalTime: 150,
      passingScore: 72,
      totalScore: 120
    },
    color: '#722ed1'
  },
  {
    name: '综合知识与技能',
    code: 'comprehensiveSkill',
    description: '考察药学服务实践能力和综合应用能力',
    examInfo: {
      totalQuestions: 120,
      totalTime: 150,
      passingScore: 72,
      totalScore: 120
    },
    color: '#fa8c16'
  }
];

const chaptersData = {
  pharmacology: [
    { name: '第一章 药理学总论', order: 1, importance: 'high', estimatedStudyTime: 120 },
    { name: '第二章 传出神经系统药理学', order: 2, importance: 'high', estimatedStudyTime: 150 },
    { name: '第三章 中枢神经系统药理学', order: 3, importance: 'high', estimatedStudyTime: 180 },
    { name: '第四章 心血管系统药理学', order: 4, importance: 'high', estimatedStudyTime: 150 },
    { name: '第五章 内脏系统药理学', order: 5, importance: 'medium', estimatedStudyTime: 120 },
    { name: '第六章 内分泌系统药理学', order: 6, importance: 'medium', estimatedStudyTime: 120 },
    { name: '第七章 化学治疗药物', order: 7, importance: 'high', estimatedStudyTime: 180 }
  ],
  pharmaceutics: [
    { name: '第一章 药剂学总论', order: 1, importance: 'high', estimatedStudyTime: 120 },
    { name: '第二章 液体制剂', order: 2, importance: 'medium', estimatedStudyTime: 90 },
    { name: '第三章 灭菌制剂与无菌制剂', order: 3, importance: 'high', estimatedStudyTime: 120 },
    { name: '第四章 固体制剂', order: 4, importance: 'high', estimatedStudyTime: 150 },
    { name: '第五章 半固体制剂', order: 5, importance: 'medium', estimatedStudyTime: 90 },
    { name: '第六章 气雾剂与喷雾剂', order: 6, importance: 'low', estimatedStudyTime: 60 },
    { name: '第七章 药物制剂稳定性', order: 7, importance: 'medium', estimatedStudyTime: 90 }
  ],
  pharmacyLaw: [
    { name: '第一章 药品管理与药品管理法', order: 1, importance: 'high', estimatedStudyTime: 120 },
    { name: '第二章 药品注册管理', order: 2, importance: 'high', estimatedStudyTime: 120 },
    { name: '第三章 药品生产管理', order: 3, importance: 'high', estimatedStudyTime: 90 },
    { name: '第四章 药品经营管理', order: 4, importance: 'high', estimatedStudyTime: 90 },
    { name: '第五章 医疗机构药事管理', order: 5, importance: 'medium', estimatedStudyTime: 90 },
    { name: '第六章 中药管理', order: 6, importance: 'medium', estimatedStudyTime: 60 },
    { name: '第七章 特殊管理药品', order: 7, importance: 'high', estimatedStudyTime: 90 }
  ],
  comprehensiveSkill: [
    { name: '第一章 药学服务概论', order: 1, importance: 'medium', estimatedStudyTime: 60 },
    { name: '第二章 处方调剂', order: 2, importance: 'high', estimatedStudyTime: 120 },
    { name: '第三章 临床用药管理', order: 3, importance: 'high', estimatedStudyTime: 120 },
    { name: '第四章 用药指导', order: 4, importance: 'high', estimatedStudyTime: 90 },
    { name: '第五章 药物不良反应监测', order: 5, importance: 'high', estimatedStudyTime: 90 },
    { name: '第六章 药物信息服务', order: 6, importance: 'medium', estimatedStudyTime: 60 },
    { name: '第七章 常见病症的自我药疗', order: 7, importance: 'medium', estimatedStudyTime: 120 }
  ]
};

const questionsData = [
  // 药理学题目
  {
    content: '药物的治疗指数是指',
    type: 'single',
    subjectCode: 'pharmacology',
    chapterOrder: 1,
    options: [
      { label: 'A', content: 'ED50/LD50', isCorrect: false },
      { label: 'B', content: 'LD50/ED50', isCorrect: true },
      { label: 'C', content: 'ED95/LD5', isCorrect: false },
      { label: 'D', content: 'LD5/ED95', isCorrect: false }
    ],
    answer: 'B',
    explanation: '治疗指数（TI）= LD50/ED50，是衡量药物安全性的重要指标。治疗指数越大，药物的安全性越高。',
    difficulty: 3,
    importance: 'high',
    source: '真题',
    tags: ['药理学', '总论', '治疗指数']
  },
  {
    content: '阿托品对下列哪种平滑肌松弛作用最强',
    type: 'single',
    subjectCode: 'pharmacology',
    chapterOrder: 2,
    options: [
      { label: 'A', content: '胃肠道平滑肌', isCorrect: true },
      { label: 'B', content: '胆道平滑肌', isCorrect: false },
      { label: 'C', content: '输尿管平滑肌', isCorrect: false },
      { label: 'D', content: '子宫平滑肌', isCorrect: false }
    ],
    answer: 'A',
    explanation: '阿托品对胃肠道平滑肌的解痉作用最强，对胆道、输尿管和子宫平滑肌的作用较弱。',
    difficulty: 3,
    importance: 'high',
    source: '真题',
    tags: ['药理学', '传出神经', '阿托品']
  },
  {
    content: '下列药物中，属于选择性β1受体阻断药的是',
    type: 'single',
    subjectCode: 'pharmacology',
    chapterOrder: 4,
    options: [
      { label: 'A', content: '普萘洛尔', isCorrect: false },
      { label: 'B', content: '阿替洛尔', isCorrect: true },
      { label: 'C', content: '拉贝洛尔', isCorrect: false },
      { label: 'D', content: '噻吗洛尔', isCorrect: false }
    ],
    answer: 'B',
    explanation: '阿替洛尔是选择性β1受体阻断药，对β1受体有较高的选择性，对β2受体影响较小。普萘洛尔是非选择性β受体阻断药。',
    difficulty: 3,
    importance: 'high',
    source: '真题',
    tags: ['药理学', '心血管', 'β受体阻断药']
  },
  // 药剂学题目
  {
    content: '下列关于液体制剂的说法，错误的是',
    type: 'single',
    subjectCode: 'pharmaceutics',
    chapterOrder: 2,
    options: [
      { label: 'A', content: '液体制剂是指药物分散在适宜分散介质中制成的液体形态的制剂', isCorrect: false },
      { label: 'B', content: '溶液型液体制剂是均相分散体系', isCorrect: false },
      { label: 'C', content: '混悬剂属于热力学稳定体系', isCorrect: true },
      { label: 'D', content: '乳剂属于非均相分散体系', isCorrect: false }
    ],
    answer: 'C',
    explanation: '混悬剂属于热力学不稳定体系，动力学不稳定体系。混悬剂中的微粒有聚集和沉降的趋势。',
    difficulty: 3,
    importance: 'medium',
    source: '模拟题',
    tags: ['药剂学', '液体制剂', '混悬剂']
  },
  {
    content: '片剂崩解的机制不包括',
    type: 'single',
    subjectCode: 'pharmaceutics',
    chapterOrder: 4,
    options: [
      { label: 'A', content: '润湿作用', isCorrect: false },
      { label: 'B', content: '毛细管作用', isCorrect: false },
      { label: 'C', content: '膨胀作用', isCorrect: false },
      { label: 'D', content: '脂溶作用', isCorrect: true }
    ],
    answer: 'D',
    explanation: '片剂崩解的机制主要包括：润湿作用、毛细管作用、膨胀作用、产气作用等。脂溶作用不是片剂崩解的机制。',
    difficulty: 2,
    importance: 'medium',
    source: '模拟题',
    tags: ['药剂学', '固体制剂', '片剂']
  },
  // 药事管理与法规题目
  {
    content: '根据《药品管理法》，下列属于假药的是',
    type: 'single',
    subjectCode: 'pharmacyLaw',
    chapterOrder: 1,
    options: [
      { label: 'A', content: '药品成分的含量不符合国家药品标准', isCorrect: false },
      { label: 'B', content: '被污染的药品', isCorrect: false },
      { label: 'C', content: '变质的药品', isCorrect: true },
      { label: 'D', content: '超过有效期的药品', isCorrect: false }
    ],
    answer: 'C',
    explanation: '根据《药品管理法》第九十八条，变质的药品属于假药。药品成分含量不符合标准、被污染的药品、超过有效期的药品属于劣药。',
    difficulty: 3,
    importance: 'high',
    source: '真题',
    tags: ['药事管理', '药品管理法', '假药劣药']
  },
  {
    content: '药品经营企业必须遵守的质量管理规范是',
    type: 'single',
    subjectCode: 'pharmacyLaw',
    chapterOrder: 4,
    options: [
      { label: 'A', content: 'GMP', isCorrect: false },
      { label: 'B', content: 'GSP', isCorrect: true },
      { label: 'C', content: 'GLP', isCorrect: false },
      { label: 'D', content: 'GCP', isCorrect: false }
    ],
    answer: 'B',
    explanation: 'GSP（Good Supply Practice）是药品经营质量管理规范，适用于药品经营企业。GMP适用于药品生产企业，GLP适用于药物非临床研究，GCP适用于药物临床试验。',
    difficulty: 2,
    importance: 'high',
    source: '真题',
    tags: ['药事管理', 'GSP', '质量管理']
  },
  // 综合知识与技能题目
  {
    content: '处方中"Sig."表示',
    type: 'single',
    subjectCode: 'comprehensiveSkill',
    chapterOrder: 2,
    options: [
      { label: 'A', content: '用法用量', isCorrect: true },
      { label: 'B', content: '药品名称', isCorrect: false },
      { label: 'C', content: '处方日期', isCorrect: false },
      { label: 'D', content: '医师签名', isCorrect: false }
    ],
    answer: 'A',
    explanation: 'Sig.（Signa）是拉丁文"标记"的意思，在处方中表示用法用量，是告诉患者如何使用药品的指示。',
    difficulty: 2,
    importance: 'high',
    source: '真题',
    tags: ['综合技能', '处方调剂', '处方术语']
  },
  {
    content: '下列药物中，最容易引起药源性肝损害的是',
    type: 'single',
    subjectCode: 'comprehensiveSkill',
    chapterOrder: 5,
    options: [
      { label: 'A', content: '阿司匹林', isCorrect: false },
      { label: 'B', content: '对乙酰氨基酚', isCorrect: true },
      { label: 'C', content: '布洛芬', isCorrect: false },
      { label: 'D', content: '双氯芬酸', isCorrect: false }
    ],
    answer: 'B',
    explanation: '对乙酰氨基酚（扑热息痛）是最容易引起药源性肝损害的药物之一。过量使用可导致严重的肝细胞坏死，甚至肝衰竭。',
    difficulty: 3,
    importance: 'high',
    source: '真题',
    tags: ['综合技能', '药物不良反应', '肝损害']
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // 清空现有数据
    await Promise.all([
      User.deleteMany({}),
      Subject.deleteMany({}),
      Chapter.deleteMany({}),
      KnowledgePoint.deleteMany({}),
      Question.deleteMany({})
    ]);

    console.log('已清空现有数据');

    // 创建默认用户
    const defaultUser = await User.create({
      username: 'admin',
      email: 'admin@pharmacist.com',
      password: '123456',
      examDate: new Date('2025-10-19'),
      dailyStudyTime: 120
    });
    console.log('已创建默认用户:');
    console.log('  邮箱: admin@pharmacist.com');
    console.log('  密码: 123456');

    // 创建科目
    const createdSubjects = await Subject.insertMany(subjects);
    console.log(`已创建 ${createdSubjects.length} 个科目`);

    // 创建章节和题目
    for (const subject of createdSubjects) {
      const subjectChapters = chaptersData[subject.code] || [];
      const chaptersWithSubject = subjectChapters.map(ch => ({
        ...ch,
        subject: subject._id
      }));
      
      const createdChapters = await Chapter.insertMany(chaptersWithSubject);
      console.log(`已为 ${subject.name} 创建 ${createdChapters.length} 个章节`);

      // 更新科目的章节列表
      subject.chapters = createdChapters.map(ch => ch._id);
      await subject.save();

      // 创建该科目的题目
      const subjectQuestions = questionsData.filter(q => q.subjectCode === subject.code);
      for (const q of subjectQuestions) {
        const chapter = createdChapters.find(ch => ch.order === q.chapterOrder);
        if (chapter) {
          await Question.create({
            ...q,
            subject: subject._id,
            chapter: chapter._id
          });
        }
      }
    }

    console.log(`已创建 ${questionsData.length} 道题目`);

    console.log('数据库初始化完成！');
    process.exit(0);
  } catch (error) {
    console.error('初始化失败:', error);
    process.exit(1);
  }
};

seedDatabase();