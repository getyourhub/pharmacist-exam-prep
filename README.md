# 执业药师资格证备考学习平台

一个专为中国执业药师考试打造的在线备考系统。题库涵盖近十年真题，支持智能刷题、错题自动收集、模拟考试、学习计划制定等功能，帮助你高效备考。

**考试日期：2026年10月19日**

---

## 功能一览

| 功能 | 说明 |
|------|------|
| 智能题库 | 106+ 道题目，覆盖 4 大科目、28 个章节，包含真题和练习题 |
| 错题本 | 答错自动收录，支持间隔复习（1/3/7/14/30天） |
| 模拟考试 | 120 题/150 分钟，完全模拟真实考试环境 |
| 学习计划 | 根据考试日期自动制定每日学习任务 |
| 知识点框架 | 19 个核心知识点，含记忆口诀和关键点 |
| 学习统计 | 正确率趋势、学习时长、科目掌握度可视化 |

### 覆盖科目

| 科目 | 内容 | 题目类型 |
|------|------|----------|
| 药学专业知识（一） | 药理学、药物化学 | 单选/多选/判断 |
| 药学专业知识（二） | 药剂学、药物分析 | 单选/多选/判断 |
| 药事管理与法规 | 药品管理法、GSP/GMP | 单选/多选/判断 |
| 综合知识与技能 | 临床用药、药学服务 | 单选/多选/判断 |

---

## 快速开始（Docker 方式，推荐）

> 适合所有用户，不需要安装 Node.js 和 MongoDB，只需要安装 Docker。

### 第一步：安装 Docker

**Windows / Mac 用户：**
1. 下载 [OrbStack](https://orbstack.dev/)（推荐，比 Docker Desktop 更快更轻量）
2. 安装后启动 OrbStack，确保菜单栏出现 OrbStack 图标

**Linux 用户：**
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
# 重新登录终端
```

### 第二步：克隆项目

打开终端（Windows 用户打开 PowerShell），执行：

```bash
git clone https://github.com/getyourhub/pharmacist-exam-prep.git
cd pharmacist-exam-prep
```

> 没有 git？直接去 [GitHub 页面](https://github.com/getyourhub/pharmacist-exam-prep) 点绿色 "Code" 按钮 → "Download ZIP"，解压后用终端进入文件夹。

### 第三步：启动服务

```bash
docker compose up -d
```

这个命令会自动下载 3 个镜像（首次约 5-10 分钟）：
- **MongoDB**：数据库，存储所有题目和用户数据
- **后端**：API 服务，处理业务逻辑
- **前端**：网页界面，就是你看到的页面

### 第四步：初始化题库

```bash
docker exec pharmacist-backend node seeds/index.js
```

看到以下输出说明成功：
```
已创建默认用户: admin@pharmacist.com / 123456
已创建 4 个科目
已创建 106 道题目
已创建 19 个知识点
数据库初始化完成！
```

### 第五步：打开浏览器

访问 **http://localhost:3000**

使用默认账号登录：
- **邮箱**：`admin@pharmacist.com`
- **密码**：`123456`

登录后建议立即去「个人中心」修改密码。

---

## 方式二：直接使用 Docker Hub 镜像

> 适合不想克隆代码，只想快速部署的用户。

创建一个新文件 `docker-compose.yml`，粘贴以下内容：

```yaml
services:
  mongodb:
    image: mongo:6
    container_name: pharmacist-mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
    healthcheck:
      test: echo 'db.runCommand("ping").ok' | mongosh --quiet
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 10s
    restart: unless-stopped

  backend:
    image: getyourhub/pharmacist-backend:latest
    container_name: pharmacist-backend
    ports:
      - "5001:5000"
    environment:
      - NODE_ENV=production
      - PORT=5000
      - MONGODB_URI=mongodb://mongodb:27017/pharmacist-exam
      - JWT_SECRET=pharmacist-exam-secret-2024
      - JWT_EXPIRE=7d
      - WAIT_FOR_MONGO=true
    depends_on:
      mongodb:
        condition: service_healthy
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

然后在终端中执行：

```bash
# 启动
docker compose up -d

# 等待约 30 秒后初始化数据库
docker exec pharmacist-backend node seeds/index.js
```

访问 **http://localhost:3000** 即可。

> **为什么后端端口是 5001？** macOS 的 AirPlay 服务会占用 5000 端口，所以后端映射到 5001 避免冲突。如果你用的是 Linux 或 Windows，可以改回 `5000:5000`。

---

## 方式三：本地开发（不用 Docker）

> 适合想修改代码、二次开发的用户。需要安装 Node.js 和 MongoDB。

### 环境要求

| 软件 | 最低版本 | 安装方法 |
|------|----------|----------|
| Node.js | 18+（推荐 20） | [nodejs.org](https://nodejs.org/) 下载 LTS 版本 |
| MongoDB | 5.0+ | [mongodb.com](https://www.mongodb.com/try/download/community) 下载 Community Server |
| Git | 任意 | [git-scm.com](https://git-scm.com/) |

### 安装步骤

```bash
# 1. 克隆项目
git clone https://github.com/getyourhub/pharmacist-exam-prep.git
cd pharmacist-exam-prep

# 2. 安装后端依赖
cd server
npm install

# 3. 配置环境变量
cp .env.example .env
# 用记事本打开 .env 文件，确认 MONGODB_URI 指向你的 MongoDB
# 默认是 mongodb://localhost:27017/pharmacist-exam，一般不用改

# 4. 初始化数据库（首次运行）
npm run seed

# 5. 启动后端（保持这个终端不关闭）
npm run dev

# 6. 打开新终端，安装前端依赖
cd client
npm install

# 7. 启动前端
npm start
```

浏览器会自动打开 http://localhost:3000。

---

## 常用管理命令

```bash
# 查看服务状态
docker compose ps

# 查看实时日志（排查问题用）
docker compose logs -f

# 只看后端日志
docker compose logs -f backend

# 重启所有服务
docker compose restart

# 停止所有服务
docker compose down

# 停止并删除数据（慎用！会清空数据库）
docker compose down -v

# 重新初始化数据库（会清空现有数据）
docker exec pharmacist-backend node seeds/index.js
```

---

## 页面说明

| 页面 | 路径 | 功能 |
|------|------|------|
| 登录页 | `/login` | 使用邮箱密码登录 |
| 仪表盘 | `/dashboard` | 学习概览、今日任务、考试倒计时 |
| 题库 | `/questions` | 按科目/章节浏览所有题目 |
| 练习模式 | `/questions/practice` | 随机抽题练习，即时反馈对错 |
| 错题本 | `/wrong-questions` | 查看所有错题，支持重做和笔记 |
| 学习计划 | `/study-plan` | 自动生成/查看每日学习任务 |
| 模拟考试 | `/exam/mock` | 120 题 / 150 分钟全真模拟 |
| 考试历史 | `/exam/history` | 查看历次考试成绩和分析 |
| 知识框架 | `/knowledge` | 按科目浏览知识点和记忆口诀 |
| 个人中心 | `/profile` | 修改信息、查看学习统计 |

---

## 项目结构

```
pharmacist-exam-prep/
├── client/                     # 前端（React）
│   ├── src/
│   │   ├── pages/              # 页面组件
│   │   │   ├── Auth/           # 登录页
│   │   │   ├── Dashboard/      # 仪表盘
│   │   │   ├── Questions/      # 题库和练习
│   │   │   ├── WrongQuestions/  # 错题本
│   │   │   ├── StudyPlan/      # 学习计划
│   │   │   ├── Exam/           # 模拟考试
│   │   │   ├── Knowledge/      # 知识框架
│   │   │   └── Profile/        # 个人中心
│   │   ├── services/api.ts     # API 请求封装
│   │   └── contexts/           # 全局状态（登录信息）
│   ├── Dockerfile              # 前端 Docker 镜像
│   └── nginx.conf              # Nginx 配置（反向代理）
│
├── server/                     # 后端（Node.js + Express）
│   ├── models/                 # 数据库模型
│   │   ├── User.js             # 用户
│   │   ├── Question.js         # 题目
│   │   ├── Subject.js          # 科目
│   │   ├── Chapter.js          # 章节
│   │   ├── KnowledgePoint.js   # 知识点
│   │   ├── WrongQuestion.js    # 错题记录
│   │   ├── StudyPlan.js        # 学习计划
│   │   └── ExamRecord.js       # 考试记录
│   ├── controllers/            # 业务逻辑
│   ├── routes/                 # API 路由
│   ├── seeds/                  # 题库种子数据
│   │   ├── index.js            # 种子入口
│   │   └── data/               # 各科目题目数据
│   └── Dockerfile              # 后端 Docker 镜像
│
├── docker-compose.yml          # Docker 编排文件
├── .github/workflows/          # GitHub Actions 自动构建
└── deploy.sh                   # 一键部署脚本
```

---

## 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 前端 | React 18 + TypeScript | 用户界面 |
| UI 库 | Ant Design 5 | 组件库，提供表格、表单、图表等 |
| 图表 | Recharts | 学习统计可视化 |
| 后端 | Node.js + Express | API 服务 |
| 数据库 | MongoDB 6 | 存储题目、用户、学习记录 |
| 认证 | JWT + bcryptjs | 令牌认证 + 密码加密 |
| 部署 | Docker + GitHub Actions | 多架构自动构建（amd64 + arm64） |

---

## 常见问题

### Q: 登录提示"网络错误"？
A: 确保 3 个容器都在运行：
```bash
docker compose ps
```
如果 backend 显示 `unhealthy` 或 `restarting`，查看日志：
```bash
docker compose logs backend
```

### Q: MongoDB 容器一直在重启？
A: 可能是内存不足。MongoDB 6 至少需要 1GB 内存。检查 Docker 的内存限制设置。

### Q: 端口被占用？
A: 如果 3000 或 5001 端口被占用，修改 `docker-compose.yml` 中的端口映射：
```yaml
ports:
  - "3001:80"    # 改成 3001
```

### Q: macOS 提示 5000 端口被占用？
A: macOS 的 AirPlay 会占用 5000 端口。本项目已将后端映射到 5001，无需处理。如果本地开发时遇到此问题：
- 方法 1：关闭 AirPlay（系统设置 → 通用 → AirDrop 与隔空投放 → 关闭 AirPlay 接收器）
- 方法 2：后端使用其他端口，在 `.env` 中设置 `PORT=5001`

### Q: 如何更新到最新版本？
```bash
cd pharmacist-exam-prep
git pull
docker compose down
docker compose up -d --build
# 如果需要更新题库
docker exec pharmacist-backend node seeds/index.js
```

### Q: 如何备份数据库？
```bash
# 导出
docker exec pharmacist-mongodb mongodump --archive > backup.gz

# 导入
docker exec -i pharmacist-mongodb mongorestore --archive < backup.gz
```

### Q: 如何添加自定义题目？
A: 编辑 `server/seeds/data/` 目录下对应科目的文件，按照现有格式添加题目，然后重新执行种子脚本。

---

## 相关链接

| 资源 | 链接 |
|------|------|
| GitHub 仓库 | https://github.com/getyourhub/pharmacist-exam-prep |
| Docker Hub（后端） | https://hub.docker.com/r/getyourhub/pharmacist-backend |
| Docker Hub（前端） | https://hub.docker.com/r/getyourhub/pharmacist-frontend |

---

## 许可证

MIT License - 可自由使用和修改。
