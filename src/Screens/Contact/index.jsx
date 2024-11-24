import React from 'react';
import HeroSection from '../../Components/HeroSection';
import Footer from '../../Components/Footer';
import ContactPage from './ContactPage';
import TrustedBy from '../../Components/TrustedBy';
import CallToActionSection from './ContactPage/CalltoActionSection';

const Contact = () => {
  return (
    <>
      <HeroSection page={"Contact"} />
      <ContactPage />
      <TrustedBy color={"white"}/>
      {/* Position Footer above CallToActionSection */}
      <div className="relative">
        
        <div className="relative z-10 -mb-[25px]">
          <CallToActionSection />
        </div>
        <div className="relative z-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
