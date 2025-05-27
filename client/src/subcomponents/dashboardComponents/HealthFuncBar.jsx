import React from 'react'
import '../../styles/dashboardComponents/HealthFuncBar.css'

function HealthFuncBar({color}) {
  return (
    <div className='bg-bar'>
        <div className="inner-bar" style={{backgroundColor: color}} ></div>
    </div>
  )
}

export default HealthFuncBar