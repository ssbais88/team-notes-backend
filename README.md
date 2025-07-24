
# 📝 Team Notes Manager – Backend

This is the **backend** of the Team Notes Manager application, built with **Node.js**, **Express.js**, and **MongoDB** using **Mongoose**. It exposes a RESTful API for managing team notes (create, read, update, delete).

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Yup (for validation)
- dotenv

---

## 📁 Project Structure

```
notes-backend/
├── controllers/         # Handles request logic
├── services/            # Business logic
├── models/              # Mongoose schemas
├── routes/              # API routes
├── validations/         # Yup validation schemas
├── db.js                # MongoDB connection setup
├── server.js            # Entry point
├── .env                 # Environment variables
└── package.json
```

---

## 🧪 API Endpoints

| Method | Endpoint      | Description     |
|--------|---------------|-----------------|
| GET    | `/notes`      | Get all notes   |
| POST   | `/notes`      | Create a note   |
| PUT    | `/notes/:id`  | Update a note   |
| DELETE | `/notes/:id`  | Delete a note   |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ssbais88/team-notes-backend.git
cd notes-backend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Create `.env` File

Create a `.env` file in the root of `notes-backend/` and add:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/team-notes
```

> You can replace `MONGO_URI` with your MongoDB Atlas URI if needed.

---

### 4. Run the Server

```bash
npm run start
```

The server will be available at [http://localhost:5000](http://localhost:5000)

---

## 🧠 Notes

- Built with modular structure: controller, service, validation
- Uses Yup for clean backend input validation

---
