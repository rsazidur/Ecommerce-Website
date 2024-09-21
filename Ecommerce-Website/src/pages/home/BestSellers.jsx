import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BestSellers = () => {
  return (
    <div className='w-full container mx-auto xl:px-28 px-4 py-28'>
        <div className='text-center'>
            <h2 className='title'>Best Sellers</h2>
            <p className='text-Black/75 capitalize md:w-2/3 mx:auto mb-8'>Best-selling games across PC, Xbox, and PS4 are known for 
            their immersive gameplay and stunning visuals. Each platform offers unique experiences, with PC focusing on customizability, 
            Xbox excelling in action-packed titles, and PS4 featuring strong narratives and exclusives.</p>
        </div>

        {/* Best Sellers Products Cards*/}
        <div className='mb-16'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default BestSellers