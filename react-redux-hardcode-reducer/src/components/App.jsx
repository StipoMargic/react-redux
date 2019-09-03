import React from 'react';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
export default function App() {
	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col">
					<VideoList />
				</div>
				<div className="col">
					<VideoDetails />
				</div>
			</div>
		</div>
	);
}
