import React from "react";
import Card from "./InfoGraphicCard";
import {
  Box,
  FormControl,
  Flex,
  VStack,
  Text,
  Heading,
  Image,
  Grid,
  GridItem,
  ListItem,
  OrderedList,
  ListIcon,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";

import InfoGraphicImage1 from "../../../Assets/infoGraphic1.svg";
import InfoGraphicImage2 from "../../../Assets/infoGraphic2.svg";
import InfoGraphicImage3 from "../../../Assets/infoGraphic3.svg";
import InfoGraphicImage4 from "../../../Assets/infoGraphic4.svg";

const cardsData = [
  {
    imageUrl: InfoGraphicImage1,
    title: "1 Lakh+",
    text: "Suppliers are selling commission-free",
  },
  {
    imageUrl: InfoGraphicImage2,
    title: "24000+",
    text: "Pincodes supported for delivery",
  },
  {
    imageUrl: InfoGraphicImage3,
    title: "Crore of",
    text: "Customers buy across India",
  },
  { imageUrl: InfoGraphicImage4, title: "700 +", text: "Categories to sell" },
];

const SellerInfoGraphicsComponent = () => {
  return (
    <VStack flex={{ base: "1", md: "0.5" }}>
      <Heading as="h4" size="md" mb={4} color={"gray.600"}>
        Grow your business with us!
      </Heading>
      <Box p={4}>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          {cardsData.map((card, index) => (
            <GridItem key={index}>
              <Card
                imageUrl={card.imageUrl}
                title={card.title}
                text={card.text}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <VStack justifyContent="center">
        <Heading as="h4" size="md" mb={4} color={"gray.600"}>
          All you need to sell on TownHall is:
        </Heading>
        <OrderedList color={"gray.600"}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Bank Account
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            GSTIN Number
          </ListItem>
        </OrderedList>
      </VStack>
    </VStack>
  );
};

export default SellerInfoGraphicsComponent;
