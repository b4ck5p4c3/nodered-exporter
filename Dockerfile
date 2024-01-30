FROM node:20-alpine
WORKDIR /app
COPY package*.json package*.json
RUN yarn --pure-lockfile
COPY . .
EXPOSE 9001
CMD yarn main