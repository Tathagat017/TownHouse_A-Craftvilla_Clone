import React, { useContext, useState } from "react";
import { cartContext } from "../Components/CartContext";
import NavBar from "./../Components/NavBar";
import LargeWithNewsletter from "./../Components/Footer";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as RouterLink, Navigate, useNavigate } from "react-router-dom";
export default function Cart() {
  const navigate = useNavigate();
  const { cart, wishlist } = useContext(cartContext);
  console.log(cart);
  return (
    <>
      <NavBar />
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cart?.map((el) => {
          return (
            <Center py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={("whiteAlpha.400", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"230px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${el.image})`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Image
                    rounded={"lg"}
                    height={230}
                    width={282}
                    objectFit={"cover"}
                    src={el.image}
                  />
                </Box>
                <Stack pt={10} align={"center"}>
                  <Text
                    color={"whiteAlpha.400"}
                    fontSize={"sm"}
                    textTransform={"uppercase"}
                  >
                    {el.brand}
                  </Text>
                  <Heading
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    fontWeight={500}
                  >
                    {el.title}
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text
                      fontWeight={800}
                      fontSize={"xl"}
                      color={"whiteAlpha.400"}
                    >
                      {el.price}
                    </Text>
                    <Text color={"whiteAlpha.400"}>{el.quantity}</Text>
                    <Text color={"whiteAlpha.400 "} fontSize="xl">
                      TOTAL VALUE IN CART: {el.price}
                    </Text>
                    <RouterLink to="/payment">
                      <Button
                        _hover={{ colorScheme: "red" }}
                        onClick={() => {
                          window.location.assign(
                            "http://localhost:3000/payment"
                          );
                        }}
                      >
                        Buy Now
                      </Button>
                    </RouterLink>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          );
        })}
      </SimpleGrid>
      <LargeWithNewsletter />
    </>
  );
}
