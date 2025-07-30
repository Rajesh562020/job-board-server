## 📦 Job Board API – Backend

This is the backend server for the **Mini Job Board** application, built using **Node.js**, **Express.js**, and **MongoDB**. It provides a RESTful API to manage job postings.

---

### 🚀 Features

* ✅ Create, Read, Update, and Delete (CRUD) job postings
* ✅ RESTful API endpoints
* ✅ MongoDB database integration
* ✅ CORS enabled for frontend access
* ✅ Clean and minimal project structure

---

### 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (via Mongoose)
* CORS
* dotenv

---

### 📁 Project Structure

```
server/
│
├── .env              # Environment variables
├── .gitignore
├── server.js         # Entry point
├── package.json
└── README.md         # Project documentation

```

---

### 📄 API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | `/api/jobs`     | Get all jobs       |
| GET    | `/api/jobs/:id` | Get a job by ID    |
| POST   | `/api/jobs`     | Create a new job   |
| PUT    | `/api/jobs/:id` | Update a job by ID |
| DELETE | `/api/jobs/:id` | Delete a job by ID |

---

### 📦 Setup Instructions

1. **Clone the repo:**

   ```bash
   git clone https://github.com/yourusername/job-board-api.git
   cd job-board-api/server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env` file:**

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the server:**

   ```bash
   npm start
   ```

---

### 🔗 Frontend

You can find the frontend React app here: \[Link to frontend repo if available]

---

### 🙌 Author

**Rajesh Singh** – [LinkedIn](www.linkedin.com/in/rajesh-singh-mehra-57282a225)

---