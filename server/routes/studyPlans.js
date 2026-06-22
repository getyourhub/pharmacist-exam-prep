const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  generatePlan,
  getCurrentPlan,
  getTodayTasks,
  updateTaskStatus,
  getPlanStats
} = require('../controllers/studyPlanController');

router.use(protect);

router.route('/generate')
  .post(generatePlan);

router.route('/current')
  .get(getCurrentPlan);

router.route('/today')
  .get(getTodayTasks);

router.route('/stats')
  .get(getPlanStats);

router.route('/tasks/:taskId')
  .put(updateTaskStatus);

module.exports = router;