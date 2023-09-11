import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { SimpleGrid, Image, Box } from "@chakra-ui/react";
import HomeDecorImage1 from "../Assets/homeDecom.webp";
import HomeDecorImage2 from "../Assets/homeDecom2.jpg";
import HomeDecorImage3 from "../Assets/homeDecom3.jpg";
import HomeDecorImage4 from "../Assets/homeDecom4.jpg";

const HomeDecorImageArray = [
  HomeDecorImage2,
  HomeDecorImage1,
  HomeDecorImage3,
  HomeDecorImage4,
];

export default function SimpleImage() {
  // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
  // will have the same effect.
  return (
    <RouterLink to="/products">
      <SimpleGrid columns={[1, 1, 2]} spacing="30">
        {HomeDecorImageArray &&
          HomeDecorImageArray?.map((images, ind) => {
            return (
              <Image
                src={images}
                alt={`home-decor-image-${ind}`}
                key={ind}
                h="400px"
                w="100%"
              ></Image>
            );
          })}
      </SimpleGrid>
    </RouterLink>
  );
}
