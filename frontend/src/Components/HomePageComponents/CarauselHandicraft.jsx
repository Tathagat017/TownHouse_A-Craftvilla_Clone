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
import CaraouselImage1 from "../../Assets/caraouselHandi1.jpg";
import CaraouselImage2 from "../../Assets/caraouselHandi2.webp";
import CaraouselImage3 from "../../Assets/caraouselHandi3.webp";
import CaraouselImage4 from "../../Assets/caraouselHandi4.jpg";
import CaraouselImage5 from "../../Assets/caraouselHandi5.jpg";
import CaraouselImage6 from "../../Assets/caraouselHandi6.jpg";
import CaraouselImage7 from "../../Assets/caraouselHandi7.jpg";
import CaraouselImage8 from "../../Assets/caraouselHandi8.jpg";
import CaraouselImage9 from "../../Assets/caraouselHandi9.jpg";
import CaraouselImage10 from "../../Assets/caraouselHandi10.jpg";
// import "./swiperStyle.css";

const CarauselHandicraft = () => {
  const navigate = useNavigate();
  const arr = [
    CaraouselImage1,
    CaraouselImage2,
    CaraouselImage3,
    CaraouselImage7,
    CaraouselImage9,
    CaraouselImage10,
  ];
  const swiperRef = useRef(null);

  const breakpoints = {
    220: {
      slidesPerView: 1,
    },
    720: {
      slidesPerView: 1, // Display two images at a time on larger screens
    },
    1200: {
      slidesPerView: 3,
    },
  };

  const slideToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const slideToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="App">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        ref={swiperRef}
        style={{ borderRadius: "15px" }}
      >
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
                      height: "300px",
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
      <div style={{ textAlign: "center" }}></div>
    </div>
  );
};

export default CarauselHandicraft;
