import React from 'react';
import '../css/Error.css';

export default function Error(props) {
	return (
		<div>
			<div id="notfound">
				<div className="notfound">
					<div className="notfound-404">
						<h1>Oops!</h1>
					</div>
					<h2>{props.message}</h2>
				</div>
			</div>
		</div>
	);
}
