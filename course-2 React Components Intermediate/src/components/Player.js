import React, { PureComponent } from "react";
import Counter from "./Counter";

class Player extends PureComponent {
  render() {
    const { name, score, index, changeScore } = this.props;

    console.log(`${name} is rendered`);

    return (
      <div className="player">
        <span className="player-name">
          <button
            className="remove-player"
            onClick={() => this.props.removePlayer(this.props.id)}
          >
            ✖
          </button>
          {name}
        </span>

        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
