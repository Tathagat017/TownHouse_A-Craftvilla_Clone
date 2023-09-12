import React from "react";
import styles from "./ImageBanner.css";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, SimpleGrid } from "@chakra-ui/react";
import SellerImage from "../../Assets/seller.png";
export default function SellerStaticBanner() {
  return (
    <RouterLink to="/products">
      <SimpleGrid w="100%" mt="2.5%">
        <Image src={SellerImage} w="99.7%" h="350px"></Image>
      </SimpleGrid>
    </RouterLink>
  );
}
