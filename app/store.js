import { createStore, combineReducers } from 'redux';

import includes from './containers/includes.json';

const reducers = {};

export default createStore(combineReducers(
	Object
	.keys(includes)
	.filter( name => includes[name])
	.reduce((reducers, name) => {
		reducers[name] = require(`./containers/${name}/reducers.js`).default;
		return reducers;
	}, reducers)
));