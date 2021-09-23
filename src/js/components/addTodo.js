import { Modal } from "./Modal.js";

export class AddTodo {
  constructor() {
    this.btnAdd = document.querySelector("#button-add");
    this.inputTask = document.querySelector("#input-text");
    this.modal = new Modal("modal__container", "modal__container--alert");
    this.btnClose = document.querySelector(".modal__container--button");
    this.closeAlert();
  }

  onclick = (cb) => {
    this.btnAdd.onclick = () => {
      if (this.inputTask.value === "") {
        this.modal.show("alert");
        return;
      }

      cb(this.inputTask.value);
    };
  };

  closeAlert = () => {
    this.btnClose.onclick = () => {
      this.modal.hide('alert')
    };
  };
}
