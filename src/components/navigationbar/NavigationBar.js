import React from 'react'
import Logotype from '../../shared/images/logotype.svg'
import './NavigationBar.css'

export const NavigationBar = () => {
	return (
		<div className="navigationBarWrapper">
			<img
				onClick={() => alert("you clicked on the image")}
				className="logotype"
				src={Logotype}
				alt={"Error..."} />
		</div>
	)
}
