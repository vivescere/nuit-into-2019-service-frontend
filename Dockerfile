FROM node:8.16.0
WORKDIR /usr/app
RUN npm install
EXPOSE 8000
CMD npm start
