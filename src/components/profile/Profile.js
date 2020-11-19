import React, { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import './Profile.css'
import RoutingPath from '../../routes/RoutingPath'

export const Profile = () => {
	const history = useHistory()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const logout = () => {
		setAuthenticatedUser()
		history.push(RoutingPath.HomeView)
	}

	return (
		<div className="signIn">
			<img className="profileImg"
				src={'https://thispersondoesnotexist.com/image'}
				alt={'Error...'}
				style={{ width: 35 }} />
			<span>{authenticatedUser}</span>
			<div className="profileDropDown">
				<span onClick={() => history.push(RoutingPath.SettingsView)}>Settings</span>
				<span onClick={() => logout()}>Logout</span>
			</div>
		</div>
	)
}
