FROM node:17
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production=true
RUN npm install --global ts-node
COPY . .
EXPOSE 8000
CMD ["yarn","start"]