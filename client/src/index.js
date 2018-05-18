// index.js
// data layer that handles redux

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

const store = createStore( () => {}, applyMiddleware() );

ReactDOM.render(
	<Provider store={store}><App /></Provider>, 
	document.getElementById('root')
);
