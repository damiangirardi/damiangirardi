# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093
FROM node:12.16.3-alpine3.11 as build

ARG USER_UID
ARG USER_GID

RUN apk --no-cache add shadow && \
    usermod -u ${USER_UID} node && \
    groupmod -g ${USER_GID} node

RUN mkdir /app && chown node.node /app
RUN mkdir -p /nuxt/.nuxt && chown -R node.node /nuxt
RUN mkdir /node_modules && chown node.node /node_modules
RUN ln -vs /node_modules /app/node_modules

WORKDIR /app

USER node

COPY package.json package-lock.json /app/

RUN npm install

VOLUME /app/node_modules
VOLUME /nuxt

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

EXPOSE 3000

CMD npm run dev
