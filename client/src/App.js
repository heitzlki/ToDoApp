import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Main from './components/Main'
import './index.scss'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000',
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  )
}
