import React from "react";
import { useState } from "react";
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form>
        <label>
          <span>Recipe Title:</span>
        </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        ></input>
      </form>
    </div>
  );
}
