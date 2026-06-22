const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '请输入科目名称'],
    unique: true,
    trim: true
  },
  code: {
    type: String,
    required: true,
    unique: true,
    enum: ['pharmacology', 'pharmaceuticalChemistry', 'pharmaceutics', 'drugAnalysis', 'pharmacyLaw', 'comprehensiveSkill']
  },
  description: {
    type: String,
    required: true
  },
  examInfo: {
    totalQuestions: { type: Number, required: true },    // 总题数
    totalTime: { type: Number, required: true },         // 考试时间（分钟）
    passingScore: { type: Number, required: true },      // 及格分数
    totalScore: { type: Number, required: true }         // 总分
  },
  chapters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  }],
  weight: {
    type: Number,
    default: 1,
    min: 1,
    max: 5
  },
  icon: {
    type: String,
    default: 'book'
  },
  color: {
    type: String,
    default: '#1890ff'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Subject', subjectSchema);