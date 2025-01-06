import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Gallery = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src= {require("../images/g1.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g2.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g1.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g2.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g1.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g2.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g1.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g2.jpg")} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Gallery;