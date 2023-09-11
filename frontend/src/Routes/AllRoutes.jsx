import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./../Pages/Home";
import Login from "./../Pages/User/UserLogin";
import Cart from "../Pages/User/UserCart";
import Product from "./../Pages/Product";
import Restraunt from "./../Pages/Restraunt";
import Wishlist from "../Pages/User/UserWishlist";
import NotFound from "./../Pages/NotFound";
import NewUser from "../Pages/User/UserRegisteration";
import PrivateRoute from "./PrivateRoute";
import SingleProduct from "./../Pages/SingleProduct";
import Payment from "../Components/Payment";
import SellerRegisterationComponent from "../Pages/Seller/SellerRegistration";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route
        path="/Cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/products" element={<Product />}></Route>
      <Route
        path="/seller/register"
        element={<SellerRegisterationComponent />}
      ></Route>
      <Route path="/Restraunt" element={<Restraunt />}></Route>
      <Route
        path="/Wishlist"
        element={
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/products/:id" element={<SingleProduct />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="newUser" element={<NewUser />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
    </Routes>
  );
};
