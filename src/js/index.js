import { Menu } from './menu.js';

document.addEventListener('DOMContentLoaded', (event) => {
  console.log(event);

  const menu = new Menu();
  menu.setMenu();
})