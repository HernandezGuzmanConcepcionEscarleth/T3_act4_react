//componente que recibe props (recibe datos de cada tarea y 
// funciones de complentyar y eliminar)
function Tarea({ tarea, completar, eliminar }) {

  return (
    <li>

      {/* muestro el nombre de mi tarea */}
      <span
        style={{
          textDecoration: tarea.completada ? "line-through" : "none",
          color: tarea.completada ? "gray" : "black"
        }}
      >
        {tarea.nombre}
      </span>

      <div>

        {/* cambio el estado de mi tarea */}
        <button onClick={() => completar(tarea.id)}>
          {tarea.completada ? "Pendiente" : "Completar"}
        </button>

        {/* elimino la tarea seleccionada */}
        <button onClick={() => eliminar(tarea.id)}>
          Eliminar
        </button>

      </div>

    </li>
  );
}

export default Tarea;
