import React from "react";
import { Grid, GridItem, Box, Image } from "@chakra-ui/react";
import BrandLogo1 from "../Assets/logo1.png";
import BrandLogo2 from "../Assets/logo2.jpg";
import BrandLogo3 from "../Assets/logo3.webp";
import BrandLogo4 from "../Assets/logo4.jpg";
import BrandLogo5 from "../Assets/logo5.webp";
import BrandLogo6 from "../Assets/logo6.jpg";
const brandLogos = [
  BrandLogo1, // Add your image URLs here
  BrandLogo2,
  BrandLogo3,
  BrandLogo4,
  BrandLogo5,
  BrandLogo6,
];

const AvailableBrandsComponent = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)", // 2 columns on small screens
        md: "repeat(3, 1fr)", // 3 columns on medium screens
        lg: "repeat(6, 1fr)", // 6 columns on large screens
      }}
      gap={5} // Adjust the gap between items as needed
      p={5} // Add padding around the entire component
    >
      {brandLogos.map((logo, index) => (
        <GridItem
          key={index}
          textAlign="center"
          borderRadius="10%" // Rounded corners to make logos circular
          overflow="hidden" // Hide overflowing content (to maintain circular shape)
          boxShadow="lg" // Add shadow to logos
          p="1%"
          backdropBlur={true}
          backgroundColor="white"
        >
          <Image
            src={logo} // Provide the correct path to your images
            alt={`Brand Logo ${index + 1}`}
            h="100px" // Set logo height
            w="100%" // Set logo width
            objectFit="fill" // Scale and crop the image to fit the circle
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default AvailableBrandsComponent;
