//componente que use useState (guarda cada tarea, permite agregar
//completar y eliminar y usa un contador de tareas manual)
import { useState } from "react";
import Encabezado from "./components/Encabezado";
import Tarea from "./components/Tarea";
import "./App.css";

function App() {

  // aqui guardo lo que escribo
  const [nombre, setNombre] = useState("");

  // aqui guardo todas mis tareas
  const [tareas, setTareas] = useState([
    { id: 1, nombre: "Estudiar React", completada: false },
    { id: 2, nombre: "Hacer mi tarea", completada: false }
  ]);

  // aqui guardo el numero del contador
  const [contador, setContador] = useState(0);

  // esta funcion agrega una tarea nueva
  function agregarTarea() {

    // verifico que el campo no este vacio
    if (nombre.trim() === "") {
      alert("Escribe una tarea");
      return;
    }

    // creo una nueva tarea
    const nuevaTarea = {
      id: crypto.randomUUID(),
      nombre: nombre.trim(),
      completada: false
    };

    // agrego la tarea a mi lista
    setTareas(lista => [...lista, nuevaTarea]);

    // limpio el campo
    setNombre("");
  }

  // cambio la tarea a completada o pendiente
  function completarTarea(id) {

    setTareas(lista =>
      lista.map(tarea =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  }

  // elimino una tarea de mi lista
  function eliminarTarea(id) {

    setTareas(lista =>
      lista.filter(tarea => tarea.id !== id)
    );
  }

  return (
    <main>

      {/* muestro el encabezado */}
      <Encabezado />

      {/* aqui escribo mis tareas */}
      <section>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <button onClick={agregarTarea}>
          Agregar tarea
        </button>
      </section>

      <h2>Lista de tareas</h2>

      {/* muestro las tareas de mi lista */}
      {tareas.length === 0 ? (

        <p>No tienes tareas en tu lista.</p>

      ) : (

        //Utilicé .map() para recorrer mi arreglo de tareas y mostrar 
        // cada una en la pantalla y cuando agrego una nueva tarea, 
        // automáticamente aparece en la lista sin tener que escribir 
        // otro elemento manualmente en el código.
        <ul>
          {tareas.map(tarea => (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              completar={completarTarea}
              eliminar={eliminarTarea}
            />
          ))}
        </ul>

      )}

      {/* aqui muestro mi contador */}
      <div className="contador">

        <h2>Contador de tareas</h2>

        {/* muestro el numero */}
        <p>{contador}</p>

        {/* aumento el contador */}
        <button onClick={() => setContador(contador + 1)}>
          +
        </button>

        {/* disminuyo el contador */}
        <button onClick={() => setContador(contador - 1)}>
          -
        </button>

      </div>

    </main>
  );
}

export default App;
