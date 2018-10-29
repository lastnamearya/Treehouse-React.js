import React, { Component } from "react";

export default class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedtime: 0,
    previousTime: 0
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        previousTime: now,
        elapsedtime: prevState.elapsedtime + (now - prevState.previousTime)
      }));
    }
  };

  handleReset = () => {
    this.setState({
      elapsedtime: 0
    });
  };

  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  render() {
    const seconds = Math.floor(this.state.elapsedtime / 1000);

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? "STOP" : "START"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
