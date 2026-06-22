const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;
  
  if (!mongoURI) {
    console.error('错误: MONGODB_URI 环境变量未设置');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB 已连接: ${conn.connection.host}`);
  } catch (error) {
    console.error(`数据库连接错误: ${error.message}`);
    console.error(`连接字符串: ${mongoURI.replace(/\/\/.*@/, '//***@')}`);
    process.exit(1);
  }
};

module.exports = connectDB;