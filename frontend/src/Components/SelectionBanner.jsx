import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "./SelectionBanner.css";
const Links = [
  {
    label: "FASHION",
    subLinks: ["Men", "Women", "Kids"],
  },
  {
    label: "BEAUTY",
    subLinks: ["Makeup", "Skincare", "Fragrance"],
  },
  {
    label: "HOME DECOR",
    subLinks: ["Furniture", "Decorations", "Lighting"],
  },
  {
    label: "ELECTRONICS",
    subLinks: ["Phones", "Laptops", "Accessories"],
  },
  {
    label: "ACCESSORIES",
    subLinks: ["Bags", "Jewelry", "Watches"],
  },
  {
    label: "FOOTWEAR",
    subLinks: ["Men", "Women", "Kids"],
  },
  {
    label: "TRENDING NOW",
    subLinks: ["Kurta", "Jeans", "Crocs"],
  },
  {
    label: "OFFERS",
    subLinks: ["Buy 1 Get 1", "50% off"],
  },
  {
    label: "PRODUCTS NEAR ME",
    subLinks: ["Handicraft", "Jewellery"],
  },
];

const NavLink = ({ children, subLinks, responsiveFontSize }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box position="relative" display="inline-block">
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "underline 2.5px",
          textDecorationColor: "#e72b76",
          textUnderlineOffset: "15px",
          bg: "#ffffff",
        }}
        href={"#"}
        fontSize={responsiveFontSize} // Responsive font size
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </Link>
      {isOpen && (
        <Box
          position="absolute"
          mt="1"
          p="2"
          bg="white"
          shadow="md"
          rounded="md"
          zIndex="5"
          w="100%"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {subLinks.map((subLink) => (
            <Link
              key={subLink}
              display="block"
              py="1"
              _hover={{ bg: "gray.100" }}
            >
              {subLink}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("whiteAlpha.50", "blackAlpha.100")} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          margin="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack
            as={"nav"}
            spacing={"5"}
            display={{ base: "none", md: "flex" }}
            color="blackAlpha.900"
            backdropBlur="3xl"
            backdropBrightness="50"
            fontSize="1em"
            lineHeight="2em"
            justifyContent={"center"}
            fontFamily="Titillium Web"
            fontWeight="500"
            textAlign="center"
            margin="auto"
          >
            {Links.map((link) => (
              <NavLink
                key={link.label || link}
                subLinks={link.subLinks}
                responsiveFontSize={{
                  base: "1em",
                  md: ".6em",
                  xl: "1em", // Keep the same font size for medium screens
                }}
              >
                {link.label || link}
              </NavLink>
            ))}
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link.label || link}
                  subLinks={link.subLinks}
                  responsiveFontSize={{
                    base: "1em",
                    md: "1em", // Keep the same font size for medium screens
                  }}
                >
                  {link.label || link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
