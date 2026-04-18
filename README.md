# Internship Task 4: Basic REST API

## Overview
A backend network application implementation using Node.js and Express to expose a RESTful web service. It leverages an in-memory data store (a basic Array) to manage a 'Users' collection containing attributes like `name`, `email`, and `age`.

## API Endpoints
All endpoints are prefixed with `/api/users`.
- **`GET /api/users`** - Retrieve a list of all active users in system memory.
- **`GET /api/users/:id`** - Retrieve complete details for a specific user.
- **`POST /api/users`** - Create a new user (requires `name`, `email`, `age` in JSON payload).
- **`PUT /api/users/:id`** - Iteratively update fields of an existing user.
- **`DELETE /api/users/:id`** - Permanently remove a user entity entirely.

## Technologies Used
- Node.js environment
- Express.js (Web Framework)

## Setup & Execution
1. Install [Node.js](https://nodejs.org/).
2. Clone the repository and install internal packages securely:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   node index.js
   ```
4. **Testing**: Use [Postman](https://www.postman.com/) or a REST client (like `curl`) to send HTTP requests to `http://localhost:3000/api/users`.
