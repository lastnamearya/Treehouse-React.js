import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = props => {
  const { title, totalPlayers, totalPoints } = props;
  return (
    <header>
      <Stats totalPlayers={totalPlayers} totalScore={totalPoints} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;
