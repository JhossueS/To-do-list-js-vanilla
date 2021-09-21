export class Alert {
  constructor(alert) {
    this.alert = document.querySelector(`.${alert}`);
  }

  show() {
    this.alert.classList.add("alert");
  }

  hide() {
    this.alert.classList.remove("alert");
  }
}
