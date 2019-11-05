import React from "react";

const Button = props => {
  return props.show ? (
    <div>
      <button onClick={props.onClick} type="submit">
        {props.text}
      </button>
    </div>
  ) : null;
};

export default Button;
