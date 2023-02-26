import React from "react";
import { UserCard } from "react-ui-cards";
import SideFilter from "../Components/SideFilter";
export default function Product({ category }) {
  return (
    <>
      {/* <SideFilter /> */}

      <UserCard
        float
        href="https://github.com/nukeop"
        header="https://i.imgur.com/vRAtM3i.jpg"
        avatar="https://i.imgur.com/XJxqvsU.jpg"
        name="Frank Hepsfield"
        positionName="Software Engineering Manager"
      />
    </>
  );
}
