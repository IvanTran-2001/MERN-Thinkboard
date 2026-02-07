/**
 * Express Server Setup
 * - Development: Frontend (Vite) and Backend run separately with CORS
 * - Production: Backend serves built frontend from /dist folder
 */

import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9999;
const __dirname = path.resolve();

// CORS for development (Vite runs on port 5173)
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173", // Vite dev server
    }),
  );
}

/**
 * JSON Body Parser Middleware
 * 
 * Parses incoming JSON request bodies and makes data available at req.body.
 * Required for POST/PUT requests with JSON payloads.
 */
app.use(express.json());

/**
 * Route Configuration
 * 
 * Authentication Routes: /api/auth/*
 * - Applied middleware: Rate limiter (IP-based, 5 req/10sec)
 * - Public routes: register, login, logout
 * 
 * Notes Routes: /api/notes/*
 * - Applied middleware: JWT protect (all routes), Rate limiter (user-based, 10 req/10sec)
 * - Protected routes: CRUD operations for notes
 */
app.use("/api/auth", rateLimiter, authRoutes);
app.use("/api/notes", notesRoutes);

/**
 * Production Configuration - Serve Frontend
 * 
 * In production, serve the built React app from the /dist folder.
 * All non-API routes are handled by React Router (client-side routing).
 */
if (process.env.NODE_ENV === "production") {
  // Serve static files (JS, CSS, images) from frontend/dist
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Catch-all route: Send index.html for any non-API routes
  // This allows React Router to handle client-side routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

/**
 * Server Initialization
 * 
 * 1. Connect to MongoDB database
 * 2. Start Express server on specified PORT
 * 3. Log success message or exit on failure
 */
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});
