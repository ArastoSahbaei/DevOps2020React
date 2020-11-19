import React, { useState, useContext } from 'react'
import { UserContext } from '../shared/provider/UserProvider'

export const SignInView = () => {
	const [username, setUsername] = useState()
	const [, setAuthenticatedUser] = useContext(UserContext)

	const login = (e) => {
		e.preventDefault()
		setAuthenticatedUser(username)
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
