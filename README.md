# 📝 MERN Thinkboard

A full-stack authenticated note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). Securely create, manage, and organize your personal notes with JWT authentication, protected routes, and a clean modern interface powered by TailwindCSS and DaisyUI.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen) ![React](https://img.shields.io/badge/Frontend-React-blue) ![Node.js](https://img.shields.io/badge/Backend-Node.js-green) ![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38bdf8) ![JWT](https://img.shields.io/badge/Auth-JWT-orange)

## 🌐 Live Demo

**[View Live Application](https://mern-thinkboard-qsrl.onrender.com)**

> Note: The app is hosted on Render's free tier. Initial load may take 30-60 seconds as the server spins up from sleep mode.

---

## ✨ Features

- **🔐 JWT Authentication** - Secure user authentication with JSON Web Tokens (7-day expiration)
- **👤 User Accounts** - Register, login, and manage personal accounts with password hashing (bcrypt)
- **🔒 Protected Routes** - Frontend and backend route protection ensuring only authenticated users can access their notes
- **📝 User-Specific Notes** - Each user's notes are private and isolated from other users
- **🔌 RESTful API** - Full CRUD functionality with proper HTTP methods and status codes
- **🎨 Modern UI/UX** - Clean, responsive design with TailwindCSS and DaisyUI
- **🚀 Real-time Updates** - Instant feedback with toast notifications
- **🛡️ Smart Rate Limiting** - IP-based rate limiting for auth routes, user-based for protected routes using Upstash Redis
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **⚡ Fast Performance** - Optimized backend with MongoDB indexing
- **✅ Input Validation** - Client and server-side validation for email, password, and username formats
- **🔄 Axios Interceptors** - Automatic token attachment to all authenticated requests

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
- **Mongoose** - MongoDB object modeling with schema validation
- **JWT (jsonwebtoken)** - Secure token-based authentication
- **bcryptjs** - Password hashing and verification
- **Upstash Redis** - Serverless Redis for rate limiting
- **CORS** - Cross-Origin Resource Sharing enabled
- **dotenv** - Environment variable management

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

- **Postman** (optional, for API testing - [Download Postman](https://www.postman.com/))
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

# JWT Secret (generate a secure random string)
JWT_SECRET=your_secure_random_64_character_hex_string

# Server Port
PORT=5001

# Node Environment
NODE_ENV=development

# Upstash Redis (for rate limiting)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

**Generate a secure JWT_SECRET:**

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
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

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5001

---

## 📦 Project Structure

```
MERN-Thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js                  # MongoDB connection
│   │   │   └── upstash.js             # Redis rate limiter config
│   │   ├── constants/
│   │   │   └── authMessages.js        # Auth error message constants
│   │   ├── controllers/
│   │   │   ├── authController.js      # Auth logic (register/login/logout)
│   │   │   └── notesController.js     # Business logic for notes
│   │   ├── middleware/
│   │   │   ├── auth.js                # JWT verification middleware
│   │   │   └── rateLimiter.js         # Rate limiting middleware
│   │   ├── models/
│   │   │   ├── Note.js                # Mongoose Note schema (with user ref)
│   │   │   └── Users.js               # Mongoose User schema
│   │   ├── routes/
│   │   │   ├── authRoutes.js          # Authentication routes
│   │   │   └── notesRoutes.js         # Protected notes routes
│   │   ├── utils/
│   │   │   ├── generateToken.js       # JWT token generation
│   │   │   └── validation.js          # Input validation helpers
│   │   └── server.js                  # Express app entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── auth/
│   │   │   ├── GuestRoute.jsx         # Redirect authenticated users
│   │   │   └── ProtectedRoute.jsx     # Protect routes (require auth)
│   │   ├── components/
│   │   │   ├── LoginForm.jsx          # Login form component
│   │   │   ├── MinalNavbar.jsx        # Minimal navbar for auth pages
│   │   │   ├── NavBar.jsx             # Main navigation with logout
│   │   │   ├── NoteCard.jsx           # Individual note display
│   │   │   ├── NotesNotFound.jsx      # Empty state component
│   │   │   ├── RateLimitedUI.jsx      # Rate limit warning
│   │   │   └── RegisterForm.jsx       # Registration form component
│   │   ├── lib/
│   │   │   ├── axios.js               # Axios instance with interceptors
│   │   │   └── utils.js               # Utility functions
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx         # Create note page (protected)
│   │   │   ├── HomePage.jsx           # Main notes listing (protected)
│   │   │   ├── LoginPage.jsx          # Login page (guest only)
│   │   │   ├── NoteDetailPage.jsx     # View/Edit note (protected)
│   │   │   └── RegisterPage.jsx       # Registration page (guest only)
│   │   ├── App.jsx                    # Main app with route guards
│   │   ├── main.jsx                   # React entry point
│   │   └── index.css                  # Global styles
│   └── package.json
└── package.json                        # Root package.json
```

---

## 🔌 API Endpoints

### Authentication Routes (Public)

| Method | Endpoint             | Description              | Rate Limit |
| ------ | -------------------- | ------------------------ | ---------- |
| POST   | `/api/auth/register` | Register new user        | IP-based   |
| POST   | `/api/auth/login`    | Login user (returns JWT) | IP-based   |
| POST   | `/api/auth/logout`   | Logout user              | IP-based   |

**Request Body (Register):**

```json
{
  "userName": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Request Body (Login):**

```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (Login/Register):**

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "userName": "johndoe",
    "email": "john@example.com"
  }
}
```

### Notes Routes (Protected - Requires JWT)

| Method | Endpoint         | Description             | Rate Limit |
| ------ | ---------------- | ----------------------- | ---------- |
| GET    | `/api/notes`     | Get all user's notes    | User-based |
| GET    | `/api/notes/:id` | Get specific note by ID | User-based |
| POST   | `/api/notes`     | Create a new note       | User-based |
| PUT    | `/api/notes/:id` | Update note by ID       | User-based |
| DELETE | `/api/notes/:id` | Delete note by ID       | User-based |

**Authentication Header:**

```
Authorization: Bearer <your_jwt_token>
```

**Note:** All notes routes require a valid JWT token in the Authorization header. Users can only access their own notes.

---

## 🧪 Testing with Postman

This project was extensively tested using **Postman** during development. A complete testing workflow ensures all endpoints function correctly with proper authentication.

### Postman Setup

1. **Create Environment Variables:**
   - `BASE_URL`: `http://localhost:5001/api`
   - `TOKEN`: (will be auto-saved after login)

2. **Auto-Save Token Script:**

Add this to the "Tests" tab of your login/register requests:

```javascript
if (pm.response.code === 200 || pm.response.code === 201) {
  const response = pm.response.json();
  pm.environment.set("TOKEN", response.token);
}
```

3. **Set Authorization for Protected Routes:**
   - Type: `Bearer Token`
   - Token: `{{TOKEN}}`

### Testing Workflow

1. **Register a new user** → Token saved automatically
2. **Login** → Token saved automatically
3. **Test protected routes** → Token attached automatically
4. **Test multi-user scenarios** → Register different users, verify note isolation
5. **Test rate limiting** → Send rapid requests to trigger rate limiter

**Collection Available:** If you'd like the full Postman collection, [contact me](#-author)!

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
   - `JWT_SECRET`
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
   - `PORT` (auto-set by Render)
   - `NODE_ENV=production`

---

## 🎯 Future Enhancements

- [ ] **Password Reset** - Email-based password recovery system
- [ ] **Profile Management** - Update username, email, and password
- [ ] **Note Categories/Tags** - Organize notes with tags
- [ ] **Search Functionality** - Search notes by title or content
- [ ] **Rich Text Editor** - Markdown or WYSIWYG editor support
- [ ] **Dark Mode** - Theme toggle
- [ ] **Note Sharing** - Share notes via public links
- [ ] **Drag & Drop** - Reorder notes
- [ ] **File Attachments** - Upload images/files to notes
- [ ] **Two-Factor Authentication** - Enhanced security with 2FA

---

## 👤 Author

**Ivan Tran**

- GitHub: [@IvanTran-2001](https://github.com/IvanTran-2001)
- LinkedIn: [Ivan Tran](https://linkedin.com/in/ivan-tran-76164017a)
- Portfolio: [ivantran-2001.github.io](https://ivantran-2001.github.io/)

---

## 📚 Acknowledgments

- Inspired by the need for a simple, fast note-taking app
- Built as a full-stack portfolio project with professional authentication patterns
- Thanks to the MERN stack community for excellent documentation
