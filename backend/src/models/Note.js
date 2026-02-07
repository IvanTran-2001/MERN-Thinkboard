/**
 * Note Model - User notes with timestamps and user reference
 */

import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Note title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    content: {
      type: String,
      required: [true, "Note content is required"],
      maxlength: [10000, "Content cannot exceed 10000 characters"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to User model for population
      required: [true, "Note must belong to a user"],
      index: true, // Index for faster queries by user
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

// Compound index for efficient user-specific queries sorted by date
noteSchema.index({ user: 1, createdAt: -1 });

/**
 * Note Model
 * @type {mongoose.Model}
 */
const Note = mongoose.model("Note", noteSchema);

export default Note;
