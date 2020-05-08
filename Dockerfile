#use an image with all packages to do the heavylifting for us
FROM node as builder
WORKDIR /home/node
USER node
COPY . . 
RUN npm --logevel=error install
RUN npm run typeorm migration:run
RUN npm run seed:run
RUN npm run build

#use a small footprint image to run the app
FROM node:alpine
WORKDIR /home/node
USER node
COPY --from=builder --chown=node:node /home/node .
EXPOSE 3000
CMD npm run start:prod