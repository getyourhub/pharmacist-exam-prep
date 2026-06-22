const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, '请输入用户名'],
    unique: true,
    trim: true,
    minlength: [3, '用户名至少3个字符'],
    maxlength: [20, '用户名最多20个字符']
  },
  email: {
    type: String,
    required: [true, '请输入邮箱'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, '请输入有效的邮箱地址']
  },
  password: {
    type: String,
    required: [true, '请输入密码'],
    minlength: [6, '密码至少6个字符'],
    select: false
  },
  avatar: {
    type: String,
    default: ''
  },
  examDate: {
    type: Date,
    default: () => {
      // 默认考试日期：每年10月
      const now = new Date();
      const year = now.getMonth() >= 10 ? now.getFullYear() + 1 : now.getFullYear();
      return new Date(year, 9, 19); // 10月19日
    }
  },
  dailyStudyTime: {
    type: Number,
    default: 120, // 默认每天学习120分钟
    min: 30,
    max: 480
  },
  studyStats: {
    totalQuestions: { type: Number, default: 0 },
    correctQuestions: { type: Number, default: 0 },
    totalStudyTime: { type: Number, default: 0 }, // 分钟
    streakDays: { type: Number, default: 0 },
    lastStudyDate: { type: Date }
  },
  subjectProgress: {
    pharmacology: { type: Number, default: 0 },      // 药理学
    pharmaceuticalChemistry: { type: Number, default: 0 }, // 药物化学
    pharmaceutics: { type: Number, default: 0 },      // 药剂学
    drugAnalysis: { type: Number, default: 0 },       // 药物分析
    pharmacyLaw: { type: Number, default: 0 },        // 药事管理与法规
    comprehensiveSkill: { type: Number, default: 0 }  // 综合知识与技能
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// 虚拟属性：正确率
userSchema.virtual('accuracy').get(function() {
  if (this.studyStats.totalQuestions === 0) return 0;
  return Math.round((this.studyStats.correctQuestions / this.studyStats.totalQuestions) * 100);
});

// 虚拟属性：距离考试天数
userSchema.virtual('daysUntilExam').get(function() {
  const now = new Date();
  const exam = new Date(this.examDate);
  const diff = exam - now;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
});

// 密码加密中间件
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 验证密码方法
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);