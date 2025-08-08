import React from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Slider from './Slider'
import Counter from './Counter'
import Services from './Services'
import Property from './Property'
import OurAnimities from './OurAnimities'
import Testimonial from './Testimonial'
import HeroLuxury from './HeroLuxury'
import AreaProperty from './AreaProperty'
import About from './About'








const Home = () => {
  return (
    <>
    <TopBar/>
    <Navbar/>
   <HeroLuxury/>
    <Counter/>
    <Services/>
    <Property/>
    
    <About/>
    <OurAnimities/>
    <Testimonial/>
    <AreaProperty/>
    

    </>
  )
}

export default Home