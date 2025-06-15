FROM node:20
WORKDIR /app
RUN npm i @aws-amplify/backend@.16.1 @aws-amplify/backend-cli@1.8.0