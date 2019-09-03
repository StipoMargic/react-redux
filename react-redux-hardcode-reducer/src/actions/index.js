export const selectVideo = video => {
	return {
		type: 'SELECTED_VIDEO',
		payload: video,
	};
};
