import { connect } from 'react-redux';
import React from 'react';

const VideoDetails = ({ video }) => {
	if (!video) {
		return <div>Select movie for more details...</div>;
  }
  
  return <div>
    <p>Title:  {video.title}</p>
    <p>Rating: {video.vote_average}</p>
  </div>
};

const mapStateToProps = state => {
	return { video: state.selectedVideo };
};

export default connect(mapStateToProps)(VideoDetails);
