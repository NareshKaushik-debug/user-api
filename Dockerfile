# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Expose API port
EXPOSE 80

# Run the app
CMD ["node", "app.js"]
