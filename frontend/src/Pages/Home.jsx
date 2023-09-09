import React from "react";
import NavBar from "./../Components/NavBar";
import Simple from "../Components/SelectionBanner";
import CaptionCarousel from "./../Components/Carausel";
import LargeWithNewsletter from "./../Components/Footer";
import { Crousel2 } from "./../Components/Carausel2";
import { CrouselTry } from "./../Components/CarauselTry";
import Carausel3 from "../Components/Carausel3";
import StaticImageBanner from "./../Components/ImageBanner";
import SimpleImage from "./../Components/SimpleImages";
export default function Home() {
  return (
    <div style={{ background: "#f0f4f8" }}>
      <NavBar />
      {/* <Simple /> */}
      {/* <Carousel />*/}
      <div style={{ padding: "1.2rem" }}>
        <CrouselTry />
        <br></br>
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.3rem",
            listStyle: "inside",
          }}
        >
          Shop By Category
        </h1>
        <br></br>
        <Crousel2 />
        <br></br>
        <Carausel3 />

        <br></br>
        <SimpleImage />
        <StaticImageBanner />
        <br></br>

        <LargeWithNewsletter />
      </div>
    </div>
  );
}
