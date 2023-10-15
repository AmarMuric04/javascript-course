const todolist = [];

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  let name = inputElement.value;
  todolist.push(name);
  console.log(todolist);

  inputElement.value = " ";
}
function onEnter(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}

function addTodoTwo() {}
