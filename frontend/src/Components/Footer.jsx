import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  HStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";
import webisiteLogo from "../Assets/Website-Logo/testLogo7.jpg";
const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"blackAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box bg={"#ffff"} color={"gray.700"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={10}
        zIndex={"999"}
        sx={{
          position: "-webkit-sticky",
          /* Safari */ position: "sticky",
          top: "0",
        }}
        fontFamily="Arial Narrow Bold"
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Link>
                <HStack>
                  <Link>
                    {/* <Text style={{ fontSize: "1.2rem", fontStyle: "bold" }}>
                <span style={{ color: "#e72b76" }}>T</span>own
                <span style={{ color: "#e72b76" }}>H</span>all
              </Text> */}
                    <Image src={webisiteLogo} w="50%"></Image>
                    {/* <Text style={{ fontSize: "1.2rem", fontStyle: "bold" }}>
                <span style={{ color: "#e72b76" }}>M</span>arketplace
              </Text> */}
                  </Link>
                </HStack>
              </Link>
            </Box>
            <Text fontSize={"sm"}>
              © 2023 TownHall by Tathagat. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={2} textAlign="center">
              <Box display={"flex"} justifyContent="space-evenly" w={"30vw"}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              </Box>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Satus</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"} color="black">
              <Input
                variant="flushed"
                borderColor="black"
                focusable="true"
                placeholder={"Your email address"}
                bg={"whiteAlpha.100"}
                border={0}
              />
              <IconButton
                bg={"purple.400"}
                color={"black"}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
