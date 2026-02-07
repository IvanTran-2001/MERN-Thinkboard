/**
 * Notes Controller - CRUD operations for user notes
 * All operations scoped to authenticated user (req.user) for data isolation
 */

import Note from "../models/Note.js";

/**
 * Get all notes for current user, sorted by date
 */
export async function getAllNotes(req, res) {
  try {
    // Fetch only notes belonging to the authenticated user
    // Sort by createdAt ascending (oldest first)
    const notes = await Note.find({ user: req.user._id }).sort({
      createdAt: 1,
    });
    
    // Return notes as JSON response
    res.status(200).json(notes);
  } catch (error) {
    // Log error for debugging
    console.error("Error fetching notes:", error.message);
    
    // Send generic server error response
    res.status(500).json({ message: "Server Error" });
  }
}

/**
 * Get single note by ID (ensures user owns the note)
 */
export async function getNoteById(req, res) {
  try {
    // Find note by ID AND user (ensures user can only access their own notes)
    const noteId = await Note.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    
    if (!noteId) return res.status(404).json({ message: "Note not found" });
    
    res.status(200).json(noteId);
  } catch (error) {
    console.error("Error finding note:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}

/**
 * Create new note for authenticated user
 */
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    
    // Create new note with user reference
    const newNote = new Note({ title, content, user: req.user._id });
    await newNote.save();
    
    res.status(201).json({ message: "note created", title: newNote.title });
  } catch (error) {
    console.error("Error creating note:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}

/**
 * Update note (user can only update their own notes)
 */
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { title, content },
      { new: true },
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "note updated" });
  } catch (error) {
    console.error("Error updating note:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "note deleted", note: deletedNote });
  } catch (error) {
    console.error("Error deleting note:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}
