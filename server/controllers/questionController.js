const Question = require('../models/Question');
const WrongQuestion = require('../models/WrongQuestion');

// @desc    获取题目列表
// @route   GET /api/questions
exports.getQuestions = async (req, res) => {
  try {
    const {
      subject,
      chapter,
      type,
      difficulty,
      importance,
      page = 1,
      limit = 20
    } = req.query;

    const filter = {};
    if (subject) filter.subject = subject;
    if (chapter) filter.chapter = chapter;
    if (type) filter.type = type;
    if (difficulty) filter.difficulty = difficulty;
    if (importance) filter.importance = importance;

    const total = await Question.countDocuments(filter);
    const questions = await Question.find(filter)
      .populate('subject', 'name')
      .populate('chapter', 'name')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({
      success: true,
      data: {
        questions,
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
      message: '获取题目失败',
      error: error.message
    });
  }
};

// @desc    获取单个题目
// @route   GET /api/questions/:id
exports.getQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id)
      .populate('subject', 'name')
      .populate('chapter', 'name')
      .populate('knowledgePoints', 'title');

    if (!question) {
      return res.status(404).json({
        success: false,
        message: '题目不存在'
      });
    }

    res.json({
      success: true,
      data: question
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取题目失败',
      error: error.message
    });
  }
};

// @desc    提交答案
// @route   POST /api/questions/:id/answer
exports.submitAnswer = async (req, res) => {
  try {
    const { answer, timeSpent } = req.body;
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: '题目不存在'
      });
    }

    const isCorrect = answer === question.answer;

    // 更新题目统计
    question.stats.totalAttempts += 1;
    if (isCorrect) question.stats.correctAttempts += 1;
    await question.save();

    // 如果答错，记录到错题本
    if (!isCorrect) {
      await WrongQuestion.findOneAndUpdate(
        { user: req.user.id, question: question._id },
        {
          $inc: { wrongCount: 1 },
          $push: { wrongAnswers: { answer, date: new Date() } },
          lastWrongDate: new Date(),
          isResolved: false
        },
        { upsert: true, new: true }
      );
    }

    // 更新用户统计
    const user = req.user;
    user.studyStats.totalQuestions += 1;
    if (isCorrect) user.studyStats.correctQuestions += 1;
    await user.save();

    res.json({
      success: true,
      data: {
        isCorrect,
        correctAnswer: question.answer,
        explanation: question.explanation
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

// @desc    获取随机题目（练习模式）
// @route   GET /api/questions/random
exports.getRandomQuestions = async (req, res) => {
  try {
    const { subject, chapter, count = 10, difficulty } = req.query;

    const filter = {};
    if (subject) filter.subject = subject;
    if (chapter) filter.chapter = chapter;
    if (difficulty) filter.difficulty = difficulty;

    const questions = await Question.aggregate([
      { $match: filter },
      { $sample: { size: Number(count) } }
    ]);

    res.json({
      success: true,
      data: questions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取题目失败',
      error: error.message
    });
  }
};

// @desc    获取薄弱知识点题目
// @route   GET /api/questions/weak
exports.getWeakQuestions = async (req, res) => {
  try {
    const { count = 10 } = req.query;

    // 获取用户答错最多的题目对应的知识点
    const wrongQuestions = await WrongQuestion.find({
      user: req.user.id,
      isResolved: false
    })
      .sort({ wrongCount: -1 })
      .limit(20)
      .populate({
        path: 'question',
        populate: ['knowledgePoints']
      });

    // 提取薄弱知识点
    const weakPointIds = [];
    wrongQuestions.forEach(wq => {
      if (wq.question && wq.question.knowledgePoints) {
        wq.question.knowledgePoints.forEach(kp => {
          if (!weakPointIds.includes(kp._id.toString())) {
            weakPointIds.push(kp._id.toString());
          }
        });
      }
    });

    // 获取这些知识点的相关题目
    const questions = await Question.find({
      knowledgePoints: { $in: weakPointIds }
    })
      .limit(Number(count))
      .populate('subject', 'name')
      .populate('chapter', 'name');

    res.json({
      success: true,
      data: questions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取题目失败',
      error: error.message
    });
  }
};