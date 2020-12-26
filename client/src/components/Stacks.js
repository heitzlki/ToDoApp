import { useQuery } from '@apollo/client'
import { stacksQuery } from '../queries/queries'
import { Link } from 'react-router-dom'

export default function Stack() {
  const { loading, error, data } = useQuery(stacksQuery)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <div className="stacks">
      {data.stacks.map((stack) => {
        return (
          <div className="stack">
            <div className="stack-head">
              <div className="stack-dot">
                <svg height="24" width="24">
                  <circle
                    cx="13"
                    cy="13"
                    r="10"
                    stroke="#d6ebf6ff"
                    stroke-width="0"
                    fill={stack.dotColor}
                  />
                </svg>
              </div>
              <Link
                to={`/${stack.stackID}`}
                className="stack-title"
                key={stack.stackID}
              >
                {stack.title}
              </Link>
              <div className="stack-edit">
                <></>
              </div>
            </div>
            <div className="stack-body">
              {stack.notes.map((note) => {
                return (
                  <p className="stack-note" key={note.noteID}>
                    • {note.title}
                  </p>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
