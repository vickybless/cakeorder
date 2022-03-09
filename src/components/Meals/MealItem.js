import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CartContext from "../store/cart-context";

import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <Col>
      <Card className=' p-2 shadow bg-light rounded'>
        <Card.Img variant='top' src={props.imagePath} />
        <Card.Body>
          <Card.Title>{props.description}</Card.Title>
          <Card.Title>{props.name}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <Card.Text>
            <MealItemForm onAddToCart={addToCartHandler} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MealItem;
