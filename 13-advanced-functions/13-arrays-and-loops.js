const todoList = JSON.parse(localStorage.getItem("todo"));
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  localStorage.setItem("todo", JSON.stringify(todoList));
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  if (name === "" && dueDate !== "") {
    alert("Write something in the input");
    return;
  } else if (dueDate === "" && name !== "") {
    alert("select a date");
    return;
  } else if (dueDate === "" && name === "") {
    alert(
      "Everything is empty, \nWrite something in the input, and then select a date"
    );
    return;
  } else if (!isNaN(name)) {
    alert("Are you writting in binary? \nUse words.");
    return;
  }
  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}
function onEnter(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
