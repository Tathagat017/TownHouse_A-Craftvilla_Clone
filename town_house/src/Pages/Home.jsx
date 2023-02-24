import React from "react";
import NavBar from "./../Components/NavBar";
import Simple from "../Components/SelectionBanner";
import CaptionCarousel from "./../Components/Carausel";
import LargeWithNewsletter from "./../Components/Footer";
import Carousel from "./../Components/Carausel2";
export default function Home() {
  return (
    <>
      <NavBar />
      <Simple />
      <CaptionCarousel />
      <Carousel />
      <LargeWithNewsletter />
    </>
  );
}
