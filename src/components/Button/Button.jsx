import React from "react";

const Button = props => {
  return (
    <div>
      <button onClick={props.onClick} type="submit">{props.text}</button>
    </div>
  );
};

export default Button;
