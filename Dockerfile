FROM node:20-alpine
WORKDIR /app
COPY . .
RUN yarn --pure-lockfile
EXPOSE 9001
CMD yarn main