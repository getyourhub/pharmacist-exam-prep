#!/bin/bash

echo "==================================="
echo "  执业药师备考平台启动脚本"
echo "==================================="

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "错误: 未安装 Node.js"
    echo "请访问 https://nodejs.org/ 下载安装"
    exit 1
fi

# 检查 MongoDB
if ! command -v mongod &> /dev/null; then
    echo "警告: 未检测到 MongoDB"
    echo "请确保 MongoDB 已安装并启动"
fi

# 检查依赖
echo "检查并安装依赖..."

# 安装后端依赖
echo "安装后端依赖..."
cd server
npm install
cd ..

# 安装前端依赖
echo "安装前端依赖..."
cd client
npm install
cd ..

# 检查环境变量
if [ ! -f "server/.env" ]; then
    echo "创建环境变量文件..."
    cp server/.env.example server/.env
    echo "请编辑 server/.env 文件配置数据库连接等信息"
fi

# 初始化数据库
echo ""
read -p "是否初始化数据库？(y/n): " init_db
if [ "$init_db" = "y" ] || [ "$init_db" = "Y" ]; then
    echo "初始化数据库..."
    cd server
    npm run seed
    cd ..
fi

# 启动服务
echo ""
echo "==================================="
echo "  启动服务"
echo "==================================="

# 启动后端
echo "启动后端服务..."
cd server
npm run dev &
BACKEND_PID=$!
cd ..

# 等待后端启动
sleep 3

# 启动前端
echo "启动前端应用..."
cd client
npm start &
FRONTEND_PID=$!
cd ..

echo ""
echo "==================================="
echo "  服务已启动"
echo "==================================="
echo "后端服务: http://localhost:5000"
echo "前端应用: http://localhost:3000"
echo ""
echo "按 Ctrl+C 停止所有服务"

# 捕获退出信号
trap "kill $BACKEND_PID $FRONTEND_PID; exit" INT TERM

# 等待
wait