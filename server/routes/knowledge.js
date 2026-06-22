const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getKnowledgePoints,
  getKnowledgePoint,
  getKnowledgeFramework,
  searchKnowledge,
  updateReviewStatus,
  getReviewPoints
} = require('../controllers/knowledgeController');

router.use(protect);

router.route('/')
  .get(getKnowledgePoints);

router.route('/search')
  .get(searchKnowledge);

router.route('/review')
  .get(getReviewPoints);

router.route('/framework/:subjectId')
  .get(getKnowledgeFramework);

router.route('/:id')
  .get(getKnowledgePoint);

router.route('/:id/review')
  .put(updateReviewStatus);

module.exports = router;