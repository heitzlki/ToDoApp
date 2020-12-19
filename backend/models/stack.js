const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const stackSchema = new Schema({
	stackID: String,
	title: String,
	dotColor: String
});

module.exports = Stack = mongoose.model('Stack', stackSchema);
