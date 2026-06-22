#!/bin/sh

echo "========================================="
echo "执业药师备考平台 - 后端服务启动"
echo "========================================="

# 显示环境变量（隐藏敏感信息）
echo "环境配置:"
echo "  NODE_ENV: $NODE_ENV"
echo "  PORT: $PORT"
echo "  MONGODB_URI: $(echo $MONGODB_URI | sed 's/\/\/.*@/\/\/***@/')"
echo "  JWT_SECRET: $(echo $JWT_SECRET | cut -c1-10)..."
echo "========================================="

# 等待 MongoDB 启动
if [ "$WAIT_FOR_MONGO" = "true" ]; then
  echo "等待 MongoDB 启动..."
  sleep 5
fi

# 启动应用
echo "启动 Node.js 应用..."
exec node src/index.js