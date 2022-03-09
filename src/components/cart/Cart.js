import react, { useContext } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <Modal.Dialog onClose={props.onClose}>
        {cartItems}
        <Modal.Header closeButton onClick={props.onClose}>
          <Modal.Title>Total Amount</Modal.Title>
          <Modal.Title>{totalAmount}</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onClose}>
            Close
          </Button>
          {hasItems && (
            <Button Button variant='primary'>
              Order
            </Button>
          )}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Cart;
