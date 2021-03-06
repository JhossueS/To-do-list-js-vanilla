import { Model } from "./model.js";
import { AddTodo } from "./components/addTodo.js";
import { TodoItem } from "./components/todoItem.js";
import { Checkbox } from "./components/checkbox.js";
import { Buttons } from "./components/buttons.js";
import { Modal } from "./components/Modal.js";

export class View {
  constructor() {
    this.model = null;
    this.buttons = new Buttons();
    this.addTodoForm = new AddTodo();
    this.todoItem = new TodoItem();
    this.checkboxs = new Checkbox();
    this.modal = new Modal('modal__container', 'modal__container--edit');
    this.container = document.querySelector(".main-listodo--container");
    this.addTodoForm.onclick((description) => this.addTodo(description));
    this.removeAllTodos();
  }

  setModel = () => {
    this.model = new Model();
    this.btnAll = document.getElementById('9999');
    this.btnActive = document.getElementById('10000')
    this.btnCompleted = document.getElementById('10001');

    this.btnAll.onclick = () => {
      this.container.innerHTML = '';
      this.model.todos.map((todo) => {
        this.createTodo(todo);
      });
    }

    this.btnActive.onclick = () => {
      const activatedTodos = this.model.activatedTodos();
      this.container.innerHTML = '';
      activatedTodos.map((todo) => {
        this.createTodo(todo);
      })
    }

    this.btnCompleted.onclick = () => {
      const completedTodos = this.model.completedTodos();
      this.container.innerHTML = ''
      completedTodos.map((todo) => {
        this.createTodo(todo);
        this.model.toggleClass(todo, 'task-completed');
      });
    }
  }

  addTodo = (description) => {
    const todo = this.model.addTodo(description);
    this.createTodo(todo);
  }

  render = (todos) => {
    todos.map((todo) => {
      this.createTodo(todo);
      // toggle class
      this.model.toggleClass(todo, 'task-completed');
    });
  }

  createTodo = (todo) => {
    const todoContainer = this.todoItem.createTodoItem(todo);
    // creates checkbox
    const checkbox = this.checkboxs.createCheckbox(todo);
    checkbox.onclick = () => {
      this.handleTodoCompleted(todo.id);
    }

    // add checkbox the tree DOM
    todoContainer.children[0].appendChild(checkbox);

    // creates buttons
    const btnEdit = this.buttons.button("button", ["button__edit"], "Edit");
    const btnRemove = this.buttons.button(
      "button",
      ["material-icons", "md-36", "button__delete"],
      "delete_outline"
    );

    // add buttons the tree DOM
    todoContainer.children[2].appendChild(btnEdit);
    todoContainer.children[2].appendChild(btnRemove);

    btnRemove.onclick = () => {
      this.handleTodoRemove(todo.id);
    };

    btnEdit.onclick = () => {
      this.openModal(todo.id);
    };

    // render created todo
    this.container.append(todoContainer);
  }

  handleTodoCompleted = (id) => {
    this.model.toggleTodo(id);
  }

  handleTodoRemove = (id) => {
    this.model.removeTodo(id);
    document.getElementById(id).remove();
  }

  openModal = (id) => {
    this.modal.show('active');
    const btnCloseModal = document.querySelector('#closed');
    btnCloseModal.onclick = () => {
      this.closeModal();
    }

    const btnEditTodo = document.querySelector('.edit');
    const inputTodo = document.querySelector('.edit-todo');
    const descriptionTodo = document.querySelector(`#id-${id}`);
    inputTodo.value = descriptionTodo.textContent;
    btnEditTodo.onclick = () => {
      this.model.editTodo(id, inputTodo.value);
      descriptionTodo.textContent = inputTodo.value;
      this.closeModal();
    }
  }

  removeAllTodos = () => {
    const btnRemove = document.getElementById('remove--todos');
    btnRemove.onclick = () => {
      this.model.removeAllTodos();
      this.container.innerHTML = '';
    }
  }

  closeModal () {
    this.modal.hide('active');
  }
}
