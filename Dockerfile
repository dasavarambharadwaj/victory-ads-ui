# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
# sudo docker build -t victory-ads-ui:dev
# sudo docker run -it -p 8081:8080 victory-ads-ui:dev
# sudo docker run -v /etc/letsencrypt/live/victoryads-srd.in/fullchain.pem:/etc/letsencrypt/live/victoryads-srd.in/fullchain.pem -v /etc/letsencrypt/live/victoryads-srd.in/privkey.pem:/etc/letsencrypt/live/victoryads-srd.in/privkey.pem -it -p 443:443 bharadwaj29/victory-ads-ui:1.0.2
# sudo docker run -v /etc/letsencrypt/live/victoryads-srd.in/fullchain.pem:/etc/letsencrypt/live/victoryads-srd.in/fullchain.pem -v /etc/letsencrypt/live/victoryads-srd.in/privkey.pem:/etc/letsencrypt/live/victoryads-srd.in/privkey.pem -it -p 80:80 bharadwaj29/victory-ads-ui:1.0.2