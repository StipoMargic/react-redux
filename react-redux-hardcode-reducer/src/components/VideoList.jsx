import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions';

class VideoList extends Component {
	renderVideos = () => {
		return this.props.videos.map(video => {
			return (
				<ul class="list-group ticketView">
					<li class="list-group-item ticketView">
						<span key={video.title} class="badge pull-left">
							{video.rating}
						</span>
						{video.title}
						<button onClick={() => this.props.selectVideo(video)}>
							Select
						</button>
					</li>
				</ul>
			);
		});
	};
	render() {
		return <div>{this.renderVideos()}</div>;
	}
}

const mapStateToProps = state => {
	return { videos: state.videos };
};

export default connect(
	mapStateToProps,
	{ selectVideo },
)(VideoList);
