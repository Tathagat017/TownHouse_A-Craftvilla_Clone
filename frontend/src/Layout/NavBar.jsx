import React from "react";
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
} from "@chakra-ui/react";
import { FaSearch, FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import Simple from "../Components/SelectionBanner.jsx";
import { Link } from "react-router-dom";
import "@fontsource/titillium-web/400.css";
import webisiteLogo from "../Assets/Website-Logo/testLogo8.jpg";
const Navbar = () => {
  return (
    <div
      style={{
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
        // overflow: "hidden",
        boxSizing: "border-box",
        width: "100%",
        margin: "0",
        color: "black",
      }}
    >
      <Flex
        bg="white"
        p="2"
        alignItems="center"
        flexWrap="wrap" // Allow items to wrap when the screen is narrow
      >
        {/* Logo on the left (Desktop) */}
        <Box
          flex="1"
          textAlign="center"
          display={{ base: "none", md: "flex" }} // Hide on mobile, show on desktop
          padding="1%"
          fontFamily="Titillium Web"
        >
          <Link>
            {/* <Text style={{ fontSize: "1.2rem", fontStyle: "bold" }}>
                <span style={{ color: "#e72b76" }}>T</span>own
                <span style={{ color: "#e72b76" }}>H</span>all
              </Text> */}
            <Image src={webisiteLogo} w="40%"></Image>
            {/* <Text style={{ fontSize: "1.2rem", fontStyle: "bold" }}>
                <span style={{ color: "#e72b76" }}>M</span>arketplace
              </Text> */}
          </Link>
        </Box>

        {/* Search bar in the middle */}
        <Box
          flex={{ base: "1", md: "auto" }}
          textAlign="center"
          mb={{ base: "4", md: "0" }}
        >
          <Flex alignItems="center" justifyContent="center">
            <Box p="2">
              <FaSearch />
            </Box>
            <input type="text" placeholder="Search" />
          </Flex>
        </Box>

        {/* Icons on the right */}
        <HStack spacing="4">
          <HStack spacing="4" display={{ base: "none", md: "flex" }}>
            <Menu>
              <MenuButton
                as={Box}
                rounded={"sm"}
                p="2"
                _hover={{
                  bg: "#FA8BFF",

                  backgroundImage:
                    "linear-gradient(225deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)",

                  transform: "scale(1.1)",
                  cursor: "pointer",
                }}
                fontFamily="Titillium Web"
              >
                SELLER ZONE
              </MenuButton>
              <MenuList>
                <MenuItem fontFamily="Titillium Web">Login</MenuItem>
                <MenuItem fontFamily="Titillium Web">
                  New Seller Register
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <Menu>
            <MenuButton
              as={Box}
              p="2"
              _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
            >
              <FaUser />
            </MenuButton>
            <MenuList>
              <MenuItem fontFamily="Titillium Web">Profile</MenuItem>
              <MenuItem fontFamily="Titillium Web">Logout</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Box}
              p="2"
              _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
            >
              <FaShoppingCart />
            </MenuButton>
            <MenuList>
              <MenuItem fontFamily="Titillium Web">Cart</MenuItem>
              <MenuItem fontFamily="Titillium Web">Checkout</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Box}
              p="2"
              _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
            >
              <FaHeart />
            </MenuButton>
            <MenuList>
              <MenuItem fontFamily="Titillium Web">Wishlist</MenuItem>
              <MenuItem fontFamily="Titillium Web">Notifications</MenuItem>
            </MenuList>
          </Menu>

          {/* Seller and User Sub-Navigation (Desktop) */}
        </HStack>
      </Flex>

      {/* Logo on the left (Mobile) */}
      <Box
        textAlign="center"
        p="2"
        display={{ base: "block", md: "none" }} // Show on mobile, hide on desktop
      >
        <Link>
          <Image></Image>
        </Link>
      </Box>

      <Simple />
    </div>
  );
};

export default Navbar;
