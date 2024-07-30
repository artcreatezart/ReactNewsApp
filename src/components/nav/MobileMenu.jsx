import { Link } from "react-router-dom"
import { X } from "react-bootstrap-icons"

const MobileMenu = ({closeMethod}) => {
  return (
    <>
        <div id='closeNavMenu' onClick={closeMethod}>
            <X />
        </div>
        <ul id='mobileMenu'>
            <li>
                <Link to='/' onClick={closeMethod}>Home</Link>
            </li>
            <li>
                <Link to='/about' onClick={closeMethod}>About</Link>
            </li>
        </ul>
    </>
    
  )
}

export default MobileMenu
