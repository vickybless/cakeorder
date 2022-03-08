import React from "react";
import Row from "react-bootstrap/Row";
import MealItem from "./MealItem";

const CAKES = [
  {
    imagePath: "img/pic1.jpg",
    id: "m1",
    name: "wedding cake",
    description: "Delicious and beautiful Tradition wedding cake",
    price: 60.99,
  },
  {
    imagePath: "img/pic6.jpg",
    id: "m2",
    name: "Birthday Cake",
    description: "Delicious and beautiful Birthday cake",
    price: 50.99,
  },
  {
    imagePath: "img/pic3.jpg",
    id: "m3",
    name: "small chops",
    description: "Delicious small chops for all occasions",
    price: 20.99,
  },
  {
    imagePath: "img/pic4.jpg",
    id: "m4",
    name: "Chin Chin",
    description: "Soft and tasty Chin Chin available in different sizes",
    price: 18.99,
  },
  {
    imagePath: "img/pic5.jpg",
    id: "m5",
    name: "Set of Delicacies",
    description:
      "This includes, cakes, jellof rice, fried rice, chicken and wine",
    price: 100.99,
  },
  {
    imagePath: "img/pic2.jpg",
    id: "m6",
    name: "assorted meals",
    description: "Celebrity dishes with assorted delicacies",
    price: 200.33,
  },
];

const Availablecakes = () => {
  const allCakes = CAKES.map((cake) => (
    <MealItem
      key={cake.id}
      id={cake.id}
      imagePath={cake.imagePath}
      name={cake.name}
      description={cake.description}
      price={cake.price}
    />
  ));
  return (
    <section className='container p-5'>
      <Row xs={1} md={2} className='g-5'>
        {allCakes}
      </Row>
    </section>
  );
};
export default Availablecakes;
