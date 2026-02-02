import mongoose from "mongoose";

// 1-create schema
// 2- model base of that scehma

// schema
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String, 
            required: true
        },
            
        content: {
            type: String, 
            required: true
        },
    }, 
    {timestamps: true}
);

// model
const Note = mongoose.model("Note", noteSchema);

export default Note;