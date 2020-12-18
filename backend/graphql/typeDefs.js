const { gql } = require('apollo-server')


module.exports = typeDefs = gql `
  type Stack {
    stackID: String!
    title: String
    dotColor: String
  }
  type Note {
    stackID: String!
    noteID: String!
    title: String
    done: Boolean
  }
  type deleted {
    deleted: Boolean
  }
  type Query {
    login(
      username: String,
      password: String
    ): User
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
    deleteStack(
      stackID: String
    ): deleted
    deleteNote(
      stackID: String
      noteID: String
    ): deleted

  }
`;