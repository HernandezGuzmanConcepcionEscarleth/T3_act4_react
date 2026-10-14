# Actividad 4 Introducción a React - Fundamentos y Primer Componente.
---
## Hernández Guzmán Concepción Escarleth
## Programación Web
---
## Mini aplicación React + Vite
## Mi organizador de tareas escolares
---
## Descripción del proyecto

En esta actividad realicé mi primera aplicación utilizando React y Vite. Decidí crear una lista de tareas escolares porque es una herramienta sencilla que puedo utilizar para organizar mis actividades de la escuela.
Mi aplicación permite agregar tareas, marcarlas como completadas y eliminarlas. También muestra cuántas actividades he terminadoy las marcamos con un contador manualmente.

---
## Herramientas utilizadas

- React
- Vite
- JavaScript
- HTML y CSS
- Visual Studio Code
- GitHub
---
## Preguntas

**a) ¿Qué diferencia hay entre props y state en React?**

Las props sirven para enviar información de un componente a otro. Por ejemplo, en mi proyecto las utilicé para enviar los datos de cada tarea al componente Tarea. En cambio, el state permite guardar información que puede cambiar mientras utilizamos la aplicación.

**b) ¿Por qué es importante utilizar una key al mostrar una lista?**

Porque permite que React identifique cada elemento de una lista y sepa cuáles cambiaron, se agregaron o se eliminaron. En mi proyecto utilicé el ID de cada tarea como key.

**c) ¿Qué hace useState y dónde lo utilizaste?**

useState es una función de React que permite guardar y actualizar información dentro de un componente. Yo la utilicé para guardar las tareas y también para almacenar lo que escribo en el campo de texto. Cuando agrego o elimino una tarea, la lista se actualiza en la pantalla.

**d) Enlace de mi repositorio de GitHub**

https://github.com/HernandezGuzmanConcepcionEscarleth/T3_act4_react

**e) Enlace de mi proyecto en GitHub Pages**

https://hernandezguzmanconcepcionescarleth.github.io/T3_act4_react/

---
## Funcionalidades de mi aplicación

Mi aplicación cuenta con las siguientes funciones:

**Agregar tareas: permite escribir una actividad escolar y agregarla a la lista.**

**Marcar tareas como completadas: puedo seleccionar las actividades que ya terminé.**

**Eliminar tareas: permite quitar las tareas que ya no necesito.**

**Contador de tareas: muestra la cantidad de actividades que he completado y se hace manual.**

**Actualización de la lista: cuando agrego, elimino o completo una tarea, los cambios se muestran en la pantalla.**

---

## Componentes utilizados

Para realizar mi aplicación utilicé componentes de React, los cuales me ayudaron a organizar mejor el código.

App.jsx: es el componente principal de mi aplicación. Aquí se encuentra la estructura general y se controla la información de las tareas.

Tarea.jsx: es el componente que utilizo para mostrar cada tarea de la lista. Recibe información mediante props.

También utilicé useState para guardar las tareas y actualizar la información cuando realizo alguna acción.

## Proceso de elaboración

Primero creé mi proyecto utilizando React y Vite desde Visual Studio Code. Después organicé los archivos y comencé a modificar el componente principal.

Posteriormente agregué un campo de texto y un botón para registrar las tareas escolares. Después implementé las funciones para marcar las actividades como completadas y eliminarlas.

También utilicé useState para que los cambios se actualizaran en la pantalla y props para compartir información entre componentes.

---
## Captura 
<img width="2544" height="1342" alt="Captura de pantalla 2026-10-13 193757" src="https://github.com/user-attachments/assets/0ad0d6e7-a039-407e-9404-ebd94a8d03c7" />


Con esta actividad aprendí a crear un proyecto de React desde cero y a utilizar componentes para organizar mejor el código. También practiqué las props, los estados, los eventos y la creación de listas dinámicas. Al principio algunas cosas fueron nuevas para mí, pero al ir realizando cada parte pude comprender mejor cómo funciona React.
