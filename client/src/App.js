import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
//import { Provider } from 'react-redux'

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'http://localhost:4000'
});

//Components 
const Home = lazy(() => import('./components/Home'));
const NotFound = lazy(() => import('./components/NotFound'));

export default function App() {
  return (
		<ApolloProvider client={client}>
			<div className="App">
					<Router>
						<Suspense fallback={<div>Loading...</div>}>
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route component={NotFound}/>
							</Switch>
					</Suspense>
				</Router>
			</div>
		</ApolloProvider>
  );
};