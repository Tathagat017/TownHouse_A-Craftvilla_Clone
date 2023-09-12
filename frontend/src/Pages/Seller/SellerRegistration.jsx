import React, { useState } from "react";

import SellerNavbar from "../../Components/SellerComponents/SellerNavbar";

import LargeWithNewsletter from "../../Layout/Footer";

import SellerRegistrationForm from "../../Components/SellerComponents/Registration/SellerRegistrationForm";

import SellerInfoGraphicsComponent from "../../Components/SellerComponents/Registration/SellerRegistrationInfoGraphics";

import { Box, FormControl, Flex, VStack } from "@chakra-ui/react";

import styles from "./SellerRegistration.module.css";

const SellerRegisterationComponent = () => {
  return (
    <>
      <SellerNavbar />
      <Flex
        flexWrap={{ base: "wrap", md: "nowrap" }}
        justifyContent="center"
        alignItems="center"
        p={{ base: 4, md: 8 }}
        className={styles.container}
      >
        <VStack flex={{ base: "1", md: "0.5" }} mr={{ base: 0, md: 8 }}>
          <SellerRegistrationForm />
        </VStack>
        <SellerInfoGraphicsComponent />
      </Flex>
      <LargeWithNewsletter />
    </>
  );
};

export default SellerRegisterationComponent;
