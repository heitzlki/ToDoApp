import { gql, useQuery } from '@apollo/client';
import { stackQuery } from '../queries/queries';

export default function Home() {
	const { loading, error, data } = useQuery(stackQuery);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

	return (
		<div className="App">
			<p>Home</p>
				{
					data.stacks.map(stack => (
						<li>
							{stack.title}
						</li>
					))
				}
		</div>
	);	
};
