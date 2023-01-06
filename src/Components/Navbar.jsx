import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import '../App.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        {/* <div className="logo">
          <Brand />
        </div> */}
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/favourites">Favourite</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Logout</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar