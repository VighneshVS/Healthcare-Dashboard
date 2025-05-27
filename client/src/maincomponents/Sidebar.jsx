import React from 'react'
import NavigationLinks from '../subcomponents/sidebarComponents/navigationLinks'
import { generalLinks, toolLink, settingLink } from '../data/sidebarData'
import "../styles/Sidebar.css"
import Logo from '../subcomponents/sidebarComponents/Logo'

function Sidebar() {
  return (
    <div className='sidebar'>
        <Logo />
        <div className="sidebar--general">
            <span>General</span>
            {generalLinks.map((navLink, index) => {
                return(
                    <div className='general--nav'>
                        <NavigationLinks key={index} id={navLink.id} icon={navLink.icon} linkName={navLink.link} />
                    </div>
                )
            })}
        </div>
        <div className="sidebar--tools">
            <span>Tools</span>
            {toolLink.map((navLink, index) => {
                return(
                    <div className='tools--nav'>
                        <NavigationLinks key={index} id={navLink.id} icon={navLink.icon} linkName={navLink.link} />
                    </div>
                )
            })}
        </div>
        <div className="sidebar--settings">
            {settingLink.map((navLink, index) => {
                return(
                    <div className='setting--nav'>
                        <NavigationLinks key={index} id={navLink.id} icon={navLink.icon} linkName={navLink.link} />
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Sidebar