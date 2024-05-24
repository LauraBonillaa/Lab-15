document.addEventListener('DOMContentLoaded', function() {
  const tareas = TodoManager.getTodos();
  mostrarTareas();

  function mostrarTareas() {
      const contenedorTareas = document.getElementById("contenedorTareas");
      contenedorTareas.innerHTML = "";

      tareas.forEach((tarea, index) => {
          const tareaElemento = document.createElement("div");
          tareaElemento.classList.add("tarea");

          if (!tarea.completada) {
              tareaElemento.textContent = `${index + 1}. ${tarea.descripcion}`;
          } else {
              tareaElemento.textContent = tarea.descripcion;
          }

          tareaElemento.addEventListener("click", () => {
              tarea.completada = !tarea.completada;
              TodoManager.updateTodo(index, tarea.completada);
              mostrarTareas();
          });

          if (tarea.completada) {
              tareaElemento.classList.add("completada");
          }

          contenedorTareas.appendChild(tareaElemento);
      });

      actualizarResumen();
  }

  function actualizarResumen() {
      const tareasNoCompletadas = tareas.filter(tarea => !tarea.completada).length;
      const tareasCompletadas = tareas.length - tareasNoCompletadas;

      document.getElementById("totalPorHacer").textContent = tareasNoCompletadas;
      document.getElementById("tareasCompletadas").textContent = tareasCompletadas;
  }
});
