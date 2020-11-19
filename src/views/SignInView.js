import React, { useState, useContext } from 'react'
import { UserContext } from '../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

export const SignInView = () => {
	const history = useHistory()
	const [username, setUsername] = useState()
	const [, setAuthenticatedUser] = useContext(UserContext)

	const login = (e) => {
		e.preventDefault()
		setAuthenticatedUser(username)
		localStorage.setItem('username', username)
		history.push(RoutingPath.HomeView)
	}

	return (
		<div>
			<form>
				<span>Username: </span>
				<input onChange={(event) => setUsername(event.target.value)} /> <br />
				<span>Password: </span>
				<input /> <br />
				<button onClick={(e) => login(e)}>Login</button>
			</form>

		</div>
	)
}
