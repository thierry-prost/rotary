FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/web
COPY /web/package*.json ./
RUN npm install --production --silent
COPY /web .
EXPOSE 3000
RUN chown -R node /usr/web/node_modules
USER node
CMD ["npm", "start"]