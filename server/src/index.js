const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('../config/db');

// 加载环境变量
dotenv.config();

// 连接数据库
connectDB();

const app = express();

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 开发环境日志
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 路由
app.use('/api/auth', require('../routes/auth'));
app.use('/api/questions', require('../routes/questions'));
app.use('/api/wrong-questions', require('../routes/wrongQuestions'));
app.use('/api/study-plans', require('../routes/studyPlans'));
app.use('/api/exams', require('../routes/exams'));
app.use('/api/knowledge', require('../routes/knowledge'));

// 根路由
app.get('/', (req, res) => {
  res.json({
    message: '执业药师备考平台 API',
    version: '1.0.0',
    status: 'running'
  });
});

// 404处理
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: '请求的资源不存在'
  });
});

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || '服务器内部错误',
    ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {})
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`服务器运行在 ${process.env.NODE_ENV} 模式，端口: ${PORT}`);
});