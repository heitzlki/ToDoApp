import NewStack from './NewStack'
import Stacks from './Stacks'

import ReactNotification from 'react-notifications-component'

export default function Home() {
  return (
    <div className="App">
      <ReactNotification />
      <NewStack />
      <div className="grid-box">
        <Stacks />
      </div>
    </div>
  )
}
