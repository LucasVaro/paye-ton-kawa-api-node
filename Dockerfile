FROM node:18.13.0

COPY ./src .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .
RUN npm ci --quiet --omit=optional --no-audit --prefix .

RUN npm run build

ENV NODE_ENV=prod
ENV SWAGGER_URL=https://ptk-api-node.gbv-data.com

EXPOSE 3000

CMD [ "npm", "start"]
