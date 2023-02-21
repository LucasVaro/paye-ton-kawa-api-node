FROM node:18.13.0

COPY ./src .
COPY ./docs .
COPY ./package.json ./package-lock.json ./
RUN npm ci --quiet --no-optional --no-audit --prefix .

RUN npm run build

ENV NODE_ENV=prod

CMD [ "npm", "run", "server"]