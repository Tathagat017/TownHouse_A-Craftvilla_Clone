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
import CaraouselImage1 from "../../Assets/caraouselHandi1.webp";
import CaraouselImage2 from "../../Assets/caraouselHandi2.webp";
import CaraouselImage3 from "../../Assets/caraouselHandi3.webp";
import CaraouselImage4 from "../../Assets/caraouselHandi4.jpg";
import CaraouselImage5 from "../../Assets/caraouselHandi5.jpg";
import CaraouselImage6 from "../../Assets/caraouselHandi6.jpg";
import CaraouselImage7 from "../../Assets/caraouselHandi7.jpg";
import CaraouselImage8 from "../../Assets/caraouselHandi8.jpg";
// import "./swiperStyle.css";
export default function Carausel3() {
  const navigate = useNavigate();
  const arr = [
    CaraouselImage4,
    CaraouselImage5,
    CaraouselImage6,
    CaraouselImage7,
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
        style={{ borderRadius: "15px" }}
      >
        {/* https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixi60d=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60 */}
        {arr &&
          arr?.map((item, index) => {
            return (
              <SwiperSlide key={index} style={{ borderRadius: "15px" }}>
                <div>
                  <img
                    style={{
                      borderRadius: "15px",
                      cursor: "pointer",
                      width: "auto",
                      objectFit: "fill",
                      width: "100%",
                      minHeight: "300px",
                    }}
                    src={item}
                    alt={index}
                    onClick={() => navigate("/products")}
                    objectFit="fill"
                  />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
