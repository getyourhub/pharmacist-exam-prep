const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const User = require('../models/User');
const Subject = require('../models/Subject');
const Chapter = require('../models/Chapter');
const KnowledgePoint = require('../models/KnowledgePoint');
const Question = require('../models/Question');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
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
    examInfo: { totalQuestions: 120, totalTime: 150, passingScore: 72, totalScore: 120 },
    color: '#1890ff'
  },
  {
    name: '药学专业知识（二）',
    code: 'pharmaceutics',
    description: '包含药剂学和药物分析，重点考察药物制剂和质量控制',
    examInfo: { totalQuestions: 120, totalTime: 150, passingScore: 72, totalScore: 120 },
    color: '#52c41a'
  },
  {
    name: '药事管理与法规',
    code: 'pharmacyLaw',
    description: '考察药品管理相关法律法规和规章制度',
    examInfo: { totalQuestions: 120, totalTime: 150, passingScore: 72, totalScore: 120 },
    color: '#722ed1'
  },
  {
    name: '综合知识与技能',
    code: 'comprehensiveSkill',
    description: '考察药学服务实践能力和综合应用能力',
    examInfo: { totalQuestions: 120, totalTime: 150, passingScore: 72, totalScore: 120 },
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

const seedDatabase = async () => {
  try {
    await connectDB();

    await Promise.all([
      User.deleteMany({}),
      Subject.deleteMany({}),
      Chapter.deleteMany({}),
      KnowledgePoint.deleteMany({}),
      Question.deleteMany({})
    ]);
    console.log('已清空现有数据');

    const defaultUser = await User.create({
      username: 'admin',
      email: 'admin@pharmacist.com',
      password: '123456',
      examDate: new Date('2026-10-19'),
      dailyStudyTime: 120
    });
    console.log('已创建默认用户: admin@pharmacist.com / 123456');

    const createdSubjects = await Subject.insertMany(subjects);
    console.log(`已创建 ${createdSubjects.length} 个科目`);

    const allChapters = [];
    for (const subject of createdSubjects) {
      const subjectChapters = chaptersData[subject.code] || [];
      const chaptersWithSubject = subjectChapters.map(ch => ({ ...ch, subject: subject._id }));
      const createdChapters = await Chapter.insertMany(chaptersWithSubject);
      allChapters.push({ subject, chapters: createdChapters });
      subject.chapters = createdChapters.map(ch => ch._id);
      await subject.save();
      console.log(`已为 ${subject.name} 创建 ${createdChapters.length} 个章节`);
    }

    let totalQuestions = 0;
    const questionFiles = ['pharmacology', 'pharmaceutics', 'pharmacyLaw', 'comprehensiveSkill'];
    for (const file of questionFiles) {
      const questions = require(`./data/${file}`);
      for (const q of questions) {
        const subject = createdSubjects.find(s => s.code === q.subjectCode);
        if (!subject) continue;
        const chapterInfo = allChapters.find(ac => ac.subject.code === q.subjectCode);
        const chapter = chapterInfo?.chapters.find(ch => ch.order === q.chapterOrder);
        if (!chapter) continue;
        await Question.create({
          ...q,
          subject: subject._id,
          chapter: chapter._id
        });
        totalQuestions++;
      }
    }
    console.log(`已创建 ${totalQuestions} 道题目`);

    const knowledgePoints = require('./data/knowledgePoints');
    let totalKP = 0;
    for (const [subjectCode, kps] of Object.entries(knowledgePoints)) {
      const subject = createdSubjects.find(s => s.code === subjectCode);
      if (!subject) continue;
      const chapterInfo = allChapters.find(ac => ac.subject.code === subjectCode);
      for (const kp of kps) {
        const chapter = chapterInfo?.chapters.find(ch => ch.order === kp.chapterOrder);
        if (!chapter) continue;
        await KnowledgePoint.create({
          ...kp,
          subject: subject._id,
          chapter: chapter._id
        });
        totalKP++;
      }
    }
    console.log(`已创建 ${totalKP} 个知识点`);

    console.log('\n数据库初始化完成！');
    console.log('默认账号: admin@pharmacist.com / 123456');
    console.log('考试日期: 2026-10-19');
    process.exit(0);
  } catch (error) {
    console.error('初始化失败:', error);
    process.exit(1);
  }
};

seedDatabase();
