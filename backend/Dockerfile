FROM node:10-stretch

# io color scheme
#ENV TERM "xterm-256color"
COPY .bashrc /root/.bashrc

# Minimal commands
RUN apt update && \
    apt install -y curl vim

# workdir setting
WORKDIR /opt/api

# yarn settings
#COPY volumes/*.json ./
#RUN export PATH=$PATH:/opt/api/node_modules/.bin
#RUN yarn install

#CMD ["yarn", "start"]