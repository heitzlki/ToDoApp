import { gql } from '@apollo/client';

const stackQuery = gql`
  query {
    stacks {
      stackID
      title
      dotColor
      notes {
        stackID
        noteID
        title
        done
      }
    }
  }
`;
const noteQuery = gql`
  query($stackID: String!) {
    notes(stackID: $stackID) {
      stackID
      noteID
      title
      done
    }
  }
`;

const newStackMutation = gql`
  mutation newStack($title: String!, $dotColor: String!) {
    newStack(title: $title, dotColor: $dotColor) {
      stackID
      title
      dotColor
    }
  }
`;

const newNoteMutation = gql`
  mutation($stackID: String!, $title: String!) {
    newNote(stackID: $stackID, title: $title) {
      stackID
      noteID
      title
      done
    }
  }
`;

const editStackMutation = gql`
  mutation($stackID: String!, $title: String!, $dotColor: String!) {
    editStack(stackID: $stackID, title: $title, dotColor: $dotColor) {
      stackID
      title
      dotColor
    }
  }
`;

const editNoteMutation = gql`
  mutation(
    $stackID: String!
    $noteID: String!
    $title: String!
    $done: Boolean
  ) {
    editNote(stackID: $stackID, noteID: $noteID, title: $title, done: $done) {
      stackID
      noteID
      title
      done
    }
  }
`;

const deleteStackMutation = gql`
  mutation($stackID: String!) {
    deleteStack(stackID: $stackID) {
      deleted
    }
  }
`;

const deleteNoteMutation = gql`
  mutation($stackID: String!, $noteID: String) {
    deleteNote(stackID: $stackID, noteID: $noteID) {
      deleted
    }
  }
`;

export {
  stackQuery,
  noteQuery,
  editStackMutation,
  editNoteMutation,
  newStackMutation,
  newNoteMutation,
  deleteStackMutation,
  deleteNoteMutation,
};
