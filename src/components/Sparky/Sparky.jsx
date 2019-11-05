import React, { Component } from "react";
import blackHole from "./black-hole.svg";
import "./Sparky.css";

export default class Sparky extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dialogue: null
    };
  }

  render() {
    return (
      <div class="sparky-container">
        <h5 class="sparky-dialogue">{this.state.dialogue}</h5>
        <img src={blackHole} className="black-hole" alt="chaos" />
      </div>
    );
  }
}
