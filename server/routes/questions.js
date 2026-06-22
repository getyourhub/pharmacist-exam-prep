const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getQuestions,
  getQuestion,
  submitAnswer,
  getRandomQuestions,
  getWeakQuestions
} = require('../controllers/questionController');

router.use(protect);

router.route('/')
  .get(getQuestions);

router.route('/random')
  .get(getRandomQuestions);

router.route('/weak')
  .get(getWeakQuestions);

router.route('/:id')
  .get(getQuestion);

router.route('/:id/answer')
  .post(submitAnswer);

module.exports = router;