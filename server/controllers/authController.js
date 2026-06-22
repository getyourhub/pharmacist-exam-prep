const jwt = require('jsonwebtoken');
const User = require('../models/User');

// 生成Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// @desc    注册用户
// @route   POST /api/auth/register
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 检查用户是否已存在
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: '用户名或邮箱已被注册'
      });
    }

    // 创建用户
    const user = await User.create({
      username,
      email,
      password
    });

    // 生成Token
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: '注册成功',
      data: {
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '注册失败',
      error: error.message
    });
  }
};

// @desc    用户登录
// @route   POST /api/auth/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 验证邮箱和密码
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: '请输入邮箱和密码'
      });
    }

    // 查找用户
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({
        success: false,
        message: '邮箱或密码错误'
      });
    }

    // 验证密码
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: '邮箱或密码错误'
      });
    }

    // 生成Token
    const token = generateToken(user._id);

    res.json({
      success: true,
      message: '登录成功',
      data: {
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          examDate: user.examDate,
          studyStats: user.studyStats
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '登录失败',
      error: error.message
    });
  }
};

// @desc    获取当前用户信息
// @route   GET /api/auth/me
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取用户信息失败',
      error: error.message
    });
  }
};

// @desc    更新用户信息
// @route   PUT /api/auth/profile
exports.updateProfile = async (req, res) => {
  try {
    const { username, email, examDate, dailyStudyTime } = req.body;
    
    const user = await User.findById(req.user.id);
    
    if (username) user.username = username;
    if (email) user.email = email;
    if (examDate) user.examDate = examDate;
    if (dailyStudyTime) user.dailyStudyTime = dailyStudyTime;
    
    await user.save();

    res.json({
      success: true,
      message: '更新成功',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '更新失败',
      error: error.message
    });
  }
};

// @desc    修改密码
// @route   PUT /api/auth/password
exports.updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    
    const user = await User.findById(req.user.id).select('+password');
    
    // 验证当前密码
    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: '当前密码错误'
      });
    }
    
    user.password = newPassword;
    await user.save();
    
    const token = generateToken(user._id);

    res.json({
      success: true,
      message: '密码修改成功',
      data: { token }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '密码修改失败',
      error: error.message
    });
  }
};