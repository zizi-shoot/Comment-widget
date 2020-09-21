import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Widget from './containers/Widget.jsx';
import comments from './reducers/comment.jsx';

import './css/style.css';

const initialState = () => {
	const state = localStorage.getItem('comments');

	if (state) {
		return JSON.parse(state);
	}

	localStorage.setItem('comments', JSON.stringify([]));
	return [];
};

const store = createStore(
	comments,
	initialState(),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
	localStorage.setItem('comments', JSON.stringify(store.getState()));
});

ReactDOM.render(
	<Provider store={store}>
		<Widget />
	</Provider>,
	document.querySelector('#root'),
);