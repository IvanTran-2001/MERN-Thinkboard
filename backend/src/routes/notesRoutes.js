import express from "express";
import rateLimiter from "../middleware/rateLimiter.js";

import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

// Protected will grab userID from JWT and attach user to req.user
// Important to execute protect before accessing req.user
router.use(protect);
router.use(rateLimiter);

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
