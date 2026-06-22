const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getWrongQuestions,
  getReviewQuestions,
  updateMastery,
  addNotes,
  getStats
} = require('../controllers/wrongQuestionController');

router.use(protect);

router.route('/')
  .get(getWrongQuestions);

router.route('/review')
  .get(getReviewQuestions);

router.route('/stats')
  .get(getStats);

router.route('/:id/mastery')
  .put(updateMastery);

router.route('/:id/notes')
  .put(addNotes);

module.exports = router;