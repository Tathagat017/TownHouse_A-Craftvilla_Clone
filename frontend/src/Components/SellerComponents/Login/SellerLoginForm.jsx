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

const SellerLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPartyPop, setIsPartyPop] = useState(false);

  const handleLoginClick = (e) => {
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
          Login for sellers !
        </Heading>
        <Text
          fontSize={"md"}
          color={"gray.600"}
          fontFamily="Titillium Web"
          textDecoration={"underline teal"}
        >
          Login to TownHall seller account
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
            {isPartyPop && (
              <Confetti
                drawShape={(ctx) => {
                  ctx.beginPath();
                  for (let i = 0; i < 22; i++) {
                    const angle = 0.35 * i;
                    const x = (0.2 + 1.5 * angle) * Math.cos(angle);
                    const y = (0.2 + 1.5 * angle) * Math.sin(angle);
                    ctx.lineTo(x, y);
                  }
                  ctx.stroke();
                  ctx.closePath();
                }}
                tweenDuration={2000}
              />
            )}
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
                handleLoginClick(e);
              }}
            >
              Login
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              Not Registered yet?{" "}
              <Link style={{ fontWeight: "bold" }} to="/seller/register">
                Register
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
export default SellerLoginForm;
