import React, { Component } from "react";
import blackHole from "./black-hole.svg";
import spark from "./fire.svg";
import "./Sparky.css";

export default class Sparky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      face: null
    };
  }

  render() {
    let face;
    switch (this.props.stage) {
      case "Beginning":
        face = blackHole;
        break;
      case "Life":
        face = spark;
        break;
      default:
        face = blackHole;
        break;
    }


    return (
      <div className="sparky-container">
        <h5 className="sparky-dialogue">{this.props.dialogue}</h5>
        <img src={face} className="black-hole" alt="chaos" />

     </div>
    );
  }
}
