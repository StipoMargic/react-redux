import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId: process.env.REACT_APP_CLIENT_ID,
					scope: 'email',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}
	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	isSignedIn = () => {
		if (this.props.isSignedIn == null) {
			return;
		}

		if (this.props.isSignedIn) {
			return (
				<button onClick={this.auth.signOut} className="ui red google button">
					<i className="google icon" />
					Sign Out
				</button>
			);
		}

		if (!this.props.isSignedIn) {
			return (
				<button onClick={this.auth.signIn} className="ui red google button">
					<i className="google icon" />
					Sign In
				</button>
			);
		}
	};
	render() {
		return <div>{this.isSignedIn()}</div>;
	}
}

const mapsStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
	mapsStateToProps,
	{ signIn, signOut },
)(GoogleAuth);
