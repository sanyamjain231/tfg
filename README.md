# Node.js Assignment

This Node.js assignment implements a simple API for user registration, authentication, and basic game data handling using Express, MySQL, MongoDB, and RabbitMQ.

## Features

1. User Registration and Authentication:
   - MySQL database for user data with fields for username, email, and password.
   - Registration endpoint securely hashes passwords before storing them.
   - Authentication mechanism using JSON Web Tokens (JWT).

2. Game Data API:
   - MongoDB collection for storing game data.
   - Endpoints to create, retrieve, update, and delete game data for a specific user.

3. RabbitMQ Event Processing:
   - RabbitMQ instance for event processing.
   - Event publisher and subscriber for user registration events.

## Project Structure

The project follows a typical Node.js project structure with the following main components:

- `config`: Configuration files for databases and RabbitMQ.
- `controllers`: Controllers for handling API endpoints.
- `middleware`: Middleware for request validation, error handling, and JWT token verification.
- `models`: Data models for interacting with databases.
- `routes`: Express routes for authentication and game data.
- `services`: Business logic services for user registration, authentication, and game data.
- `utils`: Utility functions, such as password hashing.

## Install Dependencies:
- npm install

## Configure Databases and RabbitMQ:
Set up a MySQL database and update the config/dbConfig.js file with your credentials.
Set up a MongoDB instance and update the config/dbConfig.js file with the connection string.
Install and run RabbitMQ and ensure it's accessible.

## Start the Application:
npm start

##  API Endpoints:
User Registration: POST /auth/register
User Login: POST /auth/login
Create Game: POST /game/create
Retrieve Game Data: GET /game/:userId
Update Game Data: PUT /game/:userId/:gameId
Delete Game: DELETE /game/:userId/:gameId
