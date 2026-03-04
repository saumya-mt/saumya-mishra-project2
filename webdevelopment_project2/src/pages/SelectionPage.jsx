import React from "react";
import { Link } from "react-router-dom";

const games = [
  { title: "Starter Grid", author: "Saumya Mishra", to: "/games/easy" },
  { title: "Logic Sprint", author: "Jordan Lee", to: "/games/easy" },
  { title: "Classic Challenge", author: "Avery Patel", to: "/games/normal" },
  { title: "Mind Bender", author: "Riley Kim", to: "/games/normal" },
];

function SelectionPage() {
  return (
    <section className="page card">
      <h1>Game Selection</h1>
      <ul className="game-list">
        {games.map((game) => (
          <li key={`${game.title}-${game.author}`}>
            <Link to={game.to} className="game-link">
              <span>{game.title}</span>
              <small>by {game.author}</small>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SelectionPage;
