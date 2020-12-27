import { useMutation } from '@apollo/client'
import { newNoteMutation } from '../queries/queries'
import { useState } from 'react'

import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css'

export default function NewNote(data) {
  const [variables, setVariables] = useState({
    stackID: data.data,
    title: '',
  })
  const [newNote] = useMutation(newNoteMutation, {
    onCompleted(data) {
      window.location.reload() //If mutation was successful reload page
    },
    onError(err) {
      try {
        let error = err.graphQLErrors[0].extensions.errors.error
        store.addNotification({
          title: 'Fehler',
          message: error,
          type: 'danger',
          container: 'top-left',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 3000,
          },
        })
      } catch {
        window.alert('Something went wrong!')
        setTimeout(window.location.reload(), 3000)
      }
    },
  })
  const handleNewNoteSubmit = (e) => {
    e.preventDefault()
    console.log(variables)
    newNote({ variables })
  }

  const handleTitleChange = (e) => {
    setVariables({
      stackID: data.data,
      title: e.target.value,
    })
  }

  return (
    <div className="new-stack">
      <p className="new-stack-title">Neue Notiz:</p>
      <form onSubmit={handleNewNoteSubmit}>
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
