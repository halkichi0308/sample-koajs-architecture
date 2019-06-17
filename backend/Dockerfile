FROM node:11.15.0-stretch

ARG SERVER_ROOT
# io color scheme
#ENV TERM "xterm-256color"
COPY .bashrc /root/.bashrc

# Minimal commands
RUN apt update && \
    apt install -y curl vim

# workdir setting
WORKDIR $SERVER_ROOT

# yarn settings
RUN yarn install

CMD ["yarn", "start"]