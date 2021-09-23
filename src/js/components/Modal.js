export class Modal {
  constructor (container, children) {
    this.container = document.querySelector(`.${container}`);
    this.children = document.querySelector(`.${children}`)
  }

  show(className) {
    this.container.classList.add(className);
    this.children.classList.add(className);
  }

  hide(className) {
    this.container.classList.remove(className);
    this.children.classList.remove(className);
  }
}
