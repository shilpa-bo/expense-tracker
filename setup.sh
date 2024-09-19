#!/bin/bash

# Function to handle errors
handle_error() {
    echo "$1"
    exit 1
}

# Navigate to the frontend directory and install dependencies
echo "Setting up frontend..."
cd ./frontend || handle_error "Frontend directory not found!"
npm install || handle_error "Frontend installation failed!"
npm start & 

# Navigate to the backend directory and install dependencies
echo "Setting up backend..."
cd ../backend || handle_error "Backend directory not found!"
npm install || handle_error "Backend installation failed!"
nodemon app.js # This will run in the foreground

echo "Setup complete!"
