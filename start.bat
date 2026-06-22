@echo off
echo ===================================
echo   执业药师备考平台启动脚本
echo ===================================

REM 检查 Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo 错误: 未安装 Node.js
    echo 请访问 https://nodejs.org/ 下载安装
    pause
    exit /b 1
)

REM 安装依赖
echo 检查并安装依赖...

echo 安装后端依赖...
cd server
call npm install
cd ..

echo 安装前端依赖...
cd client
call npm install
cd ..

REM 检查环境变量
if not exist "server\.env" (
    echo 创建环境变量文件...
    copy server\.env.example server\.env
    echo 请编辑 server\.env 文件配置数据库连接等信息
)

REM 初始化数据库
echo.
set /p init_db="是否初始化数据库？(y/n): "
if /i "%init_db%"=="y" (
    echo 初始化数据库...
    cd server
    call npm run seed
    cd ..
)

REM 启动服务
echo.
echo ===================================
echo   启动服务
echo ===================================

echo 启动后端服务...
start "后端服务" cmd /k "cd server && npm run dev"

REM 等待后端启动
timeout /t 3 /nobreak >nul

echo 启动前端应用...
start "前端应用" cmd /k "cd client && npm start"

echo.
echo ===================================
echo   服务已启动
echo ===================================
echo 后端服务: http://localhost:5000
echo 前端应用: http://localhost:3000
echo.
echo 请在新打开的命令行窗口中查看服务状态
pause