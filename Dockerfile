FROM node:8-alpine
LABEL maintainer me@raffi.io

ENV NODE_ENV=development
ENV PATH="/usr/app/node_modules/.bin:${PATH}"

WORKDIR /usr/app/
COPY . /usr/app/
RUN chown -R node:node /usr/app/

USER node
RUN yarn install --silent

VOLUME /usr/app/src/
CMD parcel serve \
	--no-autoinstall \
	--no-hmr \
	--no-cache \
	--port ${ENDPOINT_PORT} \
	src/index.html
