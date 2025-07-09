# Dockerfile
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Use serve for static hosting
RUN npm install -g serve
CMD ["serve", "-s", "build"]

EXPOSE 3000
