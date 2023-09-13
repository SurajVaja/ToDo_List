let todo = [];
let isEdit = "";

let second = document.getElementById("second");
let btn = document.getElementById("add");
let inputBox = document.getElementById("input");

let mapping = () => {
  second.innerHTML = " ";
  todo.forEach((item, index) => {
    second.innerHTML += `<div class="tex">
    <div class="tex-first"><h5>${item}</h5></div>
    <div class="tex-second">
      <button type="button" class="btn btn-info grn" onclick='editToDo(${index})'>Edit</button>
      <button type="button" class="btn btn-info blu" onclick='deleteToDo(${index})'>X</button>
    </div>
  </div>`;
  });
};

let addToDo = () => {
  if (isEdit != "") {
    let editId = Number(isEdit);
    let newText = inputBox.value;

    for (let i = 0; i < todo.length; i++) {
      if (i == editId) {
        todo[i] = newText;
        break;
      }
    }

    mapping();
    inputBox.value = "";
    btn.innerHTML = "Add";
  } else {
    let text = inputBox.value;
    if (text != "") {
      todo.push(text);
      mapping();
      inputBox.value = "";
    } else {
      alert("Plese Enter some value");
    }
  }
};
btn.addEventListener("click", addToDo);

let deleteToDo = (id) => {
  let filteredArr = todo.filter((item, index) => index != id);
  todo = filteredArr;
  mapping();
};

let editToDo = (id) => {
  isEdit = String(id);
  btn.innerHTML = "Update";
  let text = todo.find((item, index) => index == id);
  inputBox.value = text;
  inputBox.focus();
};
