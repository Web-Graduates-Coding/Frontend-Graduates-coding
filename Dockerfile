FROM node:17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN ng build

EXPOSE 4200

CMD ["npm", "start"]