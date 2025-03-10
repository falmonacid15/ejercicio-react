import React, { useState } from "react";

export default function UseStateHook() {
  const [contador, setContador] = useState(0);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const [person, setPerson] = useState({
    name: "User",
    age: 25,
  });

  const handleNameChange = (e) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const handleAgeChange = (e) => {
    setPerson({
      ...person,
      age: parseInt(e.target.value) || 0,
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <h1 className="font-bold text-xl text-black dark:text-white underline">
          useState
        </h1>
        <p className="text-black dark:text-white">manejar estados</p>
      </div>

      <div className="w-full max-w-2xl p-4 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="font-bold text-lg text-black dark:text-white mb-2">
          ¿Cómo funciona useState?
        </h2>
        <p className="text-sm text-black dark:text-white mb-3">
          useState devuelve un array con dos elementos:
        </p>
        <ol className="list-decimal pl-5 text-sm text-black dark:text-white">
          <li className="mb-1">El valor actual del estado</li>
          <li className="mb-1">Una función para actualizar ese estado</li>
        </ol>
        <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-900 rounded text-sm">
          <code className="text-black dark:text-white">
            const [valor, setValor] = useState(valorInicial);
          </code>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <div className="flex flex-col p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <h2 className="font-bold text-lg text-black dark:text-white mb-2">
            Ejemplo: Contador
          </h2>
          <h3 className="text-xl text-black dark:text-white mb-2">
            Contador: {contador}
          </h3>
          <div className="flex space-x-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setContador(contador + 1)}
            >
              Incrementar
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setContador(contador - 1)}
            >
              Decrementar
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setContador(0)}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="flex flex-col p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <h2 className="font-bold text-lg text-black dark:text-white mb-2">
            Ejemplo: Texto
          </h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe algo..."
            className="p-2 border rounded mb-2 text-black"
          />
          <p className="text-black dark:text-white">
            Texto ingresado:{" "}
            <span className="font-bold">{text || "(vacío)"}</span>
          </p>
        </div>

        <div className="flex flex-col p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <h2 className="font-bold text-lg text-black dark:text-white mb-2">
            Ejemplo: Valor booleano
          </h2>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "Ocultar" : "Mostrar"} contenido
          </button>
          {isVisible && (
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded">
              <p className="text-black dark:text-white">
                ¡Este contenido es controlado por useState!
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <h2 className="font-bold text-lg text-black dark:text-white mb-2">
            Ejemplo: Objeto
          </h2>
          <div className="mb-2">
            <label className="block text-sm text-black dark:text-white mb-1">
              Nombre:
            </label>
            <input
              type="text"
              value={person.name}
              onChange={handleNameChange}
              className="p-2 border rounded w-full text-black"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm text-black dark:text-white mb-1">
              Edad:
            </label>
            <input
              type="number"
              value={person.age}
              onChange={handleAgeChange}
              className="p-2 border rounded w-full text-black"
            />
          </div>
          <div className="mt-2 p-2 bg-green-100 dark:bg-green-900 rounded">
            <p className="text-black dark:text-white">
              Persona: {person.name}, {person.age} años
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
