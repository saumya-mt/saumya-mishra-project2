import React from "react";
const scores = [
  ["SudokuMaster99", 247],
  ["NumberNinja", 198],
  ["PuzzlePro", 176],
  ["LogicLover", 154],
  ["GridGuru", 142],
];

function ScoresPage() {
  return (
    <section className="page card">
      <h1>High Scores</h1>
      <table className="scores-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Sudokus Solved</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(([name, solved], index) => (
            <tr key={name}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{solved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ScoresPage;
