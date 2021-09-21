export class Model {
  constructor () {
    this.view = null;
    this.todos = [];
    this.currentId = 1;
  }

  setView = (view) => {
    this.view = view;
  }

  addTodo = (description) => {
    const todo = {
      description,
      id: this.currentId++,
      completed: false,
    };

    this.todos.push(todo);
    console.log(this.todos);
  }
}
