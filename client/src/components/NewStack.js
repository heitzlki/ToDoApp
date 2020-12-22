import { useMutation } from "@apollo/client";
import { newStackMutation } from "../queries/queries";
import { useState } from "react";

export default function NewStack() {
  const [stack, setStack] = useState({
    dotColor: "",
    title: "",
  });
  const [newStack, { loading, error, data }] = useMutation(newStackMutation, {
    onCompleted(data) {
      //Should reload notes
      return null;
    },
    onError(err) {
      try {
        //Sould return error Notfitication
        return null;
        //setErrors("")
        //setErrors(err.graphQLErrors[0].extensions.errors);
      } catch {
        console.log(err);
      }
    },
  });

  const handleNewStackSubmit = (e) => {
    e.preventDefault();
    console.log(stack);
    //Send Mutation
  };

  const handleDotChange = (e) => {
    setStack({
      dotColor: e.target.value,
      title: stack.title,
    });
  };

  const handleTitleChange = (e) => {
    setStack({
      dotColor: stack.dotColor,
      title: e.target.value,
    });
  };

  return (
    <div className="new-stack">
      <p className="new-stack-title">Neuer Stapel:</p>
      <form onSubmit={handleNewStackSubmit}>
        <div className="new-stack-form">
          <input
            value={stack.title}
            onChange={handleTitleChange}
            maxlength="25"
            type="text"
            placeholder="Stapelname"
            className="new-stack-title-input"
          />
          <button type="submit" className="new-stack-button">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
            >
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
/*


        <div className="dotColorRadio red">
          <input
            type="radio" 
            value="red"
            className="dotColorRadioButton"
            checked={setStack.dotColor === 'red'} 
            onChange={handleDotChange} 
          />
          <span class="checkmark"></span>
        </div>

*/
