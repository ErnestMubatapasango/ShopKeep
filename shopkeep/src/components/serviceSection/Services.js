import React from 'react'
import { ServiceItems } from './ServiceItems'
import './Services.css'

function Services() {
  return (
    <div className='services' id='services'>
      {
        ServiceItems.map((item, index) => {
          return(
            <div key={index} className='service__wrapper'>
              <h2 className='services-title'>{item.title}</h2>
              <img className='services-image' src={item.image_url} alt='service'/>
              <p className='services-description'>{item.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Services