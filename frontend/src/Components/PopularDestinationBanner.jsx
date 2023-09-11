import React, { useState } from "react";
import { Grid, GridItem, Box, Text, Image, VStack } from "@chakra-ui/react";
import watchImage from "../Assets/watch.jpg";
import jewelsImage from "../Assets/jewellery.jpg";
import TabletImage from "../Assets/tablet.webp";
import TabletImage2 from "../Assets/tablet2.jpg";
import WearableImage from "../Assets/wearable.webp";
import jewelsImage2 from "../Assets/jewellery2.jpg";
import MobileImage from "../Assets/mobile.jpg";
import headphonesImage from "../Assets/headphones.jpg";
import PlayStationImage from "../Assets/playstation.jpg";
import ConsoleImage from "../Assets/Games.jpg";
import TelevisionsImage from "../Assets/television.webp";
import speakerImage from "../Assets/speakers.png";
import speakerImage2 from "../Assets/speakers2.jpg";
import MonitorImage2 from "../Assets/monitor2.webp";
import DroneImage from "../Assets/drones.jpg";
import ToysImage from "../Assets/toys.jpg";
export const PopularDestinationComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const destinations = [
    {
      label: "Wearables And Watches",
      image: WearableImage,
      image2: watchImage,
    },
    {
      label: "Bracelets And Jewellery",
      image: jewelsImage,
      image2: jewelsImage2,
    },
    { label: "Tablets And Laptops", image: TabletImage2, image2: TabletImage },
    {
      label: "Mobiles And Accessories",
      image: MobileImage,
      image2: headphonesImage,
    },
    {
      label: "Playstation and Consoles",
      image: ConsoleImage,
      image2: PlayStationImage,
    },
    {
      label: "Television And Monitors",
      image: TelevisionsImage,
      image2: MonitorImage2,
    },
    {
      label: "Speakers And Audio Systems",
      image: speakerImage2,
      image2: speakerImage,
    },
    { label: "Drones And Toys", image: DroneImage, image2: ToysImage },
  ];
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }} // Responsive layout
      gap={5} // Adjust the gap between items as needed
      p={0} // Add padding around the entire banner
      rowGap={6} //
    >
      {destinations.map((destination, index) => (
        <GridItem
          key={index}
          textAlign="center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Box
            bg="gray.100" // Background color
            borderRadius="lg" // Rounded corners
            overflow="hidden" // Hide overflowing content
            boxShadow="xl" // Add shadow
            position="relative" // Position for overlay text
            transition="transform 0.4s ease-in-out" // Transition effect for transform
            _hover={{ transform: "rotateY(180deg)" }} // Flip effect on hover
          >
            <Image
              src={
                hoveredIndex === index ? destination.image2 : destination.image
              }
              // Show image2 when hovered, otherwise show image
              alt={destination.label}
              h="300px" // Set image height
              w="100%" // Set image width to fill the box
              objectFit="cover" // Scale and crop the image to fit the box
            />
            <VStack
              position="absolute" // Position overlay text within the box
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)" // Center text vertically and horizontally
            ></VStack>
          </Box>
          <Box border="1px solid white" bg="aliceblue" rounded="md" mt="2%">
            <Text
              fontSize="1.1em"
              color="black"
              style={{
                textTransform: "capitalize",
                fontFamily: "Lexend Deca",
                textTransform: "capitalize",

                color: "#363333",
              }}
            >
              {destination.label}
            </Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};
