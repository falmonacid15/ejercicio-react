import React, { useState, useMemo } from "react";

export default function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [inputNumber, setInputNumber] = useState(20);

  // Expensive calculation - will be memoized with useMemo
  const calculateFactorial = (num) => {
    console.log("Calculating factorial...");
    if (num < 0) return "Error: Negative number";
    if (num > 20) return "Error: Number too large";
    if (num === 0) return 1;

    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  // Using useMemo to memoize the factorial calculation
  const factorial = useMemo(() => {
    return calculateFactorial(inputNumber);
  }, [inputNumber]);

  // Not using useMemo - will recalculate on every render
  const factorialWithoutMemo = calculateFactorial(inputNumber);

  // Simple value that changes with count
  const countMessage = useMemo(() => {
    console.log("Calculating count message...");
    return `Current count: ${count}`;
  }, [count]);

  return (
    <div
      className={`w-full flex flex-col items-center ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center mb-4">
        <h1 className="font-bold text-xl text-black dark:text-white underline">
          useMemo
        </h1>
        <p className="text-black dark:text-white">
          Memoización de valores calculados
        </p>
      </div>

      {/* Explanation section */}
      <div className="w-full max-w-2xl p-6 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="font-bold text-lg text-black dark:text-white mb-3">
          ¿Cómo funciona useMemo?
        </h2>

        <div className="space-y-4 text-black dark:text-white">
          <p>
            <span className="font-bold">useMemo</span> permite memorizar el
            resultado de un cálculo costoso para evitar recalcularlo en cada
            renderizado.
          </p>

          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-md">
            <h3 className="font-bold mb-2">Sintaxis:</h3>
            <code>
              {`const memoizedValue = useMemo(() => computeExpensiveValue(a, b),
              [a, b]);`}
            </code>
          </div>

          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-md">
            <h3 className="font-bold mb-2">Cuándo usar useMemo:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Para cálculos costosos</li>
              <li>Para evitar re-renderizados innecesarios</li>
              <li>Para mantener la referencia de objetos estable</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Demo section */}
      <div className="w-full max-w-2xl p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800">
        <h2 className="font-bold text-lg text-black dark:text-white mb-4">
          Demostración de useMemo
        </h2>

        <div className="mb-4">
          <label className="block text-black dark:text-white mb-2">
            Número para calcular factorial:
          </label>
          <input
            type="number"
            value={inputNumber}
            onChange={(e) => setInputNumber(parseInt(e.target.value) || 0)}
            className="p-2 border rounded w-full text-black"
            min="0"
            max="20"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-green-100 dark:bg-green-900 rounded-md">
            <h3 className="font-bold text-black dark:text-white mb-2">
              Con useMemo:
            </h3>
            <p className="text-black dark:text-white">
              Factorial de {inputNumber}:{" "}
              <span className="font-bold">{factorial}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Solo se recalcula cuando cambia inputNumber
            </p>
          </div>

          <div className="p-4 bg-red-100 dark:bg-red-900 rounded-md">
            <h3 className="font-bold text-black dark:text-white mb-2">
              Sin useMemo:
            </h3>
            <p className="text-black dark:text-white">
              Factorial de {inputNumber}:{" "}
              <span className="font-bold">{factorialWithoutMemo}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Se recalcula en cada renderizado
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-black dark:text-white mb-2">{countMessage}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setCount(count + 1)}
            >
              Incrementar contador
            </button>
          </div>

          <div>
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setDarkMode(!darkMode)}
            >
              Cambiar tema
            </button>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              (Causa re-renderizado pero no recalcula el factorial memoizado)
            </p>
          </div>
        </div>
      </div>

      {/* Performance visualization */}
      <div className="w-full max-w-2xl mt-6 p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800">
        <h2 className="font-bold text-lg text-black dark:text-white mb-4">
          Visualización de rendimiento
        </h2>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
          <p className="text-black dark:text-white mb-3">
            Abre la consola del navegador para ver cuándo se ejecuta el cálculo
            del factorial. Observa que:
          </p>
          <ul className="list-disc pl-5 text-black dark:text-white space-y-2">
            <li>Al cambiar el número, ambas versiones recalculan</li>
            <li>
              Al cambiar el contador o el tema, solo la versión sin useMemo
              recalcula
            </li>
            <li>
              El mensaje del contador solo se recalcula cuando cambia el
              contador
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
