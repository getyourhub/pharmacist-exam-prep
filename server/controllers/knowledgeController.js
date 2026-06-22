const KnowledgePoint = require('../models/KnowledgePoint');
const Chapter = require('../models/Chapter');
const Subject = require('../models/Subject');

// @desc    获取知识点列表
// @route   GET /api/knowledge
exports.getKnowledgePoints = async (req, res) => {
  try {
    const { subject, chapter, importance, frequency, page = 1, limit = 20 } = req.query;

    const filter = {};
    if (subject) filter.subject = subject;
    if (chapter) filter.chapter = chapter;
    if (importance) filter.importance = importance;
    if (frequency) filter.frequency = frequency;

    const total = await KnowledgePoint.countDocuments(filter);
    const points = await KnowledgePoint.find(filter)
      .populate('subject', 'name')
      .populate('chapter', 'name')
      .sort({ importance: -1, frequency: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({
      success: true,
      data: {
        points,
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
      message: '获取知识点失败',
      error: error.message
    });
  }
};

// @desc    获取单个知识点详情
// @route   GET /api/knowledge/:id
exports.getKnowledgePoint = async (req, res) => {
  try {
    const point = await KnowledgePoint.findById(req.params.id)
      .populate('subject', 'name')
      .populate('chapter', 'name')
      .populate('relatedPoints', 'title');

    if (!point) {
      return res.status(404).json({
        success: false,
        message: '知识点不存在'
      });
    }

    res.json({
      success: true,
      data: point
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取知识点失败',
      error: error.message
    });
  }
};

// @desc    获取科目的知识框架
// @route   GET /api/knowledge/framework/:subjectId
exports.getKnowledgeFramework = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.subjectId);
    if (!subject) {
      return res.status(404).json({
        success: false,
        message: '科目不存在'
      });
    }

    const chapters = await Chapter.find({ subject: subject._id })
      .sort({ order: 1 });

    const framework = await Promise.all(
      chapters.map(async (chapter) => {
        const points = await KnowledgePoint.find({ chapter: chapter._id })
          .select('title importance frequency tags')
          .sort({ importance: -1 });

        return {
          chapter: {
            id: chapter._id,
            name: chapter.name,
            description: chapter.description,
            importance: chapter.importance
          },
          knowledgePoints: points
        };
      })
    );

    res.json({
      success: true,
      data: {
        subject: {
          id: subject._id,
          name: subject.name,
          description: subject.description
        },
        chapters: framework
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取知识框架失败',
      error: error.message
    });
  }
};

// @desc    搜索知识点
// @route   GET /api/knowledge/search
exports.searchKnowledge = async (req, res) => {
  try {
    const { keyword } = req.query;

    if (!keyword) {
      return res.status(400).json({
        success: false,
        message: '请输入搜索关键词'
      });
    }

    const points = await KnowledgePoint.find({
      $or: [
        { title: { $regex: keyword, $options: 'i' } },
        { content: { $regex: keyword, $options: 'i' } },
        { tags: { $regex: keyword, $options: 'i' } }
      ]
    })
      .populate('subject', 'name')
      .populate('chapter', 'name')
      .limit(20);

    res.json({
      success: true,
      data: points
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '搜索失败',
      error: error.message
    });
  }
};

// @desc    更新知识点复习状态
// @route   PUT /api/knowledge/:id/review
exports.updateReviewStatus = async (req, res) => {
  try {
    const point = await KnowledgePoint.findById(req.params.id);

    if (!point) {
      return res.status(404).json({
        success: false,
        message: '知识点不存在'
      });
    }

    point.reviewCount += 1;
    point.lastReviewDate = new Date();

    // 根据复习次数设置下次复习时间
    const reviewIntervals = [1, 3, 7, 14, 30, 60];
    const interval = reviewIntervals[Math.min(point.reviewCount - 1, reviewIntervals.length - 1)];
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);
    point.nextReviewDate = nextReview;

    await point.save();

    res.json({
      success: true,
      message: '复习状态更新成功',
      data: point
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '更新失败',
      error: error.message
    });
  }
};

// @desc    获取需要复习的知识点
// @route   GET /api/knowledge/review
exports.getReviewPoints = async (req, res) => {
  try {
    const now = new Date();

    const points = await KnowledgePoint.find({
      nextReviewDate: { $lte: now }
    })
      .populate('subject', 'name')
      .populate('chapter', 'name')
      .sort({ nextReviewDate: 1 })
      .limit(20);

    res.json({
      success: true,
      data: points
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取复习知识点失败',
      error: error.message
    });
  }
};