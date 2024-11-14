import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from '../../Components/Hero'
import Description from '../../Components/Description'
import Logos from '../../Components/Logos'
import Services from '../../Components/Services'
import Testimonials from '../../Components/Testimonals'
import PropertyGrid from '../../Components/PropertySection'
import Insights from '../../Components/Insights'
const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Description/>
        <Logos/>
        <Services/>
        <PropertyGrid/>
        <Testimonials/>
        <Insights/>
    </>
  )
}

export default Home