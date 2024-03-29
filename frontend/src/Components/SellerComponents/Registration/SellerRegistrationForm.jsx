import React, { useState } from "react";
import {
  Box,
  FormControl,
  Flex,
  Text,
  Heading,
  Stack,
  HStack,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  InputLeftAddon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { MdEmail } from "react-icons/md";
import { TbReceiptTax } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import Confetti from "react-confetti";
import "@fontsource/titillium-web/400.css";

const SellerRegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPartyPop, setIsPartyPop] = useState(false);
  const handleRegisterClick = (e) => {
    // Your registration logic goes here...
    e.preventDefault();
    console.log("clicked");
    // Trigger the party pop animation
    setIsPartyPop(true);

    // Reset the animation after a delay (you can adjust the delay time)
    setTimeout(() => {
      setIsPartyPop(false);
    }, 8000);
  };

  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
      <Stack align={"center"}>
        <Heading
          fontSize={"4xl"}
          textAlign={"center"}
          color={"gray.600"}
          fontFamily="Titillium Web"
        >
          Join our fleet of suppliers !
        </Heading>
        <Text
          fontSize={"md"}
          color={"gray.600"}
          fontFamily="Titillium Web"
          textDecoration={"underline teal"}
        >
          Become a seller on TownHall
        </Text>
      </Stack>
      <Box
        rounded={"lg"}
        style={{
          backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
        }}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <Box>
            <FormControl id="SellerName" isRequired>
              <FormLabel>Seller Name</FormLabel>
              <Input type="text" placeholder="Enter bussiness name" />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="PhoneNumber">
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input type="tel" placeholder="phone number" />
              </InputGroup>
            </FormControl>
          </Box>
          <Box>
            <FormControl id="GSTIN">
              <FormLabel>GSTIN Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<TbReceiptTax />} />
                <Input
                  type="number"
                  max={999999999999999}
                  maxLength={15}
                  placeholder="GSTIN Number-15 digits"
                  isrequired
                />
              </InputGroup>
            </FormControl>
          </Box>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<MdEmail />} />
              <Input type="email" placeholder="email Address" />
            </InputGroup>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<RiLockPasswordLine />} />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="password"
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"outline"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                  boxShadow={"none"}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={2}>
            {isPartyPop && <Confetti />}
            <Button
              isLoading={false}
              loadingText="Submitting"
              size="lg"
              bg={"blackAlpha.800"}
              boxShadow={"none"}
              color={"white"}
              _hover={{
                bg: "#5342ed",
                backgroundImage:
                  "linear-gradient(225deg, #ce16d7 0%, #2BD2FF 52%, #2bff87a4 90%)",
                cursor: "pointer",
              }}
              fontFamily="sans-serif"
              onClick={(e) => {
                handleRegisterClick(e);
              }}
            >
              Register
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              Already a seller?{" "}
              <Link style={{ fontWeight: "bold" }} to="/seller/login">
                Login
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default SellerRegistrationForm;
