const yup = require("yup");

exports.createNoteSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().optional(),
});

exports.updateNoteSchema = yup.object({
  title: yup.string().optional(),
  description: yup.string().optional(),
});
