FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Second stage: create a smaller image for production
FROM node:18 AS production

# Set the working directory
WORKDIR /app

# Copy only the built files and package.json
COPY --from=builder /app/dist ./dist
COPY package*.json ./

# Set NODE_ENV for production
ENV NODE_ENV=production

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["npm", "run", "start"]
