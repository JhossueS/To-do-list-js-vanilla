export class Buttons {

  button(type, className, title) {
    const btn = document.createElement('button');
    btn.type = type;
    btn.classList.add(className[0], className[1],  className[2]);
    btn.innerHTML += title;

    return btn;
  }
}