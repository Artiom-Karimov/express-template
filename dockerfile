FROM node:lts-bullseye-slim
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN yarn && yarn build
CMD npm run start