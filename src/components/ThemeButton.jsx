import { useState, useEffect } from "react";

export default function ThemeButton() {
  // Enables dark mode
  const [darkMode, setDarkMode] = useState(false);

  // This will grab the current theme from the user on mount
  useEffect(() => {
    const theme = localStorage.getItem("data-theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("data-theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="fancyBtn px-2 cursor-pointer text-2xl mr-6"
      onClick={() => setDarkMode(!darkMode)}
    >
      {" "}
      {darkMode ? (
        <i className="fa-regular fa-sun text-white"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </div>
  );
}
