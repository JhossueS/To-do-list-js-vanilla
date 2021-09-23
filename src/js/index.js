import { Menu } from './menu.js';
import { View } from './view.js';
import { Model } from './model.js';

document.addEventListener('DOMContentLoaded', (event) => {
  const menu = new Menu();
  const model = new  Model();
  const view = new View();

  model.setView(view);
  view.setModel(model);
  menu.setMenu();
  view.render();
});
