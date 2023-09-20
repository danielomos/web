# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React Vite application
RUN npm run build

# Expose port 3000 for the development server
EXPOSE 5173

# Start the application
CMD ["npm", "start"]

