import React from "react";
import NavBar from "../Layout/NavBar";
import Simple from "../Components/HomePageComponents/SelectionBanner";
import CaptionCarousel from "../Components/HomePageComponents/CarauselHandicraft";
import LargeWithNewsletter from "../Layout/Footer";
import { Crousel2 } from "../Components/HomePageComponents/Carausel2";
import { CrouselTry } from "../Components/HomePageComponents/CarauselTry";
import Carausel3 from "../Components/HomePageComponents/Carausel3";
import CarauselHandicraft from "../Components/HomePageComponents/CarauselHandicraft";
import StaticImageBanner from "../Components/HomePageComponents/ImageBanner";
import SimpleImage from "../Components/HomePageComponents/SimpleImages";
import { PopularDestinationComponent } from "../Components/HomePageComponents/PopularDestinationBanner.jsx";
import FashionBannerComponent from "../Components/HomePageComponents/FashionBanner";
import SellerStaticBanner from "../Components/HomePageComponents/SellerStaticBanner";
import AvailableBrandsComponent from "./../Components/HomePageComponents/AvailableBrands";
import SellerInformationComponent from "../Components/HomePageComponents/SellerStepsInformation";
import VideoPlayerComponent from "../Components/HomePageComponents/VideoPlayer";
import CategoryHeading from "./../Components/HomePageComponents/CategoryHeading";
import DividerLine from "../Components/HomePageComponents/DividerLine";

import "@fontsource/kaushan-script/400.css";
import "@fontsource/titillium-web/600.css";

import styles from "./Home.module.css"; // Import the CSS module

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div style={{ padding: "1.2rem" }}>
        <div className={styles.section}>
          <CrouselTry />
        </div>
        <CategoryHeading text={"Handcrafted And Antiques"} />
        <div className={styles.section}>
          <Crousel2 />
        </div>
        <div className={styles.section}>
          <Carausel3 />
        </div>
        <div className={styles.section}>
          <SimpleImage />
        </div>
        <div className={styles.section}>
          <CarauselHandicraft />
        </div>
        <CategoryHeading text={"Digital World"} />
        <PopularDestinationComponent />
        <div className={styles.section}>
          <StaticImageBanner />
        </div>
        <div className={styles.section}>
          <CategoryHeading text={"Brand Bonanza"} />
        </div>
        <div className={styles.section}>
          <FashionBannerComponent />
        </div>
        <div className={styles.section}>
          <VideoPlayerComponent />
        </div>
        <div className={styles.section}>
          <AvailableBrandsComponent />
        </div>
        <CategoryHeading text={"Join us to sell everywhere !"} />
        <div className={styles.section}>
          <SellerStaticBanner />
        </div>
        <CategoryHeading text={"Simple steps to sell on TownHall"} />
        <div className={styles.section}>
          <SellerInformationComponent />
        </div>
        <div className={styles.section}>
          <LargeWithNewsletter />
        </div>
      </div>
    </div>
  );
}
