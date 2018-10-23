// function Header() {
//   return (
//     <header>
//       <h1>Scoreboard</h1>
//       <span className="stats">Players: 1</span>
//     </header>
//   );
// }

// Implicit Return with Arrow Functional Component ~ When we only returning some JSX within the component.

const Header = () => (
  <header>
    <h1>Scoreboard</h1>
    <span className="stats">Players: 1</span>
  </header>
);

ReactDOM.render(<Header />, document.getElementById("root"));
