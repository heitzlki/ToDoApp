import NewStack from './NewStack'
import Stacks from './Stacks'
import { Switch, Route } from 'react-router-dom'

export default function Home() {
  return (
    <div className="App">
      <NewStack />
      <div className="grid-box">
        <Stacks />
      </div>
    </div>
  )
}
