import React, { useContext } from 'react'
import Logotype from '../../shared/images/logotype.svg'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'
import './NavigationBar.css'

export const NavigationBar = () => {
	const history = useHistory()
	const [authenticatedUser,] = useContext(UserContext)

	return (
		<div className="navigationBarWrapper">

			<img
				onClick={() => history.push(RoutingPath.HomeView)}
				className="logotype"
				src={Logotype}
				alt={'Error...'} />

			<span
				className="signIn"
				onClick={() => history.push(RoutingPath.SignInView)}>Sign in
			</span>

			<span>{authenticatedUser}</span>

		</div>
	)
}
