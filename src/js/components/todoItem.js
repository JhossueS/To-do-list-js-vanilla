export class TodoItem {

  createTodoItem = (todo) => {
    // created item container
    const todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("listodo-container--item");
    // set attribute
    todoItemContainer.setAttribute("id", todo.id);
    todoItemContainer.innerHTML += `
      <div class="item-container__checkbox">
      </div>
      <p id="id-${todo.id}">${todo.description}</p>
      <div class="item-container__buttons">
      </div>
    `;

    return todoItemContainer;
  }
}