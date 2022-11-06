import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import { NavItems } from './NavItems'
import {GrClose} from "react-icons/gr"
import {GiHamburgerMenu} from "react-icons/gi"
function Navbar() {

  const [clicked, setClicked] = React.useState(false);

  return (
    <div className='navbar__container'>
      <Link to='/'>
        <img className='logo' src='shop-keep-logo.png' alt="logo" />
      </Link>
      <div className='menu-icon' onClick={() => setClicked(!clicked)}>
        {clicked? <GrClose/> :<GiHamburgerMenu/> }
      </div>
      <nav className='nav__container'>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {
            NavItems.map((item, index) => {
              return(
                <li key={index}>
                  <Link className={item.cName}  to={item.url}>
                    {item.title}
                  </Link>
                </li>
              )
            })
          }  
        </ul>
        
      </nav>
    </div>
  )
}

export default Navbar