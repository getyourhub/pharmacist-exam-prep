# 执业药师资格证备考学习平台

一个专为中国执业药师考试打造的在线备考系统。题库涵盖近十年真题，支持智能刷题、错题自动收集、模拟考试、学习计划制定、**交互式思维导图**等功能，帮助你高效备考。

**考试日期：2026年10月19日**

> ⚡ **v2.1 更新**：知识点扩充至 107 个（含详细讲解、记忆口诀、举例）；题库扩充至 236 道；多选题支持点击选中/取消；28 个交互式思维导图。

---

## 功能一览

| 功能 | 说明 |
|------|------|
| 🚀 免登录使用 | 打开即用，无需注册登录，个人本地学习更便捷 |
| 📝 智能题库 | 236 道题目，覆盖 4 大科目、28 个章节，含单选/多选/判断题 |
| ❌ 错题本 | 答错自动收录，支持间隔复习（1/3/7/14/30天） |
| 📋 模拟考试 | 120 题/150 分钟，完全模拟真实考试环境 |
| 📅 学习计划 | 根据考试日期自动制定每日学习任务 |
| 🧠 知识框架 | 107 个核心知识点，含详细讲解、关键要点、记忆口诀、举例说明 |
| 🗺️ 思维导图 | **28 个交互式思维导图**，每章一个，便于理解和记忆 |
| 📊 学习统计 | 正确率趋势、学习时长、科目掌握度可视化 |

### 覆盖科目

| 科目 | 内容 | 章节数 |
|------|------|--------|
| 药学专业知识（一） | 药理学、药物化学 | 7 章 |
| 药学专业知识（二） | 药剂学、药物分析 | 7 章 |
| 药事管理与法规 | 药品管理法、GSP/GMP | 7 章 |
| 综合知识与技能 | 临床用药、药学服务 | 7 章 |

---

## 思维导图预览

每个章节都配有交互式思维导图，包含：

- 📌 **知识点层级结构**：树形展开，清晰呈现知识脉络
- ⭐ **重点高频标记**：区分重点和高频考点
- 🎯 **记忆口诀**：每章配备速记口诀，高效记忆
- 🖱️ **交互操作**：支持拖拽移动、滚轮缩放、点击展开/折叠

| 药理学（7章） | 药剂学（7章） | 药事管理（7章） | 综合技能（7章） |
|--------------|--------------|----------------|----------------|
| 总论 | 总论 | 药品管理法 | 药学服务 |
| 传出神经 | 液体制剂 | 药品注册 | 处方调剂 |
| 中枢神经 | 灭菌制剂 | 药品生产 | 临床用药 |
| 心血管 | 固体制剂 | 药品经营 | 用药指导 |
| 内脏系统 | 半固体制剂 | 医疗机构 | ADR监测 |
| 内分泌 | 气雾剂 | 中药管理 | 药物信息 |
| 化疗药物 | 稳定性 | 特殊药品 | 自我药疗 |

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
已创建 28 个章节
已创建 236 道题目
已创建 107 个知识点
数据库初始化完成！
```

### 第五步：打开浏览器

访问 **http://localhost:3000**

🎉 直接进入学习仪表盘，无需登录！

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
| 仪表盘 | `/` 或 `/dashboard` | 学习概览、今日任务、考试倒计时 |
| 题库 | `/questions` | 按科目/章节浏览所有题目 |
| 练习模式 | `/questions/practice` | 随机抽题练习，即时反馈对错 |
| 错题本 | `/wrong-questions` | 查看所有错题，支持重做和笔记 |
| 学习计划 | `/study-plan` | 自动生成/查看每日学习任务 |
| 模拟考试 | `/exam/mock` | 120 题 / 150 分钟全真模拟 |
| 考试历史 | `/exam/history` | 查看历次考试成绩和分析 |
| 知识框架 | `/knowledge` | 按科目浏览知识点 + **交互式思维导图** |
| 个人中心 | `/profile` | 修改信息、查看学习统计 |

---

## 项目结构

```
pharmacist-exam-prep/
├── client/                         # 前端（React + TypeScript）
│   ├── public/
│   │   └── mindmaps/               # 🗺️ 28 个交互式思维导图
│   │       ├── pharmacology-ch1.html
│   │       ├── pharmacology-ch2.html
│   │       ├── ... (共28个)
│   │       └── comprehensiveSkill-ch7.html
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard/          # 仪表盘
│   │   │   ├── Questions/          # 题库和练习
│   │   │   ├── WrongQuestions/     # 错题本
│   │   │   ├── StudyPlan/          # 学习计划
│   │   │   ├── Exam/               # 模拟考试
│   │   │   ├── Knowledge/          # 知识框架 + 思维导图入口
│   │   │   └── Profile/            # 个人中心
│   │   ├── services/api.ts         # API 请求封装
│   │   └── contexts/               # 全局状态
│   ├── Dockerfile
│   └── nginx.conf
│
├── server/                         # 后端（Node.js + Express）
│   ├── models/                     # 数据库模型
│   │   ├── User.js                 # 用户
│   │   ├── Question.js             # 题目
│   │   ├── Subject.js              # 科目
│   │   ├── Chapter.js              # 章节
│   │   ├── KnowledgePoint.js       # 知识点
│   │   ├── WrongQuestion.js        # 错题记录
│   │   ├── StudyPlan.js            # 学习计划
│   │   └── ExamRecord.js           # 考试记录
│   ├── controllers/                # 业务逻辑
│   ├── routes/                     # API 路由（无需认证）
│   ├── middleware/auth.js          # 默认用户中间件
│   ├── seeds/                      # 题库种子数据
│   │   ├── index.js                # 种子入口
│   │   └── data/                   # 各科目题目和知识点
│   └── Dockerfile
│
├── generate-mindmaps.js            # 思维导图生成脚本
├── docker-compose.yml
├── .github/workflows/              # GitHub Actions 自动构建
└── deploy.sh                       # 一键部署脚本
```

---

## 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 前端 | React 18 + TypeScript | 用户界面 |
| UI 库 | Ant Design 5 | 组件库 |
| 思维导图 | Markmap | 交互式思维导图渲染 |
| 后端 | Node.js + Express | API 服务 |
| 数据库 | MongoDB 6 | 存储题目和学习记录 |
| 部署 | Docker + GitHub Actions | 多架构自动构建（amd64 + arm64） |

---

## 数据统计

| 类别 | 数量 |
|------|------|
| 科目 | 4 个 |
| 章节 | 28 个 |
| 知识点 | 107 个（含详细讲解、记忆口诀、举例） |
| 练习题 | 236 道（单选 + 多选 + 判断，含真题和模拟题） |
| 思维导图 | 28 个（每章一个，交互式） |

---

## 常见问题

### Q: 如何更新到最新版本？
```bash
cd pharmacist-exam-prep
git pull
# 拉取最新镜像
docker pull getyourhub/pharmacist-backend:latest
docker pull getyourhub/pharmacist-frontend:latest
docker compose down
docker compose up -d
# 重新初始化数据库（加载新题目和知识点）
docker exec pharmacist-backend node seeds/index.js
```

### Q: 多选题怎么用？
A: 多选题会显示"请选择所有正确答案"提示，点击选项即可选中（蓝色高亮）或取消，已选数量实时显示。提交时需选择全部正确答案才算对。

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

### Q: 如何备份数据库？
```bash
# 导出
docker exec pharmacist-mongodb mongodump --archive > backup.gz

# 导入
docker exec -i pharmacist-mongodb mongorestore --archive < backup.gz
```

### Q: 如何添加自定义题目？
A: 编辑 `server/seeds/data/` 目录下对应科目的文件，按照现有格式添加题目，然后重新执行种子脚本。

### Q: 思维导图打不开？
A: 思维导图需要通过前端服务访问（http://localhost:3000/mindmaps/xxx.html）。如果是直接访问静态文件，需要确保 CDN 可用（使用了 markmap 的 CDN）。

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
