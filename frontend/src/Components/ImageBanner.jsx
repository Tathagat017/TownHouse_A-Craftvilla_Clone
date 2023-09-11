import React from "react";
import styles from "./ImageBanner.css";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, SimpleGrid } from "@chakra-ui/react";
import StaticRefurbishedImage from "../Assets/staticBanner.jpg";
export default function StaticImageBanner() {
  return (
    <RouterLink to="/products">
      <SimpleGrid w="100%" mt="2.5%">
        <Image
          src={StaticRefurbishedImage}
          w="99.7%"
          style={{ minHeight: "300px" }}
        ></Image>
      </SimpleGrid>
    </RouterLink>
  );
}
