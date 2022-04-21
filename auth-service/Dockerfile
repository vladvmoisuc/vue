FROM node:16
WORKDIR /auth-service
COPY package*.json ./
RUN npm i
COPY . .
CMD npm run start