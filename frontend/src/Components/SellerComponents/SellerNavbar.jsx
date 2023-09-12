import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaSearch, FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";

import { Link } from "react-router-dom";
import "@fontsource/titillium-web/400.css";
import webisiteLogo from "../../Assets/Website-Logo/testLogo8.jpg";

const SellerNavbar = () => {
  const isAuthSeller = false;
  const [showText, setShowText] = useState({});
  const options = {
    loginPage: {
      Buttontext: "Register",
      text: "Not registered?",
      link: "register",
    },
    registerPage: {
      Buttontext: "Login",
      text: "Already Registered?",
      link: "login",
    },
  };
  useEffect(() => {
    let path = window.location.pathname;
    if (path.includes("/seller/login")) {
      setShowText(options.loginPage);
    } else if (path.includes("/seller/register")) {
      setShowText(options.registerPage);
    }
    console.log(showText);
  }, []);

  return (
    <Box
      boxShadow="md"
      width="100%"
      bg="white"
      color="black"
      py={{ base: 2, md: 0 }} // Adjust vertical padding for mobile vs desktop
    >
      <Flex
        p={{ base: 2, md: 4 }} // Adjust padding for mobile vs desktop
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap" // Allow items to wrap when the screen is narrow
      >
        {/* Logo */}
        <Box
          flex="1"
          textAlign="center"
          fontFamily="Titillium Web"
          mb={{ base: 2, md: 0 }} // Adjust margin for mobile vs desktop
        >
          <Link to="/">
            <Image
              src={webisiteLogo}
              maxH="60px"
              minH="30px"
              style={{ objectFit: "contain" }}
            />
            {/* Adjust max height */}
          </Link>
        </Box>

        {/* Seller/User Navigation */}
        {isAuthSeller ? (
          <Menu>
            <MenuButton
              as={Box}
              p={2}
              _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
            >
              <FaUser />
            </MenuButton>
            <MenuList>
              <MenuItem fontFamily="Titillium Web">My Profile</MenuItem>
              <MenuItem fontFamily="Titillium Web">Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Flex
            justifyContent="space-between"
            alignItems="center"
            ml={{ base: 0, md: "auto" }} // Move left on mobile, right on desktop
          >
            <Text fontFamily="Titillium Web" m={2}>
              {showText.text}
            </Text>
            <Link to={`/seller/${showText.link}`}>
              <Button> {showText.Buttontext}</Button>
            </Link>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default SellerNavbar;
