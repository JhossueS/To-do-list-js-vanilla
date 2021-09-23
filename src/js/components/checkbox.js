export class Checkbox {
  createCheckbox = (todo) => {
    // options checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    return checkbox;
  }

}
