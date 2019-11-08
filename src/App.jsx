import React, { Component } from "react";
import "./App.css";
import Sparky from "./components/Sparky/Sparky";
import Progress from "./components/Progress/Progress";
import Button from "./components/Button/Button";
import conversation from "./conversation";
import { getAllRecords } from "./database/neo4j";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Create Life",

      stage: "Beginning",

      percentage: 0,
      loading: false,
      interval: null,
      showProgress: false,
      loadingText: null,

      showButton: true,

      dialogue: null
    };
  }

  componentWillMount() {
    getAllRecords()
      .then(function(result) {
        result.records.forEach(record => {
          console.log(record.get("result"));
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleButtonClick = () => {
    switch (this.state.stage) {
      case "Beginning":
        if (!this.state.loading) {
          this.createLife();
        } else {
          this.cancelLife();
        }
        break;
      default:
      // DO nothingk
    }
  };

  createLife = () => {
    this.setState({
      buttonText: "Cancel",
      showProgress: true,
      loading: true,
      loadingText: "Creating Life"
    });
    const completionCallback = () => {
      clearInterval(this.state.interval);
      this.setState({
        stage: "Life",
        showProgress: false,
        showButton: false,
        loading: false,
        dialogue: conversation,
        loadingText: null
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
        clearInterval(interval);
        this.setState({ interval: null });
        completionCallback();
        return;
      }
    }, duration / 100);
    this.setState({ interval });
  };

  selectDialogueOption = option => {
    this.setState({
      dialogue: option
    });
  };

  render() {
    const { dialogue } = this.state;
    const options = dialogue
      ? dialogue.next.map(option => {
          return (
            <li
              onClick={event => this.selectDialogueOption(option)}
              className="sparky-list-item"
              key={option.player}
            >
              <h5 className="dialogue-options">{option.player}</h5>
            </li>
          );
        })
      : null;

    const dialogueTree = dialogue ? (
      <div className="dialogue-tree-container">
        <ol>{options}</ol>
      </div>
    ) : null;

    return (
      <div className="App">
        <header className="App-header">
          <Sparky
            dialogue={dialogue ? dialogue.sparky : null}
            stage={this.state.stage}
          />

          <br />
          <Progress
            text={this.state.loadingText}
            show={this.state.showProgress}
            percentage={this.state.percentage}
          />
          <Button
            show={this.state.showButton}
            onClick={this.handleButtonClick}
            text={this.state.buttonText}
          />

          {dialogueTree}
        </header>
      </div>
    );
  }
}

export default App;
