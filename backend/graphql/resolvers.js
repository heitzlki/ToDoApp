const Stack = require('../models/stack');
const Note = require('../models/note');
const { ApolloError, UserInputError } = require('apollo-server')
const errorMessages = require('./errorMessages.json');
const crypto = require("crypto");
const { exception } = require('console');

module.exports = resolvers = {
  Query: {
    stacks: async () => {
			try {
				const stacks = await Stack.find({});
				if(!stack)
					return null
				return stacks
			} catch (err) {
				throw err
			}
		},
		notes: async (_, args) => {
			const {stackID} = args;
			try {
				const notes = await Note.find({stackID});
				if(!notes)
					return null
				return notes
			} catch (err) {
				throw err
			}
		},
	},
  Mutation: {
    newStack: async (_, args) => {
      let {
				title,
				dotColor
			} = args
			let errors = {}
			try {
				if (title.trim().length() < 3) {
					errors.title = errorMessages.stackNameToShort
          throw new UserInputError(errorMessages.UserInputError, {
            errors
          })
				}
				if (!dotColor) {
					dotColor = 'white'
				}
				let stackID = crypto.randomBytes(8).toString("hex")
				const stackIdCheck = await Stack.findOne({
          stackID
				})
				if(stackIdCheck) {
					stackID = crypto.randomBytes(8).toString("hex")
        }
				let stack = new User({
					stackID,
					title,
					dotColor
				});

				const stackSave = await stack.save();

				return stackSave
			} catch (err) {
				throw new UserInputError(errorMessages.userInputError, {
					errors: err
				})
			}
		},
		newNote: async (_, args) => {
      let {
				stackID,
				title
			} = args
			let errors = {}
			try {
				if(stackID.trim() === '')
					errors.stack == "Stack ID isn't aviable!"
				if (title.trim().length() < 3) {
					errors.title = errorMessages.noteNameToShort
          throw new UserInputError(errorMessages.UserInputError, {
            errors
          })
				}
				let noteID = crypto.randomBytes(8).toString("hex")
				const noteIDCheck = await note.findOne({
          noteID
				})
				if(noteIDCheck) {
					noteID = crypto.randomBytes(8).toString("hex")
        }
				let note = new Note({
					stackID,
					noteID,
					title,
					done: false
				});

				const noteSave = await note.save();

				return noteSave
			} catch (err) {
				throw new UserInputError(errorMessages.userInputError, {
					errors: err
				})
			}
		},
		deleteStack: async (_, args) => {
      let {	stackID } = args
			let errors = {}
			try {
				if(stackID.trim() === '') {
					errors.stack == "Stack ID isn't aviable!"
					throw new UserInputError(errorMessages.UserInputError, {
            errors
					})
			}
				try {
					await Stack.findOneAndDelete({
						stackID
					});
					return { deleted: true };
				} catch {
					return { deleted: false };
				}
				
			} catch (err) {
				throw new UserInputError(errorMessages.userInputError, {
					errors: err
				})
			}
		},
		deleteNote: async (_, args) => {
      let {	stackID, noteID } = args
			let errors = {}
			try {
				if(stackID.trim() === '')
					errors.stack == "Stack ID isn't aviable!"
				if(noteID.trim() === '')
					errors.note == "Note ID isn't aviable!"
				if (Object.keys(errors).length > 0) {
					throw new UserInputError(errorMessages.userInputError, {
						errors
					})
				};
				try {
					await Stack.findOneAndDelete({
						stackID,
						noteID
					});
					return { deleted: true };
				} catch {
					return { deleted: false };
				}
				
			} catch (err) {
				throw new UserInputError(errorMessages.userInputError, {
					errors: err
				})
			}
		},
  }
};