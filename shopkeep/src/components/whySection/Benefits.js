import React from 'react'
import { BenefitItems } from './BenefitItems'
import './Benefits.css'

function Benefits() {
  return (
    <div className='benefits__container'>
      <h2 className='benefits-title'>Why choose Shopkeep<br/>
          for online business management?
      </h2>
      <div className='benefits__wrapper'>
        {
          BenefitItems.map((benefit, index) =>{
            return(
              <div className='benefit__wrapper' key={index}>
                <h2 className='benefit-title'>
                  {benefit.title}
                </h2>
                <p className='benefit-description'>{benefit.description}</p>

              </div>
            )
          })
        }
      </div>
      
      <div className='call__container'>
        <h2 className='call-title'>Start loving business management - with Shopkeep</h2>
        <div className='call__wrapper '>
            <input type="text" placeholder='Email Address' className='input-content'/>
            <button>GET IN TOUCH</button>
        </div>
        
          <p>Try the system out for a 7 week completely <span className='call-span'>FREE</span></p>
      </div>
    </div>

   
  )
}

export default Benefits