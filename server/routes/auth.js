const express = require('express');
const router = express.Router();
const { defaultUser } = require('../middleware/auth');
const User = require('../models/User');

// 所有认证接口改为直接返回默认用户，无需登录

// 登录接口 - 直接返回默认用户
router.post('/login', defaultUser, async (req, res) => {
  try {
    res.json({
      success: true,
      message: '登录成功',
      data: {
        token: 'local-token-no-auth',
        user: {
          id: req.user._id,
          username: req.user.username,
          email: req.user.email,
          avatar: req.user.avatar,
          examDate: req.user.examDate,
          studyStats: req.user.studyStats
        }
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: '获取用户信息失败' });
  }
});

// 注册接口 - 直接返回默认用户
router.post('/register', defaultUser, async (req, res) => {
  res.json({
    success: true,
    message: '注册成功',
    data: {
      token: 'local-token-no-auth',
      user: {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email
      }
    }
  });
});

// 获取当前用户
router.get('/me', defaultUser, async (req, res) => {
  try {
    res.json({
      success: true,
      data: req.user
    });
  } catch (error) {
    res.status(500).json({ success: false, message: '获取用户信息失败' });
  }
});

// 更新用户信息
router.put('/profile', defaultUser, async (req, res) => {
  try {
    const { username, examDate, dailyStudyTime } = req.body;
    if (username) req.user.username = username;
    if (examDate) req.user.examDate = examDate;
    if (dailyStudyTime) req.user.dailyStudyTime = dailyStudyTime;
    await req.user.save();

    res.json({
      success: true,
      message: '更新成功',
      data: req.user
    });
  } catch (error) {
    res.status(500).json({ success: false, message: '更新失败' });
  }
});

// 修改密码（无实际意义，但保留接口兼容）
router.put('/password', defaultUser, async (req, res) => {
  res.json({
    success: true,
    message: '密码修改成功',
    data: { token: 'local-token-no-auth' }
  });
});

module.exports = router;
