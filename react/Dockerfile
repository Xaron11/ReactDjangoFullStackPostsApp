FROM node:14-alpine

WORKDIR /react

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent

COPY . ./
RUN npm run build