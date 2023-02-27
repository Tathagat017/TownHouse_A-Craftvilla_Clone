import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  Icon,
  chakra,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import NavBar from "./../Components/NavBar";
import LargeWithNewsletter from "./../Components/Footer";
import { cartContext } from "../Components/CartContext";
import { useToast } from "@chakra-ui/react";
function SingleProduct() {
  const toast = useToast();
  function Rating({ rating, numReviews = 100 }) {
    return (
      <Flex alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < rating ? "whiteAlpha.500" : "gray.300"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar key={i} style={{ marginLeft: "1" }} />;
          })}
        <Box as="span" ml="2" color="whiteAlpha.400" fontSize="sm">
          {numReviews} review{numReviews > 1 && "s"}
        </Box>
      </Flex>
    );
  }
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [restraunt, setRestaurant] = useState({});
  const { addToCart } = useContext(cartContext);

  function fetchData(id) {
    console.log(params);
    setLoading(true);
    fetch(`https://sore-pink-giraffe-cuff.cyclic.app/MenShoes/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        console.log(response);
        setRestaurant(response);
        // let data1 = response.data;
        // setData(data1);
        // //console.log(data, response.totalPages);
        // setTotal(response.totalPages);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData(params.id);
  }, [params.id]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={("whiteAlpha.400", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          {
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          }

          <Image
            src={restraunt.image}
            alt={`Picture of ${restraunt.image}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {restraunt.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {restraunt.title}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
                onClick={() => handleAddToCart(restraunt)}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={restraunt.rating} />
              <Box fontSize="2xl" color={("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="lg">
                  Rs
                </Box>
                {restraunt.price}
                <RouterLink to="/Cart">
                  <Button
                    onClick={() => {
                      toast({
                        title: "Added to Cart",
                        description: "Product added to Cart",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      });
                    }}
                  >
                    Proceed to Cart
                  </Button>
                </RouterLink>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <LargeWithNewsletter />
    </>
  );
}
export default SingleProduct;
