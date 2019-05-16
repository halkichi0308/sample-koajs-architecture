
#front end 
FROM node:lts-alpine

ARG APP_NAME
ARG CLIENT_ROOT

ENV APP_NAME=$APP_NAME \
    CLIENT_ROOT=$CLIENT_ROOT

RUN npm install -g http-server && \
    npm install -g @vue/cli

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#RUN npm run build

#CMD [ "http-server", "dist" ]
