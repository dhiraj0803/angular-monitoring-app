# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY dist/angular-monitoring-app /app

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME angular-monitoring-app

# Run nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
