import React from "react";

import SellerNavbar from "../../Components/SellerComponents/SellerNavbar";
import LargeWithNewsletter from "../../Layout/Footer";
import SellerLoginForm from "../../Components/SellerComponents/Login/SellerLoginForm";

const SellerLoginComponent = () => {
  return (
    <>
      <SellerNavbar />
      <SellerLoginForm />
      <div style={{ border: "1px solid #5c5b5b30" }}></div>
      <LargeWithNewsletter />
    </>
  );
};

export default SellerLoginComponent;
