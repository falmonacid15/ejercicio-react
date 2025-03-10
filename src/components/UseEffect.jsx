import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [contador, setContador] = useState(0);
  const [effectLog, setEffectLog] = useState([]);

  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    // agrega el nuevo log al principio del array de logs cuando cambia el contador
    const newLog = `Efecto ejecutado a las ${timestamp} - contador: ${contador}`;
    setEffectLog((prev) => [newLog, ...prev].slice(0, 5));
  }, [contador]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <h1 className="font-bold text-xl text-black dark:text-white underline">
          useEffect
        </h1>
        <p className="text-black dark:text-white">
          ejecutar codigo cuando cambia un estado
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl text-black dark:text-white">
          Contador: {contador}
        </h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
          onClick={() => setContador(contador + 1)}
        >
          Incrementar
        </button>

        <div className="mt-6 w-full max-w-md border border-gray-300 rounded-md p-4 bg-gray-100 dark:bg-gray-800">
          <h2 className="font-bold text-black dark:text-white mb-2">
            useEffect Log:
          </h2>
          {effectLog.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 italic">
              No hay logs disponibles.
            </p>
          ) : (
            <ul className="list-disc pl-5">
              {effectLog.map((log, index) => (
                <li
                  key={index}
                  className="text-sm text-black dark:text-white mb-1"
                >
                  {log}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-3 p-2 bg-yellow-100 dark:bg-yellow-900 rounded text-sm">
            <p className="text-black dark:text-white">
              <span className="font-bold">Como funciona:</span> El hook
              useEffect se ejecuta cada vez que cambia el contador, y este crea
              un log en la lista.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
