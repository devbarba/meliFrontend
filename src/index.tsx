import './assets/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home/Home';
import Result from './pages/Result/Result';

ReactDOM.render(
	<RecoilRoot>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="/items" component={Result} />
			</Switch>
		</BrowserRouter>
	</RecoilRoot>,
	document.getElementById('root'),
);
