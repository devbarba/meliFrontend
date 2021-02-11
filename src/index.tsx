import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/main.css';
import Home from './pages/Home/Home';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root'),
);
