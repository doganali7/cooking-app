import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { color, changeColor } = useTheme();

  return (
    <div className="navbar" style={{ backgroundColor: color }}>
      <nav onClick={() => changeColor("black")}>
        <Link to="/" className="brand">
          <h1>Cooking App</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
