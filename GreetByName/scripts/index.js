"use strict";

window.onload = init;

function init() {
  const greetBtn = document.getElementById("greetBtn");
  greetBtn.onclick = onGreetBtnClick;
}

function onGreetBtnClick() {
  const nameField = document.getElementById("nameField");
  const userName = nameField.value;
  alert(`Hello, ${userName}!`);
}
