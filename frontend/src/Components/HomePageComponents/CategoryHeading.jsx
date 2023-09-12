import React from "react";

const CategoryHeading = ({ text }) => {
  return (
    <h1
      style={{
        fontFamily: "Titillium Web",
        fontSize: "1.3rem",
        listStyle: "inside",
        marginBottom: "2%",
        fontStyle: "Bold",
        backgroundColor: "#ffff",
      }}
    >
      {text}
    </h1>
  );
};
export default CategoryHeading;
