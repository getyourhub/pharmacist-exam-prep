# 执业药师备考平台 - Docker Compose 部署指南

## 第一步：创建项目目录

```bash
mkdir pharmacist-exam
cd pharmacist-exam
```

## 第二步：创建 docker-compose.yml

```bash
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
```

## 第三步：拉取镜像

```bash
docker-compose pull
```

输出示例：
```
[+] Pulling 3/3
 ✔ mongodb Pulled
 ✔ backend Pulled
 ✔ frontend Pulled
```

## 第四步：启动服务

```bash
docker-compose up -d
```

输出示例：
```
[+] Running 4/4
 ✔ Network pharmacist-exam_default  Created
 ✔ Container pharmacist-mongodb     Started
 ✔ Container pharmacist-backend     Started
 ✔ Container pharmacist-frontend    Started
```

## 第五步：查看服务状态

```bash
docker-compose ps
```

输出示例：
```
NAME                 IMAGE                                  STATUS
pharmacist-backend   getyourhub/pharmacist-backend:latest   Up 10 seconds
pharmacist-frontend  getyourhub/pharmacist-frontend:latest  Up 10 seconds
pharmacist-mongodb   mongo:6                                Up 10 seconds
```

## 第六步：等待服务完全启动

```bash
sleep 15
```

## 第七步：查看后端日志

```bash
docker-compose logs backend
```

正常输出应显示：
```
=========================================
执业药师备考平台 - 后端服务启动
=========================================
环境配置:
  NODE_ENV: production
  PORT: 5000
  MONGODB_URI: mongodb://mongodb:27017/pharmacist-exam
  JWT_SECRET: pharmacist...
=========================================
启动 Node.js 应用...
MongoDB 已连接: mongodb
服务器运行在 production 模式，端口: 5000
```

## 第八步：初始化数据库

```bash
docker exec pharmacist-backend node seeds/index.js
```

输出示例：
```
MongoDB 已连接
已清空现有数据
已创建默认用户:
  邮箱: admin@pharmacist.com
  密码: 123456
已创建 4 个科目
已为 药学专业知识（一） 创建 7 个章节
...
数据库初始化完成！
```

## 第九步：访问应用

打开浏览器访问：`http://localhost:3000`

使用默认账号登录：
- 邮箱：`admin@pharmacist.com`
- 密码：`123456`

---

## 常用命令

### 查看服务状态
```bash
docker-compose ps
```

### 查看实时日志
```bash
# 查看所有服务日志
docker-compose logs -f

# 只看后端日志
docker-compose logs -f backend

# 只看 MongoDB 日志
docker-compose logs -f mongodb
```

### 停止服务
```bash
docker-compose down
```

### 重启服务
```bash
docker-compose restart
```

### 重启单个服务
```bash
docker-compose restart backend
```

### 更新镜像并重启
```bash
docker-compose pull
docker-compose up -d
```

---

## 如果遇到问题

### 问题1：端口被占用

查看哪个进程占用了端口：
```bash
# macOS/Linux
lsof -i :3000
lsof -i :5000
lsof -i :27017

# Windows
netstat -ano | findstr :3000
```

修改 docker-compose.yml 中的端口映射：
```yaml
ports:
  - "8080:80"   # 改为 8080
```

### 问题2：容器启动失败

查看详细日志：
```bash
docker-compose logs backend
```

### 问题3：数据库连接失败

确保 MongoDB 容器正在运行：
```bash
docker-compose ps | grep mongodb
```

### 问题4：重置所有数据

```bash
# 停止并删除所有容器和数据
docker-compose down -v

# 重新启动
docker-compose up -d

# 重新初始化数据库
sleep 15
docker exec pharmacist-backend node seeds/index.js
```

---

## 服务器部署（公网访问）

如果要在服务器上部署，修改 docker-compose.yml：

```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:6
    container_name: pharmacist-mongodb
    volumes:
      - mongodb_data:/data/db
    restart: unless-stopped

  backend:
    image: getyourhub/pharmacist-backend:latest
    container_name: pharmacist-backend
    environment:
      - NODE_ENV=production
      - PORT=5000
      - MONGODB_URI=mongodb://mongodb:27017/pharmacist-exam
      - JWT_SECRET=your-secure-secret-key-here
      - JWT_EXPIRE=7d
      - WAIT_FOR_MONGO=true
    depends_on:
      - mongodb
    restart: unless-stopped

  frontend:
    image: getyourhub/pharmacist-frontend:latest
    container_name: pharmacist-frontend
    ports:
      - "80:80"    # 使用 80 端口
    depends_on:
      - backend
    restart: unless-stopped

volumes:
  mongodb_data:
```

注意：
1. MongoDB 不暴露端口（更安全）
2. 修改 JWT_SECRET 为强密码
3. 前端使用 80 端口

---

## 完整一键部署脚本

```bash
#!/bin/bash

# 创建目录
mkdir -p pharmacist-exam && cd pharmacist-exam

# 创建配置
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  mongodb:
    image: mongo:6
    container_name: pharmacist-mongodb
    volumes:
      - mongodb_data:/data/db
    restart: unless-stopped

  backend:
    image: getyourhub/pharmacist-backend:latest
    container_name: pharmacist-backend
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

# 拉取镜像
echo "拉取镜像..."
docker-compose pull

# 启动服务
echo "启动服务..."
docker-compose up -d

# 等待启动
echo "等待服务启动..."
sleep 15

# 初始化数据库
echo "初始化数据库..."
docker exec pharmacist-backend node seeds/index.js

echo ""
echo "========================================="
echo "部署完成！"
echo "========================================="
echo "访问地址: http://localhost:3000"
echo ""
echo "默认账号:"
echo "  邮箱: admin@pharmacist.com"
echo "  密码: 123456"
echo "========================================="
```

保存为 `deploy.sh`，然后运行：
```bash
chmod +x deploy.sh
./deploy.sh
```
