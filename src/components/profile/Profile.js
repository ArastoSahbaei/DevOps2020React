import React, { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'

export const Profile = () => {
	const [authenticatedUser,] = useContext(UserContext)

	return (
		<div className="signIn">
			<img
				src={'https://thispersondoesnotexist.com/image'}
				alt={'Error...'}
				style={{ width: 35 }} />
			<span>{authenticatedUser}</span>
		</div>
	)
}
