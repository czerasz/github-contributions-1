FROM node:11.1.0-alpine

RUN apk add --update git

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY . /usr/src/app

ENV SERVER_ADDRESS=0.0.0.0
EXPOSE 9000
CMD ["npm", "start"]
