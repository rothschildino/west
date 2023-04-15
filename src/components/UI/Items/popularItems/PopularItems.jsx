import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import styles from './popularItem.module.css'


// import required modules
import { FreeMode, Pagination } from "swiper";

import Item from "../Item/Item";


const PopularItems = ({product}) => {
  return (
    <div className={styles.popular}>
        <div className="container">

          <h1>Популярне в каталозі</h1>

            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
            clickable: true,
            }}

            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}

            modules={[FreeMode, Pagination]}

            

            className="mySwiper"
        >
            <SwiperSlide><Item product={product}/></SwiperSlide>
            
            
        </Swiper>
        </div>
      
    </div>
  )
}

export default PopularItems