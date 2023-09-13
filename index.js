let todo = [];

let second = document.getElementById("second");
let btn = document.getElementById("add");
let inputBox = document.getElementById("input");

let mapping = () => {
  second.innerHTML = " ";
  todo.forEach((item) => {
    second.innerHTML += `<div class="tex">
    <div class="tex-first"><h5>${item}</h5></div>
    <div class="tex-second">
      <button type="button" class="btn btn-info grn">Edit</button>
      <button type="button" class="btn btn-info blu">X</button>
    </div>
  </div>`;
  });
};

let addToDo = () => {
  let text = inputBox.value;
  if (text != "") {
    todo.push(text);
    mapping();
    inputBox.value = "";
  } else {
    alert("Plese Enter some value");
  }
};
btn.addEventListener("click", addToDo);
