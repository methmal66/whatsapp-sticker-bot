FROM node:17
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY ./build .
RUN yarn install --production=true
EXPOSE 8000
CMD ["node","server.js"]