import { useQuery } from '@apollo/client'
import { stackQuery } from '../queries/queries'
//import NewNote from 'NewNote'

export default function Stack({ match }) {
  const {
    params: { stackID },
  } = match
  const { loading, error, data } = useQuery(stackQuery, {
    variables: { stackID },
  })
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <>
      <div className="stack">
        {data.stack.map((stackData) => {
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
                      fill={stackData.dotColor}
                    />
                  </svg>
                </div>
                <p>{stackData.title}</p>
                <div className="stack-edit">
                  <></>
                </div>
              </div>
              <div className="stack-body">
                {stackData.notes.map((note) => {
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
    </>
  )
}
