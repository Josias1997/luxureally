import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import CheckoutPage from '../Pages/CheckoutPage/CheckoutPage';
import StatusPage from '../Pages/StatusPage/StatusPage';

const Routes = props => {
	return (
		<Switch>
			<Route path={"/"} exact component={HomePage} />
			<Route path={"/checkout"} component={CheckoutPage} />
			<Route path={"/order-status"} component={StatusPage} />
		</Switch>
	)
};

export default Routes;