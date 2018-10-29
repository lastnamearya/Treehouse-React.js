import React, { PureComponent } from "react";
import Counter from "./Counter";

class Player extends PureComponent {
  render() {
    const { name, id, score, index, changeScore, removePlayer } = this.props;

    console.log(`${name} is rendered`);

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
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
