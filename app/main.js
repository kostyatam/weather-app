import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import store from './store';
import { Root } from 'containers';

render(
	<Provider store={store}>
		<Root/>
	</Provider>,
	document.getElementById('app'));



