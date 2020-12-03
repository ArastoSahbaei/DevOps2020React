import React from 'react'
import './NavigationBar.css'
import { MobileNavigation } from '../mobilenavigation/MobileNavigation'
import { DesktopNavigation } from '../desktopnavigation/DesktopNavigation'
import { useWindowDemenstions } from '../../hooks/useWindowDemenstions'

export const NavigationBar = () => {
	const { width } = useWindowDemenstions()


	const displayNavigationBarDependingOnWindowSizeWidth = () => {
		return (width >= 1000) ? <DesktopNavigation /> : <MobileNavigation />
	}

	return (
		<div className="navigationBarWrapper">
			<h1>Logotype</h1>
			{displayNavigationBarDependingOnWindowSizeWidth()}
		</div>
	)
}
