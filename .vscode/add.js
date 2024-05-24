document.getElementById('addTodoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const newTodo = document.getElementById('newTodo').value;
  TodoManager.addTodo(newTodo);
  document.getElementById('message').textContent = 'TODO guardado correctamente';
  document.getElementById('newTodo').value = '';
});

