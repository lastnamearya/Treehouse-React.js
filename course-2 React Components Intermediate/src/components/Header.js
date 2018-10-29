import React from "react";
import PropTypes from "prop-types";
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

Header.propTypes = {
  title: PropTypes.string,
  totalPlayers: PropTypes.arrayOf(PropTypes.object),
  totalPoints: PropTypes.number
};

export default Header;
