import React from "react";
import styles from "./ImageBanner.css";
export default function StaticImageBanner() {
  return (
    <div
      className="ImageBanner"
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "20vh",
        textAlign: "center",
        paddingTop: "1.5%",
        paddingBottom: "1.5%",
        cursor: "pointer",
      }}
    >
      <img
        src="homeStaticPic.jpg"
        style={{
          display: "block",
          cursor: "pointer",
          width: "100%",
          height: "100%",
        }}
      ></img>
    </div>
  );
}
