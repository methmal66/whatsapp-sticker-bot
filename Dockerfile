FROM node:17
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production=true
COPY . .
RUN yarn build
EXPOSE 8000
CMD ["node","server.js"]