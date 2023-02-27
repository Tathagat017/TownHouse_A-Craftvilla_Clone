import React, { useState, useEffect, useContext } from "react";
import { Link as RouterLink, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../Components/Context";

import NavBar from "./../Components/NavBar";
import LargeWithNewsletter from "./../Components/Footer";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { authState, loginUser, logoutUser } = useContext(authContext);

  let loginUserData = {
    email,
    password,
  };
  const getData = (LoginUserData) => {
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
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUserData),
    })
      .then((respone) => {
        return respone.json();
      })
      .then((data) => {
        console.log(data.token);
        loginUser(data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData({ email, password });
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
        bg={("linear-gradient(#e66465, #9198e5)", "purple.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} color={"whiteAlpha.900"}>
              Sign in to Town House
            </Heading>
            <Text fontSize={"lg"} color={"whiteAlpha.900"}>
              Or Sign Up{" "}
              <RouterLink to="/newUser" color={"blue.400"}>
                New User
              </RouterLink>{" "}
              ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} bg={("white", "gray.700")} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={onChangeEmail}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={onChangePassword}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"purple.500"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <LargeWithNewsletter />
    </>
  );
}
export default Login;
