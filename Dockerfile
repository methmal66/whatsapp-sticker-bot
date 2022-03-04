FROM node:17
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY . .
RUN yarn install --production=true
RUN yarn build
EXPOSE 8000
CMD ["yarn","start"]