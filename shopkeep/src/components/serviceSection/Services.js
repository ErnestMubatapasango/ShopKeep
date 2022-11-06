import React from 'react'
import { ServiceItems } from './ServiceItems'
import './Services.css'

function Services() {
  return (
    <div className='services'>
      {
        ServiceItems.map((item, index) => {
          return(
            <div className='service__wrapper'>
              <h2>{item.title}</h2>
              <img className='services-image' src={item.image_url} alt='image'/>
              <p>{item.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Services