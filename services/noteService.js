const Note = require("../models/Note");

exports.getAllNotes = async () => {
  return await Note.find().sort({ createdAt: -1 });
};

exports.createNote = async ({ title, description }) => {
  return await Note.create({ title, description });
};

exports.updateNote = async (id, { title, description }) => {
  return await Note.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );
};

exports.deleteNote = async (id) => {
  return await Note.findByIdAndDelete(id);
};
