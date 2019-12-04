FROM node:8.16.0

WORKDIR /usr/app
EXPOSE 8000
CMD npm start

# Fix path
ENV PATH /usr/app/node_modules/.bin:$PATH

# Install deps
# Using the native module loading strategy
# /usr/app holds node_modules (with package.json to install)
# /usr/app/src holds the app code
COPY package.json /usr/app
COPY package-lock.json /usr/app
RUN npm install

WORKDIR /usr/app/src
