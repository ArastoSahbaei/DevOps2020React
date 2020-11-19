import React, { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import './Profile.css'
import BrowserCache from '../../shared/utils/BrowserCache'

export const Profile = () => {
	const history = useHistory()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const logout = () => {
		setAuthenticatedUser()
		localStorage.removeItem(BrowserCache.username)
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
