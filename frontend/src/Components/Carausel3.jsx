import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router";
// import "./swiperStyle.css";
export default function Carausel3() {
  const navigate = useNavigate();
  const arr = [
    "https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png",
    "https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png",
    "https://cdn.plotch.io/image/upload/C/V/1676097252_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png",
    "https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png",
    "https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png",
    "https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png",
  ];
  return (
    <div className="App">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          220: {
            slidesPerView: 1,
          },
          720: {
            slidesPerView: 1,
          },

          1200: {
            slidesPerView: 1,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {/* https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixi60d=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60 */}
        {arr &&
          arr?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <img
                    style={{ cursor: "pointer", width: "auto" }}
                    src={item}
                    alt={index}
                    onClick={() => navigate("/products")}
                  />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
