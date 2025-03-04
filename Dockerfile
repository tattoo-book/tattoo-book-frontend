# Dockerfile for Next.js development mode

# Use the official Node.js 18 image as a base
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application code
COPY . .

# Expose the port Next.js will run on
EXPOSE 3000

# Start the Next.js development server
CMD ["yarn",  "dev"]