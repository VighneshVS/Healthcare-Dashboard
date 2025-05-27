import React from 'react'
import '../../styles/dashboardComponents/AppointmentCards.css'

function AppointmentCards({appointment}) {
  return (
    <div className='appointmentCards'>
        {
            appointment.map((details, index) => {
                return (
                    <div className='currAppointments' id={details.department} key={index}>
                        <div className='deptAndImg'>
                            <div className="department">{details.department}</div>
                            <img className="app-images" src={details.icon} />
                        </div>
                        <div className='timeAndDoc'>
                            <div className="app-time">{details.time}</div>
                            { details.doctor && <div className='doctor'>{details.doctor}</div> } 
                        </div>
                    </div>

                )
            })
        }
    </div>
  )
}

export default AppointmentCards