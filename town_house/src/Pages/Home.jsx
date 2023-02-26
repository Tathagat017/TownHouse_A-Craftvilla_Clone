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
    <>
      <NavBar />
      <Simple />
      {/* <Carousel />*/}
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
      <StaticImageBanner />
      <br></br>
      <SimpleImage />
      <br></br>
      <LargeWithNewsletter />
    </>
  );
}
