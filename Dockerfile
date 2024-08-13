FROM node:14

WORKDIR /marbles
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4151
CMD node app.js
