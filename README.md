# RMS Backend

This is the backend for the **Resource Management System (RMS)** — a Node.js and Express-based API that handles user authentication, project assignments, and resource allocations. The backend connects to MongoDB and provides RESTful endpoints.

## Features

- User Authentication (Login/Registration)
- Project and Assignment Management
- MongoDB integration using Mongoose
- CORS enabled for frontend communication
- Modular structure using `routes` and `models`

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv
- cors
- bcrypt (if used for hashing)
- jsonwebtoken (JWT-based authentication)

## Folder Structure

```
RMS-Backend-main/
│
├── index.js                 # Entry point of the application
├── models/                 # Mongoose models
│   ├── RmsAssignment.js
│   ├── RmsProject.js
│   └── RmsUser.js
├── routes/                 # Route handlers
│   └── auth.js
├── .env                    # Environment variables (not included)
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/RMS-Backend-main.git
cd RMS-Backend-main
npm install
```

### Environment Setup

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGODB=mongodb://localhost:27017/your-db
JWT_SECRET=your_jwt_secret_key
```

### Run the App

```bash
npm start
```

The server should start at `http://localhost:5000`.

## API Endpoints

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| POST   | /auth/login      | User login             |
| POST   | /auth/register   | User registration      |
| GET    | /projects        | Get all projects       |
| POST   | /assignments     | Create an assignment   |
| ...    | (extendable)     | Add more as needed     |

## Contributing

Feel free to fork this project and submit a pull request.

## License

MIT License
