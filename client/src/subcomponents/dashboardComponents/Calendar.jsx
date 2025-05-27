import React from 'react'
import SubHeading from './subHeading'
import DayContainer from './DayContainer'
import '../../styles/dashboardComponents/Calendar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons'

function Calendar() {
  return (
    <div className='calendarContainer'>
      <div className="calendar-header">
        <label className='monthAndYear'>May 2025</label>
        <div className="header-arrows">
          <FontAwesomeIcon className='left-arrow' icon={faLeftLong} />
          <FontAwesomeIcon className='right-arrow' icon={faRightLong} />
        </div> 
      </div>
        <DayContainer />
    </div>
  )
}

export default Calendar