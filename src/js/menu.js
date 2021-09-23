export class Menu {
  constructor () {
    this.menu = document.querySelectorAll('.nav-container--li');
    this.id = 9999;
  }

  setMenu = () => {
    this.menu.forEach((e) => {
      e.setAttribute('id', this.id++);
      e.addEventListener('click', () => {
        this.menuDisable(e.attributes[1]);
      });
    });
  }

  menuDisable = (id) => {
    this.menu.forEach((e) => {
      id === e.attributes[1]
      ? e.classList.add('active')
      : e.classList.remove('active');
    });
  }
}
