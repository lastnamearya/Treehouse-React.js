import React, { Component } from "react";

export default class Stopwatch extends Component {
  state = {
    isRunning: false,
    time: 0
  };

  toggleButton = () => {
    this.setState(prevState => {
      return {
        isRunning: !prevState.isRunning
      };
    });
  };

  render() {
    var switchButton = this.state.isRunning ? "STOP" : "START";

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.time}</span>
        <button onClick={this.toggleButton}>{switchButton}</button>
        <button>Reset</button>
      </div>
    );
  }
}
