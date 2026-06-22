const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '请输入章节名称'],
    trim: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  knowledgePoints: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KnowledgePoint'
  }],
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }],
  importance: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'medium'
  },
  estimatedStudyTime: {
    type: Number, // 预计学习时间（分钟）
    default: 60
  }
}, {
  timestamps: true
});

// 复合索引
chapterSchema.index({ subject: 1, order: 1 });

module.exports = mongoose.model('Chapter', chapterSchema);