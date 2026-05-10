import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("buildwise_theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("buildwise_theme", darkMode ? "dark" : "light");
    document.body.style.background = darkMode ? "#0f172a" : "#eef4f8";
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}