const Header = props => {
  let { title, totalPlayers } = props;
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers(5)}</span>
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

const Counter = props => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={n => n + 5} />

      <Player name={"Guil"} score={50} />
      <Player name={"Treasure"} score={90} />
      <Player name={"Ashley"} score={85} />
      <Player name={"James"} score={80} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
