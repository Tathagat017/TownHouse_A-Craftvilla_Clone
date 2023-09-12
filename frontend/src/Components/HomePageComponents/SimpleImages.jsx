import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { SimpleGrid, Image, Box } from "@chakra-ui/react";
import HomeDecorImage1 from "../../Assets/homeDecom.webp";
import HomeDecorImage2 from "../../Assets/homeDecom2.jpg";
import HomeDecorImage3 from "../../Assets/homeDecom3.jpg";
import HomeDecorImage4 from "../../Assets/homeDecom4.jpg";

const HomeDecorImageArray = [
  HomeDecorImage2,
  HomeDecorImage1,
  HomeDecorImage3,
  HomeDecorImage4,
];

export default function SimpleImage() {
  const handleHover = (index) => {
    const images = document.querySelectorAll(".home-decor-image");
    images.forEach((image, i) => {
      if (i !== index) {
        image.style.filter = "blur(3px)";
      }
    });
  };

  const handleMouseLeave = () => {
    const images = document.querySelectorAll(".home-decor-image");
    images.forEach((image) => {
      image.style.filter = "none";
    });
  };

  return (
    <RouterLink to="/products">
      <SimpleGrid columns={[1, 1, 2]} spacing="30">
        {HomeDecorImageArray &&
          HomeDecorImageArray?.map((image, index) => {
            return (
              <Box
                key={index}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <Image
                  src={image}
                  rounded={"md"}
                  alt={`home-decor-image-${index}`}
                  key={index}
                  h="400px"
                  w="100%"
                  _hover={{ transform: "scale(1.04)" }}
                  className="home-decor-image"
                ></Image>
              </Box>
            );
          })}
      </SimpleGrid>
    </RouterLink>
  );
}
