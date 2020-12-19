import { useLazyQuery } from '@apollo/client';
import { stackQuery } from '../queries/queries';

export default function Home() {
	const [getData, { loading, error, data }] = useLazyQuery(stackQuery);

	const runQuery = () => {
		getData();
		for (var i = 0; i < Object.keys(data.stacks).length; i += 1) {
			console.log(data.stacks[i].title);
			for (var x = 0; x < Object.keys(data.stacks[i].notes).length; x += 1) {
				console.log(data.stacks[i].notes[x].title);
			};
		};
	}
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

	return (
		<div className="App">
			<p>Home</p>
				<button onClick={runQuery}>getData</button>
		</div>
	);	
};
