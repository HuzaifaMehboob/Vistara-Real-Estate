import React,{useState} from 'react'
import HeroSection from '../../Components/HeroSection'
import Footer from '../../Components/Footer'
import PropertyComp from './Property'
const Properties = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    <HeroSection page={"Properties"}/>
    <PropertyComp  currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}/>
    <Footer/>
    </>
  )
}

export default Properties