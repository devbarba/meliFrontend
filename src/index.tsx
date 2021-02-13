import './assets/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home/Home';
import Result from './pages/Result/Result';
import Item from './pages/Item/Item';

ReactDOM.render(
	<RecoilRoot>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="/items" exact={true} component={Result} />
				<Route path="/items/:id" exact={true} component={Item} />
			</Switch>
		</BrowserRouter>
	</RecoilRoot>,
	document.getElementById('root'),
);
