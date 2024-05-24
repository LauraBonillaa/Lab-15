class Todo {
  constructor(descripcion, completada = false) {
      this.descripcion = descripcion;
      this.completada = completada;
  }
}

class TodoManager {
  static getTodos() {
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      return todos.map(todo => new Todo(todo.descripcion, todo.completada));
  }

  static saveTodos(todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  static addTodo(descripcion) {
      const todos = this.getTodos();
      todos.push(new Todo(descripcion));
      this.saveTodos(todos);
  }

  static updateTodo(index, completada) {
      const todos = this.getTodos();
      todos[index].completada = completada;
      this.saveTodos(todos);
  }
}

