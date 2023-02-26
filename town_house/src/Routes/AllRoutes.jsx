import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./../Pages/Home";
import Login from "./../Pages/Login";
import Cart from "./../Pages/Cart";
import Product from "./../Pages/Product";
import Restraunt from "./../Pages/Restraunt";
import Wishlist from "./../Pages/Wishlist";
import NotFound from "./../Pages/NotFound";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Cart" element={<Cart />}></Route>
      <Route path="/Product" element={<Product />}></Route>
      <Route path="/Restraunt" element={<Restraunt />}></Route>
      <Route path="/Wishlist" element={<Wishlist />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
