import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import Error from './Error';

export default class App extends Component {
	state = {
		lat: null,
		errMsg: '',
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errMsg: err.message }),
		);
	}

	render() {
		if (this.state.errMsg && !this.state.lat) {
			return <Error message={this.state.errMsg} />;
		}

		if (!this.setState.errMsg && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <Loader message="Please allow GeoLocation to see rest of page" />;
	}
}
