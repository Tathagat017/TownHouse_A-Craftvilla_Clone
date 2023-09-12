import React, { useState } from "react";
import { PaymentCard } from "react-ui-cards";
import NavBar from "../Layout/NavBar";
import LargeWithNewsletter from "../Layout/Footer";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
export default function Payment() {
  const toast = useToast();
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [C, setC] = useState("");
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div>
          <input
            name="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Card Holder"
            width={"200px"}
            height={"10vh"}
            value={name}
          ></input>
          <input
            name="Name"
            type="number"
            onChange={(e) => setCard(e.target.value)}
            placeholder="Card Number"
            width={"200px"}
            value={card}
            height={"10vh"}
            border="2px solid"
          ></input>
          <input
            name="CVV"
            type="number"
            onChange={(e) => setC(e.target.value)}
            placeholder="CVV"
            width={"200px"}
            value={C}
            height={"10vh"}
            border="2px solid"
          ></input>
        </div>
        <PaymentCard
          issuerIcon="https://i.imgur.com/MulWZzk.png"
          backgroundPattern="spiral"
          number="4445 8509 0753 1365"
          date="12/18"
          name="Jean Pierre Polnareff"
          cvv="213"
          border="2px solid"
        />
        <RouterLink to="/">
          <Button
            onClick={() => {
              toast({
                title: "Order Placed",
                description: "Payment Successful",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            }}
          >
            Proceed to purchase
          </Button>
        </RouterLink>
      </div>

      <LargeWithNewsletter />
    </>
  );
}
