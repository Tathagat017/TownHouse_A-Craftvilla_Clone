import React from "react";
import { Text, Flex, Image, Box } from "@chakra-ui/react";
export const PrintLocation = ({ obj }) => {
  return (
    <>
      <Flex
        w="90%"
        h="60px"
        bgSize="xs"
        justifyContent="space-around"
        alignItems="center"
        margin="auto"
      >
        <Image
          src="GoldenLocation.jpeg"
          w="45px"
          h="45px"
          color="black"
          borderRadius="50%"
        ></Image>
        <Text fontSize="14">
          {obj.road},{obj.suburb},{obj.neighbourhood},{obj.county},{obj.city}-
          {obj.postcode} -{obj.state},{obj.country}
        </Text>
      </Flex>
    </>
  );
};
