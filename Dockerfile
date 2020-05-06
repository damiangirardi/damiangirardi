# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093
FROM node:12.16.3-alpine3.11 as build

ARG USER_UID
ARG USER_GID

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

RUN apk --no-cache add shadow && \
    usermod -u ${USER_UID} node && \
    groupmod -g ${USER_GID} node

RUN mv -v /app/node_modules /
RUN mkdir /app/node_modules
RUN chown ${USER_UID}.${USER_GID} /app/node_modules
VOLUME /app/node_modules

RUN mkdir /nuxt
RUN chown -R ${USER_UID}.${USER_GID} /nuxt

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

EXPOSE 3000

CMD npm run dev
