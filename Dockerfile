FROM node:20-alpine
COPY package*.json package*.json
RUN yarn --pure-lockfile
COPY . .
CMD "yarn main"