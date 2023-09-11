import React from "react";
import NavBar from "../Layout/NavBar";
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
import VideoPlayerComponent from "./../Components/VideoPlayer";
import "@fontsource/kaushan-script/400.css";
import "@fontsource/titillium-web/600.css";
export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        // backgroundColor: "#ffffff",
        // backgroundImage: "linear-gradient(180deg, #67dffa 0%, #B721FF 100%)",

        backgroundColor: "#FA8BFF",
        backgroundImage:
          "linear-gradient(225deg, #FA8BFF 0%, #3decf8 52%, #2BFF88 90%)",
      }}
    >
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
          Brand Bonanza
        </h1>
        <FashionBannerComponent />
        <br></br>
        <VideoPlayerComponent />
        <br></br>
        <AvailableBrandsComponent />
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
          How TownHall Marketplace works?
        </h1>
        <SellerStaticBanner />
        <br></br>

        <SellerInformationComponent />
        <br></br>
        <LargeWithNewsletter />
      </div>
    </div>
  );
}
