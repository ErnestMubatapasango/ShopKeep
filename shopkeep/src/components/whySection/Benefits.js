import React from 'react'
import { BenefitItems } from './BenefitItems'
import './Benefits.css'

function Benefits() {
  return (
    <div className='benefits__container' id='benefits'>
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
      
      
    </div>

   
  )
}

export default Benefits