import React from 'react';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
export default function App() {
	return (
		<div class="container">
			<div class="row mt-5">
				<div class="col">
					<VideoList />
				</div>
				<div class="col">
					<VideoDetails />
				</div>
			</div>
		</div>
	);
}
