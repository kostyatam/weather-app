import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import store from './store';
import containers from 'containers';

import css from './style.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const { Root, City } = containers;

render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Root}/>
				<Route path="/:id" component={City}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
);



