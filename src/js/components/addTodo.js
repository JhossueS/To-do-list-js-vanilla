import { Alert } from "./alert.js";

export class AddTodo {
  constructor() {
    this.btnAdd = document.querySelector("#button-add");
    this.inputTask = document.querySelector("#input-text");
    this.Alert = new Alert("modal__container");
    this.btnClose = document.querySelector(".modal__container--button");
    this.closeAlert();
  }

  onclick = (cb) => {
    this.btnAdd.onclick = () => {
      if (this.inputTask.value === "") {
        this.Alert.show();
        return;
      }

      cb(this.inputTask.value);
    };
  };

  closeAlert = () => {
    this.btnClose.onclick = () => {
      this.Alert.hide();
    };
  };
}
