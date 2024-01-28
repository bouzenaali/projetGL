# Specify the base image
FROM node:20.10-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# 
EXPOSE 3000

# run the application
RUN npm run build
CMD [ "npm", "start" ]