import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className=''>
      <label htmlFor={props.input.id}>
        <b>{props.label}</b>
      </label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
