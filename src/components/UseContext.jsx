import React from "react";
import { useTheme } from "./ThemeContext";

export default function UseContextHook() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <h1 className="font-bold text-xl text-black dark:text-white underline">
          useContext
        </h1>
        <p className="text-black dark:text-white">
          Acceso a datos globales sin prop drilling
        </p>
      </div>

      <div className="w-full max-w-2xl p-6 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="font-bold text-lg text-black dark:text-white mb-3">
          ¿Cómo funciona useContext?
        </h2>

        <div className="space-y-4 text-black dark:text-white">
          <p>
            <span className="font-bold">useContext</span> permite consumir datos
            de un Context Provider sin necesidad de pasar props a través de
            componentes intermedios.
          </p>

          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-md">
            <h3 className="font-bold mb-2">Pasos para usar Context:</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                Crear un contexto con <code>createContext()</code>
              </li>
              <li>Crear un Provider que envuelva la aplicación</li>
              <li>
                Consumir el contexto con <code>useContext()</code>
              </li>
            </ol>
          </div>

          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-md">
            <h3 className="font-bold mb-2">Ventajas:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Evita el "prop drilling" (pasar props en cascada)</li>
              <li>Centraliza el estado global de la aplicación</li>
              <li>Facilita compartir datos entre componentes distantes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800">
        <h2 className="font-bold text-lg text-black dark:text-white mb-4">
          Demostración con ThemeContext
        </h2>

        <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
          <p className="text-black dark:text-white mb-2">
            Tema actual: <span className="font-bold">{theme}</span>
          </p>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={toggleTheme}
          >
            Cambiar tema
          </button>
        </div>

        <div className="p-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-md">
          <h3 className="font-bold text-black dark:text-white mb-2">
            Código de ejemplo:
          </h3>
          <pre className="bg-gray-200 dark:bg-gray-900 p-3 rounded-md overflow-x-auto text-sm">
            <code className="text-black dark:text-white">
              {`// En un componente:
import { useTheme } from "./ThemeContext";

function MiComponente() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Tema actual: {theme}</p>
      <button onClick={toggleTheme}>
        Cambiar tema
      </button>
    </div>
  );
}`}
            </code>
          </pre>
        </div>
      </div>

      <div className="w-full max-w-2xl mt-6 p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800">
        <h2 className="font-bold text-lg text-black dark:text-white mb-4">
          Flujo de datos con Context
        </h2>

        <div className="relative py-8">
          <div className="p-4 border-2 border-blue-500 rounded-lg mb-6">
            <p className="font-bold text-center text-black dark:text-white">
              ThemeProvider
            </p>
            <p className="text-center text-sm text-black dark:text-white">
              Almacena: <code>{`{ theme: "${theme}", toggleTheme: fn }`}</code>
            </p>
          </div>

          <div className="absolute left-1/2 -ml-0.5 w-1 h-8 bg-blue-500"></div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border border-green-500 rounded-lg">
              <p className="font-bold text-center text-black dark:text-white">
                NavBar
              </p>
              <p className="text-center text-sm text-black dark:text-white">
                <code>useTheme()</code>
              </p>
            </div>
            <div className="p-3 border border-green-500 rounded-lg">
              <p className="font-bold text-center text-black dark:text-white">
                UseContextHook
              </p>
              <p className="text-center text-sm text-black dark:text-white">
                <code>useTheme()</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
