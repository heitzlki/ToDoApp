const Stack = require('../models/stack')
const Note = require('../models/note')
const { ApolloError, UserInputError } = require('apollo-server')
const errorMessages = require('./errorMessages.json')
const crypto = require('crypto')
const stack = require('../models/stack')

module.exports = resolvers = {
  Query: {
    stacks: async () => {
      try {
        const stacks = await Stack.find({})
        if (!stack) return null
        return stacks
      } catch (err) {
        throw new UserInputError(errorMessages.userInputError, {
          err,
        })
      }
    },
    notes: async (_, args) => {
      const { stackID } = args
      try {
        const notes = await Note.find({ stackID })
        if (!notes) return null
        return notes
      } catch (err) {
        throw err
      }
    },
    stack: async (_, args) => {
      const { stackID } = args
      try {
        const stack = await Stack.find({ stackID })
        if (!stack) return null
        return stack
      } catch (err) {
        throw new UserInputError(errorMessages.userInputError, {
          err,
        })
      }
    },
  },
  Stack: {
    notes: async (parent) => {
      const { stackID } = parent
      try {
        const notes = await Note.find({ stackID })
        if (!notes) return null
        return notes
      } catch (err) {
        throw err
      }
    },
  },
  Mutation: {
    newStack: async (_, args) => {
      let { title, dotColor } = args
      try {
        if (title.trim().length < 3) {
          throw new UserInputError(errorMessages.UserInputError, {
            error: 'Stapelname muss aus mind. drei Zeichen bestehen!',
          })
        }
        if (!dotColor) {
          throw new UserInputError(errorMessages.UserInputError, {
            error: 'Wähle eine Stapelfarbe!',
          })
        }
        let stackID = crypto.randomBytes(8).toString('hex')
        const stackIdCheck = await Stack.findOne({
          stackID,
        })
        if (stackIdCheck == null) {
          stackID = crypto.randomBytes(8).toString('hex')
        }
        let stack = new Stack({
          stackID,
          title,
          dotColor,
        })

        const stackSave = await stack.save()

        return stackSave
      } catch (err) {
        throw new UserInputError(errorMessages.userInputError, {
          errors: err,
        })
      }
    },
    newNote: async (_, args) => {
      let { stackID, title } = args
      try {
        if (stackID.trim() === '') errors.stack = "Stack ID isn't aviable!"
        if (title.trim().length < 3) {
          throw new UserInputError(errorMessages.UserInputError, {
            error: 'Notiz muss aus mind. drei Zeichen bestehen!',
          })
        }
        let noteID = crypto.randomBytes(8).toString('hex')
        const noteIDCheck = await Note.findOne({
          noteID,
        })
        if (noteIDCheck == null) {
          noteID = crypto.randomBytes(8).toString('hex')
        }
        let note = new Note({
          stackID,
          noteID,
          title,
          done: false,
        })

        const noteSave = await note.save()

        return noteSave
      } catch (err) {
        throw new UserInputError(errorMessages.userInputError, {
          errors: err,
        })
      }
    },
    editStack: async (_, args) => {
      let { stackID, title, dotColor } = args
      try {
        if (stackID.trim() === '') {
          throw new UserInputError(errorMessages.UserInputError, {
            error: "StackID isn't aviable. Contact support.",
          })
        }
        if (title.trim().length < 3) {
          throw new UserInputError(errorMessages.UserInputError, {
            error: 'Notiz muss aus mind. drei Zeichen bestehen!',
          })
        }
        if (dotColor.trim() === '') {
          throw new UserInputError(errorMessages.UserInputError, {
            error: 'Wähle eine Stapelfarbe!',
          })
        }

        const stackIdCheck = Stack.find({ stackID })
        if (!stackIdCheck) {
          throw new UserInputError(errorMessages.UserInputError, {
            error: "StackID isn't aviable. Contact support.",
          })
        }

        const stackSave = await Stack.findOneAndUpdate(
          {
            stackID,
          },
          {
            title,
            dotColor,
          }
        )

        return stackSave
      } catch (err) {
        throw new UserInputError(errorMessages.userInputError, {
          errors: err,
        })
      }
    },
    editNote: async (_, args) => {
      let { stackID, noteID, title, done } = args
      try {
        if (stackID.trim() === '') {
          throw new UserInputError(errorMessages.UserInputError, {
            error: "StackID isn't aviable. Contact support.",
          })
        }
        if (noteID.trim() === '') {
          throw new UserInputError(errorMessages.UserInputError, {
            error: "NoteID isn't aviable. Contact support.",
          })
        }
        if (title.trim().length < 3) {
          throw new UserInputError(errorMessages.UserInputError, {
            error: 'Notiz muss aus mind. drei Zeichen bestehen!',
          })
        }
        if (!done) done = false

        const noteIDCheck = Stack.find({ stackID, noteID })
        if (!noteIDCheck) {
          throw new UserInputError(errorMessages.userInputError, {
            error: "Note/Stack ID isn't aviable!",
          })
        }

        const noteSave = await Note.findOneAndUpdate(
          {
            stackID,
            noteID,
          },
          {
            stackID,
            noteID,
            title,
            done,
          }
        )

        return noteSave
      } catch (err) {
        throw new UserInputError(errorMessages.userInputError, {
          errors: err,
        })
      }
    },
    deleteStack: async (_, args) => {
      let { stackID } = args
      try {
        if (stackID.trim() === '') {
          throw new UserInputError(errorMessages.UserInputError, {
            error: "StackID isn't aviable. Contact support.",
          })
        }
        try {
          await Stack.findOneAndDelete({
            stackID,
          })
          return { deleted: true }
        } catch {
          return { deleted: false }
        }
      } catch (err) {
        throw new UserInputError(errorMessages.userInputError, {
          errors: err,
        })
      }
    },
    deleteNote: async (_, args) => {
      let { stackID, noteID } = args
      try {
        if (stackID.trim() === '') {
          throw new UserInputError(errorMessages.UserInputError, {
            error: "StackID isn't aviable. Contact support.",
          })
        }
        if (noteID.trim() === '') {
          throw new UserInputError(errorMessages.UserInputError, {
            error: "NoteID isn't aviable. Contact support.",
          })
        }
        try {
          await Stack.findOneAndDelete({
            stackID,
            noteID,
          })
          return { deleted: true }
        } catch {
          return { deleted: false }
        }
      } catch (err) {
        throw new UserInputError(errorMessages.userInputError, {
          errors: err,
        })
      }
    },
    deleteEverything: async (_, args) => {
      let { verification } = args
      try {
        if (verification.trim() === '') {
          throw new UserInputError(errorMessages.UserInputError, {
            error: 'Passphrase is empty!',
          })
        }
        if (verification.trim() != process.env.VERIFICATION) {
          throw new UserInputError(errorMessages.UserInputError, {
            error: 'Passphrase is wrong!',
          })
        }
        try {
          await Stack.collection.drop({})
          await Note.collection.drop({})
          return { deleted: true }
        } catch {
          return { deleted: false }
        }
      } catch (err) {
        throw new UserInputError(errorMessages.userInputError, {
          errors: err,
        })
      }
    },
  },
}
