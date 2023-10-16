const todolist = ["make dinner", "wash dishes"];
todoList();

function todoList() {
  let todolistHTML = "";
  for (i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    const html = `<p>${todo}</p>`;
    todolistHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = `${todolistHTML}`;
}
function addTodo() {
  const inputElement = document.querySelector(".js-name-input").value;
  todolist.push(inputElement);

  inputElement.value = " ";
}
function onEnter(event) {
  if (event.key === "Enter") {
    addTodo();
  }
  todoList();
}

function addTodoTwo() {}
