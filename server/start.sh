#!/bin/sh

echo "========================================="
echo "执业药师备考平台 - 后端服务启动"
echo "========================================="

echo "环境配置:"
echo "  NODE_ENV: $NODE_ENV"
echo "  PORT: $PORT"
echo "========================================="

if [ "$WAIT_FOR_MONGO" = "true" ]; then
  echo "等待 MongoDB 启动..."
  for i in $(seq 1 30); do
    if node -e "
      const mongoose = require('mongoose');
      mongoose.connect(process.env.MONGODB_URI, {serverSelectionTimeoutMS: 2000})
        .then(() => { console.log('OK'); process.exit(0); })
        .catch(() => process.exit(1));
    " 2>/dev/null; then
      echo "MongoDB 已就绪"
      break
    fi
    echo "  等待中... ($i/30)"
    sleep 2
  done
fi

echo "启动 Node.js 应用..."
exec node src/index.js
