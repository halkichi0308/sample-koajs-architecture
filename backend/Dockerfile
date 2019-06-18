FROM node:12.4.0-stretch

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
COPY api/package.json package.json
COPY api/yarn.lock yarn.lock
RUN yarn upgrade

CMD ["yarn", "start"]