import React from 'react'
import './BackDrop.css'

export const BackDrop = (props) => {
	return (<div className="backDrop" onClick={() => props.setOpenDrawer(false)}> </div>)
}
