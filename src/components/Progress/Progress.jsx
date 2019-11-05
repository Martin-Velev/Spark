import React from "react";
import "./Progress.css";

const Progress = props => {
  return props.show ? (
    <div>
      <h5>{props.text}</h5>
      <div className="progress-bar">
        <Filler percentage={props.percentage} />
      </div>
    </div>
  ) : null;
};

const Filler = props => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

export default Progress;
