FROM node:10

WORKDIR /app

COPY . .

RUN npm install
RUN npm install pm2 -g

EXPOSE 3006

CMD ["pm2-runtime", "./bin/server.js"]