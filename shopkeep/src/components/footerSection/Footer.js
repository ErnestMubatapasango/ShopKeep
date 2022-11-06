import React from 'react'
import {Link} from "react-router-dom"
import { FooterItems } from './FooterItems'
import './Footer.css'
function Footer() {
  return (
  
      <footer className='footer__container'>
        <div className='footer__row'>
          <div className='footer__col'>
            <img className='footer-logo' src='shop-keep-logo.png' alt=''/>
            <p className='footer-logo-tag'>
              A complete online business management <br/> platform for invoicing, billing, reports<br/> and more to help you grow.
            </p>
          </div>

          <div className='footer-col'>
            <h3 className='footer-content-title'>Product</h3>
            <ul>
             {
                FooterItems.map((item, index) => {
                  return(
                    <li key={index}>
                      <Link to='/' className={item.cName}>
                        {item.title}
                      </Link>
                    </li>
                  )
                })
             }
            </ul>
          </div>

          <div className='footer-col'>
            <h3 className='footer-content-title'>Company</h3>
            <ul>
              <li> 
                <Link className='footer-link' to='/contact'>
                  Contact
                </Link>
              </li>
              <li>
                <Link className='footer-link' to='/about'>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className='footer-col'>
            <h3 className='footer-content-title'>Our Office</h3>
            <p className='footer-address'>14620 Uxamu Road<br/> Selborne Park<br/> Bulawayo</p>
          </div>
        </div>
      </footer>
  
  )
}

export default Footer