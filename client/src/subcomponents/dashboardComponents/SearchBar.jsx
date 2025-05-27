import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import "../../styles/dashboardComponents/SearchBar.css"

function SearchBar() {
  return (
    <div className='searchBox'>
        <div className='searchIcon'><FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass} /></div>
        <input className='textarea' type='text' placeholder='Search'></input>
        <div className='notificationIcon'><FontAwesomeIcon className='searchIcon' icon={faBell} /></div>
    </div>
  )
}

export default SearchBar