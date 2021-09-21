import { Model } from "./model.js";
import { AddTodo } from "./components/addTodo.js";

export class View {
  constructor() {
    this.model = null
    this.addTodoForm = new AddTodo();
    this.addTodoForm.onclick((description) => this.addTodo(description));
  }

  setModel = () => {
    this.model = new Model;
  }

  addTodo = (description) => {
    const todo = this.model.addTodo(description);
  }

}
