import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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
), applyMiddleware(thunk));