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

import PopularItem from "./PopularItem";

const PopularItems = ({product}) => {


  return (
    <div className={styles.popular}>
        <div className="container">

          <h1>Популярне в каталозі</h1>

            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}

            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}

            modules={[FreeMode, Pagination]}

            

            className="mySwiper"
        >

            {product.map((el) => (
              <SwiperSlide key={el.id}><PopularItem key={el.id} item={el}/></SwiperSlide>
            ))}
            
            
        </Swiper>
        </div>
      
    </div>
  )
}

export default PopularItems