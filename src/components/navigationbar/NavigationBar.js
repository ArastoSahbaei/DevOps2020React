import React from 'react'
import Logotype from '../../shared/images/logotype.svg'
import { useHistory } from 'react-router-dom'
import './NavigationBar.css'

export const NavigationBar = () => {
	const history = useHistory()

	return (
		<div className="navigationBarWrapper">
			<img
				onClick={() => alert("you clicked on the image")}
				className="logotype"
				src={Logotype}
				alt={"Error..."} />
			<span className="signIn" onClick={() => history.push('/signin')}>Sign in</span>
		</div>
	)
}
