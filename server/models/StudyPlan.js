const mongoose = require('mongoose');

const studyPlanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  dailyTasks: [{
    date: {
      type: Date,
      required: true
    },
    tasks: [{
      type: {
        type: String,
        enum: ['study', 'practice', 'review', 'exam'],
        required: true
      },
      subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
      },
      chapter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
      },
      title: String,
      description: String,
      targetTime: Number, // 目标时长（分钟）
      actualTime: Number, // 实际时长
      status: {
        type: String,
        enum: ['pending', 'in_progress', 'completed', 'skipped'],
        default: 'pending'
      },
      completedAt: Date
    }],
    totalTargetTime: Number,
    totalActualTime: Number,
    isCompleted: {
      type: Boolean,
      default: false
    }
  }],
  progress: {
    totalTasks: { type: Number, default: 0 },
    completedTasks: { type: Number, default: 0 },
    skippedTasks: { type: Number, default: 0 }
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'paused', 'cancelled'],
    default: 'active'
  },
  preferences: {
    studyDaysPerWeek: {
      type: Number,
      default: 6,
      min: 1,
      max: 7
    },
    dailyStudyMinutes: {
      type: Number,
      default: 120,
      min: 30,
      max: 480
    },
    includeWeekends: {
      type: Boolean,
      default: true
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// 虚拟属性：完成进度百分比
studyPlanSchema.virtual('completionRate').get(function() {
  if (this.progress.totalTasks === 0) return 0;
  return Math.round((this.progress.completedTasks / this.progress.totalTasks) * 100);
});

// 索引
studyPlanSchema.index({ user: 1, status: 1 });

module.exports = mongoose.model('StudyPlan', studyPlanSchema);