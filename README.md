# RMS Backend

This is the backend for the **Resource Management System (RMS)** — a Node.js and Express-based API that handles user authentication, project assignments, and resource allocations. The backend connects to MongoDB and provides RESTful endpoints.

## Author

- [@Karan-Bharti1](https://github.com/Karan-Bharti1)





## 🚀 About Me
Hi there! 👋.
I am currently learning Full Stack Web Development with a focus on the MERN stack (MongoDB, Express.js, React, and Node.js). I'm passionate about building dynamic, user-friendly web applications and continuously improving my skills.

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
## 📡 API Endpoints

### Auth Routes

| Method | Endpoint        | Description       |
|--------|-----------------|-------------------|
| POST   | `/auth/login`   | User login        |
| POST   | `/auth/register`| User registration |

### Project Routes

| Method | Endpoint              | Description                     |
|--------|-----------------------|---------------------------------|
| POST   | `/projects`           | Create a new project            |
| GET    | `/projects/:managerId`| Get projects by manager ID      |
| POST   | `/update/:id`         | Update a project by ID          |

### Assignment Routes

| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| GET    | `/assignments`              | Get all assignments                  |
| POST   | `/assignments`              | Create a new assignment              |
| PUT    | `/assignments/update/:id`   | Update an assignment by ID           |
| GET    | `/engineer/:userId`         | Get assignments for a specific engineer |

### User Routes

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/user/:userId`    | Get user details    |
| POST   | `/user/:userId`    | Update user details |
| GET    | `/engineers`       | Get all engineers   |

### Miscellaneous

| Method | Endpoint | Description        |
|--------|----------|--------------------|
| GET    | `/`      | Health check route |

### 🧠 AI Assistance

This project was developed with the help of **AI tools** to accelerate learning and productivity. Specifically:

- **ChatGPT by OpenAI** was used for:
  - Generating boilerplate code for Express/MongoDB routes
  - Designing REST API structures
  - Debugging errors and optimizing logic
  - Writing Markdown documentation (like this `README.md`)
  - Getting quick references during full stack development

AI assistance was used **as a productivity tool**, but all logic was **understood and integrated manually** by the developer to meet the learning goals and technical requirements of the project.

> **Note:**  
> Currently using an updated clone of the backend due to deployment issues:  
> [RMS-Backend-V2](https://github.com/Karan-Bharti1/RMS-Backend-V2)

## Contributing

Feel free to fork this project and submit a pull request.

