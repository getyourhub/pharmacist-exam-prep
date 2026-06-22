const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  startExam,
  submitExamAnswer,
  finishExam,
  getExamDetail,
  getExamHistory,
  getExamStats
} = require('../controllers/examController');

router.use(protect);

router.route('/')
  .get(getExamHistory);

router.route('/stats')
  .get(getExamStats);

router.route('/start')
  .post(startExam);

router.route('/:examId')
  .get(getExamDetail);

router.route('/:examId/answer')
  .post(submitExamAnswer);

router.route('/:examId/finish')
  .post(finishExam);

module.exports = router;