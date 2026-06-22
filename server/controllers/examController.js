const ExamRecord = require('../models/ExamRecord');
const Question = require('../models/Question');
const WrongQuestion = require('../models/WrongQuestion');

// @desc    开始模拟考试
// @route   POST /api/exams/start
exports.startExam = async (req, res) => {
  try {
    const { type, subject, questionCount = 100, totalTime = 150 } = req.body;

    let questions;
    
    if (type === 'mock') {
      // 模拟考试：随机抽取指定数量题目
      const filter = {};
      if (subject) filter.subject = subject;
      
      questions = await Question.aggregate([
        { $match: filter },
        { $sample: { size: questionCount } }
      ]);
    } else if (type === 'chapter') {
      // 章节练习：从指定章节抽取
      const { chapter } = req.body;
      questions = await Question.find({ chapter }).limit(questionCount);
    } else if (type === 'random') {
      // 随机练习
      questions = await Question.aggregate([
        { $sample: { size: questionCount } }
      ]);
    }

    if (!questions || questions.length === 0) {
      return res.status(400).json({
        success: false,
        message: '暂无可用题目'
      });
    }

    // 创建考试记录
    const exam = await ExamRecord.create({
      user: req.user.id,
      type,
      subject,
      title: `${type === 'mock' ? '模拟考试' : '练习'} - ${new Date().toLocaleDateString()}`,
      questions: questions.map(q => ({
        question: q._id,
        userAnswer: null,
        isCorrect: null,
        timeSpent: 0
      })),
      startTime: new Date(),
      totalTime: totalTime * 60, // 转换为秒
      totalScore: questions.length,
      status: 'in_progress'
    });

    // 返回题目（不含答案）
    const examQuestions = questions.map((q, index) => ({
      index: index + 1,
      id: q._id,
      content: q.content,
      type: q.type,
      options: q.options.map(o => ({
        label: o.label,
        content: o.content
      }))
    }));

    res.status(201).json({
      success: true,
      message: '考试开始',
      data: {
        examId: exam._id,
        title: exam.title,
        questions: examQuestions,
        totalTime: exam.totalTime,
        totalQuestions: questions.length
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '开始考试失败',
      error: error.message
    });
  }
};

// @desc    提交单题答案
// @route   POST /api/exams/:examId/answer
exports.submitExamAnswer = async (req, res) => {
  try {
    const { questionIndex, answer, timeSpent } = req.body;
    
    const exam = await ExamRecord.findOne({
      _id: req.params.examId,
      user: req.user.id,
      status: 'in_progress'
    });

    if (!exam) {
      return res.status(404).json({
        success: false,
        message: '考试不存在或已结束'
      });
    }

    // 更新答案
    const questionRecord = exam.questions[questionIndex - 1];
    if (!questionRecord) {
      return res.status(400).json({
        success: false,
        message: '题目索引无效'
      });
    }

    // 获取正确答案
    const question = await Question.findById(questionRecord.question);
    const isCorrect = answer === question.answer;

    questionRecord.userAnswer = answer;
    questionRecord.isCorrect = isCorrect;
    questionRecord.timeSpent = timeSpent;

    await exam.save();

    res.json({
      success: true,
      data: {
        isCorrect,
        correctAnswer: question.answer
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '提交答案失败',
      error: error.message
    });
  }
};

// @desc    结束考试
// @route   POST /api/exams/:examId/finish
exports.finishExam = async (req, res) => {
  try {
    const exam = await ExamRecord.findOne({
      _id: req.params.examId,
      user: req.user.id,
      status: 'in_progress'
    }).populate('questions.question');

    if (!exam) {
      return res.status(404).json({
        success: false,
        message: '考试不存在或已结束'
      });
    }

    // 计算成绩
    let correctCount = 0;
    let wrongCount = 0;
    let skipCount = 0;
    const weakPoints = [];

    exam.questions.forEach(q => {
      if (!q.userAnswer) {
        skipCount++;
      } else if (q.isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
        // 记录错题
        if (q.question.knowledgePoints) {
          q.question.knowledgePoints.forEach(kpId => {
            const existing = weakPoints.find(w => w.knowledgePoint.equals(kpId));
            if (existing) {
              existing.errorCount++;
            } else {
              weakPoints.push({ knowledgePoint: kpId, errorCount: 1 });
            }
          });
        }
      }
    });

    // 更新考试记录
    exam.endTime = new Date();
    exam.duration = Math.round((exam.endTime - exam.startTime) / 1000);
    exam.score = correctCount;
    exam.correctCount = correctCount;
    exam.wrongCount = wrongCount;
    exam.skipCount = skipCount;
    exam.accuracy = Math.round((correctCount / exam.questions.length) * 100);
    exam.status = 'completed';
    exam.analysis = { weakPoints };

    await exam.save();

    // 记录错题到错题本
    for (const q of exam.questions) {
      if (q.userAnswer && !q.isCorrect) {
        await WrongQuestion.findOneAndUpdate(
          { user: req.user.id, question: q.question._id },
          {
            $inc: { wrongCount: 1 },
            $push: { wrongAnswers: { answer: q.userAnswer, date: new Date() } },
            lastWrongDate: new Date(),
            isResolved: false
          },
          { upsert: true, new: true }
        );
      }
    }

    // 更新用户统计
    const user = req.user;
    user.studyStats.totalQuestions += exam.questions.length;
    user.studyStats.correctQuestions += correctCount;
    await user.save();

    // 返回详细结果
    res.json({
      success: true,
      message: '考试完成',
      data: {
        examId: exam._id,
        title: exam.title,
        score: exam.score,
        totalScore: exam.totalScore,
        accuracy: exam.accuracy,
        isPassed: exam.isPassed,
        correctCount,
        wrongCount,
        skipCount,
        duration: exam.duration,
        weakPoints: exam.analysis.weakPoints
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '结束考试失败',
      error: error.message
    });
  }
};

// @desc    获取考试详情
// @route   GET /api/exams/:examId
exports.getExamDetail = async (req, res) => {
  try {
    const exam = await ExamRecord.findOne({
      _id: req.params.examId,
      user: req.user.id
    }).populate('questions.question');

    if (!exam) {
      return res.status(404).json({
        success: false,
        message: '考试记录不存在'
      });
    }

    // 构建详细结果
    const questions = exam.questions.map((q, index) => ({
      index: index + 1,
      content: q.question.content,
      type: q.question.type,
      options: q.question.options,
      userAnswer: q.userAnswer,
      correctAnswer: q.question.answer,
      isCorrect: q.isCorrect,
      explanation: q.question.explanation,
      timeSpent: q.timeSpent
    }));

    res.json({
      success: true,
      data: {
        ...exam.toObject(),
        questions
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取考试详情失败',
      error: error.message
    });
  }
};

// @desc    获取考试历史
// @route   GET /api/exams
exports.getExamHistory = async (req, res) => {
  try {
    const { type, subject, status, page = 1, limit = 10 } = req.query;

    const filter = { user: req.user.id };
    if (type) filter.type = type;
    if (subject) filter.subject = subject;
    if (status) filter.status = status;

    const total = await ExamRecord.countDocuments(filter);
    const exams = await ExamRecord.find(filter)
      .select('-questions')
      .populate('subject', 'name')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({
      success: true,
      data: {
        exams,
        pagination: {
          total,
          page: Number(page),
          limit: Number(limit),
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取考试历史失败',
      error: error.message
    });
  }
};

// @desc    获取考试统计
// @route   GET /api/exams/stats
exports.getExamStats = async (req, res) => {
  try {
    const userId = req.user.id;

    const stats = await ExamRecord.aggregate([
      { $match: { user: userId, status: 'completed' } },
      {
        $group: {
          _id: null,
          totalExams: { $sum: 1 },
          avgScore: { $avg: '$accuracy' },
          highestScore: { $max: '$accuracy' },
          totalQuestions: { $sum: { $size: '$questions' } },
          totalCorrect: { $sum: '$correctCount' }
        }
      }
    ]);

    // 按类型统计
    const byType = await ExamRecord.aggregate([
      { $match: { user: userId, status: 'completed' } },
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 },
          avgScore: { $avg: '$accuracy' }
        }
      }
    ]);

    // 最近考试趋势
    const recentExams = await ExamRecord.find({
      user: userId,
      status: 'completed'
    })
      .select('accuracy createdAt')
      .sort({ createdAt: -1 })
      .limit(10);

    res.json({
      success: true,
      data: {
        overview: stats[0] || {
          totalExams: 0,
          avgScore: 0,
          highestScore: 0,
          totalQuestions: 0,
          totalCorrect: 0
        },
        byType,
        recentTrend: recentExams.reverse()
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