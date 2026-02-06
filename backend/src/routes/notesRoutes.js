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

router.use(protect);
router.use(rateLimiter);

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
