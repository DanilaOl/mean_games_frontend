FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install

COPY . .

EXPOSE 80

CMD ["ng", "serve", "--port", "80"]
