import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router";

import fashion1 from "../Assets/fashion1.jpg";
import fashion2 from "../Assets/fashion2.jpg";
import fashion3 from "../Assets/fashion3.jpg";
import fashion4 from "../Assets/fashion4.jpg";
import fashion5 from "../Assets/fashion5.jpg";
import fashion6 from "../Assets/fashion6.jpg";
import fashion7 from "../Assets/fashion7.jpg";
import fashion8 from "../Assets/fashion8.jpg";
const images = [
  // Add your image URLs here
  fashion1,
  fashion2,
  fashion3,
  fashion4,
  fashion5,
  fashion6,
  fashion7,
  fashion8,
];

const FashionBannerComponent = () => {
  const navigate = useNavigate();
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
            slidesPerView: 2, // Display two images per row on smaller screens (e.g., tablets)
          },
          1200: {
            slidesPerView: 3, // Display three images per row on larger screens (e.g., PCs)
          },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images &&
          images?.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  borderRadius: "20px",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <div>
                  <img
                    style={{
                      cursor: "pointer",
                      width: "100vw",
                      height: "250px", // Set a constant height for the images
                      objectFit: "fill",
                      borderRadius: "20px",
                    }}
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
};

export default FashionBannerComponent;
