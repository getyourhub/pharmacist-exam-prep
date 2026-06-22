const StudyPlan = require('../models/StudyPlan');
const Subject = require('../models/Subject');
const Chapter = require('../models/Chapter');

// @desc    生成学习计划
// @route   POST /api/study-plans/generate
exports.generatePlan = async (req, res) => {
  try {
    const { startDate, endDate, dailyStudyMinutes, studyDaysPerWeek } = req.body;
    const userId = req.user.id;

    // 获取所有科目和章节
    const subjects = await Subject.find().populate('chapters');
    
    if (!subjects.length) {
      return res.status(400).json({
        success: false,
        message: '暂无科目数据'
      });
    }

    // 计算总学习天数
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    
    // 计算可用学习天数（排除休息日）
    const weeksCount = Math.ceil(totalDays / 7);
    const restDays = weeksCount * (7 - studyDaysPerWeek);
    const availableDays = totalDays - restDays;

    // 分配每日学习任务
    const dailyTasks = [];
    let currentDate = new Date(start);
    let subjectIndex = 0;
    let chapterIndex = 0;

    // 计算每个科目需要的天数
    const totalChapters = subjects.reduce((sum, s) => sum + s.chapters.length, 0);
    const daysPerChapter = availableDays / totalChapters;

    for (let day = 0; day < totalDays; day++) {
      // 检查是否是休息日
      const dayOfWeek = currentDate.getDay();
      const isRestDay = !studyDaysPerWeek === 7 && 
        (dayOfWeek === 0 || (studyDaysPerWeek <= 5 && dayOfWeek === 6));

      if (!isRestDay && subjectIndex < subjects.length) {
        const subject = subjects[subjectIndex];
        const chapter = subject.chapters[chapterIndex];

        const tasks = [];

        // 知识点学习任务
        tasks.push({
          type: 'study',
          subject: subject._id,
          chapter: chapter ? chapter._id : null,
          title: `学习${subject.name}${chapter ? ' - ' + chapter.name : ''}`,
          description: `完成本章知识点学习`,
          targetTime: Math.round(dailyStudyMinutes * 0.6),
          status: 'pending'
        });

        // 练习任务
        tasks.push({
          type: 'practice',
          subject: subject._id,
          chapter: chapter ? chapter._id : null,
          title: `${subject.name}章节练习`,
          description: `完成20道练习题`,
          targetTime: Math.round(dailyStudyMinutes * 0.4),
          status: 'pending'
        });

        dailyTasks.push({
          date: new Date(currentDate),
          tasks,
          totalTargetTime: dailyStudyMinutes,
          isCompleted: false
        });

        // 移动到下一章
        chapterIndex++;
        if (chapterIndex >= subject.chapters.length) {
          chapterIndex = 0;
          subjectIndex++;
        }
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    // 创建学习计划
    const plan = await StudyPlan.create({
      user: userId,
      title: `执业药师备考计划 - ${start.toLocaleDateString()}至${end.toLocaleDateString()}`,
      startDate: start,
      endDate: end,
      dailyTasks,
      progress: {
        totalTasks: dailyTasks.reduce((sum, d) => sum + d.tasks.length, 0),
        completedTasks: 0,
        skippedTasks: 0
      },
      preferences: {
        studyDaysPerWeek,
        dailyStudyMinutes,
        includeWeekends: studyDaysPerWeek >= 6
      }
    });

    res.status(201).json({
      success: true,
      message: '学习计划生成成功',
      data: plan
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '生成学习计划失败',
      error: error.message
    });
  }
};

// @desc    获取当前学习计划
// @route   GET /api/study-plans/current
exports.getCurrentPlan = async (req, res) => {
  try {
    const plan = await StudyPlan.findOne({
      user: req.user.id,
      status: 'active'
    }).populate('dailyTasks.tasks.subject', 'name color');

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: '暂无学习计划'
      });
    }

    res.json({
      success: true,
      data: plan
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取学习计划失败',
      error: error.message
    });
  }
};

// @desc    获取今日任务
// @route   GET /api/study-plans/today
exports.getTodayTasks = async (req, res) => {
  try {
    const plan = await StudyPlan.findOne({
      user: req.user.id,
      status: 'active'
    });

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: '暂无学习计划'
      });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayTasks = plan.dailyTasks.find(d => {
      const taskDate = new Date(d.date);
      taskDate.setHours(0, 0, 0, 0);
      return taskDate.getTime() === today.getTime();
    });

    res.json({
      success: true,
      data: todayTasks || { date: today, tasks: [], totalTargetTime: 0, isCompleted: true }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取今日任务失败',
      error: error.message
    });
  }
};

// @desc    更新任务状态
// @route   PUT /api/study-plans/tasks/:taskId
exports.updateTaskStatus = async (req, res) => {
  try {
    const { status, actualTime } = req.body;
    
    const plan = await StudyPlan.findOne({
      user: req.user.id,
      status: 'active'
    });

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: '学习计划不存在'
      });
    }

    // 查找并更新任务
    let taskFound = false;
    for (const dailyTask of plan.dailyTasks) {
      const task = dailyTask.tasks.id(req.params.taskId);
      if (task) {
        task.status = status;
        if (actualTime) task.actualTime = actualTime;
        if (status === 'completed') task.completedAt = new Date();
        
        // 更新每日统计
        dailyTask.totalActualTime = dailyTask.tasks.reduce((sum, t) => sum + (t.actualTime || 0), 0);
        dailyTask.isCompleted = dailyTask.tasks.every(t => 
          t.status === 'completed' || t.status === 'skipped'
        );
        
        taskFound = true;
        break;
      }
    }

    if (!taskFound) {
      return res.status(404).json({
        success: false,
        message: '任务不存在'
      });
    }

    // 更新总体进度
    plan.progress.completedTasks = plan.dailyTasks.reduce((sum, d) => 
      sum + d.tasks.filter(t => t.status === 'completed').length, 0
    );
    plan.progress.skippedTasks = plan.dailyTasks.reduce((sum, d) => 
      sum + d.tasks.filter(t => t.status === 'skipped').length, 0
    );

    await plan.save();

    res.json({
      success: true,
      message: '任务状态更新成功',
      data: plan
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '更新任务状态失败',
      error: error.message
    });
  }
};

// @desc    获取学习计划统计
// @route   GET /api/study-plans/stats
exports.getPlanStats = async (req, res) => {
  try {
    const plan = await StudyPlan.findOne({
      user: req.user.id,
      status: 'active'
    });

    if (!plan) {
      return res.json({
        success: true,
        data: {
          totalDays: 0,
          completedDays: 0,
          totalTasks: 0,
          completedTasks: 0,
          totalStudyTime: 0,
          averageDailyTime: 0
        }
      });
    }

    const completedDays = plan.dailyTasks.filter(d => d.isCompleted).length;
    const totalStudyTime = plan.dailyTasks.reduce((sum, d) => sum + (d.totalActualTime || 0), 0);

    res.json({
      success: true,
      data: {
        totalDays: plan.dailyTasks.length,
        completedDays,
        totalTasks: plan.progress.totalTasks,
        completedTasks: plan.progress.completedTasks,
        skippedTasks: plan.progress.skippedTasks,
        totalStudyTime,
        averageDailyTime: completedDays > 0 ? Math.round(totalStudyTime / completedDays) : 0,
        completionRate: plan.completionRate
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取统计失败',
      error: error.message
    });
  }
};