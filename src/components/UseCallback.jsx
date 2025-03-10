import React, { useState, useCallback, useEffect, memo } from "react";

const Button = memo(({ handleClick, name }) => {
  console.log(`${name} button rendered`);
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      onClick={handleClick}
    >
      {name}
    </button>
  );
});

export default function UseCallbackHook() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const [renderCount, setRenderCount] = useState({
    withCallback: 0,
    withoutCallback: 0,
  });

  const incrementWithCallback = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const incrementWithoutCallback = () => {
    setOtherCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    setRenderCount((prev) => ({
      ...prev,
      withCallback: prev.withCallback + 1,
    }));
  }, [incrementWithCallback]);

  useEffect(() => {
    setRenderCount((prev) => ({
      ...prev,
      withoutCallback: prev.withoutCallback + 1,
    }));
  }, [incrementWithoutCallback]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <h1 className="font-bold text-xl text-black dark:text-white underline">
          useCallback
        </h1>
        <p className="text-black dark:text-white">Memorización de funciones</p>
      </div>

      <div className="w-full max-w-2xl p-6 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="font-bold text-lg text-black dark:text-white mb-3">
          ¿Cómo funciona useCallback?
        </h2>

        <div className="space-y-4 text-black dark:text-white">
          <p>
            <span className="font-bold">useCallback</span> memoriza una función
            para evitar que se vuelva a crear en cada renderizado, mejorando el
            rendimiento.
          </p>

          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-md">
            <h3 className="font-bold mb-2">Sintaxis:</h3>
            <code>{`const memoizedCallback = useCallback(() => {{ doSomething(a, b) }}, [a, b]);`}</code>
          </div>

          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-md">
            <h3 className="font-bold mb-2">Cuándo usar useCallback:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Cuando pasas funciones a componentes hijos optimizados (memo)
              </li>
              <li>Para evitar recrear funciones en cada renderizado</li>
              <li>Cuando la función es una dependencia de otros hooks</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800">
        <h2 className="font-bold text-lg text-black dark:text-white mb-4">
          Demostración de useCallback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 bg-green-100 dark:bg-green-900 rounded-md">
            <h3 className="font-bold text-black dark:text-white mb-2">
              Con useCallback:
            </h3>
            <p className="text-black dark:text-white mb-3">
              Contador: <span className="font-bold">{count}</span>
            </p>
            <Button
              handleClick={incrementWithCallback}
              name="Incrementar (con useCallback)"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Función recreada:{" "}
              <span className="font-bold">{renderCount.withCallback}</span>{" "}
              veces
            </p>
          </div>

          <div className="p-4 bg-red-100 dark:bg-red-900 rounded-md">
            <h3 className="font-bold text-black dark:text-white mb-2">
              Sin useCallback:
            </h3>
            <p className="text-black dark:text-white mb-3">
              Contador: <span className="font-bold">{otherCount}</span>
            </p>
            <Button
              handleClick={incrementWithoutCallback}
              name="Incrementar (sin useCallback)"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Función recreada:{" "}
              <span className="font-bold">{renderCount.withoutCallback}</span>{" "}
              veces
            </p>
          </div>
        </div>

        <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-md">
          <h3 className="font-bold text-black dark:text-white mb-2">
            Forzar re-renderizado del componente padre:
          </h3>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setRenderCount((prev) => ({ ...prev }))}
          >
            Re-renderizar componente
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Observa en la consola qué botones se vuelven a renderizar
          </p>
        </div>
      </div>

      <div className="w-full max-w-2xl mt-6 p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800">
        <h2 className="font-bold text-lg text-black dark:text-white mb-4">
          useCallback vs useMemo
        </h2>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
          <table className="w-full text-black dark:text-white">
            <thead>
              <tr>
                <th className="text-left p-2 border-b">Hook</th>
                <th className="text-left p-2 border-b">Memoriza</th>
                <th className="text-left p-2 border-b">Uso principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b">useCallback</td>
                <td className="p-2 border-b">Funciones</td>
                <td className="p-2 border-b">Evitar recrear funciones</td>
              </tr>
              <tr>
                <td className="p-2">useMemo</td>
                <td className="p-2">Valores calculados</td>
                <td className="p-2">Evitar recálculos costosos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
