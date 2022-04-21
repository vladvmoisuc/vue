FROM node:16
WORKDIR /auth-microfrontend
COPY package*.json ./
RUN npm i
COPY . .
CMD npm run serve