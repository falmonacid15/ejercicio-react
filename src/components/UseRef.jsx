import React, { useState, useRef, useEffect } from "react";

export default function UseRefHook() {
  const [count, setCount] = useState(0);

  const inputRef = useRef(null);
  const previousCountRef = useRef(null);
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
  });

  useEffect(() => {
    previousCountRef.current = count;
  }, [count]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const setInputValue = () => {
    inputRef.current.value = "Texto modificado con useRef";
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <h1 className="font-bold text-xl text-black dark:text-white underline">
          useRef
        </h1>
        <p className="text-black dark:text-white">
          Acceso a elementos DOM y persistencia entre renders
        </p>
      </div>

      <div className="w-full max-w-2xl p-4 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="font-bold text-lg text-black dark:text-white mb-2">
          ¿Cómo funciona useRef?
        </h2>
        <p className="text-sm text-black dark:text-white mb-3">
          useRef crea un objeto mutable que persiste durante toda la vida del
          componente. A diferencia de useState, cambiar el valor de .current no
          causa re-renders.
        </p>
        <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-900 rounded text-sm">
          <code className="text-black dark:text-white">
            const miRef = useRef(valorInicial);
          </code>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <div className="flex flex-col p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <h2 className="font-bold text-lg text-black dark:text-white mb-2">
            Ejemplo 1: Referencia a DOM
          </h2>
          <input
            ref={inputRef}
            type="text"
            placeholder="Input con referencia"
            className="p-2 border rounded mb-3 text-black"
          />
          <div className="flex space-x-2">
            <button
              onClick={focusInput}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Enfocar input
            </button>
            <button
              onClick={setInputValue}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Cambiar valor
            </button>
          </div>
        </div>

        <div className="flex flex-col p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <h2 className="font-bold text-lg text-black dark:text-white mb-2">
            Ejemplo 2: Persistencia de valores
          </h2>
          <div className="mb-3">
            <p className="text-black dark:text-white">
              Contador actual: <span className="font-bold">{count}</span>
            </p>
            <p className="text-black dark:text-white">
              Valor anterior:{" "}
              <span className="font-bold">{previousCountRef.current}</span>
            </p>
            <p className="text-black dark:text-white">
              Número de renders:{" "}
              <span className="font-bold">{renderCountRef.current}</span>
            </p>
          </div>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Incrementar contador
          </button>
        </div>

        <div className="flex flex-col p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 col-span-1 md:col-span-2">
          <h2 className="font-bold text-lg text-black dark:text-white mb-2">
            Ejemplo 3: Guardar intervalos/timeouts
          </h2>
          <TimerExample />
        </div>
      </div>
    </div>
  );
}

function TimerExample() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="mb-3">
        <p className="text-black dark:text-white text-xl font-bold">
          {seconds} segundos
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={startTimer}
          disabled={isRunning}
          className={`${
            isRunning ? "bg-gray-400" : "bg-green-500 hover:bg-green-700"
          } text-white font-bold py-2 px-4 rounded`}
        >
          Iniciar
        </button>
        <button
          onClick={stopTimer}
          disabled={!isRunning}
          className={`${
            !isRunning ? "bg-gray-400" : "bg-red-500 hover:bg-red-700"
          } text-white font-bold py-2 px-4 rounded`}
        >
          Detener
        </button>
        <button
          onClick={resetTimer}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
