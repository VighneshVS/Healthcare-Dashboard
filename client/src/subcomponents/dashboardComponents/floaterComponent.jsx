import "../../styles/dashboardComponents/floaterComponent.css"

function floaterComponent({id, icon, details}) {
  return (
    <div id={id} className='floatContainer'>
        <img className='float-image' src={icon} />
        <span className='float-details'>{details}</span>
    </div>
  )
}

export default floaterComponent