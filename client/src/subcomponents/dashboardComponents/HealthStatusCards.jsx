import React from 'react'
import SubHeading from '../dashboardComponents/subHeading'
import HealthFuncBar from './HealthFuncBar'
import "../../styles/dashboardComponents/HealthStatusCards.css"

function HealthStatusCards({ icon, organ, date, color}) {
  return (
    <div className='healthStatusCard'>
        <div className='icon-Name'>
            <img className='image' src={icon} />
            <SubHeading heading={organ} />
        </div>
        <span className='healthcard-date'>{date}</span>
        <HealthFuncBar color={color} />
    </div>
  )
}

export default HealthStatusCards