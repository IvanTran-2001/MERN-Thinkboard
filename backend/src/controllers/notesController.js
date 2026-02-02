import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    // fetch all notes from database
    const notes = await Note.find({});
    // return notes as json response
    res.status(200).json(notes);

  } catch (error) {

    // log error and send server error response
    console.error("Error fetching notes:", error.message);

    // send server error response
    res.status(500).json({ message: "Server Error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({message: "note created", title: newNote.title});
  } catch (error) {

    console.error("Error creating note:", error.message);
    res.status(500).json({ message: "Server Error" });
    
  }
}

export async function updateNote(req, res) {
  try {

    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });

    if (!updatedNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "note updated" });

  } catch (error) {
    console.error("Error updating note:", error.message);
    res.status(500).json({ message: "Server Error" }); 
  }
}

export async function deleteNote(req, res) {
  try {
    
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) return res.status(404).json({ message: "ID not found" });

    res.status(200).json({ message: "note deleted" });
    
  } catch (error) {
    console.error("Error deleting note:", error.message);
    res.status(500).json({ message: "Server Error" }); 
  }
}