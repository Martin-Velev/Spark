import React from "react";
import "./Progress.css";

const Progress = props => {
  return props.show ? (
    <div className="progress-bar">
      <Filler percentage={props.percentage} />
    </div>
  ) : null;
};

const Filler = props => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

export default Progress;
