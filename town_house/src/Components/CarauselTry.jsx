import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import styles from "./CarauselTry.css";
import { useNavigate } from "react-router";
export const CrouselTry = () => {
  const navigate = useNavigate();
  const [restraunt, setRestraunt] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://sore-pink-giraffe-cuff.cyclic.app/ResDistance")
      .then(function (response) {
        setLoading(false);
        console.log(response);
        setRestraunt(response.data);
      })
      .catch(function (error) {
        setLoading(false);
        console.error(error);
      });
  }, []);

  // These are the images used in the slide
  const arr = restraunt;
  if (loading) {
    return <></>;
  }
  return (
    <div className="App">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 45,
          },
        }}
      >
        {/* https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixi60d=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60 */}
        {arr &&
          arr?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  style={{
                    boxShadow: "  rgba(220, 186, 229)  0px 30px 90px",
                    margin: "10%",
                    height: "45vh",
                  }}
                >
                  <img
                    className="carauselTryImage"
                    style={{
                      cursor: "pointer",
                      width: "100%",
                      height: "30vh",
                    }}
                    src={item.image}
                    alt={index}
                    onClick={() => navigate("/products")}
                    loading="lazy"
                  />

                  <h2 className="carauselText">{item.title}</h2>

                  <h4
                    style={{
                      color: "goldenrod",
                      lineHeight: "10vh",
                      fontWeight: "bold",
                    }}
                  >
                    {item.distance}
                  </h4>
                  <div class="swiper-lazy-preloader"></div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};
