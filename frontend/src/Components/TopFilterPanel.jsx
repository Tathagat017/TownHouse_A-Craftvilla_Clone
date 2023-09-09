import React from "react";

import { Button, ButtonGroup } from "@chakra-ui/react";
export default function TopFilterPanel({ sort, setSort }) {
  return (
    <div
      className="sortingButtons"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
        margin: "auto",
        marginTop: "0px",
      }}
    >
      <Button
        className="sortByCostAsc"
        // isDisabled={sort == "asc"}
        //onClick={}
        m={2}
        variant="ghost"
        _hover={{ bgColor: "yellow.300" }}
        isDisabled={sort == "asc"}
        onClick={() => setSort("asc")}
      >
        Price Low to High
      </Button>
      <Button
        className="sortByCostDesc"
        m={2}
        isDisabled={sort == "desc"}
        onClick={() => setSort("desc")}
        variant="ghost"
        _hover={{ bgColor: "yellow.300" }}
      >
        Price High to Low
      </Button>
      <Button
        className="sortByCostDesc"
        m={2}
        // isDisabled={sort == "desc"}
        //onClick={}
        variant="ghost"
        _hover={{ bgColor: "yellow.300" }}
      >
        Discount
      </Button>
    </div>
  );
}
