export class Model {
  constructor () {
    this.view = null;
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.currentId = 0;
  }

  setView = (view) => {
    this.view = view;
  }

  // index search on the todos array
  findIndex = (id) => {
    return this.todos.findIndex((todo) => todo.id === id);
  }

  // saved todo on localStorage
  saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toogleTodo = (id) => {
    const index = this.findIndex(id);
    // todo index
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    // toggle class
    this.toglleClass(todo, 'task-completed', id);

    this.saveTodos();
  }

  toglleClass(todo, className, id) {
    const description = document.querySelector(`#id-${id}`);
    todo.completed
      ? description.classList.add(className)
      : description.classList.remove(className);
  }

  // delete todo on todos array
  removeTodo = (id) => {
    const index = this.findIndex(id);
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  editTodo = (id, newValue) => {
    const index = this.findIndex(id);
    const todoEdited = {
      description: newValue,
      id,
      completed: false,
    };
    this.todos.splice(index, 1, todoEdited)
    console.log(this.todos);
    this.saveTodos();
  }

  // get last todo on array todos
  getLastArrId = (arr) => {
    return arr[arr.length - 1];
  }

  addTodo = (description) => {
    const lastId = this.getLastArrId(this.todos);
    const todo = {
      description,
      id: lastId?.id + 1 || 0,
      completed: false,
    };

    this.todos.push(todo);
    this.saveTodos();
    return {...todo}
  }
}
