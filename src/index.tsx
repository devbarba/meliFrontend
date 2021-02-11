import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/main.css';
import Hello from './components/Hello';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Hello} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root'),
);
