import { combineReducers } from 'redux';

export const videosReducer = (state = [], action) => {
	if (action.type === 'FETCH_VIDEOS') {
		return action.payload;
	}

	return state;
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
