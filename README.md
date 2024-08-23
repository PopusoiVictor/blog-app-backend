# Backend for My Blog Application

## Description

This backend provides RESTful APIs for managing blogs and user authentication. It is built with Express and uses MySQL as the database.

## Backend

### Technologies

- **Node.js**: Runtime environment for the server.
- **Express**: Web framework for building APIs.
- **TypeORM**: ORM for interacting with the database.
- **MySQL**: Relational database used.
- **Pino**: High-performance logger for recording errors and information.

### Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/yourusername/your-backend-repo.git
  ```

2. Navigate to the project directory:

  ```bash
  cd your-backend-repo
  ```

3. Install dependencies:

  ```bash
  npm install
  ```

4. Configure environment variables:

  Create a `.env` file at the root of the directory and copy the contents from `.env.local`, replacing the values with your own.

5. Start the server:

  ```bash
  npm run start
  ```

## API Endpoints

- **POST /register**: Register a new user.
- **POST /login**: Authenticate a user and return a JWT token.
- **GET /blogs**: Retrieve all blogs, sorted by creation date.
- **GET /blogs/:id**: Retrieve a specific blog by ID.
- **POST /blogs**: Create a new blog.
- **PUT /blogs/:id**: Update an existing blog.
- **DELETE /blogs/:id**: Delete an existing blog.

## Logger

We use `pino` for logging. Logs are set at `info` level for general use.

## Frontend Integration

For a complete application experience, connect this backend with the frontend project found [here](https://github.com/PopusoiVictor/blog-app-frontend).

## Contributing

Please open issues or pull requests on GitHub for contributions. Follow the projects contribution guidelines and coding standards.
