import React from 'react'
import "./Review.css"
import {ReviewItems} from './ReviewItems'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
/* import {MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew} from "react-icons/md"  */

 function Review() {
    const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 /*  const [ currentReview, setCurrentReview] = React.useState(0);
  const length = ReviewItems.length;

  const nextSlide =() => {
    setCurrentReview(currentReview === length -1 ? 0 : currentReview + 1)
  }

  const prevSlide = () => {
    setCurrentReview(currentReview === 0 ? length -1 : currentReview -1 )
  } */
  return (
    
      <div className='review__container'>
       {/*  <MdOutlineArrowBackIosNew className='left-arrow' onClick={prevSlide}/>
        <MdOutlineArrowForwardIos className='right-arrow' onClick={nextSlide}/> */}
        <div {...settings}>
          {
            ReviewItems.map((item, index) => {
              return(
                
                  <div key={index}  className='slider'/* {index === currentReview ? 'slider active' : 'slider'} */ >

                      <div className='review__wrapper'>
                        <h1>{item.description}</h1>
                        {/* <circle>
                          <img  className="review-image" src={item.user_image_url}  alt=""/>
                        </circle> */}
                       {/*  <div className='ratings'>
                          <div className='rating__wrapper'>
                            <img className='stars' src={item.star_image} alt=''/>
                            <p className='rating-description'>{item.description}</p>
                          </div>
                          <h2 className='rating__title'>{item.username}</h2>
                          <p className='rating__job-title'>{item.user_title}</p>
                        </div> */}
                      </div>  
                  </div>
              )})
          }
        </div>
      </div>
  )
}

export default Review
 