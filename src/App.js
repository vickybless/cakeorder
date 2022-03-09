import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Availablecakes from "./components/Meals/Availablecakes";
import CartProvider from "./components/store/CartProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Availablecakes />
    </CartProvider>
  );
}

export default App;
