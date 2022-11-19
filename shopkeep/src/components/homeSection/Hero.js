import React from 'react'
import  './Hero.css'

function Hero() {


  return (
    <div className='hero__container' id='#'>
      <div className="tag__wrapper">
        <h1 className='tag__title'>Easy and reliable online<br/> 
          <span className='tag'>
            Point of Sale System
          </span>
        </h1>
        <h3 className='tag__description'>Join over <strong>10+</strong> business owners protecting their<br/> hard earned possessions with #1 rated ShopKeep</h3>
        <div className='call__wrapper'>
          <input type="text" placeholder='Email Address' className='input-content'/>
          <button>GET IN TOUCH</button>
        </div>
        <p className='call-description'>Try the system out for a 7 week completely <span>FREE</span></p>
      </div>
      <img className='tag__image' src='dashboard.png' alt='hero' />
    </div>
  )
}

export default Hero