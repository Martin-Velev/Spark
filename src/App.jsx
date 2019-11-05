import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sparky from "./components/Sparky/Sparky";
import Button from "./components/Button/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Create Life"
    };
  }

  handleButtonClick = () => {
    console.log("Button click");
    this.setState({
      buttonText: "Cancel"
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Sparky />

          <br />
          <Button onClick={this.handleButtonClick} text={this.state.buttonText} />
        </header>
      </div>
    );
  }
}

export default App;
