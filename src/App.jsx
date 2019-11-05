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
    const completionCallback = () => {
      clearInterval(this.state.interval);
      this.setState({
        stage: "Life",
        showProgress: false,
        loading: false
      });
    };
    this.startLoop(1000, completionCallback);
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

  startLoop = (duration, completionCallback) => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      this.setState({
        percentage: i
      });
      if (i >= 100) {
        clearInterval(interval)
        this.setState({ interval: null });
        completionCallback();
        return;
      }
    }, duration / 100);
    this.setState({ interval });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Sparky stage={this.state.stage} />

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
