import SearchBar from '../subcomponents/dashboardComponents/SearchBar'
import SubHeading from '../subcomponents/dashboardComponents/subHeading'
import "../styles/Dashboard.css"
import HealthStatusCards from '../subcomponents/dashboardComponents/HealthStatusCards'
import HealthStatusData from '../data/HealthStatusData'
import dayData from '../data/dayData'
import floaterData from '../data/floaterData'
import FloaterComponent from '../subcomponents/dashboardComponents/floaterComponent'
import Calendar from '../subcomponents/dashboardComponents/Calendar'
import AppointmentCards from '../subcomponents/dashboardComponents/AppointmentCards'
import { currentAppointments, upcomingAppointments, upcomingAppointments2 } from '../data/appointmentData'
import images from '../data/imageData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassPlus, faAngleDown, faArrowRight, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import BarGraph from "../subcomponents/dashboardComponents/barGraph"
import Logo from '../subcomponents/sidebarComponents/Logo'

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className="logo-container">
          <Logo />
        </div>
        <div className='dash-header'>
          <SearchBar className='searchBox'/>
          <div className="profileIcons">
            <img className="proPic" src={images.profile} />
            <FontAwesomeIcon className='addNew' icon={faSquarePlus} />
          </div>
        </div>
        
        <div className="dashboard-main">
          <div className="dashboardPart1">
            <div className="dashboard-header">
              <SubHeading heading={"Dashboard"} />
              <div className='thisWeek'>
                <span>This Week</ span>
                <FontAwesomeIcon className='angleDown' icon={faAngleDown} />
              </div>
            </div>
            <div className="anatomyAndHealthcards">
               {floaterData.map(detail => {
                  return(
                    <FloaterComponent id={detail.id} icon={detail.icon} details={detail.detail} />
                  )
                })}
                <div className='scanner-heart'>
                  <div className="scanner-heart-in"></div>
                </div>
                <div className='scanner-legs'>
                  <div className="scanner-legs-in"></div>
                </div>
              <div className="fullBody">
                <FontAwesomeIcon className="magGlassIcon" icon={faMagnifyingGlassPlus} />
                <img className="fullbodyImg" src={images.fullbody} />
                <div className='scanner'>
                  <div className="scanner-in"></div>
                </div>
                <div className="curved-line"></div>
                <div className="icon-container">
                  <img className='rotate-icon'src={images.rotate} />
                </div>
              </div>
              <div className="cardsAndDetails">
                <div className='healthCards'>
                  {HealthStatusData.map((details) => {
                    return(
                      <HealthStatusCards id={details.id} icon={details.icon} organ={details.organ} date={details.date} color={details.color} />
                    )
                  })}
                </div>
                <div className="health-details">
                  <span>Details</span>
                  <FontAwesomeIcon className='rightArrow' icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
          <div className="calendarArea">
            <Calendar />
            <div className="todaysAppointment">
              <AppointmentCards appointment={currentAppointments} />
            </div>
          </div>
        </div>
        <div className="submainAndUpcoming">
          <div className="dashboard-submain">
            <div className="submain-header">
              <label className='activity'>Activity</label>
              <span className='submain-header-details'>3 appointments on this week</span>
            </div>
            <div className='dashboard-illustration'>
              <div className='illustration'>
                {dayData.map(day => {
                  return (<BarGraph id={day.day} />);
                })}
              </div>
            </div>
          </div>
          <div className="upcoming">
            <SubHeading heading={"The Upcoming Schedule"} />
            <span className='span-thurs'>On Thursday</span>
            <div className="nextdaysAppointment">
              <AppointmentCards appointment={upcomingAppointments} />
            </div>
            <span className='span-sat'>On Saturday</span>
            <div className="nextdaysAppointment">
              <AppointmentCards appointment={upcomingAppointments2} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard