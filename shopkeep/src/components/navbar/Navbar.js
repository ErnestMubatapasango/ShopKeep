import React from 'react'
import "./Navbar.css"
import {GrClose} from "react-icons/gr"
import {GiHamburgerMenu} from "react-icons/gi"
function Navbar() {

  const [clicked, setClicked] = React.useState(false);

  return (
    <div className='navbar__container'>
      <a href='#home'>
        <img className='logo' src='shop-keep-logo.png' alt="logo" />
      </a>
      <div className='menu-icon' onClick={() => setClicked(!clicked)}>
        {clicked? <GrClose/> :<GiHamburgerMenu/> }
      </div>
      <nav className='nav__container'>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          
          <li>
            <a className='nav-item active'  href='#home'>
              Home
            </a>
          </li>
          <li>
            <a className='nav-item ' href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className='nav-item ' href='#pricing'>
              Pricing
            </a>
          </li>
          <li>
            <a className='nav-item ' href='#contact'>
              Contact
            </a>
          </li>
          
        </ul>
        
      </nav>
    </div>
  )
}

export default Navbar