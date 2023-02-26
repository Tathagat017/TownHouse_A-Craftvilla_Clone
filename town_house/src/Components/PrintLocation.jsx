import React from "react";
import { Text, Flex, Image, Box, useBreakpointValue } from "@chakra-ui/react";

export const PrintLocation = ({ obj }) => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const iconSize = isSmallScreen ? "sm" : "md";
  const imageSize = isSmallScreen ? "70px" : "100px";
  return (
    <Box
      maxW={["70%", "50%", "70%", "110%"]}
      ml={[10, 4, 4, 10]}
      overflow={"hidden"}
      mt={[5, 4, 4, 0]}
    >
      <Flex
        w={["100%", "100%", "100%", "100%"]}
        h={["160px", "160px", "160px", "100px"]}
        justifyContent="space-around"
        alignItems="center"
        fontSize={["sm", "sm", "xs", "xs"]}
        letterSpacing="wide"
        flexWrap="wrap"
        flexDirection="row"
      >
        <Text style={{ fontSize: "2rem" }}>{isSmallScreen ? "📌" : "📍"}</Text>
        <Text fontSize={["sm", "sm", "xs", "xs"]} textAlign="center">
          {obj.road}, {obj.suburb}, {obj.neighbourhood}, {obj.county},{" "}
          {obj.city} - {obj.postcode} - {obj.state}, {obj.country}
        </Text>
      </Flex>
    </Box>
  );
};
