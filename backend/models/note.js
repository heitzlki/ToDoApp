const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const noteSchema = new Schema({
	noteID: String,
	title: String,
	done: Boolean
})

module.exports = Note = mongoose.model('Note', noteSchema);
