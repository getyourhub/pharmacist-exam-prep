#!/bin/bash

echo "========================================="
echo "执业药师备考平台 - 一键部署脚本"
echo "========================================="

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 检查 Docker
if ! command -v docker &> /dev/null; then
    echo -e "${RED}错误: 未安装 Docker${NC}"
    exit 1
fi

# 检查 Docker Compose
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo -e "${RED}错误: 未安装 Docker Compose${NC}"
    exit 1
fi

# 创建项目目录
PROJECT_DIR="pharmacist-exam-deploy"
mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

echo -e "${YELLOW}1. 创建 docker-compose.yml...${NC}"

# 创建 docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  mongodb:
    image: mongo:6
    container_name: pharmacist-mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
    restart: unless-stopped

  backend:
    image: getyourhub/pharmacist-backend:latest
    container_name: pharmacist-backend
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - PORT=5000
      - MONGODB_URI=mongodb://mongodb:27017/pharmacist-exam
      - JWT_SECRET=pharmacist-exam-secret-2024
      - JWT_EXPIRE=7d
      - WAIT_FOR_MONGO=true
    depends_on:
      - mongodb
    restart: unless-stopped

  frontend:
    image: getyourhub/pharmacist-frontend:latest
    container_name: pharmacist-frontend
    ports:
      - "3000:80"
    depends_on:
      - backend
    restart: unless-stopped

volumes:
  mongodb_data:
EOF

echo -e "${GREEN}✓ docker-compose.yml 创建完成${NC}"

echo -e "${YELLOW}2. 停止旧容器...${NC}"
docker-compose down 2>/dev/null || docker compose down 2>/dev/null

echo -e "${YELLOW}3. 拉取最新镜像...${NC}"
docker-compose pull 2>/dev/null || docker compose pull

echo -e "${YELLOW}4. 启动服务...${NC}"
docker-compose up -d 2>/dev/null || docker compose up -d

echo -e "${YELLOW}5. 等待服务启动...${NC}"
sleep 15

echo -e "${YELLOW}6. 检查服务状态...${NC}"
docker-compose ps 2>/dev/null || docker compose ps

echo -e "${YELLOW}7. 查看后端日志...${NC}"
docker-compose logs backend 2>/dev/null || docker compose logs backend

echo -e "${YELLOW}8. 初始化数据库...${NC}"
docker exec pharmacist-backend node seeds/index.js

echo ""
echo "========================================="
echo -e "${GREEN}部署完成！${NC}"
echo "========================================="
echo ""
echo "访问地址: http://localhost:3000"
echo ""
echo "常用命令:"
echo "  查看状态: docker-compose ps"
echo "  查看日志: docker-compose logs -f"
echo "  停止服务: docker-compose down"
echo "  重启服务: docker-compose restart"
echo "========================================="