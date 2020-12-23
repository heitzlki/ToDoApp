const chalk = require("chalk");
require("isomorphic-fetch");

const green = "#00ffccff";
const red = "#ff0066ff";
const blue = "#2ad4ffff";
const yellow = "#ffcc00ff";

const newStackData = {
  stacks: [
    {
      title: "Stack1",
      dotColor: green,
    },
    {
      title: "Stack2",
      dotColor: blue,
    },
    {
      title: "Stack3",
      dotColor: red,
    },
    {
      title: "Stack4",
      dotColor: yellow,
    },
    {
      title: "Stack5",
      dotColor: green,
    },
    {
      title: "Stack6",
      dotColor: red,
    },
    {
      title: "Stack7",
      dotColor: blue,
    },
  ],
};

let newNoteData = {
  notes: [
    {
      stackID: "",
      title: "Note1",
      done: false,
    },
    {
      stackID: "",
      title: "Note2",
      done: true,
    },
    {
      stackID: "",
      title: "Note3",
      done: true,
    },
    {
      stackID: "",
      title: "Note4",
      done: false,
    },
    {
      stackID: "",
      title: "Note5",
      done: false,
    },
  ],
};

let StackIDs = { stackids: [] };

const NEW_STACK = `
  mutation($title: String, $dotColor: String) {
    newStack(title: $title, dotColor: $dotColor) {
      stackID
    }
  }
`;
const NEW_NOTE = `
  mutation($title: String, $dotColor: String) {
    newStack(title: $title, dotColor: $dotColor) {
      stackID
    }
  }
`;

const GET_STACKS = `
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
/*
async function NewStack(newStackDataInput) {
  const [newStack, { loading, error, data }] = await useMutation(NEW_STACK);
  newStack(newStackDataInput);
  if (loading) return console.log(`${chalk.red("Something went wrong!")}`);
  if (error)
    return console.log(`${chalk.red("Something went wrong!")}, ${error}`);
  return (StackIDs = { stackids: [...StackIDs, data.newStack.stackID] });
}

  const [newNote, { loading, error, data }] = await useMutation(NEW_STACK);
  const [getStacks, { loading, error, data }] = await useLazyQuery(GET_STACKS);
  //await newStack(newStackData[0]);


console.log(newStackData.stacks[0]);
//newNoteData.notes[0].stackID = "Test";
console.log(newNoteData.notes[0]);
*/
var url = `http://localhost:4000`;
var opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: GET_STACKS }),
};
fetch(url, opts)
  .then((res) => res.json())
  .then((res) => console.log(res.data))
  .then(() => console.log(`${chalk.green("Everything works!")}`));
