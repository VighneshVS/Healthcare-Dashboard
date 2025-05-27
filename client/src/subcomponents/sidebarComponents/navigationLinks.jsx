import React from 'react'
import "../../styles/sidebarComponents/navigationLinks.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function navigationLinks({id, icon, linkName}) {
  return (
    <div className='navLinks'>
        <div className={id}><FontAwesomeIcon icon={icon} /></div>
        <div className={id}>{linkName}</div>
    </div>
  )
}

export default navigationLinks