import { gql } from '@apollo/client';

const stackQuery = gql`
	query(){	
		stacks() {
			stackID
			title
			dotColor
			notes
		}
	}
`;
const noteQuery = gql`
	query($stackID: String!) {
		notes(stackID: $stackID) {
			noteID
			title
			done
		}
	}
`;

const newStackMutation = gql`
	mutation($title: String!, $dotColor: String) {
		newStack(title: $title, dotColor: $dotColor) {
			stackID
			title
			dotColor
		}
	}
`;

const newNoteMutation = gql`
	mutation($stackID: String!, $title: String!) {
		notes(stackID: $stackID, title: $title) {
			noteID
			title
			done
		}
	}
`;

const deleteStackMutation= gql`
	mutation($stackID: String!) {
		deleteStack(stackID: $stackID) {
			deleted
		}
	}
`;

const deleteNoteMutation= gql`
	mutation($stackID: String!, $noteID: String) {
		deleteNote(stackID: $stackID, noteID: $noteID) {
			deleted
		}
	}
`;



export { stackQuery, noteQuery, newStackMutation, newNoteMutation,  deleteStackMutation, };
