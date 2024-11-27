import React from 'react';
import call_pic from '../../assets/call_pic.jpg';
import pr_1 from "../../assets/pr_1.png";
import pr_3 from "../../assets/pr_3.png";
import person1 from '../../assets/person1.jpg'
import person2 from '../../assets/person2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Thumbs } from 'swiper/modules'; // Import Swiper modules
import VideoPreview from '../../Components/VideoPreview'; // Assuming this component is already created
import house_tour from '../../assets/house_tour.mp4';
import { FaLocationDot } from "react-icons/fa6";
import HeroSection from '../../Components/HeroSection'
import SimilarProperties from './SimilarProperies';
import Footer from '../../Components/Footer'
import RightSection from './RightSection';
import PropertyDescription from './PropertyDescription';


const PropertyDetails = () => {

  const images = [call_pic, pr_1, pr_3,call_pic, pr_1, pr_3]; // Array of images for the carousel
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null); // For syncing thumbnails

  return (
    <>

    
      <HeroSection page={"Details"}/>
    <div className="px-8 mt-12 w-full">
      
      {/* Property Title and Location */}
      <div className="mb-6">
        <p className="text-3xl mb-1 font-bold">PH305 Plan in 173 Maverick by the Elevated Companies</p>
        <div className="flex gap-2 items-center text-gray-600 text-sm">
          <FaLocationDot />
          <p className="text-lg">Las Vegas, NY</p>
        </div>
      </div>

      {/* Main Section: Left Carousel and Right Details */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Carousel */}
        <div className="w-full  lg:w-[60%]">
        {/* sticky h-[calc(140vh-32px)] top-4 */}
          {/* Large Carousel */}
          <Swiper
            spaceBetween={10}
            navigation={true} // Adds navigation arrows
            thumbs={{ swiper: thumbsSwiper }} // Connects to thumbnail swiper
            modules={[Navigation, Thumbs]}
            className="main-carousel rounded-3xl"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Property ${index + 1}`} className="w-full h-[400px] object-cover rounded-3xl" />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <VideoPreview videoSrc={house_tour} className="w-full h-[400px] rounded-3xl" />
            </SwiperSlide>
          </Swiper>

          {/* Thumbnails Carousel */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true} // Allows free scrolling
            watchSlidesProgress={true} // Syncs with main carousel
            modules={[Thumbs]}
            className="thumbnail-carousel mt-4"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-20 object-cover rounded-xl cursor-pointer" />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <div className="w-full h-20 bg-black rounded-xl overflow-hidden">
                <VideoPreview videoSrc={house_tour} className="h-full" />
              </div>
            </SwiperSlide>
          </Swiper>
          
          <PropertyDescription/>

          
        </div>

        {/* Right Section: Property Details */}
        <div className="w-full lg:w-[40%] overflow-y-auto">
            <RightSection/>
        </div>
      </div>
    </div>
    <SimilarProperties/>
    <Footer />
    </>
  );
};

export default PropertyDetails;
