FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npx ng build --configuration production

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build app/dist/games_frontend/browser /usr/share/nginx/html

EXPOSE 80
