FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN apt-get update && apt-get install -y wait-for-it

COPY . .

EXPOSE 3000

CMD ["wait-for-it", "db:3306", "-t", "60", "--", "npm", "start"]