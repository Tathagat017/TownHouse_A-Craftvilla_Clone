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
export const Crousel2 = () => {
  const navigate = useNavigate();
  const arr = [
    {
      title: "Personal Products and Beauty",
      image: "https://cdn.plotch.io/image/upload/C/V/1676285392_My5wbmc=.png",
      url: "/personalProducts",
    },
    {
      title: "Kurta",
      image: "https://cdn.plotch.io/image/upload/C/V/1676285387_Mi5wbmc=.png",
      url: "/WomenKurta",
    },
    {
      title: "Idols",
      image: "https://cdn.plotch.io/image/upload/C/V/1676285421_OC5wbmc=.png",
      url: "/Idols",
    },
    {
      title: "Ceramic Mugs",
      image: "https://cdn.plotch.io/image/upload/C/V/1676285414_Ny5wbmc=.png",
      url: "/CeramicMugs",
    },
    {
      title: "Saree",
      image: "https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png",
      url: "/Saree",
    },
    {
      title: "Home Decor",
      image: "https://cdn.plotch.io/image/upload/C/V/1676285398_NC5wbmc=.png",
      url: "/HomeDecor",
    },
    {
      title: "Kitchen Ware",
      image: "https://cdn.plotch.io/image/upload/C/V/1676285409_Ni5wbmc=.png",
      url: "/HomeDecor",
    },
    {
      title: "Tote Bags",
      image: "https://cdn.plotch.io/image/upload/C/V/1676285404_NS5wbmc=.png",
      url: "/ToteBags",
    },
  ];
  return (
    <div className="App">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          220: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          720: {
            slidesPerView: 1,
            spaceBetween: 35,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        style={{ margin: "auto", display: "block" }}
      >
        {/* https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixi60d=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60 */}
        {arr &&
          arr?.map((item, index) => {
            return (
              <SwiperSlide key={index} style={{ borderRadius: "20px" }}>
                <div style={{ margin: "auto", display: "block" }}>
                  <img
                    style={{
                      cursor: "pointer",
                      borderRadius: "20px",
                      objectFit: "fill",
                      width: "100%",
                    }}
                    src={item.image}
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
};
