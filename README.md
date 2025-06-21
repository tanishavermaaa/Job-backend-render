# 🛠️ **Job Application Tracker – Backend (Node.js + Express)**

This is the backend of the Job Application Tracker web application. It provides secure RESTful APIs to handle user authentication, job data management, and token-based access control, using **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Project Overview

The backend powers all core functionalities of the application including:

* User registration and login
* JWT-based authentication and authorization
* Job CRUD operations (Create, Read, Update, Delete)
* Filtering and sorting jobs
* Secure connection to a MongoDB database

It is designed to be used with the **React.js frontend** and supports full-stack deployment.

---

## ✨ Features

* 🔐 **Authentication & Authorization**
  Users can register and log in securely using JWT tokens.

* 📄 **Job CRUD Functionality**
  Users can add, view, update, and delete job entries.

* 🔍 **Filtering and Sorting**
  Jobs can be filtered by status and sorted by latest/oldest.

* 🔒 **Protected Routes**
  Middleware to validate JWTs before allowing access to sensitive routes.

* 🌐 **CORS Support**
  Enables secure communication between frontend and backend servers.

---

## 🧰 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB** (via Mongoose)
* **JSON Web Tokens (JWT)**
* **bcrypt.js** (for password hashing)
* **dotenv** (for environment variables)
* **cors**

---

## 📁 Folder Structure

```
backend/
├── controllers/
│   ├── authController.js
│   └── jobController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   └── Job.js
├── routes/
│   ├── authRoutes.js
│   └── jobRoutes.js
├── .env
├── server.js
├── package.json
```

---

## 🔧 Setup Instructions

### Prerequisites:

* Node.js and npm installed
* MongoDB Atlas connection string or local MongoDB setup

---

## 🛡️ Security Highlights

* Passwords are hashed using bcrypt before storing in the database.
* JWT tokens are signed and verified using a secret key.
* All sensitive routes are protected by middleware that checks token validity.

---

## 🔗 API Endpoints Overview

### Auth Routes

* `POST /api/auth/register` – Register new user
* `POST /api/auth/login` – Login existing user

### Job Routes (Protected)

* `POST /api/jobs` – Create a new job
* `GET /api/jobs` – Get all jobs
* `GET /api/jobs/:id` – Get a single job
* `PATCH /api/jobs/:id` – Update a job
* `DELETE /api/jobs/:id` – Delete a job
