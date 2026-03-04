import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  ["/", "Home"],
  ["/games", "Games"],
  ["/games/easy", "Easy"],
  ["/games/normal", "Normal"],
  ["/rules", "Rules"],
  ["/scores", "High Scores"],
  ["/login", "Login"],
  ["/register", "Register"],
];

function NavBar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        Sudoku Master
      </NavLink>
      <nav>
        <ul className="nav-list">
          {navItems.map(([to, label]) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
