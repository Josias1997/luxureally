import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';

const Routes = props => {
	return (
		<Switch>
			<Route path={"/"} exact component={HomePage} />
		</Switch>
	)
};

export default Routes;