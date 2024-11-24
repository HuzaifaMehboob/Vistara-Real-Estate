import React from 'react'
import Description from '../../Components/Description'
import Logos from '../../Components/Logos'
import Services from '../../Components/Services'
import Testimonials from '../../Components/Testimonals'
import PropertyGrid from '../../Components/PropertySection'
import Insights from '../../Components/Insights'
import HeroSection from '../../Components/HeroSection'
import TrustedBy from '../../Components/TrustedBy'
import ContactForm from '../../Components/ContactForm'
import FAQ from '../../Components/FAQ'
import Footer from '../../Components/Footer'
const Home = () => {
  return (
    <>
        <HeroSection page={"Home"}/>
        <TrustedBy/>
        <Description/>
        <Services/>
        <PropertyGrid/>
        <Testimonials/>
        <Insights/>
        <ContactForm/>
        <FAQ/>
        <Footer/>
    </>
  )
}

export default Home