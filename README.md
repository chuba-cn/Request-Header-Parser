# Request Header Parser Microservice Documentation

## Introduction

The Request Header Parser Microservice is a simple Node.js application built using the Express framework. It provides an API endpoint (`/api/whoami`) that returns information about the client's IP address, preferred language, and user agent.

## Prerequisites

- Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).
- Basic knowledge of JavaScript and Express framework.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chuba-cn/request-header-parser-microservice.git
   ```

2. Navigate to the project directory:

   ```bash
   cd request-header-parser-microservice
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and set any environment variables if needed.

## Configuration

The project uses the `dotenv` module for environment variables. You can configure the following variables in the `.env` file:

- `PORT`: The port on which the server will listen. Defaults to 3000.

## Usage

1. Start the server:

   ```bash
   npm start
   ```

   This will start the server, and you should see a message indicating that the app is listening on a specific port.

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the homepage.

3. To use the API endpoint, make a GET request to [http://localhost:3000/api/whoami](http://localhost:3000/api/whoami). The response will be a JSON object containing the client's IP address, preferred language, and user agent.

## API Endpoint

### GET `/api/whoami`

- **Description:** Returns information about the client's IP address, preferred language, and user agent.

- **Example Request:**

  ```http
  GET /api/whoami
  ```

- **Example Response:**

  ```json
  {
    "ipaddress": "127.0.0.1",
    "language": "en-US,en;q=0.9",
    "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
  }
  ```

## Error Handling

The application handles errors by using Express middleware. If an error occurs, the client will receive a generic error message.

## Dependencies

- `express`: Web application framework for Node.js.
- `path`: Module for handling file paths.
- `ejs`: Embedded JavaScript templates for rendering views.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing.

## Conclusion

The Request Header Parser Microservice is a basic example of a Node.js and Express application that provides a simple API endpoint for retrieving client information. Feel free to extend or modify it based on your requirements.
