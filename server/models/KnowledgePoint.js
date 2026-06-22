const mongoose = require('mongoose');

const knowledgePointSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '请输入知识点标题'],
    trim: true
  },
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  keyPoints: [String],      // 关键点列表
  examples: [String],       // 举例说明
  mnemonics: [String],      // 记忆口诀
  relatedPoints: [{         // 关联知识点
    type: mongoose.Schema.Types.ObjectId,
    ref: 'KnowledgePoint'
  }],
  importance: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'medium'
  },
  frequency: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'medium'
  },
  tags: [String],
  reviewCount: {
    type: Number,
    default: 0
  },
  lastReviewDate: Date,
  nextReviewDate: Date
}, {
  timestamps: true
});

// 索引
knowledgePointSchema.index({ chapter: 1 });
knowledgePointSchema.index({ subject: 1 });
knowledgePointSchema.index({ importance: 1, frequency: 1 });

module.exports = mongoose.model('KnowledgePoint', knowledgePointSchema);