import React from 'react';
import call_pic from '../../../assets/call_pic.jpg';
import pr_1 from "../../../assets/pr_1.png";
import pr_3 from "../../../assets/pr_3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Thumbs } from 'swiper/modules'; // Import Swiper modules
import VideoPreview from '../../../Components/VideoPreview'; // Assuming this component is already created
import house_tour from '../../../assets/house_tour.mp4';


const Details = () => {
  const images = [call_pic, pr_1, pr_3]; // Images array for carousel
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <div className="w-full bg-red-100 px-8">
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
            <img src={img} alt={`Property ${index + 1}`} className="w-full h-96 object-cover rounded-3xl" />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <VideoPreview videoSrc={house_tour} />
        </SwiperSlide>
      </Swiper>

      {/* Thumbnails Carousel */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true} // Allows free-scrolling
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
          {/* Video thumbnail */}
          <div className="w-full h-20 bg-black rounded-xl overflow-hidden">
            <VideoPreview videoSrc={house_tour} className="h-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Details;
