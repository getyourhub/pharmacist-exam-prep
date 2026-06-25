const express = require('express');
const router = express.Router();
const { defaultUser } = require('../middleware/auth');
const {
  getSubjects,
  getKnowledgePoints,
  getKnowledgePoint,
  getKnowledgeFramework,
  searchKnowledge,
  updateReviewStatus,
  getReviewPoints
} = require('../controllers/knowledgeController');

// 公开接口，无需认证
router.get('/subjects', getSubjects);
router.get('/search', searchKnowledge);
router.get('/review', defaultUser, getReviewPoints);
router.get('/framework/:subjectId', getKnowledgeFramework);
router.get('/', getKnowledgePoints);
router.get('/:id', getKnowledgePoint);
router.put('/:id/review', defaultUser, updateReviewStatus);

module.exports = router;
