import { useQuery } from '@apollo/client';
import { stackQuery } from '../queries/queries';

export default function Stack() {
	const { loading, error, data } = useQuery(stackQuery);
  if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	return (
		<div className="stacks">
		{
			data.stacks.map((stack) => {
				return (
					<div className="stack">
						<div className="stackHead">
							<div className="stackDot">
								<></>
							</div>
							<p
								className="stackTitle"
								key={stack.stackID} 
								onClick={() => window.alert(stack.title)}
								>
									{stack.title}
							</p>
							<div className="stackEdit">
								<></>
							</div>
						</div>
						<div className="stackBody">
							{stack.notes.map((note) => {
								return (
									<p
										className="stackNote"
										key={note.noteID}
										>
											• {note.title}
									</p>
								);
							})}
						</div>
					</div>
				)
			})
		}
	</div>
	);	
};
