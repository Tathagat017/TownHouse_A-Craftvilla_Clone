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
  UnorderedList,
  ListIcon,
} from "@chakra-ui/react";
import "@fontsource/titillium-web/400.css";
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
      <Heading
        as="h3"
        size="xl"
        mb={4}
        color={"gray.600"}
        fontFamily="Titillium Web"
      >
        Grow your business with us!
      </Heading>
      <VStack
        justifyContent="center"
        padding="1rem"
        style={{
          backgroundImage: "inear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)",
          borderRadius: "15px",
        }}
      >
        <Heading as="h4" size="md" mb={4} color={"gray.600"}>
          All you need to sell :
        </Heading>

        <VStack color={"gray.600"}>
          <Flex justifyContent="space-betweem" alignItems="center">
            <MdCheckCircle color="green" />
            <Text fontStyle="Bold" m="1%">
              GST Number
            </Text>

            <MdCheckCircle color="green" />
            <Text m="1%"> Bank Account Number</Text>
          </Flex>
        </VStack>
      </VStack>
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
    </VStack>
  );
};

export default SellerInfoGraphicsComponent;
