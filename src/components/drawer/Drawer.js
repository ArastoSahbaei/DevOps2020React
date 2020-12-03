import React from 'react'
import './Drawer.css'

export const Drawer = (props) => {
	let drawerClasses = 'side-drawer'
	if (props.openDrawer) { drawerClasses = 'side-drawer open' }

	return (
		<nav className={drawerClasses}>
			<ul>
				<li>
					<a href="/">Products</a>
				</li>
				<li>
					<a href="/">Users</a>
				</li>
			</ul>
		</nav>
	)
}
