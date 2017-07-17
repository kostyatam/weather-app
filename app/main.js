import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import store from './store';
import containers from 'containers';

import css from './style.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const { Root, City, Search } = containers;

render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Root}/>
				<Route path="/list" component={Search}/>
				<Route path="/weather/:id" component={City}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function(reg) {
    // регистрация сработала
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // регистрация прошла неудачно
    console.log('Registration failed with ' + error);
  });
};



