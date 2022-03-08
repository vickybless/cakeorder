import React from "react";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  return (
    <form>
      <Input
        label='Amount '
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className=' m-2 bg-danger rounded shadow'>+ Add TO CART</button>
    </form>
  );
};

export default MealItemForm;
