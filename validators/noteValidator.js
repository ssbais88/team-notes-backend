const yup = require("yup");

// Validator for creating note
exports.createNoteSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().optional(),
});

// Validator for updating note
exports.updateNoteSchema = yup.object({
  title: yup.string().optional(),
  description: yup.string().optional(),
});
