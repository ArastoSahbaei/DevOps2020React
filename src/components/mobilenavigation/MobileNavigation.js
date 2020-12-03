import React, { useState } from 'react'
import './MobileNavigation.css'
import { HamburgerBar } from '../hamburgerbar/HamburgerBar'
import { Drawer } from '../drawer/Drawer'
import { BackDrop } from '../backdrop/BackDrop'

export const MobileNavigation = () => {
	const [openDrawer, setOpenDrawer] = useState(false)

	const displaySideMenu = () => {
		return (openDrawer)
			? <div> <Drawer openDrawer={openDrawer} /> <BackDrop setOpenDrawer={setOpenDrawer} /> </div>
			: null
	}

	return (
		<div>
			<HamburgerBar setOpenDrawer={setOpenDrawer} />
			{displaySideMenu()}
		</div>
	)
}
