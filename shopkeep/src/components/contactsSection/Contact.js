import React from 'react'
import "./Contact.css"

function Contact() {

  return (
    <div className='contact__container'>
      <div className='call__container' id='contact'>
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

export default Contact