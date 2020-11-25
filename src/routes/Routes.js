import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { SettingsView } from '../views/SettingsView'
import { SignInView } from '../views/SignInView'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import BrowserCache from '../shared/utils/BrowserCache'
import { PageNotFoundView } from '../views/PageNotFoundView'

export const Routes = (props) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const blockRouteIfNotAuthenticated = (navigateToView) => {
		return authenticatedUser ? navigateToView : SignInView
	}

	const checkIfUserIsAuthenticatedInBrowser = () => {
		setAuthenticatedUser(localStorage.getItem(BrowserCache.username))
	}

	useEffect(() => {
		checkIfUserIsAuthenticatedInBrowser()
	}, [])

	return (
		<Router>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.SignInView} component={SignInView} />
				<Route exact path={RoutingPath.PageNotFoundView} component={PageNotFoundView} />
				<Route exact path={RoutingPath.SettingsView} component={blockRouteIfNotAuthenticated(SettingsView)} />
				<Route component={HomeView} />
			</Switch>
		</Router>
	)
}