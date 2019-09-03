import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo, fetchVideos } from '../actions';

class VideoList extends Component {
	componentDidMount() {
		this.props.fetchVideos();
	}

	renderVideos = () => {
		return this.props.videos.map(video => {
			return (
				<ul key={video.id}  className="list-group ticketView">
					<li className="list-group-item ticketView">
						<span className="badge pull-left">
							{video.vote_average}
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
	{ selectVideo, fetchVideos },
)(VideoList);
