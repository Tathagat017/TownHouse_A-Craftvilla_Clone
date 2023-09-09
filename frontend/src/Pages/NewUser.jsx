import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link as RouterLink, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../Components/Context";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import LargeWithNewsletter from "./../Components/Footer";
import NavBar from "./../Components/NavBar";

export default function NewUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { authState, loginUser, logoutUser } = useContext(authContext);

  let loginUserData = {
    email,
    password,
  };
  const postData = (LoginUserData) => {
    // const obj = {
    //   email: `${email}`,
    //   password: `${password}`,
    // };

    // {
    //     "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
    // }

    // let obj = {
    //   email: "eve.holt@reqres.in",
    //   password: "cityslicka",
    // };

    // console.log(obj);

    axios({
      method: "post",
      url: "https://sore-pink-giraffe-cuff.cyclic.app/users",
      data: loginUserData,
    })
      .then((data) => {
        console.log(data);
        return <Navigate to="/Login" />;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ email, password });
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  if (authState.isAuth == true) {
    return <Navigate to="/Cart" />;
  }

  return (
    <>
      <NavBar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={("blackAlpha.100", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} bg={("white", "gray.700")} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl
                id="email"
                isRequired
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={onChangeEmail}
              >
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={password ? "text" : "password"}
                    data-testid="password-input"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={onChangePassword}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setPassword((showPassword) => !showPassword)
                      }
                    >
                      {password ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"purple.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                  value="SUBMIT"
                  onClick={handleSubmit}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <RouterLink to="/Login" color={"blue.400"}>
                    Login
                  </RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <LargeWithNewsletter />
    </>
  );
}
