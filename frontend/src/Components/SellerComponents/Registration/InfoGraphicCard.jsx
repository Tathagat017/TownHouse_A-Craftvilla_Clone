import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

const Card = ({ imageUrl, title, text }) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg="white"
      p={4}
      borderRadius="md"
      textAlign={"center"}
      borderWidth={"1px"}
      boxShadow={"xl"}
      h="250px"
    >
      <Image
        src={imageUrl}
        alt={title}
        maxH="150px"
        maxW="100%"
        mb={2}
        objectFit="cover"
      />
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="sm">{text}</Text>
    </Flex>
  );
};

export default Card;
