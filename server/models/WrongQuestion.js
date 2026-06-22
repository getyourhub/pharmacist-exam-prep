const mongoose = require('mongoose');

const wrongQuestionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  wrongCount: {
    type: Number,
    default: 1
  },
  wrongAnswers: [{
    answer: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  masteryLevel: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  lastWrongDate: {
    type: Date,
    default: Date.now
  },
  nextReviewDate: {
    type: Date
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  notes: String,
  isResolved: {
    type: Boolean,
    default: false
  },
  resolvedDate: Date
}, {
  timestamps: true
});

// 复合索引
wrongQuestionSchema.index({ user: 1, question: 1 }, { unique: true });
wrongQuestionSchema.index({ user: 1, masteryLevel: 1 });
wrongQuestionSchema.index({ user: 1, nextReviewDate: 1 });
wrongQuestionSchema.index({ user: 1, isResolved: 1 });

module.exports = mongoose.model('WrongQuestion', wrongQuestionSchema);