import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <Col>
      <Card className=' p-2 shadow bg-light rounded'>
        <Card.Img variant='top' src={props.imagePath} />
        <Card.Body>
          <Card.Title>{props.description}</Card.Title>
          <Card.Title>{props.name}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <Card.Text>
            <MealItemForm />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MealItem;
