const mongoose = require('mongoose');

const examRecordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['mock', 'practice', 'chapter', 'random'],
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  },
  title: {
    type: String,
    required: true
  },
  questions: [{
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true
    },
    userAnswer: String,
    isCorrect: Boolean,
    timeSpent: Number // 秒
  }],
  startTime: {
    type: Date,
    required: true
  },
  endTime: Date,
  duration: Number, // 实际用时（秒）
  totalTime: Number, // 总时长限制（秒）
  score: {
    type: Number,
    default: 0
  },
  totalScore: {
    type: Number,
    required: true
  },
  correctCount: {
    type: Number,
    default: 0
  },
  wrongCount: {
    type: Number,
    default: 0
  },
  skipCount: {
    type: Number,
    default: 0
  },
  accuracy: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['in_progress', 'completed', 'timeout', 'abandoned'],
    default: 'in_progress'
  },
  analysis: {
    weakPoints: [{
      knowledgePoint: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'KnowledgePoint'
      },
      errorCount: Number
    }],
    timeDistribution: {
      fast: Number,    // 快速作答（<30秒）
      normal: Number,  // 正常作答
      slow: Number     // 耗时较长（>2分钟）
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// 虚拟属性：是否及格
examRecordSchema.virtual('isPassed').get(function() {
  return this.score >= this.totalScore * 0.6;
});

// 索引
examRecordSchema.index({ user: 1, createdAt: -1 });
examRecordSchema.index({ user: 1, type: 1 });
examRecordSchema.index({ user: 1, subject: 1 });

module.exports = mongoose.model('ExamRecord', examRecordSchema);