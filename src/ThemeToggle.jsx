import React from "react";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button onClick={toggleDarkTheme} className="btn">
        {isDarkTheme ? (
          <IoMdSunny className="toggle-icon" />
        ) : (
          <FaMoon className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
