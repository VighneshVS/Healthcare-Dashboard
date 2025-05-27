import React from 'react'
import dayData from '../../data/dayData'
import "../../styles/dashboardComponents/DayContainer.css"

function DayContainer() {
  return (
    <div className="weekContainer">
       { dayData.map(day => {
            return(
                <div className='dayContainer' id={day.day}>
                    <div className='day' key={day.day}>{day.day}</div>
                    <div className="date" key={day.date}>{day.date}</div>
                    <div className="time" key={day.time1} id={`${day.day}andtime1`}>{day.time1}</div>
                    <div className="time" key={day.time2} id={`${day.day}andtime2`}>{day.time2}</div>
                    <div className="time" key={day.time3} id={`${day.day}andtime3`}>{day.time3}</div>
                </div>
            )
        })}
    </div>
  )
}

export default DayContainer