import React from "react";

const Input = (props) => {
  return (
    <div className=''>
      <label htmlFor={props.input.id}>
        <b>{props.label}</b>
      </label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
