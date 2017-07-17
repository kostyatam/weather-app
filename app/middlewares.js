import { applyMiddleware } from 'redux';
import includes from './containers/includes.json';
import thunk from 'redux-thunk';

const middlewares = [
    thunk,
    require('containers/Root/middlewares.js').default
];

export default applyMiddleware(...middlewares);