import React, { useState, useReducer, useContext, useEffect } from "react";
import { UserCard, ProductCard } from "react-ui-cards";
import SideFilter from "../Components/SideFilter";
import NavBar from "./../Components/NavBar";
import Simple from "./../Components/SelectionBanner";
import LargeWithNewsletter from "./../Components/Footer";
import TopFilterPanel from "./../Components/TopFilterPanel";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  SimpleGrid,
  Spinner,
  Center,
  Img,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import Pagination from "../Components/Pagination";
import axios from "axios";
import { cartContext } from "../Components/CartContext";
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
        error: null,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default function Product({ category }) {
  const { addToCart, addToWishlist } = useContext(cartContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("asc");
  const [price, setPrice] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [categoryItem, setCategory] = useState("Men");

  //
  const fetchData = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const { data } = await axios.get(
        `https://sore-pink-giraffe-cuff.cyclic.app/MenShoes?_page=${page}&_limit=8&_sort=price&_order=${sort}`
      );
      dispatch({ type: "SET_DATA", payload: data });
      dispatch({ type: "SET_LOADING", payload: false });
      let limit = 8;
      let totalData = 160;

      setTotalPages(totalData / limit);
      console.log(totalPages);
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error });
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
  useEffect(() => {
    fetchData();
  }, [sort, page]);

  // `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats?breed=${breed}`

  // const handleFilter = (e) => {
  //   //console.log(e.target.value);
  //   setCategory(e.target.value);
  //   dispatch({ type: "SET_LOADING", payload: true });
  //   axios
  //     .get(`https://sore-pink-giraffe-cuff.cyclic.app/MenShoes`)
  //     .then((data) => {
  //       //console.log(data);
  //       dispatch({ type: "SET_DATA", payload: data.data });
  //       dispatch({ type: "SET_LOADING", payload: false });
  //     })
  //     .catch((err) => {
  //       dispatch({ type: "SET_ERROR", payload: err });
  //       dispatch({ type: "SET_LOADING", payload: false });
  //     });
  // };

  function handleAddtoCart(item) {
    addToCart(item);
  }
  function handleAddtoWishlist(item) {
    addToWishlist(item);
  }
  function handlePageChange(page) {
    setPage(page);
  }

  return (
    <div>
      <NavBar />
      <Simple />
      <Flex>
        <SideFilter />
        <VStack>
          <TopFilterPanel sort={sort} setSort={setSort} />
          {/* <UserCard
        float
        href="https://github.com/nukeop"
        header="https://i.imgur.com/vRAtM3i.jpg"
        avatar="https://i.imgur.com/XJxqvsU.jpg"
        name="Frank Hepsfield"
        positionName="Software Engineering Manager"
      /> */}

          {state.isLoading ? (
            <Spinner />
          ) : (
            <SimpleGrid className="main_container" columns={4} spacing={10}>
              {state.data?.map((el) => {
                return (
                  <RouterLink to={`/products/${el.id}`}>
                    <Box
                      className="catsDetails"
                      key={el.id}
                      maxW="xs"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                    >
                      <Center>
                        <Img src={el.image} boxSize="xs" alt={el.name} />
                      </Center>

                      <VStack spacing={2} p={2}>
                        <Text
                          className="name"
                          fontSize={"20px"}
                          fontWeight="bold"
                          objectFit="cover"
                        >
                          Product Name:{el.title}
                        </Text>
                        <Text className="brand">Brand:{el.brand}</Text>
                        <Text className="cost">Price:{el.price}</Text>
                        <Text className="rating">rating:{el.ratings}</Text>
                        <Text className="discount">Discount:{el.discount}</Text>
                        {el.description ? (
                          <Text className="description">
                            Description:{el.description}
                          </Text>
                        ) : (
                          ""
                        )}

                        <Button
                          className="AddToCart"
                          colorScheme={"red"}
                          onClick={() => handleAddtoCart(el)}
                        >
                          Add to Cart
                        </Button>
                        <Button
                          className="AddToWishlist"
                          colorScheme={"red"}
                          onClick={() => handleAddtoWishlist(el)}
                        >
                          Add to Wishlist
                        </Button>
                      </VStack>
                    </Box>
                  </RouterLink>
                );
              })}
            </SimpleGrid>
          )}

          <Pagination
            handlePageChange={handlePageChange}
            currentPage={page}
            totalPages={totalPages}
          />
        </VStack>
      </Flex>
      <LargeWithNewsletter />
    </div>
  );
}
