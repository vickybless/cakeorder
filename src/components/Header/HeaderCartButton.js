import React from "react";
import CartIcon from "../cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className='bg-secondary'>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span></span>
    </button>
  );
};

export default HeaderCartButton;
