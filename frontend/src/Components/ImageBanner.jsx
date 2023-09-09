import React from "react";
import styles from "./ImageBanner.css";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, SimpleGrid } from "@chakra-ui/react";
export default function StaticImageBanner() {
  return (
    <RouterLink to="/products">
      <SimpleGrid w="100%" mt="2.5%">
        <Image src="./staticBanner.jpg" w="99.45%"></Image>
      </SimpleGrid>
    </RouterLink>
  );
}
