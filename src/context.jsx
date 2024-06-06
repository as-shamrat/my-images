import { useContext, useState, useEffect, createContext } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};
const initialDarkTheme = () => {
  const prefersDarkTheme = window.matchMedia(
    "(prefers-color-scheme:dark"
  ).matches;
  const savedDarkTheme = localStorage.getItem("dark");
  if (savedDarkTheme === null) {
    return prefersDarkTheme;
  }
  return savedDarkTheme === "true";
};
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(initialDarkTheme());
  const [searchTerm, setSearchTerm] = useState("cat");
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("dark", newDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkTheme);
  };
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, []);
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
