import React from "react";
import { useTheme } from "./ThemeContext";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="flex justify-evenly sticky p-2 bg-slate-200 dark:bg-slate-900 text-black dark:text-white">
      <h1>Manejo de estado global con un context</h1>
      <div>
        <h1>Tema actual: {theme}</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleTheme}
        >
          Cambiar tema
        </button>
      </div>
    </nav>
  );
}
