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
import { PopularDestinationComponent } from "./../Components/PopularDestinationBanner.jsx";
import FashionBannerComponent from "./../Components/FashionBanner";
import SellerStaticBanner from "./../Components/SellerStaticBanner";
import AvailableBrandsComponent from "./../Components/AvailableBrands";

import SellerInformationComponent from "./../Components/SellerStepsInformation";

import "@fontsource/kaushan-script/400.css";
import "@fontsource/titillium-web/600.css";
export default function Home() {
  return (
    <div style={{ background: "#e5e7e9", textAlign: "center" }}>
      <NavBar />
      {/* <Simple /> */}
      {/* <Carousel />*/}
      <div style={{ padding: "1.2rem" }}>
        <CrouselTry />
        <br></br>
        <h1
          style={{
            fontFamily: "Titillium Web",
            fontSize: "1.3rem",
            listStyle: "inside",
            fontStyle: "Bold",
            backgroundColor: "white",
          }}
        >
          Handcrafted Categories
        </h1>
        <br></br>
        <Crousel2 />
        <br></br>
        <Carausel3 />
        <br></br>
        <SimpleImage />
        <br></br>
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
          Digital World
        </h1>
        <PopularDestinationComponent />
        <br></br>
        <StaticImageBanner />
        <br></br>
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
          Fashion Finale
        </h1>
        <FashionBannerComponent />
        <br></br>
        <AvailableBrandsComponent />
        <SellerStaticBanner />
        <SellerInformationComponent />
        <br></br>
        <LargeWithNewsletter />
      </div>
    </div>
  );
}
