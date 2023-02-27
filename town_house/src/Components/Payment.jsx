import React, { useState } from "react";
import { PaymentCard } from "react-ui-cards";
import NavBar from "./NavBar";
import LargeWithNewsletter from "./Footer";
import { Button } from "@chakra-ui/button";
export default function Payment() {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
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
        <Button>Proceed to purchase</Button>
      </div>

      <LargeWithNewsletter />
    </>
  );
}
