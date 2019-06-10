FROM node:10-stretch

ARG SERVER_ROOT
# io color scheme
#ENV TERM "xterm-256color"
COPY .bashrc /root/.bashrc

# Minimal commands
RUN apt update && \
    apt install -y curl vim

# workdir setting
RUN echo hoge$SERVER_ROOT
WORKDIR $SERVER_ROOT

# yarn settings
#COPY api/*.json ./
RUN export PATH=$PATH:/opt/api/node_modules/.bin
RUN yarn install

#CMD ["yarn", "start"]