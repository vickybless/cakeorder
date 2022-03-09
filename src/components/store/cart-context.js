import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  //Helps us to update the context or better(cart)
  addItem: (Item) => {},
  removeItem: (id) => {},
});

export default CartContext;
