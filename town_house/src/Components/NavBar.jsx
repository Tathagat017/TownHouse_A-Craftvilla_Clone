import {
  Box,
  Flex,
  IconButton,
  Image,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import GetLocation from "./GeoLocation";

const NavBar = () => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const iconSize = isSmallScreen ? "sm" : "md";
  const imageSize = isSmallScreen ? "70px" : "100px";

  return (
    <Flex
      alignItems="center"
      p={[1, 2, 2, 2]}
      overflow="visible"
      fontSize={["sm", "sm", "xs", "xs"]}
      lineHeight={[6, 5, 5, 5]}
      letterSpacing="wide"
      backgroundColor="aliceblue"
      border={0}
      borderRadius={0}
      opacity={0.81}
      boxShadow=" rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;"
      flexDirection="row"
      color="#000000"
      bgGradient="linear(to top, purple.300,whiteAlpha.900,yellow.200)"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <RouterLink to="/">
        <Image
          height={imageSize}
          width={imageSize}
          borderRadius={"25%"}
          display="inline-block"
          mr={5}
          opacity={1}
          src="logo.jpg"
          ml={0}
          margin="auto"
        />
      </RouterLink>
      <Box
        width={["100%", "100%", "auto", "auto"]} // adjust width for different screen sizes
        mt={[2, 2, 0, 0]}
        mr={[2, 2, 1, 1]}
        ml={[4, 4, 4, 4]}
        mb={[2, 2, 0, 0]}
      >
        <Flex flex={1} justifyContent="center" mt={[2, 0]} mb={[2, 0]}>
          <Input
            variant="filled"
            width="100%"
            placeholder="Search Town House"
            size={["sm", "md", "md", "md"]}
            display="flex"
            mr={[0, 0, 2, 2]}
            color="purple.500"
          />
          <IconButton
            aria-label="icon"
            icon={<SearchIcon />}
            size={iconSize}
            variant="ghost"
            border={0}
            borderRadius={5}
            ml={isSmallScreen ? "-30px" : "-50px"}
            colorScheme="gray"
          />
        </Flex>
      </Box>
      <Flex flex={4} mt={[2, 0]} mb={[2, 0]}>
        {/* <IconButton
          aria-label="icon"
          icon={<GetLocation />}
          size="md"
          variant="ghost"
        /> */}
        {/* GEO LOCATION IS BELOW */}
        {/* <GetLocation /> */}
        {/* <GetLocation /> */}
      </Flex>
      <Flex justifyContent="flex-end" flex={1} mt={[2, 0]} mb={[2, 0]}>
        <RouterLink to="/Wishlist">
          <IconButton
            aria-label="icon"
            icon={<Image src="GoldenCart1.jpg" w="56px" borderRadius="50%" />}
            size={iconSize}
            variant="ghost"
            mr={[8, 4, 2, 2]}
          />
        </RouterLink>
        <RouterLink to="/Cart">
          <IconButton
            aria-label="icon"
            icon={
              <Image
                src="GoldenCart.jpg"
                w="58px"
                h="50px"
                borderRadius="50%"
              />
            }
            size={iconSize}
            variant="ghost"
            borderRadius="50%"
            // mr={[0, 0, 2, 2]}
            mr={[8, 4, 2, 2]}
          />
        </RouterLink>
        <RouterLink to="/Login">
          <IconButton
            aria-label="icon"
            // icon={<AvatarWithRipple />}
            icon={
              <Image src="GoldenLogin4.jpg" w="56px" borderRadius="50%"></Image>
            }
            size={iconSize}
            variant="ghost"
            borderRadius="50%"
            mr={[8, 4, 2, 2]}
          />
        </RouterLink>
      </Flex>
    </Flex>
  );
};

export default NavBar;
