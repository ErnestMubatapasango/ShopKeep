import React from 'react'

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

          <div className='footer__col'>
            <h3 className='footer-content-title'>Product</h3>
            <ul>
             {
                FooterItems.map((item, index) => {
                  return(
                    <li key={index}>
                      <a href='#services'  className={item.cName}>
                        {item.title}
                      </a>
                    </li>
                  )
                })
             }
            </ul>
          </div>

          <div className='footer__col'>
            <h3 className='footer-content-title'>Company</h3>
            <ul>
              <li> 
                <a className='footer-link' href='#contact'>
                  Contact
                </a>
              </li>
              <li>
                <a className='footer-link' href='#about'>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className='footer__col'>
            <h3 className='footer-content-title'>Our Office</h3>
            <p className='footer-address'>14620 Uxamu Road<br/> Selborne Park<br/> Bulawayo</p>
          </div>
        </div>
      </footer>
  
  )
}

export default Footer