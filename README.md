# 📝 MERN Thinkboard

A full-stack note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). Create, read, update, and delete notes with a clean, modern interface powered by TailwindCSS and DaisyUI.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen) ![React](https://img.shields.io/badge/Frontend-React-blue) ![Node.js](https://img.shields.io/badge/Backend-Node.js-green) ![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38bdf8)

## 🌐 Live Demo

**[View Live Application](https://mern-thinkboard-qsrl.onrender.com)**

> Note: The app is hosted on Render's free tier. Initial load may take 30-60 seconds as the server spins up from sleep mode.

---

## ✨ Features

- **� RESTful API** - Full CRUD functionality with proper HTTP methods and status codes
- **🎨 Modern UI/UX** - Clean, responsive design with TailwindCSS and DaisyUI
- **🚀 Real-time Updates** - Instant feedback with toast notifications
- **🛡️ Rate Limiting** - Built-in API rate limiting using Upstash Redis for security
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **⚡ Fast Performance** - Optimized backend with MongoDB indexing
- **🔒 Input Validation** - Client and server-side validation for data integrity

---

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Beautiful component library
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Elegant notification system
- **React Router** - Client-side routing

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Upstash Redis** - Serverless Redis for rate limiting
- **CORS** - Cross-Origin Resource Sharing enabled

---

## 📸 Screenshots

### Home Page - Notes Grid

![Home Page](https://via.placeholder.com/800x450/4f46e5/ffffff?text=Home+Page+-+Add+Your+Screenshot)

### Create Note Page

![Create Note](https://via.placeholder.com/800x450/10b981/ffffff?text=Create+Note+-+Add+Your+Screenshot)

### Note Detail & Edit

![Note Detail](https://via.placeholder.com/800x450/f59e0b/ffffff?text=Note+Detail+-+Add+Your+Screenshot)

> **Tip:** Replace the placeholder URLs above with your actual screenshots!

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** account ([MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Upstash** account ([Upstash Redis](https://upstash.com/))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/MERN-Thinkboard.git
   cd MERN-Thinkboard
   ```

2. **Install dependencies**
   ```bash
   npm install              # Installs root dependencies (concurrently for dev mode)
   cd backend && npm install
   cd ../frontend && npm install
   cd ..
   ```

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
# MongoDB Connection
MONGO_URI=your_mongodb_connection_string

# Server Port
PORT=5001

# Upstash Redis (for rate limiting)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

### Running Locally

#### Option 1: Run Both (Frontend & Backend) Concurrently

```bash
npm run dev
```

#### Option 2: Run Separately

**Backend:**

```bash
cd backend
npm run dev
```

**Frontend:**

```bash
cd frontend
npm run dev
```

The app will be available at:

- **Frontend:** `http://localhost:5173`
- **Backend:** `http://localhost:5001`

---

## 📦 Project Structure

```
MERN-Thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js              # MongoDB connection
│   │   │   └── upstash.js         # Redis rate limiter config
│   │   ├── controllers/
│   │   │   └── notesController.js # Business logic for notes
│   │   ├── middleware/
│   │   │   └── rateLimiter.js     # Rate limiting middleware
│   │   ├── models/
│   │   │   └── Note.js            # Mongoose Note schema
│   │   ├── routes/
│   │   │   └── notesRoutes.js     # API routes
│   │   └── server.js              # Express app entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NavBar.jsx         # Navigation component
│   │   │   ├── NoteCard.jsx       # Individual note display
│   │   │   ├── NotesNotFound.jsx  # Empty state component
│   │   │   └── RateLimitedUI.jsx  # Rate limit warning
│   │   ├── lib/
│   │   │   ├── axios.js           # Axios instance config
│   │   │   └── utils.js           # Utility functions
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx     # Create note page
│   │   │   ├── HomePage.jsx       # Main notes listing
│   │   │   └── NoteDetailPage.jsx # View/Edit note page
│   │   ├── App.jsx                # Main app component
│   │   ├── main.jsx               # React entry point
│   │   └── index.css              # Global styles
│   └── package.json
└── package.json                    # Root package.json
```

---

## 🔌 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/notes`     | Get all notes     |
| GET    | `/api/notes/:id` | Get note by ID    |
| POST   | `/api/notes`     | Create a new note |
| PUT    | `/api/notes/:id` | Update note by ID |
| DELETE | `/api/notes/:id` | Delete note by ID |

---

## 🚢 Deployment

This app is deployed on **Render** with the following configuration:

### Backend + Frontend Combined Deployment on Render

1. **Build Command:**

   ```bash
   npm install && npm run build
   ```

2. **Start Command:**

   ```bash
   npm run start
   ```

3. **Environment Variables:**
   - `MONGO_URI`
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
   - `PORT` (auto-set by Render)

---

## 🎯 Future Enhancements

- [ ] **User Authentication** - JWT-based login/signup system
- [ ] **Note Categories/Tags** - Organize notes with tags
- [ ] **Search Functionality** - Search notes by title or content
- [ ] **Rich Text Editor** - Markdown or WYSIWYG editor support
- [ ] **Dark Mode** - Theme toggle
- [ ] **Note Sharing** - Share notes via public links
- [ ] **Drag & Drop** - Reorder notes
- [ ] **File Attachments** - Upload images/files to notes

---

## 👤 Author

**Ivan Tran**

- GitHub: [@IvanTran-2001](https://github.com/IvanTran-2001)
- LinkedIn: [Ivan Tran](https://linkedin.com/in/ivan-tran-76164017a)
- Portfolio: [ivantran-2001.github.io](https://ivantran-2001.github.io/)

---

## 📚 Acknowledgments

- Inspired by the need for a simple, fast note-taking app
- Built as a full-stack portfolio project
- Thanks to the MERN stack community for excellent documentation
