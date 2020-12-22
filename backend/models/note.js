const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const noteSchema = new Schema({
  stackID: String,
  noteID: String,
  title: String,
  done: Boolean,
});

module.exports = Note = mongoose.model("Note", noteSchema);
