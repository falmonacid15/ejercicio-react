# ¿Que es react?

React es una librería de JavaScript para crear interfaces de usuario basadas en componentes reutilizables.

# ¿Que es un componente?

Un componente es una pieza de código que representa una parte de la interfaz de usuario.

# Características de react

- Componentes reutilizables
- Virtual DOM (Document Object Model) para optimizar el rendimiento
- JSX (JavaScript XML) para escribir código html es un archivo js.
- Estados y props para manejar datos.
- Hooks para manejar estados y ciclos de vida.

# Hooks mas comunes

- useState = manejar estados.

  const [contador, setContador] = useState();

* contador = estado
* setContador = función para actualizar el estado.

- useEffect = manejar ciclos de vida.

  useEffect(() => {
  // código a ejecutar
  }, [// dependencias])

- useReducer = manejar estados complejos.

const [state, dispatch] = useReducer(reducer, initialState);
reducer = función que con acciones para manipular el estado.

- useRef = manejar referencias a elementos del DOM.
  const ref = useRef();

- useContext = manejar estados globales.
