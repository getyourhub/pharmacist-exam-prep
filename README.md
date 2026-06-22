# 执业药师资格证备考学习平台

一个功能全面的执业药师考试备考系统，帮助您高效学习和通过考试。

## 快速开始

### 方式一：使用 Docker Compose（推荐）

```bash
# 拉取项目
git clone https://github.com/getyourhub/pharmacist-exam-prep.git
cd pharmacist-exam-prep

# 启动服务
docker-compose up -d

# 初始化数据库（首次运行）
docker exec pharmacist-backend node seeds/index.js
```

访问 http://localhost:3000 即可使用

### 方式二：直接使用 Docker Hub 镜像

```bash
# 创建 docker-compose.yml
version: '3.8'

services:
  mongodb:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  backend:
    image: getyourhub/pharmacist-backend:latest
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongodb:27017/pharmacist-exam
      - JWT_SECRET=your-secret-key
    depends_on:
      - mongodb

  frontend:
    image: getyourhub/pharmacist-frontend:latest
    ports:
      - "3000:80"
    depends_on:
      - backend

volumes:
  mongodb_data:
```

### 方式三：本地开发

```bash
# 安装依赖
cd server && npm install && cd ..
cd client && npm install && cd ..

# 配置环境变量
cp server/.env.example server/.env

# 初始化数据库
cd server && npm run seed && cd ..

# 启动服务
./start.sh        # Linux/Mac
start.bat         # Windows
```

## 功能特性

### 1. 智能题库系统
- 海量真题和模拟题
- 按科目、章节、难度分类
- 错题自动收集和复习
- 智能推荐薄弱知识点题目

### 2. 知识点框架
- 四大科目完整知识体系
- 思维导图式知识结构
- 重点难点标注
- 关联知识点链接

### 3. 学习计划管理
- 根据考试日期自动制定计划
- 每日学习任务提醒
- 学习进度可视化
- 自适应调整计划

### 4. 模拟考试系统
- 全真模拟考试环境
- 历年真题演练
- 自动评分和详细解析
- 考试成绩分析报告

### 5. 学习统计
- 学习时长统计
- 正确率趋势分析
- 知识点掌握度评估
- 个人学习报告

## 科目覆盖

1. **药学专业知识（一）** - 药理学、药物化学
2. **药学专业知识（二）** - 药剂学、药物分析
3. **药事管理与法规** - 药品管理法规、GSP/GMP
4. **综合知识与技能** - 临床用药、药学服务

## 技术栈

### 前端
- React 18
- TypeScript
- Ant Design
- ECharts (数据可视化)
- React Router

### 后端
- Node.js
- Express
- MongoDB (数据库)
- JWT (身份认证)

## 快速开始

### 环境要求
- Node.js >= 16
- MongoDB >= 5.0
- npm 或 yarn

### 安装步骤

```bash
# 克隆项目
cd pharmacist-exam-prep

# 安装前端依赖
cd client
npm install

# 安装后端依赖
cd ../server
npm install

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件配置数据库连接等信息

# 启动后端服务
npm run dev

# 新终端启动前端
cd client
npm start
```

## 项目结构

```
pharmacist-exam-prep/
├── client/                 # 前端 React 应用
│   ├── src/
│   │   ├── components/     # 通用组件
│   │   ├── pages/          # 页面组件
│   │   ├── services/       # API 服务
│   │   └── utils/          # 工具函数
│   └── public/
├── server/                 # 后端 Node.js 服务
│   ├── models/             # 数据模型
│   ├── routes/             # 路由定义
│   ├── controllers/        # 控制器
│   └── config/             # 配置文件
└── docs/                   # 项目文档
```

## 开发计划

- [x] 项目架构设计
- [ ] 数据库模型设计
- [ ] 用户认证系统
- [ ] 题库管理系统
- [ ] 知识点框架
- [ ] 学习计划功能
- [ ] 模拟考试系统
- [ ] 数据统计分析

## 相关链接

- **GitHub**: https://github.com/getyourhub/pharmacist-exam-prep
- **Docker Hub 后端**: https://hub.docker.com/r/getyourhub/pharmacist-backend
- **Docker Hub 前端**: https://hub.docker.com/r/getyourhub/pharmacist-frontend

## 许可证

MIT License