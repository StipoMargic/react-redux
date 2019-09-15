import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';

export default class App extends Component {
	render() {
		return (
			<div className="ui container">
				<BrowserRouter>
					<Header />
					<Route path="/" exact component={StreamList}></Route>
					<Route path="/streams/new" exact component={StreamCreate}></Route>
					<Route path="/streams/delete" exact component={StreamDelete}></Route>
					<Route path="/streams/show" exact component={StreamShow}></Route>
					<Route path="/streams/edit" exact component={StreamEdit}></Route>
				</BrowserRouter>
			</div>
		);
	}
}
