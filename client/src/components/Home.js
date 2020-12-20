import { useQuery } from '@apollo/client';
import { stackQuery } from '../queries/queries';

export default function Home() {

	const { loading, error, data } = useQuery(stackQuery);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
	return (
		<div className="App">
			<p>Home</p>
				{
					data.stacks.map((stack) => {
						return (
							<div>
								<li key={stack.stackID}>{stack.title}</li>
								{stack.notes.map((note) => {
									return (
										<li key={note.noteID}>{note.title}</li>
									);
								})}
							</div>
						)
					})
				}
		</div>
	);	
};
