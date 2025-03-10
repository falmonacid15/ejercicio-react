import React, { useReducer } from "react";

// Define the reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "ADD":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export default function UseReducerHook() {
  // Inicializa el estado con el reducer y el estado inicial
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <h1 className="font-bold text-xl text-black dark:text-white underline">
          useReducer
        </h1>
        <p className="text-black dark:text-white">
          Manejo de estado complejo con acciones
        </p>
      </div>

      <div className="flex flex-col items-center p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800 max-w-md">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
          Contador: {state.count}
        </h2>

        <div className="flex space-x-2 mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Incrementar
          </button>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Decrementar
          </button>

          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reiniciar
          </button>
        </div>

        <div className="mt-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch({ type: "ADD", payload: 10 })}
          >
            Añadir 10
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md w-full">
          <h3 className="font-bold text-black dark:text-white mb-2">
            ¿Cómo funciona useReducer?
          </h3>
          <ul className="list-disc pl-5 text-sm text-black dark:text-white">
            <li className="mb-1">
              El <code>state</code> contiene los datos actuales
            </li>
            <li className="mb-1">
              El <code>dispatch</code> envía acciones al reducer
            </li>
            <li className="mb-1">
              El <code>reducer</code> determina cómo actualizar el estado basado
              en la acción
            </li>
            <li className="mb-1">
              Las acciones tienen un <code>type</code> y opcionalmente un{" "}
              <code>payload</code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
