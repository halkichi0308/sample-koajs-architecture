#backend 
FROM node:8-alpine

ARG APP_NAME
ARG SERVER_ROOT

ENV APP_NAME=$APP_NAME \
    SERVER_ROOT=$SERVER_ROOT

#= Used when building at ``$docker-compose build`` this line.
#WORKDIR /usr/src
#RUN npm install -g express express-generator && \
#    express $SERVER_ROOT
#WORKDIR /usr/src/$SERVER_ROOT

COPY package*.json ./

RUN npm install

CMD ["npm", "start"]
