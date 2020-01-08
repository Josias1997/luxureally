import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Orders from '../UI/Orders/Orders';
import AdminPage from '../Pages/AdminPage/AdminPage';

const Routes = props => {
	return (
		<Switch>
			<Route exact path={"/"} component={HomePage} />
			<Route path={"/orders"} component={Orders} />
			<Route path={"/admin"} component={AdminPage} />
		</Switch>
	)
};

export default Routes;