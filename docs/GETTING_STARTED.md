# 快速开始指南

## 环境要求

- **Node.js**: >= 16.0.0
- **MongoDB**: >= 5.0
- **npm** 或 **yarn**

## 安装步骤

### 1. 安装 MongoDB

#### macOS (使用 Homebrew)
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### Windows
下载并安装 MongoDB Community Server: https://www.mongodb.com/try/download/community

#### Linux (Ubuntu)
```bash
sudo apt update
sudo apt install -y mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

### 2. 安装项目依赖

```bash
# 进入项目目录
cd pharmacist-exam-prep

# 安装后端依赖
cd server
npm install

# 安装前端依赖
cd ../client
npm install
```

### 3. 配置环境变量

```bash
# 在 server 目录下创建 .env 文件
cd ../server
cp .env.example .env
```

编辑 `.env` 文件，配置以下内容：

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/pharmacist-exam
JWT_SECRET=your-secret-key-here
JWT_EXPIRE=7d
```

### 4. 初始化数据库

```bash
# 在 server 目录下运行种子脚本
npm run seed
```

这将创建：
- 4个考试科目
- 各科目的章节
- 示例题目

### 5. 启动项目

#### 启动后端服务

```bash
# 在 server 目录下
npm run dev
```

后端服务将在 http://localhost:5000 启动

#### 启动前端应用

```bash
# 新开一个终端，进入 client 目录
cd client
npm start
```

前端应用将在 http://localhost:3000 启动

### 6. 访问应用

打开浏览器访问 http://localhost:3000

## 创建第一个账号

1. 访问 http://localhost:3000/register
2. 填写用户名、邮箱和密码
3. 点击"注册"按钮
4. 注册成功后自动跳转到仪表盘

## 功能使用指南

### 智能题库

1. 点击左侧菜单"智能题库"
2. 可以按科目、题型、难度筛选题目
3. 点击"做题"按钮开始练习
4. 选择答案后点击"提交答案"查看解析

### 错题本

1. 系统会自动收集答错的题目
2. 在"错题本"中可以查看所有错题
3. 可以标记掌握程度
4. 系统会根据掌握程度安排复习

### 学习计划

1. 点击"学习计划"
2. 点击"生成学习计划"
3. 设置学习周期、每日学习时长
4. 系统会自动生成每日学习任务

### 模拟考试

1. 点击"模拟考试"
2. 选择考试类型和题目数量
3. 点击"开始考试"
4. 在规定时间内完成答题
5. 提交后查看成绩和解析

### 知识框架

1. 点击"知识框架"
2. 选择科目查看知识树
3. 点击知识点查看详细内容
4. 可以标记复习状态

## 常见问题

### Q: MongoDB 连接失败怎么办？

A: 确保 MongoDB 服务已启动：
```bash
# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongodb

# Windows
net start MongoDB
```

### Q: 如何添加更多题目？

A: 可以通过以下方式添加题目：
1. 直接在 MongoDB 中添加
2. 修改 `server/seeds/index.js` 添加题目后重新运行种子脚本
3. 后续可以开发题目管理后台

### Q: 如何部署到服务器？

A: 部署步骤：
1. 构建前端：`cd client && npm run build`
2. 配置生产环境变量
3. 使用 PM2 或 Docker 部署后端
4. 使用 Nginx 反向代理

## 技术支持

如有问题，请提交 Issue 或联系开发团队。