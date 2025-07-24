const noteService = require("../services/noteService");
const {
  createNoteSchema,
  updateNoteSchema,
} = require("../validators/noteValidator");

exports.getNotes = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createNote = async (req, res) => {
  try {
    await createNoteSchema.validate(req.body);
    const note = await noteService.createNote(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateNote = async (req, res) => {
  try {
    await updateNoteSchema.validate(req.body);
    const note = await noteService.updateNote(req.params.id, req.body);
    res.json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await noteService.deleteNote(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
