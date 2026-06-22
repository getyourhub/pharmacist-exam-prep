# 执业药师备考平台 - 部署指南

## 镜像信息

| 镜像 | 支持架构 | 大小 |
|------|---------|------|
| `getyourhub/pharmacist-backend:latest` | amd64, arm64 | ~145MB |
| `getyourhub/pharmacist-frontend:latest` | amd64, arm64 | ~75MB |

---

## 方式一：使用 Docker Compose 部署（推荐）

### 1. 创建项目目录

```bash
mkdir pharmacist-exam && cd pharmacist-exam
```

### 2. 创建 docker-compose.yml

```yaml
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
      - JWT_SECRET=your-secret-key-change-this
      - JWT_EXPIRE=7d
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
```

### 3. 启动服务

```bash
docker-compose up -d
```

### 4. 初始化数据库

```bash
# 等待服务启动完成（约10秒）
sleep 10

# 初始化数据库种子数据
docker exec pharmacist-backend node seeds/index.js
```

### 5. 访问应用

打开浏览器访问：`http://你的服务器IP:3000`

---

## 方式二：使用 Docker 命令部署

### 1. 创建网络

```bash
docker network create pharmacist-net
```

### 2. 启动 MongoDB

```bash
docker run -d \
  --name pharmacist-mongodb \
  --network pharmacist-net \
  -v mongodb_data:/data/db \
  mongo:6
```

### 3. 启动后端

```bash
docker run -d \
  --name pharmacist-backend \
  --network pharmacist-net \
  -p 5000:5000 \
  -e NODE_ENV=production \
  -e PORT=5000 \
  -e MONGODB_URI=mongodb://pharmacist-mongodb:27017/pharmacist-exam \
  -e JWT_SECRET=your-secret-key-change-this \
  -e JWT_EXPIRE=7d \
  getyourhub/pharmacist-backend:latest
```

### 4. 启动前端

```bash
docker run -d \
  --name pharmacist-frontend \
  --network pharmacist-net \
  -p 3000:80 \
  getyourhub/pharmacist-frontend:latest
```

### 5. 初始化数据库

```bash
docker exec pharmacist-backend node seeds/index.js
```

---

## 常用操作

### 查看服务状态

```bash
docker-compose ps
# 或
docker ps | grep pharmacist
```

### 查看日志

```bash
# 查看所有日志
docker-compose logs

# 查看后端日志
docker-compose logs backend

# 实时查看日志
docker-compose logs -f backend
```

### 停止服务

```bash
docker-compose down
```

### 重启服务

```bash
docker-compose restart
```

### 更新镜像

```bash
# 拉取最新镜像
docker-compose pull

# 重新创建容器
docker-compose up -d
```

---

## 数据备份与恢复

### 备份 MongoDB

```bash
# 备份
docker exec pharmacist-mongodb mongodump --out /backup --db pharmacist-exam
docker cp pharmacist-mongodb:/backup ./backup

# 或直接备份数据卷
docker run --rm -v mongodb_data:/data -v $(pwd):/backup alpine tar czf /backup/mongodb-backup.tar.gz /data
```

### 恢复 MongoDB

```bash
# 恢复
docker cp ./backup pharmacist-mongodb:/backup
docker exec pharmacist-mongodb mongorestore --db pharmacist-exam /backup/pharmacist-exam
```

---

## 常见问题

### Q1: 容器启动后自动退出

```bash
# 查看容器日志
docker logs pharmacist-backend

# 常见原因：MongoDB 连接失败
# 确保 MongoDB 容器正在运行
docker ps | grep mongo
```

### Q2: exec format error

这是架构不匹配问题。本项目镜像已支持 amd64 和 arm64 架构。
如果仍然出现此错误，请确保使用最新版本的镜像：

```bash
docker pull getyourhub/pharmacist-backend:latest
docker pull getyourhub/pharmacist-frontend:latest
```

### Q3: 端口被占用

修改 docker-compose.yml 中的端口映射：

```yaml
ports:
  - "8080:80"  # 将 3000 改为其他端口
```

### Q4: 数据库初始化失败

```bash
# 手动进入容器执行
docker exec -it pharmacist-backend sh
node seeds/index.js
```

### Q5: 前端无法访问后端 API

检查 nginx.conf 中的代理配置是否正确：

```bash
docker exec pharmacist-frontend cat /etc/nginx/conf.d/default.conf
```

---

## 环境变量说明

| 变量 | 说明 | 默认值 |
|------|------|--------|
| NODE_ENV | 运行环境 | production |
| PORT | 后端端口 | 5000 |
| MONGODB_URI | MongoDB 连接字符串 | mongodb://localhost:27017/pharmacist-exam |
| JWT_SECRET | JWT 密钥 | 必须修改 |
| JWT_EXPIRE | JWT 过期时间 | 7d |

---

## 生产环境建议

1. **修改 JWT_SECRET**：使用强密码
2. **配置 HTTPS**：使用 Nginx 反向代理 + SSL 证书
3. **限制端口访问**：只开放 80/443 端口
4. **定期备份数据库**
5. **监控容器状态**

### Nginx 反向代理配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## 技术支持

- GitHub: https://github.com/getyourhub/pharmacist-exam-prep
- Docker Hub: https://hub.docker.com/r/getyourhub/pharmacist-backend
