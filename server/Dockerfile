FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

# 设置默认环境变量
ENV NODE_ENV=production
ENV PORT=5000
ENV MONGODB_URI=mongodb://localhost:27017/pharmacist-exam
ENV JWT_SECRET=default-jwt-secret-please-change
ENV JWT_EXPIRE=7d

EXPOSE 5000

# 使用启动脚本
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]