# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

ARG ENV
ARG SECRET_NAME
ARG SECRET_VERSION
ARG SECRET_PROJECT_ID

ENV SECRET_NAME=${SECRET_NAME}
ENV SECRET_VERSION=${SECRET_VERSION}
ENV SECRET_PROJECT_ID=${SECRET_PROJECT_ID}


RUN echo $ENV
RUN echo $SECRET_NAME
RUN echo $SECRET_VERSION
RUN echo $SECRET_PROJECT_ID

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 8080
# Start the server using the production build
CMD [ "npm","run", "start:prod" ]
