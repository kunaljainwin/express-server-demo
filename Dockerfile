FROM node:alpine

WORKDIR /var/app

COPY package*.json /var/app/

RUN npm install --production

COPY index.js .

EXPOSE 3000

CMD ["node","start"]