const players = [
  {
    name: "Guil",
    score: 50
  },
  {
    name: "Treasure",
    score: 85
  },
  {
    name: "Ashley",
    score: 95
  },
  {
    name: "James",
    score: 80
  },
  {
    name: "Chucha",
    score: 100
  }
];

const Header = props => {
  let { title, totalPlayers } = props;
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
};

const Player = props => {
  const { name, score } = props;
  return (
    <div className="player">
      <span className="player-name">{name}</span>
      <Counter score={score} />
    </div>
  );
};

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
  }

  incrementScore = () => {
    return this.setState(prevState => ({
      score: prevState.score + 1
    }));
  };

  decrementScore = () => {
    if (!this.state.score) {
      return;
    } else {
      return this.setState(prevState => ({
        score: prevState.score - 1
      }));
    }
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          {" "}
          -{" "}
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

const App = ({ list }) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={list.length} />

      {list.map(player => (
        <Player
          name={player.name}
          score={player.score}
          key={(player.score + 1).toString()}
        />
      ))}
    </div>
  );
};

ReactDOM.render(<App list={players} />, document.getElementById("root"));
