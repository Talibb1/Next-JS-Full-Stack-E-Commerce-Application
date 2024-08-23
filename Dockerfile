# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY server/package.json ./
COPY server/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY server .

# Expose the port your app runs on
EXPOSE 8080

# Start the app
CMD ["npm", "run", "dev"]

