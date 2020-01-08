import React from 'react';
import Switch from 'react-router-dom';
import Route from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';

const Routes = props => {
	return (
		<Switch>
			<Route exact path={"/"} component={HomePage} />
		</Switch>
	)
};

export default Routes;