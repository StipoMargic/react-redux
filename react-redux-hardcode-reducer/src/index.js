import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/style.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combineReducers from './reducers';

ReactDOM.render(
	<Provider
		store={createStore(
			combineReducers,
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__(),
		)}
	>
		<App />
	</Provider>,
	document.getElementById('root'),
);
