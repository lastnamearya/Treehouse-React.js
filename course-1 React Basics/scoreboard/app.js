const Header = props => {
  let { title, totalPlayers } = props;
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers(5)}</span>
    </header>
  );
};

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">Guil</span>
      <Counter />
    </div>
  );
};

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">35</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={n => n + 5} />
      <Player />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
