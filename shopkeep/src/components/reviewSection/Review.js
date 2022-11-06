import React from 'react'
import "./Review.css"
function Review() {
  return (
    <div className='review__container'>
      <circle>
      <img  className="reviewee-image" src="tawanda.png"  alt=""/>
      </circle>
      <div className='reviewee'>
        <div className='review__wrapper'>
          <img className='stars' src='star-image.png' alt=''/>
          <p>I’ve been using Shopkeep since 2014. It does everything you<br/> need and nothing you don’t. I wouldn’t consider any other<br/> invoicing software.</p>
        </div>
        <h2>Tawanda Mubatapasango</h2>
        <p className='reviewee__title'>CEO at DeveloMack</p>
      </div>
    </div>
  )
}

export default Review
