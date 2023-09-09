import React from "react";
import { createContext, useState } from "react";
import Wishlist from "./../Pages/Wishlist";

export const cartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (obj) => {
    setCart([...cart, obj]);
  };

  function addToWishlist(obj) {
    setWishlist([...wishlist, obj]);
  }

  return (
    <cartContext.Provider value={{ addToCart, addToWishlist, cart, wishlist }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
