import React, { Component } from "react";
import blackHole from './black-hole.svg'
import './Sparky.css'

export default class Sparky extends Component {
  render() {
    return (
      <div class="sparky-container">
        <img src={blackHole} className="black-hole" alt="chaos" />
      </div>
    );
  }
}
