import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { SignInView } from '../views/SignInView'
import RoutingPath from './RoutingPath'

export const Routes = (props) => {
	return (
		<Router>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.SignInView} component={SignInView} />
				<Route component={HomeView} />
			</Switch>
		</Router>
	)
}