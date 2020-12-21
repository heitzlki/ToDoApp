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
						<div className="stacl-head">
							<div className="stack-dot">
								<svg height="24" width="24">
									<circle cx="13" cy="13" r="10" stroke="#d6ebf6ff" stroke-width="0" fill={stack.dotColor} />
								</svg> 
							</div>
							<p
								className="stack-title"
								key={stack.stackID} 
								onClick={() => window.alert(stack.title)}
								>
									{stack.title}
							</p>
							<div className="stack-edit">
								<></>
							</div>
						</div>
						<div className="stack-body">
							{stack.notes.map((note) => {
								return (
									<p
										className="stack-note"
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
