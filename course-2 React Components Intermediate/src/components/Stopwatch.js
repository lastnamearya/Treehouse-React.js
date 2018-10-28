import React, { Component } from "react";

export default class Stopwatch extends Component {
  state = {
    isRunning: false,
    time: 0
  };

  handleStopwatch = () => {
    this.setState({
      isRunning: !this.state.isRunning
    });
    if (!this.state.isRunning) {
      setInterval(this.tick, 1000);
    }
  };

  tick = () => {
    this.setState(prevState => {
      time: prevState.time += 1;
      console.log(this.state.time);
    });
  };

  reset = () => {
    this.setState({ time: 0 });
  };

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.time}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? "STOP" : "START"}
        </button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
