import React from 'react'
import { ReviewItems } from './ReviewItems'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Review2.css'

function Review2() {

  const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='review__container'>
   
        <h2> Single Item</h2>
        <Slider {...settings}>
            <div className='reviews'>
            {
              ReviewItems.map((item, index) => {
                return(
                  <div className='review__wrapper'>
                    <circle>
                        <img src={item.user_image_url}/>
                    </circle>
                  </div>
                )
              })
            }
            </div>
            
          
        </Slider>
    </div>
  )
}

export default Review2