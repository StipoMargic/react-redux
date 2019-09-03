import React from 'react';
import axios from 'axios';
import SearchBar from './Searchbar';
import ImageList from './ImageList';

export default class App extends React.Component {
	state = {
		images: [],
		page: 1,
	};

	onSearchBarSubmit = async searchTerm => {
		const response = await axios.get(`https://api.unsplash.com/search/photos`, {
			params: { query: searchTerm, per_page: 20, page: this.state.page },
			headers: {
				Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API}`,
			},
		});

		this.setState({ images: response.data.results });
	};

	getMoreImages = async searchTerm => {
		const response = await axios.get(`https://api.unsplash.com/search/photos`, {
			params: { query: searchTerm, per_page: 20, page: this.state.page + 1 },
			headers: {
				Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API}`,
			},
		});

		this.setState({
			images: this.state.images.concat(response.data.results),
			page: this.state.page + 1,
		});
	};

	render() {
		let btn;
		if (this.state.images.length > 0)
			btn = <button className="btn" onClick={this.getMoreImages}>More ...</button>;
		return (
			<div className="container">
				<SearchBar onSubmit={this.onSearchBarSubmit} />
				<ImageList images={this.state.images} />
				{btn}
			</div>
		);
	}
}
