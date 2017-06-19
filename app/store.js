import { createStore, combineReducers } from 'redux';

import include from './containers/include.json';

export default createStore(combineReducers(
		Object
		.keys(include)
		.filter( name => include[name])
		.reduce((reducers, name) => {
			reducers[name] = require(`./containers/${name}/reducers.js`).default;
			return reducers;
		}, {})
	))