import { useMutation } from '@apollo/client'
import { newStackMutation } from '../queries/queries'
import { useState } from 'react'

export default function NewStack() {
  const [variables, setVariables] = useState({
    title: '',
    dotColor: 'red',
  })
  const [newStack] = useMutation(newStackMutation, {
    onCompleted(data) {
      //window.location.reload() //If mutation was successful reload page
    },
    onError(err) {
      console.log(err)
      /*
        try {
            setErrors(err.graphQLErrors[0].extensions.errors.errors);
        } catch {
            console.log(err.graphQLErrors)
        }*/
    },
  })
  const handleNewStackSubmit = (e) => {
    e.preventDefault()
    newStack({ variables })
  }

  const handleDotChange = (e) => {
    setVariables({
      title: variables.title,
      dotColor: e.target.value,
    })
  }

  const handleTitleChange = (e) => {
    setVariables({
      title: e.target.value,
      dotColor: variables.dotColor,
    })
  }

  return (
    <div className="new-stack">
      <p className="new-stack-title">Neuer Stapel:</p>
      <form onSubmit={handleNewStackSubmit}>
        <div className="new-stack-form">
          <input
            value={variables.title}
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
  )
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
