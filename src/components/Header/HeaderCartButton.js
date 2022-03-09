import React, { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import CartIcon from "../cart/CartIcon";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartitems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <Button className='bg-secondary rounded shadow' onClick={props.onClick}>
      <span>
        <CartIcon />
      </span>
      Your Cart <Badge>{numberOfCartitems}</Badge>
    </Button>
  );
};

export default HeaderCartButton;
