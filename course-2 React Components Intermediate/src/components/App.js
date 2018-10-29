import React from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0
      },
      {
        name: "Treasure",
        id: 2,
        score: 0
      },
      {
        name: "Ashley",
        id: 3,
        score: 0
      },
      {
        name: "James",
        id: 4,
        score: 0
      }
    ]
  };

  prevStateID = this.state.players.length;

  totalScore = () => {
    return this.state.players.reduce((total, player) => {
      return total + player.score;
    }, 0);
  };

  handleAddPlayer = name => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name: name,
          score: 0,
          id: (this.prevStateID += 1)
        }
      ]
    });
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      return {
        score: (prevState.players[index].score += delta)
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header
          totalPlayers={this.state.players}
          totalPoints={this.totalScore()}
        />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            index={index}
            key={player.id.toString()}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        ))}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
