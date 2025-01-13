# Stage 1: Build the Angular app
FROM node:22 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the Angular app code
COPY . .

# Build the Angular app
RUN npm run build --configuration=production

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine

# Copy the built Angular app into Nginx's web directory
COPY --from=build /app/www /usr/share/nginx/html

# Copy a custom Nginx configuration file (optional)
# Uncomment the next line if you want to add a custom Nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3030
EXPOSE 3030

# Set the command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
