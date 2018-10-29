import React from "react";
import PropTypes from "prop-types";

const Stats = props => {
  const { totalPlayers, totalScore } = props;
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers.length}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  totalPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number
    })
  ),
  totalScore: PropTypes.number
};

export default Stats;
