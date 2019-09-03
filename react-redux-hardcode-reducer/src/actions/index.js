import axios from 'axios';

export const selectVideo = video => {
	return {
		type: 'SELECTED_VIDEO',
		payload: video,
	};
};

export const fetchVideos = () => async dispatch => {
	const response = await axios.get(
		'https://api.themoviedb.org/3/movie/top_rated?api_key=46b212b6540d842436221f466031d0c7&language=en-US&page=1',
	);

	dispatch({ type: 'FETCH_VIDEOS', payload: response.data.results });
};
