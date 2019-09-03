import { combineReducers } from 'redux';

export const videosReducer = () => {
	return [
		{ title: ' The Shawshank Redemption', rating: 9.2 },
		{ title: ' The Godfather ', rating: 9.1 },
		{ title: ' The Godfather: Part II', rating: 9 },
		{ title: ' The Dark Knight ', rating: 9 },
		{ title: ' 12 Angry Men ', rating: 8.9 },
	];
};

export const selectedVideoReducer = (selectedVideo = null, action) => {
	if (action.type === 'SELECTED_VIDEO') {
		return action.payload;
	}

	return selectedVideo;
};

export default combineReducers({
	videos: videosReducer,
	selectedVideo: selectedVideoReducer,
});
