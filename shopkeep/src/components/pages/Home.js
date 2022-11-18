import React from 'react'
import Contact from '../contactsSection/Contact'
import Invoice from '../featureSection/Invoice'
import Footer from '../footerSection/Footer'
import Hero from '../homeSection/Hero'
import Pricing from '../pricingSection/Prices'
import Product from '../productSection.js/Product'

import Review2 from '../reviewSection/Review2'
import Services from '../serviceSection/Services'
import Benefits from '../whySection/Benefits'
import './Home.css'
function Home() {
  return (
    <div className='home' id='home' >
      <Hero />  
      <Services />
      <Invoice />
      <Pricing />
      <Product />
      <Benefits /> 
      <Contact />
      <Footer /> 
    </div>
  )
   
}

export default Home