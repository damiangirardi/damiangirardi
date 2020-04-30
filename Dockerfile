# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
FROM node:12.16.3-alpine3.11 as build

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

RUN mv -v /app/node_modules /

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

EXPOSE 3000

CMD npm run dev
