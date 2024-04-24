import React from 'react'
import Navbar from './navbar/page'
import Home from './home/page'
import Services from './services/page'
import About from './about/page'
import Portfolio from './portfolio/page'
import Pricing from './pricing/page'
import Contact from './contact/page'
import Testimonial from './testimonial/page'
import Footer from './footer/page'

function page() {
  return (
    <div>
      <Navbar/>
      <section id='home'>
        <Home/>
      </section>
      <section id='services'>
        <Services/> 
      </section>
     <section id='about'>
       <About/>
     </section>
      <section id='portfolio'>
       <Portfolio/>
      </section>
      <section id='pricing'>
        <Pricing/>
      </section>
      <section id='testimonial'>
      <Testimonial/>
     </section>
     <section id='contact'>
       <Contact/>
     </section>

     <section id='footer'>
       <Footer/>
     </section>
    </div>
  )
}

export default page
