const { gql } = require('apollo-server');

module.exports = typeDefs = gql `
  type Stack {
    stackID: String
    title: String
    dotColor: String
    notes: [Note]
  }
  type Note {
    stackID: String
    noteID: String
    title: String
    done: Boolean
  }
  type deleted {
    deleted: Boolean
  }
  type Query {
    stacks: [Stack]
    notes(
      stackID: String
    ): [Note]
    allNotes: [Note]
  }
  type Mutation {
    newStack(
      title: String
      dotColor: String
    ): Stack
    newNote(
      stackID: String
      title: String
    ): Note
    editStack(
      stackID: String
      title: String
      dotColor: String
    ): Stack
    editNote(
      stackID: String!
      noteID: String!
      title: String
      done: Boolean
    ): Note
    deleteStack(
      stackID: String
    ): deleted
    deleteNote(
      stackID: String
      noteID: String
    ): deleted
  }
`;