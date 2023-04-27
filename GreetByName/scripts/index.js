"use strict";

window.onload = init;

function init() {
  const nameField = document.getElementById("nameField");
  let name = nameField.value;
}

function init() {
  const greetBtn = document.getElementById("greetBtn");
  greetBtn.onclick = onGreetBtnClick;
}

function onGreetBtnClick() {
  alert("Hello " + nameField.value + "!");
}
