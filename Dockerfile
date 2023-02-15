# Utiliser l'image PHP en tant que base
FROM node:18.13.0


# GLOBAL INIT
COPY ./src .
COPY ./package.json ./package-lock.json .
RUN npm ci --quiet --no-optional --no-audit --prefix .

# RUN BUILD CLIENT AND SERVER 
RUN npm run build

ENV NODE_ENV=prod
# start express server
CMD [ "npm", "run", "server"]