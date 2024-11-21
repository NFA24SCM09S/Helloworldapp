# Use Node.js as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app for production
RUN npm run build

# Serve the React app
CMD ["npm", "start"]
