import React from "react";
import "./ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assests/mode-icon.svg";

const themeColors = ["#58249c", "#249c6b", "#b70233"];

function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode, "mode");

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeIcon}
          alt="Theme Selector"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
