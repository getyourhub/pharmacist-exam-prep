const User = require('../models/User');

// 默认用户中间件 - 无需登录，自动使用本地默认用户
const defaultUser = async (req, res, next) => {
  try {
    // 查找或创建默认用户
    let user = await User.findOne({ email: 'local@pharmacist.com' });
    
    if (!user) {
      user = await User.create({
        username: '学习者',
        email: 'local@pharmacist.com',
        password: 'local-no-login-2024',
        examDate: new Date('2026-10-19'),
        dailyStudyTime: 120
      });
    }
    
    req.user = user;
    next();
  } catch (error) {
    console.error('默认用户创建失败:', error.message);
    next();
  }
};

// 保留旧接口兼容
const protect = defaultUser;
const authorize = (...roles) => (req, res, next) => next();

module.exports = { protect, authorize, defaultUser };
