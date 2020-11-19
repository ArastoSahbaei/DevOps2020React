import React, { useContext } from 'react'
import Logotype from '../../shared/images/logotype.svg'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'
import { Profile } from '../profile/Profile'
import './NavigationBar.css'

export const NavigationBar = () => {
	const history = useHistory()
	const [authenticatedUser,] = useContext(UserContext)

	const displayUserIfAuthenticated = () => {
		return authenticatedUser
			? <Profile />
			: <span className="signIn" onClick={() => history.push(RoutingPath.SignInView)}>Sign in</span>
	}

	return (
		<div className="navigationBarWrapper">
			<img
				onClick={() => history.push(RoutingPath.HomeView)}
				className="logotype"
				src={Logotype}
				alt={'Error...'} />
			{displayUserIfAuthenticated()}
		</div>
	)
}
