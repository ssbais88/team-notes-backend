const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

// Route to get all notes
router.get("/", noteController.getNotes);

// Route to create new note
router.post("/", noteController.createNote);

// Route to update existing note
router.put("/:id", noteController.updateNote);

// Route to delete existing note
router.delete("/:id", noteController.deleteNote);

module.exports = router;
