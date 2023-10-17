const todoList = JSON.parse(localStorage.getItem("todo"));
renderTodoList();

document.querySelector(".add-todo-button").addEventListener("click", () => {
  addTodo();
});
document.querySelector(".js-name-input").addEventListener("keydown", () => {
  if (event.key === "Enter") {
    addTodo();
  }
});
/*gets whatever the user put into the input and saves it into an array that was defined outside of the function*/
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
/*this function grabs whatever was last put in the array, turns it into a content inside of an object (input that the user gives is 1 content inside the object and the date that they provide is saved into another content inside the object), then it gets put into a variable that represents a div, and whenever the user creates a new input, it just adds the new input into the div (todoListHTML += html), and then its later replaced with the contents inside of a div that already exists in html called js-todo-list. */
function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="js-delete-todo-button">Delete</button>`;
    todoListHTML += html;
  });
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });

  localStorage.setItem("todo", JSON.stringify(todoList));
}
