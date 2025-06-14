import { useState } from "react";
import themeManager from "./ThemeManagerClass";

export default function ToggleTheme() {
  // console.log(themeManager.getTheme());

  const [theme, setTheme] = useState(themeManager.getTheme());

  function toggleTheme() {
    const newTheme = themeManager.getTheme() == "dark" ? "light" : "dark";
    setTheme(newTheme);
    themeManager.setTheme(newTheme);
  }

  return (
    <div
      className={`defaultFullWidthContainer themeManager applyBorder ${
        theme == "light" ? "lightTheme" : "darkTheme"
      }`}
    >
      <h5>Current Theme : {themeManager.getTheme()}</h5>
      <button
        onClick={toggleTheme}
        className={`themeToggleButton ${
          theme == "light" ? "lightTheme" : "darkTheme"
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
}
