import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes:", error);
        res.status(500).json({message:"Internal server error"})
    }
    
}


export async function getAllNotesById(req, res) {
    try {
        const noteById = await Note.findById(req.params.id);
        if (!noteById) return res.status(404).json({ message: "Note not found" });
        res.status(200).json(noteById);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}
export async function creatNotes(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) { 
        res.status(500).json({ message: "Internal server error" });
    }
        
}

export async function upddateNotes(req, res) {
    try {
        
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content },{ new: true});
        if (!updatedNote) return res.status(404).json({ message: " Note not found" });
        res.status(200).json(updatedNote);
    } catch (error) {
        
    }
}

export async  function deleteNotes(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json({ message: "Note not found" });
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}