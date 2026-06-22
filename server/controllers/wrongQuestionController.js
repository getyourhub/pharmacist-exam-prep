const WrongQuestion = require('../models/WrongQuestion');

// @desc    获取错题列表
// @route   GET /api/wrong-questions
exports.getWrongQuestions = async (req, res) => {
  try {
    const { subject, masteryLevel, isResolved, page = 1, limit = 20 } = req.query;

    const filter = { user: req.user.id };
    if (subject) filter['question.subject'] = subject;
    if (masteryLevel !== undefined) filter.masteryLevel = Number(masteryLevel);
    if (isResolved !== undefined) filter.isResolved = isResolved === 'true';

    const total = await WrongQuestion.countDocuments(filter);
    const wrongQuestions = await WrongQuestion.find(filter)
      .populate({
        path: 'question',
        populate: ['subject', 'chapter', 'knowledgePoints']
      })
      .sort({ lastWrongDate: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({
      success: true,
      data: {
        wrongQuestions,
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
      message: '获取错题失败',
      error: error.message
    });
  }
};

// @desc    获取需要复习的错题
// @route   GET /api/wrong-questions/review
exports.getReviewQuestions = async (req, res) => {
  try {
    const now = new Date();
    
    const wrongQuestions = await WrongQuestion.find({
      user: req.user.id,
      isResolved: false,
      nextReviewDate: { $lte: now }
    })
      .populate({
        path: 'question',
        populate: ['subject', 'chapter', 'knowledgePoints']
      })
      .sort({ masteryLevel: 1, lastWrongDate: 1 })
      .limit(20);

    res.json({
      success: true,
      data: wrongQuestions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取复习题目失败',
      error: error.message
    });
  }
};

// @desc    更新错题掌握程度
// @route   PUT /api/wrong-questions/:id/mastery
exports.updateMastery = async (req, res) => {
  try {
    const { masteryLevel, isCorrect } = req.body;
    
    const wrongQuestion = await WrongQuestion.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!wrongQuestion) {
      return res.status(404).json({
        success: false,
        message: '错题记录不存在'
      });
    }

    // 更新掌握程度
    if (masteryLevel !== undefined) {
      wrongQuestion.masteryLevel = masteryLevel;
    }

    // 如果答对了，更新复习日期
    if (isCorrect) {
      wrongQuestion.reviewCount += 1;
      
      // 根据掌握程度设置下次复习时间（间隔重复）
      const reviewIntervals = {
        0: 1,      // 1天后
        1: 3,      // 3天后
        2: 7,      // 7天后
        3: 14,     // 14天后
        4: 30,     // 30天后
        5: 90      // 90天后
      };
      
      const interval = reviewIntervals[wrongQuestion.masteryLevel] || 7;
      const nextReview = new Date();
      nextReview.setDate(nextReview.getDate() + interval);
      wrongQuestion.nextReviewDate = nextReview;

      // 如果掌握程度达到5，标记为已解决
      if (wrongQuestion.masteryLevel >= 5) {
        wrongQuestion.isResolved = true;
        wrongQuestion.resolvedDate = new Date();
      }
    }

    await wrongQuestion.save();

    res.json({
      success: true,
      message: '更新成功',
      data: wrongQuestion
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '更新失败',
      error: error.message
    });
  }
};

// @desc    添加笔记
// @route   PUT /api/wrong-questions/:id/notes
exports.addNotes = async (req, res) => {
  try {
    const { notes } = req.body;
    
    const wrongQuestion = await WrongQuestion.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { notes },
      { new: true }
    );

    if (!wrongQuestion) {
      return res.status(404).json({
        success: false,
        message: '错题记录不存在'
      });
    }

    res.json({
      success: true,
      message: '笔记添加成功',
      data: wrongQuestion
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '添加笔记失败',
      error: error.message
    });
  }
};

// @desc    获取错题统计
// @route   GET /api/wrong-questions/stats
exports.getStats = async (req, res) => {
  try {
    const userId = req.user.id;

    const stats = await WrongQuestion.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: null,
          totalWrong: { $sum: 1 },
          resolved: {
            $sum: { $cond: ['$isResolved', 1, 0] }
          },
          avgMastery: { $avg: '$masteryLevel' },
          totalReviews: { $sum: '$reviewCount' }
        }
      }
    ]);

    // 按科目统计
    const bySubject = await WrongQuestion.aggregate([
      { $match: { user: userId } },
      {
        $lookup: {
          from: 'questions',
          localField: 'question',
          foreignField: '_id',
          as: 'questionData'
        }
      },
      { $unwind: '$questionData' },
      {
        $group: {
          _id: '$questionData.subject',
          count: { $sum: 1 },
          avgMastery: { $avg: '$masteryLevel' }
        }
      }
    ]);

    res.json({
      success: true,
      data: {
        overview: stats[0] || { totalWrong: 0, resolved: 0, avgMastery: 0, totalReviews: 0 },
        bySubject
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