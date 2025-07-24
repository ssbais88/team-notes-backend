const Note = require("../models/Note");

// Get all notes from DB
exports.getAllNotes = async () => {
  return await Note.find().sort({ createdAt: -1 });
};

// Create new note
exports.createNote = async ({ title, description }) => {
  return await Note.create({ title, description });
};

// Update existing note
exports.updateNote = async (id, { title, description }) => {
  return await Note.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );
};

// Delete note
exports.deleteNote = async (id) => {
  return await Note.findByIdAndDelete(id);
};
