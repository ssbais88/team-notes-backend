# 📝 Team Notes Manager – Backend

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)** for managing notes. This is the backend for the Team Notes Manager application.

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **CORS**
- **dotenv**

---

## 🛠️ Features

- ✅ Create, read, update, and delete notes
- ⏱️ Automatic timestamps for notes
- 🔐 Environment variables via `.env`
- 🔄 CORS enabled for frontend interaction

---

## 📁 API Endpoints

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| GET    | `/notes`         | Fetch all notes     |
| POST   | `/notes`         | Create a new note   |
| PUT    | `/notes/:id`     | Update a note       |
| DELETE | `/notes/:id`     | Delete a note       |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ssbais88/team-notes-backend.git
cd team-notes-backend
