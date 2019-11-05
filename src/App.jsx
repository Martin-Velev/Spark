import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sparky from "./components/Sparky/Sparky";
import Progress from "./components/Progress/Progress";
import Button from "./components/Button/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Create Life",
      percentage: 0,
      showProgress: false,
      interval: null,
      stage: "Beginning",
      loading: false
    };
  }

  handleButtonClick = () => {
    console.log("Button click");

    switch (this.state.stage) {
      case "Beginning":
        if (!this.state.loading) {
          this.createLife();
        } else {
          this.cancelLife();
        }
    }
  };

  createLife = () => {
    this.setState({
      buttonText: "Cancel",
      showProgress: true,
      loading: true
    });
    this.startLoop(2000);
  };

  cancelLife = () => {
    clearInterval(this.state.interval);
    this.setState({
      buttonText: "CreateLife",
      showProgress: true,
      interval: null,
      loading: false,
      percentage: 0
    });
  };

  startLoop = duration => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      this.setState({
        percentage: i
      });
      if (i >= 100) {
        clearInterval(this.state.interval);
        this.setState({ interval: null });
        return;
      }
    }, duration / 100);
    this.setState({ interval });

    // for (let i = 0; i < 100; i++) {
    //   console.log("in loop");
    //   setTimeout(2, () => {
    //     console.log("in time loop");
    //     this.setState({
    //       percentage: i
    //     });
    //   });
    // }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Sparky />

          <br />
          <Progress
            show={this.state.showProgress}
            percentage={this.state.percentage}
          />
          <Button
            onClick={this.handleButtonClick}
            text={this.state.buttonText}
          />
        </header>
      </div>
    );
  }
}

export default App;
