import { Menu } from './menu.js';
import { View } from './view.js';
import { Model } from './model.js';

document.addEventListener('DOMContentLoaded', (event) => {
  const menu = new Menu();
  const model = new  Model();
  const view = new View();

  menu.setMenu();
  model.setView(view);
  view.setModel(model);
  view.render(model.todos);
});
