import React from "react";
import {
  ChakraProvider,
  Flex,
  Input,
  IconButton,
  Image,
  Box,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { AvatarWithRipple } from "./Avtar";
import Cart from "./../Pages/Cart";
import Wishlist from "./../Pages/Wishlist";
import GetLocation from "./GeoLocation";

const NavBar = () => {
  return (
    <Flex
      alignItems="center"
      p={2}
      overflow="visible"
      fontSize="xs"
      lineHeight={5}
      letterSpacing="wide"
      backgroundColor="aliceblue"
      border={0}
      borderRadius={0}
      opacity={0.81}
      boxShadow=" rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;"
      flexDirection="row"
      color="#000000"
      bgGradient="linear(to top, purple.300,whiteAlpha.900,yellow.200)"
      justifyContent="space-between"
    >
      <RouterLink to="/">
        <Image
          height="120px"
          width="120px"
          borderRadius={15}
          display="inline-block"
          mr={5}
          opacity={1}
          src="logo.jpg"
          ml={0}
          margin="auto"
        />
      </RouterLink>
      <Flex>
        <Input
          variant="filled"
          width="100%"
          placeholder="Search Town House"
          size="md"
          display="flex"
          mr="0"
          color="purple.500"
        />
        <IconButton
          aria-label="icon"
          icon={<SearchIcon />}
          size="md"
          variant="ghost"
          border={0}
          borderRadius={5}
          ml={-50}
          colorScheme="gray"
        />
      </Flex>
      <>
        <Box>
          {/* <IconButton
            aria-label="icon"
            icon={<GetLocation />}
            size="md"
            variant="ghost"
          /> */}

          {/* GEO LOCATION IS BELOW */}
          {/* <GetLocation /> */}
        </Box>
      </>
      <Flex justifyContent="space-between" w="80">
        <RouterLink to="/Wishlist">
          <IconButton
            aria-label="icon"
            icon={
              <Image src="GoldenCart1.jpg" w="56px" borderRadius="50%"></Image>
            }
            size="md"
            variant="ghost"
          />
        </RouterLink>
        <IconButton
          aria-label="icon"
          icon={
            <Image
              src="GoldenCart.jpg"
              w="58px"
              h="50px"
              borderRadius="50%"
            ></Image>
          }
          size="md"
          variant="ghost"
          borderRadius="50%"
        />
        <IconButton
          aria-label="icon"
          // icon={<AvatarWithRipple />}
          icon={
            <Image src="GoldenLogin4.jpg" w="56px" borderRadius="50%"></Image>
          }
          size="md"
          variant="ghost"
          borderRadius="50%"
        />
      </Flex>
    </Flex>
  );
};

export default NavBar;
