import React from 'react'
import { ProductItems } from './ProductItems'
import './Product.css'
function Product() {
  return (
    <div className='product__wrapper'>
        {
          ProductItems.map((product, index) => {
            return(
              <div className='product-container' key={index}>
                <img className='product-image' src={product.image_url} alt='product' />
                <h2 className='product-title'>{product.title}</h2>
                <p className='product-description'>{product.description}</p>
              </div>
            )
          })
        }     
    </div>
  )
}

export default Product