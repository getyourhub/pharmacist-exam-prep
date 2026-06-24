FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=production

COPY . .

ENV NODE_ENV=production
ENV PORT=5000
ENV MONGODB_URI=mongodb://localhost:27017/pharmacist-exam
ENV JWT_SECRET=default-jwt-secret-please-change
ENV JWT_EXPIRE=7d

EXPOSE 5000

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
