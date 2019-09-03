import React, { Component } from 'react';

export default class Searchbar extends Component {
	state = {
		searchTerm: '',
	};
	onFormSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state.searchTerm);
	};

	onInputChange = e => {
		this.setState({ searchTerm: e.target.value });
	};
	render() {
		return (
			<div className="searchBox">
				<form onSubmit={this.onFormSubmit}>
					<input
						className="searchInput"
						type="text"
						name=""
						placeholder="Search"
						value={this.state.searchTerm}
						onChange={this.onInputChange}
					/>
				</form>
			</div>
		);
	}
}
