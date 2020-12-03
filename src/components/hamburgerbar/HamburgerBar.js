import React from 'react'
import './HamburgerBar.css'

export const HamburgerBar = (props) => {
	return (
		<button className="toggle-button" onClick={() => props.setOpenDrawer(true)}>
			<div className="toggle-button__line" />
			<div className="toggle-button__line" />
			<div className="toggle-button__line" />
		</button>
	)
}
