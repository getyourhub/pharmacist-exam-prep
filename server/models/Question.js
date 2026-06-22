const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, '请输入题目内容'],
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['single', 'multiple', 'judge', 'case'], // 单选、多选、判断、案例分析
    default: 'single'
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',
    required: true
  },
  knowledgePoints: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KnowledgePoint'
  }],
  options: [{
    label: {
      type: String,
      required: true,
      enum: ['A', 'B', 'C', 'D', 'E', 'F']
    },
    content: {
      type: String,
      required: true
    },
    isCorrect: {
      type: Boolean,
      default: false
    }
  }],
  answer: {
    type: String,
    required: true
  },
  explanation: {
    type: String,
    required: true
  },
  difficulty: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    default: 3
  },
  importance: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'medium'
  },
  source: {
    type: String,
    enum: ['真题', '模拟题', '练习题', '预测题'],
    default: '练习题'
  },
  year: Number, // 真题年份
  stats: {
    totalAttempts: { type: Number, default: 0 },
    correctAttempts: { type: Number, default: 0 }
  },
  tags: [String]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// 虚拟属性：正确率
questionSchema.virtual('accuracy').get(function() {
  if (this.stats.totalAttempts === 0) return 0;
  return Math.round((this.stats.correctAttempts / this.stats.totalAttempts) * 100);
});

// 索引
questionSchema.index({ subject: 1, chapter: 1 });
questionSchema.index({ type: 1 });
questionSchema.index({ difficulty: 1 });
questionSchema.index({ importance: 1 });
questionSchema.index({ tags: 1 });

module.exports = mongoose.model('Question', questionSchema);