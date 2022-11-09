import React from 'react'
import { PriceItems, StandardItems, AdvancedItems } from './PriceItems'
import {TiTick} from 'react-icons/ti'
import './Prices.css'

function Prices() {

  return (
    <div className='pricing__container' id='pricing'>
      <h1 className='pricing__title'>Here's how pricing works </h1>
      <p className='pricing__description'>Your monthly price is a combination of your<br/> Shopkeep plan and POS subcription.<br/> Find the right fit for your business.</p>
      <div className='prices__wrapper'> 
        <div className='price__package'>
          <h3>Shopkeep POS Lite</h3>
          <p>Includes all Shopkeep Plans</p>
          <hr />
          <div className='price-content'>
            <p ><strong>What you will get with POS Lite</strong></p>
            <div className='package'>
              {
                PriceItems.map((item, index) => {
                  return(
                    <div className='content' key={index}>
                      <TiTick/>
                      <p>{item.title}</p>
                    </div>
                  )
                })
              }
            </div>
            <h1 className='package-amount'>USD<span>$400</span>/month</h1>
          </div>
        </div>

        <div className='price__package'>
          <h3>Shopkeep POS Standard</h3>
          <p>Includes all Shopkeep Plans</p>
          <hr />
          <div className='price-content'>
            <p ><strong>What you will get with POS Standard</strong></p>
            <div className='package'>
              {
                StandardItems.map((item, index) => {
                  return(
                    <div className='content' key={index}>
                      <TiTick/>
                      <p>{item.title}</p>
                    </div>
                  )
                })
              }
            </div>
            <h1 className='package-amount'>USD<span>$800</span>/month</h1>
          </div>
        </div>

        <div className='price__package'>
          <h3>Shopkeep POS Advanced</h3>
          <p>Includes all Shopkeep Plans</p>
          <hr />
          <div className='price-content'>
            <p ><strong>What you will get with POS Advanced</strong></p>
            <div className='package'>
              {
                AdvancedItems.map((item, index) => {
                  return(
                    <div className='content' key={index}>
                      <TiTick/>
                      <p>{item.title}</p>
                    </div>
                  )
                })
              }
            </div>
            <h1 className='package-amount'>USD<span>$1200</span>/month</h1>
          </div>
        </div>
      </div>
      
    </div>
  )}       
   
   

export default Prices