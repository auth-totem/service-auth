FROM node:14.16.1-alpine

WORKDIR /usr/totem/auth

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]