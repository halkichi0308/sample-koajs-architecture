
#frontend 
FROM node:11.15.0-stretch

ARG APP_NAME
ARG CLIENT_ROOT

ENV APP_NAME=$APP_NAME \
    CLIENT_ROOT=$CLIENT_ROOT

RUN yarn add http-server && \
    yarn add --save-dev webpack webpack-cli webpack-dev-server

WORKDIR $CLIENT_ROOT

COPY *.json ./

RUN yarn install

#RUN npm run build

#CMD [ "http-server", "dist" ]
