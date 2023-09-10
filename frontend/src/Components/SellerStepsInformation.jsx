import React from "react";
import sellerSignupImage from "../Assets/sign-seller.png";
import sellerProcessImage from "../Assets/process-seller.png";
import sellerListProductsImage from "../Assets/list-products.png";
import getPaindImage from "../Assets/GetPaid-seller.png";
import { Grid, GridItem, Box, Image, Text } from "@chakra-ui/react";

const SellerInfoImages = [
  {
    image: sellerSignupImage,
    label: "Register with TownHall",
    color: "#3a3636",
  },
  {
    image: sellerListProductsImage,
    label: "List your products",
    color: "#007e8a",
  },
  {
    image: sellerProcessImage,
    label: "Process orders and ship out packages",
    color: "#064cc6",
  },
  { image: getPaindImage, label: "Get Paid", color: "#ff5953" },
];

const SellerInformationComponent = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)", // 2 columns on small screens
        md: "repeat(1, 1fr)", // 3 columns on medium screens
        lg: "repeat(4, 1fr)", // 6 columns on large screens
      }}
      gap={4}
      p={4}
    >
      {SellerInfoImages.map((info, index) => (
        <GridItem
          key={index}
          textAlign="center"
          overflow="hidden"
          boxShadow="lg"
        >
          <Box
            bg={`${info.color}`}
            style={{
              height: "200px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Image
              src={info.image}
              alt={`Brand Logo ${index + 1}`}
              h="100px"
              w="100px"
              objectFit="cover"
            />
            <Text>{info.label}</Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default SellerInformationComponent;
